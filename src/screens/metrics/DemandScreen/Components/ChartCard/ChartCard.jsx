import React from "react";
import styles from "./styles";

export default function ChartCard({ title, description, children }) {
  return (
    <article style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>{title}</h2>

        {description ? (
          <p style={styles.description}>{description}</p>
        ) : null}
      </div>

      {children}
    </article>
  );
}