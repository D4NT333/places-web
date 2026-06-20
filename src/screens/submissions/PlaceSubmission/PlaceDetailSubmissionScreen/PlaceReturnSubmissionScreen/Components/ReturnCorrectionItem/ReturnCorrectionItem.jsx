import React from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import styles from "./styles";

function getLocationCoords(value) {
  if (!value) return null;

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
    value._lng ??
    null;

  const finalLatitude = Number(latitude);
  const finalLongitude = Number(longitude);

  if (Number.isNaN(finalLatitude) || Number.isNaN(finalLongitude)) {
    return null;
  }

  return {
    latitude: finalLatitude,
    longitude: finalLongitude,
  };
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

function getItemIndex(item, fallbackIndex) {
  if (item && typeof item === "object" && typeof item.index === "number") {
    return item.index;
  }

  return fallbackIndex;
}

function getItemLabel(item) {
  if (!item) return "";

  if (typeof item === "string") return item;

  return item.label || item.name || item.value || "";
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
  selectedSubtags = {},
  subtagComments = {},
  onToggle,
  onCommentChange,
  onTogglePhoto,
  onPhotoCommentChange,
  onToggleSubtag,
  onSubtagCommentChange,
  readOnly = false,
}) {
  const isWide = type === "photos" || type === "location" || type === "items";

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

          if (!photoUrl) return null;

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

  function renderItemsValue() {
    const items = Array.isArray(value) ? value : [];

    if (items.length === 0) {
      return <span style={styles.emptyValue}>Sin información</span>;
    }

    return (
      <div style={styles.tagsWrap}>
        {items.map((item, fallbackIndex) => {
          const itemIndex = getItemIndex(item, fallbackIndex);
          const indexKey = String(itemIndex);
          const itemLabel = getItemLabel(item);
          const isItemSelected = Boolean(selectedSubtags[indexKey]);

          if (!itemLabel) return null;

          return (
            <button
              key={`${itemLabel}-${indexKey}`}
              type="button"
              style={{
                ...styles.miniPill,
                ...(isItemSelected ? styles.valueBoxSelected : {}),
                cursor: readOnly ? "default" : "pointer",
              }}
              onClick={(event) => {
                event.stopPropagation();

                if (readOnly) return;

                onToggleSubtag?.(indexKey);
              }}
            >
              {itemLabel}
            </button>
          );
        })}
      </div>
    );
  }

  function renderLocationValue() {
    const coords = getLocationCoords(value);

    if (!coords) {
      return <span style={styles.emptyValue}>Sin ubicación</span>;
    }

    return (
      <div
        style={{
          width: "100%",
          height: 260,
          borderRadius: 10,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <MapContainer
          center={[coords.latitude, coords.longitude]}
          zoom={16}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          zoomControl={false}
          attributionControl={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <CircleMarker
            center={[coords.latitude, coords.longitude]}
            radius={11}
            interactive={false}
            pathOptions={{
              color: "#ffffff",
              weight: 3,
              fillColor: "#2563eb",
              fillOpacity: 1,
            }}
          />
        </MapContainer>
      </div>
    );
  }

  function renderValue() {
    if (type === "photos") {
      return renderPhotosValue();
    }

    if (type === "items" && fieldKey === "subtags") {
      return renderItemsValue();
    }

    if (type === "location") {
      return renderLocationValue();
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
                {currentComment.trim().length}/10 mínimo
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function renderSubtagComments() {
    if (type !== "items" || fieldKey !== "subtags") return null;

    const items = Array.isArray(value) ? value : [];
    const selectedSubtagIndexes = Object.keys(selectedSubtags);

    if (selectedSubtagIndexes.length === 0) {
      return null;
    }

    return (
      <div style={styles.photoCommentsWrapper}>
        {items.map((item, fallbackIndex) => {
          const itemIndex = getItemIndex(item, fallbackIndex);
          const indexKey = String(itemIndex);
          const itemLabel = getItemLabel(item);
          const isItemSelected = Boolean(selectedSubtags[indexKey]);

          if (!itemLabel || !isItemSelected) return null;

          const currentComment = subtagComments[indexKey] || "";

          return (
            <div
              key={`subtag-comment-${indexKey}`}
              style={styles.photoCommentItem}
            >
              <label style={styles.commentLabel}>
                Motivo para subetiqueta "{itemLabel}":
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

                  onSubtagCommentChange?.(indexKey, event.target.value);
                }}
                placeholder={`Escribe qué debe corregirse en "${itemLabel}"...`}
              />

              <div style={styles.commentFooter}>
                {currentComment.trim().length}/10 mínimo
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
          cursor:
            readOnly || type === "photos" || type === "items"
              ? "default"
              : "pointer",
        }}
        role="button"
        tabIndex={readOnly ? -1 : 0}
        onClick={() => {
          if (readOnly) return;

          if (type !== "photos" && type !== "items") {
            onToggle?.(fieldKey);
          }
        }}
        onKeyDown={(event) => {
          if (readOnly) return;
          if (type === "photos" || type === "items") return;

          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle?.(fieldKey);
          }
        }}
      >
        {renderValue()}
      </div>

      {type === "photos" && renderPhotoComments()}

      {type === "items" && fieldKey === "subtags" && renderSubtagComments()}

      {selected && type !== "photos" && type !== "items" && (
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
            {(comment || "").trim().length}/10 mínimo
          </div>
        </div>
      )}
    </div>
  );
}