import React from "react";

import styles from "./styles";

export default function CategoryBreakdown({
  categories = [],
}) {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Errores por categoría
        </h2>

        <p style={styles.description}>
          Clasificación general de los eventos registrados.
        </p>
      </div>

      <div style={styles.list}>
        {categories.map((category) => (
          <div
            key={category.id}
            style={styles.item}
          >
            <div style={styles.itemHeader}>
              <span style={styles.categoryLabel}>
                {category.label}
              </span>

              <span style={styles.categoryValue}>
                {category.value}
              </span>
            </div>

            <div style={styles.progressBackground}>
              <div
                style={{
                  ...styles.progressValue,
                  width: `${category.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}