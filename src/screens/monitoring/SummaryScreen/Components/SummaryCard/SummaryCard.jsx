import React from "react";

import styles from "./styles";

export default function SummaryCard({
  title,
  value,
  description,
  status = "default",
}) {
  return (
    <article style={styles.container}>
      <p style={styles.title}>
        {title}
      </p>

      <strong style={styles.value}>
        {value}
      </strong>

      <p
        style={{
          ...styles.description,
          ...(styles.descriptionStatus[status] ||
            styles.descriptionStatus.default),
        }}
      >
        {description}
      </p>
    </article>
  );
}