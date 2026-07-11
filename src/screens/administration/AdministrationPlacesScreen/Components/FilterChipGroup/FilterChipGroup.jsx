import React from "react";

import styles from "./styles";

export default function FilterChipGroup({
  title,
  options,
  selectedValue,
  onChange,
}) {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>
        {title}
      </h3>

      <div style={styles.chipsRow}>
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              style={{
                ...styles.chip,
                ...(isSelected ? styles.chipSelected : {}),
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}