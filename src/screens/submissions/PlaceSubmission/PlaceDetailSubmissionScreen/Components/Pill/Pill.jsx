import React from "react";
import styles from "./styles";

export default function Pill({ label, size = "small" }) {
  const sizeStyle = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return <div style={sizeStyle[size] || styles.small}>{label}</div>;
}