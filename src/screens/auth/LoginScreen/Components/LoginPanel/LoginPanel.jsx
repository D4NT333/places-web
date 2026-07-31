import React from "react";

import {
  AlertTriangle,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import GoogleLoginButton from "../GoogleLoginButton";

import styles from "./styles";

export default function LoginPanel({
  loading,
  errorMessage,
  onLoginWithGoogle,
}) {
  return (
    <section style={styles.loginBox}>
      <div style={styles.accessBadge}>
        <LockKeyhole
          size={40}
          strokeWidth={2.2}
        />

        Acceso administrativo
      </div>

      <h2 style={styles.title}>
        Bienvenido al panel de administración
      </h2>

      <p style={styles.description}>
        Inicia sesión con una cuenta autorizada para
        gestionar propuestas, contenido y métricas
        de Lsearch.
      </p>

      <div style={styles.featuresRow}>
        <span style={styles.featurePill}>
          <CheckCircle2
            size={40}
            strokeWidth={2.25}
          />

          Acceso protegido
        </span>

        <span style={styles.featurePill}>
          <ShieldCheck
            size={40}
            strokeWidth={2.25}
          />

          Solo administradores
        </span>
      </div>

      <GoogleLoginButton
        loading={loading}
        onClick={onLoginWithGoogle}
      />

      <div style={styles.securityNote}>
        <ShieldCheck
          size={56}
          strokeWidth={2.2}
        />

        <span>
          La cuenta será validada antes de permitir
          el acceso al sistema.
        </span>
      </div>

      {errorMessage ? (
        <div style={styles.warningBox}>
          <div style={styles.warningIcon}>
            <AlertTriangle
              size={40}
              strokeWidth={2.25}
            />
          </div>

          <div style={styles.warningContent}>
            <p style={styles.warningTitle}>
              Acceso no autorizado
            </p>

            <p style={styles.warningText}>
              {errorMessage}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}