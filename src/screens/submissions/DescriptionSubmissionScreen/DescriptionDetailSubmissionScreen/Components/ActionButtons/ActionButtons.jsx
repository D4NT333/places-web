import React from "react";
import styles from "./styles";

export default function ActionButtons({
  onAccept,
  onReject,
  disabled = false,
}) {
  return (
    <div style={styles.container}>
      <button
        type="button"
        style={{
          ...styles.acceptButton,
          ...(disabled ? styles.disabledButton : {}),
        }}
        onClick={onAccept}
        disabled={disabled}
      >
        {disabled ? "Aceptando..." : "Aceptar"}
      </button>

      <button
        type="button"
        style={{
          ...styles.rejectButton,
          ...(disabled ? styles.disabledButton : {}),
        }}
        onClick={onReject}
        disabled={disabled}
      >
        Rechazar
      </button>
    </div>
  );
}