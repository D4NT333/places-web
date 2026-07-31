import React from "react";

import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  FileWarning,
  Flag,
  LoaderCircle,
  SearchCheck,
  XCircle,
} from "lucide-react";

import styles from "./styles";

function getStatusPillStyle(status) {
  const statusStyles = {
    pending: {
      ...styles.statusPillPending,
    },

    in_review: {
      ...styles.statusPillReview,
    },

    resolved: {
      ...styles.statusPillResolved,
    },

    dismissed: {
      ...styles.statusPillDismissed,
    },

    discarded: {
      ...styles.statusPillDismissed,
    },
  };

  return {
    ...styles.statusPill,

    ...(
      statusStyles[status] ||
      styles.statusPillDefault
    ),
  };
}

function getStatusIcon(status) {
  if (status === "resolved") {
    return (
      <CheckCircle2
        size={40}
        strokeWidth={2.2}
      />
    );
  }

  if (
    status === "dismissed" ||
    status === "discarded"
  ) {
    return (
      <XCircle
        size={40}
        strokeWidth={2.2}
      />
    );
  }

  if (status === "in_review") {
    return (
      <SearchCheck
        size={40}
        strokeWidth={2.2}
      />
    );
  }

  return (
    <CircleDot
      size={40}
      strokeWidth={2.2}
    />
  );
}

export default function ReportsCard({
  reports = [],
  loadedBatches = 0,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  onSelectReport,
}) {
  const handleRowKeyDown = (
    event,
    report,
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onSelectReport?.(report);
    }
  };

  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <Flag
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Reportes del lugar
            </h2>

            <p style={styles.subtitle}>
              Revisa los reportes enviados directamente
              sobre este lugar.
            </p>
          </div>
        </div>

        <div style={styles.countersRow}>
          <span style={styles.counterOrange}>
            <FileWarning
              size={40}
              strokeWidth={2.2}
            />

            {reports.length} reportes
          </span>

          <span style={styles.counterBlue}>
            <LoaderCircle
              size={40}
              strokeWidth={2.2}
            />

            {loadedBatches} lotes
          </span>
        </div>
      </header>

      <div style={styles.tableContainer}>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  Tipo
                </th>

                <th
                  style={{
                    ...styles.th,
                    textAlign: "center",
                  }}
                >
                  Fecha de publicación
                </th>

                <th
                  style={{
                    ...styles.th,
                    textAlign: "center",
                  }}
                >
                  Estado
                </th>

                <th
                  style={{
                    ...styles.th,
                    ...styles.actionHeader,
                  }}
                >
                  Detalle
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    style={styles.emptyCell}
                  >
                    <div style={styles.emptyState}>
                      <div style={styles.emptyIcon}>
                        <Flag
                          size={50}
                          strokeWidth={2}
                        />
                      </div>

                      <strong style={styles.emptyTitle}>
                        Sin reportes
                      </strong>

                      <span style={styles.emptyText}>
                        Este lugar no tiene reportes
                        directos registrados.
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                reports.map((report) => (
                  <tr
                    key={report.id}
                    tabIndex={0}
                    role="button"
                    style={styles.tableRow}
                    onClick={() =>
                      onSelectReport?.(report)
                    }
                    onKeyDown={(event) =>
                      handleRowKeyDown(
                        event,
                        report,
                      )
                    }
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background =
                        "linear-gradient(90deg, #fff8eb 0%, #fffdf8 45%, #f5f9ff 100%)";

                      event.currentTarget.style.boxShadow =
                        "inset 4px 0 0 #e49a24";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background =
                        "transparent";

                      event.currentTarget.style.boxShadow =
                        "none";
                    }}
                    onFocus={(event) => {
                      event.currentTarget.style.background =
                        "linear-gradient(90deg, #fff8eb 0%, #fffdf8 45%, #f5f9ff 100%)";

                      event.currentTarget.style.boxShadow =
                        "inset 4px 0 0 #e49a24";
                    }}
                    onBlur={(event) => {
                      event.currentTarget.style.background =
                        "transparent";

                      event.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    <td style={styles.td}>
                      <div style={styles.reasonCell}>
                        <div style={styles.reasonIcon}>
                          <AlertTriangle
                            size={40}
                            strokeWidth={2.15}
                          />
                        </div>

                        <div style={styles.reasonText}>
                          <strong style={styles.reasonLabel}>
                            {report.reasonLabel}
                          </strong>

                          <span style={styles.reasonSubtitle}>
                            Reporte sobre el lugar
                          </span>
                        </div>
                      </div>
                    </td>

                    <td
                      style={{
                        ...styles.td,
                        textAlign: "center",
                      }}
                    >
                      <span style={styles.dateValue}>
                        <CalendarDays
                          size={40}
                          strokeWidth={2.15}
                        />

                        {report.date}
                      </span>
                    </td>

                    <td
                      style={{
                        ...styles.td,
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={getStatusPillStyle(
                          report.statusId,
                        )}
                      >
                        {getStatusIcon(
                          report.statusId,
                        )}

                        {report.statusLabel}
                      </span>
                    </td>

                    <td style={styles.actionCell}>
                      <ChevronRight
                        size={40}
                        strokeWidth={2.25}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {hasMore ? (
          <div style={styles.loadMoreContainer}>
            <button
              type="button"
              onClick={onLoadMore}
              disabled={loadingMore}
              style={{
                ...styles.loadMoreButton,

                ...(loadingMore
                  ? styles.disabledButton
                  : {}),
              }}
            >
              <LoaderCircle
                size={40}
                strokeWidth={2.2}
              />

              {loadingMore
                ? "Cargando..."
                : "Cargar más reportes"}
            </button>
          </div>
        ) : reports.length > 0 ? (
          <div style={styles.endMessage}>
            <CheckCircle2
              size={40}
              strokeWidth={2.2}
            />

            Se cargaron todos los reportes.
          </div>
        ) : null}
      </div>
    </section>
  );
}