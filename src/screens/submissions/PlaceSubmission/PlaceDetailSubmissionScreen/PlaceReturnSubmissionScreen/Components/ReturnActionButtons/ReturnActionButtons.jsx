import React from "react";
import styles from "./styles";

export default function ReturnActionButtons({
  canSubmit,
  onCancel,
  onSubmit,
  readOnly = false,
}) {
  if (readOnly) {
    return (
      <div style={styles.container}>
        <button
          type="button"
          style={styles.cancelButton}
          onClick={onCancel}
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        type="button"
        style={styles.cancelButton}
        onClick={onCancel}
      >
        Cancelar
      </button>

      <button
        type="button"
        style={{
          ...styles.submitButton,
          opacity: canSubmit ? 1 : 0.45,
          cursor: canSubmit ? "pointer" : "not-allowed",
        }}
        disabled={!canSubmit}
        onClick={onSubmit}
      >
        Devolver propuesta
      </button>
    </div>
  );
}