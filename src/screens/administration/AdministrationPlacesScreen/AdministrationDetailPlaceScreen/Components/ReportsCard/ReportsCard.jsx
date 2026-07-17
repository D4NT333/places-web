import React from "react";
import styles from "./styles";

function getStatusPillStyle(status) {
  const statusStyles = {
    pending: {
      backgroundColor: "#FFFBEB",
      borderColor: "#FDE68A",
      color: "#92400E",
    },

    in_review: {
      backgroundColor: "#EFF6FF",
      borderColor: "#BFDBFE",
      color: "#1D4ED8",
    },

    resolved: {
      backgroundColor: "#ECFDF5",
      borderColor: "#A7F3D0",
      color: "#047857",
    },

    dismissed: {
      backgroundColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      color: "#475569",
    },

    discarded: {
      backgroundColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      color: "#475569",
    },
  };

  return {
    ...styles.statusPill,
    ...(statusStyles[status] || {
      backgroundColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      color: "#475569",
    }),
  };
}

export default function ReportsCard({
  reports = [],
  loadedBatches = 0,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  onSelectReport,
}) {
  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div>
          <h2 style={styles.title}>
            Reportes del lugar
          </h2>

          <div style={styles.countersRow}>
            <span style={styles.counter}>
              Reportes cargados: {reports.length}
            </span>

            <span style={styles.counter}>
              Lotes cargados: {loadedBatches}
            </span>
          </div>
        </div>
      </header>

      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr>
             <th style={styles.th}>Tipo</th>

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
            </tr>
          </thead>

          <tbody>
            {reports.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    ...styles.td,
                    textAlign: "center",
                    padding: "24px",
                  }}
                >
                  Este lugar no tiene reportes directos.
                </td>
              </tr>
            ) : (
              reports.map((report) => (
                <tr
                  key={report.id}
                  style={{
                    ...styles.tableRow,
                    cursor: "pointer",
                  }}
                  tabIndex={0}
                  role="button"
                  onClick={() =>
                    onSelectReport?.(report)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      onSelectReport?.(report);
                    }
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor =
                      "#F9FAFB";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor =
                      "transparent";
                  }}
                  onFocus={(event) => {
                    event.currentTarget.style.backgroundColor =
                      "#F9FAFB";
                  }}
                  onBlur={(event) => {
                    event.currentTarget.style.backgroundColor =
                      "transparent";
                  }}
                >
                  <td style={styles.td}>
  {report.reasonLabel}
</td>

<td
  style={{
    ...styles.td,
    textAlign: "center",
  }}
>
  {report.date}
</td>

<td
  style={{
    ...styles.td,
    textAlign: "center",
  }}
>
  <span
    style={getStatusPillStyle(
      report.statusId
    )}
  >
    {report.statusLabel}
  </span>
</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "14px",
          }}
        >
          <button
            type="button"
            onClick={onLoadMore}
            disabled={loadingMore}
            style={{
              padding: "8px 18px",
              border: "1px solid #CBD5E1",
              borderRadius: "999px",
              backgroundColor: "#FFFFFF",
              cursor: loadingMore
                ? "not-allowed"
                : "pointer",
              fontWeight: 700,
            }}
          >
            {loadingMore
              ? "Cargando..."
              : "Cargar más reportes"}
          </button>
        </div>
      )}
    </section>
  );
}