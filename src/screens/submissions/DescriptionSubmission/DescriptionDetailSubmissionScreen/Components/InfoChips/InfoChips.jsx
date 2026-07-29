import React from "react";

import {
  Focus,
  Layers3,
  Tag,
} from "lucide-react";

import styles from "./styles";

export default function InfoChips({
  tag,
  subtags = [],
  focus,
}) {
  const focusItems = Array.isArray(focus)
    ? focus
    : focus
      ? [focus]
      : [];

  return (
    <div style={styles.container}>
      <div style={styles.infoItem}>
        <div style={styles.tagIconBox}>
          <Tag size={40} strokeWidth={2.3} />
        </div>

        <div style={styles.itemContent}>
          <span style={styles.label}>
            Etiqueta principal
          </span>

          <div style={styles.valuesContainer}>
            <span style={styles.tagChip}>
              {tag || "Sin etiqueta"}
            </span>
          </div>
        </div>
      </div>

      <div style={styles.infoItem}>
        <div style={styles.subtagIconBox}>
          <Layers3 size={40} strokeWidth={2.3} />
        </div>

        <div style={styles.itemContent}>
          <span style={styles.label}>
            Subetiquetas
          </span>

          <div style={styles.valuesContainer}>
            {subtags.length > 0 ? (
              subtags.map((subtag) => (
                <span
                  key={subtag}
                  style={styles.subtagChip}
                >
                  {subtag}
                </span>
              ))
            ) : (
              <span style={styles.emptyValue}>
                Sin subetiquetas
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={styles.infoItem}>
        <div style={styles.focusIconBox}>
          <Focus size={40} strokeWidth={2.3} />
        </div>

        <div style={styles.itemContent}>
          <span style={styles.label}>Enfoque</span>

          <div style={styles.valuesContainer}>
            {focusItems.length > 0 ? (
              focusItems.map((focusItem) => (
                <span
                  key={focusItem}
                  style={styles.focusChip}
                >
                  {focusItem}
                </span>
              ))
            ) : (
              <span style={styles.emptyValue}>
                Sin enfoque
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}