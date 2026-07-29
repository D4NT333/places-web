import React, {
  useState,
} from "react";

import {
  AlignLeft,
  ArrowLeftRight,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Images,
  Layers3,
  MapPin,
  MessageSquareText,
  PencilLine,
  Tag,
  Target,
  Type,
  X,
} from "lucide-react";

import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
} from "react-leaflet";

import {
  ImageGalleryModal,
} from "../../../../../../components";

import styles from "./styles";

/* ========================================================= */
/* FOTOGRAFÍAS                                               */
/* ========================================================= */

function getPhotoUrl(
  photo,
  preferredSize = "medium"
) {
  if (!photo) {
    return null;
  }

  if (typeof photo === "string") {
    return photo;
  }

  if (preferredSize === "original") {
    return (
      photo.originalUrl ||
      photo.original?.url ||
      photo.downloadURL ||
      photo.displayUrl ||
      photo.mediumUrl ||
      photo.medium?.url ||
      photo.thumbnailUrl ||
      photo.thumbnail?.url ||
      photo.mediumURL ||
      photo.thumbnailURL ||
      photo.previewURL ||
      photo.url ||
      photo.imageUrl ||
      photo.fullUrl ||
      photo.photoUrl ||
      photo.uri ||
      photo.src ||
      null
    );
  }

  if (preferredSize === "thumbnail") {
    return (
      photo.thumbnailUrl ||
      photo.thumbnail?.url ||
      photo.thumbnailURL ||
      photo.previewURL ||
      photo.mediumUrl ||
      photo.medium?.url ||
      photo.mediumURL ||
      photo.displayUrl ||
      photo.originalUrl ||
      photo.original?.url ||
      photo.downloadURL ||
      photo.url ||
      photo.imageUrl ||
      photo.fullUrl ||
      photo.photoUrl ||
      photo.uri ||
      photo.src ||
      null
    );
  }

  return (
    photo.displayUrl ||
    photo.mediumUrl ||
    photo.medium?.url ||
    photo.mediumURL ||
    photo.previewURL ||
    photo.originalUrl ||
    photo.original?.url ||
    photo.downloadURL ||
    photo.thumbnailUrl ||
    photo.thumbnail?.url ||
    photo.thumbnailURL ||
    photo.url ||
    photo.imageUrl ||
    photo.fullUrl ||
    photo.photoUrl ||
    photo.uri ||
    photo.src ||
    null
  );
}

function normalizeGalleryPhoto(photo) {
  if (!photo) {
    return null;
  }

  if (typeof photo === "string") {
    return photo;
  }

  const originalUrl = getPhotoUrl(
    photo,
    "original"
  );

  const mediumUrl = getPhotoUrl(
    photo,
    "medium"
  );

  const thumbnailUrl = getPhotoUrl(
    photo,
    "thumbnail"
  );

  if (
    !originalUrl &&
    !mediumUrl &&
    !thumbnailUrl
  ) {
    return null;
  }

  return {
    ...photo,

    originalUrl,
    mediumUrl,
    thumbnailUrl,

    displayUrl:
      originalUrl ||
      mediumUrl ||
      thumbnailUrl,
  };
}

function normalizeGalleryPhotos(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map(normalizeGalleryPhoto)
    .filter(Boolean);
}

/* ========================================================= */
/* UBICACIÓN                                                  */
/* ========================================================= */

function normalizeLocation(value) {
  if (
    !value ||
    typeof value !== "object"
  ) {
    return null;
  }

  const rawLatitude =
    value.latitude ??
    value.lat ??
    value._latitude ??
    value.coordinates?.latitude ??
    value.coordinates?.lat ??
    null;

  const rawLongitude =
    value.longitude ??
    value.lng ??
    value.lon ??
    value._longitude ??
    value.coordinates?.longitude ??
    value.coordinates?.lng ??
    value.coordinates?.lon ??
    null;

  const latitude =
    Number(rawLatitude);

  const longitude =
    Number(rawLongitude);

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    return null;
  }

  if (
    latitude < -90 ||
    latitude > 90 ||
    longitude < -180 ||
    longitude > 180
  ) {
    return null;
  }

  return {
    latitude,
    longitude,
  };
}

