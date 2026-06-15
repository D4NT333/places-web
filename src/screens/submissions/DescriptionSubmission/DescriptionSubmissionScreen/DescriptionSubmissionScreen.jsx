import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../../layout";
import DescriptionSubmissionRow from "./Components/DescriptionSubmissionRow";

import styles from "./styles";

import getDescriptionSubmissionsService from "../../../../services/api/submissions/descriptions/read/getDescriptionSubmissions.service";

const PAGE_LIMIT = 15;
const CACHE_TTL_MS = 2 * 60 * 1000;

const descriptionsCache = new Map();

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

function getCacheKey(status) {
  return `description-submissions:${status}`;
}

function isCacheValid(cacheEntry) {
  if (!cacheEntry) return false;

  return Date.now() - cacheEntry.savedAt < CACHE_TTL_MS;
}

export default function DescriptionSubmissionScreen() {
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState("all");

  const [descriptions, setDescriptions] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [hasMore, setHasMore] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const loadMoreRef = useRef(null);
  const requestInProgressRef = useRef(false);

  const loadedBatches =
    descriptions.length > 0
      ? Math.ceil(descriptions.length / PAGE_LIMIT)
      : 0;

  const saveCache = ({
    status,
    items,
    cursor,
    more,
  }) => {
    const cacheKey = getCacheKey(status);

    descriptionsCache.set(cacheKey, {
      items,
      nextCursor: cursor,
      hasMore: more,
      savedAt: Date.now(),
    });
  };

  const loadDescriptions = async ({
    status,
    reset = false,
    silent = false,
  }) => {
    if (requestInProgressRef.current) return;
    if (!reset && !hasMore) return;

    requestInProgressRef.current = true;

    try {
      if (!silent) {
        if (reset) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
      }

      setErrorMessage("");

      const data = await getDescriptionSubmissionsService({
        status,
        limit: PAGE_LIMIT,
        cursor: reset ? null : nextCursor,
      });

      /*
       * Permite temporalmente recibir tanto:
       *
       * 1. El formato paginado:
       *    { items, nextCursor }
       *
       * 2. El arreglo anterior:
       *    [...]
       */
      const newItems = Array.isArray(data)
        ? data
        : Array.isArray(data?.items)
          ? data.items
          : [];

      const newCursor = Array.isArray(data)
        ? null
        : data?.nextCursor || null;

      setDescriptions((previousDescriptions) => {
        const mergedDescriptions = reset
          ? newItems
          : [
              ...previousDescriptions,
              ...newItems.filter(
                (newDescription) =>
                  !previousDescriptions.some(
                    (currentDescription) =>
                      currentDescription.id ===
                      newDescription.id
                  )
              ),
            ];

        const newHasMore =
          Boolean(newCursor) && newItems.length > 0;

        saveCache({
          status,
          items: mergedDescriptions,
          cursor: newCursor,
          more: newHasMore,
        });

        return mergedDescriptions;
      });

      setNextCursor(newCursor);

      const newHasMore =
        Boolean(newCursor) && newItems.length > 0;

      setHasMore(newHasMore);
    } catch (error) {
      console.error(
        "Error al cargar descripciones propuestas:",
        error
      );

      setErrorMessage(
        error?.message ||
          "No se pudieron cargar las descripciones."
      );
    } finally {
      requestInProgressRef.current = false;

      if (!silent) {
        setLoading(false);
        setLoadingMore(false);
      }
    }
  };

  /*
   * Carga inicial al cambiar de filtro.
   */
  useEffect(() => {
    const cacheKey = getCacheKey(selectedStatus);
    const cachedData = descriptionsCache.get(cacheKey);

    setErrorMessage("");

    if (isCacheValid(cachedData)) {
      setDescriptions(cachedData.items || []);
      setNextCursor(cachedData.nextCursor || null);
      setHasMore(cachedData.hasMore ?? false);
      setLoading(false);

      /*
       * Refresca silenciosamente la primera página.
       */
      loadDescriptions({
        status: selectedStatus,
        reset: true,
        silent: true,
      });

      return;
    }

    setDescriptions([]);
    setNextCursor(null);
    setHasMore(true);

    loadDescriptions({
      status: selectedStatus,
      reset: true,
    });
  }, [selectedStatus]);

  /*
   * Paginado automático.
   */
  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (
          firstEntry.isIntersecting &&
          hasMore &&
          nextCursor &&
          !loading &&
          !loadingMore &&
          !requestInProgressRef.current
        ) {
          loadDescriptions({
            status: selectedStatus,
            reset: false,
          });
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
  }, [
    selectedStatus,
    nextCursor,
    hasMore,
    loading,
    loadingMore,
  ]);

  const handleStatusChange = (statusValue) => {
    if (statusValue === selectedStatus) return;

    setSelectedStatus(statusValue);
  };

  const handleGoToDetail = (descriptionId) => {
    navigate(
      `/submissions/descriptions/${descriptionId}`
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
          label: "Propuestas de descripciones",
        },
      ]}
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>
              Descripciones agregadas
            </h1>

            <p style={styles.subtitle}>
              Revisión de descripciones propuestas por los
              usuarios.
            </p>

            <div style={styles.summaryChips}>
              <div style={styles.summaryChip}>
                Descripciones cargadas{" "}
                <strong>{descriptions.length}</strong>
              </div>

              <div style={styles.summaryChip}>
                <strong>{loadedBatches}</strong>{" "}
                {loadedBatches === 1
                  ? "lote cargado"
                  : "lotes cargados"}
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
        </div>

        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <div style={styles.placeColumn}>
              Lugar
            </div>

            <div style={styles.dateColumn}>
              Creado el
            </div>

            <div style={styles.previewColumn}>
              Preview
            </div>

            <div style={styles.statusColumn}>
              Estado
            </div>
          </div>

          <div style={styles.tableBody}>
            {loading ? (
              <div style={styles.emptyState}>
                Cargando descripciones...
              </div>
            ) : errorMessage ? (
              <div style={styles.errorState}>
                {errorMessage}
              </div>
            ) : descriptions.length > 0 ? (
              descriptions.map((description) => (
                <DescriptionSubmissionRow
                  key={description.id}
                  description={description}
                  onClick={() =>
                    handleGoToDetail(description.id)
                  }
                />
              ))
            ) : (
              <div style={styles.emptyState}>
                No hay descripciones con este estado.
              </div>
            )}
          </div>
        </div>

        <div
          ref={loadMoreRef}
          style={styles.loadMoreTrap}
        />

        {loadingMore && (
          <div style={styles.paginationHint}>
            Cargando más descripciones...
          </div>
        )}

        {!loading &&
          !loadingMore &&
          !hasMore &&
          descriptions.length > 0 && (
            <div style={styles.paginationEnd}>
              Llegaste al final. Ya se cargaron todas las
              descripciones.
            </div>
          )}
      </div>
    </LayoutScreen>
  );
}