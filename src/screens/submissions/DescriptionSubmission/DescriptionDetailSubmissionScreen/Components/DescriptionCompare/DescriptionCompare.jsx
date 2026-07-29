import React from "react";

import {
  ArrowRight,
  FilePenLine,
  FileText,
} from "lucide-react";

import styles from "./styles";

export default function DescriptionCompare({
  oldDescription,
  newDescription,
}) {
  return (
    <section style={styles.container}>
      <div style={styles.descriptionCard}>
        <div style={styles.cardHeader}>
          <div style={styles.headingGroup}>
            <div style={styles.oldIconBox}>
              <FileText size={40} strokeWidth={2.2} />
            </div>

            <div>
              <span style={styles.cardEyebrow}>
                Descripción anterior
              </span>

              <h2 style={styles.cardTitle}>
                Descripción actual
              </h2>
            </div>
          </div>

          <span style={styles.oldBadge}>Actual</span>
        </div>

        <div style={styles.descriptionContent}>
          <p style={styles.descriptionText}>
            {oldDescription || "Sin descripción actual."}
          </p>
        </div>
      </div>

      <div style={styles.arrowBox}>
        <span style={styles.arrow}>
          <ArrowRight size={42} strokeWidth={2.5} />
        </span>
      </div>

      <div
        style={{
          ...styles.descriptionCard,
          ...styles.newDescriptionCard,
        }}
      >
        <div style={styles.cardHeader}>
          <div style={styles.headingGroup}>
            <div style={styles.newIconBox}>
              <FilePenLine size={40} strokeWidth={2.2} />
            </div>

            <div>
              <span style={styles.newCardEyebrow}>
                Nueva propuesta
              </span>

              <h2 style={styles.cardTitle}>
                Descripción propuesta
              </h2>
            </div>
          </div>

          <span style={styles.newBadge}>Propuesta</span>
        </div>

        <div
          style={{
            ...styles.descriptionContent,
            ...styles.newDescriptionContent,
          }}
        >
          <p style={styles.descriptionText}>
            {newDescription || "Sin descripción propuesta."}
          </p>
        </div>
      </div>
    </section>
  );
}