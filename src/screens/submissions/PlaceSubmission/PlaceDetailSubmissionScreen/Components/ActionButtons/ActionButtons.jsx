import React from "react";
import styles from "./styles";

export default function ActionButtons({
  status,
  onAccept,
  onReturn,
  onReject,
  onViewReason,
}) {
  const cleanStatus = String(status || "").trim();

  const isReturned = cleanStatus === "returned";
  const isResubmitted = cleanStatus === "resubmitted";

  if (isReturned) {
    return (
      <div style={styles.container}>
        <button
          type="button"
          style={styles.reasonButton}
          onClick={onViewReason}
        >
          Ver motivo
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        type="button"
        style={styles.acceptButton}
        onClick={onAccept}
      >
        Aceptar
      </button>

      {!isResubmitted ? (
        <button
          type="button"
          style={styles.returnButton}
          onClick={onReturn}
        >
          Devolver
        </button>
      ) : null}

      <button
        type="button"
        style={styles.rejectButton}
        onClick={onReject}
      >
        Rechazar
      </button>
    </div>
  );
}