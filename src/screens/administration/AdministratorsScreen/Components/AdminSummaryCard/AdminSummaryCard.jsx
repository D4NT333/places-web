import React from "react";

import styles from "./styles";

const VARIANTS = {
  blue: {
    iconBackground: "#edf5ff",
    iconBorder: "#cfe2ff",
    iconColor: "#1877f2",
    valueColor: "#1877f2",
  },

  green: {
    iconBackground: "#eafbf2",
    iconBorder: "#c7eed8",
    iconColor: "#0c9b52",
    valueColor: "#0c9b52",
  },
};

export default function AdminSummaryCard({
  icon: Icon,
  label,
  value,
  variant = "blue",
}) {
  const palette = VARIANTS[variant] || VARIANTS.blue;

  return (
    <article style={styles.card}>
      <div
        style={{
          ...styles.iconContainer,
          background: palette.iconBackground,
          borderColor: palette.iconBorder,
          color: palette.iconColor,
        }}
      >
        <Icon size={22} strokeWidth={2.2} />
      </div>

      <div style={styles.content}>
        <span style={styles.label}>
          {label}
        </span>

        <strong
          style={{
            ...styles.value,
            color: palette.valueColor,
          }}
        >
          {value}
        </strong>
      </div>
    </article>
  );
}