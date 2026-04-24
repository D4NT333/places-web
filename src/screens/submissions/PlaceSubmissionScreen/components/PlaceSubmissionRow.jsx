import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

export default function PlaceSubmissionRow({ item }) {
  const navigate = useNavigate();

  const handleOpenDetail = () => {
    navigate(`/submissions/places/${item.id}`);
  };

  const statusStyle =
    styles.statusBadge?.[item.status] || styles.statusBadgeDefault;

  const placeName = item.name || item.placeName || "Sin nombre";

  return (
    <div style={styles.row} onClick={handleOpenDetail}>
      <div style={styles.placeCell}>
        <div style={styles.placePhoto}>
          <span style={styles.photoPlaceholderText}>Foto lugar</span>
        </div>

        <span style={styles.placeName}>{placeName}</span>
      </div>

      <div style={styles.dateCell}>
        <span style={styles.cellText}>{item.createdAt}</span>
      </div>

      <div style={styles.userCell}>
        <span style={styles.cellText}>{item.userName}</span>
      </div>

      <div style={styles.userPhotoCell}>
        <div style={styles.userPhoto}>
          <span style={styles.photoPlaceholderText}>Foto usuario</span>
        </div>
      </div>

      <div style={styles.statusCell}>
        <span style={statusStyle}>{item.statusLabel}</span>
      </div>
    </div>
  );
}