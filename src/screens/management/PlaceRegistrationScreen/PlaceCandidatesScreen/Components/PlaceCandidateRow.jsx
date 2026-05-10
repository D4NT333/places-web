import React from "react";
import styles from "./styles";

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return map[status] || "Pendiente";
}

function getStatusStyle(status) {
  const map = {
    in_review: styles.statusPending,
    accepted: styles.statusAccepted,
    rejected: styles.statusRejected,
  };

  return map[status] || styles.statusPending;
}

function formatGoogleType(type) {
  if (!type) return "Sin tipo";

  return type
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function PlaceCandidateRow({ item, onClick }) {
  return (
    <button type="button" style={styles.row} onClick={onClick}>
      <div style={styles.nameCell}>
        <strong style={styles.name}>{item.name || "Sin nombre"}</strong>
      </div>

      <div style={styles.addressCell}>
        <span style={styles.addressText}>
          {item.address || "Sin dirección"}
        </span>
      </div>

      <div style={styles.typeCell}>
        <span style={styles.typeText}>
          {formatGoogleType(item.googleMainType)}
        </span>
      </div>

      <div style={styles.statusCell}>
        <span
          style={{
            ...styles.statusBadge,
            ...getStatusStyle(item.status),
          }}
        >
          {getStatusLabel(item.status)}
        </span>
      </div>
    </button>
  );
}