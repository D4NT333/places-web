import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./styles";

function getPhotoUrl(photo) {
  if (!photo) {
    return null;
  }

  if (typeof photo === "string") {
    return photo;
  }

  return (
    photo.displayUrl ||
    photo.mediumUrl ||
    photo.thumbnailUrl ||
    photo.originalUrl ||

    photo.medium?.url ||
    photo.original?.url ||
    photo.thumbnail?.url ||

    photo.mediumURL ||
    photo.downloadURL ||
    photo.thumbnailURL ||

    photo.url ||
    photo.photoUrl ||
    photo.imageUrl ||
    null
  );
}

export default function PhotoCarousel({
  photos = [],
  containerStyle,
  onPhotoClick,
  onCompareClick,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const validPhotos = useMemo(() => {
    if (!Array.isArray(photos)) {
      return [];
    }

    return photos
      .map((photo, originalIndex) => ({
        photo,
        originalIndex,
        displayUrl: getPhotoUrl(photo),
      }))
      .filter((item) =>
        Boolean(item.displayUrl)
      );
  }, [photos]);

  useEffect(() => {
    if (
      currentIndex >
      validPhotos.length - 1
    ) {
      setCurrentIndex(0);
    }
  }, [
    currentIndex,
    validPhotos.length,
  ]);

  const hasPhotos =
    validPhotos.length > 0;

  const safeCurrentIndex = Math.min(
    currentIndex,
    Math.max(
      validPhotos.length - 1,
      0
    )
  );

  const selectedPhoto =
    hasPhotos
      ? validPhotos[safeCurrentIndex]
      : null;

  const handlePrevious = (event) => {
    event.stopPropagation();

    if (!hasPhotos) {
      return;
    }

    setCurrentIndex((previous) =>
      previous === 0
        ? validPhotos.length - 1
        : previous - 1
    );
  };

  const handleNext = (event) => {
    event.stopPropagation();

    if (!hasPhotos) {
      return;
    }

    setCurrentIndex((previous) =>
      previous ===
      validPhotos.length - 1
        ? 0
        : previous + 1
    );
  };

  const handleImageClick = (event) => {
    /*
     * Impide que el clic llegue al contenedor,
     * porque el contenedor conserva la acción
     * de comparar una corrección.
     */
    event.stopPropagation();

    if (!selectedPhoto) {
      return;
    }

    /*
     * Mandamos el índice real dentro del arreglo
     * original para que el modal abra exactamente
     * la fotografía seleccionada.
     */
    onPhotoClick?.(
      selectedPhoto.originalIndex
    );
  };

  return (
    <div
      style={{
        ...styles.container,
        ...containerStyle,
      }}
      onClick={onCompareClick}
    >
      {selectedPhoto ? (
        <>
          <img
            src={selectedPhoto.displayUrl}
            alt={`Foto ${
              safeCurrentIndex + 1
            }`}
            style={{
              ...styles.image,
              cursor: "zoom-in",
            }}
            loading="lazy"
            referrerPolicy="no-referrer"
            onClick={handleImageClick}
            onError={(event) => {
              console.log(
                "No se pudo cargar la foto:",
                selectedPhoto.displayUrl
              );

              event.currentTarget.style.display =
                "none";
            }}
          />

          {validPhotos.length > 1 && (
            <>
              <button
                type="button"
                style={{
                  ...styles.arrowButton,
                  ...styles.leftButton,
                }}
                onClick={handlePrevious}
                aria-label="Fotografía anterior"
              >
                <ChevronLeft
                  size={34}
                  strokeWidth={2.6}
                />
              </button>

              <button
                type="button"
                style={{
                  ...styles.arrowButton,
                  ...styles.rightButton,
                }}
                onClick={handleNext}
                aria-label="Fotografía siguiente"
              >
                <ChevronRight
                  size={34}
                  strokeWidth={2.6}
                />
              </button>

              <div style={styles.counter}>
                {safeCurrentIndex + 1} /{" "}
                {validPhotos.length}
              </div>
            </>
          )}
        </>
      ) : (
        <span style={styles.emptyText}>
          Sin fotografías
        </span>
      )}
    </div>
  );
}