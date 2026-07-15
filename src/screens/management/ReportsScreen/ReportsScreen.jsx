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
  setSelectedReport(report);
}

function handleCloseReportModal() {
  if (isResolvingReport) {
    return;
  }

  setSelectedReport(null);
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
    navigate(`/administration/places/${id}`);
  }
}

async function handleValidateReport({
  reportId,
  resolutionNote,
}) {
  try {
    setIsResolvingReport(true);

    console.log("Validar reporte:", {
      reportId,
      resolutionNote,
    });

    /*
      Después conectaremos algo como:

      await resolveReportService(reportId, {
        status: "resolved",
        resolutionNote,
      });
    */

    setReports((currentReports) =>
      currentReports.map((report) =>
        report.id === reportId
          ? {
              ...report,
              status: "resolved",
              statusLabel: "Resuelto",
              resolutionNote,
              resolvedAt: new Date().toISOString(),
            }
          : report
      )
    );

    setSelectedReport(null);
  } catch (error) {
    console.error("Error validando reporte:", error);
  } finally {
    setIsResolvingReport(false);
  }
}

async function handleDiscardReport({
  reportId,
  resolutionNote,
}) {
  try {
    setIsResolvingReport(true);

    console.log("Descartar reporte:", {
      reportId,
      resolutionNote,
    });

    /*
      Después conectaremos algo como:

      await resolveReportService(reportId, {
        status: "discarded",
        resolutionNote,
      });
    */

    setReports((currentReports) =>
      currentReports.map((report) =>
        report.id === reportId
          ? {
              ...report,
              status: "dismissed",
              statusLabel: "Descartado",
              resolutionNote,
              resolvedAt: new Date().toISOString(),
            }
          : report
      )
    );

    setSelectedReport(null);
  } catch (error) {
    console.error("Error descartando reporte:", error);
  } finally {
    setIsResolvingReport(false);
  }
}

function handleOpenReporter(reporterId) {
  if (!reporterId) {
    return;
  }

  setSelectedReport(null);

  navigate(`/administration/users/${reporterId}`);
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
  onClose={handleCloseReportModal}
  onValidate={handleValidateReport}
  onDiscard={handleDiscardReport}
  onOpenRelated={handleOpenRelated}
  onOpenReporter={handleOpenReporter}
/>
    </LayoutScreen>
  );
}