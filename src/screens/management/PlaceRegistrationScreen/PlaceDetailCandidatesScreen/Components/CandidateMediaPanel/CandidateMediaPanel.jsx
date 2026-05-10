import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles";

export default function CandidateMediaPanel({
  candidate,
  details,
  loadingDetails,
}) {
  const photos = Array.isArray(details?.photos) ? details.photos : [];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const currentPhoto = photos[currentPhotoIndex] || null;

  const location = details?.location || candidate?.location || null;
  const address = details?.address || candidate?.address || "Sin dirección";

  const mapCenter = useMemo(() => {
    if (!location?.latitude || !location?.longitude) return null;

    return [location.latitude, location.longitude];
  }, [location]);

  const handlePreviousPhoto = () => {
    if (photos.length === 0) return;

    setCurrentPhotoIndex((prev) => {
      if (prev === 0) return photos.length - 1;
      return prev - 1;
    });
  };

  const handleNextPhoto = () => {
    if (photos.length === 0) return;

    setCurrentPhotoIndex((prev) => {
      if (prev === photos.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <aside style={styles.mediaCard}>
      <div style={styles.photoBox}>
        {currentPhoto?.photoUrl ? (
          <div style={styles.photoCarousel}>
            <img
              src={currentPhoto.photoUrl}
              alt={candidate?.name || details?.name || "Foto del candidato"}
              style={styles.photoImage}
            />

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  style={{
                    ...styles.photoNavButton,
                    ...styles.photoNavButtonLeft,
                  }}
                  onClick={handlePreviousPhoto}
                >
                  ‹
                </button>

                <button
                  type="button"
                  style={{
                    ...styles.photoNavButton,
                    ...styles.photoNavButtonRight,
                  }}
                  onClick={handleNextPhoto}
                >
                  ›
                </button>

                <div style={styles.photoCounter}>
                  {currentPhotoIndex + 1} / {photos.length}
                </div>
              </>
            )}
          </div>
        ) : (
          <div style={styles.photoPlaceholder}>
            <span style={styles.photoIcon}>✦</span>
            <span>Fotos de Google</span>
            <small>
              {loadingDetails ? "Cargando fotos..." : "Sin fotos disponibles"}
            </small>
          </div>
        )}
      </div>

    <div style={styles.mapBox}>
  {location?.latitude && location?.longitude ? (
    <iframe
      title="Mapa del candidato"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
        location.longitude - 0.004
      },${location.latitude - 0.004},${location.longitude + 0.004},${
        location.latitude + 0.004
      }&layer=mapnik&marker=${location.latitude},${location.longitude}`}
      style={styles.mapFrame}
    />
  ) : (
    <div style={styles.mapPlaceholder}>
      <span>Mapa</span>
      <small>
        {loadingDetails
          ? "Cargando ubicación..."
          : "Ubicación no disponible"}
      </small>
    </div>
  )}
</div>

      <div style={styles.addressBlock}>
        <span style={styles.label}>Dirección</span>
        <p style={styles.addressText}>{address}</p>
      </div>
    </aside>
  );
}