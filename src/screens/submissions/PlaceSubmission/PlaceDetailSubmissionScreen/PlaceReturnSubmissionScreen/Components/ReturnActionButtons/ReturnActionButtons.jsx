import React from "react";

import {
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

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
          <ArrowLeft
            size={30}
            strokeWidth={2.2}
          />

          <span>Volver</span>
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
        <ArrowLeft
          size={30}
          strokeWidth={2.2}
        />

        <span>Cancelar</span>
      </button>

      <button
        type="button"
        style={{
          ...styles.submitButton,
          opacity: canSubmit ? 1 : 0.48,
          cursor: canSubmit
            ? "pointer"
            : "not-allowed",
        }}
        disabled={!canSubmit}
        onClick={onSubmit}
      >
        <RotateCcw
          size={30}
          strokeWidth={2.2}
        />

        <span>Devolver propuesta</span>
      </button>
    </div>
  );
}