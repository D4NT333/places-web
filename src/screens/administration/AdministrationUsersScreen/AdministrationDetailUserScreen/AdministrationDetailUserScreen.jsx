import React, { useEffect, useMemo, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  UserRound,
  ArrowLeft,
} from "lucide-react";

import LayoutScreen from "../../../../layout";

import UserOverviewCard from "./Components/UserOverviewCard";
import ReceivedReportsPanel from "./Components/ReceivedReportsPanel";
import ActivitySummaryCard from "./Components/ActivitySummaryCard";
import UserHistoryPanel from "./Components/UserHistoryPanel";
import ReportDetailModal from "../../../../screens/management/ReportsScreen/Components/ReportDetailModal";
import UserModerationModal from "./Components/UserModerationModal";

import getAdminUserDetailService from "../../../../services/api/administration/users/read/adminUserDetail.service.js";
import getAdminUserHistoryService from "../../../../services/api/administration/users/read/adminUserHistory.service.js";
import getAdminUserReportsService from "../../../../services/api/administration/users/read/adminUserReports.service.js";
import getAdminUserReportDetailService from "../../../../services/api/administration/users/read/adminUserReportDetail.service.js";

import moderateAdminUserService from "../../../../services/api/administration/users/update/moderateAdminUser.service.js";
import resolveAdminUserReportService from "../../../../services/api/administration/users/update/resolveAdminUserReport.service.js";

import styles from "./styles.js";

const HISTORY_PAGE_LIMIT = 15;
const REPORTS_PAGE_LIMIT = 15;

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function normalizeUserForView(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id || user.uid,
    uid: user.uid || user.id,

    name: user.name || "Usuario sin nombre",
    email: user.email || "Sin correo",

    profile: user.profile || "Sin perfil",

    birthdate: user.birthday
      ? formatDate(user.birthday)
      : "Sin fecha",

    registeredAt: formatDate(user.createdAt),
    lastActivityAt: formatDate(user.lastLoginAt || user.updatedAt),

    status: user.status || "active",
    statusLabel: user.statusLabel || "Activo",

    photoUrl: user.photoURL || null,

    provider: user.provider || null,
    providerLabel: user.providerLabel || "Sin proveedor",
  };
}

function normalizeReportsForView(reports) {
  return (reports || []).map((report) => ({
    id: report.id,

    reason:
      report.reasonLabel ||
      report.reason ||
      "Reporte recibido",

    message:
      report.message ||
      "Sin descripción",

    date: formatDate(report.createdAt),

    status:
      report.status ||
      "pending",

    statusLabel:
      report.statusLabel ||
      "Pendiente",

    createdBy:
      report.createdBy ||
      null,
  }));
}

function normalizeActivityForView(activity) {
  return {
    total: activity?.totalContributions || 0,

    pending: activity?.pendingCount || 0,
    approved: activity?.approvedCount || 0,
    rejected: activity?.rejectedCount || 0,

    placesSent: activity?.placesCount || 0,
    descriptionsSent: activity?.descriptionsCount || 0,
    photosSent: activity?.photosCount || 0,
    reportsSent: activity?.reportsSentCount || 0,

    weeklyActivity:
      activity?.weeklyActivity || [],

    selectedWeek:
      activity?.selectedWeek || null,

    availableWeeks:
      activity?.availableWeeks || [],
  };
}

function normalizeHistoryForView(history) {
  return (history || []).map((item) => ({
    id: item.id || item.submissionId,
    submissionId: item.submissionId || item.id,

    type: item.typeLabel || "Propuesta",
    submissionType: item.type,

    relatedLabel:
      item.relatedLabel ||
      item.placeName ||
      "Sin elemento relacionado",

    date: formatDate(item.createdAt),

    status: item.status,
    statusLabel: item.statusLabel || "Pendiente",

    placeName: item.placeName || "Sin lugar",
    rawCollection: item.rawCollection,
  }));
}

export default function AdministrationDetailUserScreen() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const location = useLocation();

