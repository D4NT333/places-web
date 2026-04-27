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
    label: "Otro motivo",
    value: "other",
  },
];

export default function RejectionModal({ visible, onClose, onSubmit }) {
  const [selectedReason, setSelectedReason] = useState("");
  const [comment, setComment] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  if (!visible) return null;

  const minCommentLength = 10;

  const canSubmit =
    selectedReason && comment.trim().length >= minCommentLength;

  const handleSubmit = () => {
    if (!canSubmit) return;

    onSubmit({
      rejectionReason: selectedReason,
      rejectionComment: comment.trim(),
    });

    setSelectedReason("");
    setComment("");
  };

  const handleRequestCancel = () => {
    if (selectedReason || comment.trim()) {
      setShowCancelConfirm(true);
      return;
    }

    onClose();
  };

  const handleConfirmCancel = () => {
    setSelectedReason("");
    setComment("");
    setShowCancelConfirm(false);
    onClose();
  };

  const handleKeepEditing = () => {
    setShowCancelConfirm(false);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>Rechazar propuesta</h2>
          <button
            type="button"
            style={styles.closeButton}
            onClick={handleRequestCancel}
          >
            ×
          </button>
        </div>

        <div style={styles.content}>
          <p style={styles.label}>Explica el motivo de rechazo</p>

          <textarea
            style={styles.textarea}
            placeholder="Escribe aquí el motivo de rechazo..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            maxLength={300}
          />

          <div style={styles.counter}>
            {comment.trim().length}/{minCommentLength} mínimo
          </div>

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
                >
                  {reason.label}
                </button>
              );
            })}
          </div>

          <div style={styles.actions}>
            <button
              type="button"
              style={styles.cancelButton}
              onClick={handleRequestCancel}
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
              Enviar rechazo
            </button>
          </div>
        </div>

        {showCancelConfirm && (
          <div style={styles.confirmOverlay}>
            <div style={styles.confirmBox}>
              <h3 style={styles.confirmTitle}>¿Cancelar rechazo?</h3>

              <p style={styles.confirmText}>
                Se perderá el motivo que escribiste y la categoría seleccionada.
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