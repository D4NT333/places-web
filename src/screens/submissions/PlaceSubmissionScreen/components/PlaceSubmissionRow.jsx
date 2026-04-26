import React from "react";
import styles from "./styles";

function formatDate(dateString) {
  if (!dateString) return "Sin fecha";

  const date = new Date(dateString);

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

export default function PlaceSubmissionRow({ item, onClick }) {
  return (
      <div
        style={styles.row}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
      <div style={styles.placeCell}>
        {item.placePhotoUrl ? (
          <img
            src={item.placePhotoUrl}
            alt={item.name}
            style={styles.placeImage}
          />
        ) : (
          <div style={styles.placeImagePlaceholder}>Foto lugar</div>
        )}

        <strong style={styles.placeName}>{item.name}</strong>
      </div>

      <div style={styles.dateCell}>{formatDate(item.createdAt)}</div>

      <div style={styles.userCell}>{item.userName}</div>

      <div style={styles.userPhotoCell}>
        {item.userPhotoUrl ? (
          <img
            src={item.userPhotoUrl}
            alt={item.userName}
            style={styles.userImage}
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