import React from "react";
import styles from "./styles";

export default function ActionButtons({ onAccept, onReturn, onReject }) {
  return (
    <div style={styles.container}>
      <button type="button" style={styles.acceptButton} onClick={onAccept}>
        Aceptar
      </button>

      <button type="button" style={styles.rejectButton} onClick={onReject}>
        Rechazar
      </button>
    </div>
  );
}