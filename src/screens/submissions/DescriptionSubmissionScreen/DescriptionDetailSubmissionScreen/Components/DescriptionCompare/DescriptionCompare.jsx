import React from "react";
import styles from "./styles";

export default function DescriptionCompare({ oldDescription, newDescription }) {
  return (
    <section style={styles.container}>
      <div style={styles.descriptionCard}>
        <div style={styles.cardHeader}>
          <span style={styles.cardEyebrow}>Anterior</span>
          <h2 style={styles.cardTitle}>Descripción actual</h2>
        </div>

        <p style={styles.descriptionText}>{oldDescription}</p>
      </div>

      <div style={styles.arrowBox}>
        <span style={styles.arrow}>→</span>
      </div>

      <div style={{ ...styles.descriptionCard, ...styles.newDescriptionCard }}>
        <div style={styles.cardHeader}>
          <span style={styles.newCardEyebrow}>Nueva propuesta</span>
          <h2 style={styles.cardTitle}>Descripción nueva</h2>
        </div>

        <p style={styles.descriptionText}>{newDescription}</p>
      </div>
    </section>
  );
}