import React, {
  useEffect,
  useState,
} from "react";

import styles from "./styles";

const MIN_REASON_LENGTH = 5;
const MAX_REASON_LENGTH = 300;

function formatDateTime(value) {
  if (!value) {
    return "Sin registro";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin registro";
  }

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getBooleanLabel(value) {
  if (value === true) {
    return "Sí";
  }

  if (value === false) {
    return "No";
  }

  return "No especificado";
}

function getStatusLabel(status) {
  const labels = {
    published: "Publicado",
    hidden: "Oculto",
    deleted: "Eliminado",
  };

  return labels[status] || status || "Sin estado";
}

export default function ReviewDetailModal({
  isOpen,
  review,
  loading = false,
  errorMessage = "",
  isChangingVisibility = false,
  visibilityError = "",
  onClose,
  onOpenUser,
  onChangeVisibility,
}) {
  const [showHideForm, setShowHideForm] = useState(false);
  const [hideReason, setHideReason] = useState("");
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        !isChangingVisibility
      ) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isOpen,
    isChangingVisibility,
    onClose,
  ]);

  useEffect(() => {
    if (!isOpen) {
      setShowHideForm(false);
      setHideReason("");
      setLocalError("");
    }
  }, [isOpen]);

  useEffect(() => {
    setShowHideForm(false);
    setHideReason("");
    setLocalError("");
  }, [review?.reviewId, review?.status]);

  if (!isOpen) {
    return null;
  }

  const answers = Array.isArray(review?.answers)
    ? review.answers
    : [];

  const isHidden = review?.status === "hidden";

  const handleBackdropClick = (event) => {
    if (
      event.target === event.currentTarget &&
      !isChangingVisibility
    ) {
      onClose?.();
    }
  };

  const handleVisibilityButton = () => {
    setLocalError("");

    if (isHidden) {
      onChangeVisibility?.({
        hidden: false,
        reason: "",
      });

      return;
    }

    setShowHideForm(true);
  };

  const handleConfirmHide = () => {
    const cleanReason = hideReason.trim();

    if (cleanReason.length < MIN_REASON_LENGTH) {
      setLocalError(
        `El motivo debe tener al menos ${MIN_REASON_LENGTH} caracteres.`
      );

      return;
    }

    if (cleanReason.length > MAX_REASON_LENGTH) {
      setLocalError(
        `El motivo no puede superar ${MAX_REASON_LENGTH} caracteres.`
      );

      return;
    }

    setLocalError("");

    onChangeVisibility?.({
      hidden: true,
      reason: cleanReason,
    });
  };

  const handleCancelHide = () => {
    if (isChangingVisibility) {
      return;
    }

    setShowHideForm(false);
    setHideReason("");
    setLocalError("");
  };

  const displayedError =
    localError ||
    visibilityError;

  return (
    <div
      style={styles.backdrop}
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <section
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-detail-title"
      >
        <header style={styles.header}>
          <div>
            <span style={styles.eyebrow}>
              Detalle del comentario
            </span>

            <h2
              id="review-detail-title"
              style={styles.title}
            >
              Revisión de la experiencia
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isChangingVisibility}
            style={{
              ...styles.closeButton,
              cursor: isChangingVisibility
                ? "not-allowed"
                : "pointer",
              opacity: isChangingVisibility
                ? 0.6
                : 1,
            }}
            aria-label="Cerrar detalle"
          >
            ×
          </button>
        </header>

        <div style={styles.content}>
          {loading ? (
            <div style={styles.stateBox}>
              Cargando información del comentario...
            </div>
          ) : errorMessage ? (
            <div style={styles.errorBox}>
              {errorMessage}
            </div>
          ) : !review ? (
            <div style={styles.stateBox}>
              No se encontró la información del comentario.
            </div>
          ) : (
            <>
              <section style={styles.userSection}>
                <button
                  type="button"
                  onClick={() =>
                    onOpenUser?.(review.user?.uid)
                  }
                  disabled={
                    !review.user?.uid ||
                    isChangingVisibility
                  }
                  style={styles.userButton}
                  title="Abrir detalle del usuario"
                >
                  {review.user?.photoURL ? (
                    <img
                      src={review.user.photoURL}
                      alt={`Foto de ${
                        review.user?.name || "usuario"
                      }`}
                      style={styles.avatar}
                    />
                  ) : (
                    <div style={styles.avatarFallback}>
                      {(review.user?.name || "U")
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                  )}

                  <div style={styles.userText}>
                    <strong style={styles.userNameLink}>
                      {review.user?.name || "Usuario"}
                    </strong>

                    <span style={styles.secondaryText}>
                      Publicado el{" "}
                      {formatDateTime(review.createdAt)}
                    </span>
                  </div>
                </button>

                <span style={styles.statusPill}>
                  {getStatusLabel(review.status)}
                </span>
              </section>

              <section style={styles.summaryGrid}>
                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Valoración general
                  </span>

                  <strong style={styles.summaryValue}>
                    {Number(
                      review.rating || 0
                    ).toFixed(1)}{" "}
                    / 5
                  </strong>
                </article>

                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Recomienda el lugar
                  </span>

                  <strong style={styles.summaryValue}>
                    {getBooleanLabel(
                      review.recommended
                    )}
                  </strong>
                </article>

                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Coincide con lo anunciado
                  </span>

                  <strong style={styles.summaryValue}>
                    {getBooleanLabel(
                      review.matchesAnnouncement
                    )}
                  </strong>
                </article>

                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Reportes asociados
                  </span>

                  <strong style={styles.summaryValue}>
                    {Number(review.reportCount) || 0}
                  </strong>
                </article>
              </section>

              <section style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>
                    Comentario
                  </h3>

                  <span style={styles.categoryPill}>
                    {review.category?.label ||
                      "Sin categoría"}
                  </span>
                </div>

                <div style={styles.commentBox}>
                  {review.commentText ||
                    "El usuario no agregó un comentario escrito."}
                </div>
              </section>

              <section style={styles.section}>
                <h3 style={styles.sectionTitle}>
                  Respuestas de la experiencia
                </h3>

                {answers.length === 0 ? (
                  <div style={styles.emptyAnswers}>
                    Esta reseña no contiene respuestas
                    adicionales.
                  </div>
                ) : (
                  <div style={styles.answersList}>
                    {answers.map((answer, index) => (
                      <article
                        key={
                          answer.questionId ||
                          `${answer.questionText}-${index}`
                        }
                        style={styles.answerCard}
                      >
                        <div style={styles.answerHeader}>
                          <span style={styles.questionNumber}>
                            Pregunta {index + 1}
                          </span>

                          <strong style={styles.answerScore}>
                            {Number(answer.value) || 0}/5
                          </strong>
                        </div>

                        <p style={styles.questionText}>
                          {answer.questionText ||
                            "Pregunta no disponible"}
                        </p>

                        <span style={styles.answerLabel}>
                          {answer.label ||
                            "Sin valoración"}
                        </span>
                      </article>
                    ))}
                  </div>
                )}
              </section>

              {showHideForm && !isHidden && (
                <section style={styles.moderationSection}>
                  <h3 style={styles.sectionTitle}>
                    Motivo para ocultar
                  </h3>

                  <p style={styles.moderationHelp}>
                    Esta reseña dejará de aparecer en la
                    aplicación móvil, pero seguirá disponible
                    en el panel administrativo.
                  </p>

                  <textarea
                    value={hideReason}
                    onChange={(event) => {
                      setHideReason(event.target.value);
                      setLocalError("");
                    }}
                    disabled={isChangingVisibility}
                    maxLength={MAX_REASON_LENGTH}
                    placeholder="Describe por qué se ocultará este comentario."
                    style={styles.reasonInput}
                  />

                  <div style={styles.reasonMeta}>
                    <span>
                      Mínimo {MIN_REASON_LENGTH} caracteres
                    </span>

                    <span>
                      {hideReason.length}/{MAX_REASON_LENGTH}
                    </span>
                  </div>

                  {displayedError && (
                    <div style={styles.moderationError}>
                      {displayedError}
                    </div>
                  )}
                </section>
              )}

              {!showHideForm && displayedError && (
                <div style={styles.moderationError}>
                  {displayedError}
                </div>
              )}

              <section style={styles.metadataSection}>
                <div style={styles.metadataItem}>
                  <span style={styles.metadataLabel}>
                    Lugar
                  </span>

                  <strong style={styles.metadataValue}>
                    {review.place?.placeName ||
                      "Lugar sin nombre"}
                  </strong>
                </div>

                <div style={styles.metadataItem}>
                  <span style={styles.metadataLabel}>
                    Última actualización
                  </span>

                  <strong style={styles.metadataValue}>
                    {formatDateTime(review.updatedAt)}
                  </strong>
                </div>
              </section>
            </>
          )}
        </div>

        <footer style={styles.footer}>
          {showHideForm && !isHidden ? (
            <>
              <button
                type="button"
                onClick={handleCancelHide}
                disabled={isChangingVisibility}
                style={styles.cancelButton}
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleConfirmHide}
                disabled={isChangingVisibility}
                style={{
                  ...styles.moderateButton,
                  cursor: isChangingVisibility
                    ? "not-allowed"
                    : "pointer",
                  opacity: isChangingVisibility
                    ? 0.7
                    : 1,
                }}
              >
                {isChangingVisibility
                  ? "Ocultando..."
                  : "Confirmar ocultar"}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={onClose}
                disabled={isChangingVisibility}
                style={styles.cancelButton}
              >
                Cerrar
              </button>

              {!loading && review && (
                <button
                  type="button"
                  style={{
                    ...styles.moderateButton,
                    cursor: isChangingVisibility
                      ? "not-allowed"
                      : "pointer",
                    opacity: isChangingVisibility
                      ? 0.7
                      : 1,
                  }}
                  onClick={handleVisibilityButton}
                  disabled={isChangingVisibility}
                >
                  {isChangingVisibility
                    ? isHidden
                      ? "Restaurando..."
                      : "Ocultando..."
                    : isHidden
                      ? "Restaurar comentario"
                      : "Ocultar comentario"}
                </button>
              )}
            </>
          )}
        </footer>
      </section>
    </div>
  );
}