import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  CheckCircle2,
  CircleAlert,
  Clock3,
  Database,
  Images,
  Inbox,
  Layers3,
  LoaderCircle,
  RotateCw,
  XCircle,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import LayoutScreen from "../../../../layout/Layout";
import PhotoSubmissionCard from "./Components/PhotoSubmissionCard";

import getPhotoSubmissionsService from "../../../../services/api/submissions/photo/read/getPhotoSubmissions.service";

import styles from "./styles";

const PAGE_LIMIT = 15;

const EMPTY_PAGINATION = {
  limit: PAGE_LIMIT,
  hasMore: false,
  nextCursor: null,
};

const statusFilters = [
  {
    label: "Todas",
    value: "all",
    icon: Layers3,
    tone: "blue",
  },
  {
    label: "Pendientes",
    value: "in_review",
    icon: Clock3,
    tone: "orange",
  },
  {
    label: "Aprobadas",
    value: "approved",
    icon: CheckCircle2,
    tone: "green",
  },
  {
    label: "Rechazadas",
    value: "rejected",
    icon: XCircle,
    tone: "red",
  },
];

function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "No se pudieron cargar las propuestas de fotografías."
  );
}

function getFilterIconStyle(tone) {
  if (tone === "green") {
    return styles.filterIconGreen;
  }

  if (tone === "orange") {
    return styles.filterIconOrange;
  }

  if (tone === "red") {
    return styles.filterIconRed;
  }

  return styles.filterIconBlue;
}

