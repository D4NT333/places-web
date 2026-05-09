import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMap,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo } from "react";
import L from "leaflet";
import geoData from "../../../../../data/zmg.json";
import { polygonToCells, cellToBoundary } from "h3-js";

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

export default function H3PlaceSelectionMap({
  selectedHexId,
  onHexClick,
}) {
  const guadalajaraCenter = [20.6736, -103.344];

  const hexagons = useMemo(() => {
    const feature = geoData.features?.[0];
    const coordinates = feature?.geometry?.coordinates;

    if (!coordinates || feature.geometry.type !== "Polygon") {
      return [];
    }

    try {
      const cells = polygonToCells(coordinates, 7, true);

      return cells.map((cell) => ({
        id: cell,
        boundary: cellToBoundary(cell),
      }));
    } catch (error) {
      console.error("Error generando hexágonos H3:", error);
      return [];
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "620px",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #d1d5db",
      }}
    >
      <MapContainer
        center={guadalajaraCenter}
        zoom={11}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
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
            fillOpacity: 0.12,
          })}
        />

        {hexagons.map((hex) => {
          const isSelected = hex.id === selectedHexId;

          return (
            <Polygon
              key={hex.id}
              positions={hex.boundary}
              pathOptions={{
                color: isSelected ? "yellow" : "blue",
                weight: isSelected ? 3 : 1,
                fillColor: isSelected ? "yellow" : "blue",
                fillOpacity: isSelected ? 0.25 : 0.05,
              }}
              eventHandlers={{
                click: () => onHexClick(hex.id),
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}