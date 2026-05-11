import React from "react";
import styles from "./styles";

export default function MenuButton({ onClick }) {
  return (
    <button type="button" style={styles.button} onClick={onClick}>
      <span style={styles.line} />
      <span style={styles.line} />
      <span style={styles.line} />
    </button>
  );
}