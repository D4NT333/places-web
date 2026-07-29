import React from "react";

import {
  CheckCircle2,
  LoaderCircle,
  XCircle,
} from "lucide-react";

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
        {disabled ? (
          <LoaderCircle size={40} strokeWidth={2.4} />
        ) : (
          <CheckCircle2 size={40} strokeWidth={2.4} />
        )}

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
        <XCircle size={40} strokeWidth={2.4} />
        Rechazar
      </button>
    </div>
  );
}