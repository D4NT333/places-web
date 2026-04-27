import React from "react";
import styles from "./styles";

export default function ReturnTextArea({
  label,
  placeholder,
  value,
  onChange,
  minLength = 10,
}) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>

      <textarea
        style={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        maxLength={400}
      />

      <div style={styles.counter}>
        {value.trim().length}/{minLength} mínimo
      </div>
    </div>
  );
}