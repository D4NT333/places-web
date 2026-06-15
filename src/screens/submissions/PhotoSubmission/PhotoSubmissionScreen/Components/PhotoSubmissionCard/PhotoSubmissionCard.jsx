import { useEffect, useState } from "react";

import styles from "./styles";

const STATUS_CONFIG = {
  in_review: {
    label: "Pendiente",
    style: {
      backgroundColor: "#FEF3C7",
      color: "#B45309",
      borderColor: "#FDE68A",
    },
  },

  approved: {
    label: "Aprobada",
    style: {
      backgroundColor: "#DCFCE7",
      color: "#15803D",
      borderColor: "#BBF7D0",
    },
  },

  rejected: {
    label: "Rechazada",
    style: {
      backgroundColor: "#FEE2E2",
      color: "#B91C1C",
      borderColor: "#FECACA",
    },
  },
};

function getPhotoCountLabel(count) {
  const safeCount = Number(count) || 0;

  return `${safeCount} ${
    safeCount === 1
      ? "Foto"
      : "Fotos"
  }`;
}

export default function PhotoSubmissionCard({
  submission,
  onClick,
}) {
  const [imageFailed, setImageFailed] =
    useState(false);

  const {
    placeName,
    createdByName,
    createdAt,
    extraPhotosCount,
    photoCount,
    imageUrl,
    status = "in_review",
  } = submission;

  useEffect(() => {
    setImageFailed(false);
  }, [imageUrl]);

  const statusConfig =
    STATUS_CONFIG[status] ||
    STATUS_CONFIG.in_review;

  const finalPhotoCount =
    photoCount ??
    extraPhotosCount ??
    0;

  const showImage =
    Boolean(imageUrl) &&
    !imageFailed;

  const handleKeyDown = (event) => {
    if (!onClick) return;

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      style={{
        ...styles.card,
        ...(onClick
          ? styles.cardClickable
          : {}),
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={
        onClick
          ? "button"
          : undefined
      }
      tabIndex={
        onClick
          ? 0
          : undefined
      }
    >
      <div style={styles.imageContainer}>
        <span
          style={
            styles.photoCountBadge
          }
        >
          {getPhotoCountLabel(
            finalPhotoCount
          )}
        </span>

        {showImage ? (
          <img
            src={imageUrl}
            alt={`Fotografía propuesta para ${
              placeName ||
              "el lugar"
            }`}
            style={styles.image}
            loading="lazy"
            onError={() =>
              setImageFailed(true)
            }
          />
        ) : (
          <div
            style={
              styles.imagePlaceholder
            }
          >
            <span
              style={
                styles.placeholderIcon
              }
            >
              ▧
            </span>

            <span>
              Sin imagen disponible
            </span>
          </div>
        )}
      </div>

      <div style={styles.infoSection}>
        <div
          style={
            styles.mainInformation
          }
        >
          <h2 style={styles.placeName}>
            {placeName ||
              "Lugar sin nombre"}
          </h2>

          <p style={styles.userText}>
            <span
              style={
                styles.userLabel
              }
            >
              Por:
            </span>{" "}
            {createdByName ||
              "Usuario"}
          </p>
        </div>

        <div style={styles.bottomRow}>
          <span
            style={styles.createdAt}
          >
            {createdAt ||
              "Fecha no disponible"}
          </span>

          <span
            style={{
              ...styles.statusBadge,
              ...statusConfig.style,
            }}
          >
            {statusConfig.label}
          </span>
        </div>
      </div>
    </article>
  );
}