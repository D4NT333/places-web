import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  CheckCircle2,
  CircleX,
  Clock3,
  Database,
  Layers3,
  ListFilter,
  LoaderCircle,
  MapPinned,
  SearchX,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import {
  getGoogleCandidatesService,
} from "../../../../services/api/googleCandidates.service";

import PlaceCandidateRow from "./Components/PlaceCandidateRow";

import styles from "./styles";

const PAGE_LIMIT = 15;

const STATUS_FILTERS = [
  {
    label: "Todos",
    value: "all",
    icon: Layers3,
    variant: "all",
  },
  {
    label: "Pendientes",
    value: "in_review",
    icon: Clock3,
    variant: "pending",
  },
  {
    label: "Aceptados",
    value: "accepted",
    icon: CheckCircle2,
    variant: "accepted",
  },
  {
    label: "Rechazados",
    value: "rejected",
    icon: CircleX,
    variant: "rejected",
  },
];

const BREADCRUMBS = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Candidatos de Google",
  },
];

function useQuery() {
  return new URLSearchParams(
    useLocation().search,
  );
}

function getStatusTitle(status) {
  const titles = {
    all:
      "Todos los candidatos encontrados",
    in_review:
      "Candidatos pendientes de revisión",
    accepted:
      "Candidatos aceptados",
    rejected:
      "Candidatos rechazados",
  };

  return (
    titles[status] ||
    "Todos los candidatos encontrados"
  );
}

function getFilterStyle(
  variant,
  isActive,
) {
  if (!isActive) {
    return {};
  }

  const variants = {
    all: styles.filterChipAllActive,
    pending:
      styles.filterChipPendingActive,
    accepted:
      styles.filterChipAcceptedActive,
    rejected:
      styles.filterChipRejectedActive,
  };

  return variants[variant] || {};
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  variant = "blue",
}) {
  const variantStyles = {
    blue: {
      card:
        styles.summaryCardBlue,
      icon:
        styles.summaryIconBlue,
      value:
        styles.summaryValueBlue,
    },

    orange: {
      card:
        styles.summaryCardOrange,
      icon:
        styles.summaryIconOrange,
      value:
        styles.summaryValueOrange,
    },

    green: {
      card:
        styles.summaryCardGreen,
      icon:
        styles.summaryIconGreen,
      value:
        styles.summaryValueGreen,
    },

    red: {
      card:
        styles.summaryCardRed,
      icon:
        styles.summaryIconRed,
      value:
        styles.summaryValueRed,
    },
  };

  const currentVariant =
    variantStyles[variant] ||
    variantStyles.blue;

  return (
    <article
      style={{
        ...styles.summaryCard,
        ...currentVariant.card,
      }}
    >
      <div
        style={{
          ...styles.summaryIcon,
          ...currentVariant.icon,
        }}
      >
        <Icon
          size={42}
          strokeWidth={2.2}
        />
      </div>

      <div style={styles.summaryContent}>
        <span style={styles.summaryLabel}>
          {label}
        </span>

        <strong
          style={{
            ...styles.summaryValue,
            ...currentVariant.value,
          }}
        >
          {value}
        </strong>
      </div>
    </article>
  );
}

