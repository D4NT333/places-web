import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../layout";

import styles from "./styles";

import {
  ReportFilters,
  ReportStats,
  ReportsTable,
  ReportDetailModal,
} from "./Components";

import { REPORT_STATUS_FILTERS } from "./data";

import getReportsService from "../../../services/api/reports/read/getReports.service";

import resolveAdminPlaceReportService from "../../../services/api/administration/places/resolveAdminPlaceReport.service";

const PAGE_LIMIT = 15;

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Reportes",
  },
];

function getReportTarget(report) {
  return String(
    report?.reportTarget ||
    report?.target ||
    report?.type ||
    report?.relatedTo?.type ||
    "general"
  )
    .trim()
    .toLowerCase();
}

function getReportPlaceId(report) {
  return (
    report?.place?.placeId ||
    report?.relatedTo?.id ||
    report?.placeId ||
    null
  );
}

export default function ReportsScreen() {
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState("all");

  const [reports, setReports] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loadedBatches, setLoadedBatches] = useState(0);

  const reportsCount = reports.length;

  const [selectedReport, setSelectedReport] = useState(null);
const [isResolvingReport, setIsResolvingReport] = useState(false);

const [
  reportResolutionError,
  setReportResolutionError,
] = useState("");

  const fetchReports = useCallback(
    async ({ reset = false } = {}) => {
      try {
        if (reset) {
          setLoading(true);
          setErrorMessage("");
        } else {
          setLoadingMore(true);
        }

        const result = await getReportsService({
          status: selectedStatus,
          limit: PAGE_LIMIT,
          cursor: reset ? null : nextCursor,
        });

        const newReports = Array.isArray(result.reports)
          ? result.reports
          : [];

        setReports((currentReports) => {
          if (reset) {
            return newReports;
          }

          const existingIds = new Set(
            currentReports.map((report) => report.id)
          );

          const uniqueNewReports = newReports.filter(
            (report) => !existingIds.has(report.id)
          );

          return [...currentReports, ...uniqueNewReports];
        });

        setNextCursor(result.pagination?.nextCursor || null);
        setHasMore(Boolean(result.pagination?.hasMore));

        setLoadedBatches((currentValue) => {
          if (reset) {
            return newReports.length > 0 ? 1 : 0;
          }

          return newReports.length > 0 ? currentValue + 1 : currentValue;
        });
      } catch (error) {
        console.error("Error al cargar reportes:", error);
        setErrorMessage(
          error?.message || "No se pudieron cargar los reportes."
        );

        if (reset) {
          setReports([]);
          setNextCursor(null);
          setHasMore(false);
          setLoadedBatches(0);
        }
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [selectedStatus, nextCursor]
  );

  useEffect(() => {
    setReports([]);
    setNextCursor(null);
    setHasMore(false);
    setLoadedBatches(0);
    fetchReports({ reset: true });
  }, [selectedStatus]);

  const handleChangeStatus = (status) => {
    if (status === selectedStatus) return;

    setSelectedStatus(status);
  };

function handleOpenReport(report) {
  setReportResolutionError("");
  setSelectedReport(report);
}

function handleCloseReportModal() {
  if (isResolvingReport) {
    return;
  }

  setSelectedReport(null);
  setReportResolutionError("");
}

function handleOpenRelated({ targetType, id }) {

  
  if (!id) {
    return;
  }

  setSelectedReport(null);

  if (targetType === "user") {
    navigate(`/administration/users/${id}`);
    return;
  }

if (targetType === "place") {
  setReportResolutionError("");

  navigate(
    `/administration/places/${encodeURIComponent(id)}`,
    {
      state: {
        from: "reports",

        returnTo: "/management/reports",

        returnLabel: "Reportes",

        parentBreadcrumb: {
          label: "Reportes",
          to: "/management/reports",
        },
      },
    }
  );
}
}

async function handleValidateReport({
  reportId,
  resolutionNote,
}) {
  if (
    !selectedReport ||
    !reportId ||
    isResolvingReport
  ) {
    return;
  }

  const targetType =
    getReportTarget(
      selectedReport
    );

  if (targetType === "user") {
    setReportResolutionError(
      "La resolución de reportes de usuarios todavía está en construcción."
    );

    return;
  }

  if (targetType === "general") {
    setReportResolutionError(
      "La resolución de reportes generales todavía no está implementada."
    );

    return;
  }

  if (targetType !== "place") {
    setReportResolutionError(
      "El tipo de reporte no es compatible con esta acción."
    );

    return;
  }

  const placeId =
    getReportPlaceId(
      selectedReport
    );

  if (!placeId) {
    setReportResolutionError(
      "No se encontró el lugar relacionado con el reporte."
    );

    return;
  }

  try {
    setIsResolvingReport(true);
    setReportResolutionError("");
    setErrorMessage("");

    const result =
      await resolveAdminPlaceReportService({
        placeId,
        reportId,
        decision: "resolved",
        resolutionNote,
      });

    const resolvedAt =
      result.resolvedAt ||
      result.admin?.resolvedAt ||
      new Date().toISOString();

    const resolvedBy =
      result.resolvedBy ||
      result.admin?.resolvedBy ||
      null;

    setReports((currentReports) =>
      currentReports.map((report) => {
        const currentReportId =
          report.reportId ||
          report.id;

        if (
          currentReportId !== reportId
        ) {
          return report;
        }

        return {
          ...report,

          status: "resolved",
          statusId: "resolved",
          statusLabel: "Resuelto",
          displayStatus: "Resuelto",

          resolutionNote,
          resolvedAt,
          resolvedBy,

          admin: {
            ...report.admin,

            resolutionNote,
            resolvedAt,
            resolvedBy,
          },
        };
      })
    );

    setSelectedReport(null);
    setReportResolutionError("");
  } catch (error) {
    console.error(
      "Error validando reporte:",
      error
    );

    setReportResolutionError(
      error?.response?.data?.message ||
      error?.message ||
      "No se pudo validar el reporte."
    );
  } finally {
    setIsResolvingReport(false);
  }
}

async function handleDiscardReport({
  reportId,
  resolutionNote,
}) {
  if (
    !selectedReport ||
    !reportId ||
    isResolvingReport
  ) {
    return;
  }

  const targetType =
    getReportTarget(
      selectedReport
    );

  if (targetType === "user") {
    setReportResolutionError(
      "La resolución de reportes de usuarios todavía está en construcción."
    );

    return;
  }

  if (targetType === "general") {
    setReportResolutionError(
      "La resolución de reportes generales todavía no está implementada."
    );

    return;
  }

  if (targetType !== "place") {
    setReportResolutionError(
      "El tipo de reporte no es compatible con esta acción."
    );

    return;
  }

  const placeId =
    getReportPlaceId(
      selectedReport
    );

  if (!placeId) {
    setReportResolutionError(
      "No se encontró el lugar relacionado con el reporte."
    );

    return;
  }

  try {
    setIsResolvingReport(true);
    setReportResolutionError("");
    setErrorMessage("");

    const result =
      await resolveAdminPlaceReportService({
        placeId,
        reportId,
        decision: "dismissed",
        resolutionNote,
      });

    const resolvedAt =
      result.resolvedAt ||
      result.admin?.resolvedAt ||
      new Date().toISOString();

    const resolvedBy =
      result.resolvedBy ||
      result.admin?.resolvedBy ||
      null;

    setReports((currentReports) =>
      currentReports.map((report) => {
        const currentReportId =
          report.reportId ||
          report.id;

        if (
          currentReportId !== reportId
        ) {
          return report;
        }

        return {
          ...report,

          status: "dismissed",
          statusId: "dismissed",
          statusLabel: "Descartado",
          displayStatus: "Descartado",

          resolutionNote,
          resolvedAt,
          resolvedBy,

          admin: {
            ...report.admin,

            resolutionNote,
            resolvedAt,
            resolvedBy,
          },
        };
      })
    );

    setSelectedReport(null);
    setReportResolutionError("");
  } catch (error) {
    console.error(
      "Error descartando reporte:",
      error
    );

    setReportResolutionError(
      error?.response?.data?.message ||
      error?.message ||
      "No se pudo descartar el reporte."
    );
  } finally {
    setIsResolvingReport(false);
  }
}

function handleOpenReporter(reporterId) {
  if (!reporterId) {
    return;
  }

  setSelectedReport(null);
  setReportResolutionError("");

  navigate(
    `/administration/users/${encodeURIComponent(
      reporterId
    )}`,
    {
      state: {
        from: "reports",

        returnTo: "/management/reports",

        returnLabel: "Reportes",

        parentBreadcrumb: {
          label: "Reportes",
          to: "/management/reports",
        },
      },
    }
  );
}


  function handleLoadMore() {
    if (loading || loadingMore || !hasMore) return;

    fetchReports({ reset: false });
  }

  const tableMessage = useMemo(() => {
    if (loading) {
      return "Cargando reportes...";
    }

    if (errorMessage) {
      return errorMessage;
    }

    if (reports.length === 0) {
      return "No hay reportes para mostrar.";
    }

    return "";
  }, [loading, errorMessage, reports.length]);

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Reportes</h1>

            <p style={styles.subtitle}>
              Gestiona reportes enviados por usuarios sobre el sistema,
              lugares y perfiles.
            </p>

            <ReportStats
              reportsCount={reportsCount}
              batchesCount={loadedBatches}
            />
          </div>

          <ReportFilters
            filters={REPORT_STATUS_FILTERS}
            selectedStatus={selectedStatus}
            onChangeStatus={handleChangeStatus}
          />
        </div>

        {tableMessage ? (
          <div style={styles.stateBox}>
            <p style={styles.stateText}>{tableMessage}</p>

            {errorMessage ? (
              <button
                type="button"
                style={styles.retryButton}
                onClick={() => fetchReports({ reset: true })}
              >
                Reintentar
              </button>
            ) : null}
          </div>
        ) : (
          <ReportsTable
            reports={reports}
            onOpenReport={handleOpenReport}
          />
        )}

        {reports.length > 0 && hasMore ? (
          <div style={styles.loadMoreWrapper}>
            <button
              type="button"
              style={styles.loadMoreButton}
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? "Cargando..." : "Cargar más reportes"}
            </button>
          </div>
        ) : null}
      </div>
  <ReportDetailModal
  isOpen={Boolean(selectedReport)}
  report={selectedReport}
  loading={false}
  isSubmitting={isResolvingReport}

  submitError={reportResolutionError}

  onClose={handleCloseReportModal}
  onValidate={handleValidateReport}
  onDiscard={handleDiscardReport}
  onOpenRelated={handleOpenRelated}
  onOpenReporter={handleOpenReporter}
/>
    </LayoutScreen>
  );
}