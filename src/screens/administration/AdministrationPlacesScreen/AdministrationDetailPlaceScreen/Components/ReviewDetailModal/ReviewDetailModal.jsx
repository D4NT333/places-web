import React, {
  useEffect,
  useState,
} from "react";

import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Eye,
  EyeOff,
  Flag,
  HelpCircle,
  History,
  MapPinned,
  MessageSquareText,
  RotateCcw,
  ShieldAlert,
  Star,
  ThumbsUp,
  UserRound,
  X,
} from "lucide-react";

import styles from "./styles";

const MIN_REASON_LENGTH = 5;
const MAX_REASON_LENGTH = 300;

function formatDateTime(value) {
  if (!value) {
    return "Sin registro";
  }

  const date = new Date(value);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return "Sin registro";
  }

  return new Intl.DateTimeFormat(
    "es-MX",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  ).format(date);
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

  return (
    labels[status] ||
    status ||
    "Sin estado"
  );
}

function getStatusPillStyle(status) {
  if (status === "hidden") {
    return {
      ...styles.statusPill,

      color: "#d23f3f",
      background: "#fff0f0",
      borderColor: "#f5bebe",
    };
  }

  if (status === "deleted") {
    return {
      ...styles.statusPill,

      color: "#5c7189",
      background: "#f1f5f9",
      borderColor: "#d0dbe6",
    };
  }

  return styles.statusPill;
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
  const [
    showHideForm,
    setShowHideForm,
  ] = useState(false);

  const [
    hideReason,
    setHideReason,
  ] = useState("");

  const [
    localError,
    setLocalError,
  ] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event,
    ) => {
      if (
        event.key === "Escape" &&
        !isChangingVisibility
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
  }, [
    review?.reviewId,
    review?.status,
  ]);

  if (!isOpen) {
    return null;
  }

  const answers =
    Array.isArray(
      review?.answers,
    )
      ? review.answers
      : [];

  const isHidden =
    review?.status ===
    "hidden";

  const handleBackdropClick = (
    event,
  ) => {
    if (
      event.target ===
        event.currentTarget &&
      !isChangingVisibility
    ) {
      onClose?.();
    }
  };

  const handleVisibilityButton =
    () => {
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
    const cleanReason =
      hideReason.trim();

    if (
      cleanReason.length <
      MIN_REASON_LENGTH
    ) {
      setLocalError(
        `El motivo debe tener al menos ${MIN_REASON_LENGTH} caracteres.`,
      );

      return;
    }

    if (
      cleanReason.length >
      MAX_REASON_LENGTH
    ) {
      setLocalError(
        `El motivo no puede superar ${MAX_REASON_LENGTH} caracteres.`,
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
    if (
      isChangingVisibility
    ) {
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
      onMouseDown={
        handleBackdropClick
      }
      role="presentation"
    >
      <section
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-detail-title"
      >
        <header style={styles.header}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: 62,
                height: 62,
                flexShrink: 0,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "#7441d6",

                background:
                  "linear-gradient(145deg, #f3edff, #fbf9ff)",

                border:
                  "1px solid #d8c6f7",

                borderRadius: 16,

                boxShadow:
                  "0 7px 18px rgba(116, 65, 214, 0.12)",
              }}
            >
              <MessageSquareText
                size={50}
                strokeWidth={2.15}
              />
            </div>

            <div>
              <span
                style={
                  styles.eyebrow
                }
              >
                Detalle del comentario
              </span>

              <h2
                id="review-detail-title"
                style={styles.title}
              >
                Revisión de la experiencia
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={
              isChangingVisibility
            }
            style={{
              ...styles.closeButton,

              cursor:
                isChangingVisibility
                  ? "not-allowed"
                  : "pointer",

              opacity:
                isChangingVisibility
                  ? 0.6
                  : 1,
            }}
            aria-label="Cerrar detalle"
          >
            <X
              size={40}
              strokeWidth={2.3}
            />
          </button>
        </header>

        <div style={styles.content}>
          {loading ? (
            <div style={styles.stateBox}>
              <History
                size={50}
                strokeWidth={2}
              />

              <span>
                Cargando información del
                comentario...
              </span>
            </div>
          ) : errorMessage ? (
            <div style={styles.errorBox}>
              <AlertCircle
                size={50}
                strokeWidth={2.2}
              />

              {errorMessage}
            </div>
          ) : !review ? (
            <div style={styles.stateBox}>
              <MessageSquareText
                size={50}
                strokeWidth={2}
              />

              <span>
                No se encontró la
                información del
                comentario.
              </span>
            </div>
          ) : (
            <>
              <section
                style={
                  styles.userSection
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    onOpenUser?.(
                      review.user
                        ?.uid,
                    )
                  }
                  disabled={
                    !review.user
                      ?.uid ||
                    isChangingVisibility
                  }
                  style={
                    styles.userButton
                  }
                  title="Abrir detalle del usuario"
                >
                  {review.user
                    ?.photoURL ? (
                    <img
                      src={
                        review.user
                          .photoURL
                      }
                      alt={`Foto de ${
                        review.user
                          ?.name ||
                        "usuario"
                      }`}
                      style={
                        styles.avatar
                      }
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div
                      style={
                        styles.avatarFallback
                      }
                    >
                      {(review.user
                        ?.name ||
                        "U")
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                  )}

                  <div
                    style={
                      styles.userText
                    }
                  >
          

                    <strong
                      style={
                        styles.userNameLink
                      }
                    >
                      {review.user
                        ?.name ||
                        "Usuario"}
                    </strong>

                    <span
                      style={
                        styles.secondaryText
                      }
                    >
                      Publicado el{" "}
                      {formatDateTime(
                        review.createdAt,
                      )}
                    </span>
                  </div>
                </button>

                <span
                  style={getStatusPillStyle(
                    review.status,
                  )}
                >
                  {isHidden ? (
                    <EyeOff
                      size={40}
                      strokeWidth={2.2}
                    />
                  ) : (
                    <CheckCircle2
                      size={40}
                      strokeWidth={2.2}
                    />
                  )}

                  {getStatusLabel(
                    review.status,
                  )}
                </span>
              </section>

              <section
                style={
                  styles.summaryGrid
                }
              >
                <article
                  style={
                    styles.summaryBox
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: 7,
                      color:
                        "#d17d08",
                    }}
                  >
                    <Star
                      size={50}
                      strokeWidth={2.15}
                    />

                    <span
                      style={
                        styles.summaryLabel
                      }
                    >
                      Valoración general
                    </span>
                  </div>

                  <strong
                    style={
                      styles.summaryValue
                    }
                  >
                    {Number(
                      review.rating ||
                        0,
                    ).toFixed(1)}{" "}
                    / 5
                  </strong>
                </article>

                <article
                  style={
                    styles.summaryBox
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: 7,
                      color:
                        "#078e4a",
                    }}
                  >
                    <ThumbsUp
                      size={50}
                      strokeWidth={2.15}
                    />

                    <span
                      style={
                        styles.summaryLabel
                      }
                    >
                      Recomienda el lugar
                    </span>
                  </div>

                  <strong
                    style={
                      styles.summaryValue
                    }
                  >
                    {getBooleanLabel(
                      review.recommended,
                    )}
                  </strong>
                </article>

                <article
                  style={
                    styles.summaryBox
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: 7,
                      color:
                        "#2176e5",
                    }}
                  >
                    <CheckCircle2
                      size={70}
                      strokeWidth={2.15}
                    />

                    <span
                      style={
                        styles.summaryLabel
                      }
                    >
                      Coincide con lo
                      anunciado
                    </span>
                  </div>

                  <strong
                    style={
                      styles.summaryValue
                    }
                  >
                    {getBooleanLabel(
                      review.matchesAnnouncement,
                    )}
                  </strong>
                </article>

                <article
                  style={
                    styles.summaryBox
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: 7,
                      color:
                        "#d23f3f",
                    }}
                  >
                    <Flag
                      size={50}
                      strokeWidth={2.15}
                    />

                    <span
                      style={
                        styles.summaryLabel
                      }
                    >
                      Reportes asociados
                    </span>
                  </div>

                  <strong
                    style={
                      styles.summaryValue
                    }
                  >
                    {Number(
                      review.reportCount,
                    ) || 0}
                  </strong>
                </article>
              </section>

              <section
                style={styles.section}
              >
                <div
                  style={
                    styles.sectionHeader
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: 8,
                    }}
                  >
                    <MessageSquareText
                      size={40}
                      strokeWidth={2.15}
                      color="#7441d6"
                    />

                    <h3
                      style={{
                        ...styles.sectionTitle,
                        margin: 0,
                      }}
                    >
                      Comentario
                    </h3>
                  </div>

                  <span
                    style={
                      styles.categoryPill
                    }
                  >
                    {review.category
                      ?.label ||
                      "Sin categoría"}
                  </span>
                </div>

                <div
                  style={
                    styles.commentBox
                  }
                >
                  {review.commentText ||
                    "El usuario no agregó un comentario escrito."}
                </div>
              </section>

              <section
                style={styles.section}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <HelpCircle
                    size={40}
                    strokeWidth={2.15}
                    color="#2176e5"
                  />

                  <h3
                    style={{
                      ...styles.sectionTitle,
                      margin: 0,
                    }}
                  >
                    Respuestas de la
                    experiencia
                  </h3>
                </div>

                {answers.length ===
                0 ? (
                  <div
                    style={
                      styles.emptyAnswers
                    }
                  >
                    <HelpCircle
                      size={40}
                      strokeWidth={2}
                    />

                    <span>
                      Esta reseña no
                      contiene respuestas
                      adicionales.
                    </span>
                  </div>
                ) : (
                  <div
                    style={
                      styles.answersList
                    }
                  >
                    {answers.map(
                      (
                        answer,
                        index,
                      ) => (
                        <article
                          key={
                            answer.questionId ||
                            `${answer.questionText}-${index}`
                          }
                          style={
                            styles.answerCard
                          }
                        >
                          <div
                            style={
                              styles.answerHeader
                            }
                          >
                            <span
                              style={
                                styles.questionNumber
                              }
                            >
                              Pregunta{" "}
                              {index + 1}
                            </span>

                            <strong
                              style={
                                styles.answerScore
                              }
                            >
                              {Number(
                                answer.value,
                              ) || 0}
                              /5
                            </strong>
                          </div>

                          <p
                            style={
                              styles.questionText
                            }
                          >
                            {answer.questionText ||
                              "Pregunta no disponible"}
                          </p>

                          <span
                            style={
                              styles.answerLabel
                            }
                          >
                            {answer.label ||
                              "Sin valoración"}
                          </span>
                        </article>
                      ),
                    )}
                  </div>
                )}
              </section>

              {showHideForm &&
              !isHidden ? (
                <section
                  style={
                    styles.moderationSection
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems:
                        "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <ShieldAlert
                      size={40}
                      strokeWidth={2.15}
                    />

                    <h3
                      style={{
                        ...styles.sectionTitle,
                        margin: 0,
                        color:
                          "#a82d36",
                      }}
                    >
                      Motivo para ocultar
                    </h3>
                  </div>

                  <p
                    style={
                      styles.moderationHelp
                    }
                  >
                    Esta reseña dejará de
                    aparecer en la
                    aplicación móvil, pero
                    seguirá disponible en
                    el panel
                    administrativo.
                  </p>

                  <textarea
                    value={hideReason}
                    onChange={(
                      event,
                    ) => {
                      setHideReason(
                        event.target
                          .value,
                      );

                      setLocalError(
                        "",
                      );
                    }}
                    disabled={
                      isChangingVisibility
                    }
                    maxLength={
                      MAX_REASON_LENGTH
                    }
                    placeholder="Describe por qué se ocultará este comentario."
                    style={
                      styles.reasonInput
                    }
                  />

                  <div
                    style={
                      styles.reasonMeta
                    }
                  >
                    <span>
                      Mínimo{" "}
                      {MIN_REASON_LENGTH}{" "}
                      caracteres
                    </span>

                    <span>
                      {hideReason.length}/
                      {MAX_REASON_LENGTH}
                    </span>
                  </div>

                  {displayedError ? (
                    <div
                      style={
                        styles.moderationError
                      }
                    >
                      <AlertCircle
                        size={40}
                        strokeWidth={2.2}
                      />

                      {displayedError}
                    </div>
                  ) : null}
                </section>
              ) : null}

              {!showHideForm &&
              displayedError ? (
                <div
                  style={
                    styles.moderationError
                  }
                >
                  <AlertCircle
                    size={40}
                    strokeWidth={2.2}
                  />

                  {displayedError}
                </div>
              ) : null}

              <section
                style={
                  styles.metadataSection
                }
              >
                <div
                  style={
                    styles.metadataItem
                  }
                >
                  <span
                    style={
                      styles.metadataLabel
                    }
                  >
                    <MapPinned
                      size={40}
                      strokeWidth={2.15}
                    />

                    Lugar
                  </span>

                  <strong
                    style={
                      styles.metadataValue
                    }
                  >
                    {review.place
                      ?.placeName ||
                      "Lugar sin nombre"}
                  </strong>
                </div>

                <div
                  style={
                    styles.metadataItem
                  }
                >
                  <span
                    style={
                      styles.metadataLabel
                    }
                  >
                    <CalendarDays
                      size={40}
                      strokeWidth={2.15}
                    />

                    Última actualización
                  </span>

                  <strong
                    style={
                      styles.metadataValue
                    }
                  >
                    {formatDateTime(
                      review.updatedAt,
                    )}
                  </strong>
                </div>
              </section>
            </>
          )}
        </div>

        <footer style={styles.footer}>
          {showHideForm &&
          !isHidden ? (
            <>
              <button
                type="button"
                onClick={
                  handleCancelHide
                }
                disabled={
                  isChangingVisibility
                }
                style={
                  styles.cancelButton
                }
              >
                <X
                  size={40}
                  strokeWidth={2.3}
                />

                Cancelar
              </button>

              <button
                type="button"
                onClick={
                  handleConfirmHide
                }
                disabled={
                  isChangingVisibility
                }
                style={{
                  ...styles.moderateButton,

                  background:
                    "linear-gradient(135deg, #d43f48, #e6545c)",

                  borderColor:
                    "#c7353e",

                  cursor:
                    isChangingVisibility
                      ? "not-allowed"
                      : "pointer",

                  opacity:
                    isChangingVisibility
                      ? 0.7
                      : 1,
                }}
              >
                <EyeOff
                  size={40}
                  strokeWidth={2.25}
                />

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
                disabled={
                  isChangingVisibility
                }
                style={
                  styles.cancelButton
                }
              >
                <X
                  size={40}
                  strokeWidth={2.3}
                />

                Cerrar
              </button>

              {!loading &&
              review ? (
                <button
                  type="button"
                  style={{
                    ...styles.moderateButton,

                    ...(isHidden
                      ? {
                          background:
                            "linear-gradient(135deg, #078e4a, #10a45b)",

                          borderColor:
                            "#078044",
                        }
                      : {
                          background:
                            "linear-gradient(135deg, #d43f48, #e6545c)",

                          borderColor:
                            "#c7353e",
                        }),

                    cursor:
                      isChangingVisibility
                        ? "not-allowed"
                        : "pointer",

                    opacity:
                      isChangingVisibility
                        ? 0.7
                        : 1,
                  }}
                  onClick={
                    handleVisibilityButton
                  }
                  disabled={
                    isChangingVisibility
                  }
                >
                  {isHidden ? (
                    <RotateCcw
                      size={40}
                      strokeWidth={2.25}
                    />
                  ) : (
                    <EyeOff
                      size={40}
                      strokeWidth={2.25}
                    />
                  )}

                  {isChangingVisibility
                    ? isHidden
                      ? "Restaurando..."
                      : "Ocultando..."
                    : isHidden
                      ? "Restaurar comentario"
                      : "Ocultar comentario"}
                </button>
              ) : null}
            </>
          )}
        </footer>
      </section>
    </div>
  );
}