import React from "react";

import {
  useNavigate,
} from "react-router-dom";

import styles from "./styles";

const LEVEL_LABELS = {
  fatal: "Crítico",
  error: "Error",
  warning: "Advertencia",
  info: "Información",
};

export default function TopIssuesTable({
  issues = [],
}) {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/monitoring/issues");
  };

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>
            Incidencias con mayor impacto
          </h2>

          <p style={styles.description}>
            Problemas con mayor frecuencia o cantidad de usuarios afectados.
          </p>
        </div>

        <button
          type="button"
          style={styles.viewAllButton}
          onClick={handleViewAll}
        >
          Ver incidencias
        </button>
      </div>

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
                Módulo
              </th>

              <th style={styles.tableHeader}>
                Nivel
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
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td style={styles.tableCell}>
                  <p style={styles.issueTitle}>
                    {issue.title}
                  </p>

                  <span style={styles.issueCode}>
                    {issue.code}
                  </span>
                </td>

                <td style={styles.tableCell}>
                  {issue.project}
                </td>

                <td style={styles.tableCell}>
                  {issue.module}
                </td>

                <td style={styles.tableCell}>
                  <span
                    style={{
                      ...styles.levelChip,
                      ...(styles.levels[issue.level] ||
                        styles.levels.info),
                    }}
                  >
                    {LEVEL_LABELS[issue.level] ||
                      LEVEL_LABELS.info}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}