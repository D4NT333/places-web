import React from "react";
import { ArrowLeft } from "lucide-react";

import styles from "./styles";

export default function BackButton({ onClick }) {
  return (
    <div style={styles.container}>
      <button
        type="button"
        style={styles.button}
        onClick={onClick}
      >
        <ArrowLeft size={40} strokeWidth={2.4} />
        Volver
      </button>
    </div>
  );
}