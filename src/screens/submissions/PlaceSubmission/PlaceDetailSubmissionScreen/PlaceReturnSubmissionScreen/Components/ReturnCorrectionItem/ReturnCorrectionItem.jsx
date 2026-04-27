import React from "react";
import styles from "./styles";

function renderFieldValue({ value, type, label }) {
  if (type === "photos") {
    const photos = Array.isArray(value) ? value : [];

    if (photos.length === 0) {
      return <span style={styles.emptyText}>Sin fotos</span>;
    }

    return (
      <div style={styles.photosPreview}>
        {photos.slice(0, 4).map((photoUrl, index) => (
          <img
            key={`${photoUrl}-${index}`}
            src={photoUrl}
            alt={`Foto ${index + 1}`}
            style={styles.photo}
          />
        ))}
      </div>
    );
  }

  if (type === "location") {
    if (!value) {
      return <span style={styles.emptyText}>Sin ubicación</span>;
    }

    const lat = value.latitude || value.lat;
    const lng = value.longitude || value.lng;

    return (
      <span>
        {lat && lng ? `${lat}, ${lng}` : "Ubicación registrada"}
      </span>
    );
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span style={styles.emptyText}>Sin {label.toLowerCase()}</span>;
    }

    return (
      <div style={styles.multiValueContainer}>
        {value.map((item, index) => (
          <span key={`${item}-${index}`} style={styles.valueChip}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (!value) {
    return <span style={styles.emptyText}>Sin {label.toLowerCase()}</span>;
  }

  return <span>{value}</span>;
}

export default function ReturnCorrectionItem({
  label,
  value,
  type,
  selected,
  comment,
  onToggle,
  onCommentChange,
}) {
  return (
    <div style={styles.container}>
      <div style={styles.label}>{label}</div>

      <button
        type="button"
        style={{
          ...styles.valueBox,
          ...(selected ? styles.valueBoxSelected : {}),
          ...(type === "photos" || type === "location"
            ? styles.largeValueBox
            : {}),
        }}
        onClick={onToggle}
      >
        {renderFieldValue({ value, type, label })}
      </button>

      {selected && (
        <div style={styles.reasonContainer}>
          <label style={styles.reasonLabel}>Motivo:</label>

          <textarea
            style={styles.reasonInput}
            placeholder={`Escribe el motivo de corrección para ${label.toLowerCase()}...`}
            value={comment}
            onChange={(event) => onCommentChange(event.target.value)}
            maxLength={250}
          />

          <div style={styles.counter}>
            {comment.trim().length}/5 mínimo
          </div>
        </div>
      )}
    </div>
  );
}