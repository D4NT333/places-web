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
              Información conservada antes de su
              eliminación definitiva.
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
          <div
            style={
              styles.proposalHeader
            }
          >
            {submission.previewImageUrl ? (
              <img
                src={
                  submission.previewImageUrl
                }
                alt=""
                style={
                  styles.previewImage
                }
              />
            ) : (
              <div
                style={
                  styles.previewFallback
                }
              >
                {submission.type ===
                "photo"
                  ? "F"
                  : submission.type ===
                      "description"
                    ? "D"
                    : "L"}
              </div>
            )}

            <div>
              <span
                style={
                  styles.proposalType
                }
              >
                {submission.typeLabel}
              </span>

              <h3
                style={
                  styles.proposalTitle
                }
              >
                {submission.proposal}
              </h3>
            </div>
          </div>

          <div style={styles.dataGrid}>
            <div style={styles.dataRow}>
              <span style={styles.label}>
                Usuario
              </span>

              <span style={styles.value}>
                {submission.userName}
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

            <div style={styles.dataRow}>
              <span style={styles.label}>
                Estado anterior
              </span>

              <span style={styles.value}>
                {
                  submission.previousStatusLabel
                }
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                Estado actual
              </span>

              <span style={styles.value}>
                {submission.statusLabel}
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                Colección de origen
              </span>

              <span style={styles.value}>
                {submission.sourceCollection ||
                  "No disponible"}
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                ID de la propuesta
              </span>

              <span
                style={styles.codeValue}
              >
                {submission.submissionId ||
                  "No disponible"}
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                ID del usuario
              </span>

              <span
                style={styles.codeValue}
              >
                {submission.userId ||
                  "No disponible"}
              </span>
            </div>
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
            onClick={() =>
              onDelete(submission)
            }
          >
            Eliminar definitivamente
          </button>
        </div>
      </div>
    </div>
  );
}