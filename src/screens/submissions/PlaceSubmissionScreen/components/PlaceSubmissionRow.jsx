import React from "react";
import styles from "./styles";

function getStatusLabel(status) {
  const map = {
    aprobado: "Aprobado",
    pendiente: "Pendiente",
    rechazado: "Rechazado",
  };

  return map[status] || "Sin estado";
}

function getStatusStyle(status) {
  const map = {
    aprobado: styles.statusApproved,
    pendiente: styles.statusPending,
    rechazado: styles.statusRejected,
  };

  return map[status] || styles.statusDefault;
}

export default function PlaceSubmissionRow({ item }) {
  return (
    <div style={styles.row}>
      <div style={styles.placeCell}>
        <div style={styles.placePhoto}>
          {item.placePhoto ? (
            <img
              src={item.placePhoto}
              alt={item.placeName}
              style={styles.photoImage}
            />
          ) : (
            <span style={styles.photoPlaceholderText}>Foto lugar</span>
          )}
        </div>

        <span style={styles.placeName}>{item.placeName}</span>
      </div>

      <div style={styles.dateCell}>
        <span style={styles.cellText}>{item.createdAt}</span>
      </div>

      <div style={styles.userCell}>
        <span style={styles.cellText}>{item.userName}</span>
      </div>

      <div style={styles.userPhotoCell}>
        <div style={styles.userPhoto}>
          {item.userPhoto ? (
            <img
              src={item.userPhoto}
              alt={item.userName}
              style={styles.photoImage}
            />
          ) : (
            <span style={styles.photoPlaceholderText}>Foto usuario</span>
          )}
        </div>
      </div>

      <div style={styles.statusCell}>
        <span style={{ ...styles.statusBadge, ...getStatusStyle(item.status) }}>
          {getStatusLabel(item.status)}
        </span>
      </div>
    </div>
  );
}