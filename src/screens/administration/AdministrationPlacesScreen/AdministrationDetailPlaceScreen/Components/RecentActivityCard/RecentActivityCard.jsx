import React from "react";
import styles from "./styles";

export default function RecentActivityCard({ activity, activityStatus }) {
  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <h2 style={styles.title}>Actividad reciente</h2>

        <div style={styles.statusBlock}>
          <span style={styles.statusLabel}>Estado de actividad</span>
          <span style={styles.statusPill}>{activityStatus}</span>
        </div>
      </header>

      <ul style={styles.list}>
        {activity.map((item, index) => (
          <li key={`${item}-${index}`} style={styles.item}>
            <span style={styles.dot} />
            <span style={styles.itemText}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}