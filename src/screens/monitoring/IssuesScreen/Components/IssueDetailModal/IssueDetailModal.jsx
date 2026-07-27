import React from "react";

import styles from "./styles";

const LEVEL_LABELS = {
  fatal: "Crítico",
  error: "Error",
  warning: "Advertencia",
  info: "Información",
};

const STATUS_LABELS = {
  unresolved: "Abierto",
  reviewing: "En revisión",
  resolved: "Resuelto",
  ignored: "Ignorado",
  reopened: "Reabierto",
  regression: "Regresión",
};

function DetailField({
  label,
  value,
}) {
  return (
    <div style={styles.field}>
      <span style={styles.fieldLabel}>
        {label}
      </span>

      <span style={styles.fieldValue}>
        {value || "No disponible"}
      </span>
    </div>
  );
}

export default function IssueDetailModal({
  isOpen,
  issue,
  onClose,
}) {
  if (!isOpen || !issue) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <section style={styles.modal}>
        <div style={styles.modalHeader}>
          <div style={styles.headerInformation}>
            <p style={styles.sectionLabel}>
              DETALLE DE INCIDENCIA
            </p>

            <h2 style={styles.title}>
              {issue.title}
            </h2>

            <p style={styles.code}>
              {issue.code}
            </p>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div style={styles.modalBody}>
          <div style={styles.chipRow}>
            <span
              style={{
                ...styles.chip,
                ...(styles.levelChips[issue.level] ||
                  styles.levelChips.info),
              }}
            >
              {LEVEL_LABELS[issue.level] || "Información"}
            </span>

            <span
              style={{
                ...styles.chip,
                ...(styles.statusChips[issue.status] ||
                  styles.statusChips.unresolved),
              }}
            >
              {STATUS_LABELS[issue.status] || "Abierto"}
            </span>

            <span style={styles.neutralChip}>
              {issue.project}
            </span>

            <span style={styles.neutralChip}>
              {issue.environment}
            </span>
          </div>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Resumen
            </h3>

            <p style={styles.message}>
              {issue.message}
            </p>

            <div style={styles.detailsGrid}>
              <DetailField
                label="Proyecto"
                value={issue.project}
              />

              <DetailField
                label="Módulo"
                value={issue.module}
              />

              <DetailField
                label="Categoría"
                value={issue.categoryLabel}
              />

              <DetailField
                label="Entorno"
                value={issue.environment}
              />

              <DetailField
                label="Primera aparición"
                value={issue.firstSeen}
              />

              <DetailField
                label="Última aparición"
                value={issue.lastSeen}
              />

              <DetailField
                label="Eventos"
                value={issue.events}
              />

              <DetailField
                label="Usuarios afectados"
                value={issue.users}
              />

              <DetailField
                label="Versión"
                value={issue.release}
              />

              <DetailField
                label="Plataforma"
                value={issue.platform}
              />

              <DetailField
                label="Dispositivo o servicio"
                value={issue.device}
              />

              <DetailField
                label="Función"
                value={issue.functionName}
              />
            </div>
          </section>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Ubicación del error
            </h3>

            <div style={styles.codeBox}>
              <p style={styles.codeLabel}>
                Archivo
              </p>

              <code style={styles.codeValue}>
                {issue.file}
              </code>
            </div>
          </section>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              Stack trace
            </h3>

            <div style={styles.stackTrace}>
              {issue.stackTrace.map((line, index) => (
                <code
                  key={`${line}-${index}`}
                  style={styles.stackLine}
                >
                  {line}
                </code>
              ))}
            </div>
          </section>

      
<section style={styles.section}>
  <h3 style={styles.sectionTitle}>
    Breadcrumbs recientes
  </h3>

  <div style={styles.breadcrumbList}>
    {(issue.breadcrumbs || []).map(
      (breadcrumb, index) => (
        <article
          key={`${breadcrumb.time}-${index}`}
          style={styles.breadcrumbItem}
        >
          <span style={styles.breadcrumbTime}>
            {breadcrumb.time}
          </span>

          <div style={styles.breadcrumbContent}>
            <span style={styles.breadcrumbCategory}>
              {breadcrumb.category}
            </span>

            <p style={styles.breadcrumbMessage}>
              {breadcrumb.message}
            </p>
          </div>
        </article>
      )
    )}
  </div>
</section>

<section style={styles.section}>
  <h3 style={styles.sectionTitle}>
    Historial de la incidencia
  </h3>

  {Array.isArray(issue.history) &&
  issue.history.length > 0 ? (
    <div style={styles.historyList}>
      {issue.history.map((movement) => (
        <article
          key={movement.id}
          style={styles.historyItem}
        >
          <div style={styles.historyHeader}>
            <span
              style={{
                ...styles.historyAction,
                ...(styles.historyActions[
                  movement.action
                ] ||
                  styles.historyActions.detected),
              }}
            >
              {movement.actionLabel}
            </span>

            <span style={styles.historyDate}>
              {movement.date}
            </span>
          </div>

          <div style={styles.historyStatusChange}>
            <span style={styles.historyPreviousStatus}>
              {movement.previousStatus}
            </span>

            <span style={styles.historyArrow}>
              →
            </span>

            <span style={styles.historyCurrentStatus}>
              {movement.currentStatus}
            </span>
          </div>

          <p style={styles.historyNote}>
            {movement.note}
          </p>

          <span style={styles.historyActor}>
            Responsable: {movement.actor}
          </span>
        </article>
      ))}
    </div>
  ) : (
    <p style={styles.emptyHistory}>
      Esta incidencia todavía no tiene movimientos registrados.
    </p>
  )}
</section>

        </div>

        <div style={styles.modalFooter}>
  <button
    type="button"
    style={styles.secondaryButton}
    onClick={onClose}
  >
    Cerrar
  </button>

  <button
    type="button"
    style={styles.reviewButton}
  >
    Marcar en revisión
  </button>

  <button
    type="button"
    style={styles.ignoreButton}
  >
    Ignorar
  </button>

  <button
    type="button"
    style={styles.resolveButton}
  >
    Resolver
  </button>

  <button
    type="button"
    style={styles.primaryButton}
  >
    Abrir en Sentry
  </button>
</div>
      </section>
    </div>
  );
}