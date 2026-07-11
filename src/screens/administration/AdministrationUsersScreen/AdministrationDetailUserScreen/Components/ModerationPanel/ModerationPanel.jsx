import React, { useEffect, useMemo, useState } from "react";

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
    value: "other",
    label: "Otro",
  },
];

function ModerationPanel({
  isOpen,
  user,
  isSubmitting = false,
  onClose,
  onSubmit,
}) {
  const [moderationType, setModerationType] = useState("warning");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const isPermanent = moderationType === "permanent";

  const panelTitle = useMemo(() => {
    return isPermanent
      ? "Bloquear permanentemente"
      : "Aplicar advertencia";
  }, [isPermanent]);

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

  function validateForm() {
    const nextErrors = {};
    const trimmedMessage = message.trim();

    if (!reason) {
      nextErrors.reason = "Selecciona el motivo de la medida.";
    }

    if (trimmedMessage.length < 10) {
      nextErrors.message =
        "Escribe una explicación de al menos 10 caracteres.";
    }

    if (!confirmationChecked) {
      nextErrors.confirmation =
        "Debes confirmar que deseas aplicar esta medida.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const selectedReason = MODERATION_REASONS.find(
      (item) => item.value === reason
    );

    onSubmit?.({
      userId: user?.id || user?.uid,
      moderationType,
      reason,
      reasonLabel: selectedReason?.label || reason,
      message: message.trim(),
    });
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="moderation-panel-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <span className={styles.headerLabel}>
              Moderación de usuario
            </span>

            <h2
              id="moderation-panel-title"
              className={styles.title}
            >
              {panelTitle}
            </h2>

            <div className={styles.userInformation}>
              <p className={styles.userName}>
                {user?.name || user?.displayName || "Usuario"}
              </p>

              <span
                className={`${styles.statusChip} ${
                  user?.status === "blocked"
                    ? styles.blockedStatusChip
                    : user?.status === "warned"
                      ? styles.warnedStatusChip
                      : user?.status === "under_observation"
                        ? styles.observationStatusChip
                        : styles.activeStatusChip
                }`}
              >
                {user?.statusLabel || "Activo"}
              </span>
            </div>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar panel"
            disabled={isSubmitting}
          >
            ×
          </button>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>
              Tipo de medida
            </h3>

            <div className={styles.sanctionTypeGrid}>
              <button
                type="button"
                className={`${styles.sanctionTypeButton} ${
                  moderationType === "warning"
                    ? styles.sanctionTypeButtonActive
                    : ""
                }`}
                onClick={() => setModerationType("warning")}
                disabled={isSubmitting}
              >
                <span className={styles.sanctionTypeName}>
                  Advertencia
                </span>

                <span className={styles.sanctionTypeDescription}>
                  Se registra una advertencia en el historial del usuario.
                </span>
              </button>

              <button
                type="button"
                className={`${styles.sanctionTypeButton} ${
                  moderationType === "permanent"
                    ? styles.permanentButtonActive
                    : ""
                }`}
                onClick={() => setModerationType("permanent")}
                disabled={isSubmitting}
              >
                <span className={styles.sanctionTypeName}>
                  Bloqueo permanente
                </span>

                <span className={styles.sanctionTypeDescription}>
                  El usuario perderá el acceso a la aplicación.
                </span>
              </button>
            </div>
          </section>

          <section className={styles.section}>
            <label
              className={styles.label}
              htmlFor="moderation-reason"
            >
              Motivo general
            </label>

            <select
              id="moderation-reason"
              className={`${styles.select} ${
                errors.reason ? styles.inputError : ""
              }`}
              value={reason}
              onChange={(event) => {
                setReason(event.target.value);

                setErrors((current) => ({
                  ...current,
                  reason: "",
                }));
              }}
              disabled={isSubmitting}
            >
              <option value="">
                Selecciona un motivo
              </option>

              {MODERATION_REASONS.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>

            {errors.reason && (
              <p className={styles.errorMessage}>
                {errors.reason}
              </p>
            )}
          </section>

          <section className={styles.section}>
           <label
  className={styles.label}
  htmlFor="moderation-message"
>
  Explicación
</label>

<textarea
  id="moderation-message"
  className={`${styles.textarea} ${
    errors.message ? styles.inputError : ""
  }`}
  value={message}
  maxLength={500}
  placeholder={
    isPermanent
      ? "Explica por qué el usuario será bloqueado permanentemente..."
      : "Explica el motivo de la advertencia..."
  }
  onChange={(event) => {
    setMessage(event.target.value);

    setErrors((current) => ({
      ...current,
      message: "",
    }));
  }}
  disabled={isSubmitting}
/>

<span className={styles.characterCount}>
  {message.length}/500
</span>

            {errors.message && (
              <p className={styles.errorMessage}>
                {errors.message}
              </p>
            )}
          </section>

          {isPermanent && (
            <section
              className={`${styles.warningBox} ${styles.permanentWarningBox}`}
            >
              <strong>
                Esta acción impedirá permanentemente el acceso del usuario.
              </strong>

              <p>
                El bloqueo, la explicación, la fecha y el administrador
                responsable quedarán registrados en el historial de
                moderación.
              </p>
            </section>
          )}

          <section className={styles.confirmationSection}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={confirmationChecked}
                onChange={(event) => {
                  setConfirmationChecked(event.target.checked);

                  setErrors((current) => ({
                    ...current,
                    confirmation: "",
                  }));
                }}
                disabled={isSubmitting}
              />

              <span>
                Confirmo que revisé la actividad del usuario y deseo aplicar
                esta medida.
              </span>
            </label>

            {errors.confirmation && (
              <p className={styles.errorMessage}>
                {errors.confirmation}
              </p>
            )}
          </section>

          <footer className={styles.footer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className={`${styles.submitButton} ${
                isPermanent ? styles.permanentSubmitButton : ""
              }`}
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
      </aside>
    </div>
  );
}

export default ModerationPanel;