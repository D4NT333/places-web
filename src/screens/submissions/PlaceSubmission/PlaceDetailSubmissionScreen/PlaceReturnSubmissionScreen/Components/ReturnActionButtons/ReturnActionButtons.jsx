import React from "react";
import styles from "./styles";

export default function ReturnActionButtons({
  canSubmit,
  onCancel,
  onSubmit,
}) {
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
        disabled={!canSubmit}
        style={{
          ...styles.submitButton,
          ...(!canSubmit ? styles.submitButtonDisabled : {}),
        }}
        onClick={onSubmit}
      >
        Enviar devolución
      </button>
    </div>
  );
}