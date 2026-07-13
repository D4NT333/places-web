import React, { useState } from "react";

import styles from "./styles";

const SOURCE_LABELS = {
  google_candidate: "Registro Administrativo",
  place_submission: "Propuesta de usuario",
  mobile: "Propuesta de usuario",
};

const MODERATION_STATUS_LABELS = {
  published: "Publicado",
  in_review: "En revisión",
  warned: "Advertido",
  hidden: "Oculto",
};

const ACTIVITY_STATUS_LABELS = {
  active: "Activo",
  low_activity: "Baja actividad",
  pending: "Por confirmar",
  inactive: "Inactivo",
};

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getInitials(name) {
  if (!name) return "LG";

  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export default function PlaceRow({ place, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const sourceLabel =
    SOURCE_LABELS[place.source] || "Sin información";

  const activityLabel =
    ACTIVITY_STATUS_LABELS[place.activityStatus] || "Sin estado";

  const moderationLabel =
    MODERATION_STATUS_LABELS[place.moderationStatus] || "Sin estado";

  const handleClick = () => {
    onSelect?.(place);
  };

  return (
    <button
      type="button"
      style={{
        ...styles.row,
        ...(isHovered ? styles.rowHovered : {}),
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.placeCell}>
        <div
          style={{
            ...styles.imageBox,
            ...(isHovered ? styles.imageBoxHovered : {}),
          }}
        >
          {place.imageUrl ? (
            <img
              src={place.imageUrl}
              alt={place.name || "Lugar"}
              style={styles.image}
            />
          ) : (
            <span style={styles.imageText}>
              {getInitials(place.name)}
            </span>
          )}
        </div>

        <div style={styles.placeInfo}>
          <span
            style={{
              ...styles.placeName,
              ...(isHovered ? styles.placeNameHovered : {}),
            }}
          >
            {place.name || "Lugar sin nombre"}
          </span>
        </div>
      </div>

      <div style={styles.sourceCell}>
        {sourceLabel}
      </div>

      <div style={styles.dateCell}>
        {formatDate(place.createdAt)}
      </div>

      <div style={styles.createdByCell}>
        {place.createdBy?.name || "Sin usuario"}
      </div>

      <div style={styles.approvedByCell}>
        {place.approvedBy?.name || "Sin aceptar"}
      </div>

      <div style={styles.statusCell}>
        <span style={styles.statusText}>
          {activityLabel}
        </span>
      </div>

      <div style={styles.statusCell}>
        <span style={styles.statusText}>
          {moderationLabel}
        </span>
      </div>
    </button>
  );
}