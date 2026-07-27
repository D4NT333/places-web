import React from "react";

import styles from "./styles";

const STATUS_CONFIG = {
  operational: {
    label: "Operativo",
    style: styles.statusOperational,
  },

  warning: {
    label: "Advertencia",
    style: styles.statusWarning,
  },

  critical: {
    label: "Crítico",
    style: styles.statusCritical,
  },
};

export default function ProjectStatus({
  projects = [],
}) {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Estado de proyectos
        </h2>

        <p style={styles.description}>
          Situación actual de los sistemas monitoreados.
        </p>
      </div>

      <div style={styles.list}>
        {projects.map((project) => {
          const status =
            STATUS_CONFIG[project.status] ||
            STATUS_CONFIG.operational;

          return (
            <article
              key={project.id}
              style={styles.item}
            >
              <div style={styles.itemHeader}>
                <div style={styles.projectInformation}>
                  <p style={styles.projectName}>
                    {project.name}
                  </p>

                  <p style={styles.projectTechnology}>
                    {project.technology}
                  </p>
                </div>

                <span
                  style={{
                    ...styles.status,
                    ...status.style,
                  }}
                >
                  {status.label}
                </span>
              </div>

              <div style={styles.metrics}>
                <div style={styles.metric}>
                  <span style={styles.metricValue}>
                    {project.openIssues}
                  </span>

                  <span style={styles.metricLabel}>
                    Abiertas
                  </span>
                </div>

                <div style={styles.metric}>
                  <span style={styles.metricValue}>
                    {project.criticalIssues}
                  </span>

                  <span style={styles.metricLabel}>
                    Críticas
                  </span>
                </div>

                <div style={styles.metric}>
                  <span style={styles.metricValue}>
                    {project.events}
                  </span>

                  <span style={styles.metricLabel}>
                    Eventos
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}