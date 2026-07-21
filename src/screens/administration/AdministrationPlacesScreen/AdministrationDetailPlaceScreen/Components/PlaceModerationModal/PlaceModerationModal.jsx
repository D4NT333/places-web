import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./styles";

const MAX_NOTE_LENGTH = 500;
const MIN_NOTE_LENGTH = 10;

const MODERATION_ACTIONS = [
  {
    id: "warned",
    label: "Advertir lugar",
    description:
      "El lugar continuará visible, pero quedará marcado con una advertencia administrativa.",
    effect:
      "El lugar seguirá publicado y su estado de moderación cambiará a Advertido.",
  },
  {
    id: "hidden",
    label: "Ocultar lugar",
    description:
      "El lugar dejará de aparecer públicamente dentro de la aplicación.",
    effect:
      "El lugar quedará oculto y ya no estará disponible para los usuarios.",
  },
];

function getStatusLabel(status) {
  const labels = {
    published: "Publicado",
    approved: "Publicado",
    in_review: "En revisión",
    warned: "Advertido",
    hidden: "Oculto",
  };

  return labels[status] || status || "Sin estado";
}

function getStatusStyle(status) {
  if (status === "hidden") {
    return {
      ...styles.statusChip,
      ...styles.statusChipHidden,
    };
  }

  if (status === "warned") {
    return {
      ...styles.statusChip,
      ...styles.statusChipWarned,
    };
  }

  if (status === "in_review") {
    return {
      ...styles.statusChip,
      ...styles.statusChipReview,
    };
  }

  return {
    ...styles.statusChip,
    ...styles.statusChipPublished,
  };
}

function getActionButtonStyle(
  actionId,
  selectedAction
) {
  const isSelected =
    actionId === selectedAction;

  if (!isSelected) {
    return styles.actionButton;
  }

  if (actionId === "hidden") {
    return {
      ...styles.actionButton,
      ...styles.actionButtonSelectedDanger,
    };
  }

  return {
    ...styles.actionButton,
    ...styles.actionButtonSelectedWarning,
  };
}

function getMainPhotoUrl(place) {
  return (
    place?.mainPhoto?.url ||
    place?.mainPhoto?.medium?.url ||
    place?.mainPhoto?.thumbnail?.url ||
    place?.photos?.[0]?.url ||
    place?.photos?.[0]?.medium?.url ||
    place?.photos?.[0]?.thumbnail?.url ||
    null
  );
}

function getReportsCount(place) {
  return (
    Number(
      place?.moderation?.validReportsCount ??
      place?.metrics?.validReportsCount ??
      place?.metrics?.reportsCount ??
      place?.reportCount
    ) || 0
  );
}

