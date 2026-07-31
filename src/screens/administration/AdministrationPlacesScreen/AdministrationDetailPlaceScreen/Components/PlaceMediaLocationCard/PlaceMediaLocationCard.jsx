import React, {
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Images,
  LoaderCircle,
  MapPinned,
  Maximize2,
  Navigation,
} from "lucide-react";

import styles from "./styles";

function getPhotoUrl(photo) {
  if (!photo) {
    return null;
  }

  if (typeof photo === "string") {
    return photo;
  }

  if (photo.url) {
    return photo.url;
  }

  if (photo.originalUrl) {
    return photo.originalUrl;
  }

  if (!photo.reference) {
    return null;
  }

  return `/api/places/photos/google?reference=${encodeURIComponent(
    photo.reference
  )}`;
}

export default function PlaceMediaLocationCard({
  place,
  loadingGallery = false,
  onOpenGallery,
}) {
  const [
    photoIndex,
    setPhotoIndex,
  ] = useState(0);

  const photos = useMemo(() => {
    if (
      Array.isArray(place.photos) &&
      place.photos.length > 0
    ) {
      return place.photos;
    }

    return place.mainPhoto
      ? [place.mainPhoto]
      : [];
  }, [
    place.photos,
    place.mainPhoto,
  ]);

  const currentPhoto =
    photos[photoIndex] ||
    null;

  const currentPhotoUrl =
    getPhotoUrl(
      currentPhoto
    );

  const handlePrevious = () => {
    setPhotoIndex(
      (
        currentIndex
      ) => {
        if (
          photos.length ===
          0
        ) {
          return 0;
        }

        return currentIndex ===
          0
          ? photos.length -
              1
          : currentIndex -
              1;
      }
    );
  };

  const handleNext = () => {
    setPhotoIndex(
      (
        currentIndex
      ) => {
        if (
          photos.length ===
          0
        ) {
          return 0;
        }

        return currentIndex ===
          photos.length -
            1
          ? 0
          : currentIndex +
              1;
      }
    );
  };

  const hasCoordinates =
    Number.isFinite(
      Number(
        place.location
          ?.lat
      )
    ) &&
    Number.isFinite(
      Number(
        place.location
          ?.lng
      )
    );

  const MAP_OFFSET =
    0.0014;

  const mapUrl =
    hasCoordinates
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${
          Number(
            place.location
              .lng
          ) - MAP_OFFSET
        }%2C${
          Number(
            place.location
              .lat
          ) - MAP_OFFSET
        }%2C${
          Number(
            place.location
              .lng
          ) + MAP_OFFSET
        }%2C${
          Number(
            place.location
              .lat
          ) + MAP_OFFSET
        }&layer=mapnik&marker=${
          place.location
            .lat
        }%2C${
          place.location
            .lng
        }`
      : null;

  return (
    <aside style={styles.card}>
      <section style={styles.sectionCard}>
        <header style={styles.sectionHeader}>
          <div style={styles.sectionTitleGroup}>
            <div style={styles.photoHeaderIcon}>
              <Images
                size={50}
                strokeWidth={2.1}
              />
            </div>

            <div style={styles.sectionTitleText}>
              <h2 style={styles.sectionTitle}>
                Fotografías
              </h2>

              <p style={styles.sectionSubtitle}>
                Imágenes publicadas actualmente para
                este lugar.
              </p>
            </div>
          </div>

          <span style={styles.photoCounterPill}>
            {photos.length > 0
              ? `${photoIndex + 1} de ${photos.length}`
              : "Sin fotografías"}
          </span>
        </header>

        <div style={styles.photoBox}>
          {currentPhotoUrl ? (
            <button
              type="button"
              onClick={() =>
                onOpenGallery?.(
                  photoIndex
                )
              }
              disabled={
                loadingGallery
              }
              aria-label="Abrir galería en pantalla completa"
              style={{
                ...styles.photoButton,

                ...(loadingGallery
                  ? styles.photoButtonDisabled
                  : {}),
              }}
            >
              <img
                src={
                  currentPhotoUrl
                }
                alt={`Fotografía ${
                  photoIndex + 1
                } de ${
                  place.name
                }`}
                style={
                  styles.photoImage
                }
              />

              <span
                style={
                  styles.expandIndicator
                }
              >
                <Maximize2
                  size={32}
                  strokeWidth={2.2}
                />

                Abrir galería
              </span>
            </button>
          ) : (
            <div style={styles.emptyPhotoState}>
              <div style={styles.emptyPhotoIcon}>
                <Images
                  size={50}
                  strokeWidth={2}
                />
              </div>

              <strong style={styles.emptyPhotoTitle}>
                Sin fotografías
              </strong>

              <span style={styles.photoText}>
                Este lugar todavía no tiene imágenes
                disponibles.
              </span>
            </div>
          )}

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                onClick={
                  handlePrevious
                }
                aria-label="Fotografía anterior"
                style={{
                  ...styles.navigationButton,
                  ...styles.previousButton,
                }}
              >
                <ChevronLeft
                  size={42}
                  strokeWidth={2.4}
                />
              </button>

              <button
                type="button"
                onClick={
                  handleNext
                }
                aria-label="Fotografía siguiente"
                style={{
                  ...styles.navigationButton,
                  ...styles.nextButton,
                }}
              >
                <ChevronRight
                  size={42}
                  strokeWidth={2.4}
                />
              </button>
            </>
          ) : null}

          {loadingGallery ? (
            <div style={styles.galleryLoading}>
              <div style={styles.loadingIcon}>
                <LoaderCircle
                  size={50}
                  strokeWidth={2.1}
                />
              </div>

              <span>
                Cargando originales...
              </span>
            </div>
          ) : null}
        </div>
      </section>

      <section style={styles.sectionCard}>
        <header style={styles.sectionHeader}>
          <div style={styles.sectionTitleGroup}>
            <div style={styles.locationHeaderIcon}>
              <MapPinned
                size={50}
                strokeWidth={2.1}
              />
            </div>

            <div style={styles.sectionTitleText}>
              <h2 style={styles.sectionTitle}>
                Ubicación
              </h2>

              <p style={styles.sectionSubtitle}>
                Punto registrado para este lugar.
              </p>
            </div>
          </div>

          <span style={styles.locationStatus}>
            <Navigation
              size={40}
              strokeWidth={2.2}
            />

            {hasCoordinates
              ? "Ubicación disponible"
              : "Sin coordenadas"}
          </span>
        </header>

        <div style={styles.mapBox}>
          {mapUrl ? (
            <iframe
              title={`Ubicación de ${place.name}`}
              src={mapUrl}
              style={styles.mapFrame}
              loading="lazy"
            />
          ) : (
            <div style={styles.emptyMapState}>
              <div style={styles.emptyMapIcon}>
                <MapPinned
                  size={50}
                  strokeWidth={2}
                />
              </div>

              <strong style={styles.emptyMapTitle}>
                Ubicación no disponible
              </strong>

              <span style={styles.mapText}>
                No se encontraron coordenadas para
                mostrar el mapa.
              </span>
            </div>
          )}
        </div>

        <div style={styles.addressBox}>
          <div style={styles.addressIcon}>
            <Navigation
              size={40}
              strokeWidth={2.2}
            />
          </div>

          <div style={styles.addressContent}>
            <span style={styles.addressLabel}>
              Dirección
            </span>

            <p style={styles.address}>
              {place.address}
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
}