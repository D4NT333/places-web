import React, { useState } from "react";

import styles from "./styles";

const USER_STATUS_LABELS = {
  active: "Activo",
  warned: "Advertido",
  under_observation: "En observación",
  limited: "Limitado",
  suspended: "Suspendido",
  deleted: "Eliminado",
};

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getInitials(name) {
  if (!name) return "US";

  const parts = name
    .trim()
    .split(" ")
    .filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export default function UserRow({ user, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const statusLabel = USER_STATUS_LABELS[user.status] || "Activo";

  const reportsText =
    user.reportsCount === 1
      ? "1 reporte"
      : `${user.reportsCount || 0} reportes`;

  const handleClick = () => {
    onSelect?.(user);
  };

  return (
    <button
      type="button"
      style={{
        ...styles.row,
        ...(isHovered ? styles.rowHovered : {}),
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.userCell}>
        <div
          style={{
            ...styles.avatar,
            ...(isHovered ? styles.avatarHovered : {}),
          }}
        >
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.name}
              style={styles.avatarImage}
            />
          ) : (
            <span style={styles.avatarText}>
              {getInitials(user.name)}
            </span>
          )}
        </div>

        <div style={styles.userInfo}>
          <span
            style={{
              ...styles.userName,
              ...(isHovered ? styles.userNameHovered : {}),
            }}
          >
            {user.name || "Usuario sin nombre"}
          </span>

          <span style={styles.userEmail}>
            {user.email || "Sin correo"}
          </span>
        </div>
      </div>

      <div style={styles.dateCell}>
        {formatDate(user.registeredAt)}
      </div>

      <div style={styles.profileCell}>
        {user.profile || "Sin perfil"}
      </div>

      <div style={styles.activityCell}>
        <span style={styles.activityMain}>
          {user.contributionsCount || 0} aportes
        </span>

        <span style={styles.activitySecondary}>
          {reportsText}
        </span>
      </div>

      <div style={styles.statusCell}>
        <span style={styles.statusText}>
          {statusLabel}
        </span>
      </div>
    </button>
  );
}