import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  AlignLeft,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  Layers3,
  ListFilter,
  XCircle,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

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
    icon: ListFilter,
  },
  {
    label: "Pendientes",
    value: "in_review",
    icon: Clock3,
  },
  {
    label: "Aprobadas",
    value: "approved",
    icon: CheckCircle2,
  },
  {
    label: "Rechazadas",
    value: "rejected",
    icon: XCircle,
  },
];

function getCacheKey(status) {
  return `description-submissions:${status}`;
}

function isCacheValid(cacheEntry) {
  if (!cacheEntry) {
    return false;
  }

  return (
    Date.now() - cacheEntry.savedAt <
    CACHE_TTL_MS
  );
}

function getTimeValue(value) {
  if (!value) {
    return 0;
  }

  const time = new Date(value).getTime();

  return Number.isNaN(time)
    ? 0
    : time;
}

function getPlaceGroupKey(description) {
  return (
    description.placeId ||
    description.placeDocId ||
    description.placeName ||
    "unknown-place"
  );
}

function getPlacePhotoUrl(description) {
  return (
    description.placeSnapshot?.mainPhotoUrl ||
    null
  );
}

function groupDescriptionsByPlace(
  descriptions = []
) {
  const groupsMap = new Map();

  descriptions.forEach((description) => {
    const placeKey =
      getPlaceGroupKey(description);

    const currentGroup =
      groupsMap.get(placeKey);

    if (currentGroup) {
      currentGroup.items.push(description);
      return;
    }

    groupsMap.set(placeKey, {
      placeKey,

      placeName:
        description.placeName ||
        description.placeSnapshot?.name ||
        "Lugar sin nombre",

      placePhotoUrl:
        getPlacePhotoUrl(description),

      items: [description],
    });
  });

  return [...groupsMap.values()].map(
    (group) => ({
      ...group,

      items: [...group.items].sort(
        (
          firstDescription,
          secondDescription
        ) =>
          getTimeValue(
            firstDescription.createdAt
          ) -
          getTimeValue(
            secondDescription.createdAt
          )
      ),
    })
  );
}

