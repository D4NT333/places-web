import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutScreen from "../../../layout";
import styles from "./styles";
import PlaceSubmissionRow from "./Components/PlaceSubmissionRow";
import getPlaceSubmissionsService from "../../../services/submissions/getPlaceSubmissions.service";

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
    label: "Devueltas",
    value: "returned",
  },
  {
    label: "Rechazadas",
    value: "rejected",
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getStatusTitle(status) {
  const map = {
    all: "Todas las propuestas de lugares",
    in_review: "Lugares pendientes de revisión",
    approved: "Lugares aprobados",
    returned: "Lugares devueltos",
    rejected: "Lugares rechazados",
  };

  return map[status] || "Todas las propuestas de lugares";
}

export default function PlaceSubmissionScreen() {
  const navigate = useNavigate();
  const query = useQuery();

  const currentStatus = query.get("status") || "all";

  const [submissions, setSubmissions] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidStatus = useMemo(() => {
    return statusFilters.some((filter) => filter.value === currentStatus);
  }, [currentStatus]);

  useEffect(() => {
    if (!isValidStatus) {
      navigate("/submissions/places?status=all", { replace: true });
      return;
    }

    async function loadSubmissions() {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getPlaceSubmissionsService({
          status: currentStatus,
          limit: 15,
        });

        console.log("Submissions recibidas en web:", data);

        setSubmissions(data.items || []);
        setNextCursor(data.nextCursor || null);
      } catch (error) {
        console.error("Error cargando submissions:", error);
        setErrorMessage(
          error.message || "No se pudieron cargar las submissions."
        );
      } finally {
        setLoading(false);
      }
    }

    loadSubmissions();
  }, [currentStatus, isValidStatus, navigate]);

  const handleStatusChange = (statusValue) => {
    navigate(`/submissions/places?status=${statusValue}`);
  };

  const handleOpenDetail = (submissionId) => {
  navigate(`/submissions/places/${submissionId}`);
  };

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={styles.headerBlock}>
            <h1 style={styles.title}>Submissions de lugares</h1>
            <p style={styles.subtitle}>{getStatusTitle(currentStatus)}</p>
          </div>

          <div style={styles.filtersWrapper}>
            {statusFilters.map((filter) => {
              const isActive = currentStatus === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  style={{
                    ...styles.filterChip,
                    ...(isActive ? styles.filterChipActive : {}),
                  }}
                  onClick={() => handleStatusChange(filter.value)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
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
        {loading ? (
          <div style={styles.emptyState}>Cargando submissions...</div>
        ) : errorMessage ? (
          <div style={styles.emptyState}>{errorMessage}</div>
        ) : submissions.length > 0 ? (
          submissions.map((item) => (
            <PlaceSubmissionRow
              key={item.id}
              item={item}
              onClick={() => handleOpenDetail(item.id)}
            />
          ))
        ) : (
          <div style={styles.emptyState}>
            No hay submissions para este estado.
          </div>
        )}
      </div>
        </div>

        {nextCursor && !loading && (
          <div style={styles.paginationHint}>
            Hay más submissions disponibles.
          </div>
        )}
      </div>
    </LayoutScreen>
  );
}