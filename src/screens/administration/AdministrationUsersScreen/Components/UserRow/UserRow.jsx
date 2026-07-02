import React, { useState } from "react";

import styles from "./styles";

const USER_STATUS_LABELS = {
  active: "Activo",
  under_observation: "En revisión",
  warned: "Advertido",
  blocked: "Bloqueado",
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

function getInitials(name, email) {
  const cleanName = name?.trim();

  if (cleanName) {
    const parts = cleanName
      .split(" ")
      .filter(Boolean);

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }

  const cleanEmail = email?.trim();

  if (cleanEmail) {
    return cleanEmail
      .replace(/@.*/, "")
      .slice(0, 2)
      .toUpperCase();
  }

  return "US";
}

export default function UserRow({ user, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const statusLabel =
    USER_STATUS_LABELS[user.status] || "Activo";

  const contributionsCount =
    user.activity?.contributionsCount || 0;

  const reportsCount =
    user.activity?.reportsCount || 0;

  const reportsText =
    reportsCount === 1
      ? "1 reporte"
      : `${reportsCount} reportes`;

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
              alt={user.name || "Usuario"}
              style={styles.avatarImage}
            />
          ) : (
            <span style={styles.avatarText}>
              {user.initials ||
                getInitials(user.name, user.email)}
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
        {formatDate(user.createdAt)}
      </div>

      <div style={styles.profileCell}>
        {user.profile || "Sin perfil"}
      </div>

      <div style={styles.activityCell}>
        <span style={styles.activityMain}>
          {contributionsCount} aportes
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