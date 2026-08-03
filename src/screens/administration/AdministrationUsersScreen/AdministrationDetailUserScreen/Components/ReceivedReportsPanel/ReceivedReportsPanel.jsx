import React, {
  useMemo,
  useState,
} from "react";

import {
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  FileWarning,
  Inbox,
  XCircle,
} from "lucide-react";

import styles from "./styles";

const STATUS_STYLES = {
  pending: styles.statusPending,

  resolved: styles.statusResolved,

  dismissed: styles.statusDismissed,
};

export default function ReceivedReportsPanel({
  reports = [],
  emptyMessage =
    "Este usuario no tiene reportes recibidos.",
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  onOpenReport,
}) {
  const [
    hoveredReportId,
    setHoveredReportId,
  ] = useState(null);

  const totals = useMemo(() => {
    return reports.reduce(
      (result, report) => {
        const status =
          String(
            report.status ||
              "pending",
          )
            .trim()
            .toLowerCase();

        if (status === "resolved") {
          result.resolved += 1;
        } else if (
          status === "dismissed"
        ) {
          result.dismissed += 1;
        } else {
          result.pending += 1;
        }

        return result;
      },
      {
        pending: 0,
        resolved: 0,
        dismissed: 0,
      },
    );
  }, [reports]);

  function handleListScroll(event) {
    const target =
      event.currentTarget;

    const distanceFromBottom =
      target.scrollHeight -
      target.scrollTop -
      target.clientHeight;

    if (
      distanceFromBottom < 120 &&
      hasMore &&
      !loadingMore
    ) {
      onLoadMore?.();
    }
  }

  const summaryItems = [
    {
      key: "pending",
      label: "Pendientes",
      value: totals.pending,
      icon: Clock3,
      style: styles.summaryPending,
    },

    {
      key: "resolved",
      label: "Resueltos",
      value: totals.resolved,
      icon: CheckCircle2,
      style: styles.summaryResolved,
    },

    {
      key: "dismissed",
      label: "Descartados",
      value: totals.dismissed,
      icon: XCircle,
      style: styles.summaryDismissed,
    },
  ];

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.heading}>
          <div style={styles.headerIcon}>
            <ClipboardList
              size={60}
              strokeWidth={2.1}
            />
          </div>

          <div>
            <h2 style={styles.title}>
              Reportes recibidos
            </h2>

            <p style={styles.subtitle}>
              Incidencias registradas contra
              este usuario.
            </p>
          </div>
        </div>

        <span style={styles.totalPill}>
          {reports.length} reportes
        </span>
      </header>

      <div
        style={styles.list}
        onScroll={handleListScroll}
      >
        {loading ? (
          <div style={styles.emptyState}>
            Cargando reportes...
          </div>
        ) : null}

        {!loading &&
        reports.length > 0
          ? reports.map((report) => {
              const reportId =
                report.id;

              const normalizedStatus =
                String(
                  report.status ||
                    "pending",
                )
                  .trim()
                  .toLowerCase();

              const isHovered =
                hoveredReportId ===
                reportId;

              return (
                <button
                  key={reportId}
                  type="button"
                  style={{
                    ...styles.reportItem,

                    ...(isHovered
                      ? styles.reportItemHovered
                      : {}),
                  }}
                  onMouseEnter={() =>
                    setHoveredReportId(
                      reportId,
                    )
                  }
                  onMouseLeave={() =>
                    setHoveredReportId(
                      null,
                    )
                  }
                  onClick={() =>
                    onOpenReport?.(
                      reportId,
                    )
                  }
                >
                  <div style={styles.reportIcon}>
                    <FileWarning
                      size={40}
                      strokeWidth={2.1}
                    />
                  </div>

                  <div style={styles.reportContent}>
                    <strong style={styles.reason}>
                      {report.reason ||
                        "Reporte recibido"}
                    </strong>

                    <span style={styles.reportDate}>
                      {report.date ||
                        "Sin fecha"}
                    </span>
                  </div>

                  <span
                    style={{
                      ...styles.statusPill,

                      ...(STATUS_STYLES[
                        normalizedStatus
                      ] ||
                        styles.statusPending),
                    }}
                  >
                    {report.statusLabel ||
                      report.status ||
                      "Pendiente"}
                  </span>

                  <ChevronRight
                    size={22}
                    color="#78a0c8"
                  />
                </button>
              );
            })
          : null}

        {!loading &&
        reports.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>
              <Inbox
                size={58}
                strokeWidth={1.65}
              />
            </div>

            <strong style={styles.emptyTitle}>
              Sin reportes recientes
            </strong>

            <span style={styles.emptyText}>
              {emptyMessage}
            </span>
          </div>
        ) : null}

        {loadingMore ? (
          <div style={styles.loadingMore}>
            Cargando más reportes...
          </div>
        ) : null}

        {!loading &&
        !loadingMore &&
        reports.length > 0 &&
        !hasMore ? (
          <div style={styles.endMessage}>
            <CheckCircle2
              size={40}
              strokeWidth={2.3}
            />

            Lista completa
          </div>
        ) : null}
      </div>
    </section>
  );
}