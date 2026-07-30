import React from "react";

import {
  CalendarDays,
  FileImage,
  FilePenLine,
  MapPinned,
  Trash2,
} from "lucide-react";

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

function getTypeIcon(type) {
  if (
    type === "photo"
  ) {
    return FileImage;
  }

  if (
    type === "description"
  ) {
    return FilePenLine;
  }

  return MapPinned;
}

export default function DeletedSubmissionRow({
  submission,
  onDelete,
}) {
  const userName =
    submission.userName ||
    submission.user?.name ||
    "Usuario";

  const photoURL =
    submission.user?.photoURL ||
    "";

  const TypeIcon =
    getTypeIcon(
      submission.type,
    );

  return (
    <div
      style={{
        ...styles.row,
        gridTemplateColumns:
          tableColumns,
      }}
    >
      <div
        style={
          styles.proposalCell
        }
      >
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
            <TypeIcon
              size={40}
              strokeWidth={2.1}
            />
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

          <span
            style={
              styles.proposalHint
            }
          >
            Pendiente de eliminación
            definitiva
          </span>
        </div>
      </div>

      <div
        style={
          styles.centeredCell
        }
      >
        <span
          style={
            styles.typeBadge
          }
        >
          <TypeIcon
            size={44}
            strokeWidth={2.2}
          />

          {
            submission.typeLabel
          }
        </span>
      </div>

      <div
        style={
          styles.centeredCell
        }
      >
        <div
          style={
            styles.dateValue
          }
        >
          <CalendarDays
            size={44}
            strokeWidth={2.2}
          />

          <span>
            {
              submission.deletedAt
            }
          </span>
        </div>
      </div>

      <div
        style={
          styles.userCell
        }
      >
        {photoURL ? (
          <img
            src={photoURL}
            alt={`Foto de ${userName}`}
            style={
              styles.avatar
            }
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            style={
              styles.avatarFallback
            }
          >
            {getInitial(
              userName,
            )}
          </div>
        )}

        <div
          style={
            styles.userContent
          }
        >
          <span
            style={
              styles.userName
            }
          >
            {userName}
          </span>
        </div>
      </div>

      <div
        style={
          styles.actions
        }
      >
        <button
          type="button"
          style={
            styles.deleteButton
          }
          title="Eliminar definitivamente"
          aria-label={`Eliminar definitivamente ${submission.proposal}`}
          onClick={() =>
            onDelete(
              submission,
            )
          }
        >
          <Trash2
            size={40}
            strokeWidth={2.25}
          />
        </button>
      </div>
    </div>
  );
}