import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./styles";

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 300;

const REJECTION_REASONS = [
  {
    id: "spam",
    label: "SPAM",
  },
  {
    id: "guidelines",
    label: "No cumple lineamientos",
  },
  {
    id: "offensive_content",
    label: "Contenido ofensivo",
  },
  {
    id: "incorrect_information",
    label: "Información incorrecta",
  },
  {
    id: "other",
    label: "Otro motivo",
  },
];

export default function PhotoRejectionModal({
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
    message,
    setMessage,
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
    setMessage("");
    setShowCancelConfirm(false);
  }, [visible]);

  const trimmedMessage =
    message.trim();

  const canSubmit = useMemo(() => {
    return Boolean(
      !loading &&
        selectedReason &&
        trimmedMessage.length >=
          MIN_MESSAGE_LENGTH
    );
  }, [
    loading,
    selectedReason,
    trimmedMessage,
  ]);

  const resetForm = () => {
    setSelectedReason("");
    setMessage("");
    setShowCancelConfirm(false);
  };

  const handleRequestCancel = () => {
    if (loading) {
      return;
    }

    if (
      selectedReason ||
      trimmedMessage
    ) {
      setShowCancelConfirm(true);
      return;
    }

    onClose?.();
  };

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
    trimmedMessage,
  ]);

  if (!visible) {
    return null;
  }

  const handleSubmit = (
    event
  ) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    onSubmit?.({
      reason: selectedReason,
      message: trimmedMessage,
    });
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
      <form
        style={styles.modal}
        onSubmit={handleSubmit}
      >
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>
              Rechazar fotografías
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
            {REJECTION_REASONS.map(
              (reason) => {
                const isSelected =
                  selectedReason ===
                  reason.id;

                return (
                  <button
                    key={reason.id}
                    type="button"
                    style={{
                      ...styles.chip,
                      ...(isSelected
                        ? styles.chipSelected
                        : {}),
                    }}
                    onClick={() =>
                      setSelectedReason(
                        reason.id
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
            id="photo-rejection-message"
            style={styles.textarea}
            placeholder="Ejemplo: Las fotografías no corresponden claramente al lugar o no cumplen con los lineamientos."
            value={message}
            onChange={(event) =>
              setMessage(
                event.target.value
              )
            }
            maxLength={
              MAX_MESSAGE_LENGTH
            }
            disabled={loading}
          />

          <div style={styles.counter}>
            {trimmedMessage.length}/
            {MIN_MESSAGE_LENGTH} mínimo
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
              type="submit"
              style={{
                ...styles.submitButton,
                ...(!canSubmit
                  ? styles.submitButtonDisabled
                  : {}),
              }}
              disabled={!canSubmit}
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
      </form>
    </div>
  );
}