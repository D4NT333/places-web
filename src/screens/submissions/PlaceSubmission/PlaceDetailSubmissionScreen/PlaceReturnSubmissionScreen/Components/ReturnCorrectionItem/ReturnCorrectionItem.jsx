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

function getPhotoUrl(photo) {
  if (!photo) return null;

  if (typeof photo === "string") return photo;

  return (
    photo.url ||
    photo.thumbnailUrl ||
    photo.thumbnail?.url ||
    photo.displayUrl ||
    photo.mediumUrl ||
    photo.medium?.url ||
    photo.originalUrl ||
    photo.original?.url ||
    photo.thumbnailURL ||
    photo.mediumURL ||
    photo.downloadURL ||
    photo.uri ||
    photo.src ||
    null
  );
}

function getPhotoIndex(photo, fallbackIndex) {
  if (photo && typeof photo === "object" && typeof photo.index === "number") {
    return photo.index;
  }

  return fallbackIndex;
}

export default function ReturnCorrectionItem({
  fieldKey,
  label,
  value,
  type,
  selected,
  comment,
  selectedPhotos = {},
  photoComments = {},
  onToggle,
  onCommentChange,
  onTogglePhoto,
  onPhotoCommentChange,
  readOnly = false,
}) {
  const isWide = type === "photos" || type === "location";

  function renderPhotosValue() {
    const photos = Array.isArray(value) ? value : [];

    if (photos.length === 0) {
      return <span style={styles.emptyValue}>Sin fotos</span>;
    }

    return (
      <div style={styles.photosGrid}>
        {photos.map((photo, fallbackIndex) => {
          const photoUrl = getPhotoUrl(photo);
          const photoIndex = getPhotoIndex(photo, fallbackIndex);
          const indexKey = String(photoIndex);
          const isPhotoSelected = Boolean(selectedPhotos[indexKey]);

          if (!photoUrl) {
            return null;
          }

          return (
            <button
              key={`${photoUrl}-${indexKey}`}
              type="button"
              style={{
                ...styles.photoButton,
                ...(isPhotoSelected ? styles.photoButtonSelected : {}),
                cursor: readOnly ? "default" : "pointer",
              }}
              onClick={(event) => {
                event.stopPropagation();

                if (readOnly) return;

                onTogglePhoto?.(indexKey);
              }}
            >
              <img
                src={photoUrl}
                alt={`Foto ${photoIndex + 1}`}
                style={styles.photoThumbnail}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <span style={styles.photoBadge}>Foto {photoIndex + 1}</span>
            </button>
          );
        })}
      </div>
    );
  }

  function renderValue() {
    if (type === "photos") {
      return renderPhotosValue();
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

  function renderPhotoComments() {
    if (type !== "photos") return null;

    const photos = Array.isArray(value) ? value : [];
    const selectedPhotoIndexes = Object.keys(selectedPhotos);

    if (selectedPhotoIndexes.length === 0) {
      return null;
    }

    return (
      <div style={styles.photoCommentsWrapper}>
        {photos.map((photo, fallbackIndex) => {
          const photoUrl = getPhotoUrl(photo);
          const photoIndex = getPhotoIndex(photo, fallbackIndex);
          const indexKey = String(photoIndex);
          const isPhotoSelected = Boolean(selectedPhotos[indexKey]);

          if (!photoUrl || !isPhotoSelected) return null;

          const currentComment = photoComments[indexKey] || "";

          return (
            <div
              key={`photo-comment-${indexKey}`}
              style={styles.photoCommentItem}
            >
              <label style={styles.commentLabel}>
                Motivo para foto {photoIndex + 1}:
              </label>

              <textarea
                style={{
                  ...styles.commentInput,
                  opacity: readOnly ? 0.85 : 1,
                  cursor: readOnly ? "default" : "text",
                }}
                value={currentComment}
                rows={2}
                readOnly={readOnly}
                onChange={(event) => {
                  if (readOnly) return;

                  onPhotoCommentChange?.(indexKey, event.target.value);
                }}
                placeholder={`Escribe qué debe corregirse en la foto ${
                  photoIndex + 1
                }...`}
              />

              <div style={styles.commentFooter}>
                {currentComment.trim().length}/5 mínimo
              </div>
            </div>
          );
        })}
      </div>
    );
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
          cursor: readOnly || type === "photos" ? "default" : "pointer",
        }}
        role="button"
        tabIndex={readOnly ? -1 : 0}
        onClick={() => {
          if (readOnly) return;

          if (type !== "photos") {
            onToggle?.(fieldKey);
          }
        }}
        onKeyDown={(event) => {
          if (readOnly) return;
          if (type === "photos") return;

          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle?.(fieldKey);
          }
        }}
      >
        {renderValue()}
      </div>

      {type === "photos" && renderPhotoComments()}

      {selected && type !== "photos" && (
        <div style={styles.commentWrapper}>
          <label style={styles.commentLabel}>Motivo:</label>

          <textarea
            style={{
              ...styles.commentInput,
              opacity: readOnly ? 0.85 : 1,
              cursor: readOnly ? "default" : "text",
            }}
            value={comment || ""}
            rows={2}
            readOnly={readOnly}
            onChange={(event) => {
              if (readOnly) return;

              onCommentChange?.(fieldKey, event.target.value);
            }}
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