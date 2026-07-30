import {
  CalendarDays,
  ChevronRight,
  FileWarning,
  Link2,
} from "lucide-react";

import styles from "./styles";

import {
  ReportStatusPill,
  ReportTypePill,
  ReportUserCell,
} from "../index";

function formatDate(value) {
  if (!value) {
    return "Sin fecha";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString(
    "es-MX",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );
}

function getReasonLabel(report) {
  return (
    report?.reasonLabel ||
    report?.reason?.label ||
    report?.reason ||
    "Motivo no especificado"
  );
}

function getRelatedLabel(report) {
  return (
    report?.relatedTo?.label ||
    report?.relatedLabel ||
    report?.place?.placeName ||
    report?.reportedUser?.name ||
    "Sin relación"
  );
}

function getCreatedAtLabel(report) {
  return (
    report?.createdAtLabel ||
    formatDate(
      report?.createdAt,
    )
  );
}

function getReporter(report) {
  return (
    report?.reporter ||
    report?.user || {
      name: "Usuario",
      photoURL: "",
    }
  );
}

export default function ReportsTable({
  reports = [],
  onOpenReport,
}) {
  function handleRowKeyDown(
    event,
    report,
  ) {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      onOpenReport?.(
        report,
      );
    }
  }

  if (!reports.length) {
    return (
      <div style={styles.emptyState}>
        <div style={styles.emptyIcon}>
          <FileWarning
            size={48}
            strokeWidth={2.1}
          />
        </div>

        <h3 style={styles.emptyTitle}>
          No hay reportes para mostrar
        </h3>

        <p style={styles.emptyText}>
          Cuando existan reportes con este filtro,
          aparecerán en esta tabla.
        </p>
      </div>
    );
  }

  return (
    <section style={styles.tableWrapper}>
      <div style={styles.tableScroller}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th
                style={{
                  ...styles.headerCell,
                  ...styles.typeCell,
                }}
              >
                TIPO
              </th>

              <th
                style={{
                  ...styles.headerCell,
                  ...styles.reasonCell,
                }}
              >
                MOTIVO
              </th>

              <th
                style={{
                  ...styles.headerCell,
                  ...styles.relatedCell,
                }}
              >
                RELACIONADO CON
              </th>

              <th
                style={{
                  ...styles.headerCell,
                  ...styles.dateCell,
                }}
              >
                FECHA
              </th>

              <th
                style={{
                  ...styles.headerCell,
                  ...styles.userCell,
                }}
              >
                REALIZADO POR
              </th>

              <th
                style={{
                  ...styles.headerCell,
                  ...styles.statusCell,
                }}
              >
                ESTADO
              </th>

              <th
                aria-label="Abrir detalle"
                style={styles.selectionHeader}
              />
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={
                  report.id ||
                  report.reportId
                }
                tabIndex={0}
                role="button"
                style={styles.bodyRow}
                title="Abrir detalle del reporte"
                aria-label={`Abrir reporte: ${getReasonLabel(
                  report,
                )}`}
                onClick={() =>
                  onOpenReport?.(
                    report,
                  )
                }
                onKeyDown={(event) =>
                  handleRowKeyDown(
                    event,
                    report,
                  )
                }
                onMouseEnter={(event) => {
                  event.currentTarget.style.background =
                    "#f5f9ff";

                  event.currentTarget.style.boxShadow =
                    "inset 5px 0 0 #2176e5";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.84)";

                  event.currentTarget.style.boxShadow =
                    "none";
                }}
              >
                <td
                  style={{
                    ...styles.bodyCell,
                    ...styles.typeCell,
                  }}
                >
                  <ReportTypePill
                    type={report.type}
                  />
                </td>

                <td
                  style={{
                    ...styles.bodyCell,
                    ...styles.reasonCell,
                  }}
                >
                  <div style={styles.reasonValue}>
                    <FileWarning
                      size={40}
                      strokeWidth={2.15}
                    />

                    <span style={styles.strongText}>
                      {getReasonLabel(
                        report,
                      )}
                    </span>
                  </div>
                </td>

                <td
                  style={{
                    ...styles.bodyCell,
                    ...styles.relatedCell,
                  }}
                >
                  <div style={styles.relatedValue}>
                    <Link2
                      size={40}
                      strokeWidth={2.15}
                    />

                    <span style={styles.relatedText}>
                      {getRelatedLabel(
                        report,
                      )}
                    </span>
                  </div>
                </td>

                <td
                  style={{
                    ...styles.bodyCell,
                    ...styles.dateCell,
                  }}
                >
                  <div style={styles.dateValue}>
                    <CalendarDays
                      size={36}
                      strokeWidth={2.15}
                    />

                    <span>
                      {getCreatedAtLabel(
                        report,
                      )}
                    </span>
                  </div>
                </td>

                <td
                  style={{
                    ...styles.bodyCell,
                    ...styles.userCell,
                  }}
                >
                  <ReportUserCell
                    user={getReporter(
                      report,
                    )}
                  />
                </td>

                <td
                  style={{
                    ...styles.bodyCell,
                    ...styles.statusCell,
                  }}
                >
                  <ReportStatusPill
                    status={report.status}
                  />
                </td>

                <td style={styles.selectionCell}>
                  <ChevronRight
                    size={29}
                    strokeWidth={2.35}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}