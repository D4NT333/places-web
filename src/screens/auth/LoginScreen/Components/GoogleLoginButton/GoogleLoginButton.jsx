import React from "react";

import {
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

import {
  icons,
} from "../../../../../../assets/icons";

import styles from "./styles";

export default function GoogleLoginButton({
  loading,
  onClick,
}) {
  return (
    <button
      type="button"
      style={{
        ...styles.googleButton,

        ...(loading
          ? styles.googleButtonDisabled
          : {}),
      }}
      onClick={onClick}
      disabled={loading}
    >
      <span style={styles.googleIcon}>
        {loading ? (
          <LoaderCircle
            size={30}
            strokeWidth={2.2}
          />
        ) : (
          <img
            src={icons.google}
            alt="Google"
            style={styles.googleIconImage}
          />
        )}
      </span>

      <span style={styles.buttonText}>
        <strong style={styles.buttonTitle}>
          {loading
            ? "Validando acceso..."
            : "Continuar con Google"}
        </strong>

        <span style={styles.buttonSubtitle}>
          {loading
            ? "Comprobando permisos administrativos"
            : "Usa tu cuenta administrativa autorizada"}
        </span>
      </span>

      <span style={styles.arrowBox}>
        {loading ? (
          <LoaderCircle
            size={48}
            strokeWidth={2.2}
          />
        ) : (
          <ArrowRight
            size={40}
            strokeWidth={2.3}
          />
        )}
      </span>
    </button>
  );
}