import React from "react";

import styles from "./styles";

const STATS = [
  {
    id: "open",
    title: "Incidencias abiertas",
    valueKey: "openIssues",
    description: "Requieren seguimiento",
    status: "warning",
  },
  {
    id: "critical",
    title: "Incidencias críticas",
    valueKey: "criticalIssues",
    description: "Mayor nivel de impacto",
    status: "critical",
  },
  {
    id: "reviewing",
    title: "En revisión",
    valueKey: "reviewingIssues",
    description: "Actualmente investigadas",
    status: "information",
  },
  {
    id: "users",
    title: "Usuarios afectados",
    valueKey: "affectedUsers",
    description: "En las últimas 24 horas",
    status: "critical",
  },
];

export default function IssueStats({
  stats,
}) {
  return (
    <section style={styles.container}>
      {STATS.map((item) => (
        <article
          key={item.id}
          style={styles.card}
        >
          <p style={styles.title}>
            {item.title}
          </p>

          <strong style={styles.value}>
            {stats[item.valueKey]}
          </strong>

          <p
            style={{
              ...styles.description,
              ...(styles.descriptionStatus[item.status] ||
                styles.descriptionStatus.default),
            }}
          >
            {item.description}
          </p>
        </article>
      ))}
    </section>
  );
}