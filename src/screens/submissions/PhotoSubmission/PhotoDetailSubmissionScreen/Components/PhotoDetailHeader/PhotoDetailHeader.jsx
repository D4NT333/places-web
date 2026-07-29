import React from "react";

import {
  Images,
} from "lucide-react";

import styles from "./styles";

export default function PhotoDetailHeader({
  placeName,
}) {
  return (
    <header style={styles.container}>
      <div style={styles.iconBox}>
        <Images
          size={38}
          strokeWidth={2.2}
        />
      </div>

      <div style={styles.information}>
        <h1 style={styles.title}>
          {placeName || "Lugar sin nombre"}
        </h1>

        <p style={styles.subtitle}>
          Revisa las fotografías enviadas por el usuario y determina
          si pueden incorporarse al lugar.
        </p>
      </div>
    </header>
  );
}