export default function PhotoSubmissionScreen() {
  const navigate = useNavigate();
  const requestIdRef = useRef(0);

  const [
    selectedStatus,
    setSelectedStatus,
  ] = useState("all");

  const [
    photoSubmissions,
    setPhotoSubmissions,
  ] = useState([]);

  const [
    pagination,
    setPagination,
  ] = useState(EMPTY_PAGINATION);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    loadingMore,
    setLoadingMore,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const loadedBatches = useMemo(() => {
    if (
      photoSubmissions.length === 0
    ) {
      return 0;
    }

    return Math.ceil(
      photoSubmissions.length /
        PAGE_LIMIT
    );
  }, [photoSubmissions.length]);

  const loadFirstPage =
    useCallback(async () => {
      const requestId =
        ++requestIdRef.current;

      setLoading(true);
      setLoadingMore(false);
      setError("");
      setPhotoSubmissions([]);
      setPagination(
        EMPTY_PAGINATION
      );

      try {
        const result =
          await getPhotoSubmissionsService({
            status:
              selectedStatus,

            limit:
              PAGE_LIMIT,
          });

        /*
         * Evita que una respuesta anterior sobrescriba
         * los datos si el usuario cambia rápidamente
         * entre filtros.
         */
        if (
          requestId !==
          requestIdRef.current
        ) {
          return;
        }

        setPhotoSubmissions(
          result.submissions
        );

        setPagination(
          result.pagination
        );
      } catch (requestError) {
        if (
          requestId !==
          requestIdRef.current
        ) {
          return;
        }

        console.error(
          "Error cargando propuestas de fotografías:",
          requestError
        );

        setError(
          getErrorMessage(
            requestError
          )
        );
      } finally {
        if (
          requestId ===
          requestIdRef.current
        ) {
          setLoading(false);
        }
      }
    }, [selectedStatus]);

  useEffect(() => {
    loadFirstPage();

    return () => {
      /*
       * Invalida una petición pendiente si
       * cambia el filtro o se desmonta la vista.
       */
      requestIdRef.current += 1;
    };
  }, [loadFirstPage]);

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

  /*
   * Abre la pantalla de detalle y manda
   * temporalmente toda la propuesta por state.
   *
   * Más adelante el detalle podrá consultar
   * nuevamente la propuesta usando submissionId.
   */
  const handleOpenSubmission =
    useCallback(
      (submission) => {
        const submissionId =
          submission?.submissionId ||
          submission?.id;

        if (!submissionId) {
          console.error(
            "La propuesta no tiene un identificador válido:",
            submission
          );

          return;
        }

        navigate(
          `/submissions/photos/${encodeURIComponent(
            submissionId
          )}`,
          {
            state: {
              submission,
              selectedStatus,
            },
          }
        );
      },
      [
        navigate,
        selectedStatus,
      ]
    );

  const handleLoadMore =
    async () => {
      if (
        loading ||
        loadingMore ||
        !pagination.hasMore ||
        !pagination.nextCursor
      ) {
        return;
      }

      /*
       * Guardamos el ID de la consulta actual.
       * Si cambia el filtro, loadFirstPage genera
       * un ID diferente y esta respuesta se ignora.
       */
      const requestId =
        requestIdRef.current;

      setLoadingMore(true);
      setError("");

      try {
        const result =
          await getPhotoSubmissionsService({
            status:
              selectedStatus,

            limit:
              PAGE_LIMIT,

            cursor:
              pagination.nextCursor,
          });

        if (
          requestId !==
          requestIdRef.current
        ) {
          return;
        }

        setPhotoSubmissions(
          (
            currentSubmissions
          ) => {
            const submissionsById =
              new Map(
                currentSubmissions.map(
                  (submission) => [
                    submission.id,
                    submission,
                  ]
                )
              );

            result.submissions.forEach(
              (submission) => {
                submissionsById.set(
                  submission.id,
                  submission
                );
              }
            );

            return Array.from(
              submissionsById.values()
            );
          }
        );

        setPagination(
          result.pagination
        );
      } catch (requestError) {
        if (
          requestId !==
          requestIdRef.current
        ) {
          return;
        }

        console.error(
          "Error cargando más propuestas de fotografías:",
          requestError
        );

        setError(
          getErrorMessage(
            requestError
          )
        );
      } finally {
        if (
          requestId ===
          requestIdRef.current
        ) {
          setLoadingMore(false);
        }
      }
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
            "Propuestas de fotografías",
        },
      ]}
    >
      <main style={styles.container}>
        <header style={styles.header}>
          <div
            style={
              styles.headerInformation
            }
          >
            <div style={styles.titleRow}>
              <div style={styles.titleIconBox}>
                <Images
                  size={40}
                  strokeWidth={2.2}
                />
              </div>

              <div>
                <h1 style={styles.title}>
                  Propuestas de fotografías
                </h1>

                <p style={styles.subtitle}>
                  Revisa las fotografías propuestas por los usuarios
                  antes de incorporarlas a los lugares.
                </p>
              </div>
            </div>

            <div
              style={
                styles.summaryCards
              }
            >
              <div
                style={
                  styles.summaryCard
                }
              >
                <div
                  style={
                    styles.summaryIconBlue
                  }
                >
                  <Database
                    size={40}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={
                    styles.summaryInformation
                  }
                >
                  <span
                    style={
                      styles.summaryLabel
                    }
                  >
                    Propuestas cargadas
                  </span>

                  <strong
                    style={
                      styles.summaryValueBlue
                    }
                  >
                    {
                      photoSubmissions.length
                    }
                  </strong>
                </div>
              </div>

              <div
                style={
                  styles.summaryCard
                }
              >
                <div
                  style={
                    styles.summaryIconGreen
                  }
                >
                  <Layers3
                    size={40}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={
                    styles.summaryInformation
                  }
                >
                  <span
                    style={
                      styles.summaryLabel
                    }
                  >
                    Lotes cargados
                  </span>

                  <strong
                    style={
                      styles.summaryValueGreen
                    }
                  >
                    {loadedBatches}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.filters}>
            {statusFilters.map(
              (filter) => {
                const isActive =
                  selectedStatus ===
                  filter.value;

                const FilterIcon =
                  filter.icon;

                return (
                  <button
                    key={
                      filter.value
                    }
                    type="button"
                    style={{
                      ...styles.filterButton,
                      ...(isActive
                        ? styles.filterButtonActive
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
                      strokeWidth={2.3}
                      style={
                        isActive
                          ? styles.filterIconActive
                          : getFilterIconStyle(
                              filter.tone
                            )
                      }
                    />

                    <span>
                      {filter.label}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </header>

        {loading ? (
          <section
            style={
              styles.feedbackCard
            }
          >
            <div
              style={
                styles.feedbackIconBlue
              }
            >
              <LoaderCircle
                size={42}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h2
                style={
                  styles.feedbackTitle
                }
              >
                Cargando propuestas
              </h2>

              <p
                style={
                  styles.feedbackText
                }
              >
                Estamos obteniendo las fotografías enviadas por los
                usuarios.
              </p>
            </div>
          </section>
        ) : error &&
          photoSubmissions.length ===
            0 ? (
          <section
            style={
              styles.feedbackCard
            }
          >
            <div
              style={
                styles.feedbackIconRed
              }
            >
              <CircleAlert
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div
              style={
                styles.feedbackContent
              }
            >
              <h2
                style={
                  styles.feedbackTitle
                }
              >
                No se pudieron cargar las propuestas
              </h2>

              <p
                style={
                  styles.feedbackText
                }
              >
                {error}
              </p>

              <button
                type="button"
                style={
                  styles.retryButton
                }
                onClick={
                  loadFirstPage
                }
              >
                <RotateCw
                  size={40}
                  strokeWidth={2.3}
                />

                Reintentar
              </button>
            </div>
          </section>
        ) : photoSubmissions.length >
          0 ? (
          <>
            <section
              style={styles.grid}
            >
              {photoSubmissions.map(
                (
                  submission,
                  index
                ) => {
                  const submissionId =
                    submission
                      ?.submissionId ||
                    submission?.id;

                  const cardKey =
                    submissionId ||
                    `photo-submission-${index}`;

                  return (
                    <div
                      key={cardKey}
                      style={
                        styles.cardNavigation
                      }
                      role="button"
                      tabIndex={0}
                      aria-label={`Abrir propuesta de fotografías de ${
                        submission
                          ?.placeName ||
                        "lugar"
                      }`}
                      onClick={() =>
                        handleOpenSubmission(
                          submission
                        )
                      }
                      onKeyDown={(
                        event
                      ) => {
                        if (
                          event.key ===
                            "Enter" ||
                          event.key ===
                            " "
                        ) {
                          event.preventDefault();

                          handleOpenSubmission(
                            submission
                          );
                        }
                      }}
                    >
                      <PhotoSubmissionCard
                        submission={
                          submission
                        }
                      />
                    </div>
                  );
                }
              )}
            </section>

            {error ? (
              <section
                style={
                  styles.inlineError
                }
              >
                <CircleAlert
                  size={40}
                  strokeWidth={2.3}
                />

                <span>{error}</span>
              </section>
            ) : null}

            {pagination.hasMore ? (
              <div
                style={
                  styles.paginationActions
                }
              >
                <button
                  type="button"
                  style={{
                    ...styles.loadMoreButton,
                    ...(loadingMore
                      ? styles.loadMoreButtonDisabled
                      : {}),
                  }}
                  disabled={
                    loadingMore
                  }
                  onClick={
                    handleLoadMore
                  }
                >
                  {loadingMore ? (
                    <LoaderCircle
                      size={21}
                      strokeWidth={2.2}
                    />
                  ) : (
                    <Images
                      size={21}
                      strokeWidth={2.2}
                    />
                  )}

                  {loadingMore
                    ? "Cargando..."
                    : "Cargar más propuestas"}
                </button>
              </div>
            ) : (
              <div
                style={
                  styles.paginationEnd
                }
              >
                <CheckCircle2
                  size={40}
                  strokeWidth={2.4}
                />

                <span>
                  Se cargaron todas las propuestas de fotografías.
                </span>
              </div>
            )}
          </>
        ) : (
          <section
            style={
              styles.feedbackCard
            }
          >
            <div
              style={
                styles.feedbackIconBlue
              }
            >
              <Inbox
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h2
                style={
                  styles.feedbackTitle
                }
              >
                No hay propuestas
              </h2>

              <p
                style={
                  styles.feedbackText
                }
              >
                No hay propuestas de fotografías con el estado
                seleccionado.
              </p>
            </div>
          </section>
        )}
      </main>
    </LayoutScreen>
  );
}