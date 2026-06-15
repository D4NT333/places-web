import React from "react";

import styles from "./styles";

export default function DeleteSubmissionModal({
  submission,
  onCancel,
  onConfirm,
}) {
  if (!submission) {
    return null;
  }

  return (
    <div
      style={styles.backdrop}
      role="presentation"
      onMouseDown={onCancel}
    >
      <div
        style={styles.modal}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-submission-title"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div style={styles.icon}>!</div>

        <h2
          id="delete-submission-title"
          style={styles.title}
        >
          Eliminar definitivamente
        </h2>

        <p style={styles.description}>
          La propuesta{" "}
          <strong>
            “{submission.proposal}”
          </strong>{" "}
          será eliminada permanentemente.
        </p>

        <p style={styles.warning}>
          Esta acción no se puede deshacer.
        </p>

        <div style={styles.actions}>
          <button
            type="button"
            style={styles.cancelButton}
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            type="button"
            style={styles.deleteButton}
            onClick={onConfirm}
          >
            Eliminar definitivamente
          </button>
        </div>
      </div>
    </div>
  );
}