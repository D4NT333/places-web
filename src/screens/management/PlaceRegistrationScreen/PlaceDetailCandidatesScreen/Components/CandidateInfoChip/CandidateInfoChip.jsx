import React from "react";
import styles from "./styles";

export default function CandidateInfoChip({ label, value, mono = false }) {
  return (
    <div style={styles.infoChip}>
      <span style={styles.label}>{label}</span>

      <strong style={mono ? styles.monoValue : styles.value}>
        {value}
      </strong>
    </div>
  );
}