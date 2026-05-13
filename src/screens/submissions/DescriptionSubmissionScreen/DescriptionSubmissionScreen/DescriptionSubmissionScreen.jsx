import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";

import DescriptionSubmissionRow from "./Components/DescriptionSubmissionRow";

import { mockDescriptionSubmissions, statusFilters } from "./data";
import styles from "./styles";

export default function DescriptionSubmissionScreen() {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredDescriptions = useMemo(() => {
    if (selectedStatus === "all") return mockDescriptionSubmissions;

    return mockDescriptionSubmissions.filter(
      (description) => description.status === selectedStatus
    );
  }, [selectedStatus]);

  const handleGoToDetail = (descriptionId) => {
    navigate(`/submissions/descriptions/${descriptionId}`);
  };

  return (
    <LayoutScreen>
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
            {filteredDescriptions.length > 0 ? (
              filteredDescriptions.map((description) => (
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