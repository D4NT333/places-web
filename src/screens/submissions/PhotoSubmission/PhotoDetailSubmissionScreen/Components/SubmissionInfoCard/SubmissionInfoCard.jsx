import React from "react";

import styles from "./styles";

const STATUS_CONFIG = {
  in_review: {
    label: "Pendiente",
    style: styles.pendingStatus,
  },

  approved: {
    label: "Aprobada",
    style: styles.approvedStatus,
  },

  rejected: {
    label: "Rechazada",
    style: styles.rejectedStatus,
  },
};

function InfoRow({
  label,
  value,
  children,
}) {
  return (
    <div style={styles.infoRow}>
      <span style={styles.infoLabel}>
        {label}
      </span>

      {children || (
        <span style={styles.infoValue}>
          {value}
        </span>
      )}
    </div>
  );
}

export default function SubmissionInfoCard({
  submissionId,
  placeName,
  createdByName,
  createdAt,
  photoCount,
  status,
}) {
  const statusConfig =
    STATUS_CONFIG[status] ||
    STATUS_CONFIG.in_review;

  return (
    <section style={styles.card}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>
            Información
          </h2>

          <p style={styles.subtitle}>
            Datos generales de la propuesta.
          </p>
        </div>
      </div>

      <div style={styles.content}>
        <InfoRow
          label="Lugar"
          value={placeName}
        />

        <InfoRow
          label="Enviada por"
          value={createdByName}
        />

        <InfoRow
          label="Fecha de envío"
          value={createdAt}
        />

        <InfoRow
          label="Fotografías"
          value={`${photoCount} ${
            photoCount === 1
              ? "fotografía"
              : "fotografías"
          }`}
        />

        <InfoRow label="Estado">
          <span
            style={{
              ...styles.status,
              ...statusConfig.style,
            }}
          >

            {statusConfig.label}
          </span>
        </InfoRow>
      </div>
    </section>
  );
}