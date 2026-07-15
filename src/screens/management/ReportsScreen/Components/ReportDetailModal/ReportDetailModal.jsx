import React, { useEffect, useMemo, useState } from "react";

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

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
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

function getRelatedEntity(report, targetType) {
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

      actionLabel: "Ver usuario",
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

  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}

export default function ReportDetailModal({
  isOpen,
  report,
  loading = false,
  isSubmitting = false,
  onClose,
  onValidate,
  onDiscard,
  onOpenRelated,
  onOpenReporter,
}) {
  const [selectedAction, setSelectedAction] =
    useState(null);

  const [resolutionNote, setResolutionNote] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const targetType = useMemo(
    () => getTargetType(report),
    [report]
  );

  const relatedEntity = useMemo(
    () => getRelatedEntity(report, targetType),
    [report, targetType]
  );

  const reporter = useMemo(
    () => getReporter(report),
    [report]
  );

  const status =
    report?.status || "pending";

  const isPending =
    status === "pending";

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

    document.body.style.overflow = "hidden";

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
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
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

  const handleOverlayClick = (event) => {
    if (
      event.target === event.currentTarget &&
      !isSubmitting
    ) {
      onClose?.();
    }
  };

  const handleSelectAction = (action) => {
    setSelectedAction(action);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    const cleanNote =
      resolutionNote.trim();

    if (!selectedAction) {
      setErrorMessage(
        "Selecciona una acción para el reporte."
      );

      return;
    }

    if (cleanNote.length < 10) {
      setErrorMessage(
        "La nota de resolución debe tener al menos 10 caracteres."
      );

      return;
    }

    const payload = {
      reportId:
        report?.reportId ||
        report?.id,

      resolutionNote: cleanNote,
    };

    if (selectedAction === "resolved") {
  onValidate?.(payload);
  return;
}

if (selectedAction === "dismissed") {
  onDiscard?.(payload);
}
  };

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
      onMouseDown={handleOverlayClick}
    >
      <section
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-detail-title"
      >
        <header style={styles.header}>
          <div>
            <div style={styles.headerTopRow}>
              <h2
                id="report-detail-title"
                style={styles.title}
              >
                Detalle del reporte
              </h2>

              <span style={targetStyle}>
                {TARGET_LABELS[targetType] ||
                  "General"}
              </span>
            </div>

            <p style={styles.subtitle}>
              Revisa la información antes de tomar
              una decisión.
            </p>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </header>

        {loading ? (
          <div style={styles.loadingState}>
            Cargando detalle del reporte...
          </div>
        ) : (
          <>
            <div style={styles.body}>
              <section style={styles.summaryCard}>
                <div style={styles.summaryHeader}>
                  <h3 style={styles.sectionTitle}>
                    Información general
                  </h3>

                  <span style={statusStyle}>
                    {STATUS_LABELS[status] ||
                      "Pendiente"}
                  </span>
                </div>

                <div style={styles.infoGrid}>
                  <div style={styles.infoItem}>
  <span style={styles.infoLabel}>
    Motivo
  </span>

  <strong style={styles.infoValue}>
    {report?.reasonLabel ||
      report?.reason ||
      "Sin motivo"}
  </strong>
</div>

                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>
                      Prioridad
                    </span>

                    <strong style={styles.infoValue}>
                      {PRIORITY_LABELS[
                        report?.priority
                      ] ||
                        report?.priority ||
                        "Sin prioridad"}
                    </strong>
                  </div>

                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>
                      Fecha
                    </span>

                    <strong style={styles.infoValue}>
                      {formatDate(
                        report?.createdAt ||
                          report?.date
                      )}
                    </strong>
                  </div>

                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>
                      Origen
                    </span>

                    <strong style={styles.infoValue}>
  {getSourceLabel(report)}
</strong>
                  </div>
                </div>
              </section>

              <div style={styles.twoColumnGrid}>
                <section style={styles.entityCard}>
  <span style={styles.eyebrow}>
    Relacionado con
  </span>

  {targetType === "user" ? (
    <div style={styles.reporterRow}>
      <div style={styles.avatar}>
        {relatedEntity.photoURL ? (
          <img
            src={relatedEntity.photoURL}
            alt={relatedEntity.name}
            style={styles.avatarImage}
          />
        ) : (
          <span style={styles.avatarText}>
            {getInitials(relatedEntity.name)}
          </span>
        )}
      </div>

      <div style={styles.reporterText}>
        <strong style={styles.reporterName}>
          {relatedEntity.name}
        </strong>

        {relatedEntity.email ? (
          <span style={styles.reporterEmail}>
            {relatedEntity.email}
          </span>
        ) : (
          <span style={styles.reporterEmail}>
            Usuario señalado
          </span>
        )}
      </div>

      {relatedEntity.id ? (
        <button
          type="button"
          style={styles.secondaryButton}
          onClick={() =>
            onOpenRelated?.({
              targetType,
              id: relatedEntity.id,
              report,
            })
          }
        >
          Ver usuario
        </button>
      ) : null}
    </div>
  ) : (
    <>
      <div style={styles.entityHeader}>
        <div>
          <h3 style={styles.entityName}>
            {relatedEntity.name}
          </h3>
        </div>

        {relatedEntity.id &&
        relatedEntity.actionLabel ? (
          <button
            type="button"
            style={styles.secondaryButton}
            onClick={() =>
              onOpenRelated?.({
                targetType,
                id: relatedEntity.id,
                report,
              })
            }
          >
            {relatedEntity.actionLabel}
          </button>
        ) : null}
      </div>

      <p style={styles.entityDescription}>
        {targetType === "place"
          ? "Lugar relacionado con el reporte."
          : "El reporte está relacionado con el funcionamiento general del sistema."}
      </p>
    </>
  )}
</section>

                <section style={styles.entityCard}>
                  <span style={styles.eyebrow}>
                    Realizado por
                  </span>

                  <div style={styles.reporterRow}>
                    <div style={styles.avatar}>
                      {reporter.photoURL ? (
                        <img
                          src={reporter.photoURL}
                          alt={reporter.name}
                          style={styles.avatarImage}
                        />
                      ) : (
                        <span style={styles.avatarText}>
                          {getInitials(
                            reporter.name
                          )}
                        </span>
                      )}
                    </div>

                    <div style={styles.reporterText}>
                      <strong
                        style={styles.reporterName}
                      >
                        {reporter.name}
                      </strong>

                      {reporter.email ? (
                        <span
                          style={styles.reporterEmail}
                        >
                          {reporter.email}
                        </span>
                      ) : null}
                    </div>

                    {reporter.id ? (
                      <button
                        type="button"
                        style={styles.secondaryButton}
                        onClick={() =>
                          onOpenReporter?.(
                            reporter.id
                          )
                        }
                      >
                        Ver perfil
                      </button>
                    ) : null}
                  </div>
                </section>
              </div>

              <section style={styles.messageCard}>
                <h3 style={styles.sectionTitle}>
                  Mensaje del reporte
                </h3>

                <p style={styles.messageText}>
                  {report?.message ||
                    "El usuario no agregó una descripción."}
                </p>
              </section>

              {status !== "pending" ? (
                <section style={styles.resolutionCard}>
                  <h3 style={styles.sectionTitle}>
                    Resolución
                  </h3>

                  <div style={styles.resolutionGrid}>
                    <div style={styles.infoItem}>
                      <span style={styles.infoLabel}>
                        Resuelto por
                      </span>

                      <strong style={styles.infoValue}>
                        {report?.resolvedBy?.name ||
                          report?.resolvedBy ||
                          "Sin información"}
                      </strong>
                    </div>

                    <div style={styles.infoItem}>
                      <span style={styles.infoLabel}>
                        Fecha de resolución
                      </span>

                      <strong style={styles.infoValue}>
                        {formatDate(
                          report?.resolvedAt
                        )}
                      </strong>
                    </div>
                  </div>

                  <p style={styles.resolutionNote}>
                    {report?.resolutionNote ||
                      "No se registró una nota de resolución."}
                  </p>
                </section>
              ) : null}

              {isPending ? (
                <section style={styles.actionCard}>
                  <h3 style={styles.sectionTitle}>
                    Resolución del reporte
                  </h3>

                  <div style={styles.actionOptions}>
          <button
  type="button"
  style={{
    ...styles.actionOption,
    ...(selectedAction === "dismissed"
      ? styles.actionOptionSelected
      : {}),
  }}
  onClick={() =>
    handleSelectAction("dismissed")
  }
>
  Descartar reporte
</button>

                    <button
                      type="button"
                      style={{
                        ...styles.actionOption,
                        ...(selectedAction ===
                        "resolved"
                          ? styles.actionOptionSelected
                          : {}),
                      }}
                      onClick={() =>
                        handleSelectAction(
                          "resolved"
                        )
                      }
                    >
                      Validar reporte
                    </button>
                  </div>

                  <label style={styles.noteLabel}>
                    Nota de resolución

                    <textarea
                      value={resolutionNote}
                      style={styles.textarea}
                      placeholder="Explica brevemente la decisión tomada..."
                      maxLength={500}
                      disabled={isSubmitting}
                      onChange={(event) => {
                        setResolutionNote(
                          event.target.value
                        );

                        if (errorMessage) {
                          setErrorMessage("");
                        }
                      }}
                    />
                  </label>

                  <div style={styles.noteFooter}>
                    <span style={styles.counter}>
                      {resolutionNote.length}/500
                    </span>

                    {errorMessage ? (
                      <span style={styles.errorText}>
                        {errorMessage}
                      </span>
                    ) : null}
                  </div>
                </section>
              ) : null}
            </div>

            <footer style={styles.footer}>
              <button
                type="button"
                style={styles.cancelButton}
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cerrar
              </button>

              {isPending ? (
                <button
                  type="button"
                  style={styles.submitButton}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Guardando..."
                    : "Confirmar decisión"}
                </button>
              ) : null}
            </footer>
          </>
        )}
      </section>
    </div>
  );
}