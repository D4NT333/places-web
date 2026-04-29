import React, { useState } from "react";
import styles from "./styles";

function formatDate(dateValue) {
  if (!dateValue) return "Sin fecha";

  if (dateValue?.toDate) {
    return dateValue.toDate().toISOString().split("T")[0];
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toISOString().split("T")[0];
}

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    approved: "Aprobado",
    returned: "Devuelta",
    rejected: "Rechazada",
  };

  return map[status] || "Sin estado";
}

function getStatusStyle(status) {
  const map = {
    in_review: styles.statusPending,
    approved: styles.statusApproved,
    returned: styles.statusReturned,
    rejected: styles.statusRejected,
  };

  return map[status] || styles.statusDefault;
}

function getPlaceImageUrl(item) {
  const mainPhoto = item?.photos?.[0];

  return (
    mainPhoto?.thumbnailURL ||
    mainPhoto?.mediumURL ||
    mainPhoto?.downloadURL ||
    item?.placePhotoUrl ||
    null
  );
}

function getInitials(name = "") {
  const cleanName = String(name).trim();

  if (!cleanName) return "?";

  const parts = cleanName.split(/\s+/).filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function UserAvatar({ src, name }) {
  const [hasError, setHasError] = useState(false);

  const canShowImage = Boolean(src) && !hasError;

  if (!canShowImage) {
    return (
      <div style={styles.userImageFallback}>
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      style={styles.userImage}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}

export default function PlaceSubmissionRow({ item, onClick }) {
  const placeImageUrl = getPlaceImageUrl(item);

  return (
    <div
      style={styles.row}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClick?.();
        }
      }}
    >
      <div style={styles.placeCell}>
        {placeImageUrl ? (
          <img
            src={placeImageUrl}
            alt=""
            style={styles.placeImage}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div style={styles.placeImagePlaceholder}>Lugar</div>
        )}

        <strong style={styles.placeName}>
          {item.name || "Lugar sin nombre"}
        </strong>
      </div>

      <div style={styles.dateCell}>
        {formatDate(item.createdAt)}
      </div>

      <div style={styles.userCell}>
        {item.userName || "Usuario desconocido"}
      </div>

      <div style={styles.userPhotoCell}>
        <UserAvatar
          src={item.userPhotoUrl}
          name={item.userName}
        />
      </div>

      <div style={styles.statusCell}>
        <span
          style={{
            ...styles.statusBadge,
            ...getStatusStyle(item.status),
          }}
        >
          {getStatusLabel(item.status)}
        </span>
      </div>
    </div>
  );
}