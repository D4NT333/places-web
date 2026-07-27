import React from "react";

import styles from "./styles";

const LEVEL_CONFIG = {
  fatal: {
    label: "Crítico",
    style: styles.levelCritical,
  },

  error: {
    label: "Error",
    style: styles.levelError,
  },

  warning: {
    label: "Advertencia",
    style: styles.levelWarning,
  },

  info: {
    label: "Información",
    style: styles.levelInformation,
  },
};

const STATUS_CONFIG = {
  unresolved: {
    label: "Abierto",
    style: styles.statusOpen,
  },

  reviewing: {
    label: "En revisión",
    style: styles.statusReviewing,
  },

  resolved: {
    label: "Resuelto",
    style: styles.statusResolved,
  },

  ignored: {
    label: "Ignorado",
    style: styles.statusIgnored,
  },

  reopened: {
    label: "Reabierto",
    style: styles.statusReopened,
  },

  regression: {
    label: "Regresión",
    style: styles.statusRegression,
  },
};

export default function IssuesTable({
  issues = [],
  onOpenIssue,
}) {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>
            Incidencias registradas
          </h2>

          <p style={styles.description}>
            Se encontraron {issues.length} incidencias con los
            filtros seleccionados.
          </p>
        </div>

        <span style={styles.resultsChip}>
          {issues.length} resultados
        </span>
      </div>

      {issues.length === 0 ? (
        <div style={styles.emptyState}>
          <p style={styles.emptyTitle}>
            No se encontraron incidencias
          </p>

          <p style={styles.emptyDescription}>
            Cambia los filtros para consultar otros resultados.
          </p>
        </div>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>
                  Incidencia
                </th>

                <th style={styles.tableHeader}>
                  Proyecto
                </th>

                <th style={styles.tableHeader}>
                  Categoría
                </th>

                <th style={styles.tableHeader}>
                  Nivel
                </th>

                <th style={styles.tableHeader}>
                  Estado
                </th>

                <th style={styles.tableHeaderCenter}>
                  Eventos
                </th>

                <th style={styles.tableHeaderCenter}>
                  Usuarios
                </th>

                <th style={styles.tableHeader}>
                  Última aparición
                </th>

                <th style={styles.tableHeaderCenter}>
                  Acción
                </th>
              </tr>
            </thead>

            <tbody>
              {issues.map((issue) => {
                const level =
                  LEVEL_CONFIG[issue.level] ||
                  LEVEL_CONFIG.info;

                const status =
                  STATUS_CONFIG[issue.status] ||
                  STATUS_CONFIG.unresolved;

                return (
                  <tr
                    key={issue.id}
                    style={styles.tableRow}
                  >
                    <td style={styles.tableCell}>
                      <div style={styles.issueInformation}>
                        <p style={styles.issueTitle}>
                          {issue.title}
                        </p>

                        <div style={styles.issueMetadata}>
                          <span style={styles.issueCode}>
                            {issue.code}
                          </span>

                          <span style={styles.metadataSeparator}>
                            ·
                          </span>

                          <span style={styles.issueModule}>
                            {issue.module}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td style={styles.tableCell}>
                      {issue.project}
                    </td>

                    <td style={styles.tableCell}>
                      {issue.categoryLabel}
                    </td>

                    <td style={styles.tableCell}>
                      <span
                        style={{
                          ...styles.chip,
                          ...level.style,
                        }}
                      >
                        {level.label}
                      </span>
                    </td>

                    <td style={styles.tableCell}>
                      <span
                        style={{
                          ...styles.chip,
                          ...status.style,
                        }}
                      >
                        {status.label}
                      </span>
                    </td>

                    <td style={styles.tableCellCenter}>
                      {issue.events}
                    </td>

                    <td style={styles.tableCellCenter}>
                      {issue.users}
                    </td>

                    <td style={styles.tableCell}>
                      {issue.lastSeen}
                    </td>

                    <td style={styles.tableCellCenter}>
                      <button
                        type="button"
                        style={styles.viewButton}
                        onClick={() => onOpenIssue(issue)}
                      >
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div style={styles.pagination}>
        <button
          type="button"
          style={styles.paginationButtonDisabled}
          disabled
        >
          Anterior
        </button>

        <span style={styles.pageInformation}>
          Página 1 de 1
        </span>

        <button
          type="button"
          style={styles.paginationButtonDisabled}
          disabled
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}