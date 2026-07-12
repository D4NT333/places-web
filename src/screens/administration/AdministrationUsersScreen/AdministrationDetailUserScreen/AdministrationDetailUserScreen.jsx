import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import LayoutScreen from "../../../../layout";

import UserOverviewCard from "./Components/UserOverviewCard";
import ReceivedReportsPanel from "./Components/ReceivedReportsPanel";
import ActivitySummaryCard from "./Components/ActivitySummaryCard";
import UserHistoryPanel from "./Components/UserHistoryPanel";
import ModerationPanel from "./Components/ModerationPanel";
import ReportDetailModal from "./Components/ReportDetailModal";

import getAdminUserDetailService from "../../../../services/api/administration/users/adminUserDetail.service.js";
import getAdminUserHistoryService from "../../../../services/api/administration/users/adminUserHistory.service.js";
import getAdminUserReportsService from "../../../../services/api/administration/users/adminUserReports.service.js";
import getAdminUserReportDetailService from "../../../../services/api/administration/users/adminUserReportDetail.service.js";

import styles from "./styles";

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

  const breadcrumbs = [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Administrar usuarios",
      to: "/administration/users",
    },
    {
      label: user?.name || userId || "Usuario",
    },
  ];

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
    navigate("/administration/users");
  };

  const handleModerateUser = () => {
  setIsModerationPanelOpen(true);
};

const handleCloseModerationPanel = () => {
  if (isModerating) {
    return;
  }

  setIsModerationPanelOpen(false);
};

const handleSubmitModeration = async (moderationData) => {
  try {
    setIsModerating(true);

    console.log("Moderación del usuario:", moderationData);

    /*
      Aquí irá tu servicio cuando hagamos el backend:

      await moderateAdminUserService(userId, moderationData);
    */

    setIsModerationPanelOpen(false);

    /*
      Cuando el servicio exista puedes recargar el usuario:

      await loadUserDetail();
    */
  } catch (error) {
    console.error("Error moderating user:", error);
  } finally {
    setIsModerating(false);
  }
};

const handleOpenHistoryItem = (item) => {
  switch (item.submissionType) {
    case "place":
      navigate(
        `/submissions/places/${item.submissionId}`
      );
      break;

    case "description":
      navigate(
        `/submissions/descriptions/${item.submissionId}`
      );
      break;

    case "photo":
      navigate(
        `/submissions/photos/${item.submissionId}`
      );
      break;

    case "report":
      // Por ahora solamente se muestra en el historial.
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
  try {
    setIsResolvingReport(true);

    console.log("Validar reporte:", {
      reportId,
      resolutionNote,
    });

    /*
      Aquí después irá el servicio PATCH:

      await resolveAdminReportService(reportId, {
        status: "resolved",
        resolutionNote,
      });
    */

    setSelectedReport(null);

    await loadUserReports();
  } catch (error) {
    console.error("Error validating report:", error);
  } finally {
    setIsResolvingReport(false);
  }
};

const handleDiscardReport = async ({
  reportId,
  resolutionNote,
}) => {
  try {
    setIsResolvingReport(true);

    console.log("Descartar reporte:", {
      reportId,
      resolutionNote,
    });

    /*
      Aquí después irá el servicio PATCH:

      await resolveAdminReportService(reportId, {
        status: "discarded",
        resolutionNote,
      });
    */

    setSelectedReport(null);

    await loadUserReports();
  } catch (error) {
    console.error("Error discarding report:", error);
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

        {!loadingDetail && errorMessage ? (
          <div style={styles.errorBox}>
            {errorMessage}
          </div>
        ) : null}

        {!loadingDetail && !errorMessage && user ? (
          <>
            <section style={styles.contentGrid}>
              <div style={styles.leftColumn}>
                <UserOverviewCard
                  user={user}
                  onModerate={handleModerateUser}
                >
                 <ReceivedReportsPanel
  reports={receivedReports}
  emptyMessage={reportsEmptyMessage}
  loading={loadingReports}
  loadingMore={loadingMoreReports}
  hasMore={reportsHasMore}
  onLoadMore={handleLoadMoreReports}
  onOpenReport={handleOpenReport}
/>
                </UserOverviewCard>

                <ActivitySummaryCard
  activity={activity}
  selectedWeekStart={selectedWeekStart}
  loading={loadingActivity}
  onWeekChange={handleWeekChange}
/>
              </div>

             <UserHistoryPanel
  history={history}
  loading={loadingHistory}
  loadingMore={loadingMoreHistory}
  hasMore={historyHasMore}
  onLoadMore={handleLoadMoreHistory}
  onOpenItem={handleOpenHistoryItem}
/>
            </section>

            <div style={styles.actionsRow}>
              <button
                type="button"
                style={styles.backButton}
                onClick={handleBack}
              >
                Volver
              </button>
            </div>
          </>
        ) : null}
      </main>

      <ModerationPanel
  isOpen={isModerationPanelOpen}
  user={user}
  isSubmitting={isModerating}
  onClose={handleCloseModerationPanel}
  onSubmit={handleSubmitModeration}
/>

<ReportDetailModal
  isOpen={Boolean(selectedReport)}
  report={selectedReport}
  isSubmitting={isResolvingReport}
  onClose={handleCloseReportModal}
  onValidate={handleValidateReport}
  onDiscard={handleDiscardReport}
  onOpenReporter={handleOpenReporter}
/>
    </LayoutScreen>
  );
}