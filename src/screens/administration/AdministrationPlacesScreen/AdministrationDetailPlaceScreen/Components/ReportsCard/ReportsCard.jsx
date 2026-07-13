import React from "react";
import styles from "./styles";

export default function ReportsCard({
  reports = [],
  hasMore = false,
  loadingMore = false,
  onLoadMore,
}) {
  const activeReportsCount = reports.filter(
    (report) => report.statusId === "pending"
  ).length;

  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div>
          <h2 style={styles.title}>Reportes del lugar</h2>

          <p style={styles.subtitle}>
            Reportes pendientes cargados: {activeReportsCount}
          </p>
        </div>
      </header>

      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Tipo</th>
              <th style={styles.th}>Fecha de publicación</th>
              <th style={styles.th}>Estado</th>
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
                  style={styles.tableRow}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor = "#F9FAFB";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <td style={styles.td}>{report.type}</td>
                  <td style={styles.td}>{report.date}</td>
                  <td style={styles.td}>{report.status}</td>
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
              cursor: loadingMore ? "not-allowed" : "pointer",
              fontWeight: 700,
            }}
          >
            {loadingMore ? "Cargando..." : "Cargar más reportes"}
          </button>
        </div>
      )}
    </section>
  );
}