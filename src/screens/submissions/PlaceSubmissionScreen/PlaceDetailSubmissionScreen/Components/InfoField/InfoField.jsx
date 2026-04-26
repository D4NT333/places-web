import React from "react";
import styles from "./styles";

export default function InfoField({ label, value }) {
  return (
    <div style={styles.container}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}