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

  useEffect(() => {
    if (!visible) {
      return;
    }

    setSelectedReason("");
    setMessage("");
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (
        event.key === "Escape" &&
        !loading
      ) {
        onClose?.();
      }
    }

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
    onClose,
  ]);

  const trimmedMessage =
    message.trim();

  const canSubmit = useMemo(() => {
    return Boolean(
      selectedReason &&
        trimmedMessage.length >=
          MIN_MESSAGE_LENGTH &&
        !loading
    );
  }, [
    selectedReason,
    trimmedMessage,
    loading,
  ]);

  if (!visible) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    onSubmit?.({
      reason: selectedReason,
      message: trimmedMessage,
    });
  }

  function handleOverlayClick() {
    if (!loading) {
      onClose?.();
    }
  }

  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <div
      style={styles.overlay}
      onMouseDown={
        handleOverlayClick
      }
    >
      <form
        style={styles.modal}
        onMouseDown={
          handleModalClick
        }
        onSubmit={handleSubmit}
      >
        <header style={styles.header}>
          <h2 style={styles.title}>
            Rechazar propuesta
          </h2>

          <button
            type="button"
            style={styles.closeButton}
            disabled={loading}
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </header>

        <div style={styles.divider} />

        <div style={styles.content}>
          <label
            htmlFor="photo-rejection-message"
            style={styles.label}
          >
            Explica el motivo de rechazo
          </label>

          <textarea
            id="photo-rejection-message"
            value={message}
            disabled={loading}
            maxLength={
              MAX_MESSAGE_LENGTH
            }
            placeholder="Escribe aquí el motivo de rechazo..."
            style={styles.textarea}
            onChange={(event) =>
              setMessage(
                event.target.value
              )
            }
          />

          <div style={styles.counterRow}>
            <span
              style={{
                ...styles.counter,

                color:
                  trimmedMessage.length >
                    0 &&
                  trimmedMessage.length <
                    MIN_MESSAGE_LENGTH
                    ? "#B91C1C"
                    : "#64748B",
              }}
            >
              {trimmedMessage.length}/
              {MIN_MESSAGE_LENGTH} mínimo
            </span>
          </div>

          <p style={styles.reasonLabel}>
            Selecciona un motivo
          </p>

          <div style={styles.chips}>
            {REJECTION_REASONS.map(
              (reason) => {
                const isSelected =
                  selectedReason ===
                  reason.id;

                return (
                  <button
                    key={reason.id}
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      setSelectedReason(
                        reason.id
                      )
                    }
                    style={{
                      ...styles.chip,

                      ...(isSelected
                        ? styles.chipSelected
                        : {}),
                    }}
                  >
                    {reason.label}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <footer style={styles.footer}>
          <button
            type="button"
            disabled={loading}
            onClick={onClose}
            style={styles.cancelButton}
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={!canSubmit}
            style={{
              ...styles.submitButton,

              ...(!canSubmit
                ? styles.submitButtonDisabled
                : {}),
            }}
          >
            {loading
              ? "Enviando..."
              : "Enviar rechazo"}
          </button>
        </footer>
      </form>
    </div>
  );
}