export default function PlaceCandidatesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();

  const currentStatus =
    query.get("status") || "all";

  const discoverResponse =
    location.state?.discoverResponse ||
    null;

  const selectedHexId =
    location.state?.hexId || null;

  const [
    candidates,
    setCandidates,
  ] = useState([]);

  const [
    nextCursor,
    setNextCursor,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(false);

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

  const isValidStatus = useMemo(
    () =>
      STATUS_FILTERS.some(
        (filter) =>
          filter.value ===
          currentStatus,
      ),
    [
      currentStatus,
    ],
  );

  const counters = useMemo(
    () => ({
      total:
        candidates.length,

      pending:
        candidates.filter(
          (item) =>
            item.status ===
            "in_review",
        ).length,

      accepted:
        candidates.filter(
          (item) =>
            item.status ===
            "accepted",
        ).length,

      rejected:
        candidates.filter(
          (item) =>
            item.status ===
            "rejected",
        ).length,
    }),
    [
      candidates,
    ],
  );

  const loadCandidates = async ({
    reset = false,
  } = {}) => {
    if (
      loading ||
      loadingMore
    ) {
      return;
    }

    if (
      !reset &&
      !hasMore
    ) {
      return;
    }

    try {
      if (reset) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      setErrorMessage("");

      const data =
        await getGoogleCandidatesService({
          status:
            currentStatus,

          limit:
            PAGE_LIMIT,

          cursor:
            reset
              ? null
              : nextCursor,
        });

      const newItems =
        data.items || [];

      const newCursor =
        data.nextCursor || null;

      setCandidates(
        (previousCandidates) => {
          if (reset) {
            return newItems;
          }

          return [
            ...previousCandidates,

            ...newItems.filter(
              (newItem) =>
                !previousCandidates.some(
                  (currentItem) =>
                    currentItem.id ===
                    newItem.id,
                ),
            ),
          ];
        },
      );

      setNextCursor(
        newCursor,
      );

      setHasMore(
        Boolean(data.hasMore) &&
          Boolean(newCursor),
      );
    } catch (error) {
      console.error(
        "Error cargando candidatos:",
        error,
      );

      setErrorMessage(
        error.message ||
          "No se pudieron cargar los candidatos.",
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (!isValidStatus) {
      navigate(
        "/management/place-registration/candidates?status=all",
        {
          replace: true,

          state: {
            hexId:
              selectedHexId,

            discoverResponse,
          },
        },
      );

      return;
    }

    setCandidates([]);
    setNextCursor(null);
    setHasMore(true);
    setErrorMessage("");

    loadCandidates({
      reset: true,
    });
  }, [
    currentStatus,
    isValidStatus,
  ]);

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
            !loading &&
            !loadingMore
          ) {
            loadCandidates({
              reset: false,
            });
          }
        },
        {
          root: null,
          rootMargin: "220px",
          threshold: 0.1,
        },
      );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [
    nextCursor,
    hasMore,
    loading,
    loadingMore,
    currentStatus,
  ]);

  function handleStatusChange(
    statusValue,
  ) {
    navigate(
      `/management/place-registration/candidates?status=${statusValue}`,
      {
        state: {
          hexId:
            selectedHexId,

          discoverResponse,
        },
      },
    );
  }

  function handleOpenDetail(
    candidate,
  ) {
    navigate(
      `/management/place-registration/candidates/${candidate.id}`,
      {
        state: {
          candidate,

          hexId:
            candidate.parentHexId ||
            selectedHexId,

          discoverResponse,
        },
      },
    );
  }

  return (
    <LayoutScreen
      breadcrumbs={BREADCRUMBS}
      padding="0"
      maxWidth="100%"
      scroll
      fullHeight
      showHeader
      showSidebar
      showFooter
      stickyHeader
    >
      <main style={styles.screen}>
        <section style={styles.topBar}>
          <div style={styles.headerBlock}>
            <div style={styles.titleLine}>
              <div style={styles.titleIcon}>
                <MapPinned
                  size={60}
                  strokeWidth={2.15}
                />
              </div>

              <div>
                <h1 style={styles.title}>
                  Candidatos de Google
                </h1>

                <p style={styles.subtitle}>
                  {getStatusTitle(
                    currentStatus,
                  )}
                </p>
              </div>
            </div>
          </div>

          <div style={styles.filtersWrapper}>
            {STATUS_FILTERS.map(
              (filter) => {
                const Icon =
                  filter.icon;

                const isActive =
                  currentStatus ===
                  filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    style={{
                      ...styles.filterChip,

                      ...getFilterStyle(
                        filter.variant,
                        isActive,
                      ),
                    }}
                    onClick={() =>
                      handleStatusChange(
                        filter.value,
                      )
                    }
                  >
                    <Icon
                      size={38}
                      strokeWidth={2.2}
                    />

                    {filter.label}
                  </button>
                );
              },
            )}
          </div>
        </section>

        <section style={styles.summarySection}>
          <SummaryCard
            icon={Database}
            label="Mostrando"
            value={counters.total}
            variant="blue"
          />

          <SummaryCard
            icon={Clock3}
            label="Pendientes"
            value={counters.pending}
            variant="orange"
          />

          <SummaryCard
            icon={CheckCircle2}
            label="Aceptados"
            value={counters.accepted}
            variant="green"
          />

          <SummaryCard
            icon={CircleX}
            label="Rechazados"
            value={counters.rejected}
            variant="red"
          />

          <article style={styles.zoneCard}>
            <div style={styles.zoneIcon}>
              <MapPinned
                size={42}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.zoneContent}>
              <span style={styles.zoneLabel}>
                Zona consultada
              </span>

              <strong style={styles.zoneValue}>
                {selectedHexId ||
                  "Sin zona disponible"}
              </strong>
            </div>
          </article>
        </section>

        <section style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <div style={styles.headerName}>
              NOMBRE
            </div>

            <div style={styles.headerAddress}>
              DIRECCIÓN
            </div>

            <div style={styles.headerType}>
              TIPO DE GOOGLE
            </div>

            <div style={styles.headerStatus}>
              ESTADO
            </div>

            <div
              aria-label="Abrir detalle"
              style={styles.headerAction}
            />
          </div>

          <div style={styles.rowsWrapper}>
            {loading ? (
              <div style={styles.stateContainer}>
                <div style={styles.loadingStateIcon}>
                  <LoaderCircle
                    size={48}
                    strokeWidth={2.15}
                  />
                </div>

                <strong style={styles.stateTitle}>
                  Cargando candidatos
                </strong>

                <span style={styles.stateDescription}>
                  Consultando los lugares disponibles
                  para este filtro.
                </span>
              </div>
            ) : errorMessage ? (
              <div style={styles.stateContainer}>
                <div style={styles.errorStateIcon}>
                  <CircleX
                    size={48}
                    strokeWidth={2.15}
                  />
                </div>

                <strong style={styles.stateTitle}>
                  No fue posible cargar los candidatos
                </strong>

                <span style={styles.stateDescription}>
                  {errorMessage}
                </span>

                <button
                  type="button"
                  style={styles.retryButton}
                  onClick={() =>
                    loadCandidates({
                      reset: true,
                    })
                  }
                >
                  Volver a intentar
                </button>
              </div>
            ) : candidates.length > 0 ? (
              candidates.map(
                (candidate) => (
                  <PlaceCandidateRow
                    key={candidate.id}
                    item={candidate}
                    onClick={() =>
                      handleOpenDetail(
                        candidate,
                      )
                    }
                  />
                ),
              )
            ) : (
              <div style={styles.stateContainer}>
                <div style={styles.emptyStateIcon}>
                  <SearchX
                    size={50}
                    strokeWidth={2.15}
                  />
                </div>

                <strong style={styles.stateTitle}>
                  No hay candidatos
                </strong>

                <span style={styles.stateDescription}>
                  No existen candidatos que coincidan
                  con el estado seleccionado.
                </span>
              </div>
            )}
          </div>
        </section>

        <div
          ref={loadMoreRef}
          style={styles.loadMoreTrap}
        />

        {loadingMore && (
          <div style={styles.paginationHint}>
            <LoaderCircle
              size={27}
              strokeWidth={2.2}
            />

            <span>
              Cargando más candidatos...
            </span>
          </div>
        )}

        {!loading &&
          !loadingMore &&
          !hasMore &&
          candidates.length > 0 && (
            <div style={styles.completedMessage}>
              <CheckCircle2
                size={32}
                strokeWidth={2.2}
              />

              <span>
                Se cargaron todos los candidatos.
              </span>
            </div>
          )}
      </main>
    </LayoutScreen>
  );
}