const navigationState =
  location.state || {};

  const [userDetail, setUserDetail] = useState(null);

  const [selectedWeekStart, setSelectedWeekStart] =
  useState(null);

const [loadingActivity, setLoadingActivity] =
  useState(false);

  const [historyItems, setHistoryItems] = useState([]);
  const [historyCursor, setHistoryCursor] = useState(null);
  const [historyHasMore, setHistoryHasMore] = useState(false);

  const [reportsItems, setReportsItems] = useState([]);
  const [reportsCursor, setReportsCursor] = useState(null);
  const [reportsHasMore, setReportsHasMore] = useState(false);
  const [reportsEmptyMessage, setReportsEmptyMessage] = useState(
    "Este usuario no tiene reportes recibidos."
  );

  const [loadingDetail, setLoadingDetail] = useState(true);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [loadingMoreHistory, setLoadingMoreHistory] = useState(false);
  const [loadingReports, setLoadingReports] = useState(false);
  const [loadingMoreReports, setLoadingMoreReports] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [isModerationPanelOpen, setIsModerationPanelOpen] =
  useState(false);

const [isModerating, setIsModerating] = useState(false);

const [
  moderationSubmitError,
  setModerationSubmitError,
] = useState("");


const [selectedReport, setSelectedReport] = useState(null);

const [loadingReportDetail, setLoadingReportDetail] =
  useState(false);

const [reportDetailError, setReportDetailError] =
  useState("");

