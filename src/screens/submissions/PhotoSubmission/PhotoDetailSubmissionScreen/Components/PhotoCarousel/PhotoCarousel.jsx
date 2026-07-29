import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Expand,
  ImageOff,
  Images,
} from "lucide-react";

import styles from "./styles";

export default function PhotoCarousel({
  photos = [],
  placeName,
  onPhotoClick,
}) {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const availablePhotos =
    useMemo(() => {
      if (
        !Array.isArray(
          photos
        )
      ) {
        return [];
      }

      return photos
        .filter(
          (photo) =>
            photo?.mediumUrl ||
            photo?.originalUrl ||
            photo?.medium?.url ||
            photo?.original?.url ||
            photo?.thumbnailUrl ||
            photo?.thumbnail?.url ||
            photo?.url
        )
        .map(
          (
            photo,
            index
          ) => ({
            ...photo,

            id:
              photo.id ||
              photo.photoId ||
              `photo-${index + 1}`,

            mediumUrl:
              photo.mediumUrl ||
              photo?.medium?.url ||
              photo.originalUrl ||
              photo?.original?.url ||
              photo.thumbnailUrl ||
              photo?.thumbnail?.url ||
              photo.url ||
              "",

            originalUrl:
              photo.originalUrl ||
              photo?.original?.url ||
              photo.mediumUrl ||
              photo?.medium?.url ||
              photo.thumbnailUrl ||
              photo?.thumbnail?.url ||
              photo.url ||
              "",
          })
        );
    }, [photos]);

  const activePhoto =
    availablePhotos[
      activeIndex
    ] || null;

  const hasMultiplePhotos =
    availablePhotos.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [
    availablePhotos.length,
  ]);

  function showPreviousPhoto(
    event
  ) {
    event?.stopPropagation();

    if (
      availablePhotos.length ===
      0
    ) {
      return;
    }

    setActiveIndex(
      (currentIndex) => {
        if (
          currentIndex === 0
        ) {
          return (
            availablePhotos.length -
            1
          );
        }

        return (
          currentIndex - 1
        );
      }
    );
  }

  function showNextPhoto(
    event
  ) {
    event?.stopPropagation();

    if (
      availablePhotos.length ===
      0
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

        return (
          currentIndex + 1
        );
      }
    );
  }

  function handleOpenGallery() {
    if (
      !activePhoto ||
      typeof onPhotoClick !==
        "function"
    ) {
      return;
    }

    onPhotoClick(
      activeIndex
    );
  }

  if (
    availablePhotos.length ===
      0 ||
    !activePhoto
  ) {
    return (
      <section
        style={styles.card}
      >
        <div
          style={
            styles.cardHeader
          }
        >
          <div
            style={
              styles.headerHeading
            }
          >
            <div
              style={
                styles.headerIconBox
              }
            >
              <Images
                size={30}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h2
                style={
                  styles.title
                }
              >
                Fotografías propuestas
              </h2>

              <p
                style={
                  styles.subtitle
                }
              >
                Archivos enviados por el usuario.
              </p>
            </div>
          </div>
        </div>

        <div
          style={
            styles.emptyState
          }
        >
          <div
            style={
              styles.emptyIcon
            }
          >
            <ImageOff
              size={42}
              strokeWidth={2}
            />
          </div>

          <p
            style={
              styles.emptyTitle
            }
          >
            No hay fotografías disponibles
          </p>

          <p
            style={
              styles.emptyText
            }
          >
            La propuesta no contiene imágenes que puedan mostrarse.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      style={styles.card}
    >
      <div
        style={
          styles.cardHeader
        }
      >
        <div
          style={
            styles.headerHeading
          }
        >
          <div
            style={
              styles.headerIconBox
            }
          >
            <Images
              size={30}
              strokeWidth={2.2}
            />
          </div>

          <div>
            <h2
              style={
                styles.title
              }
            >
              Fotografías propuestas
            </h2>

            <p
              style={
                styles.subtitle
              }
            >
              Revisa cada imagen antes de tomar una decisión.
            </p>
          </div>
        </div>

        <span
          style={
            styles.photoCount
          }
        >
          <Images
            size={20}
            strokeWidth={2.3}
          />

          {
            availablePhotos.length
          }{" "}
          {availablePhotos.length ===
          1
            ? "fotografía"
            : "fotografías"}
        </span>
      </div>

      <div
        style={
          styles.viewer
        }
      >
        <button
          type="button"
          style={
            styles.mainImageButton
          }
          onClick={
            handleOpenGallery
          }
          aria-label={`Abrir galería en la fotografía ${
            activeIndex + 1
          }`}
        >
          <img
            src={
              activePhoto.mediumUrl
            }
            alt={`${placeName || "Lugar"}, fotografía ${
              activeIndex + 1
            }`}
            style={
              styles.mainImage
            }
          />

          <div
            style={
              styles.imageOverlay
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
              <ChevronLeft
                size={30}
                strokeWidth={2.5}
              />
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
              <ChevronRight
                size={30}
                strokeWidth={2.5}
              />
            </button>
          </>
        ) : null}

        <span
          style={
            styles.counter
          }
        >
          {activeIndex + 1} de{" "}
          {
            availablePhotos.length
          }
        </span>

        <span
          style={
            styles.expandHint
          }
        >
          <Expand
            size={17}
            strokeWidth={2.3}
          />

          Presiona para abrir la galería
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
            (
              photo,
              index
            ) => {
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
                  onDoubleClick={() =>
                    onPhotoClick?.(
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
  );
}