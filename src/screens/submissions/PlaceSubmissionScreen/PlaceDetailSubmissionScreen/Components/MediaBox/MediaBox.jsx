import React from "react";
import styles from "./styles";

export default function MediaBox({ label, type = "photos" }) {
  const boxStyle = type === "location" ? styles.locationBox : styles.photosBox;

  return <div style={boxStyle}>{label}</div>;
}