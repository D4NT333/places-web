import React from "react";
import styles from "./styles";

export default function ActionButtons() {
  return (
    <div style={styles.container}>
      <button type="button" style={styles.button}>
        Aceptar
      </button>

      <button type="button" style={styles.button}>
        Devolver
      </button>

      <button type="button" style={styles.button}>
        Rechazar
      </button>
    </div>
  );
}