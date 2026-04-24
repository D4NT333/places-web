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

  return (
    <div style={styles.row} onClick={handleOpenDetail}>  
      <div style={styles.placeCell}>
        <div style={styles.placePhoto}>
          <span style={styles.photoText}>Foto lugar</span>
        </div>

        <span style={styles.placeName}>{item.name}</span>
      </div>

      <div style={styles.dateCell}>{item.createdAt}</div>

      <div style={styles.userCell}>{item.userName}</div>

      <div style={styles.userPhotoCell}>
        <div style={styles.userPhoto}>
          <span style={styles.userPhotoText}>Foto usuario</span>
        </div>
      </div>

      <div style={styles.statusCell}>
        <span style={statusStyle}>{item.statusLabel}</span>
      </div>
    </div>
  );
}