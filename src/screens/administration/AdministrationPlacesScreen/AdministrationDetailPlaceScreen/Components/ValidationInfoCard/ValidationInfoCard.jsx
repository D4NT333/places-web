import React from "react";
import styles from "./styles";

export default function ValidationInfoCard({ place }) {
  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Información de validación</h2>

      <div style={styles.grid}>
        <div style={styles.fieldGroup}>
          <span style={styles.label}>Administrador que validó</span>
          <div style={styles.inputLike}>{place.validatedBy}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Fuente</span>
          <div style={styles.inputLike}>{place.source}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Nombre de usuario/Admin</span>
          <div style={styles.inputLike}>{place.creatorName}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Fecha de creación</span>
          <div style={styles.inputLike}>{place.createdAt}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Fecha de validación</span>
          <div style={styles.inputLike}>{place.validatedAt}</div>
        </div>
      </div>
    </section>
  );
}