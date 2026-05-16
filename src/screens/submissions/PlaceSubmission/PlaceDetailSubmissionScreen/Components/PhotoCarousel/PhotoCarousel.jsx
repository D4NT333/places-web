import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles";

function getPhotoUrl(photo) {
  if (!photo) return null;

  if (typeof photo === "string") return photo;

  return (
    // Nueva estructura normalizada desde backend
    photo.displayUrl ||
    photo.mediumUrl ||
    photo.thumbnailUrl ||
    photo.originalUrl ||

    // Nueva estructura agrupada
    photo.medium?.url ||
    photo.original?.url ||
    photo.thumbnail?.url ||

    // Estructura vieja
    photo.mediumURL ||
    photo.downloadURL ||
    photo.thumbnailURL ||

    // Otros posibles nombres legacy
    photo.url ||
    photo.photoUrl ||
    photo.imageUrl ||
    null
  );
}

export default function PhotoCarousel({
  photos = [],
  containerStyle,
  onCompareClick,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photoUrls = useMemo(() => {
    if (!Array.isArray(photos)) return [];

    return photos
      .map(getPhotoUrl)
      .filter(Boolean);
  }, [photos]);

  useEffect(() => {
    if (currentIndex > photoUrls.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, photoUrls.length]);

  const hasPhotos = photoUrls.length > 0;

  const safeCurrentIndex = Math.min(
    currentIndex,
    Math.max(photoUrls.length - 1, 0)
  );

  const currentPhotoUrl = hasPhotos ? photoUrls[safeCurrentIndex] : null;

  const handlePrevious = (event) => {
    event.stopPropagation();

    if (!hasPhotos) return;

    setCurrentIndex((prev) =>
      prev === 0 ? photoUrls.length - 1 : prev - 1
    );
  };

  const handleNext = (event) => {
    event.stopPropagation();

    if (!hasPhotos) return;

    setCurrentIndex((prev) =>
      prev === photoUrls.length - 1 ? 0 : prev + 1
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
      {currentPhotoUrl ? (
        <>
          <img
            src={currentPhotoUrl}
            alt={`Foto ${safeCurrentIndex + 1}`}
            style={styles.image}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(event) => {
              console.log("No se pudo cargar la foto:", currentPhotoUrl);
              event.currentTarget.style.display = "none";
            }}
          />

          {photoUrls.length > 1 && (
            <>
              <button
                type="button"
                style={{ ...styles.arrowButton, ...styles.leftButton }}
                onClick={handlePrevious}
              >
                ‹
              </button>

              <button
                type="button"
                style={{ ...styles.arrowButton, ...styles.rightButton }}
                onClick={handleNext}
              >
                ›
              </button>

              <div style={styles.counter}>
                {safeCurrentIndex + 1} / {photoUrls.length}
              </div>
            </>
          )}
        </>
      ) : (
        <span style={styles.emptyText}>Fotos</span>
      )}
    </div>
  );
}