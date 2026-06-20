import React, {
  useEffect,
  useState,
} from "react";

import styles from "./styles";

const MIN_COMMENT_LENGTH = 10;
const MAX_COMMENT_LENGTH = 300;

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

export default function RejectionModal({
  visible,
  loading = false,
  onClose,
  onSubmit,
}) {
  const [
    selectedReason,
    setSelectedReason,
  ] = useState("");

  const [
    comment,
    setComment,
  ] = useState("");

  const [
    showCancelConfirm,
    setShowCancelConfirm,
  ] = useState(false);

  useEffect(() => {
    if (!visible) {
      return;
    }

    setSelectedReason("");
    setComment("");
    setShowCancelConfirm(false);
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        !loading
      ) {
        handleRequestCancel();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    visible,
    loading,
    selectedReason,
    comment,
  ]);

  if (!visible) {
    return null;
  }

  const cleanComment = comment.trim();

  const canSubmit = Boolean(
    !loading &&
      selectedReason &&
      cleanComment.length >=
        MIN_COMMENT_LENGTH
  );

  const resetForm = () => {
    setSelectedReason("");
    setComment("");
    setShowCancelConfirm(false);
  };

  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }

    onSubmit?.({
      rejectionReason: selectedReason,
      rejectionComment: cleanComment,
    });
  };

  const handleRequestCancel = () => {
    if (loading) {
      return;
    }

    if (
      selectedReason ||
      cleanComment
    ) {
      setShowCancelConfirm(true);
      return;
    }

    onClose?.();
  };

  const handleConfirmCancel = () => {
    resetForm();
    onClose?.();
  };

  const handleKeepEditing = () => {
    setShowCancelConfirm(false);
  };

  const handleOverlayMouseDown = (
    event
  ) => {
    if (
      event.target === event.currentTarget
    ) {
      handleRequestCancel();
    }
  };

  return (
    <div
      style={styles.overlay}
      onMouseDown={
        handleOverlayMouseDown
      }
    >
      <div style={styles.modal}>
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>
              Rechazar propuesta
            </h2>

            <p style={styles.subtitle}>
              Selecciona un motivo y explica
              por qué la propuesta será
              rechazada.
            </p>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={
              handleRequestCancel
            }
            disabled={loading}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div style={styles.content}>
          <p style={styles.label}>
            Motivo del rechazo
          </p>

          <div
            style={
              styles.chipsContainer
            }
          >
            {rejectionReasons.map(
              (reason) => {
                const isSelected =
                  selectedReason ===
                  reason.value;

                return (
                  <button
                    key={reason.value}
                    type="button"
                    style={{
                      ...styles.chip,
                      ...(isSelected
                        ? styles.chipSelected
                        : {}),
                    }}
                    onClick={() =>
                      setSelectedReason(
                        reason.value
                      )
                    }
                    disabled={loading}
                  >
                    {reason.label}
                  </button>
                );
              }
            )}
          </div>

          <p style={styles.label}>
            Comentario para el usuario
          </p>

          <textarea
            style={styles.textarea}
            placeholder="Ejemplo: La información proporcionada no permite verificar correctamente el lugar."
            value={comment}
            onChange={(event) =>
              setComment(
                event.target.value
              )
            }
            maxLength={
              MAX_COMMENT_LENGTH
            }
            disabled={loading}
          />

          <div style={styles.counter}>
            {cleanComment.length}/
            {MIN_COMMENT_LENGTH} mínimo
          </div>

          <div style={styles.actions}>
            <button
              type="button"
              style={
                styles.cancelButton
              }
              onClick={
                handleRequestCancel
              }
              disabled={loading}
            >
              Cancelar
            </button>

            <button
              type="button"
              style={{
                ...styles.submitButton,
                ...(!canSubmit
                  ? styles.submitButtonDisabled
                  : {}),
              }}
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              {loading
                ? "Rechazando..."
                : "Enviar rechazo"}
            </button>
          </div>
        </div>

        {showCancelConfirm && (
          <div
            style={
              styles.confirmOverlay
            }
          >
            <div
              style={styles.confirmBox}
            >
              <h3
                style={
                  styles.confirmTitle
                }
              >
                ¿Cancelar rechazo?
              </h3>

              <p
                style={
                  styles.confirmText
                }
              >
                Se perderá el motivo
                seleccionado y el
                comentario escrito.
              </p>

              <div
                style={
                  styles.confirmActions
                }
              >
                <button
                  type="button"
                  style={styles.keepButton}
                  onClick={
                    handleKeepEditing
                  }
                >
                  Seguir editando
                </button>

                <button
                  type="button"
                  style={
                    styles.confirmCancelButton
                  }
                  onClick={
                    handleConfirmCancel
                  }
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