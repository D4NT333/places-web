import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./styles";

export default function PhotoCarousel({
  photos = [],
  placeName,
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const availablePhotos = useMemo(() => {
    return Array.isArray(photos)
      ? photos.filter(
          (photo) =>
            photo?.mediumUrl ||
            photo?.originalUrl
        )
      : [];
  }, [photos]);

  useEffect(() => {
    setActiveIndex(0);
  }, [availablePhotos.length]);

  const activePhoto =
    availablePhotos[activeIndex];

  const hasMultiplePhotos =
    availablePhotos.length > 1;

  function showPreviousPhoto() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === 0) {
        return availablePhotos.length - 1;
      }

      return currentIndex - 1;
    });
  }

  function showNextPhoto() {
    setActiveIndex((currentIndex) => {
      if (
        currentIndex ===
        availablePhotos.length - 1
      ) {
        return 0;
      }

      return currentIndex + 1;
    });
  }

  if (!availablePhotos.length) {
    return (
      <section style={styles.card}>
        <div style={styles.cardHeader}>
          <div>
            <h2 style={styles.title}>
              Fotografías propuestas
            </h2>

            <p style={styles.subtitle}>
              Archivos enviados por el usuario.
            </p>
          </div>
        </div>

        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>
            ▧
          </div>

          <p style={styles.emptyTitle}>
            No hay fotografías disponibles
          </p>

          <p style={styles.emptyText}>
            La propuesta no contiene imágenes
            que puedan mostrarse.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={styles.card}>
        <div style={styles.cardHeader}>
          <div>
            <h2 style={styles.title}>
              Fotografías propuestas
            </h2>

            <p style={styles.subtitle}>
              Revisa cada imagen antes de tomar
              una decisión.
            </p>
          </div>

          <span style={styles.photoCount}>
            {availablePhotos.length}{" "}
            {availablePhotos.length === 1
              ? "fotografía"
              : "fotografías"}
          </span>
        </div>

        <div style={styles.viewer}>
          <button
            type="button"
            style={styles.mainImageButton}
            onClick={() => setLightboxOpen(true)}
            aria-label="Ampliar fotografía"
          >
            <img
              src={
                activePhoto.mediumUrl ||
                activePhoto.originalUrl
              }
              alt={`${placeName}, fotografía ${
                activeIndex + 1
              }`}
              style={styles.mainImage}
            />
          </button>

          {hasMultiplePhotos ? (
            <>
              <button
                type="button"
                style={{
                  ...styles.navigationButton,
                  ...styles.previousButton,
                }}
                onClick={showPreviousPhoto}
                aria-label="Fotografía anterior"
              >
                ‹
              </button>

              <button
                type="button"
                style={{
                  ...styles.navigationButton,
                  ...styles.nextButton,
                }}
                onClick={showNextPhoto}
                aria-label="Fotografía siguiente"
              >
                ›
              </button>
            </>
          ) : null}

          <span style={styles.counter}>
            {activeIndex + 1} de{" "}
            {availablePhotos.length}
          </span>

          <span style={styles.expandHint}>
            Presiona para ampliar
          </span>
        </div>

        <div style={styles.thumbnailSection}>
          <p style={styles.thumbnailLabel}>
            Todas las fotografías
          </p>

          <div style={styles.thumbnailList}>
            {availablePhotos.map(
              (photo, index) => {
                const isActive =
                  index === activeIndex;

                return (
                  <button
                    key={
                      photo.id ||
                      `thumbnail-${index}`
                    }
                    type="button"
                    style={{
                      ...styles.thumbnailButton,

                      ...(isActive
                        ? styles.activeThumbnailButton
                        : {}),
                    }}
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-label={`Mostrar fotografía ${
                      index + 1
                    }`}
                  >
                    <img
                      src={
                        photo.thumbnailUrl ||
                        photo.mediumUrl ||
                        photo.originalUrl
                      }
                      alt=""
                      style={styles.thumbnailImage}
                    />

                    <span
                      style={{
                        ...styles.thumbnailNumber,

                        ...(isActive
                          ? styles.activeThumbnailNumber
                          : {}),
                      }}
                    >
                      {index + 1}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>
      </section>

      {lightboxOpen ? (
        <div
          style={styles.lightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            style={styles.lightboxBackdrop}
            onClick={() =>
              setLightboxOpen(false)
            }
            aria-label="Cerrar fotografía ampliada"
          />

          <div style={styles.lightboxContent}>
            <button
              type="button"
              style={styles.closeButton}
              onClick={() =>
                setLightboxOpen(false)
              }
              aria-label="Cerrar"
            >
              ×
            </button>

            <img
              src={
                activePhoto.originalUrl ||
                activePhoto.mediumUrl
              }
              alt={`${placeName}, fotografía ampliada ${
                activeIndex + 1
              }`}
              style={styles.lightboxImage}
            />

            {hasMultiplePhotos ? (
              <>
                <button
                  type="button"
                  style={{
                    ...styles.lightboxNavigation,
                    ...styles.lightboxPrevious,
                  }}
                  onClick={showPreviousPhoto}
                >
                  ‹
                </button>

                <button
                  type="button"
                  style={{
                    ...styles.lightboxNavigation,
                    ...styles.lightboxNext,
                  }}
                  onClick={showNextPhoto}
                >
                  ›
                </button>
              </>
            ) : null}

            <span style={styles.lightboxCounter}>
              {activeIndex + 1} de{" "}
              {availablePhotos.length}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}