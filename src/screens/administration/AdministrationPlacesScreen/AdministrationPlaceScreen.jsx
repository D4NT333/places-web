import React, { useMemo } from "react";

import LayoutScreen from "../../../layout";

import PlaceRow from "./Components/PlaceRow";

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
  const places = placesData;

  const loadedPlacesCount = places.length;

  const loadedBatchesCount = useMemo(() => {
    return Math.max(1, Math.ceil(loadedPlacesCount / PAGE_LIMIT));
  }, [loadedPlacesCount]);

  const handleSelectPlace = (place) => {
    console.log("Lugar seleccionado:", place);
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <header style={styles.headerBlock}>
          <h1 style={styles.title}>
            Administrar lugares
          </h1>

          <p style={styles.subtitle}>
            Lugares publicados y registrados en Lsearch
          </p>

          <div style={styles.chipsRow}>
            <span style={styles.chip}>
              Lugares cargados {loadedPlacesCount}
            </span>

            <span style={styles.chip}>
              Lotes cargados {loadedBatchesCount}
            </span>
          </div>
        </header>

        <section style={styles.table}>
          <div style={styles.tableHeader}>
            <div>Nombre</div>
            <div>Fecha de creación</div>
            <div>Creado por</div>
            <div>Aceptado por</div>
            <div>Estado</div>
          </div>

          <div style={styles.tableBody}>
            {places.map((place) => (
              <PlaceRow
                key={place.id}
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