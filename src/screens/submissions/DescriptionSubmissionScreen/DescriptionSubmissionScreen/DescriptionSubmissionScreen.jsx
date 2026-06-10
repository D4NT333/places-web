import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";

import DescriptionSubmissionRow from "./Components/DescriptionSubmissionRow";

import styles from "./styles";

import getDescriptionSubmissionsService from "../../../../services/api/submissions/descriptions/read/getDescriptionSubmissions.service";

const statusFilters = [
  {
    label: "Todas",
    value: "all",
  },
  {
    label: "Pendientes",
    value: "pending",
  },
  {
    label: "Aceptadas",
    value: "accepted",
  },
  {
    label: "Rechazadas",
    value: "rejected",
  },
];

export default function DescriptionSubmissionScreen() {
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState("all");
  const [descriptions, setDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDescriptions = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getDescriptionSubmissionsService(selectedStatus);

      setDescriptions(data);
    } catch (error) {
      console.error("Error al cargar descripciones propuestas:", error);
      setDescriptions([]);
    } finally {
      setLoading(false);
    }
  }, [selectedStatus]);

  useEffect(() => {
    loadDescriptions();
  }, [loadDescriptions]);

  const handleGoToDetail = (descriptionId) => {
    navigate(`/submissions/descriptions/${descriptionId}`);
  };

  return (
  <LayoutScreen
    breadcrumbs={[
      { label: "Inicio", to: "/" },
      { label: "Propuestas de descripciones" },
    ]}
  >
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Descripciones agregadas</h1>
            <p style={styles.subtitle}>
              Revisión de descripciones propuestas por los usuarios.
            </p>
          </div>

          <div style={styles.filters}>
            {statusFilters.map((filter) => {
              const isActive = selectedStatus === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  style={{
                    ...styles.filterButton,
                    ...(isActive ? styles.filterButtonActive : {}),
                  }}
                  onClick={() => setSelectedStatus(filter.value)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <div style={styles.placeColumn}>Lugar</div>
            <div style={styles.dateColumn}>Creado el</div>
            <div style={styles.previewColumn}>Preview</div>
            <div style={styles.statusColumn}>Estado</div>
          </div>

          <div style={styles.tableBody}>
            {loading ? (
              <div style={styles.emptyState}>Cargando descripciones...</div>
            ) : descriptions.length > 0 ? (
              descriptions.map((description) => (
                <DescriptionSubmissionRow
                  key={description.id}
                  description={description}
                  onClick={() => handleGoToDetail(description.id)}
                />
              ))
            ) : (
              <div style={styles.emptyState}>
                No hay descripciones con este estado.
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutScreen>
  );
}