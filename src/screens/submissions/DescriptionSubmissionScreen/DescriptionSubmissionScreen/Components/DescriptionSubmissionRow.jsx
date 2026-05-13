import React from "react";
import styles from "./styles";

const statusConfig = {
  pending: {
    label: "Pendiente",
    style: styles.pendingStatus,
  },
  accepted: {
    label: "Aceptada",
    style: styles.acceptedStatus,
  },
  rejected: {
    label: "Rechazada",
    style: styles.rejectedStatus,
  },
};

export default function DescriptionSubmissionRow({ description, onClick }) {
  const status = statusConfig[description.status] || statusConfig.pending;

  return (
    <div style={styles.row} onClick={onClick}>
      <div style={styles.placeCell}>
        <div style={styles.photoPlaceholder}>
          <span style={styles.photoText}>Foto</span>
        </div>

        <div style={styles.placeInfo}>
          <p style={styles.placeName}>{description.placeName}</p>
          <p style={styles.placeType}>Descripción propuesta</p>
        </div>
      </div>

      <div style={styles.dateCell}>
        <p style={styles.dateText}>{description.createdAt}</p>
      </div>

      <div style={styles.previewCell}>
        <p style={styles.previewText}>{description.preview}</p>
      </div>

      <div style={styles.statusCell}>
        <span style={{ ...styles.statusChip, ...status.style }}>
          {status.label}
        </span>
      </div>
    </div>
  );
}