import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import PlaceSubmissionRow from "./Components/PlaceSubmissionRow";
import getPlaceSubmissionsService from "../../../../services/submissions/getPlaceSubmissions.service";

const PAGE_LIMIT = 15;
const CACHE_TTL_MS = 2 * 60 * 1000;

const submissionsCache = new Map();

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
    label: "Corregidas",
    value: "resubmitted",
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
    resubmitted: "Lugares corregidos",
    returned: "Lugares devueltos",
    rejected: "Lugares rechazados",
  };

  return map[status] || "Todas las propuestas de lugares";
}

function getCacheKey(status) {
  return `place-submissions:${status}`;
}

function isCacheValid(cacheEntry) {
  if (!cacheEntry) return false;

  return Date.now() - cacheEntry.savedAt < CACHE_TTL_MS;
}

export default function PlaceSubmissionScreen() {
  const navigate = useNavigate();
  const query = useQuery();

  const currentStatus = query.get("status") || "all";

  const [submissions, setSubmissions] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadMoreRef = useRef(null);

  const isValidStatus = useMemo(() => {
    return statusFilters.some((filter) => filter.value === currentStatus);
  }, [currentStatus]);

  const saveCache = ({ items, cursor, more }) => {
    const cacheKey = getCacheKey(currentStatus);

    submissionsCache.set(cacheKey, {
      items,
      nextCursor: cursor,
      hasMore: more,
      savedAt: Date.now(),
    });
  };

  const loadSubmissions = async ({ reset = false } = {}) => {
    if (loading || loadingMore) return;
    if (!reset && !hasMore) return;

    try {
      if (reset) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setErrorMessage("");

      const data = await getPlaceSubmissionsService({
        status: currentStatus,
        limit: PAGE_LIMIT,
        cursor: reset ? null : nextCursor,
      });

      const newItems = data.items || [];
      const newCursor = data.nextCursor || null;

      setSubmissions((prev) => {
        const mergedItems = reset
          ? newItems
          : [
              ...prev,
              ...newItems.filter(
                (newItem) =>
                  !prev.some((currentItem) => currentItem.id === newItem.id)
              ),
            ];

        const newHasMore = Boolean(newCursor) && newItems.length > 0;

        saveCache({
          items: mergedItems,
          cursor: newCursor,
          more: newHasMore,
        });

        return mergedItems;
      });

      setNextCursor(newCursor);

      if (!newCursor || newItems.length === 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error cargando submissions:", error);
      setErrorMessage(
        error.message || "No se pudieron cargar las submissions."
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (!isValidStatus) {
      navigate("/submissions/places?status=all", { replace: true });
      return;
    }

    const cacheKey = getCacheKey(currentStatus);
    const cachedData = submissionsCache.get(cacheKey);

    if (isCacheValid(cachedData)) {
      console.log("Usando cache:", cacheKey);

      setSubmissions(cachedData.items || []);
      setNextCursor(cachedData.nextCursor || null);
      setHasMore(cachedData.hasMore ?? true);
      setErrorMessage("");
      return;
    }

    setSubmissions([]);
    setNextCursor(null);
    setHasMore(true);

    loadSubmissions({ reset: true });
  }, [currentStatus, isValidStatus, navigate]);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && hasMore && !loading && !loadingMore) {
          loadSubmissions({ reset: false });
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

        <div ref={loadMoreRef} style={styles.loadMoreTrap} />

        {loadingMore && (
          <div style={styles.paginationHint}>
            Cargando más submissions...
          </div>
        )}

        {!loading && !loadingMore && !hasMore && submissions.length > 0 && (
          <div style={styles.paginationHint}>
            No hay más submissions.
          </div>
        )}
      </div>
    </LayoutScreen>
  );
}