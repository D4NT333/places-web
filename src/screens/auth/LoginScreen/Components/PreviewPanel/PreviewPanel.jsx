import React from "react";
import styles from "./styles";

export default function PreviewPanel() {
  return (
    <div style={styles.rightPanel}>
      <div style={styles.blurCircleOne} />
      <div style={styles.blurCircleTwo} />

      <div style={styles.previewCard}>
        <div style={styles.previewHeader}>
          <span style={styles.previewDot} />
          <span style={styles.previewDot} />
          <span style={styles.previewDot} />
        </div>

        <div style={styles.previewContent}>
          <p style={styles.previewLabel}>Admin dashboard</p>
          <h3 style={styles.previewTitle}>Control seguro del sistema</h3>

          <p style={styles.previewDescription}>
            Valida lugares, revisa contenido y administra el flujo interno desde
            una sola plataforma.
          </p>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <span style={styles.statValue}>24</span>
            <span style={styles.statLabel}>Pendientes</span>
          </div>

          <div style={styles.statCard}>
            <span style={styles.statValue}>8</span>
            <span style={styles.statLabel}>Reportes</span>
          </div>
        </div>

        <div style={styles.fakeList}>
          <div style={styles.fakeRow} />
          <div style={styles.fakeRowShort} />
          <div style={styles.fakeRow} />
        </div>
      </div>
    </div>
  );
}