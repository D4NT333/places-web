import React from "react";
import styles from "./styles";

export default function RecentActivityCard({
  activity = [],
  activityStatus,
}) {
  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <h2 style={styles.title}>Actividad reciente</h2>

        <div style={styles.statusBlock}>
          <span style={styles.statusLabel}>Estado de actividad</span>
          <span style={styles.statusPill}>
            {activityStatus || "Sin estado"}
          </span>
        </div>
      </header>

      {activity.length === 0 ? (
        <p
          style={{
            margin: "18px 0 0",
            color: "#64748B",
            fontWeight: 600,
          }}
        >
          Todavía no existe un historial de eventos para este lugar.
        </p>
      ) : (
        <ul style={styles.list}>
          {activity.map((item, index) => {
            const text =
              typeof item === "string"
                ? item
                : item.message || "Actividad registrada";

            const id =
              typeof item === "string"
                ? `${item}-${index}`
                : item.id || `${text}-${index}`;

            return (
              <li key={id} style={styles.item}>
                <span style={styles.dot} />
                <span style={styles.itemText}>{text}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}