import {
  useEffect,
  useState,
} from "react";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ImageOff,
  Images,
  UserRound,
  XCircle,
} from "lucide-react";

import styles from "./styles";

const STATUS_CONFIG = {
  in_review: {
    label: "Pendiente",
    icon: Clock3,
    style: {
      backgroundColor:
        "#FFF7E5",
      color: "#C86D00",
      borderColor:
        "#FFD18A",
    },
  },

  approved: {
    label: "Aprobada",
    icon: CheckCircle2,
    style: {
      backgroundColor:
        "#E7F9EF",
      color: "#078842",
      borderColor:
        "#A4E2C0",
    },
  },

  rejected: {
    label: "Rechazada",
    icon: XCircle,
    style: {
      backgroundColor:
        "#FFF0F0",
      color: "#DF3434",
      borderColor:
        "#FFB9B9",
    },
  },
};

function getPhotoCountLabel(count) {
  const safeCount =
    Number(count) || 0;

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
  const [
    imageFailed,
    setImageFailed,
  ] = useState(false);

  const [
    userPhotoFailed,
    setUserPhotoFailed,
  ] = useState(false);

  const {
    placeName,
    createdByName,
    createdAt,
    extraPhotosCount,
    photoCount,
    imageUrl,
    status = "in_review",
  } = submission;

  const userPhotoUrl =
    submission?.userPhotoUrl ||
    submission?.createdByPhotoUrl ||
    submission?.createdBy?.photoURL ||
    submission?.createdBy?.photoUrl ||
    submission?.createdBy?.picture ||
    submission?.createdBy?.imageUrl ||
    "";

  useEffect(() => {
    setImageFailed(false);
  }, [imageUrl]);

  useEffect(() => {
    setUserPhotoFailed(false);
  }, [userPhotoUrl]);

  const statusConfig =
    STATUS_CONFIG[status] ||
    STATUS_CONFIG.in_review;

  const StatusIcon =
    statusConfig.icon;

  const finalPhotoCount =
    photoCount ??
    extraPhotosCount ??
    0;

  const showImage =
    Boolean(imageUrl) &&
    !imageFailed;

  const showUserPhoto =
    Boolean(userPhotoUrl) &&
    !userPhotoFailed;

  const handleKeyDown = (
    event
  ) => {
    if (!onClick) {
      return;
    }

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
      <div
        style={
          styles.imageContainer
        }
      >
        <span
          style={
            styles.photoCountBadge
          }
        >
          <Images
            size={36}
            strokeWidth={2.3}
          />

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
            <div
              style={
                styles.placeholderIconBox
              }
            >
              <ImageOff
                size={36}
                strokeWidth={2}
              />
            </div>

            <span
              style={
                styles.placeholderTitle
              }
            >
              Sin imagen disponible
            </span>

            <span
              style={
                styles.placeholderText
              }
            >
              No fue posible mostrar la fotografía de portada.
            </span>
          </div>
        )}

        <div
          style={
            styles.imageGradient
          }
        />
      </div>

      <div
        style={
          styles.infoSection
        }
      >
        <div
          style={
            styles.cardHeading
          }
        >
          <div
            style={
              styles.placeInformation
            }
          >
            <span
              style={
                styles.cardEyebrow
              }
            >
              Propuesta de fotografías
            </span>

            <h2
              style={
                styles.placeName
              }
            >
              {placeName ||
                "Lugar sin nombre"}
            </h2>
          </div>

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

            {statusConfig.label}
          </span>
        </div>

        <div
          style={
            styles.metadataGrid
          }
        >
          <div
            style={
              styles.metadataItem
            }
          >
            <div
              style={
                styles.userIconBox
              }
            >
              {showUserPhoto ? (
                <img
                  src={userPhotoUrl}
                  alt={
                    createdByName ||
                    "Usuario de la propuesta"
                  }
                  style={
                    styles.userPhoto
                  }
                  loading="lazy"
                  onError={() =>
                    setUserPhotoFailed(
                      true
                    )
                  }
                />
              ) : (
                <UserRound
                  size={36}
                  strokeWidth={2.2}
                />
              )}
            </div>

            <div
              style={
                styles.metadataText
              }
            >
              <span
                style={
                  styles.metadataLabel
                }
              >
                Enviado por
              </span>

              <strong
                style={
                  styles.metadataValue
                }
              >
                {createdByName ||
                  "Usuario"}
              </strong>
            </div>
          </div>

          <div
            style={
              styles.metadataItem
            }
          >
            <div
              style={
                styles.dateIconBox
              }
            >
              <CalendarDays
                size={36}
                strokeWidth={2.2}
              />
            </div>

            <div
              style={
                styles.metadataText
              }
            >
              <span
                style={
                  styles.metadataLabel
                }
              >
                Fecha de creación
              </span>

              <strong
                style={
                  styles.metadataValue
                }
              >
                {createdAt ||
                  "Fecha no disponible"}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}