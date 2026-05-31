import React from "react";
import styles from "./styles";

export default function KpiCard({ label, value, helper }) {
  return (
    <article style={styles.card}>
      <p style={styles.label}>{label}</p>
      <h2 style={styles.value}>{value}</h2>
      <p style={styles.helper}>{helper}</p>
    </article>
  );
}