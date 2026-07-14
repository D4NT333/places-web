import React, { useEffect } from "react";

import styles from "./styles";

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
  onClose,
  onOpenUser,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const answers = Array.isArray(review?.answers)
    ? review.answers
    : [];

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

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
            <span style={styles.eyebrow}>Detalle del comentario</span>

            <h2 id="review-detail-title" style={styles.title}>
              Revisión de la experiencia
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={styles.closeButton}
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
            <div style={styles.errorBox}>{errorMessage}</div>
          ) : !review ? (
            <div style={styles.stateBox}>
              No se encontró la información del comentario.
            </div>
          ) : (
            <>
              <section style={styles.userSection}>
               <button
  type="button"
  onClick={() => onOpenUser?.(review.user?.uid)}
  disabled={!review.user?.uid}
  style={styles.userButton}
  title="Abrir detalle del usuario"
>
  {review.user?.photoURL ? (
    <img
      src={review.user.photoURL}
      alt={`Foto de ${review.user?.name || "usuario"}`}
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
      Publicado el {formatDateTime(review.createdAt)}
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
                    {Number(review.rating || 0).toFixed(1)} / 5
                  </strong>
                </article>

                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Recomienda el lugar
                  </span>

                  <strong style={styles.summaryValue}>
                    {getBooleanLabel(review.recommended)}
                  </strong>
                </article>

                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Coincide con lo anunciado
                  </span>

                  <strong style={styles.summaryValue}>
                    {getBooleanLabel(review.matchesAnnouncement)}
                  </strong>
                </article>

                <article style={styles.summaryBox}>
                  <span style={styles.summaryLabel}>
                    Reportes recibidos
                  </span>

                  <strong style={styles.summaryValue}>
                    {Number(review.reportCount) || 0}
                  </strong>
                </article>
              </section>

              <section style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>Comentario</h3>

                  <span style={styles.categoryPill}>
                    {review.category?.label || "Sin categoría"}
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
                    Esta reseña no contiene respuestas adicionales.
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
                          {answer.label || "Sin valoración"}
                        </span>
                      </article>
                    ))}
                  </div>
                )}
              </section>

              <section style={styles.metadataSection}>
                <div style={styles.metadataItem}>
                  <span style={styles.metadataLabel}>Lugar</span>
                  <strong style={styles.metadataValue}>
                    {review.place?.placeName || "Lugar sin nombre"}
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
          <button
            type="button"
            onClick={onClose}
            style={styles.cancelButton}
          >
            Cerrar
          </button>

          {!loading && review && (
            <button
              type="button"
              style={styles.moderateButton}
              onClick={() => {
                console.log(
                  "Después conectaremos la moderación:",
                  review
                );
              }}
            >
              {review.status === "hidden"
                ? "Restaurar comentario"
                : "Ocultar comentario"}
            </button>
          )}
        </footer>
      </section>
    </div>
  );
}