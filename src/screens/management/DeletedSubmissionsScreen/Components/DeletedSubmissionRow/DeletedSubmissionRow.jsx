import React from "react";

import {
  tableColumns,
} from "../DeletedSubmissionsTable/styles";

import styles from "./styles";

function getInitial(name) {
  const normalizedName =
    typeof name === "string"
      ? name.trim()
      : "";

  return normalizedName
    ? normalizedName
        .charAt(0)
        .toUpperCase()
    : "U";
}

export default function DeletedSubmissionRow({
  submission,
  onViewSummary,
  onDelete,
}) {
  const userName =
    submission.userName ||
    submission.user?.name ||
    "Usuario";

  const photoURL =
    submission.user?.photoURL ||
    "";

  return (
    <div
      style={{
        ...styles.row,
        gridTemplateColumns:
          tableColumns,
      }}
    >
      <div style={styles.proposalCell}>
        {submission.previewImageUrl ? (
          <img
            src={
              submission.previewImageUrl
            }
            alt=""
            style={
              styles.previewImage
            }
          />
        ) : (
          <div
            style={
              styles.previewFallback
            }
          >
            {submission.type ===
            "photo"
              ? "F"
              : submission.type ===
                  "description"
                ? "D"
                : "L"}
          </div>
        )}

        <div
          style={
            styles.proposalContent
          }
        >
          <span
            style={
              styles.proposalName
            }
            title={
              submission.proposal
            }
          >
            {submission.proposal}
          </span>
        </div>
      </div>

      <div style={styles.centeredCell}>
  <span style={styles.typeBadge}>
    {submission.typeLabel}
  </span>
</div>

    <span
  style={{
    ...styles.date,
    ...styles.centeredCell,
  }}
>
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
          <div
            style={
              styles.avatarFallback
            }
          >
            {getInitial(userName)}
          </div>
        )}

        <div
          style={styles.userContent}
        >
          <span
            style={styles.userName}
          >
            {userName}
          </span>
        </div>
      </div>

      <div style={styles.actions}>
        <button
          type="button"
          style={
            styles.summaryButton
          }
          onClick={() =>
            onViewSummary(
              submission
            )
          }
        >
          Ver resumen
        </button>

        <span style={styles.divider}>
          |
        </span>

        <button
          type="button"
          style={
            styles.deleteButton
          }
          onClick={() =>
            onDelete(submission)
          }
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}