function LocationComparisonMap({
  value,
  variant = "old",
}) {
  const location =
    normalizeLocation(value);

  if (!location) {
    return (
      <span style={styles.emptyText}>
        Sin ubicación válida
      </span>
    );
  }

  const position = [
    location.latitude,
    location.longitude,
  ];

  const isNew =
    variant === "new";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "250px",

          overflow: "hidden",

          border: isNew
            ? "1px solid rgba(18, 168, 92, 0.34)"
            : "1px solid rgba(239, 68, 68, 0.3)",

          borderRadius: "12px",

          background: "#eaf2fa",

          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.94),
            0 7px 16px rgba(26, 66, 111, 0.08)
          `,
        }}
      >
        <MapContainer
          key={`${variant}-${location.latitude}-${location.longitude}`}
          center={position}
          zoom={16}
          scrollWheelZoom
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <CircleMarker
            center={position}
            radius={10}
            pathOptions={{
              color: isNew
                ? "#078946"
                : "#d63838",

              fillColor: isNew
                ? "#18b866"
                : "#ef5353",

              fillOpacity: 0.9,
              weight: 3,
            }}
          >
            <Popup>
              <strong>
                {isNew
                  ? "Nueva ubicación"
                  : "Ubicación anterior"}
              </strong>

              <br />

              {location.latitude.toFixed(6)}
              {", "}
              {location.longitude.toFixed(6)}
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",

          gap: "8px",
          padding: "8px 10px",

          border: isNew
            ? "1px solid rgba(18, 168, 92, 0.18)"
            : "1px solid rgba(239, 68, 68, 0.17)",

          borderRadius: "10px",

          background: isNew
            ? "rgba(237, 253, 244, 0.76)"
            : "rgba(255, 241, 241, 0.76)",

          color: isNew
            ? "#17613f"
            : "#703333",

          fontSize: "1.2rem",
          fontWeight: 750,

          boxSizing: "border-box",
        }}
      >
        <MapPin
          size={40}
          strokeWidth={2.2}
        />

        <span>
          {location.latitude.toFixed(6)}
          {", "}
          {location.longitude.toFixed(6)}
        </span>
      </div>
    </div>
  );
}

/* ========================================================= */
/* FORMATEO DE VALORES                                       */
/* ========================================================= */

function formatValue(value) {
  if (value == null) {
    return "Sin información";
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "Sin información";
    }

    return value
      .map((item) => {
        if (
          typeof item === "string"
        ) {
          return item;
        }

        return (
          item.label ||
          item.name ||
          item.displayUrl ||
          item.previewURL ||
          item.mediumUrl ||
          item.thumbnailUrl ||
          item.originalUrl ||
          item.medium?.url ||
          item.thumbnail?.url ||
          item.original?.url ||
          item.mediumURL ||
          item.thumbnailURL ||
          item.downloadURL ||
          item.url ||
          item.imageUrl ||
          ""
        );
      })
      .filter(Boolean)
      .join(", ");
  }

  if (
    typeof value === "object"
  ) {
    const location =
      normalizeLocation(value);

    if (location) {
      return `${location.latitude}, ${location.longitude}`;
    }

    return JSON.stringify(
      value,
      null,
      2
    );
  }

  return String(value);
}

/* ========================================================= */
/* CONFIGURACIÓN DEL CAMPO                                   */
/* ========================================================= */

function getFieldConfig(fieldKey) {
  const map = {
    name: {
      title: "Nombre",
      icon: Type,
      tone: "green",
    },

    description: {
      title: "Descripción",
      icon: AlignLeft,
      tone: "blue",
    },

    tag: {
      title: "Etiqueta",
      icon: Tag,
      tone: "green",
    },

    subtags: {
      title: "Subetiquetas",
      icon: Layers3,
      tone: "blue",
    },

    approaches: {
      title: "Enfoque",
      icon: Target,
      tone: "blue",
    },

    price: {
      title: "Rango de precio",
      icon: CircleDollarSign,
      tone: "blue",
    },

    schedule: {
      title: "Horario",
      icon: Clock3,
      tone: "orange",
    },

    photos: {
      title: "Fotos",
      icon: Images,
      tone: "violet",
    },

    location: {
      title: "Ubicación",
      icon: MapPin,
      tone: "green",
    },
  };

  return (
    map[fieldKey] || {
      title: "Campo",
      icon: PencilLine,
      tone: "blue",
    }
  );
}

/* ========================================================= */
/* RENDER DE FOTOGRAFÍAS                                     */
/* ========================================================= */

function PhotosComparisonGrid({
  value,
  variant,
  onOpenGallery,
}) {
  const photos =
    normalizeGalleryPhotos(value);

  if (photos.length === 0) {
    return (
      <span style={styles.emptyText}>
        Sin fotos
      </span>
    );
  }

  const isNew =
    variant === "new";

  return (
    <div style={styles.photosGrid}>
      {photos.map(
        (photo, index) => {
          const previewUrl =
            getPhotoUrl(
              photo,
              "thumbnail"
            ) ||
            getPhotoUrl(
              photo,
              "medium"
            ) ||
            getPhotoUrl(
              photo,
              "original"
            );

          return (
            <button
              key={`${previewUrl || "photo"}-${index}`}
              type="button"
              onClick={() =>
                onOpenGallery?.({
                  photos,
                  index,
                  variant,
                })
              }
              aria-label={`Abrir foto ${
                index + 1
              } de ${
                isNew
                  ? "la corrección"
                  : "la información anterior"
              }`}
              title="Ver fotografía completa"
              style={{
                ...styles.photoBox,

                display: "block",

                padding: 0,

                overflow: "hidden",

                cursor: "pointer",

                border: isNew
                  ? "2px solid rgba(18, 168, 92, 0.3)"
                  : "2px solid rgba(239, 68, 68, 0.26)",

                background: isNew
                  ? "rgba(237, 253, 244, 0.74)"
                  : "rgba(255, 241, 241, 0.74)",

                boxSizing: "border-box",
              }}
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt={`Foto ${index + 1}`}
                  style={styles.photo}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(event) => {
                    console.log(
                      "No se pudo cargar foto de comparación:",
                      {
                        index,
                        photo,
                        previewUrl,
                      }
                    );

                    event.currentTarget.style.display =
                      "none";
                  }}
                />
              ) : (
                <span style={styles.emptyText}>
                  Sin foto
                </span>
              )}
            </button>
          );
        }
      )}
    </div>
  );
}

/* ========================================================= */
/* RENDER SEGÚN EL TIPO DE CAMPO                             */
/* ========================================================= */

function renderValue({
  value,
  fieldKey,
  variant,
  onOpenGallery,
}) {
  if (fieldKey === "photos") {
    return (
      <PhotosComparisonGrid
        value={value}
        variant={variant}
        onOpenGallery={
          onOpenGallery
        }
      />
    );
  }

  if (fieldKey === "location") {
    return (
      <LocationComparisonMap
        value={value}
        variant={variant}
      />
    );
  }

  return formatValue(value);
}

/* ========================================================= */
/* MODAL                                                      */
/* ========================================================= */

export default function CorrectionCompareModal({
  visible,
  fieldKey,
  oldValue,
  newValue,
  message,
  onClose,
}) {
  const [
    galleryState,
    setGalleryState,
  ] = useState({
    isOpen: false,
    photos: [],
    currentIndex: 0,
    variant: "old",
  });

  if (!visible) {
    return null;
  }

  const fieldConfig =
    getFieldConfig(fieldKey);

  const FieldIcon =
    fieldConfig.icon;

  const toneStyles = {
    blue:
      styles.headerIconBlue,

    green:
      styles.headerIconGreen,

    orange:
      styles.headerIconOrange,

    violet:
      styles.headerIconViolet,
  };

  const handleOpenGallery = ({
    photos,
    index,
    variant,
  }) => {
    const normalizedPhotos =
      normalizeGalleryPhotos(
        photos
      );

    if (
      normalizedPhotos.length === 0
    ) {
      return;
    }

    const safeIndex =
      Math.min(
        Math.max(index, 0),
        normalizedPhotos.length - 1
      );

    setGalleryState({
      isOpen: true,
      photos: normalizedPhotos,
      currentIndex: safeIndex,
      variant,
    });
  };

  const handleChangeGalleryIndex = (
    nextIndex
  ) => {
    setGalleryState(
      (previous) => ({
        ...previous,
        currentIndex: nextIndex,
      })
    );
  };

  const handleCloseGallery = () => {
    setGalleryState({
      isOpen: false,
      photos: [],
      currentIndex: 0,
      variant: "old",
    });
  };

  const galleryTitle =
    galleryState.variant === "new"
      ? "Fotografías corregidas"
      : "Fotografías anteriores";

  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <div style={styles.accentLine} />

          <div style={styles.header}>
            <div style={styles.headerContent}>
              <div
                style={{
                  ...styles.headerIconBox,

                  ...(toneStyles[
                    fieldConfig.tone
                  ] ||
                    styles.headerIconBlue),
                }}
              >
                <FieldIcon
                  size={30}
                  strokeWidth={2.1}
                />
              </div>

              <div>
                <h2 style={styles.title}>
                  {fieldConfig.title}
                </h2>

                <p style={styles.subtitle}>
                  Comparación de la información
                  anterior con la corrección
                  enviada.
                </p>
              </div>
            </div>

            <button
              type="button"
              style={styles.closeButton}
              onClick={onClose}
              aria-label="Cerrar modal"
            >
              <X
                size={40}
                strokeWidth={2.2}
              />
            </button>
          </div>

          <div style={styles.content}>
            {message ? (
              <div style={styles.messagePanel}>
                <div
                  style={
                    styles.messageIconBox
                  }
                >
                  <MessageSquareText
                    size={40}
                    strokeWidth={2.1}
                  />
                </div>

                <div
                  style={
                    styles.messageContent
                  }
                >
                  <span
                    style={
                      styles.messageLabel
                    }
                  >
                    Motivo de devolución
                  </span>

                  <p
                    style={
                      styles.messageText
                    }
                  >
                    {message}
                  </p>
                </div>
              </div>
            ) : null}

            <div style={styles.compareHeader}>
              <div
                style={
                  styles.compareHeaderIcon
                }
              >
                <ArrowLeftRight
                  size={40}
                  strokeWidth={2.1}
                />
              </div>

              <div>
                <h3
                  style={
                    styles.compareTitle
                  }
                >
                  Cambios realizados
                </h3>

                <p
                  style={
                    styles.compareSubtitle
                  }
                >
                  Revisa ambos valores antes de
                  continuar con la moderación.
                </p>
              </div>
            </div>

            <div style={styles.compareGrid}>
              <div style={styles.column}>
                <div
                  style={
                    styles.columnHeader
                  }
                >
                  <div
                    style={
                      styles.oldIconBox
                    }
                  >
                    <X
                      size={40}
                      strokeWidth={2.3}
                    />
                  </div>

                  <div>
                    <h3
                      style={
                        styles.columnTitle
                      }
                    >
                      Antes
                    </h3>

                    <span
                      style={
                        styles.columnHelper
                      }
                    >
                      Información devuelta
                    </span>
                  </div>
                </div>

                <div style={styles.valueBox}>
                  {renderValue({
                    value: oldValue,
                    fieldKey,
                    variant: "old",
                    onOpenGallery:
                      handleOpenGallery,
                  })}
                </div>
              </div>

              <div style={styles.column}>
                <div
                  style={
                    styles.columnHeader
                  }
                >
                  <div
                    style={
                      styles.newIconBox
                    }
                  >
                    <CheckCircle2
                      size={40}
                      strokeWidth={2.3}
                    />
                  </div>

                  <div>
                    <h3
                      style={
                        styles.columnTitle
                      }
                    >
                      Nuevo
                    </h3>

                    <span
                      style={
                        styles.columnHelper
                      }
                    >
                      Corrección enviada
                    </span>
                  </div>
                </div>

                <div
                  style={
                    styles.valueBoxSuccess
                  }
                >
                  {renderValue({
                    value: newValue,
                    fieldKey,
                    variant: "new",
                    onOpenGallery:
                      handleOpenGallery,
                  })}
                </div>
              </div>
            </div>

            <div style={styles.closeRow}>
              <button
                type="button"
                style={
                  styles.bottomCloseButton
                }
                onClick={onClose}
              >
                <X
                  size={38}
                  strokeWidth={2.2}
                />

                <span>Cerrar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ImageGalleryModal
        isOpen={
          galleryState.isOpen
        }
        photos={
          galleryState.photos
        }
        currentIndex={
          galleryState.currentIndex
        }
        title={galleryTitle}
        onChangeIndex={
          handleChangeGalleryIndex
        }
        onClose={
          handleCloseGallery
        }
      />
    </>
  );
}