import React from "react";

import styles from "./styles";

export default function ReceivedReportsPanel({ reports = [] }) {
  const activeReports = reports.length;

  return (
    <div style={styles.panel}>
      <p style={styles.totalText}>
        Reportes recibidos: {activeReports}
      </p>

      {activeReports > 0 ? (
        <div style={styles.list}>
          {reports.map((report) => (
            <article key={report.id} style={styles.reportItem}>
              <div style={styles.reasonRow}>
                <span style={styles.dot} />
                <span style={styles.reason}>{report.reason}</span>
              </div>

              <div style={styles.reportMeta}>
                <span>{report.date}</span>
                <span>{report.statusLabel}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          Sin reportes recibidos
        </div>
      )}
    </div>
  );
}