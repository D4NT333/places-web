import {
  useEffect,
  useMemo,
} from "react";

import {
  GeoJSON,
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import {
  cellToBoundary,
  polygonToCells,
} from "h3-js";

import "leaflet/dist/leaflet.css";

import geoData from "../../../../../data/zmg.json";

function FitGeoJSONBounds({
  data,
}) {
  const map = useMap();

  useEffect(() => {
    if (!data) {
      return;
    }

    const layer =
      L.geoJSON(data);

    const bounds =
      layer.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(
        bounds,
      );
    }
  }, [
    data,
    map,
  ]);

  return null;
}

function MapResizeWatcher({
  isExpanded,
}) {
  const map = useMap();

  useEffect(() => {
    const resizeTimeout =
      window.setTimeout(
        () => {
          map.invalidateSize({
            animate: false,
          });
        },
        120,
      );

    return () => {
      window.clearTimeout(
        resizeTimeout,
      );
    };
  }, [
    isExpanded,
    map,
  ]);

  return null;
}

export default function H3PlaceSelectionMap({
  selectedHexId,
  onHexClick,
  isExpanded = false,
}) {
  const guadalajaraCenter = [
    20.6736,
    -103.344,
  ];

  const hexagons = useMemo(() => {
    const feature =
      geoData.features?.[0];

    const coordinates =
      feature?.geometry
        ?.coordinates;

    if (
      !coordinates ||
      feature.geometry.type !==
        "Polygon"
    ) {
      return [];
    }

    try {
      const cells =
        polygonToCells(
          coordinates,
          7,
          true,
        );

      return cells.map(
        (cell) => ({
          id:
            cell,

          boundary:
            cellToBoundary(
              cell,
            ),
        }),
      );
    } catch (error) {
      console.error(
        "Error generando hexágonos H3:",
        error,
      );

      return [];
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",

        height: isExpanded
          ? "100%"
          : "640px",

        minHeight: isExpanded
          ? "0"
          : "640px",

        overflow: "hidden",
        background: "#eef5fb",
        border: "1px solid #c9daeb",
        borderRadius: "13px",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.75)",
      }}
    >
      <MapContainer
        center={
          guadalajaraCenter
        }
        zoom={11}
        scrollWheelZoom
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <MapResizeWatcher
          isExpanded={isExpanded}
        />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitGeoJSONBounds
          data={geoData}
        />

        <Marker
          position={
            guadalajaraCenter
          }
        >
          <Popup>
            Guadalajara centro aproximado
          </Popup>
        </Marker>

        <GeoJSON
          data={geoData}
          style={() => ({
            color:
              "#e34c4c",

            weight:
              3,

            fillColor:
              "#ef6a6a",

            fillOpacity:
              0.09,
          })}
        />

        {hexagons.map(
          (hex) => {
            const isSelected =
              hex.id ===
              selectedHexId;

            return (
              <Polygon
                key={hex.id}
                positions={
                  hex.boundary
                }
                pathOptions={{
                  color:
                    isSelected
                      ? "#16a25b"
                      : "#347fe3",

                  weight:
                    isSelected
                      ? 4
                      : 1.4,

                  fillColor:
                    isSelected
                      ? "#55c65a"
                      : "#67a8f2",

                  fillOpacity:
                    isSelected
                      ? 0.34
                      : 0.08,
                }}
                eventHandlers={{
                  click: () =>
                    onHexClick(
                      hex.id,
                    ),
                }}
              />
            );
          },
        )}
      </MapContainer>
    </div>
  );
}