import React from "react";

import styles from "./styles";

export default function DeleteSubmissionModal({
  submission,
  onCancel,
  onConfirm,
  isDeleting = false,
}) {
  if (!submission) {
    return null;
  }

  return (
    <div
      style={styles.backdrop}
      role="presentation"
      onMouseDown={isDeleting ? undefined : onCancel}
    >
      <div
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-submission-title"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div style={styles.header}>
          <div>
            <h2
              id="delete-submission-title"
              style={styles.title}
            >
              Eliminar propuesta definitivamente
            </h2>

            <p style={styles.subtitle}>
              Esta acción eliminará la propuesta del sistema de forma permanente.
            </p>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={onCancel}
            aria-label="Cerrar"
            disabled={isDeleting}
          >
            ×
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.proposalHeader}>
            {submission.previewImageUrl ? (
              <img
                src={submission.previewImageUrl}
                alt=""
                style={styles.previewImage}
              />
            ) : (
              <div style={styles.previewFallback}>
                {submission.type === "photo"
                  ? "F"
                  : submission.type === "description"
                    ? "D"
                    : "L"}
              </div>
            )}

            <div>
              <span style={styles.proposalType}>
                {submission.typeLabel ||
                  submission.type ||
                  "Propuesta"}
              </span>

              <h3 style={styles.proposalTitle}>
                {submission.proposal ||
                  submission.title ||
                  "Propuesta eliminada"}
              </h3>
            </div>
          </div>

          <div style={styles.warningBox}>
            <strong>
              ¿Seguro que quieres eliminarla?
            </strong>

            <p>
              Una vez eliminada, esta propuesta ya no aparecerá en el panel
              administrativo ni podrá recuperarse desde esta sección.
            </p>
          </div>

          <div style={styles.dataGrid}>
            <div style={styles.dataRow}>
              <span style={styles.label}>
                Usuario
              </span>

              <span style={styles.value}>
                {submission.userName ||
                  "Usuario"}
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                Eliminada el
              </span>

              <span style={styles.value}>
                {submission.deletedAt ||
                  submission.requestedAt ||
                  "No disponible"}
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                Estado anterior
              </span>

              <span style={styles.value}>
                {submission.previousStatusLabel ||
                  submission.previousStatus ||
                  "No disponible"}
              </span>
            </div>

            <div style={styles.dataRow}>
              <span style={styles.label}>
                Tipo
              </span>

              <span style={styles.value}>
                {submission.typeLabel ||
                  submission.type ||
                  "No disponible"}
              </span>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <button
            type="button"
            style={styles.cancelButton}
            onClick={onCancel}
            disabled={isDeleting}
          >
            Cancelar
          </button>

          <button
            type="button"
            style={{
              ...styles.deleteButton,
              ...(isDeleting
                ? styles.deleteButtonDisabled
                : {}),
            }}
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting
              ? "Eliminando..."
              : "Eliminar definitivamente"}
          </button>
        </div>
      </div>
    </div>
  );
}