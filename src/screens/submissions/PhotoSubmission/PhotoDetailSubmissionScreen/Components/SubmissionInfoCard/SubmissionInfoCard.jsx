import React from "react";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Images,
  MapPin,
  UserRound,
  XCircle,
} from "lucide-react";

import styles from "./styles";

const STATUS_CONFIG = {
  in_review: {
    label: "Pendiente",
    icon: Clock3,
    style: styles.pendingStatus,
  },

  approved: {
    label: "Aprobada",
    icon: CheckCircle2,
    style: styles.approvedStatus,
  },

  rejected: {
    label: "Rechazada",
    icon: XCircle,
    style: styles.rejectedStatus,
  },
};

function InfoField({
  icon: Icon,
  toneStyle,
  label,
  value,
  children,
}) {
  return (
    <div style={styles.infoField}>
      <div
        style={{
          ...styles.fieldIconBox,
          ...toneStyle,
        }}
      >
        <Icon
          size={40}
          strokeWidth={2.2}
        />
      </div>

      <div style={styles.fieldContent}>
        <span style={styles.infoLabel}>
          {label}
        </span>

        {children || (
          <strong style={styles.infoValue}>
            {value}
          </strong>
        )}
      </div>
    </div>
  );
}

export default function SubmissionInfoCard({
  placeName,
  createdByName,
  createdAt,
  photoCount,
  status,
}) {
  const statusConfig =
    STATUS_CONFIG[status] ||
    STATUS_CONFIG.in_review;

  const StatusIcon =
    statusConfig.icon;

  return (
    <section style={styles.card}>
      <div style={styles.header}>
        <div style={styles.headerIconBox}>
          <Images
            size={40}
            strokeWidth={2.2}
          />
        </div>

        <div>
          <h2 style={styles.title}>
            Información de la propuesta
          </h2>

          <p style={styles.subtitle}>
            Datos generales del envío.
          </p>
        </div>
      </div>

      <div style={styles.content}>
        <InfoField
          icon={MapPin}
          toneStyle={styles.iconGreen}
          label="Lugar"
          value={
            placeName ||
            "Lugar sin nombre"
          }
        />

        <InfoField
          icon={UserRound}
          toneStyle={styles.iconGreen}
          label="Enviada por"
          value={
            createdByName ||
            "Usuario"
          }
        />

        <InfoField
          icon={CalendarDays}
          toneStyle={styles.iconBlue}
          label="Fecha de envío"
          value={
            createdAt ||
            "Sin fecha"
          }
        />

        <InfoField
          icon={Images}
          toneStyle={styles.iconViolet}
          label="Fotografías"
          value={`${photoCount} ${
            photoCount === 1
              ? "fotografía"
              : "fotografías"
          }`}
        />

        <InfoField
          icon={StatusIcon}
          toneStyle={
            status === "approved"
              ? styles.iconGreen
              : status === "rejected"
                ? styles.iconRed
                : styles.iconOrange
          }
          label="Estado"
        >
          <span
            style={{
              ...styles.status,
              ...statusConfig.style,
            }}
          >
            <StatusIcon
              size={34}
              strokeWidth={2.4}
            />

            {statusConfig.label}
          </span>
        </InfoField>
      </div>
    </section>
  );
}