const [isResolvingReport, setIsResolvingReport] =
  useState(false);

  const user = useMemo(() => {
    return normalizeUserForView(userDetail?.user);
  }, [userDetail]);

  const activity = useMemo(() => {
    return normalizeActivityForView(userDetail?.activity);
  }, [userDetail]);

  const history = useMemo(() => {
    return normalizeHistoryForView(historyItems);
  }, [historyItems]);

  const receivedReports = useMemo(() => {
    return normalizeReportsForView(reportsItems);
  }, [reportsItems]);

  const breadcrumbs = useMemo(() => {
  const baseBreadcrumbs = [
    {
      label: "Inicio",
      to: "/",
    },
  ];

  if (
    navigationState.from === "place-review" &&
    navigationState.returnTo
  ) {
    if (navigationState.parentBreadcrumb) {
      baseBreadcrumbs.push(
        navigationState.parentBreadcrumb
      );
    }

    baseBreadcrumbs.push({
      label:
        navigationState.returnLabel ||
        navigationState.placeName ||
        "Detalle del lugar",

      to: navigationState.returnTo,
    });
  } else {
    baseBreadcrumbs.push({
      label: "Administrar usuarios",
      to: "/administration/users",
    });
  }

  baseBreadcrumbs.push({
    label:
      user?.name ||
      userId ||
      "Usuario",
  });

  return baseBreadcrumbs;
}, [
  navigationState,
  user?.name,
  userId,
]);

 const loadUserDetail = async ({
  weekStart = null,
  activityOnly = false,
} = {}) => {
  try {
    if (activityOnly) {
      setLoadingActivity(true);
    } else {
      setLoadingDetail(true);
      setErrorMessage("");
    }

    const result =
      await getAdminUserDetailService(
        userId,
        {
          weekStart,
        }
      );

    setUserDetail(result);

    if (!selectedWeekStart) {
      setSelectedWeekStart(
        result.activity?.selectedWeek?.start ||
          null
      );
    }
  } catch (error) {
    console.error(
      "Error loading admin user detail:",
      error
    );

    if (!activityOnly) {
      setErrorMessage(
        "No se pudo cargar el detalle del usuario. Intenta nuevamente."
      );
    }
  } finally {
    setLoadingDetail(false);
    setLoadingActivity(false);
  }
};

  const loadUserHistory = async ({
    cursor = null,
    append = false,
  } = {}) => {
    try {
      if (append) {
        setLoadingMoreHistory(true);
      } else {
        setLoadingHistory(true);
      }

      const result = await getAdminUserHistoryService(userId, {
        limit: HISTORY_PAGE_LIMIT,
        cursor,
      });

      const newHistory = result.history || [];

      setHistoryItems((currentItems) => {
        if (!append) return newHistory;

        const existingIds = new Set(
          currentItems.map((item) => item.id)
        );

        const filteredNewItems = newHistory.filter(
          (item) => !existingIds.has(item.id)
        );

        return [...currentItems, ...filteredNewItems];
      });

      setHistoryCursor(result.nextCursor || null);
      setHistoryHasMore(Boolean(result.hasMore));
    } catch (error) {
      console.error("Error loading admin user history:", error);
    } finally {
      setLoadingHistory(false);
      setLoadingMoreHistory(false);
    }
  };

  const loadUserReports = async ({
    cursor = null,
    append = false,
  } = {}) => {
    try {
      if (append) {
        setLoadingMoreReports(true);
      } else {
        setLoadingReports(true);
      }

      const result = await getAdminUserReportsService(userId, {
        limit: REPORTS_PAGE_LIMIT,
        cursor,
      });

      const newReports = result.reports || [];

      setReportsItems((currentItems) => {
        if (!append) return newReports;

        const existingIds = new Set(
          currentItems.map((item) => item.id)
        );

        const filteredNewItems = newReports.filter(
          (item) => !existingIds.has(item.id)
        );

        return [...currentItems, ...filteredNewItems];
      });

      setReportsCursor(result.nextCursor || null);
      setReportsHasMore(Boolean(result.hasMore));
      setReportsEmptyMessage(
        result.emptyMessage ||
          "Este usuario no tiene reportes recibidos."
      );
    } catch (error) {
      console.error("Error loading admin user reports:", error);
    } finally {
      setLoadingReports(false);
      setLoadingMoreReports(false);
    }
  };

  useEffect(() => {
    setUserDetail(null);

    setHistoryItems([]);
    setHistoryCursor(null);
    setHistoryHasMore(false);

    setReportsItems([]);
    setReportsCursor(null);
    setReportsHasMore(false);

    loadUserDetail();
    loadUserHistory();
    loadUserReports();
  }, [userId]);

  const handleLoadMoreHistory = () => {
    if (
      loadingHistory ||
      loadingMoreHistory ||
      !historyHasMore ||
      !historyCursor
    ) {
      return;
    }

    loadUserHistory({
      cursor: historyCursor,
      append: true,
    });
  };

  const handleOpenRelated = ({
  targetType,
  id,
}) => {
  if (!id) {
    return;
  }

  setSelectedReport(null);
  setReportDetailError("");

  if (targetType === "user") {
    if (id === userId) {
      return;
    }

    navigate(
      `/administration/users/${encodeURIComponent(id)}`
    );

    return;
  }

  if (targetType === "place") {
    navigate(
      `/administration/places/${encodeURIComponent(id)}`
    );
  }
};

  const handleLoadMoreReports = () => {
    if (
      loadingReports ||
      loadingMoreReports ||
      !reportsHasMore ||
      !reportsCursor
    ) {
      return;
    }

    loadUserReports({
      cursor: reportsCursor,
      append: true,
    });
  };

  const handleBack = () => {
  if (navigationState.returnTo) {
    navigate(navigationState.returnTo, {
      state: navigationState.returnState || null,
    });

    return;
  }

  navigate("/administration/users");
};

 const handleModerateUser = () => {
  setModerationSubmitError("");
  setIsModerationPanelOpen(true);
};

const handleCloseModerationPanel = () => {
  if (isModerating) {
    return;
  }

  setModerationSubmitError("");
  setIsModerationPanelOpen(false);
};