export default function PlaceModerationModal({
  isOpen = false,
  place = null,
  loading = false,
  errorMessage = "",
  onClose,
  onSubmit,
}) {
  const currentStatus =
    place?.moderationStatusId ||
    place?.status ||
    "published";

  const [
    selectedAction,
    setSelectedAction,
  ] = useState("");

  const [
    note,
    setNote,
  ] = useState("");

  const [
    confirmHidden,
    setConfirmHidden,
  ] = useState(false);

  const [
    submitAttempted,
    setSubmitAttempted,
  ] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setSelectedAction("");
    setNote("");
    setConfirmHidden(false);
    setSubmitAttempted(false);
  }, [
    isOpen,
    place?.placeId,
  ]);

  useEffect(() => {
    if (
      selectedAction !== "hidden"
    ) {
      setConfirmHidden(false);
    }
  }, [selectedAction]);

  const selectedActionData =
    useMemo(() => {
      return (
        MODERATION_ACTIONS.find(
          (action) =>
            action.id ===
            selectedAction
        ) || null
      );
    }, [selectedAction]);

  const cleanNote = note.trim();

  const noteIsValid =
    cleanNote.length >=
      MIN_NOTE_LENGTH &&
    cleanNote.length <=
      MAX_NOTE_LENGTH;

  const needsHiddenConfirmation =
    selectedAction === "hidden";

  const formIsValid =
    Boolean(selectedAction) &&
    noteIsValid &&
    (
      !needsHiddenConfirmation ||
      confirmHidden
    );

  const actionError =
    submitAttempted &&
    !selectedAction
      ? "Selecciona una medida administrativa."
      : "";

  const noteError =
    submitAttempted &&
    !noteIsValid
      ? cleanNote.length === 0
        ? "La nota administrativa es obligatoria."
        : cleanNote.length <
            MIN_NOTE_LENGTH
          ? `La nota debe contener al menos ${MIN_NOTE_LENGTH} caracteres.`
          : `La nota no puede superar ${MAX_NOTE_LENGTH} caracteres.`
      : "";

  const confirmationError =
    submitAttempted &&
    selectedAction === "hidden" &&
    !confirmHidden
      ? "Debes confirmar que deseas ocultar el lugar."
      : "";

  const mainPhotoUrl =
    getMainPhotoUrl(place);

  const reportsCount =
    getReportsCount(place);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (
    event
  ) => {
    if (
      event.target ===
        event.currentTarget &&
      !loading
    ) {
      onClose?.();
    }
  };

  const handleClose = () => {
    if (loading) {
      return;
    }

    onClose?.();
  };

  const handleSelectAction = (
    actionId
  ) => {
    setSelectedAction(actionId);

    if (submitAttempted) {
      setSubmitAttempted(false);
    }
  };

  const handleNoteChange = (
    event
  ) => {
    setNote(event.target.value);

    if (submitAttempted) {
      setSubmitAttempted(false);
    }
  };

  const handleSubmit = async () => {
    if (loading) {
      return;
    }

    setSubmitAttempted(true);

    if (!formIsValid) {
      return;
    }

    await onSubmit?.({
      moderationStatus:
        selectedAction,

      note:
        cleanNote,

      source:
        "manual_moderation",
    });
  };

  const submitLabel =
    selectedAction === "hidden"
      ? "Ocultar lugar"
      : selectedAction === "warned"
        ? "Advertir lugar"
        : "Aplicar moderación";

  return (
    <div
      style={styles.overlay}
      onMouseDown={
        handleOverlayClick
      }
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-moderation-title"
        style={styles.modal}
      >
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.titleRow}>
              <h2
                id="place-moderation-title"
                style={styles.title}
              >
                Moderar lugar
              </h2>

              <span
                style={getStatusStyle(
                  currentStatus
                )}
              >
                {getStatusLabel(
                  currentStatus
                )}
              </span>
            </div>

            <p style={styles.subtitle}>
              Aplica una medida administrativa directamente sobre este lugar.
            </p>
          </div>

          <button
            type="button"
            aria-label="Cerrar modal"
            style={styles.closeButton}
            disabled={loading}
            onClick={handleClose}
          >
            ×
          </button>
        </header>

        <div style={styles.body}>
          <section style={styles.placeCard}>
            <div style={styles.placeInfo}>
              {mainPhotoUrl ? (
                <img
                  src={mainPhotoUrl}
                  alt={
                    place?.name ||
                    "Lugar"
                  }
                  style={styles.placeImage}
                />
              ) : (
                <div
                  style={
                    styles.placeImageFallback
                  }
                >
                  {String(
                    place?.name || "LG"
                  )
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}

              <div style={styles.placeText}>
                <span
                  style={
                    styles.sectionEyebrow
                  }
                >
                  Lugar seleccionado
                </span>

                <strong
                  style={styles.placeName}
                >
                  {place?.name ||
                    "Lugar sin nombre"}
                </strong>

                <span
                  style={
                    styles.placeDescription
                  }
                >
                  Estado actual:{" "}
                  {getStatusLabel(
                    currentStatus
                  )}
                </span>
              </div>
            </div>

            <div style={styles.reportCounter}>
              <span
                style={
                  styles.reportCounterLabel
                }
              >
                Reportes
              </span>

              <strong
                style={
                  styles.reportCounterValue
                }
              >
                {reportsCount}
              </strong>
            </div>
          </section>

          <section style={styles.formSection}>
            <div style={styles.sectionHeader}>
              <div>
                <h3
                  style={
                    styles.sectionTitle
                  }
                >
                  Medida administrativa
                </h3>

                <p
                  style={
                    styles.sectionDescription
                  }
                >
                  Selecciona la acción que se aplicará al lugar.
                </p>
              </div>
            </div>

            <div style={styles.actionsGrid}>
              {MODERATION_ACTIONS.map(
                (action) => {
                  const isSelected =
                    selectedAction ===
                    action.id;

                  return (
                    <button
                      key={action.id}
                      type="button"
                      disabled={loading}
                      aria-pressed={
                        isSelected
                      }
                      style={getActionButtonStyle(
                        action.id,
                        selectedAction
                      )}
                      onClick={() =>
                        handleSelectAction(
                          action.id
                        )
                      }
                    >
                      <span
                        style={
                          styles.actionButtonLabel
                        }
                      >
                        {action.label}
                      </span>

                      <span
                        style={
                          styles.actionButtonDescription
                        }
                      >
                        {
                          action.description
                        }
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {actionError ? (
              <p style={styles.fieldError}>
                {actionError}
              </p>
            ) : null}

            {selectedActionData ? (
              <div
                style={
                  selectedAction ===
                  "hidden"
                    ? {
                        ...styles.effectNotice,
                        ...styles.effectNoticeDanger,
                      }
                    : {
                        ...styles.effectNotice,
                        ...styles.effectNoticeWarning,
                      }
                }
              >
                <strong
                  style={
                    styles.effectNoticeTitle
                  }
                >
                  Efecto de la medida
                </strong>

                <span>
                  {
                    selectedActionData.effect
                  }
                </span>
              </div>
            ) : null}
          </section>

          <section style={styles.formSection}>
            <div style={styles.textareaHeader}>
              <label
                htmlFor="moderation-note"
                style={styles.fieldLabel}
              >
                Nota administrativa
              </label>

              <span
                style={styles.characterCount}
              >
                {note.length}/
                {MAX_NOTE_LENGTH}
              </span>
            </div>

            <textarea
              id="moderation-note"
              value={note}
              disabled={loading}
              maxLength={
                MAX_NOTE_LENGTH
              }
              placeholder="Explica por qué se aplicará esta medida..."
              style={
                noteError
                  ? {
                      ...styles.textarea,
                      ...styles.fieldWithError,
                    }
                  : styles.textarea
              }
              onChange={
                handleNoteChange
              }
            />

            <div style={styles.noteFooter}>
              <span
                style={styles.noteHelp}
              >
                Mínimo{" "}
                {MIN_NOTE_LENGTH} caracteres.
              </span>

              {noteError ? (
                <span
                  style={
                    styles.inlineFieldError
                  }
                >
                  {noteError}
                </span>
              ) : null}
            </div>
          </section>

          {selectedAction ===
          "hidden" ? (
            <section
              style={
                styles.dangerConfirmation
              }
            >
              <div
                style={
                  styles.dangerConfirmationHeader
                }
              >
                <strong
                  style={
                    styles.dangerConfirmationTitle
                  }
                >
                  Confirmación requerida
                </strong>

                <span
                  style={
                    styles.dangerConfirmationText
                  }
                >
                  Esta acción retirará públicamente el lugar de la aplicación.
                </span>
              </div>

              <label
                style={
                  styles.checkboxLabel
                }
              >
                <input
                  type="checkbox"
                  checked={confirmHidden}
                  disabled={loading}
                  style={styles.checkbox}
                  onChange={(event) => {
                    setConfirmHidden(
                      event.target.checked
                    );

                    if (
                      submitAttempted
                    ) {
                      setSubmitAttempted(
                        false
                      );
                    }
                  }}
                />

                <span>
                  Confirmo que revisé la información y deseo ocultar este lugar.
                </span>
              </label>

              {confirmationError ? (
                <p
                  style={
                    styles.fieldError
                  }
                >
                  {confirmationError}
                </p>
              ) : null}
            </section>
          ) : null}

          {errorMessage ? (
            <div style={styles.errorBox}>
              {errorMessage}
            </div>
          ) : null}
        </div>

        <footer style={styles.footer}>
          <button
            type="button"
            style={styles.cancelButton}
            disabled={loading}
            onClick={handleClose}
          >
            Cancelar
          </button>

          <button
            type="button"
            disabled={
              loading ||
              !formIsValid
            }
            style={
              selectedAction ===
              "hidden"
                ? {
                    ...styles.submitButton,
                    ...styles.submitButtonDanger,
                    ...(
                      loading ||
                      !formIsValid
                        ? styles.disabledButton
                        : {}
                    ),
                  }
                : {
                    ...styles.submitButton,
                    ...(
                      loading ||
                      !formIsValid
                        ? styles.disabledButton
                        : {}
                    ),
                  }
            }
            onClick={handleSubmit}
          >
            {loading
              ? "Aplicando..."
              : submitLabel}
          </button>
        </footer>
      </section>
    </div>
  );
}