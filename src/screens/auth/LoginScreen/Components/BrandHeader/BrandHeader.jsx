import React from "react";
import styles from "./styles";

export default function BrandHeader() {
  return (
    <div style={styles.brandRow}>
      <div style={styles.logoCircle}>L</div>

      <div>
        <h1 style={styles.brandName}>Lsearch</h1>
        <p style={styles.brandSubtitle}>Panel administrativo</p>
      </div>
    </div>
  );
}