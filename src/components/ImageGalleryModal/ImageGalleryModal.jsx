import React, {
  useCallback,
  useEffect,
  useMemo,
} from "react";

import styles from "./styles";

function getImageUrl(photo) {
  if (!photo) {
    return null;
  }

  if (typeof photo === "string") {
    return photo;
  }

  return (
    photo.originalUrl ||
    photo.url ||
    photo.mediumUrl ||
    photo.photoUrl ||
    photo.thumbnailUrl ||
    (
      typeof photo.reference === "string" &&
      photo.reference.startsWith("http")
        ? photo.reference
        : null
    )
  );
}

export default function ImageGalleryModal({
  isOpen = false,
  photos = [],
  currentIndex = 0,
  title = "Galería de imágenes",
  onClose,
  onChangeIndex,
}) {
  const validPhotos = useMemo(
    () =>
      photos
        .map((photo, index) => ({
          ...(
            typeof photo === "object" && photo !== null
              ? photo
              : {}
          ),
          source: photo,
          originalIndex: index,
          url: getImageUrl(photo),
        }))
        .filter((photo) => Boolean(photo.url)),
    [photos]
  );

  const safeIndex = Math.min(
    Math.max(currentIndex, 0),
    Math.max(validPhotos.length - 1, 0)
  );

  const selectedPhoto = validPhotos[safeIndex] || null;

  const showPrevious = useCallback(() => {
    if (validPhotos.length <= 1) {
      return;
    }

    const nextIndex =
      safeIndex === 0
        ? validPhotos.length - 1
        : safeIndex - 1;

    onChangeIndex?.(nextIndex);
  }, [
    onChangeIndex,
    safeIndex,
    validPhotos.length,
  ]);

  const showNext = useCallback(() => {
    if (validPhotos.length <= 1) {
      return;
    }

    const nextIndex =
      safeIndex === validPhotos.length - 1
        ? 0
        : safeIndex + 1;

    onChangeIndex?.(nextIndex);
  }, [
    onChangeIndex,
    safeIndex,
    validPhotos.length,
  ]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    isOpen,
    onClose,
    showNext,
    showPrevious,
  ]);

  if (!isOpen || !selectedPhoto) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <header style={styles.header}>
        <div>
          <h2 style={styles.title}>{title}</h2>

          <p style={styles.counter}>
            Imagen {safeIndex + 1} de{" "}
            {validPhotos.length}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar galería"
          style={styles.closeButton}
        >
          ×
        </button>
      </header>

      <div style={styles.viewer}>
        {validPhotos.length > 1 && (
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Imagen anterior"
            style={{
              ...styles.navigationButton,
              ...styles.previousButton,
            }}
          >
            ‹
          </button>
        )}

        <img
          src={selectedPhoto.url}
          alt={`${title} ${safeIndex + 1}`}
          style={styles.image}
        />

        {validPhotos.length > 1 && (
          <button
            type="button"
            onClick={showNext}
            aria-label="Imagen siguiente"
            style={{
              ...styles.navigationButton,
              ...styles.nextButton,
            }}
          >
            ›
          </button>
        )}
      </div>

      {validPhotos.length > 1 && (
        <div style={styles.thumbnails}>
          {validPhotos.map((photo, index) => (
            <button
              key={`${photo.url}-${index}`}
              type="button"
              onClick={() =>
                onChangeIndex?.(index)
              }
              style={{
                ...styles.thumbnailButton,
                ...(index === safeIndex
                  ? styles.thumbnailButtonActive
                  : {}),
              }}
            >
              <img
                src={photo.url}
                alt={`Miniatura ${index + 1}`}
                style={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}