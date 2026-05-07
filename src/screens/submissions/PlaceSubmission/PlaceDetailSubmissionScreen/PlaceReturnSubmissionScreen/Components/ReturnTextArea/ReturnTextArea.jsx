import React from "react";
import styles from "./styles";

export default function ReturnTextArea({
  label,
  placeholder,
  value,
  onChange,
  minLength = 10,
  readOnly = false,
}) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>

      <textarea
        style={{
          ...styles.textarea,
          opacity: readOnly ? 0.85 : 1,
          cursor: readOnly ? "default" : "text",
        }}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          if (readOnly) return;

          onChange?.(event.target.value);
        }}
        readOnly={readOnly}
        maxLength={400}
      />

      <div style={styles.counter}>
        {String(value || "").trim().length}/{minLength} mínimo
      </div>
    </div>
  );
}