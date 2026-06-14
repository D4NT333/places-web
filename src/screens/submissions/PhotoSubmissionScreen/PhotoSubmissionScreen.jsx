import React, { useMemo, useState } from "react";

import LayoutScreen from "../../../layout/Layout";
import PhotoSubmissionCard from "./Components/PhotoSubmissionCard";

import styles from "./styles";

const PAGE_LIMIT = 15;

const statusFilters = [
  {
    label: "Todas",
    value: "all",
  },
  {
    label: "Pendientes",
    value: "in_review",
  },
  {
    label: "Aprobadas",
    value: "approved",
  },
  {
    label: "Rechazadas",
    value: "rejected",
  },
];

const initialPhotoSubmissions = [
  {
    id: 1,
    placeName: "Café de prueba",
    createdByName: "Dante",
    createdAt: "21/03/2026",
    extraPhotosCount: 4,
    imageUrl: "",
    status: "in_review",
  },
  {
    id: 2,
    placeName: "Parque central",
    createdByName: "Dante",
    createdAt: "21/03/2026",
    extraPhotosCount: 3,
    imageUrl: "",
    status: "approved",
  },
  {
    id: 3,
    placeName: "Museo local",
    createdByName: "astart",
    createdAt: "21/03/2026",
    extraPhotosCount: 2,
    imageUrl: "",
    status: "rejected",
  },
  {
    id: 4,
    placeName: "Restaurante demo",
    createdByName: "Dante",
    createdAt: "20/03/2026",
    extraPhotosCount: 2,
    imageUrl: "",
    status: "in_review",
  },
  {
    id: 5,
    placeName: "Plaza bonita",
    createdByName: "Usuario",
    createdAt: "20/03/2026",
    extraPhotosCount: 5,
    imageUrl: "",
    status: "approved",
  },
  {
    id: 6,
    placeName: "Mirador test",
    createdByName: "astart",
    createdAt: "19/03/2026",
    extraPhotosCount: 4,
    imageUrl: "",
    status: "in_review",
  },
];

export default function PhotoSubmissionScreen() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [photoSubmissions, setPhotoSubmissions] = useState(
    initialPhotoSubmissions
  );

  const filteredSubmissions = useMemo(() => {
    if (selectedStatus === "all") {
      return photoSubmissions;
    }

    return photoSubmissions.filter(
      (submission) => submission.status === selectedStatus
    );
  }, [photoSubmissions, selectedStatus]);

  const loadedBatches =
    filteredSubmissions.length > 0
      ? Math.ceil(filteredSubmissions.length / PAGE_LIMIT)
      : 0;

  const handleStatusChange = (statusValue) => {
    setSelectedStatus(statusValue);
  };

  const handleApprove = (id) => {
    console.log("Aprobar submission:", id);

    // Esto solamente cambia el mock visualmente.
    setPhotoSubmissions((currentSubmissions) =>
      currentSubmissions.map((submission) => {
        if (submission.id !== id) return submission;

        return {
          ...submission,
          status: "approved",
        };
      })
    );
  };

  const handleReject = (id) => {
    console.log("Rechazar submission:", id);

    // Esto solamente cambia el mock visualmente.
    setPhotoSubmissions((currentSubmissions) =>
      currentSubmissions.map((submission) => {
        if (submission.id !== id) return submission;

        return {
          ...submission,
          status: "rejected",
        };
      })
    );
  };

  return (
    <LayoutScreen
      breadcrumbs={[
        {
          label: "Inicio",
          to: "/",
        },
        {
          label: "Propuestas de fotografías",
        },
      ]}
    >
      <main style={styles.container}>
        <header style={styles.header}>
          <div style={styles.headerInformation}>
            <h1 style={styles.title}>
              Propuestas de fotografías
            </h1>

            <p style={styles.subtitle}>
              Revisión de fotografías propuestas por los usuarios.
            </p>

            <div style={styles.summaryChips}>
              <div style={styles.summaryChip}>
                Propuestas cargadas:
                <strong>{filteredSubmissions.length}</strong>
              </div>

              <div style={styles.summaryChip}>
                Lotes cargados:
                <strong>{loadedBatches}</strong>
              </div>
            </div>
          </div>

          <div style={styles.filters}>
            {statusFilters.map((filter) => {
              const isActive =
                selectedStatus === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  style={{
                    ...styles.filterButton,
                    ...(isActive
                      ? styles.filterButtonActive
                      : {}),
                  }}
                  onClick={() =>
                    handleStatusChange(filter.value)
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </header>

        {filteredSubmissions.length > 0 ? (
          <>
            <section style={styles.grid}>
              {filteredSubmissions.map((submission) => (
                <PhotoSubmissionCard
                  key={submission.id}
                  submission={submission}
                />
              ))}
            </section>

            <div style={styles.paginationEnd}>
              Llegaste al final. Ya se cargaron todas las
              propuestas de fotografías.
            </div>
          </>
        ) : (
          <div style={styles.emptyState}>
            No hay propuestas de fotografías con este estado.
          </div>
        )}
      </main>
    </LayoutScreen>
  );
}