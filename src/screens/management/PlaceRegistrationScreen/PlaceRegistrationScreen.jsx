import LayoutScreen from "../../../layout";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import styles from "./styles";
import geoData from "../../../data/zmg.json";

function FitGeoJSONBounds({ data }) {
  const map = useMap();

  useEffect(() => {
    if (!data) return;

    const layer = L.geoJSON(data);
    const bounds = layer.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds);
    }
  }, [data, map]);

  return null;
}

export default function PlaceRegistrationScreen() {
  const guadalajaraCenter = [20.6736, -103.344];

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <h1 style={styles.title}>Place Registration Screen</h1>

        <div style={styles.mapWrapper}>
          <MapContainer
            center={guadalajaraCenter}
            zoom={11}
            scrollWheelZoom={true}
            style={styles.map}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FitGeoJSONBounds data={geoData} />

            <Marker position={guadalajaraCenter}>
              <Popup>Guadalajara centro aproximado</Popup>
            </Marker>

            <GeoJSON
              data={geoData}
              style={() => ({
                color: "red",
                weight: 3,
                fillColor: "red",
                fillOpacity: 0.15,
              })}
            />
          </MapContainer>
        </div>
      </div>
    </LayoutScreen>
  );
}