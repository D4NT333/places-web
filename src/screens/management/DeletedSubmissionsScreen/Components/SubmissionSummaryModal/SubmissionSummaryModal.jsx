import React from "react";

import styles from "./styles";

export default function SubmissionSummaryModal({
  submission,
  onClose,
  onDelete,
}) {
  if (!submission) {
    return null;
  }

  return (
    <div
      style={styles.backdrop}
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="submission-summary-title"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div style={styles.header}>
          <div>
            <h2
              id="submission-summary-title"
              style={styles.title}
            >
              Resumen de la propuesta
            </h2>

            <p style={styles.subtitle}>
              Información previa a su eliminación
              definitiva.
            </p>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.dataRow}>
            <span style={styles.label}>
              Propuesta
            </span>

            <span style={styles.value}>
              {submission.proposal}
            </span>
          </div>

          <div style={styles.dataRow}>
            <span style={styles.label}>Tipo</span>

            <span style={styles.value}>
              {submission.type}
            </span>
          </div>

          <div style={styles.dataRow}>
            <span style={styles.label}>
              Usuario
            </span>

            <span style={styles.value}>
              {submission.user?.name ||
                "Usuario"}
            </span>
          </div>

          <div style={styles.dataRow}>
            <span style={styles.label}>
              Enviada el
            </span>

            <span style={styles.value}>
              {submission.submittedAt}
            </span>
          </div>

          <div style={styles.dataRow}>
            <span style={styles.label}>
              Eliminada el
            </span>

            <span style={styles.value}>
              {submission.deletedAt}
            </span>
          </div>

          <div style={styles.summaryBlock}>
            <span style={styles.label}>
              Resumen
            </span>

            <p style={styles.summary}>
              {submission.summary}
            </p>
          </div>
        </div>

        <div style={styles.footer}>
          <button
            type="button"
            style={styles.cancelButton}
            onClick={onClose}
          >
            Cerrar
          </button>

          <button
            type="button"
            style={styles.deleteButton}
            onClick={() => onDelete(submission)}
          >
            Eliminar definitivamente
          </button>
        </div>
      </div>
    </div>
  );
}