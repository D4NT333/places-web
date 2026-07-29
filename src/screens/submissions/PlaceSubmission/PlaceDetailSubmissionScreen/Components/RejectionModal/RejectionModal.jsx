import React, {
  useEffect,
  useState,
} from "react";

import {
  AlertTriangle,
  Ban,
  Check,
  FileWarning,
  Info,
  MessageSquareText,
  Send,
  ShieldAlert,
  X,
} from "lucide-react";

import styles from "./styles";

const MIN_COMMENT_LENGTH = 10;
const MAX_COMMENT_LENGTH = 300;

const rejectionReasons = [
  {
    label: "SPAM",
    value: "spam",
    icon: Ban,
  },
  {
    label: "No cumple lineamientos",
    value: "guidelines",
    icon: ShieldAlert,
  },
  {
    label: "Contenido ofensivo",
    value: "offensive_content",
    icon: AlertTriangle,
  },
  {
    label: "Información incorrecta",
    value: "incorrect_information",
    icon: FileWarning,
  },
  {
    label: "Otro motivo",
    value: "other",
    icon: Info,
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
        <div style={styles.accentLine} />

        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerIconBox}>
              <ShieldAlert
                size={28}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.headerText}>
              <h2 style={styles.title}>
                Rechazar propuesta
              </h2>

              <p style={styles.subtitle}>
                Selecciona un motivo y explica por
                qué la propuesta será rechazada.
              </p>
            </div>
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
            <X
              size={40}
              strokeWidth={2.2}
            />
          </button>
        </div>

        <div style={styles.content}>
          <section style={styles.formSection}>
            <div style={styles.sectionHeading}>
              <div style={styles.sectionIconRed}>
                <AlertTriangle
                  size={30}
                  strokeWidth={2.1}
                />
              </div>

              <div>
                <p style={styles.label}>
                  Motivo del rechazo
                </p>

                <p style={styles.fieldHelper}>
                  Selecciona la categoría que mejor
                  describa el problema.
                </p>
              </div>
            </div>

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

                  const ReasonIcon =
                    reason.icon;

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
                      <ReasonIcon
                        size={26}
                        strokeWidth={2.1}
                      />

                      <span>
                        {reason.label}
                      </span>

                      {isSelected && (
                        <Check
                          size={16}
                          strokeWidth={2.5}
                        />
                      )}
                    </button>
                  );
                }
              )}
            </div>
          </section>

          <section style={styles.formSection}>
            <div style={styles.sectionHeading}>
              <div style={styles.sectionIconBlue}>
                <MessageSquareText
                  size={30}
                  strokeWidth={2.1}
                />
              </div>

              <div>
                <p style={styles.label}>
                  Comentario para el usuario
                </p>

                <p style={styles.fieldHelper}>
                  Explica claramente qué ocasionó el
                  rechazo.
                </p>
              </div>
            </div>

            <div style={styles.textareaWrapper}>
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
                <span>
                  {cleanComment.length}/
                  {MAX_COMMENT_LENGTH}
                </span>

                <span
                  style={
                    cleanComment.length >=
                    MIN_COMMENT_LENGTH
                      ? styles.counterValid
                      : styles.counterPending
                  }
                >
                  Mínimo{" "}
                  {MIN_COMMENT_LENGTH}
                </span>
              </div>
            </div>
          </section>

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
              <X
                size={36}
                strokeWidth={2.2}
              />

              <span>Cancelar</span>
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
              <Send
                size={36}
                strokeWidth={2.2}
              />

              <span>
                {loading
                  ? "Rechazando..."
                  : "Enviar rechazo"}
              </span>
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
              <div style={styles.confirmIconBox}>
                <AlertTriangle
                  size={50}
                  strokeWidth={2.1}
                />
              </div>

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
                seleccionado y el comentario
                escrito.
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