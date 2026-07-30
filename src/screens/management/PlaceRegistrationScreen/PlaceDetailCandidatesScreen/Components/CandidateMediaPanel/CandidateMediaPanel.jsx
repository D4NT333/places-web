import React, {
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  Images,
  MapPin,
} from "lucide-react";

import styles from "./styles";

export default function CandidateMediaPanel({
  candidate,
  details,
  loadingDetails,
}) {
  const photos =
    Array.isArray(
      details?.photos,
    )
      ? details.photos
      : [];

  const [
    currentPhotoIndex,
    setCurrentPhotoIndex,
  ] = useState(0);

  const currentPhoto =
    photos[
      currentPhotoIndex
    ] || null;

  const location =
    details?.location ||
    candidate?.location ||
    null;

  const address =
    details?.address ||
    candidate?.address ||
    "Sin dirección";

  function handlePreviousPhoto() {
    if (
      photos.length === 0
    ) {
      return;
    }

    setCurrentPhotoIndex(
      (previousIndex) => {
        if (
          previousIndex === 0
        ) {
          return (
            photos.length - 1
          );
        }

        return (
          previousIndex - 1
        );
      },
    );
  }

  function handleNextPhoto() {
    if (
      photos.length === 0
    ) {
      return;
    }

    setCurrentPhotoIndex(
      (previousIndex) => {
        if (
          previousIndex ===
          photos.length - 1
        ) {
          return 0;
        }

        return (
          previousIndex + 1
        );
      },
    );
  }

  return (
    <aside style={styles.mediaCard}>
      <div style={styles.sectionHeader}>
        <div style={styles.sectionIcon}>
          <Images
            size={50}
            strokeWidth={2.2}
          />
        </div>

        <div style={styles.sectionHeading}>
          <h2 style={styles.sectionTitle}>
            Multimedia
          </h2>

          <p style={styles.sectionSubtitle}>
            Fotos, ubicación y dirección
            proporcionadas por Google.
          </p>
        </div>
      </div>

      <div style={styles.photoBox}>
        {currentPhoto?.photoUrl ? (
          <div style={styles.photoCarousel}>
            <img
              src={
                currentPhoto.photoUrl
              }
              alt={
                candidate?.name ||
                details?.name ||
                "Foto del candidato"
              }
              style={styles.photoImage}
            />

            <div style={styles.photoOverlay} />

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Foto anterior"
                  style={{
                    ...styles.photoNavButton,
                    ...styles.photoNavButtonLeft,
                  }}
                  onClick={
                    handlePreviousPhoto
                  }
                >
                  <ChevronLeft
                    size={40}
                    strokeWidth={2.5}
                  />
                </button>

                <button
                  type="button"
                  aria-label="Siguiente foto"
                  style={{
                    ...styles.photoNavButton,
                    ...styles.photoNavButtonRight,
                  }}
                  onClick={
                    handleNextPhoto
                  }
                >
                  <ChevronRight
                    size={40}
                    strokeWidth={2.5}
                  />
                </button>
              </>
            )}

            <div style={styles.photoCounter}>
              <Images
                size={36}
                strokeWidth={2.25}
              />

              {currentPhotoIndex +
                1}{" "}
              / {photos.length}
            </div>
          </div>
        ) : (
          <div style={styles.photoPlaceholder}>
            <div style={styles.placeholderIcon}>
              <ImageOff
                size={48}
                strokeWidth={2.1}
              />
            </div>

            <strong>
              Sin fotografías
            </strong>

            <span>
              {loadingDetails
                ? "Cargando fotos de Google..."
                : "Google no proporcionó imágenes para este candidato."}
            </span>
          </div>
        )}
      </div>

      <div style={styles.mapSection}>
        <div style={styles.smallSectionHeader}>
          <MapPin
            size={40}
            strokeWidth={2.2}
          />

          <strong>
            Ubicación
          </strong>
        </div>

        <div style={styles.mapBox}>
          {location?.latitude &&
          location?.longitude ? (
            <iframe
              title="Mapa del candidato"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                location.longitude -
                0.004
              },${
                location.latitude -
                0.004
              },${
                location.longitude +
                0.004
              },${
                location.latitude +
                0.004
              }&layer=mapnik&marker=${
                location.latitude
              },${
                location.longitude
              }`}
              style={styles.mapFrame}
            />
          ) : (
            <div style={styles.mapPlaceholder}>
              <MapPin
                size={43}
                strokeWidth={2.1}
              />

              <strong>
                Ubicación no disponible
              </strong>

              <span>
                {loadingDetails
                  ? "Cargando ubicación..."
                  : "Google no proporcionó coordenadas."}
              </span>
            </div>
          )}
        </div>
      </div>

      <div style={styles.addressBlock}>
        <div style={styles.addressIcon}>
          <MapPin
            size={50}
            strokeWidth={2.2}
          />
        </div>

        <div style={styles.addressContent}>
          <span style={styles.label}>
            Dirección
          </span>

          <p style={styles.addressText}>
            {address}
          </p>
        </div>
      </div>
    </aside>
  );
}