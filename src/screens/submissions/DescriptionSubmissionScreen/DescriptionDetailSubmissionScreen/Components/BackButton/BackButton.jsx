import React from "react";
import styles from "./styles";

export default function BackButton({ onClick }) {
  return (
    <div style={styles.container}>
      <button type="button" style={styles.button} onClick={onClick}>
        Volver
      </button>
    </div>
  );
}