import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./styles";

const MODERATION_REASONS = [
  {
    value: "spam",
    label: "Spam",
  },
  {
    value: "offensive_content",
    label: "Contenido ofensivo",
  },
  {
    value: "false_information",
    label: "Información falsa",
  },
  {
    value: "harassment",
    label: "Acoso a otros usuarios",
  },
  {
    value: "inappropriate_profile",
    label: "Perfil o nombre inapropiado",
  },
  {
    value: "repeated_violations",
    label: "Infracciones reiteradas",
  },
  {
    value: "other",
    label: "Otro",
  },
];

const STATUS_CLASS_NAMES = {
  active: "activeStatusChip",
  warned: "warnedStatusChip",
  banned: "blockedStatusChip",

  pending_email_verification:
    "pendingStatusChip",
};

export default function UserModerationModal({
  isOpen,
  user,
  isSubmitting = false,
  submitError = "",
  onClose,
  onSubmit,
}) {
  const [moderationType, setModerationType] =
    useState("warning");

  const [reason, setReason] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [
    confirmationChecked,
    setConfirmationChecked,
  ] = useState(false);

  const [errors, setErrors] =
    useState({});

  const isPermanent =
    moderationType === "permanent";

  const modalTitle = useMemo(() => {
    return isPermanent
      ? "Bloquear permanentemente"
      : "Aplicar advertencia";
  }, [isPermanent]);

  const statusClassName =
    STATUS_CLASS_NAMES[user?.status] ||
    "activeStatusChip";

  useEffect(() => {
    if (!isOpen) {
      setModerationType("warning");
      setReason("");
      setMessage("");
      setConfirmationChecked(false);
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    setErrors({});
    setConfirmationChecked(false);
  }, [moderationType]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        !isSubmitting
      ) {
        onClose?.();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    isOpen,
    isSubmitting,
    onClose,
  ]);

  if (!isOpen) {
    return null;
  }

  function validateForm() {
    const nextErrors = {};
    const cleanMessage =
      message.trim();

    if (!reason) {
      nextErrors.reason =
        "Selecciona el motivo de la medida.";
    }

    if (cleanMessage.length < 10) {
      nextErrors.message =
        "Escribe una explicación de al menos 10 caracteres.";
    }

    if (!confirmationChecked) {
      nextErrors.confirmation =
        "Debes confirmar que deseas aplicar esta medida.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  }

  function handleOverlayMouseDown(event) {
    if (
      event.target === event.currentTarget &&
      !isSubmitting
    ) {
      onClose?.();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const selectedReason =
      MODERATION_REASONS.find(
        (item) => item.value === reason,
      );

    onSubmit?.({
      userId:
        user?.id ||
        user?.uid,

      moderationType,

      reason,

      reasonLabel:
        selectedReason?.label ||
        reason,

      message:
        message.trim(),
    });
  }

  return (
    <div
      style={styles.overlay}
      onMouseDown={
        handleOverlayMouseDown
      }
    >
      <section
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="user-moderation-title"
      >
        <header style={styles.header}>
          <div>
            <span style={styles.headerLabel}>
              Moderación de usuario
            </span>

            <h2
              id="user-moderation-title"
              style={styles.title}
            >
              {modalTitle}
            </h2>

            <div
              style={
                styles.userInformation
              }
            >
              <strong
                style={styles.userName}
              >
                {user?.name ||
                  user?.displayName ||
                  "Usuario"}
              </strong>

              <span
                style={{
                  ...styles.statusChip,
                  ...styles[
                    statusClassName
                  ],
                }}
              >
                {user?.statusLabel ||
                  "Activo"}
              </span>
            </div>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar modal"
            disabled={isSubmitting}
          >
            ×
          </button>
        </header>

        <form
          style={styles.form}
          onSubmit={handleSubmit}
        >
          <div style={styles.body}>
            <section style={styles.section}>
              <h3
                style={
                  styles.sectionTitle
                }
              >
                Tipo de medida
              </h3>

              <div
                style={
                  styles.sanctionTypeGrid
                }
              >
                <button
                  type="button"
                  style={{
                    ...styles.sanctionTypeButton,

                    ...(moderationType ===
                    "warning"
                      ? styles.warningButtonActive
                      : {}),
                  }}
                  onClick={() =>
                    setModerationType(
                      "warning",
                    )
                  }
                  disabled={isSubmitting}
                >
                  <span
                    style={
                      styles.sanctionTypeName
                    }
                  >
                    Advertencia
                  </span>

                  <span
                    style={
                      styles.sanctionTypeDescription
                    }
                  >
                    Se registra una advertencia
                    en el historial del
                    usuario.
                  </span>
                </button>

                <button
                  type="button"
                  style={{
                    ...styles.sanctionTypeButton,

                    ...(isPermanent
                      ? styles.permanentButtonActive
                      : {}),
                  }}
                  onClick={() =>
                    setModerationType(
                      "permanent",
                    )
                  }
                  disabled={isSubmitting}
                >
                  <span
                    style={
                      styles.sanctionTypeName
                    }
                  >
                    Bloqueo permanente
                  </span>

                  <span
                    style={
                      styles.sanctionTypeDescription
                    }
                  >
                    El usuario perderá el
                    acceso a la aplicación.
                  </span>
                </button>
              </div>
            </section>

            <section style={styles.section}>
              <label
                style={styles.label}
                htmlFor="moderation-reason"
              >
                Motivo general
              </label>

              <select
                id="moderation-reason"
                style={{
                  ...styles.select,

                  ...(errors.reason
                    ? styles.inputError
                    : {}),
                }}
                value={reason}
                onChange={(event) => {
                  setReason(
                    event.target.value,
                  );

                  setErrors(
                    (current) => ({
                      ...current,
                      reason: "",
                    }),
                  );
                }}
                disabled={isSubmitting}
              >
                <option value="">
                  Selecciona un motivo
                </option>

                {MODERATION_REASONS.map(
                  (item) => (
                    <option
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ),
                )}
              </select>

              {errors.reason ? (
                <p
                  style={
                    styles.errorMessage
                  }
                >
                  {errors.reason}
                </p>
              ) : null}
            </section>

            <section style={styles.section}>
              <label
                style={styles.label}
                htmlFor="moderation-message"
              >
                Explicación
              </label>

              <textarea
                id="moderation-message"
                style={{
                  ...styles.textarea,

                  ...(errors.message
                    ? styles.inputError
                    : {}),
                }}
                value={message}
                maxLength={500}
                placeholder={
                  isPermanent
                    ? "Explica por qué el usuario será bloqueado permanentemente..."
                    : "Explica el motivo de la advertencia..."
                }
                onChange={(event) => {
                  setMessage(
                    event.target.value,
                  );

                  setErrors(
                    (current) => ({
                      ...current,
                      message: "",
                    }),
                  );
                }}
                disabled={isSubmitting}
              />

              <div
                style={
                  styles.textareaFooter
                }
              >
                {errors.message ? (
                  <span
                    style={
                      styles.errorMessage
                    }
                  >
                    {errors.message}
                  </span>
                ) : (
                  <span />
                )}

                <span
                  style={
                    styles.characterCount
                  }
                >
                  {message.length}/500
                </span>
              </div>
            </section>

            {isPermanent ? (
              <section
                style={
                  styles.permanentWarningBox
                }
              >
                <strong>
                  Esta acción impedirá el
                  acceso del usuario.
                </strong>

                <p
                  style={
                    styles.warningText
                  }
                >
                  El bloqueo, la explicación,
                  la fecha y el administrador
                  responsable quedarán
                  registrados en el historial.
                </p>
              </section>
            ) : null}

            <section
              style={
                styles.confirmationSection
              }
            >
              <label
                style={
                  styles.checkboxLabel
                }
              >
                <input
                  type="checkbox"
                  checked={
                    confirmationChecked
                  }
                  onChange={(event) => {
                    setConfirmationChecked(
                      event.target.checked,
                    );

                    setErrors(
                      (current) => ({
                        ...current,
                        confirmation: "",
                      }),
                    );
                  }}
                  disabled={isSubmitting}
                />

                <span>
                  Confirmo que revisé la
                  actividad del usuario y
                  deseo aplicar esta medida.
                </span>
              </label>

              {errors.confirmation ? (
                <p
                  style={
                    styles.errorMessage
                  }
                >
                  {errors.confirmation}
                </p>
              ) : null}
            </section>

            {submitError ? (
              <div
                style={
                  styles.submitErrorBox
                }
              >
                {submitError}
              </div>
            ) : null}
          </div>

          <footer style={styles.footer}>
            <button
              type="button"
              style={styles.cancelButton}
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </button>

            <button
              type="submit"
              style={{
                ...styles.submitButton,

                ...(isPermanent
                  ? styles.permanentSubmitButton
                  : {}),
              }}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Procesando..."
                : isPermanent
                  ? "Bloquear permanentemente"
                  : "Aplicar advertencia"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}