const handleSubmitModeration = async (
  moderationData
) => {
  if (
    !userId ||
    isModerating
  ) {
    return;
  }

  try {
    setIsModerating(true);
    setModerationSubmitError("");

    const result =
      await moderateAdminUserService({
        userId,

        moderationType:
          moderationData.moderationType,

        reason:
          moderationData.reason,

        reasonLabel:
          moderationData.reasonLabel,

        message:
          moderationData.message,
      });

    console.log(
      "Moderación aplicada:",
      result
    );

    setIsModerationPanelOpen(false);

    /*
     * Recargamos el usuario para mostrar:
     * active / warned / banned
     * y el nuevo contador.
     */
    await loadUserDetail();

    /*
     * Recargamos historial porque se creó
     * moderationHistory.
     */
    await loadUserHistory();
  } catch (error) {
    console.error(
      "Error moderating user:",
      error
    );

    setModerationSubmitError(
      error?.response?.data?.message ||
        error?.message ||
        "No se pudo aplicar la medida."
    );
  } finally {
    setIsModerating(false);
  }
};


const handleOpenHistoryItem = (item) => {
  const navigationState = {
    from: "user-history",

    returnTo: `/administration/users/${userId}`,

    returnLabel:
      user?.name ||
      "Detalle del usuario",

    userId,

    userName:
      user?.name ||
      "Usuario",

    selectedWeekStart,
  };

  switch (item.submissionType) {
    case "place":
      navigate(
        `/submissions/places/${item.submissionId}`,
        {
          state: navigationState,
        }
      );
      break;

    case "description":
      navigate(
        `/submissions/descriptions/${item.submissionId}`,
        {
          state: navigationState,
        }
      );
      break;

    case "photo":
      navigate(
        `/submissions/photos/${item.submissionId}`,
        {
          state: navigationState,
        }
      );
      break;

    case "report":
      // Lo resolvemos después.
      break;

    default:
      console.warn(
        "Tipo de movimiento desconocido:",
        item
      );
  }
};

const handleOpenReport = async (reportId) => {
  try {
    setLoadingReportDetail(true);
    setReportDetailError("");

    const result =
      await getAdminUserReportDetailService(
        userId,
        reportId
      );

    setSelectedReport({
      ...result.report,
      date: formatDate(result.report.createdAt),
    });
  } catch (error) {
    console.error(
      "Error loading report detail:",
      error
    );

    setReportDetailError(
      error.response?.data?.message ||
        "No se pudo cargar el detalle del reporte."
    );
  } finally {
    setLoadingReportDetail(false);
  }
};

const handleCloseReportModal = () => {
  if (isResolvingReport) {
    return;
  }

  setSelectedReport(null);
  setReportDetailError("");
};

const handleValidateReport = async ({
  reportId,
  resolutionNote,
}) => {
  if (
    !reportId ||
    isResolvingReport
  ) {
    return;
  }

  try {
    setIsResolvingReport(true);
    setReportDetailError("");

    const result =
      await resolveAdminUserReportService({
        userId,
        reportId,

        decision:
          "resolved",

        resolutionNote,
      });

    console.log(
      "Reporte validado:",
      result
    );

    setSelectedReport(null);

    /*
     * El reporte cambió a resolved.
     */
    await loadUserReports();

    /*
     * El usuario pudo pasar:
     * active → warned
     * warned → banned
     */
    await loadUserDetail();

    /*
     * Se creó moderationHistory.
     */
    await loadUserHistory();
  } catch (error) {
    console.error(
      "Error validating report:",
      error
    );

    setReportDetailError(
      error?.response?.data?.message ||
        error?.message ||
        "No se pudo validar el reporte."
    );
  } finally {
    setIsResolvingReport(false);
  }
};

const handleDiscardReport = async ({
  reportId,
  resolutionNote,
}) => {
  if (
    !reportId ||
    isResolvingReport
  ) {
    return;
  }

  try {
    setIsResolvingReport(true);
    setReportDetailError("");

    const result =
      await resolveAdminUserReportService({
        userId,
        reportId,

        /*
         * Tu backend acepta dismissed
         * y lo normaliza internamente.
         */
        decision:
          "dismissed",

        resolutionNote,
      });

    console.log(
      "Reporte descartado:",
      result
    );

    setSelectedReport(null);

    await loadUserReports();
  } catch (error) {
    console.error(
      "Error discarding report:",
      error
    );

    setReportDetailError(
      error?.response?.data?.message ||
        error?.message ||
        "No se pudo descartar el reporte."
    );
  } finally {
    setIsResolvingReport(false);
  }
};