export default function DescriptionSubmissionScreen() {
  const navigate = useNavigate();

  const [
    selectedStatus,
    setSelectedStatus,
  ] = useState("all");

  const [
    descriptions,
    setDescriptions,
  ] = useState([]);

  const [
    nextCursor,
    setNextCursor,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    loadingMore,
    setLoadingMore,
  ] = useState(false);

  const [
    hasMore,
    setHasMore,
  ] = useState(true);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  const loadMoreRef = useRef(null);

  const requestInProgressRef =
    useRef(false);

  const loadedBatches =
    descriptions.length > 0
      ? Math.ceil(
          descriptions.length /
            PAGE_LIMIT
        )
      : 0;

  const groupedDescriptions =
    useMemo(() => {
      return groupDescriptionsByPlace(
        descriptions
      );
    }, [descriptions]);

  const activeFilterIndex =
    Math.max(
      statusFilters.findIndex(
        (filter) =>
          filter.value ===
          selectedStatus
      ),
      0
    );

  const saveCache = ({
    status,
    items,
    cursor,
    more,
  }) => {
    const cacheKey =
      getCacheKey(status);

    descriptionsCache.set(
      cacheKey,
      {
        items,
        nextCursor: cursor,
        hasMore: more,
        savedAt: Date.now(),
      }
    );
  };

  const loadDescriptions = async ({
    status,
    reset = false,
    silent = false,
  }) => {
    if (
      requestInProgressRef.current
    ) {
      return;
    }

    if (
      !reset &&
      !hasMore
    ) {
      return;
    }

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

      const data =
        await getDescriptionSubmissionsService({
          status,
          limit: PAGE_LIMIT,
          cursor: reset
            ? null
            : nextCursor,
        });

      const newItems =
        Array.isArray(data)
          ? data
          : Array.isArray(data?.items)
            ? data.items
            : [];

      const newCursor =
        Array.isArray(data)
          ? null
          : data?.nextCursor || null;

      setDescriptions(
        (
          previousDescriptions
        ) => {
          const mergedDescriptions =
            reset
              ? newItems
              : [
                  ...previousDescriptions,
                  ...newItems.filter(
                    (
                      newDescription
                    ) =>
                      !previousDescriptions.some(
                        (
                          currentDescription
                        ) =>
                          currentDescription.id ===
                          newDescription.id
                      )
                  ),
                ];

          const newHasMore =
            Boolean(newCursor) &&
            newItems.length > 0;

          saveCache({
            status,
            items:
              mergedDescriptions,
            cursor: newCursor,
            more: newHasMore,
          });

          return mergedDescriptions;
        }
      );

      setNextCursor(newCursor);

      const newHasMore =
        Boolean(newCursor) &&
        newItems.length > 0;

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
      requestInProgressRef.current =
        false;

      if (!silent) {
        setLoading(false);
        setLoadingMore(false);
      }
    }
  };

  useEffect(() => {
    const cacheKey =
      getCacheKey(selectedStatus);

    const cachedData =
      descriptionsCache.get(cacheKey);

    setErrorMessage("");

    if (
      isCacheValid(cachedData)
    ) {
      setDescriptions(
        cachedData.items || []
      );

      setNextCursor(
        cachedData.nextCursor ||
          null
      );

      setHasMore(
        cachedData.hasMore ??
          false
      );

      setLoading(false);

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

  useEffect(() => {
    const target =
      loadMoreRef.current;

    if (!target) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const firstEntry =
            entries[0];

          if (
            firstEntry.isIntersecting &&
            hasMore &&
            nextCursor &&
            !loading &&
            !loadingMore &&
            !requestInProgressRef.current
          ) {
            loadDescriptions({
              status:
                selectedStatus,
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

  const handleStatusChange = (
    statusValue
  ) => {
    if (
      statusValue ===
      selectedStatus
    ) {
      return;
    }

    setSelectedStatus(
      statusValue
    );
  };

  const handleGoToDetail = (
    descriptionId
  ) => {
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
          label:
            "Propuestas de descripciones",
        },
      ]}
    >
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={styles.headerBlock}>
            <h1 style={styles.title}>
              Propuestas de descripciones
            </h1>

            <p style={styles.subtitle}>
              Todas las descripciones
              propuestas por los usuarios
            </p>

            <div
              style={
                styles.loadedInfoWrapper
              }
            >
              <div
                style={
                  styles.loadedInfoCard
                }
              >
                <div
                  style={{
                    ...styles.loadedInfoIcon,
                    ...styles.loadedInfoIconBlue,
                  }}
                >
                  <FileText
                    size={40}
                    strokeWidth={2}
                  />
                </div>

                <div
                  style={
                    styles.loadedInfoContent
                  }
                >
                  <span
                    style={
                      styles.loadedInfoLabel
                    }
                  >
                    Descripciones cargadas
                  </span>

                  <strong
                    style={{
                      ...styles.loadedInfoValue,
                      color: "#2176e5",
                    }}
                  >
                    {descriptions.length}
                  </strong>
                </div>
              </div>

              <div
                style={
                  styles.loadedInfoCard
                }
              >
                <div
                  style={{
                    ...styles.loadedInfoIcon,
                    ...styles.loadedInfoIconGreen,
                  }}
                >
                  <Layers3
                    size={40}
                    strokeWidth={2}
                  />
                </div>

                <div
                  style={
                    styles.loadedInfoContent
                  }
                >
                  <span
                    style={
                      styles.loadedInfoLabel
                    }
                  >
                    Lugares agrupados
                  </span>

                  <strong
                    style={{
                      ...styles.loadedInfoValue,
                      color: "#0a9b55",
                    }}
                  >
                    {
                      groupedDescriptions.length
                    }
                  </strong>
                </div>
              </div>

              <div
                style={
                  styles.loadedInfoCard
                }
              >
                <div
                  style={{
                    ...styles.loadedInfoIcon,
                    ...styles.loadedInfoIconViolet,
                  }}
                >
                  <Database
                    size={40}
                    strokeWidth={2}
                  />
                </div>

                <div
                  style={
                    styles.loadedInfoContent
                  }
                >
                  <span
                    style={
                      styles.loadedInfoLabel
                    }
                  >
                    Lotes cargados
                  </span>

                  <strong
                    style={{
                      ...styles.loadedInfoValue,
                      color: "#7657f4",
                    }}
                  >
                    {loadedBatches}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.filtersWrapper}>
            <div
              aria-hidden="true"
              style={{
                ...styles.filterSlider,

                transform: `translateX(${
                  activeFilterIndex *
                  100
                }%)`,
              }}
            />

            {statusFilters.map(
              (filter) => {
                const isActive =
                  selectedStatus ===
                  filter.value;

                const FilterIcon =
                  filter.icon;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    style={{
                      ...styles.filterChip,

                      ...(isActive
                        ? styles.filterChipActive
                        : {}),
                    }}
                    onClick={() =>
                      handleStatusChange(
                        filter.value
                      )
                    }
                  >
                    <FilterIcon
                      size={34}
                      strokeWidth={2.2}
                      style={{
                        ...styles.filterIcon,

                        color:
                          isActive
                            ? "#ffffff"
                            : filter.value ===
                                "in_review"
                              ? "#e48600"
                              : filter.value ===
                                  "approved"
                                ? "#0a9b55"
                                : filter.value ===
                                    "rejected"
                                  ? "#e23b3b"
                                  : "#2176e5",
                      }}
                    />

                    <span>
                      {filter.label}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <div
              style={styles.placeColumn}
            >
              Lugar
            </div>

            <div
              style={styles.dateColumn}
            >
              Fecha de creación
            </div>

            <div
              style={styles.previewColumn}
            >
              Descripción propuesta
            </div>

            <div
              style={styles.statusColumn}
            >
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
            ) : groupedDescriptions.length >
              0 ? (
              groupedDescriptions.map(
                (group) => (
                  <div
                    key={group.placeKey}
                    style={
                      styles.groupWrapper
                    }
                  >
                    <div
                      style={
                        styles.groupHeader
                      }
                    >
                      {group.placePhotoUrl ? (
                        <img
                          src={
                            group.placePhotoUrl
                          }
                          alt={
                            group.placeName
                          }
                          style={
                            styles.groupImage
                          }
                          loading="lazy"
                          onError={(
                            event
                          ) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div
                          style={
                            styles.groupImageFallback
                          }
                        >
                          {group.placeName
                            .charAt(0)
                            .toUpperCase()}
                        </div>
                      )}

                      <div
                        style={
                          styles.groupContent
                        }
                      >
                        <h3
                          style={
                            styles.groupTitle
                          }
                        >
                          {group.placeName}
                        </h3>

                        <p
                          style={
                            styles.groupSubtitle
                          }
                        >
                          {
                            group.items.length
                          }{" "}
                          {group.items
                            .length === 1
                            ? "propuesta para este lugar"
                            : "propuestas para este lugar"}
                        </p>
                      </div>
                    </div>

                    <div
                      style={
                        styles.groupRows
                      }
                    >
                      {group.items.map(
                        (
                          description
                        ) => (
                          <DescriptionSubmissionRow
                            key={
                              description.id
                            }
                            description={
                              description
                            }
                            onClick={() =>
                              handleGoToDetail(
                                description.id
                              )
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                )
              )
            ) : (
              <div style={styles.emptyState}>
                No hay descripciones con
                este estado.
              </div>
            )}
          </div>
        </div>

        <div
          ref={loadMoreRef}
          style={
            styles.loadMoreTrap
          }
        />

        {loadingMore && (
          <div
            style={
              styles.paginationHint
            }
          >
            Cargando más
            descripciones...
          </div>
        )}

        {!loading &&
          !loadingMore &&
          !hasMore &&
          descriptions.length > 0 && (
            <div
              style={
                styles.paginationCompleted
              }
            >
              <CheckCircle2
                size={40}
                strokeWidth={2.3}
              />

              <span>
                Se cargaron todas las
                descripciones.
              </span>
            </div>
          )}
      </div>
    </LayoutScreen>
  );
}