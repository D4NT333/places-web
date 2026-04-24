import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import LayoutScreen from "../../../layout";
import styles from "./styles";
import PlaceSubmissionRow from "./Components/PlaceSubmissionRow";
import placeSubmissionsMock from "./services/placeSubmissionMock";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getStatusTitle(status) {
  const map = {
    todas: "Todas las propuestas de lugares",
    aprobado: "Lugares aprobados",
    pendiente: "Lugares pendientes",
    rechazado: "Lugares rechazados",
  };

  return map[status] || "Todas las propuestas de lugares";
}

export default function PlaceSubmissionScreen() {
  const query = useQuery();
  const currentStatus = query.get("status") || "todas";

  const filteredSubmissions = useMemo(() => {
    if (currentStatus === "todas") {
      return placeSubmissionsMock;
    }

    return placeSubmissionsMock.filter(
      (item) => item.status === currentStatus
    );
  }, [currentStatus]);

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <div style={styles.headerBlock}>
          <h1 style={styles.title}>Submissions de lugares</h1>
          <p style={styles.subtitle}>{getStatusTitle(currentStatus)}</p>
        </div>

        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <div style={styles.headerPlace}>Lugar</div>
            <div style={styles.headerDate}>Creado el</div>
            <div style={styles.headerUser}>Usuario</div>
            <div style={styles.headerUserPhoto}>Foto usuario</div>
            <div style={styles.headerStatus}>Estado</div>
          </div>

          <div style={styles.rowsWrapper}>
            {filteredSubmissions.length > 0 ? (
              filteredSubmissions.map((item) => (
                <PlaceSubmissionRow key={item.id} item={item} />
              ))
            ) : (
              <div style={styles.emptyState}>
                No hay submissions para este estado.
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutScreen>
  );
}