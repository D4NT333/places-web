import styles from "./styles";

import {
  REPORT_REASON_LABELS,
} from "../../data";

import {
  ReportStatusPill,
  ReportTypePill,
  ReportUserCell,
} from "../index";

export default function ReportsTable({
  reports,
  onOpenReport,
}) {
  if (!reports.length) {
    return (
      <div style={styles.emptyState}>
        <h3 style={styles.emptyTitle}>
          No hay reportes para mostrar
        </h3>

        <p style={styles.emptyText}>
          Cuando existan reportes con este filtro
          aparecerán en esta tabla.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th
              style={{
                ...styles.headerCell,
                ...styles.typeCell,
              }}
            >
              Tipo
            </th>

            <th
              style={{
                ...styles.headerCell,
                ...styles.reasonCell,
              }}
            >
              Motivo
            </th>

            <th
              style={{
                ...styles.headerCell,
                ...styles.relatedCell,
              }}
            >
              Relacionado con
            </th>

            <th
              style={{
                ...styles.headerCell,
                ...styles.dateCell,
              }}
            >
              Fecha
            </th>

            <th
              style={{
                ...styles.headerCell,
                ...styles.userCell,
              }}
            >
              Usuario
            </th>

            <th
              style={{
                ...styles.headerCell,
                ...styles.statusCell,
              }}
            >
              Estado
            </th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr
              key={report.id}
              style={styles.bodyRow}
              onClick={() => onOpenReport(report)}
              title="Abrir detalle del reporte"
              onMouseEnter={(event) => {
                event.currentTarget.style.background =
                  "#f8fafc";
                event.currentTarget.style.transform =
                  "translateY(-1px)";
                event.currentTarget.style.boxShadow =
                  "inset 4px 0 0 #111827";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background =
                  "#ffffff";
                event.currentTarget.style.transform =
                  "translateY(0)";
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
                <ReportTypePill type={report.type} />
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.reasonCell,
                }}
              >
                <span style={styles.strongText}>
                  {REPORT_REASON_LABELS[report.reason] ||
                    "Motivo"}
                </span>
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.relatedCell,
                }}
              >
                <span style={styles.relatedText}>
                  {report.relatedLabel}
                </span>
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.dateCell,
                }}
              >
                {report.createdAtLabel}
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.userCell,
                }}
              >
                <ReportUserCell user={report.user} />
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.statusCell,
                }}
              >
                <ReportStatusPill status={report.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}