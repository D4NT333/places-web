import React from "react";
import styles from "./styles";

export default function InfoChips({ tag, subtags = [], focus }) {
  return (
    <div style={styles.container}>
      <span style={styles.tagChip}>{tag}</span>

      {subtags.map((subtag) => (
        <span key={subtag} style={styles.subtagChip}>
          {subtag}
        </span>
      ))}

      <span style={styles.focusChip}>{focus}</span>
    </div>
  );
}