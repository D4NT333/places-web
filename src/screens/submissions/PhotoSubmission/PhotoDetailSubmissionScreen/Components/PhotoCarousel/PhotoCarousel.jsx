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
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    lightboxOpen,
    setLightboxOpen,
  ] = useState(false);

  const availablePhotos =
    useMemo(() => {
      if (!Array.isArray(photos)) {
        return [];
      }

      return photos
        .filter(
          (photo) =>
            photo?.mediumUrl ||
            photo?.originalUrl
        )
        .map((photo, index) => ({
          ...photo,

          id:
            photo.id ||
            photo.photoId ||
            `photo-${index + 1}`,

          /*
           * La versión medium se utiliza
           * dentro del carrusel.
           */
          mediumUrl:
            photo.mediumUrl ||
            photo.originalUrl ||
            "",

          /*
           * La original solamente se utiliza
           * cuando se amplía la fotografía.
           */
          originalUrl:
            photo.originalUrl ||
            photo.mediumUrl ||
            "",
        }));
    }, [photos]);

  const activePhoto =
    availablePhotos[
      activeIndex
    ] || null;

  const hasMultiplePhotos =
    availablePhotos.length > 1;

  /*
   * Reinicia el carrusel cuando cambia
   * la propuesta o el número de fotos.
   */
  useEffect(() => {
    setActiveIndex(0);
    setLightboxOpen(false);
  }, [availablePhotos.length]);

  /*
   * Cierra la vista ampliada con Escape
   * y evita que el fondo pueda desplazarse.
   */
  useEffect(() => {
    if (!lightboxOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [lightboxOpen]);

  function showPreviousPhoto() {
    if (
      availablePhotos.length === 0
    ) {
      return;
    }

    setActiveIndex(
      (currentIndex) => {
        if (currentIndex === 0) {
          return (
            availablePhotos.length -
            1
          );
        }

        return currentIndex - 1;
      }
    );
  }

  function showNextPhoto() {
    if (
      availablePhotos.length === 0
    ) {
      return;
    }

    setActiveIndex(
      (currentIndex) => {
        if (
          currentIndex ===
          availablePhotos.length -
            1
        ) {
          return 0;
        }

        return currentIndex + 1;
      }
    );
  }

  function handleOpenLightbox() {
    if (!activePhoto) {
      return;
    }

    setLightboxOpen(true);
  }

  function handleCloseLightbox() {
    setLightboxOpen(false);
  }

  if (
    availablePhotos.length === 0 ||
    !activePhoto
  ) {
    return (
      <section style={styles.card}>
        <div
          style={styles.cardHeader}
        >
          <div>
            <h2 style={styles.title}>
              Fotografías propuestas
            </h2>

            <p
              style={styles.subtitle}
            >
              Archivos enviados por el usuario.
            </p>
          </div>
        </div>

        <div
          style={styles.emptyState}
        >
          <div
            style={styles.emptyIcon}
          >
            ▧
          </div>

          <p
            style={styles.emptyTitle}
          >
            No hay fotografías disponibles
          </p>

          <p
            style={styles.emptyText}
          >
            La propuesta no contiene imágenes que puedan mostrarse.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={styles.card}>
        <div
          style={styles.cardHeader}
        >
          <div>
            <h2 style={styles.title}>
              Fotografías propuestas
            </h2>

            <p
              style={styles.subtitle}
            >
              Revisa cada imagen antes de tomar una decisión.
            </p>
          </div>

          <span
            style={styles.photoCount}
          >
            {availablePhotos.length}{" "}
            {availablePhotos.length ===
            1
              ? "fotografía"
              : "fotografías"}
          </span>
        </div>

        <div style={styles.viewer}>
          <button
            type="button"
            style={
              styles.mainImageButton
            }
            onClick={
              handleOpenLightbox
            }
            aria-label={`Ampliar fotografía ${
              activeIndex + 1
            }`}
          >
            <img
              /*
               * La vista normal usa medium.
               */
              src={
                activePhoto.mediumUrl
              }
              alt={`${placeName}, fotografía ${
                activeIndex + 1
              }`}
              style={
                styles.mainImage
              }
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
                onClick={
                  showPreviousPhoto
                }
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
                onClick={
                  showNextPhoto
                }
                aria-label="Fotografía siguiente"
              >
                ›
              </button>
            </>
          ) : null}

          <span
            style={styles.counter}
          >
            {activeIndex + 1} de{" "}
            {availablePhotos.length}
          </span>

          <span
            style={
              styles.expandHint
            }
          >
            Presiona para ampliar
          </span>
        </div>

        <div
          style={
            styles.thumbnailSection
          }
        >
          <p
            style={
              styles.thumbnailLabel
            }
          >
            Todas las fotografías
          </p>

          <div
            style={
              styles.thumbnailList
            }
          >
            {availablePhotos.map(
              (photo, index) => {
                const isActive =
                  index ===
                  activeIndex;

                return (
                  <button
                    key={
                      photo.id ||
                      `photo-${index + 1}`
                    }
                    type="button"
                    style={{
                      ...styles.thumbnailButton,

                      ...(isActive
                        ? styles.activeThumbnailButton
                        : {}),
                    }}
                    onClick={() =>
                      setActiveIndex(
                        index
                      )
                    }
                    aria-label={`Mostrar fotografía ${
                      index + 1
                    }`}
                    aria-current={
                      isActive
                        ? "true"
                        : undefined
                    }
                  >
                    <img
                      /*
                       * Las imágenes pequeñas
                       * también usan medium.
                       */
                      src={
                        photo.mediumUrl
                      }
                      alt=""
                      style={
                        styles.thumbnailImage
                      }
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

      {lightboxOpen &&
      activePhoto ? (
        <div
          style={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografía ampliada ${
            activeIndex + 1
          } de ${
            availablePhotos.length
          }`}
        >
          <button
            type="button"
            style={
              styles.lightboxBackdrop
            }
            onClick={
              handleCloseLightbox
            }
            aria-label="Cerrar fotografía ampliada"
          />

          <div
            style={
              styles.lightboxContent
            }
          >
            <button
              type="button"
              style={
                styles.closeButton
              }
              onClick={
                handleCloseLightbox
              }
              aria-label="Cerrar"
            >
              ×
            </button>

            <img
              /*
               * Solamente la vista ampliada
               * carga la fotografía original.
               */
              src={
                activePhoto.originalUrl
              }
              alt={`${placeName}, fotografía ampliada ${
                activeIndex + 1
              }`}
              style={
                styles.lightboxImage
              }
            />

            {hasMultiplePhotos ? (
              <>
                <button
                  type="button"
                  style={{
                    ...styles.lightboxNavigation,
                    ...styles.lightboxPrevious,
                  }}
                  onClick={
                    showPreviousPhoto
                  }
                  aria-label="Fotografía anterior"
                >
                  ‹
                </button>

                <button
                  type="button"
                  style={{
                    ...styles.lightboxNavigation,
                    ...styles.lightboxNext,
                  }}
                  onClick={
                    showNextPhoto
                  }
                  aria-label="Fotografía siguiente"
                >
                  ›
                </button>
              </>
            ) : null}

            <span
              style={
                styles.lightboxCounter
              }
            >
              {activeIndex + 1} de{" "}
              {availablePhotos.length}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}