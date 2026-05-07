import React from "react";
import styles from "./styles";

export default function ActionButtons({
  status,
  onAccept,
  onReturn,
  onReject,
  onViewReason,
}) {
  if (status === "returned") {
    return (
      <div style={styles.container}>
        <button type="button" style={styles.secondaryButton} onClick={onViewReason}>
          Ver motivo
        </button>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div style={styles.container}>
        <button type="button" style={styles.secondaryButton} onClick={onViewReason}>
          Ver motivo
        </button>
      </div>
    );
  }

  if (status === "resubmitted") {
    return (
      <div style={styles.container}>
        <button type="button" style={styles.acceptButton} onClick={onAccept}>
          Aceptar
        </button>

        <button type="button" style={styles.rejectButton} onClick={onReject}>
          Rechazar
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button type="button" style={styles.acceptButton} onClick={onAccept}>
        Aceptar
      </button>

      <button type="button" style={styles.secondaryButton} onClick={onReturn}>
        Devolver
      </button>

      <button type="button" style={styles.rejectButton} onClick={onReject}>
        Rechazar
      </button>
    </div>
  );
}