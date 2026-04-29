import React from "react";
import styles from "./styles";

function getLocationText(value) {
  if (!value) return "Sin ubicación";

  const latitude =
    value.latitude ??
    value.lat ??
    value.coords?.latitude ??
    value._lat ??
    null;

  const longitude =
    value.longitude ??
    value.lng ??
    value.coords?.longitude ??
    value._long ??
    null;

  if (latitude == null || longitude == null) {
    return "Sin ubicación";
  }

  return `${latitude}, ${longitude}`;
}

export default function ReturnCorrectionItem({
  fieldKey,
  label,
  value,
  type,
  selected,
  comment,
  onToggle,
  onCommentChange,
}) {
  const isWide = type === "photos" || type === "location";

  function renderValue() {
    if (type === "photos") {
      const photos = Array.isArray(value) ? value : [];

      if (photos.length === 0) {
        return <span style={styles.emptyValue}>Sin fotos</span>;
      }

      return (
        <div style={styles.photosGrid}>
          {photos.map((photoUrl, index) => (
            <img
              key={`${photoUrl}-${index}`}
              src={photoUrl}
              alt={`Foto ${index + 1}`}
              style={styles.photoThumbnail}
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    if (type === "location") {
      return getLocationText(value);
    }

    if (Array.isArray(value)) {
      if (!value.length) return "Sin información";

      return (
        <div style={styles.tagsWrap}>
          {value.map((item, index) => (
            <span key={`${item}-${index}`} style={styles.miniPill}>
              {item}
            </span>
          ))}
        </div>
      );
    }

    return value || "Sin información";
  }

  return (
    <div
      style={{
        ...styles.item,
        ...(isWide ? styles.itemWide : styles.itemCompact),
      }}
    >
      <div style={styles.label}>{label}</div>

      <div
        style={{
          ...styles.valueBox,
          ...(selected ? styles.valueBoxSelected : {}),
          ...(isWide ? styles.valueBoxWide : styles.valueBoxCompact),
        }}
        role="button"
        tabIndex={0}
        onClick={() => onToggle(fieldKey)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle(fieldKey);
          }
        }}
      >
        {renderValue()}
      </div>

      {selected && (
        <div style={styles.commentWrapper}>
          <label style={styles.commentLabel}>Motivo:</label>

          <textarea
            style={styles.commentInput}
            value={comment}
            rows={2}
            onChange={(event) => onCommentChange(fieldKey, event.target.value)}
            placeholder={`Escribe el motivo de corrección para ${label.toLowerCase()}...`}
          />

          <div style={styles.commentFooter}>
            {(comment || "").trim().length}/5 mínimo
          </div>
        </div>
      )}
    </div>
  );
}