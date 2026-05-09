import React from "react";
import styles from "./styles";
import CandidateInfoChip from "../CandidateInfoChip";

function formatGoogleType(type) {
  if (!type) return "Sin tipo";

  return type.replaceAll("_", " ");
}

export default function CandidateMediaPanel({ candidate, importedAtLabel }) {
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

      <div style={styles.infoStack}>
        <CandidateInfoChip
          label="Importado el"
          value={importedAtLabel}
        />

        <CandidateInfoChip
          label="Tipo de Google"
          value={formatGoogleType(candidate.googleMainType)}
        />

        <CandidateInfoChip
          label="Google Place ID"
          value={candidate.googlePlaceId || "Sin ID"}
          mono
        />
      </div>
    </aside>
  );
}