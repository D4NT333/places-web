import React from "react";
import styles from "./styles";

export default function WeeklyInteractionsCard({
  likes = 0,
  reviews = 0,
  dwellTime = "Sin datos",
  weekLabel = "",
}) {
  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <h2 style={styles.title}>
          Interacciones de la semana
        </h2>

        {weekLabel && (
          <span style={styles.periodLabel}>
            Semana: {weekLabel}
          </span>
        )}
      </header>

      <div style={styles.statsGrid}>
        <article style={styles.statBox}>
          <span style={styles.statLabel}>
            Me gusta
          </span>

          <strong style={styles.statValue}>
            {likes}
          </strong>
        </article>

        <article style={styles.statBox}>
          <span style={styles.statLabel}>
            Reseñas
          </span>

          <strong style={styles.statValue}>
            {reviews}
          </strong>
        </article>

        <article style={styles.statBox}>
          <span style={styles.statLabel}>
            Tiempo de permanencia
          </span>

          <strong style={styles.statValue}>
            {dwellTime}
          </strong>
        </article>
      </div>
    </section>
  );
}