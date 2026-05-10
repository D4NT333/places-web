import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import PlaceCandidateRow from "./Components/PlaceCandidateRow";

import { getGoogleCandidatesService } from "../../../../services/api/googleCandidates.service";

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
    label: "Aceptadas",
    value: "accepted",
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

  const [candidates, setCandidates] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadMoreRef = useRef(null);

  const isValidStatus = useMemo(() => {
    return statusFilters.some((filter) => filter.value === currentStatus);
  }, [currentStatus]);

  const counters = useMemo(() => {
    return {
      total: candidates.length,
      pending: candidates.filter((item) => item.status === "in_review").length,
      accepted: candidates.filter((item) => item.status === "accepted").length,
      rejected: candidates.filter((item) => item.status === "rejected").length,
    };
  }, [candidates]);

  const loadCandidates = async ({ reset = false } = {}) => {
    if (loading || loadingMore) return;
    if (!reset && !hasMore) return;

    try {
      if (reset) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setErrorMessage("");

      const data = await getGoogleCandidatesService({
        status: currentStatus,
        limit: PAGE_LIMIT,
        cursor: reset ? null : nextCursor,
      });

      const newItems = data.items || [];
      const newCursor = data.nextCursor || null;

      setCandidates((prev) => {
        if (reset) return newItems;

        return [
          ...prev,
          ...newItems.filter(
            (newItem) =>
              !prev.some((currentItem) => currentItem.id === newItem.id)
          ),
        ];
      });

      setNextCursor(newCursor);
      setHasMore(Boolean(data.hasMore) && Boolean(newCursor));
    } catch (error) {
      console.error("Error cargando candidatos:", error);
      setErrorMessage(
        error.message || "No se pudieron cargar los candidatos."
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (!isValidStatus) {
      navigate("/management/place-registration/candidates?status=all", {
        replace: true,
        state: {
          hexId: selectedHexId,
          discoverResponse,
        },
      });
      return;
    }

    setCandidates([]);
    setNextCursor(null);
    setHasMore(true);
    setErrorMessage("");

    loadCandidates({ reset: true });
  }, [currentStatus, isValidStatus]);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasMore && !loading && !loadingMore) {
          loadCandidates({ reset: false });
        }
      },
      {
        root: null,
        rootMargin: "220px",
        threshold: 0.1,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [nextCursor, hasMore, loading, loadingMore, currentStatus]);

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
        hexId: candidate.parentHexId || selectedHexId,
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
                <strong>Mostrando:</strong> {candidates.length}
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
            {loading ? (
              <div style={styles.emptyState}>Cargando candidatos...</div>
            ) : errorMessage ? (
              <div style={styles.emptyState}>{errorMessage}</div>
            ) : candidates.length > 0 ? (
              candidates.map((candidate) => (
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

        <div ref={loadMoreRef} style={styles.loadMoreTrap} />

        {loadingMore && (
          <div style={styles.paginationHint}>
            Cargando más candidatos...
          </div>
        )}

        {!loading && !loadingMore && !hasMore && candidates.length > 0 && (
          <div style={styles.paginationHint}>
            No hay más candidatos.
          </div>
        )}
      </div>
    </LayoutScreen>
  );
}