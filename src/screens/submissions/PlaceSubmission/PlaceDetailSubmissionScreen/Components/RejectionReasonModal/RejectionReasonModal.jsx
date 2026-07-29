import React from "react";

import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  FileWarning,
  Info,
  MessageSquareText,
  ShieldAlert,
  X,
} from "lucide-react";

import styles from "./styles";

function getReasonConfig(reason) {
  const map = {
    spam: {
      label: "SPAM",
      icon: Ban,
    },
    guidelines: {
      label: "No cumple lineamientos",
      icon: ShieldAlert,
    },
    offensive_content: {
      label: "Contenido ofensivo",
      icon: AlertTriangle,
    },
    incorrect_information: {
      label: "Información incorrecta",
      icon: FileWarning,
    },
    other: {
      label: "Otro motivo",
      icon: Info,
    },
  };

  return (
    map[reason] || {
      label: "Sin categoría",
      icon: Info,
    }
  );
}

export default function RejectionReasonModal({
  visible,
  rejectionReason,
  onClose,
}) {
  if (!visible) {
    return null;
  }

  const reason =
    rejectionReason?.reason ||
    rejectionReason?.rejectionReason ||
    "";

  const message =
    rejectionReason?.message ||
    rejectionReason?.rejectionComment ||
    "Sin motivo registrado.";

  const reasonConfig =
    getReasonConfig(reason);

  const ReasonIcon =
    reasonConfig.icon;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.accentLine} />

        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerIconBox}>
              <ShieldAlert
                size={36}
                strokeWidth={2.15}
              />
            </div>

            <div>
              <h2 style={styles.title}>
                Motivo de rechazo
              </h2>

              <p style={styles.subtitle}>
                Consulta la causa registrada al
                rechazar la propuesta.
              </p>
            </div>
          </div>

          <button
            type="button"
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X
              size={34}
              strokeWidth={3.2}
            />
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.reasonSection}>
            <span style={styles.sectionLabel}>
              Categoría
            </span>

            <div style={styles.reasonChip}>
              <ReasonIcon
                size={30}
                strokeWidth={2.2}
              />

              <span>
                {reasonConfig.label}
              </span>
            </div>
          </div>

          <div style={styles.messageSection}>
            <div style={styles.messageHeader}>
              <div style={styles.messageIconBox}>
                <MessageSquareText
                  size={28}
                  strokeWidth={2.1}
                />
              </div>

              <span style={styles.sectionLabel}>
                Comentario para el usuario
              </span>
            </div>

            <div style={styles.messageBox}>
              {message}
            </div>
          </div>

          <div style={styles.actions}>
            <button
              type="button"
              style={styles.backButton}
              onClick={onClose}
            >
              <ArrowLeft
                size={18}
                strokeWidth={2.2}
              />

              <span>Volver</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}