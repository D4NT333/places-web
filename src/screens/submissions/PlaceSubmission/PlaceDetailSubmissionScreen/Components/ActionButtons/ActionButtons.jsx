import React from "react";
import styles from "./styles";

export default function ActionButtons({
  onAccept,
  onReturn,
  onReject,
}) {
  return (
    <div style={styles.container}>
      <button
        type="button"
        style={styles.button}
        onClick={onAccept}
      >
        Aceptar
      </button>

      <button
        type="button"
        style={styles.button}
        onClick={onReturn}
      >
        Devolver
      </button>

      <button
        type="button"
        style={{
          ...styles.button,
          ...styles.rejectButton,
        }}
        onClick={onReject}
      >
        Rechazar
      </button>
    </div>
  );
}