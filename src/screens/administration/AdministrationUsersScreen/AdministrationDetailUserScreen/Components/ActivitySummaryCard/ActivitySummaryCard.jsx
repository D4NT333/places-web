import React from "react";

import styles from "./styles";

export default function ActivitySummaryCard({ activity }) {
  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Actividad</h2>

      <p style={styles.total}>
        Actividad total: {activity.total}
      </p>

      <div style={styles.chipsRow}>
        <span style={styles.chip}>
          Lugares enviados: {activity.placesSent}
        </span>

        <span style={styles.chip}>
          Descripciones enviadas: {activity.descriptionsSent}
        </span>

        <span style={styles.chip}>
          Fotografías enviadas: {activity.photosSent}
        </span>

        <span style={styles.chip}>
          Reportes enviados: {activity.reportsSent}
        </span>
      </div>

      <div style={styles.statusRow}>
        <span style={styles.statusText}>
          Pendientes: {activity.pending}
        </span>

        <span style={styles.statusText}>
          Aprobados: {activity.approved}
        </span>

        <span style={styles.statusText}>
          Rechazados: {activity.rejected}
        </span>
      </div>
    </section>
  );
}