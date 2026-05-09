import React from "react";
import styles from "./styles";

function getStatusConfig(status) {
  const map = {
    in_review: {
      label: "Pendiente",
      style: styles.statusPending,
    },
    accepted: {
      label: "Aceptado",
      style: styles.statusAccepted,
    },
    rejected: {
      label: "Rechazado",
      style: styles.statusRejected,
    },
  };

  return (
    map[status] || {
      label: "Pendiente",
      style: styles.statusPending,
    }
  );
}

function formatGoogleType(type) {
  if (!type) return "Sin tipo";

  return type.replaceAll("_", " ");
}

export default function PlaceCandidateRow({ item, onClick }) {
  const statusConfig = getStatusConfig(item.status);

  return (
    <button type="button" style={styles.rowButton} onClick={onClick}>
      <div style={styles.nameCell}>
        <span style={styles.placeName}>{item.name || "Sin nombre"}</span>
        <span style={styles.placeId}>{item.googlePlaceId}</span>
      </div>

      <div style={styles.addressCell}>
        {item.address || "Sin dirección"}
      </div>

      <div style={styles.typeCell}>
        {formatGoogleType(item.googleMainType)}
      </div>

      <div style={styles.statusCell}>
        <span style={{ ...styles.statusBadge, ...statusConfig.style }}>
          {statusConfig.label}
        </span>
      </div>
    </button>
  );
}