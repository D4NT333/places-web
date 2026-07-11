import React, { useEffect, useState } from "react";

import styles from "./styles";

function ReportDetailModal({
  isOpen,
  report,
  isSubmitting = false,
  onClose,
  onValidate,
  onDiscard,
}) {
  const [resolutionNote, setResolutionNote] = useState("");
  const [selectedAction, setSelectedAction] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setResolutionNote("");
      setSelectedAction(null);
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !isSubmitting) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen || !report) {
    return null;
  }

  const handleAction = async (action) => {
    const trimmedNote = resolutionNote.trim();

    if (trimmedNote.length < 10) {
      setErrorMessage(
        "Escribe una resolución de al menos 10 caracteres."
      );

      return;
    }

    setErrorMessage("");
    setSelectedAction(action);

    const payload = {
      reportId: report.id,
      resolutionNote: trimmedNote,
    };

    if (action === "validate") {
      await onValidate?.(payload);
      return;
    }

    await onDiscard?.(payload);
  };

  const handleOverlayMouseDown = () => {
    if (!isSubmitting) {
      onClose?.();
    }
  };

  return (
    <div
      style={styles.overlay}
      onMouseDown={handleOverlayMouseDown}
    >
      <section
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header style={styles.header}>
          <div>
            <span style={styles.headerLabel}>
              Revisión de reporte
            </span>

            <h2
              id="report-modal-title"
              style={styles.title}
            >
              {report.reason}
            </h2>
          </div>

          <button
            type="button"
            style={{
              ...styles.closeButton,
              ...(isSubmitting ? styles.disabledButton : {}),
            }}
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Cerrar reporte"
          >
            ×
          </button>
        </header>

        <div style={styles.content}>
          <div style={styles.statusRow}>
            <span style={styles.pendingChip}>
              {report.statusLabel || "Pendiente"}
            </span>

            {report.priority ? (
              <span style={styles.priorityChip}>
                Prioridad: {report.priority}
              </span>
            ) : null}

            <span style={styles.date}>
              {report.date || "Sin fecha"}
            </span>
          </div>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Motivo del reporte
            </h3>

            <div style={styles.reasonBox}>
              <strong>{report.reason}</strong>

              <p style={styles.message}>
                {report.message || "Sin explicación proporcionada."}
              </p>
            </div>
          </section>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Personas relacionadas
            </h3>

            <div style={styles.peopleGrid}>
              <article style={styles.personCard}>
                <span style={styles.personLabel}>
                  Reportado por
                </span>

                <div style={styles.personInformation}>
                  {report.reporter?.photoURL ? (
                    <img
                      src={report.reporter.photoURL}
                      alt=""
                      style={styles.avatar}
                    />
                  ) : (
                    <div style={styles.avatarFallback}>
                      {report.reporter?.name
                        ?.charAt(0)
                        ?.toUpperCase() || "U"}
                    </div>
                  )}

                  <div style={styles.personText}>
                    <strong>
                      {report.reporter?.name || "Usuario"}
                    </strong>

                    <span>
                      {report.reporter?.email || "Sin correo"}
                    </span>
                  </div>
                </div>
              </article>

              <article style={styles.personCard}>
                <span style={styles.personLabel}>
                  Usuario reportado
                </span>

                <div style={styles.personInformation}>
                  <div style={styles.avatarFallback}>
                    {report.reportedUser?.name
                      ?.charAt(0)
                      ?.toUpperCase() || "U"}
                  </div>

                  <div style={styles.personText}>
                    <strong>
                      {report.reportedUser?.name || "Usuario"}
                    </strong>

                    <span>
                      Perfil reportado
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Elemento relacionado
            </h3>

            <div style={styles.relatedCard}>
              <div style={styles.relatedRow}>
                <span style={styles.relatedLabel}>Origen</span>

                <strong>
                  {report.source === "review"
                    ? "Reseña"
                    : report.source || "Usuario"}
                </strong>
              </div>

              {report.place?.placeName ? (
                <div style={styles.relatedRow}>
                  <span style={styles.relatedLabel}>Lugar</span>

                  <strong>{report.place.placeName}</strong>
                </div>
              ) : null}

              {report.review?.rating != null ? (
                <div style={styles.relatedRow}>
                  <span style={styles.relatedLabel}>
                    Calificación
                  </span>

                  <strong>
                    {report.review.rating}/5
                  </strong>
                </div>
              ) : null}
            </div>
          </section>

          <section style={styles.section}>
            <label
              htmlFor="report-resolution-note"
              style={styles.sectionTitle}
            >
              Resolución administrativa
            </label>

            <textarea
              id="report-resolution-note"
              style={{
                ...styles.textarea,
                ...(errorMessage ? styles.textareaError : {}),
              }}
              value={resolutionNote}
              maxLength={500}
              placeholder="Explica por qué el reporte será validado o descartado..."
              onChange={(event) => {
                setResolutionNote(event.target.value);
                setErrorMessage("");
              }}
              disabled={isSubmitting}
            />

            <div style={styles.textareaFooter}>
              {errorMessage ? (
                <span style={styles.errorMessage}>
                  {errorMessage}
                </span>
              ) : (
                <span />
              )}

              <span style={styles.characterCount}>
                {resolutionNote.length}/500
              </span>
            </div>
          </section>
        </div>

        <footer style={styles.footer}>
          <button
            type="button"
            style={{
              ...styles.discardButton,
              ...(isSubmitting ? styles.disabledButton : {}),
            }}
            onClick={() => handleAction("discard")}
            disabled={isSubmitting}
          >
            {isSubmitting && selectedAction === "discard"
              ? "Descartando..."
              : "Descartar reporte"}
          </button>

          <button
            type="button"
            style={{
              ...styles.validateButton,
              ...(isSubmitting ? styles.disabledButton : {}),
            }}
            onClick={() => handleAction("validate")}
            disabled={isSubmitting}
          >
            {isSubmitting && selectedAction === "validate"
              ? "Validando..."
              : "Validar reporte"}
          </button>
        </footer>
      </section>
    </div>
  );
}

export default ReportDetailModal;