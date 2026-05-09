import React from "react";
import styles from "./styles";

export default function CandidateMediaPanel({ candidate }) {
  return (
    <aside style={styles.mediaCard}>
      <div style={styles.photoBox}>
        <div style={styles.photoPlaceholder}>
          <span style={styles.photoIcon}>✦</span>
          <span>Fotos de Google</span>
          <small>Se cargarán en detalle avanzado</small>
        </div>
      </div>

      <div style={styles.mapBox}>
        <div style={styles.mapPlaceholder}>
          <span>Mapa</span>
          <small>Ubicación del candidato</small>
        </div>
      </div>

      <div style={styles.addressBlock}>
        <span style={styles.label}>Dirección</span>
        <p style={styles.addressText}>
          {candidate.address || "Sin dirección"}
        </p>
      </div>
    </aside>
  );
}