import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  XCircle,
} from "lucide-react";

import styles from "./styles";

function formatDate(value) {
  if (!value) {
    return "Sin fecha";
  }

  const date = new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "Sin fecha";
  }

  return date
    .toISOString()
    .split("T")[0];
}

function normalizeStatus(status) {
  if (
    status === "in_review" ||
    status === "inReview" ||
    status === "pending"
  ) {
    return "in_review";
  }

  if (
    status === "approved" ||
    status === "accepted"
  ) {
    return "approved";
  }

  if (
    status === "rejected"
  ) {
    return "rejected";
  }

  return "in_review";
}

function getStatusConfig(status) {
  const normalizedStatus =
    normalizeStatus(status);

  const map = {
    in_review: {
      label: "Pendiente",
      icon: Clock3,
      style:
        styles.statusPending,
    },

    approved: {
      label: "Aprobada",
      icon: CheckCircle2,
      style:
        styles.statusApproved,
    },

    rejected: {
      label: "Rechazada",
      icon: XCircle,
      style:
        styles.statusRejected,
    },
  };

  return map[normalizedStatus];
}

function getPreviewText(
  description
) {
  const text =
    description.preview ||
    description.proposedDescription ||
    "Sin descripción propuesta.";

  if (
    text.length <= 150
  ) {
    return text;
  }

  return `${text.slice(
    0,
    150
  )}...`;
}

export default function DescriptionSubmissionRow({
  description,
  onClick,
}) {
  const placeName =
    description.placeName ||
    description.placeSnapshot
      ?.name ||
    "Lugar sin nombre";

  const photoUrl =
    description.placeSnapshot
      ?.mainPhotoUrl ||
    null;

  const preview =
    getPreviewText(description);

  const statusConfig =
    getStatusConfig(
      description.status
    );

  const StatusIcon =
    statusConfig.icon;

  return (
    <button
      type="button"
      style={styles.row}
      onClick={onClick}
    >
      <div
        style={
          styles.placeColumn
        }
      >
        <div
          style={
            styles.placeInfo
          }
        >
          <div style={styles.photo}>
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={placeName}
                style={
                  styles.photoImage
                }
                loading="lazy"
                onError={(
                  event
                ) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            ) : (
              <FileText
                size={25}
                strokeWidth={2}
                style={
                  styles.photoIcon
                }
              />
            )}
          </div>

          <div
            style={
              styles.placeTextBox
            }
          >
            <div
              style={
                styles.placeName
              }
            >
              {placeName}
            </div>

            <div
              style={
                styles.placeSubtitle
              }
            >
              Descripción propuesta
            </div>
          </div>
        </div>
      </div>

      <div
        style={
          styles.dateColumn
        }
      >
        <CalendarDays
          size={40}
          strokeWidth={2.1}
          style={
            styles.dateIcon
          }
        />

        <span
          style={
            styles.dateText
          }
        >
          {formatDate(
            description.createdAt
          )}
        </span>
      </div>

      <div
        style={
          styles.previewColumn
        }
      >
        <div
          style={
            styles.previewBox
          }
        >
          <p
            style={
              styles.previewText
            }
          >
            {preview}
          </p>
        </div>
      </div>

      <div
        style={
          styles.statusColumn
        }
      >
        <span
          style={{
            ...styles.statusBadge,
            ...statusConfig.style,
          }}
        >
          <StatusIcon
            size={30}
            strokeWidth={2.4}
          />

          <span>
            {statusConfig.label}
          </span>
        </span>
      </div>
    </button>
  );
}