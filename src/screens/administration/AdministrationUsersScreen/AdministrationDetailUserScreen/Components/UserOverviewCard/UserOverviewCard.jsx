import React from "react";

import styles from "./styles";

export default function UserOverviewCard({
  user,
  children,
  onModerate,
}) {
  return (
    <section style={styles.card}>
      <div style={styles.photoWrapper}>
        {user.photoUrl ? (
          <img
            src={user.photoUrl}
            alt={user.name}
            style={styles.photo}
          />
        ) : (
          <span style={styles.photoText}>Foto usuario</span>
        )}
      </div>

      <div style={styles.infoBlock}>
        <div style={styles.topInfoRow}>
          <span style={styles.statusPill}>
            {user.statusLabel || "Estado"}
          </span>
        </div>

        <div style={styles.userTexts}>
          <p style={styles.userName}>{user.name}</p>
          <p style={styles.profile}>{user.profile}</p>
        </div>

        <div style={styles.metaGrid}>
          <p style={styles.metaText}>
            <strong>Birthday:</strong> {user.birthdate || "Sin fecha"}
          </p>

          <p style={styles.metaText}>
            <strong>Fecha de registro:</strong>{" "}
            {user.registeredAt || "Sin fecha"}
          </p>

          <p style={styles.metaText}>
            <strong>Última actividad:</strong>{" "}
            {user.lastActivityAt || "Sin actividad"}
          </p>
        </div>
      </div>

      <aside style={styles.moderationBlock}>
        <button
          type="button"
          style={styles.moderateButton}
          onClick={onModerate}
        >
          Moderar
        </button>

        {children}
      </aside>
    </section>
  );
}