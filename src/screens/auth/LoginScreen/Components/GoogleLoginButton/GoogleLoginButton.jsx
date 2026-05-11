import React from "react";
import styles from "./styles";

export default function GoogleLoginButton({ loading, onClick }) {
  return (
    <button
      type="button"
      style={{
        ...styles.googleButton,
        ...(loading ? styles.googleButtonDisabled : {}),
      }}
      onClick={onClick}
      disabled={loading}
    >
      <span style={styles.googleIcon}>G</span>
      {loading ? "Validando acceso..." : "Continuar con Google"}
    </button>
  );
}