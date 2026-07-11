import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../layout";

import PlaceRow from "./Components/PlaceRow";
import PlaceStatusFilters from "./Components/PlaceStatusFilters";

import placesData from "./data";
import styles from "./styles";

const PAGE_LIMIT = 15;

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Administrar lugares",
  },
];

export default function AdministrationPlaceScreen() {
  const navigate = useNavigate();

  const [moderationStatus, setModerationStatus] = useState("all");
  const [activityStatus, setActivityStatus] = useState("all");

  const places = placesData;

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesModeration =
        moderationStatus === "all" ||
        place.moderationStatus === moderationStatus;

      const matchesActivity =
        activityStatus === "all" ||
        place.activityStatus === activityStatus;

      return matchesModeration && matchesActivity;
    });
  }, [places, moderationStatus, activityStatus]);

  const loadedPlacesCount = filteredPlaces.length;

  const loadedBatchesCount = useMemo(() => {
    return Math.max(1, Math.ceil(loadedPlacesCount / PAGE_LIMIT));
  }, [loadedPlacesCount]);

  const handleSelectPlace = (place) => {
    const selectedPlaceId = place.id || place.placeId;

    if (!selectedPlaceId) {
      console.warn("El lugar no tiene id:", place);
      return;
    }

    navigate(`/administration/places/${selectedPlaceId}`);
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <section style={styles.toolbar}>
          <header style={styles.headerBlock}>
            <h1 style={styles.title}>
              Administrar lugares
            </h1>

            <p style={styles.subtitle}>
              Consulta, filtra y revisa los lugares publicados dentro de Lsearch.
            </p>

            <div style={styles.summaryChipsRow}>
              <span style={styles.summaryChip}>
                Lugares cargados {loadedPlacesCount}
              </span>

              <span style={styles.summaryChip}>
                Lotes cargados {loadedBatchesCount}
              </span>
            </div>
          </header>

          <PlaceStatusFilters
            moderationStatus={moderationStatus}
            activityStatus={activityStatus}
            onChangeModerationStatus={setModerationStatus}
            onChangeActivityStatus={setActivityStatus}
          />
        </section>

        <section style={styles.table}>
          <div style={styles.tableHeader}>
            <div>Nombre</div>
            <div>Fecha de creación</div>
            <div>Creado por</div>
            <div>Aceptado por</div>
            <div>Estado de actividad</div>
            <div>Estado de moderación</div>
          </div>

          <div style={styles.tableBody}>
            {filteredPlaces.map((place) => (
              <PlaceRow
                key={place.id || place.placeId}
                place={place}
                onSelect={handleSelectPlace}
              />
            ))}
          </div>
        </section>
      </main>
    </LayoutScreen>
  );
}