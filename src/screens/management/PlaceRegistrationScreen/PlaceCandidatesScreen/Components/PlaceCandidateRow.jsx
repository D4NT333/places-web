import React from "react";

import {
  CheckCircle2,
  ChevronRight,
  CircleX,
  Clock3,
  MapPin,
  Shapes,
} from "lucide-react";

import styles from "./styles";

function getStatusLabel(status) {
  const labels = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return (
    labels[status] ||
    "Pendiente"
  );
}

function getStatusStyle(status) {
  const variants = {
    in_review:
      styles.statusPending,

    accepted:
      styles.statusAccepted,

    rejected:
      styles.statusRejected,
  };

  return (
    variants[status] ||
    styles.statusPending
  );
}

function getStatusIcon(status) {
  const icons = {
    in_review: Clock3,
    accepted: CheckCircle2,
    rejected: CircleX,
  };

  return (
    icons[status] ||
    Clock3
  );
}

function formatGoogleType(type) {
  if (!type) {
    return "Sin tipo";
  }

  return type
    .replaceAll("_", " ")
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase(),
    );
}

export default function PlaceCandidateRow({
  item,
  onClick,
}) {
  const StatusIcon =
    getStatusIcon(item.status);

  function handleKeyDown(event) {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onClick?.();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      title={`Ver detalle de ${
        item.name ||
        "este candidato"
      }`}
      aria-label={`Ver detalle de ${
        item.name ||
        "este candidato"
      }`}
      style={styles.row}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div style={styles.nameCell}>
        <div style={styles.nameIcon}>
          <MapPin
            size={50}
            strokeWidth={2.2}
          />
        </div>

        <strong style={styles.name}>
          {item.name ||
            "Sin nombre"}
        </strong>
      </div>

      <div style={styles.addressCell}>
        <span style={styles.addressText}>
          {item.address ||
            "Sin dirección"}
        </span>
      </div>

      <div style={styles.typeCell}>
        <span style={styles.typeBadge}>
          <Shapes
            size={40}
            strokeWidth={2.15}
          />

          <span style={styles.typeText}>
            {formatGoogleType(
              item.googleMainType,
            )}
          </span>
        </span>
      </div>

      <div style={styles.statusCell}>
        <span
          style={{
            ...styles.statusBadge,
            ...getStatusStyle(
              item.status,
            ),
          }}
        >
          <StatusIcon
            size={40}
            strokeWidth={2.3}
          />

          {getStatusLabel(
            item.status,
          )}
        </span>
      </div>

      <div style={styles.actionCell}>
        <ChevronRight
          size={40}
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
}