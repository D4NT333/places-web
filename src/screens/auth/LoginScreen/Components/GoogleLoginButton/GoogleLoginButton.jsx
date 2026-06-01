import React from "react";
import styles from "./styles";

import { icons } from "../../../../../../assets/icons";

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
      <span style={styles.googleIcon}>
        <img src={icons.google} alt="Google" style={styles.googleIconImage} />
      </span>
      {loading ? "Validando acceso..." : "Continuar con Google"}
    </button>
  );
}