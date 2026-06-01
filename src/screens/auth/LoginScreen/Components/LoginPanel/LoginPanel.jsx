import React from "react";

import GoogleLoginButton from "../GoogleLoginButton";
import styles from "./styles";

export default function LoginPanel({
  loading,
  errorMessage,
  onLoginWithGoogle,
}) {
  return (
    <div style={styles.loginBox}>
      <p style={styles.kicker}>Acceso privado</p>

      <h2 style={styles.title}>Bienvenido al panel de administración</h2>

      <p style={styles.description}>
        Inicia sesión con una cuenta autorizada para gestionar propuestas,
        contenido y métricas de Lsearch.
      </p>

      <GoogleLoginButton loading={loading} onClick={onLoginWithGoogle} />

      {errorMessage ? (
        <div style={styles.warningBox}>
          <div style={styles.warningIcon}>!</div>

          <div style={styles.warningContent}>
            <p style={styles.warningTitle}>Solo cuentas autorizadas</p>

            <p style={styles.warningText}>{errorMessage}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}