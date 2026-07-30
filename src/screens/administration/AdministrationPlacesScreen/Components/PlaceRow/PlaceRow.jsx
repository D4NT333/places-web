import React, {
  useState,
} from "react";

import {
  AlertTriangle,
  Ban,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  EyeOff,
  Gauge,
  MapPinned,
  Radio,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import styles from "./styles";

const SOURCE_LABELS = {
  google_candidate:
    "Registro administrativo",

  place_submission:
    "Propuesta de usuario",

  mobile:
    "Propuesta de usuario",
};

const MODERATION_STATUS_LABELS = {
  published: "Publicado",
  in_review: "En revisión",
  warned: "Advertido",
  hidden: "Oculto",
};

const ACTIVITY_STATUS_LABELS = {
  active: "Activo",
  low_activity:
    "Baja actividad",
  pending: "Por confirmar",
  inactive: "Inactivo",
};

function formatDate(value) {
  if (!value) {
    return "Sin fecha";
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return "Sin fecha";
  }

  return new Intl.DateTimeFormat(
    "es-MX",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  ).format(date);
}

function getInitials(name) {
  if (!name) {
    return "LG";
  }

  const parts =
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean);

  if (
    parts.length === 1
  ) {
    return parts[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`
    .toUpperCase();
}

function getActivityIcon(
  status,
) {
  if (
    status ===
    "low_activity"
  ) {
    return Gauge;
  }

  if (
    status === "pending"
  ) {
    return Radio;
  }

  if (
    status === "inactive"
  ) {
    return Ban;
  }

  return CheckCircle2;
}

function getModerationIcon(
  status,
) {
  if (
    status === "in_review"
  ) {
    return Clock3;
  }

  if (
    status === "warned"
  ) {
    return AlertTriangle;
  }

  if (
    status === "hidden"
  ) {
    return EyeOff;
  }

  return ShieldCheck;
}

export default function PlaceRow({
  place,
  onSelect,
}) {
  const [
    isHovered,
    setIsHovered,
  ] = useState(false);

  const sourceLabel =
    SOURCE_LABELS[
      place.source
    ] ||
    "Sin información";

  const activityLabel =
    ACTIVITY_STATUS_LABELS[
      place.activityStatus
    ] ||
    "Sin estado";

  const moderationLabel =
    MODERATION_STATUS_LABELS[
      place.moderationStatus
    ] ||
    "Sin estado";

  const ActivityIcon =
    getActivityIcon(
      place.activityStatus,
    );

  const ModerationIcon =
    getModerationIcon(
      place.moderationStatus,
    );

  const activityStyle = {
    ...styles.statusChip,

    ...(place.activityStatus ===
    "low_activity"
      ? styles.activityLow
      : place.activityStatus ===
          "pending"
        ? styles.activityPending
        : place.activityStatus ===
            "inactive"
          ? styles.activityInactive
          : styles.activityActive),
  };

  const moderationStyle = {
    ...styles.statusChip,

    ...(place.moderationStatus ===
    "in_review"
      ? styles.moderationReview
      : place.moderationStatus ===
          "warned"
        ? styles.moderationWarned
        : place.moderationStatus ===
            "hidden"
          ? styles.moderationHidden
          : styles.moderationPublished),
  };

  const handleClick =
    () => {
      onSelect?.(place);
    };

  return (
    <button
      type="button"
      style={{
        ...styles.row,

        ...(isHovered
          ? styles.rowHovered
          : {}),
      }}
      onClick={
        handleClick
      }
      onMouseEnter={() =>
        setIsHovered(true)
      }
      onMouseLeave={() =>
        setIsHovered(false)
      }
    >
      <div
        style={
          styles.placeCell
        }
      >
        <div
          style={{
            ...styles.imageBox,

            ...(isHovered
              ? styles.imageBoxHovered
              : {}),
          }}
        >
          {place.imageUrl ? (
            <img
              src={
                place.imageUrl
              }
              alt={
                place.name ||
                "Lugar"
              }
              style={
                styles.image
              }
            />
          ) : (
            <span
              style={
                styles.imageText
              }
            >
              {getInitials(
                place.name,
              )}
            </span>
          )}
        </div>

        <div
          style={
            styles.placeInfo
          }
        >
          <span
            style={{
              ...styles.placeName,

              ...(isHovered
                ? styles.placeNameHovered
                : {}),
            }}
          >
            {place.name ||
              "Lugar sin nombre"}
          </span>
        </div>
      </div>

      <div
        style={
          styles.sourceCell
        }
      >
        <span
          style={
            styles.sourceChip
          }
        >
          <Sparkles
            size={50}
            strokeWidth={2.1}
          />

          {sourceLabel}
        </span>
      </div>

      <div
        style={
          styles.dateCell
        }
      >
        <CalendarDays
          size={50}
          strokeWidth={2.1}
        />

        <span>
          {formatDate(
            place.createdAt,
          )}
        </span>
      </div>

      <div
        style={
          styles.personCell
        }
      >
        <UserRound
          size={50}
          strokeWidth={2.1}
        />

        <span>
          {place.createdBy
            ?.name ||
            "Sin usuario"}
        </span>
      </div>

      <div
        style={
          styles.personCell
        }
      >
        <CheckCircle2
          size={50}
          strokeWidth={2.1}
        />

        <span>
          {place.approvedBy
            ?.name ||
            "Sin aceptar"}
        </span>
      </div>

      <div
        style={
          styles.statusCell
        }
      >
        <span
          style={
            activityStyle
          }
        >
          <ActivityIcon
            size={50}
            strokeWidth={2.25}
          />

          {activityLabel}
        </span>
      </div>

      <div
        style={
          styles.statusCell
        }
      >
        <span
          style={
            moderationStyle
          }
        >
          <ModerationIcon
            size={50}
            strokeWidth={2.25}
          />

          {moderationLabel}
        </span>

        <ChevronRight
          size={50}
          strokeWidth={2.25}
          style={{
            ...styles.chevron,

            ...(isHovered
              ? styles.chevronHovered
              : {}),
          }}
        />
      </div>
    </button>
  );
}