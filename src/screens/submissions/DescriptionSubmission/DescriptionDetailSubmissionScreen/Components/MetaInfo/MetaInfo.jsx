import React from "react";
import styles from "./styles";

export default function MetaInfo({ userName, createdAt }) {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <span style={styles.label}>POR:</span>
        <span style={styles.value}>{userName}</span>
      </div>

      <div style={styles.item}>
        <span style={styles.label}>Creado el:</span>
        <span style={styles.value}>{createdAt}</span>
      </div>
    </div>
  );
}