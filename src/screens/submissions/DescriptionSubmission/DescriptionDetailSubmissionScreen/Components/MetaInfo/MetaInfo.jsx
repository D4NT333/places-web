import React from "react";

import {
  CalendarDays,
  UserRound,
} from "lucide-react";

import styles from "./styles";

export default function MetaInfo({
  userName,
  userId,
  userPhotoUrl,
  createdAt,
  onUserClick,
}) {
  const canOpenUser =
    Boolean(userId) &&
    typeof onUserClick === "function";

  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <div style={styles.userIconBox}>
          {userPhotoUrl ? (
            <img
              src={userPhotoUrl}
              alt={
                userName ||
                "Usuario de la propuesta"
              }
              style={styles.userPhoto}
            />
          ) : (
            <UserRound
              size={50}
              strokeWidth={2.3}
            />
          )}
        </div>

        <div style={styles.itemText}>
          <span style={styles.label}>
            Enviado por
          </span>

          {canOpenUser ? (
            <button
              type="button"
              style={{
                ...styles.value,
                ...styles.userLink,
              }}
              onClick={onUserClick}
            >
              {userName}
            </button>
          ) : (
            <span style={styles.value}>
              {userName}
            </span>
          )}
        </div>
      </div>

      <div style={styles.item}>
        <div style={styles.dateIconBox}>
          <CalendarDays
            size={40}
            strokeWidth={2.3}
          />
        </div>

        <div style={styles.itemText}>
          <span style={styles.label}>
            Fecha de creación
          </span>

          <span style={styles.value}>
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}