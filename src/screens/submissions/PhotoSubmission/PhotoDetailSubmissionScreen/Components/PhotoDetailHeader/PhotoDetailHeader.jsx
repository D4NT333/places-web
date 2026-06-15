import React from "react";

import styles from "./styles";

export default function PhotoDetailHeader({
  placeName,
}) {
  return (
    <header style={styles.container}>
      <div style={styles.information}>
        <h1 style={styles.title}>
          {placeName}
        </h1>
      </div>
    </header>
  );
}