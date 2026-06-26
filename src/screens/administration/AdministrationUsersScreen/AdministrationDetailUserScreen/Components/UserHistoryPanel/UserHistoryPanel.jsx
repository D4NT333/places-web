import React from "react";

import styles from "./styles";

export default function UserHistoryPanel({ history = [] }) {
  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Historial</h2>

      <div style={styles.table}>
        <div style={styles.headerRow}>
          <span>Tipo</span>
          <span>Fecha</span>
          <span>Estado</span>
        </div>

        {history.length > 0 ? (
          <div style={styles.body}>
            {history.map((item) => (
              <button
                key={item.id}
                type="button"
                style={styles.row}
                onClick={() => console.log("Abrir historial:", item.id)}
              >
                <span style={styles.cell}>{item.type}</span>
                <span style={styles.cell}>{item.date}</span>
                <span style={styles.cell}>{item.statusLabel}</span>
              </button>
            ))}
          </div>
        ) : (
          <div style={styles.emptyState}>
            Sin actividad registrada
          </div>
        )}
      </div>
    </section>
  );
}