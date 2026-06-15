import React, { useState } from "react";
import styles from "./styles";

const rejectionReasons = [
  {
    label: "SPAM",
    value: "spam",
  },
  {
    label: "No cumple lineamientos",
    value: "guidelines",
  },
  {
    label: "Contenido ofensivo",
    value: "offensive_content",
  },
  {
    label: "Información incorrecta",
    value: "incorrect_information",
  },
  {
    label: "Descripción irrelevante",
    value: "irrelevant_description",
  },
  {
    label: "Otro motivo",
    value: "other",
  },
];

export default function DescriptionRejectionModal({
  visible,
  loading = false,
  onClose,
  onSubmit,
}) {
  const [selectedReason, setSelectedReason] = useState("");
  const [comment, setComment] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  if (!visible) return null;

  const minCommentLength = 10;

  const cleanComment = comment.trim();

  const canSubmit =
    !loading && selectedReason && cleanComment.length >= minCommentLength;

  const resetForm = () => {
    setSelectedReason("");
    setComment("");
    setShowCancelConfirm(false);
  };

  const handleSubmit = () => {
    if (!canSubmit) return;

    onSubmit({
      rejectionReason: selectedReason,
      rejectionComment: cleanComment,
    });
  };

  const handleRequestCancel = () => {
    if (loading) return;

    if (selectedReason || cleanComment) {
      setShowCancelConfirm(true);
      return;
    }

    onClose();
  };

  const handleConfirmCancel = () => {
    resetForm();
    onClose();
  };

  const handleKeepEditing = () => {
    setShowCancelConfirm(false);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>Rechazar descripción</h2>

            <p style={styles.subtitle}>
              Selecciona un motivo y explica por qué la propuesta será
              rechazada.
            </p>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={handleRequestCancel}
            disabled={loading}
          >
            ×
          </button>
        </div>

        <div style={styles.content}>
          <p style={styles.label}>Motivo del rechazo</p>

          <div style={styles.chipsContainer}>
            {rejectionReasons.map((reason) => {
              const isSelected = selectedReason === reason.value;

              return (
                <button
                  key={reason.value}
                  type="button"
                  style={{
                    ...styles.chip,
                    ...(isSelected ? styles.chipSelected : {}),
                  }}
                  onClick={() => setSelectedReason(reason.value)}
                  disabled={loading}
                >
                  {reason.label}
                </button>
              );
            })}
          </div>

          <p style={styles.label}>Comentario para el usuario</p>

          <textarea
            style={styles.textarea}
            placeholder="Ejemplo: La descripción no corresponde claramente al lugar o contiene información incorrecta."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            maxLength={300}
            disabled={loading}
          />

          <div style={styles.counter}>
            {cleanComment.length}/{minCommentLength} mínimo
          </div>

          <div style={styles.actions}>
            <button
              type="button"
              style={styles.cancelButton}
              onClick={handleRequestCancel}
              disabled={loading}
            >
              Cancelar
            </button>

            <button
              type="button"
              style={{
                ...styles.submitButton,
                ...(!canSubmit ? styles.submitButtonDisabled : {}),
              }}
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              {loading ? "Rechazando..." : "Enviar rechazo"}
            </button>
          </div>
        </div>

        {showCancelConfirm && (
          <div style={styles.confirmOverlay}>
            <div style={styles.confirmBox}>
              <h3 style={styles.confirmTitle}>¿Cancelar rechazo?</h3>

              <p style={styles.confirmText}>
                Se perderá el motivo seleccionado y el comentario escrito.
              </p>

              <div style={styles.confirmActions}>
                <button
                  type="button"
                  style={styles.keepButton}
                  onClick={handleKeepEditing}
                >
                  Seguir editando
                </button>

                <button
                  type="button"
                  style={styles.confirmCancelButton}
                  onClick={handleConfirmCancel}
                >
                  Sí, cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}