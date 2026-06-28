import React, { useState } from "react";

import styles from "./styles";

export default function ReceivedReportsPanel({ reports = [] }) {
  const [hoveredId, setHoveredId] = useState(null);

  const activeReports = reports.length;

  return (
    <div style={styles.panel}>
      <p style={styles.totalText}>
        Reportes recibidos: {activeReports}
      </p>

      {activeReports > 0 ? (
        <div style={styles.list}>
          {reports.map((report) => {
            const isHovered = hoveredId === report.id;

            return (
              <button
                key={report.id}
                type="button"
                style={{
                  ...styles.reportItem,
                  ...(isHovered ? styles.reportItemHovered : {}),
                }}
                onMouseEnter={() => setHoveredId(report.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() =>
                  console.log("Abrir reporte:", report.id)
                }
              >
                <div style={styles.reasonRow}>
                  <span style={styles.dot} />

                  <span style={styles.reason}>
                    {report.reason}
                  </span>
                </div>

                <div style={styles.reportMeta}>
                  <span>{report.date}</span>
                  <span>{report.statusLabel}</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div style={styles.emptyState}>
          Sin reportes recibidos
        </div>
      )}
    </div>
  );
}