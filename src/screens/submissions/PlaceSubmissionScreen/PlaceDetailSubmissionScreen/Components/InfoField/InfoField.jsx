import React from "react";
import styles from "./styles";

export default function InfoField({ label }) {
  return <div style={styles.container}>{label}</div>;
}