const handleOpenReporter = (reporterId) => {
  if (!reporterId) {
    return;
  }

  setSelectedReport(null);

  navigate(`/administration/users/${reporterId}`);
};

const handleWeekChange = async (weekStart) => {
  if (
    !weekStart ||
    weekStart === selectedWeekStart ||
    loadingActivity
  ) {
    return;
  }

  setSelectedWeekStart(weekStart);

  await loadUserDetail({
    weekStart,
    activityOnly: true,
  });
};

return (
  <LayoutScreen breadcrumbs={breadcrumbs}>
    <main style={styles.container}>

      {loadingDetail ? (
        <div style={styles.stateBox}>
          Cargando detalle del usuario...
        </div>
      ) : null}

      {!loadingDetail &&
      errorMessage ? (
        <div style={styles.errorBox}>
          {errorMessage}
        </div>
      ) : null}

      {!loadingDetail &&
      !errorMessage &&
      user ? (
        <section style={styles.dashboardGrid}>
          <div style={styles.userArea}>
            <UserOverviewCard
              user={user}
              activity={activity}
              onModerate={
                handleModerateUser
              }
            />
          </div>

          <div style={styles.reportsArea}>
            <ReceivedReportsPanel
              reports={receivedReports}
              emptyMessage={
                reportsEmptyMessage
              }
              loading={loadingReports}
              loadingMore={
                loadingMoreReports
              }
              hasMore={reportsHasMore}
              onLoadMore={
                handleLoadMoreReports
              }
              onOpenReport={
                handleOpenReport
              }
            />
          </div>

          <div style={styles.activityArea}>
            <ActivitySummaryCard
              activity={activity}
              selectedWeekStart={
                selectedWeekStart
              }
              loading={loadingActivity}
              onWeekChange={
                handleWeekChange
              }
            />
          </div>

      <div style={styles.historyArea}>
  <UserHistoryPanel
    history={history}
    loading={loadingHistory}
    loadingMore={
      loadingMoreHistory
    }
    hasMore={historyHasMore}
    onLoadMore={
      handleLoadMoreHistory
    }
    onOpenItem={
      handleOpenHistoryItem
    }
  />

  <div style={styles.historyActions}>
    <button
      type="button"
      style={styles.backButton}
      onClick={handleBack}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform =
          "translateY(-2px)";

        event.currentTarget.style.boxShadow =
          "0 12px 26px rgba(31, 73, 116, 0.17)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform =
          "translateY(0)";

        event.currentTarget.style.boxShadow =
          "0 8px 20px rgba(31, 73, 116, 0.12)";
      }}
    >
      <ArrowLeft
        size={60}
        strokeWidth={2.4}
      />

      Volver
    </button>
  </div>
</div>
        </section>
      ) : null}
    </main>

    <UserModerationModal
      isOpen={
        isModerationPanelOpen
      }
      user={user}
      isSubmitting={isModerating}
      submitError={
        moderationSubmitError
      }
      onClose={
        handleCloseModerationPanel
      }
      onSubmit={
        handleSubmitModeration
      }
    />

    <ReportDetailModal
      isOpen={
        Boolean(selectedReport)
      }
      report={selectedReport}
      loading={
        loadingReportDetail
      }
      isSubmitting={
        isResolvingReport
      }
      submitError={
        reportDetailError
      }
      onClose={
        handleCloseReportModal
      }
      onValidate={
        handleValidateReport
      }
      onDiscard={
        handleDiscardReport
      }
      onOpenRelated={
        handleOpenRelated
      }
      onOpenReporter={
        handleOpenReporter
      }
    />
  </LayoutScreen>
);
}