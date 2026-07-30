import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  CircleX,
  Clock3,
  FileWarning,
  Flag,
  MapPinned,
  MessageSquareWarning,
  Send,
  ShieldAlert,
  UserRound,
  X,
} from "lucide-react";

import styles from "./styles";

const TARGET_LABELS = {
  general: "General",
  place: "Lugar",
  user: "Usuario",
};

const STATUS_LABELS = {
  pending: "Pendiente",
  in_review: "En revisión",
  resolved: "Resuelto",
  dismissed: "Descartado",
};

const PRIORITY_LABELS = {
  low: "Baja",
  normal: "Normal",
  medium: "Media",
  high: "Alta",
};

const SOURCE_LABELS = {
  place_detail: "Detalle del lugar",
  review: "Reseña",
  user_profile: "Perfil de usuario",
  general: "Sistema general",
  manual: "Registro manual",
  ReportProblemScreen: "Pantalla de reportes",
  PlaceDetailScreen: "Detalle del lugar",
};

function getSourceLabel(report) {
  const source =
    report?.source ||
    report?.metadata?.createdFrom ||
    "";

  return (
    SOURCE_LABELS[source] ||
    "No especificado"
  );
}

function formatDate(value) {
  if (!value) {
    return "Sin fecha";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
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

function getTargetType(report) {
  return (
    report?.reportTarget ||
    report?.target ||
    report?.type ||
    report?.relatedTo?.type ||
    "general"
  );
}

function getRelatedEntity(
  report,
  targetType,
) {
  if (targetType === "user") {
    return {
      id:
        report?.reportedUser?.uid ||
        report?.relatedTo?.id ||
        report?.reportedUserId ||
        null,

      name:
        report?.reportedUser?.name ||
        report?.relatedTo?.label ||
        report?.relatedLabel ||
        "Usuario desconocido",

      email:
        report?.reportedUser?.email ||
        "",

      photoURL:
        report?.reportedUser?.photoURL ||
        null,

      actionLabel:
        "Ver usuario",
    };
  }

  if (targetType === "place") {
    return {
      id:
        report?.relatedTo?.id ||
        report?.place?.placeId ||
        report?.placeId ||
        null,

      name:
        report?.relatedTo?.label ||
        report?.place?.placeName ||
        report?.placeName ||
        report?.relatedLabel ||
        "Lugar desconocido",

      email: "",
      photoURL: null,
      actionLabel: "Ver lugar",
    };
  }

  return {
    id: null,
    name: "Sistema general",
    email: "",
    photoURL: null,
    actionLabel: null,
  };
}

function getReporter(report) {
  return {
    id:
      report?.reporter?.uid ||
      report?.createdBy?.uid ||
      report?.reporterId ||
      null,

    name:
      report?.reporter?.name ||
      report?.createdBy?.name ||
      report?.reporterName ||
      "Usuario desconocido",

    email:
      report?.reporter?.email ||
      report?.createdBy?.email ||
      "",

    photoURL:
      report?.reporter?.photoURL ||
      report?.createdBy?.photoURL ||
      null,
  };
}

function getInitials(name = "") {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "US";
  }

  if (words.length === 1) {
    return words[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return `${words[0][0]}${words[1][0]}`
    .toUpperCase();
}

function getTargetIcon(targetType) {
  if (targetType === "place") {
    return MapPinned;
  }

  if (targetType === "user") {
    return UserRound;
  }

  return FileWarning;
}

function getStatusIcon(status) {
  if (status === "resolved") {
    return CheckCircle2;
  }

  if (status === "dismissed") {
    return CircleX;
  }

  return Clock3;
}

export default function ReportDetailModal({
  isOpen,
  report,
  loading = false,
  isSubmitting = false,
  submitError = "",
  onClose,
  onValidate,
  onDiscard,
  onOpenRelated,
  onOpenReporter,
}) {
  const [
    selectedAction,
    setSelectedAction,
  ] = useState(null);

  const [
    resolutionNote,
    setResolutionNote,
  ] = useState("");

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  const targetType = useMemo(
    () =>
      getTargetType(report),
    [report],
  );

  const relatedEntity = useMemo(
    () =>
      getRelatedEntity(
        report,
        targetType,
      ),
    [
      report,
      targetType,
    ],
  );

  const reporter = useMemo(
    () =>
      getReporter(report),
    [report],
  );

  const status =
    report?.status ||
    "pending";

  const canResolveReport =
    status === "pending" ||
    status === "in_review";

  const TargetIcon =
    getTargetIcon(
      targetType,
    );

  const StatusIcon =
    getStatusIcon(
      status,
    );

  useEffect(() => {
    if (!isOpen) {
      setSelectedAction(null);
      setResolutionNote("");
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(event) {
      if (
        event.key === "Escape" &&
        !isSubmitting
      ) {
        onClose?.();
      }
    }

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

  function handleOverlayClick(event) {
    if (
      event.target ===
        event.currentTarget &&
      !isSubmitting
    ) {
      onClose?.();
    }
  }

  function handleSelectAction(action) {
    setSelectedAction(action);
    setErrorMessage("");
  }

  function handleSubmit() {
    const cleanNote =
      resolutionNote.trim();

    if (!selectedAction) {
      setErrorMessage(
        "Selecciona una acción para el reporte.",
      );

      return;
    }

    if (cleanNote.length < 10) {
      setErrorMessage(
        "La nota de resolución debe tener al menos 10 caracteres.",
      );

      return;
    }

    const payload = {
      reportId:
        report?.reportId ||
        report?.id,

      resolutionNote:
        cleanNote,
    };

    if (
      selectedAction ===
      "resolved"
    ) {
      onValidate?.(
        payload,
      );

      return;
    }

    if (
      selectedAction ===
      "dismissed"
    ) {
      onDiscard?.(
        payload,
      );
    }
  }

  const statusStyle = {
    ...styles.statusChip,

    ...(status === "resolved"
      ? styles.statusResolved
      : status === "dismissed"
        ? styles.statusDiscarded
        : styles.statusPending),
  };

  const targetStyle = {
    ...styles.targetChip,

    ...(targetType === "user"
      ? styles.targetUser
      : targetType === "place"
        ? styles.targetPlace
        : styles.targetGeneral),
  };

  return (
    <div
      style={styles.overlay}
      onMouseDown={
        handleOverlayClick
      }
    >
      <section
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-detail-title"
      >
        <div
          aria-hidden="true"
          style={styles.topAccent}
        />

        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerIcon}>
              <MessageSquareWarning
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.headerText}>
              <div
                style={
                  styles.headerTitleRow
                }
              >
                <h2
                  id="report-detail-title"
                  style={styles.title}
                >
                  Detalle del reporte
                </h2>

                <span style={targetStyle}>
                  <TargetIcon
                    size={40}
                    strokeWidth={2.2}
                  />

                  {TARGET_LABELS[
                    targetType
                  ] || "General"}
                </span>
              </div>

              <p style={styles.subtitle}>
                Revisa la información antes
                de tomar una decisión.
              </p>
            </div>
          </div>

          <button
            type="button"
            style={{
              ...styles.closeButton,

              ...(isSubmitting
                ? styles.disabledControl
                : {}),
            }}
            onClick={onClose}
            disabled={
              isSubmitting
            }
            aria-label="Cerrar modal"
          >
            <X
              size={40}
              strokeWidth={2.4}
            />
          </button>
        </header>

        {loading ? (
          <div style={styles.loadingState}>
            <div style={styles.loadingIcon}>
              <Clock3
                size={48}
                strokeWidth={2.1}
              />
            </div>

            <h3 style={styles.loadingTitle}>
              Cargando reporte
            </h3>

            <p style={styles.loadingText}>
              Obteniendo la información
              completa del reporte.
            </p>
          </div>
        ) : (
          <>
            <div style={styles.body}>
              <section
                style={
                  styles.summaryCard
                }
              >
                <div
                  style={
                    styles.summaryHeader
                  }
                >
                  <div
                    style={
                      styles.sectionHeading
                    }
                  >
                    <FileWarning
                      size={40}
                      strokeWidth={2.2}
                    />

                    <h3
                      style={
                        styles.sectionTitle
                      }
                    >
                      Información general
                    </h3>
                  </div>

                  <span style={statusStyle}>
                    <StatusIcon
                      size={40}
                      strokeWidth={2.2}
                    />

                    {STATUS_LABELS[
                      status
                    ] || "Pendiente"}
                  </span>
                </div>

                <div style={styles.infoGrid}>
                  <article
                    style={styles.infoCard}
                  >
                    <div style={styles.infoIcon}>
                      <Flag
                        size={40}
                        strokeWidth={2.2}
                      />
                    </div>

                    <div style={styles.infoContent}>
                      <span
                        style={styles.infoLabel}
                      >
                        Motivo
                      </span>

                      <strong
                        style={styles.infoValue}
                      >
                        {report?.reasonLabel ||
                          report?.reason ||
                          "Sin motivo"}
                      </strong>
                    </div>
                  </article>

                  <article
                    style={styles.infoCard}
                  >
                    <div style={styles.infoIcon}>
                      <ShieldAlert
                        size={40}
                        strokeWidth={2.2}
                      />
                    </div>

                    <div style={styles.infoContent}>
                      <span
                        style={styles.infoLabel}
                      >
                        Prioridad
                      </span>

                      <strong
                        style={styles.infoValue}
                      >
                        {PRIORITY_LABELS[
                          report?.priority
                        ] ||
                          report?.priority ||
                          "Sin prioridad"}
                      </strong>
                    </div>
                  </article>

                  <article
                    style={styles.infoCard}
                  >
                    <div style={styles.infoIcon}>
                      <CalendarDays
                        size={40}
                        strokeWidth={2.2}
                      />
                    </div>

                    <div style={styles.infoContent}>
                      <span
                        style={styles.infoLabel}
                      >
                        Fecha
                      </span>

                      <strong
                        style={styles.infoValue}
                      >
                        {formatDate(
                          report?.createdAt ||
                            report?.date,
                        )}
                      </strong>
                    </div>
                  </article>

                  <article
                    style={styles.infoCard}
                  >
                    <div style={styles.infoIcon}>
                      <TargetIcon
                        size={40}
                        strokeWidth={2.2}
                      />
                    </div>

                    <div style={styles.infoContent}>
                      <span
                        style={styles.infoLabel}
                      >
                        Origen
                      </span>

                      <strong
                        style={styles.infoValue}
                      >
                        {getSourceLabel(
                          report,
                        )}
                      </strong>
                    </div>
                  </article>
                </div>
              </section>

              <div
                style={
                  styles.twoColumnGrid
                }
              >
                <section
                  style={
                    styles.entityCard
                  }
                >
                  <div
                    style={
                      styles.entityCardHeader
                    }
                  >
                    <TargetIcon
                      size={40}
                      strokeWidth={2.2}
                    />

                    <span
                      style={
                        styles.entityCardTitle
                      }
                    >
                      Relacionado con
                    </span>
                  </div>

                  {targetType ===
                  "user" ? (
                    <div
                      style={
                        styles.reporterRow
                      }
                    >
                      <div
                        style={
                          styles.avatar
                        }
                      >
                        {relatedEntity.photoURL ? (
                          <img
                            src={
                              relatedEntity.photoURL
                            }
                            alt={
                              relatedEntity.name
                            }
                            style={
                              styles.avatarImage
                            }
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span
                            style={
                              styles.avatarText
                            }
                          >
                            {getInitials(
                              relatedEntity.name,
                            )}
                          </span>
                        )}
                      </div>

                      <div
                        style={
                          styles.reporterText
                        }
                      >
                        <strong
                          style={
                            styles.reporterName
                          }
                        >
                          {
                            relatedEntity.name
                          }
                        </strong>

                        <span
                          style={
                            styles.reporterEmail
                          }
                        >
                          {relatedEntity.email ||
                            "Usuario señalado"}
                        </span>
                      </div>

                      {relatedEntity.id ? (
                        <button
                          type="button"
                          style={
                            styles.secondaryButton
                          }
                          onClick={() =>
                            onOpenRelated?.({
                              targetType,
                              id:
                                relatedEntity.id,
                              report,
                            })
                          }
                        >
                          <UserRound
                            size={40}
                            strokeWidth={2.2}
                          />

                          Ver usuario
                        </button>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      style={
                        styles.relatedPlaceContent
                      }
                    >
                      <div
                        style={
                          styles.relatedPlaceText
                        }
                      >
                        <strong
                          style={
                            styles.entityName
                          }
                        >
                          {
                            relatedEntity.name
                          }
                        </strong>

                        <span
                          style={
                            styles.entityDescription
                          }
                        >
                          {targetType ===
                          "place"
                            ? "Lugar relacionado con el reporte."
                            : "Reporte relacionado con el funcionamiento general del sistema."}
                        </span>
                      </div>

                      {relatedEntity.id &&
                      relatedEntity.actionLabel ? (
                        <button
                          type="button"
                          style={
                            styles.secondaryButton
                          }
                          onClick={() =>
                            onOpenRelated?.({
                              targetType,
                              id:
                                relatedEntity.id,
                              report,
                            })
                          }
                        >
                          <MapPinned
                            size={22}
                            strokeWidth={2.2}
                          />

                          {
                            relatedEntity.actionLabel
                          }
                        </button>
                      ) : null}
                    </div>
                  )}
                </section>

                <section
                  style={
                    styles.entityCard
                  }
                >
                  <div
                    style={
                      styles.entityCardHeader
                    }
                  >
                    <UserRound
                      size={26}
                      strokeWidth={2.2}
                    />

                    <span
                      style={
                        styles.entityCardTitle
                      }
                    >
                      Realizado por
                    </span>
                  </div>

                  <div
                    style={
                      styles.reporterRow
                    }
                  >
                    <div
                      style={
                        styles.avatar
                      }
                    >
                      {reporter.photoURL ? (
                        <img
                          src={
                            reporter.photoURL
                          }
                          alt={
                            reporter.name
                          }
                          style={
                            styles.avatarImage
                          }
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span
                          style={
                            styles.avatarText
                          }
                        >
                          {getInitials(
                            reporter.name,
                          )}
                        </span>
                      )}
                    </div>

                    <div
                      style={
                        styles.reporterText
                      }
                    >
                      <strong
                        style={
                          styles.reporterName
                        }
                      >
                        {reporter.name}
                      </strong>

          
                    </div>

                    {reporter.id ? (
                      <button
                        type="button"
                        style={
                          styles.secondaryButton
                        }
                        onClick={() =>
                          onOpenReporter?.(
                            reporter.id,
                          )
                        }
                      >
                        <UserRound
                          size={40}
                          strokeWidth={2.2}
                        />

                        Ver perfil
                      </button>
                    ) : null}
                  </div>
                </section>
              </div>

              <section
                style={
                  styles.messageCard
                }
              >
                <div
                  style={
                    styles.messageHeader
                  }
                >
                  <MessageSquareWarning
                    size={40}
                    strokeWidth={2.2}
                  />

                  <h3
                    style={
                      styles.sectionTitle
                    }
                  >
                    Mensaje del reporte
                  </h3>
                </div>

                <p
                  style={
                    styles.messageText
                  }
                >
                  {report?.message ||
                    "El usuario no agregó una descripción."}
                </p>
              </section>

              {(
                status === "resolved" ||
                status === "dismissed"
              ) ? (
                <section
                  style={
                    styles.resolutionCard
                  }
                >
                  <div
                    style={
                      styles.resolutionHeader
                    }
                  >
                    <CheckCircle2
                      size={40}
                      strokeWidth={2.2}
                    />

                    <h3
                      style={
                        styles.sectionTitle
                      }
                    >
                      Resolución
                    </h3>
                  </div>

                  <div
                    style={
                      styles.resolutionGrid
                    }
                  >
                    <article
                      style={
                        styles.resolutionInfo
                      }
                    >
                      <span
                        style={
                          styles.infoLabel
                        }
                      >
                        Resuelto por
                      </span>

                      <strong
                        style={
                          styles.infoValue
                        }
                      >
                        {report?.resolvedBy
                          ?.name ||
                          report?.resolvedBy ||
                          "Sin información"}
                      </strong>
                    </article>

                    <article
                      style={
                        styles.resolutionInfo
                      }
                    >
                      <span
                        style={
                          styles.infoLabel
                        }
                      >
                        Fecha de resolución
                      </span>

                      <strong
                        style={
                          styles.infoValue
                        }
                      >
                        {formatDate(
                          report?.resolvedAt,
                        )}
                      </strong>
                    </article>
                  </div>

                  <p
                    style={
                      styles.resolutionNote
                    }
                  >
                    {report?.resolutionNote ||
                      "No se registró una nota de resolución."}
                  </p>
                </section>
              ) : null}

              {canResolveReport ? (
                <section
                  style={
                    styles.actionCard
                  }
                >
                  <div
                    style={
                      styles.actionHeader
                    }
                  >
                    <ShieldAlert
                      size={40}
                      strokeWidth={2.2}
                    />

                    <div>
                      <h3
                        style={
                          styles.sectionTitle
                        }
                      >
                        Resolución del reporte
                      </h3>

                      <p
                        style={
                          styles.actionDescription
                        }
                      >
                        Selecciona una decisión y
                        registra una nota para el
                        historial.
                      </p>
                    </div>
                  </div>

                  <div
                    style={
                      styles.actionOptions
                    }
                  >
                    <button
                      type="button"
                      style={{
                        ...styles.actionOption,
                        ...styles.discardOption,

                        ...(selectedAction ===
                        "dismissed"
                          ? styles.discardOptionSelected
                          : {}),
                      }}
                      onClick={() =>
                        handleSelectAction(
                          "dismissed",
                        )
                      }
                    >
                      <CircleX
                        size={40}
                        strokeWidth={2.2}
                      />

                      <span
                        style={
                          styles.actionOptionText
                        }
                      >
                        <strong>
                          Descartar reporte
                        </strong>

                        <small>
                          No procede la denuncia.
                        </small>
                      </span>
                    </button>

                    <button
                      type="button"
                      style={{
                        ...styles.actionOption,
                        ...styles.validateOption,

                        ...(selectedAction ===
                        "resolved"
                          ? styles.validateOptionSelected
                          : {}),
                      }}
                      onClick={() =>
                        handleSelectAction(
                          "resolved",
                        )
                      }
                    >
                      <CheckCircle2
                        size={40}
                        strokeWidth={2.2}
                      />

                      <span
                        style={
                          styles.actionOptionText
                        }
                      >
                        <strong>
                          Validar reporte
                        </strong>

                        <small>
                          El reporte es procedente.
                        </small>
                      </span>
                    </button>
                  </div>

                  <label
                    style={
                      styles.noteLabel
                    }
                  >
                    <span
                      style={
                        styles.noteLabelText
                      }
                    >
                      Nota de resolución
                    </span>

                    <textarea
                      value={
                        resolutionNote
                      }
                      style={
                        styles.textarea
                      }
                      placeholder="Explica brevemente la decisión tomada..."
                      maxLength={500}
                      disabled={
                        isSubmitting
                      }
                      onChange={(event) => {
                        setResolutionNote(
                          event.target.value,
                        );

                        if (errorMessage) {
                          setErrorMessage("");
                        }
                      }}
                    />
                  </label>

                  <div
                    style={
                      styles.noteFooter
                    }
                  >
                    <span
                      style={
                        styles.counter
                      }
                    >
                      {
                        resolutionNote.length
                      }
                      /500
                    </span>

                    {errorMessage ||
                    submitError ? (
                      <span
                        style={
                          styles.errorText
                        }
                      >
                        {errorMessage ||
                          submitError}
                      </span>
                    ) : (
                      <span
                        style={
                          styles.helperText
                        }
                      >
                        Mínimo 10 caracteres.
                      </span>
                    )}
                  </div>
                </section>
              ) : null}
            </div>

            <footer style={styles.footer}>
              <div style={styles.footerNotice}>
                {canResolveReport ? (
                  <>
                    <AlertCircle
                      size={40}
                      strokeWidth={2.2}
                    />

                    <span>
                      La decisión quedará registrada
                      en el reporte.
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2
                      size={40}
                      strokeWidth={2.2}
                    />

                    <span>
                      Este reporte ya fue procesado.
                    </span>
                  </>
                )}
              </div>

              <div
                style={
                  styles.footerActions
                }
              >
                <button
                  type="button"
                  style={{
                    ...styles.cancelButton,

                    ...(isSubmitting
                      ? styles.disabledControl
                      : {}),
                  }}
                  onClick={onClose}
                  disabled={
                    isSubmitting
                  }
                >
                  <X
                    size={40}
                    strokeWidth={2.3}
                  />

                  Cerrar
                </button>

                {canResolveReport ? (
                  <button
                    type="button"
                    style={{
                      ...styles.submitButton,

                      ...(isSubmitting
                        ? styles.submitButtonDisabled
                        : {}),
                    }}
                    onClick={
                      handleSubmit
                    }
                    disabled={
                      isSubmitting
                    }
                  >
                    <Send
                      size={40}
                      strokeWidth={2.3}
                    />

                    {isSubmitting
                      ? "Guardando..."
                      : "Confirmar decisión"}
                  </button>
                ) : null}
              </div>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}