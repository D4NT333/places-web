import React, {
  useState,
} from "react";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  PencilLine,
  RotateCcw,
  XCircle,
} from "lucide-react";

import styles from "./styles";

function formatDate(dateValue) {
  if (!dateValue) {
    return "Sin fecha";
  }

  const date = dateValue?.toDate
    ? dateValue.toDate()
    : new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getStatusConfig(status) {
  const map = {
    in_review: {
      label: "Pendiente",
      icon: Clock3,
      style: styles.statusPending,
    },
    approved: {
      label: "Aprobado",
      icon: CheckCircle2,
      style: styles.statusApproved,
    },
    returned: {
      label: "Devuelta",
      icon: RotateCcw,
      style: styles.statusReturned,
    },
    resubmitted: {
      label: "Corregido",
      icon: PencilLine,
      style: styles.statusCorrected,
    },
    rejected: {
      label: "Rechazada",
      icon: XCircle,
      style: styles.statusRejected,
    },
  };

  return (
    map[status] || {
      label: "Sin estado",
      icon: Clock3,
      style: styles.statusDefault,
    }
  );
}

function getPlaceImageUrl(item) {
  const mainPhoto = item?.photos?.[0];

  return (
    mainPhoto?.thumbnailURL ||
    mainPhoto?.mediumURL ||
    mainPhoto?.downloadURL ||
    item?.placePhotoUrl ||
    null
  );
}

function getInitials(name = "") {
  const cleanName = String(name).trim();

  if (!cleanName) {
    return "?";
  }

  const parts = cleanName
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 1) {
    return parts[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function UserAvatar({
  src,
  name,
}) {
  const [hasError, setHasError] = useState(false);

  const canShowImage =
    Boolean(src) && !hasError;

  if (!canShowImage) {
    return (
      <div style={styles.userImageFallback}>
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      style={styles.userImage}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}

export default function PlaceSubmissionRow({
  item,
  onClick,
}) {
  const placeImageUrl = getPlaceImageUrl(item);

  const statusConfig = getStatusConfig(item.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div
      style={styles.row}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          onClick?.();
        }
      }}
    >
      <div style={styles.placeCell}>
        {placeImageUrl ? (
          <img
            src={placeImageUrl}
            alt=""
            style={styles.placeImage}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display =
                "none";
            }}
          />
        ) : (
          <div style={styles.placeImagePlaceholder}>
            <MapPin
              size={24}
              strokeWidth={2}
            />
          </div>
        )}

        <strong style={styles.placeName}>
          {item.name || "Lugar sin nombre"}
        </strong>
      </div>

      <div style={styles.dateCell}>
        <CalendarDays
          size={28}
          strokeWidth={2}
          style={styles.dateIcon}
        />

        <span>
          {formatDate(item.createdAt)}
        </span>
      </div>

      <div style={styles.userCell}>
        {item.userName || "Usuario desconocido"}
      </div>

      <div style={styles.userPhotoCell}>
        <UserAvatar
          src={item.userPhotoUrl}
          name={item.userName}
        />
      </div>

      <div style={styles.statusCell}>
        <span
          style={{
            ...styles.statusBadge,
            ...statusConfig.style,
          }}
        >
          <StatusIcon
            size={24}
            strokeWidth={2.4}
          />

          <span>{statusConfig.label}</span>
        </span>
      </div>
    </div>
  );
}