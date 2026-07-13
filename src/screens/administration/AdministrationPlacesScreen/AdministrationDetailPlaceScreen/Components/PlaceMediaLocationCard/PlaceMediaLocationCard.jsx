import React, { useMemo, useState } from "react";
import styles from "./styles";

function getPhotoUrl(photo) {
  if (!photo) {
    return null;
  }

  if (photo.url) {
    return photo.url;
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
}) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = useMemo(() => {
    if (Array.isArray(place.photos) && place.photos.length > 0) {
      return place.photos;
    }

    return place.mainPhoto ? [place.mainPhoto] : [];
  }, [place.photos, place.mainPhoto]);

  const currentPhoto = photos[photoIndex] || null;
  const currentPhotoUrl = getPhotoUrl(currentPhoto);

  const handlePrevious = () => {
    setPhotoIndex((currentIndex) => {
      if (photos.length === 0) {
        return 0;
      }

      return currentIndex === 0
        ? photos.length - 1
        : currentIndex - 1;
    });
  };

  const handleNext = () => {
    setPhotoIndex((currentIndex) => {
      if (photos.length === 0) {
        return 0;
      }

      return currentIndex === photos.length - 1
        ? 0
        : currentIndex + 1;
    });
  };

  const hasCoordinates =
    Number.isFinite(Number(place.location?.lat)) &&
    Number.isFinite(Number(place.location?.lng));

  const mapUrl = hasCoordinates
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${
        Number(place.location.lng) - 0.005
      }%2C${Number(place.location.lat) - 0.005}%2C${
        Number(place.location.lng) + 0.005
      }%2C${Number(place.location.lat) + 0.005}&layer=mapnik&marker=${
        place.location.lat
      }%2C${place.location.lng}`
    : null;

  return (
    <aside style={styles.card}>
      <div
        style={{
          ...styles.photoBox,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            ...styles.counter,
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
          }}
        >
          {photos.length > 0
            ? `${photoIndex + 1}/${photos.length}`
            : "0/0"}
        </span>

        {currentPhotoUrl ? (
          <img
            src={currentPhotoUrl}
            alt={`Fotografía ${photoIndex + 1} de ${place.name}`}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        ) : (
          <span style={styles.photoText}>
            No hay fotografías disponibles
          </span>
        )}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Fotografía anterior"
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                width: 34,
                height: 34,
                border: "none",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.9)",
                cursor: "pointer",
                fontWeight: 900,
              }}
            >
              ‹
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Fotografía siguiente"
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                width: 34,
                height: 34,
                border: "none",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.9)",
                cursor: "pointer",
                fontWeight: 900,
              }}
            >
              ›
            </button>
          </>
        )}
      </div>

      <section style={styles.locationBlock}>
        <h2 style={styles.title}>Ubicación</h2>

        <div
          style={{
            ...styles.mapBox,
            overflow: "hidden",
          }}
        >
          {mapUrl ? (
            <iframe
              title={`Ubicación de ${place.name}`}
              src={mapUrl}
              style={{
                width: "100%",
                height: "100%",
                border: 0,
              }}
              loading="lazy"
            />
          ) : (
            <span style={styles.mapText}>
              Ubicación no disponible
            </span>
          )}
        </div>

        <p style={styles.address}>
          <strong>Dirección:</strong> {place.address}
        </p>
      </section>
    </aside>
  );
}