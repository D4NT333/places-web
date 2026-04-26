import React from "react";
import styles from "./styles";

export default function LocationBox({ location }) {
  const hasLocation = location?.latitude && location?.longitude;

  return (
    <div style={styles.container}>
      <strong>Ubicación</strong>

      {hasLocation && (
        <div style={styles.coords}>
          <span>Lat: {location.latitude}</span>
          <span>Lng: {location.longitude}</span>
        </div>
      )}
    </div>
  );
}