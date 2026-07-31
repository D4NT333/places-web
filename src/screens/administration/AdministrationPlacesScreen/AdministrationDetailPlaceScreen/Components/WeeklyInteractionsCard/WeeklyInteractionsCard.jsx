import React from "react";

import {
  Clock3,
  Heart,
  MessageSquareText,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

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
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <MousePointerClick
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Interacciones de la semana
            </h2>

            <p style={styles.subtitle}>
              Actividad registrada por los usuarios
              durante el periodo seleccionado.
            </p>
          </div>
        </div>

        {weekLabel ? (
          <span style={styles.periodLabel}>
            <TrendingUp
              size={40}
              strokeWidth={2.2}
            />

            {weekLabel}
          </span>
        ) : null}
      </header>

      <div style={styles.statsGrid}>
        <article
          style={{
            ...styles.statBox,
            ...styles.likesBox,
          }}
        >
          <div style={styles.statTopRow}>
            <div style={styles.likesIcon}>
              <Heart
                size={50}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.likesBadge}>
              Me gusta
            </span>
          </div>

          <div style={styles.statContent}>
            <strong style={styles.statValue}>
              {likes}
            </strong>

            <span style={styles.statDescription}>
              Me gusta netos registrados durante la
              semana.
            </span>
          </div>
        </article>

        <article
          style={{
            ...styles.statBox,
            ...styles.reviewsBox,
          }}
        >
          <div style={styles.statTopRow}>
            <div style={styles.reviewsIcon}>
              <MessageSquareText
                size={50}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.reviewsBadge}>
              Reseñas
            </span>
          </div>

          <div style={styles.statContent}>
            <strong style={styles.statValue}>
              {reviews}
            </strong>

            <span style={styles.statDescription}>
              Reseñas netas publicadas durante la
              semana.
            </span>
          </div>
        </article>

        <article
          style={{
            ...styles.statBox,
            ...styles.dwellBox,
          }}
        >
          <div style={styles.statTopRow}>
            <div style={styles.dwellIcon}>
              <Clock3
                size={50}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.dwellBadge}>
              Permanencia
            </span>
          </div>

          <div style={styles.statContent}>
            <strong
              style={{
                ...styles.statValue,
                ...styles.dwellValue,
              }}
            >
              {dwellTime}
            </strong>

            <span style={styles.statDescription}>
              Tiempo promedio que los usuarios
              permanecieron en el detalle.
            </span>
          </div>
        </article>
      </div>

      <div style={styles.footerNote}>
        <TrendingUp
          size={40}
          strokeWidth={2.15}
        />

        <span>
          Los valores corresponden únicamente a la
          semana seleccionada.
        </span>
      </div>
    </section>
  );
}