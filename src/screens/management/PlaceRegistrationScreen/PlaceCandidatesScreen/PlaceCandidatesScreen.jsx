import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import PlaceCandidateRow from "./Components/PlaceCandidateRow";

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
    label: "Aceptadas",
    value: "accepted",
  },
  {
    label: "Rechazadas",
    value: "rejected",
  },
];

const mockCandidates = [
  {
    id: "candidate_001",
    googlePlaceId: "ChIJ001",
    name: "Café PalReal",
    address: "C. Lope de Vega 113, Arcos Vallarta, Guadalajara",
    googleMainType: "cafe",
    status: "in_review",
  },
  {
    id: "candidate_002",
    googlePlaceId: "ChIJ002",
    name: "Digitalife",
    address: "C. Garibaldi 2410, Ladrón de Guevara, Guadalajara",
    googleMainType: "electronics_store",
    status: "in_review",
  },
  {
    id: "candidate_003",
    googlePlaceId: "ChIJ003",
    name: "TINTA CATRINA Tattoo Studio",
    address: "C. Luis Pérez Verdía 305, Ladrón de Guevara, Guadalajara",
    googleMainType: "body_art_service",
    status: "accepted",
  },
  {
    id: "candidate_004",
    googlePlaceId: "ChIJ004",
    name: "AUREA Interiorismo Urbano",
    address: "C. Luis Pérez Verdía 267, Ladrón de Guevara, Guadalajara",
    googleMainType: "corporate_office",
    status: "rejected",
  },
  {
    id: "candidate_005",
    googlePlaceId: "ChIJ005",
    name: "Mujer Consultorio de Atención Integral",
    address: "C. Luis Pérez Verdía 313, Ladrón de Guevara, Guadalajara",
    googleMainType: "doctor",
    status: "in_review",
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getStatusTitle(status) {
  const map = {
    all: "Todos los candidatos encontrados",
    in_review: "Candidatos pendientes de revisión",
    accepted: "Candidatos aceptados",
    rejected: "Candidatos rechazados",
  };

  return map[status] || "Todos los candidatos encontrados";
}

export default function PlaceCandidatesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();

  const currentStatus = query.get("status") || "all";
  const discoverResponse = location.state?.discoverResponse || null;
  const selectedHexId = location.state?.hexId || null;

  const [candidates] = useState(mockCandidates);

  const filteredCandidates = useMemo(() => {
    if (currentStatus === "all") return candidates;

    return candidates.filter((candidate) => candidate.status === currentStatus);
  }, [candidates, currentStatus]);

  const counters = useMemo(() => {
    return {
      total: candidates.length,
      pending: candidates.filter((item) => item.status === "in_review").length,
      accepted: candidates.filter((item) => item.status === "accepted").length,
      rejected: candidates.filter((item) => item.status === "rejected").length,
    };
  }, [candidates]);

  const handleStatusChange = (statusValue) => {
    navigate(`/management/place-registration/candidates?status=${statusValue}`, {
      state: {
        hexId: selectedHexId,
        discoverResponse,
      },
    });
  };

  const handleOpenDetail = (candidate) => {
    navigate(`/management/place-registration/candidates/${candidate.id}`, {
      state: {
        candidate,
        hexId: selectedHexId,
        discoverResponse,
      },
    });
  };

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={styles.headerBlock}>
            <h1 style={styles.title}>Candidatos de Google</h1>
            <p style={styles.subtitle}>{getStatusTitle(currentStatus)}</p>

            <div style={styles.summaryBox}>
              <span style={styles.summaryItem}>
                <strong>Zona:</strong> {selectedHexId || "Sin zona"}
              </span>

              <span style={styles.summaryItem}>
                <strong>Total:</strong> {counters.total}
              </span>

              <span style={styles.summaryItem}>
                <strong>Pendientes:</strong> {counters.pending}
              </span>

              <span style={styles.summaryItem}>
                <strong>Aceptados:</strong> {counters.accepted}
              </span>

              <span style={styles.summaryItem}>
                <strong>Rechazados:</strong> {counters.rejected}
              </span>
            </div>
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
            <div style={styles.headerName}>Nombre</div>
            <div style={styles.headerAddress}>Dirección</div>
            <div style={styles.headerType}>Tipo de Google</div>
            <div style={styles.headerStatus}>Estado</div>
          </div>

          <div style={styles.rowsWrapper}>
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map((candidate) => (
                <PlaceCandidateRow
                  key={candidate.id}
                  item={candidate}
                  onClick={() => handleOpenDetail(candidate)}
                />
              ))
            ) : (
              <div style={styles.emptyState}>
                No hay candidatos para este estado.
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutScreen>
  );
}