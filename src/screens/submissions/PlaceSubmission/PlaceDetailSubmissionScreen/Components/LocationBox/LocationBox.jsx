import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import styles from "./styles";

function getLocationCoords(location) {
  if (!location) return null;

  const lat =
    location.lat ??
    location.latitude ??
    location._lat ??
    location.coords?.latitude ??
    null;

  const lng =
    location.lng ??
    location.longitude ??
    location._long ??
    location._lng ??
    location.coords?.longitude ??
    null;

  const finalLat = Number(lat);
  const finalLng = Number(lng);

  if (Number.isNaN(finalLat) || Number.isNaN(finalLng)) return null;

  return {
    lat: finalLat,
    lng: finalLng,
  };
}

function RecenterMap({ coords }) {
  const map = useMap();

  React.useEffect(() => {
    if (!coords) return;

    map.setView([coords.lat, coords.lng], 16);
  }, [coords, map]);

  return null;
}

export default function LocationBox({ location }) {
  const coords = useMemo(() => getLocationCoords(location), [location]);

  if (!coords) {
    return (
      <section style={styles.locationBox}>
        <div style={styles.emptyState}>
          <h3 style={styles.title}>Ubicación</h3>
          <p style={styles.text}>Sin ubicación disponible</p>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.locationBox}>
      <MapContainer
        center={[coords.lat, coords.lng]}
        zoom={16}
        scrollWheelZoom={false}
        style={styles.map}
      >
        <RecenterMap coords={coords} />

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CircleMarker
          center={[coords.lat, coords.lng]}
          radius={9}
          pathOptions={{
            color: "#0f172a",
            fillColor: "#0f172a",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <strong>Ubicación seleccionada</strong>
            <br />
            Lat: {coords.lat}
            <br />
            Lng: {coords.lng}
          </Popup>
        </CircleMarker>
      </MapContainer>
    </section>
  );
}