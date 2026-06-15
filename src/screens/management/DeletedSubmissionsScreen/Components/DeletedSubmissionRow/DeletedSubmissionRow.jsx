import React from "react";

import { tableColumns } from "../DeletedSubmissionsTable/styles";

import styles from "./styles";

function getInitial(name) {
  if (!name) {
    return "U";
  }

  return name.trim().charAt(0).toUpperCase();
}

export default function DeletedSubmissionRow({
  submission,
  onViewSummary,
  onDelete,
}) {
  const userName =
    submission.user?.name || "Usuario";

  const photoURL =
    submission.user?.photoURL || "";

  return (
    <div
      style={{
        ...styles.row,
        gridTemplateColumns: tableColumns,
      }}
    >
      <div style={styles.proposalCell}>
        <span style={styles.proposalName}>
          {submission.proposal}
        </span>
      </div>

      <div>
        <span style={styles.typeBadge}>
          {submission.type}
        </span>
      </div>

      <span style={styles.date}>
        {submission.deletedAt}
      </span>

      <div style={styles.userCell}>
        {photoURL ? (
          <img
            src={photoURL}
            alt={`Foto de ${userName}`}
            style={styles.avatar}
          />
        ) : (
          <div style={styles.avatarFallback}>
            {getInitial(userName)}
          </div>
        )}

        <span style={styles.userName}>
          {userName}
        </span>
      </div>

      <div style={styles.actions}>
        <button
          type="button"
          style={styles.summaryButton}
          onClick={() =>
            onViewSummary(submission)
          }
        >
          Ver resumen
        </button>

        <span style={styles.divider}>|</span>

        <button
          type="button"
          style={styles.deleteButton}
          onClick={() => onDelete(submission)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}