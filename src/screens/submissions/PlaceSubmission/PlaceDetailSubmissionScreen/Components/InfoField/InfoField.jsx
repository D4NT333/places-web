import React from "react";
import styles from "./styles";

export default function InfoField({ label, value }) {
  return (
    <div style={styles.container}>
      <span style={styles.label}>{label}</span>
      <strong style={styles.value}>{value}</strong>
    </div>
  );
}