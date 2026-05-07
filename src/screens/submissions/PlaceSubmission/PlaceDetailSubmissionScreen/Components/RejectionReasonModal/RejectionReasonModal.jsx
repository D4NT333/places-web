import React from "react";
import styles from "./styles";

function getReasonLabel(reason) {
  const map = {
    spam: "SPAM",
    guidelines: "No cumple lineamientos",
    offensive_content: "Contenido ofensivo",
    incorrect_information: "Información incorrecta",
    other: "Otro motivo",
  };

  return map[reason] || "Sin categoría";
}

export default function RejectionReasonModal({
  visible,
  rejectionReason,
  onClose,
}) {
  if (!visible) return null;

  const reason = rejectionReason?.reason || rejectionReason?.rejectionReason || "";
  const message =
    rejectionReason?.message ||
    rejectionReason?.rejectionComment ||
    "Sin motivo registrado.";

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Motivo de rechazo</h2>

          <button type="button" style={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div style={styles.reasonChip}>
          {getReasonLabel(reason)}
        </div>

        <div style={styles.messageBox}>
          {message}
        </div>

        <div style={styles.actions}>
          <button type="button" style={styles.backButton} onClick={onClose}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}