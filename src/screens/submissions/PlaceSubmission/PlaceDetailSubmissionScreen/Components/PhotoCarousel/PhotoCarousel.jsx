import React, { useMemo, useState } from "react";
import styles from "./styles";

function getPhotoUrl(photo) {
  if (!photo) return null;

  if (typeof photo === "string") return photo;

  return (
    photo.mediumURL ||
    photo.downloadURL ||
    photo.thumbnailURL ||
    photo.url ||
    photo.photoUrl ||
    null
  );
}

export default function PhotoCarousel({ photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photoUrls = useMemo(() => {
    return photos.map(getPhotoUrl).filter(Boolean);
  }, [photos]);

  const hasPhotos = photoUrls.length > 0;
  const safeCurrentIndex = Math.min(currentIndex, Math.max(photoUrls.length - 1, 0));
  const currentPhotoUrl = hasPhotos ? photoUrls[safeCurrentIndex] : null;

  const handlePrevious = () => {
    if (!hasPhotos) return;

    setCurrentIndex((prev) =>
      prev === 0 ? photoUrls.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!hasPhotos) return;

    setCurrentIndex((prev) =>
      prev === photoUrls.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div style={styles.container}>
      {currentPhotoUrl ? (
        <>
          <img
            src={currentPhotoUrl}
            alt={`Foto ${safeCurrentIndex + 1}`}
            style={styles.image}
            loading="lazy"
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