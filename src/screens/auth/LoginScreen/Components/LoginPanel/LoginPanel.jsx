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
        <p style={styles.errorMessage}>{errorMessage}</p>
      ) : null}

      <p style={styles.helperText}>
        Solo las cuentas registradas como administradores pueden acceder.
      </p>
    </div>
  );
}