import React from "react";
import styles from "./styles";

export default function ReportsCard({ reports }) {
  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div>
          <h2 style={styles.title}>Número de reportes</h2>
          <p style={styles.subtitle}>Reportes activos: {reports.length}</p>
        </div>

        <div style={styles.statusBlock}>
          <span style={styles.statusLabel}>Estado de moderación</span>
          <span style={styles.statusPill}>Estado</span>
        </div>
      </header>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Tipo</th>
            <th style={styles.th}>Fecha de publicación</th>
            <th style={styles.th}>Estado</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report, index) => (
            <tr
              key={`${report.type}-${index}`}
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
          ))}
        </tbody>
      </table>
    </section>
  );
}