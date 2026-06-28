import React from "react";
import styles from "./styles";

export default function PlaceMediaLocationCard({ place }) {
  return (
    <aside style={styles.card}>
      <div style={styles.photoBox}>
        <span style={styles.counter}>{place.photoIndex}</span>
        <span style={styles.photoText}>Fotos</span>
      </div>

      <section style={styles.locationBlock}>
        <h2 style={styles.title}>Ubicación</h2>

        <div style={styles.mapBox}>
          <span style={styles.mapText}>Ubicación</span>
        </div>

        <p style={styles.address}>
          <strong>Dirección:</strong> {place.address}
        </p>
      </section>
    </aside>
  );
}