import React from "react";
import styles from "./styles";

export default function WeeklyInteractionsCard({ likes, reviews, dwellTime }) {
  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Interacciones de la semana</h2>

      <div style={styles.statsGrid}>
        <article style={styles.statBox}>
          <span style={styles.statLabel}>LikeCount</span>
          <strong style={styles.statValue}>{likes}</strong>
        </article>

        <article style={styles.statBox}>
          <span style={styles.statLabel}>ReviewCount</span>
          <strong style={styles.statValue}>{reviews}</strong>
        </article>

        <article style={styles.statBox}>
          <span style={styles.statLabel}>DwellTime</span>
          <strong style={styles.statValue}>{dwellTime}</strong>
        </article>
      </div>
    </section>
  );
}