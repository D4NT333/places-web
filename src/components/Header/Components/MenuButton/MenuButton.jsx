import React from "react";

import { icons } from "../../../../../assets/icons";
import styles from "./styles";

export default function MenuButton({ onClick }) {
  return (
    <button
      type="button"
      style={styles.button}
      onClick={onClick}
      title="Abrir menú"
      aria-label="Abrir menú lateral"
    >
      <img src={icons.menu} alt="" style={styles.icon} />
    </button>
  );
}