import React from "react";
import styles from "./styles";

function getPhotoUrl(photo) {
  if (!photo) return null;

  if (typeof photo === "string") return photo;

  return (
    photo.thumbnailURL ||
    photo.mediumURL ||
    photo.downloadURL ||
    photo.url ||
    photo.photoUrl ||
    photo.uri ||
    null
  );
}

function formatValue(value) {
  if (value == null) return "Sin información";

  if (Array.isArray(value)) {
    if (value.length === 0) return "Sin información";

    return value
      .map((item) => {
        if (typeof item === "string") return item;
        return item.label || item.name || item.downloadURL || item.url || "";
      })
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "object") {
    const latitude = value.latitude || value.lat;
    const longitude = value.longitude || value.lng;

    if (latitude && longitude) {
      return `${latitude}, ${longitude}`;
    }

    return JSON.stringify(value, null, 2);
  }

  return String(value);
}

function getFieldTitle(fieldKey) {
  const map = {
    name: "Nombre",
    description: "Descripción",
    tag: "Etiqueta",
    subtags: "Subetiquetas",
    approaches: "Enfoque",
    price: "Rango de precio",
    schedule: "Horario",
    photos: "Fotos",
    location: "Ubicación",
  };

  return map[fieldKey] || "Campo";
}

function renderPhotos(value) {
  const photos = Array.isArray(value) ? value : [];

  if (photos.length === 0) {
    return <span style={styles.emptyText}>Sin fotos</span>;
  }

  return (
    <div style={styles.photosGrid}>
      {photos.map((photo, index) => {
        const url = getPhotoUrl(photo);

        return (
          <div key={`${url || "photo"}-${index}`} style={styles.photoBox}>
            {url ? (
              <img
                src={url}
                alt={`Foto ${index + 1}`}
                style={styles.photo}
                loading="lazy"
              />
            ) : (
              <span style={styles.emptyText}>Sin foto</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function renderValue(value, fieldKey) {
  if (fieldKey === "photos") {
    return renderPhotos(value);
  }

  return formatValue(value);
}

export default function CorrectionCompareModal({
  visible,
  fieldKey,
  oldValue,
  newValue,
  message,
  onClose,
}) {
  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>{getFieldTitle(fieldKey)}</h2>

          <button type="button" style={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        {message ? (
          <div style={styles.messageBox}>
            <strong>Motivo:</strong> {message}
          </div>
        ) : null}

        <div style={styles.compareGrid}>
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Antes</h3>

            <div style={styles.valueBox}>
              {renderValue(oldValue, fieldKey)}
            </div>
          </div>

          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Nuevo</h3>

            <div style={styles.valueBoxSuccess}>
              {renderValue(newValue, fieldKey)}
            </div>
          </div>
        </div>

        <div style={styles.closeRow}>
          <button type="button" style={styles.bottomCloseButton} onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}