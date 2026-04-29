import React from "react";
import styles from "./styles";

function formatDate(dateValue) {
  if (!dateValue) return "Sin fecha";

  // Por si viene como Firestore Timestamp
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
    returned: "Devuelto",
    rejected: "Rechazado",
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
            alt={item.name || "Foto del lugar"}
            style={styles.placeImage}
            loading="lazy"
          />
        ) : (
          <div style={styles.placeImagePlaceholder}>Foto lugar</div>
        )}

        <strong style={styles.placeName}>
          {item.name || "Lugar sin nombre"}
        </strong>
      </div>

      <div style={styles.dateCell}>{formatDate(item.createdAt)}</div>

      <div style={styles.userCell}>
        {item.userName || "Usuario desconocido"}
      </div>

      <div style={styles.userPhotoCell}>
        {item.userPhotoUrl ? (
          <img
            src={item.userPhotoUrl}
            alt={item.userName || "Foto del usuario"}
            style={styles.userImage}
            loading="lazy"
          />
        ) : (
          <div style={styles.userImagePlaceholder}>Foto usuario</div>
        )}
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