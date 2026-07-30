import React from "react";

import {
  CircleCheck,
  CircleX,
} from "lucide-react";

import styles from "./styles";

export default function AdminStatusBadge({
  status,
}) {
  const isActive = status === "active";

  const Icon = isActive
    ? CircleCheck
    : CircleX;

  return (
    <span
      style={{
        ...styles.badge,
        ...(isActive
          ? styles.activeBadge
          : styles.disabledBadge),
      }}
    >
      <Icon size={40} strokeWidth={2.3} />

      {isActive
        ? "Activo"
        : "Desactivado"}
    </span>
  );
}