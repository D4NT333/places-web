import React from "react";

import {
  AlertTriangle,
  CalendarDays,
  FileImage,
  FilePenLine,
  MapPinned,
  ShieldAlert,
  Trash2,
  UserRound,
  X,
} from "lucide-react";

import styles from "./styles";

function getSubmissionTypeIcon(type) {
  if (type === "photo") {
    return FileImage;
  }

  if (type === "description") {
    return FilePenLine;
  }

  return MapPinned;
}

export default function DeleteSubmissionModal({
  submission,
  onCancel,
  onConfirm,
  isDeleting = false,
}) {
  if (!submission) {
    return null;
  }

  const SubmissionTypeIcon =
    getSubmissionTypeIcon(
      submission.type,
    );

  const proposalType =
    submission.typeLabel ||
    submission.type ||
    "Propuesta";

  const proposalTitle =
    submission.proposal ||
    submission.title ||
    "Propuesta eliminada";

  const userName =
    submission.userName ||
    submission.user?.name ||
    "Usuario";

  const deletedAt =
    submission.deletedAt ||
    submission.requestedAt ||
    "No disponible";

  const previousStatus =
    submission.previousStatusLabel ||
    submission.previousStatus ||
    "No disponible";

  return (
    <div
      style={styles.backdrop}
      role="presentation"
      onMouseDown={
        isDeleting
          ? undefined
          : onCancel
      }
    >
      <div
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-submission-title"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div
          aria-hidden="true"
          style={styles.topAccent}
        />

        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerIcon}>
              <Trash2
                size={44}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.headerText}>
              <h2
                id="delete-submission-title"
                style={styles.title}
              >
                Eliminar propuesta
                definitivamente
              </h2>

              <p style={styles.subtitle}>
                Esta acción eliminará la
                propuesta del sistema de
                forma permanente.
              </p>
            </div>
          </div>

          <button
            type="button"
            style={{
              ...styles.closeButton,

              ...(isDeleting
                ? styles.disabledControl
                : {}),
            }}
            onClick={onCancel}
            aria-label="Cerrar"
            title="Cerrar"
            disabled={isDeleting}
          >
            <X
              size={40}
              strokeWidth={2.4}
            />
          </button>
        </header>

        <div style={styles.content}>
          <section
            style={styles.proposalCard}
          >
            <div
              style={
                styles.previewContainer
              }
            >
              {submission.previewImageUrl ? (
                <img
                  src={
                    submission.previewImageUrl
                  }
                  alt=""
                  style={
                    styles.previewImage
                  }
                />
              ) : (
                <div
                  style={
                    styles.previewFallback
                  }
                >
                  <SubmissionTypeIcon
                    size={40}
                    strokeWidth={2.1}
                  />
                </div>
              )}
            </div>

            <div
              style={
                styles.proposalContent
              }
            >
              <span
                style={
                  styles.proposalType
                }
              >
                <SubmissionTypeIcon
                  size={40}
                  strokeWidth={2.2}
                />

                {proposalType}
              </span>

              <h3
                style={
                  styles.proposalTitle
                }
              >
                {proposalTitle}
              </h3>

              <span
                style={
                  styles.proposalStatus
                }
              >
                Pendiente de eliminación
                definitiva
              </span>
            </div>
          </section>

          <section style={styles.warningBox}>
            <div style={styles.warningIcon}>
              <ShieldAlert
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div
              style={
                styles.warningContent
              }
            >
              <strong
                style={
                  styles.warningTitle
                }
              >
                ¿Seguro que deseas
                eliminarla?
              </strong>

              <p
                style={
                  styles.warningText
                }
              >
                Una vez eliminada, esta
                propuesta dejará de aparecer
                en el panel administrativo y
                no podrá recuperarse desde
                esta sección.
              </p>
            </div>
          </section>

          <section
            style={
              styles.informationSection
            }
          >
            <div
              style={
                styles.informationHeader
              }
            >
              <AlertTriangle
                size={40}
                strokeWidth={2.2}
              />

              <h3
                style={
                  styles.informationTitle
                }
              >
                Información de la propuesta
              </h3>
            </div>

            <div style={styles.dataGrid}>
              <article style={styles.dataCard}>
                <div style={styles.dataIcon}>
                  <UserRound
                    size={40}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={styles.dataContent}
                >
                  <span style={styles.label}>
                    Usuario
                  </span>

                  <strong style={styles.value}>
                    {userName}
                  </strong>
                </div>
              </article>

              <article style={styles.dataCard}>
                <div style={styles.dataIcon}>
                  <CalendarDays
                    size={40}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={styles.dataContent}
                >
                  <span style={styles.label}>
                    Eliminada el
                  </span>

                  <strong style={styles.value}>
                    {deletedAt}
                  </strong>
                </div>
              </article>

              <article style={styles.dataCard}>
                <div style={styles.dataIcon}>
                  <AlertTriangle
                    size={40}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={styles.dataContent}
                >
                  <span style={styles.label}>
                    Estado anterior
                  </span>

                  <strong style={styles.value}>
                    {previousStatus}
                  </strong>
                </div>
              </article>

              <article style={styles.dataCard}>
                <div style={styles.dataIcon}>
                  <SubmissionTypeIcon
                    size={40}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={styles.dataContent}
                >
                  <span style={styles.label}>
                    Tipo
                  </span>

                  <strong style={styles.value}>
                    {proposalType}
                  </strong>
                </div>
              </article>
            </div>
          </section>
        </div>

        <footer style={styles.footer}>
          <div style={styles.footerNotice}>
            <AlertTriangle
              size={40}
              strokeWidth={2.2}
            />

            <span>
              Esta operación no se puede
              deshacer.
            </span>
          </div>

          <div style={styles.footerActions}>
            <button
              type="button"
              style={{
                ...styles.cancelButton,

                ...(isDeleting
                  ? styles.disabledControl
                  : {}),
              }}
              onClick={onCancel}
              disabled={isDeleting}
            >
              <X
                size={40}
                strokeWidth={2.3}
              />

              Cancelar
            </button>

            <button
              type="button"
              style={{
                ...styles.deleteButton,

                ...(isDeleting
                  ? styles.deleteButtonDisabled
                  : {}),
              }}
              onClick={onConfirm}
              disabled={isDeleting}
            >
              <Trash2
                size={50}
                strokeWidth={2.3}
              />

              {isDeleting
                ? "Eliminando..."
                : "Eliminar definitivamente"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}