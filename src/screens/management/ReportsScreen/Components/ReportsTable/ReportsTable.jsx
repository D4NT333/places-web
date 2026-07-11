import styles from "./styles";

import {
  ReportStatusPill,
  ReportTypePill,
  ReportUserCell,
} from "../index";

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
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
    formatDate(report?.createdAt)
  );
}

function getReporter(report) {
  return (
    report?.reporter ||
    report?.user ||
    {
      name: "Usuario",
      photoURL: "",
    }
  );
}

export default function ReportsTable({
  reports = [],
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
              Realizado por
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
              key={report.id || report.reportId}
              style={styles.bodyRow}
              onClick={() => onOpenReport?.(report)}
              title="Abrir detalle del reporte"
              onMouseEnter={(event) => {
                event.currentTarget.style.background = "#f8fafc";
                event.currentTarget.style.transform = "translateY(-1px)";
                event.currentTarget.style.boxShadow = "inset 4px 0 0 #111827";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background = "#ffffff";
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow = "none";
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
                  {getReasonLabel(report)}
                </span>
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.relatedCell,
                }}
              >
                <span style={styles.relatedText}>
                  {getRelatedLabel(report)}
                </span>
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.dateCell,
                }}
              >
                {getCreatedAtLabel(report)}
              </td>

              <td
                style={{
                  ...styles.bodyCell,
                  ...styles.userCell,
                }}
              >
                <ReportUserCell user={getReporter(report)} />
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