import React, { useState } from "react";

import styles from "./styles";

export default function UserHistoryPanel({ history = [] }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Historial</h2>

      <div style={styles.table}>
        <div style={styles.headerRow}>
          <span style={styles.headerCell}>Tipo</span>
          <span style={styles.headerCell}>Fecha</span>
          <span style={styles.headerCell}>Estado</span>
        </div>

        {history.length > 0 ? (
          <div style={styles.body}>
            {history.map((item) => {
              const isHovered = hoveredId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  style={{
                    ...styles.row,
                    ...(isHovered ? styles.rowHovered : {}),
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() =>
                    console.log("Abrir historial:", item.id)
                  }
                >
                  <span style={styles.cell}>{item.type}</span>
                  <span style={styles.cell}>{item.date}</span>
                  <span style={styles.statusCell}>
                    {item.statusLabel}
                  </span>
                </button>
              );
            })}
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