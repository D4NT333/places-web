import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  AlertCircle,
  CheckCircle2,
  Database,
  Layers3,
  LoaderCircle,
  MapPinned,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import LayoutScreen from "../../../layout";

import PlaceRow from "./Components/PlaceRow";
import PlaceStatusFilters from "./Components/PlaceStatusFilters";

import getAdminPlacesService from "../../../services/api/administration/places/getAdminPlaces.service";

import styles from "./styles";

const PAGE_LIMIT = 15;

const LOAD_MORE_TRIGGER_PERCENTAGE =
  0.8;

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Administrar lugares",
  },
];

export default function AdministrationPlaceScreen() {
  const navigate =
    useNavigate();

  const loadMoreTriggerRef =
    useRef(null);

  const requestInProgressRef =
    useRef(false);

  const [
    moderationStatus,
    setModerationStatus,
  ] = useState(
    "all",
  );

  const [
    activityStatus,
    setActivityStatus,
  ] = useState(
    "all",
  );

  const [
    places,
    setPlaces,
  ] = useState([]);

  const [
    nextCursor,
    setNextCursor,
  ] = useState(null);

  const [
    hasMore,
    setHasMore,
  ] = useState(false);

  const [
    loadedBatchesCount,
    setLoadedBatchesCount,
  ] = useState(0);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    loadingMore,
    setLoadingMore,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  const loadedPlacesCount =
    places.length;

  const loadMoreTriggerIndex =
    useMemo(() => {
      if (
        loadedPlacesCount ===
        0
      ) {
        return -1;
      }

      return Math.max(
        0,
        Math.ceil(
          loadedPlacesCount *
            LOAD_MORE_TRIGGER_PERCENTAGE,
        ) - 1,
      );
    }, [
      loadedPlacesCount,
    ]);

  const loadPlaces =
    useCallback(
      async ({
        reset = false,
        cursor = null,
      } = {}) => {
        if (
          requestInProgressRef
            .current
        ) {
          return;
        }

        if (
          !reset &&
          (
            !hasMore ||
            !cursor
          )
        ) {
          return;
        }

        try {
          requestInProgressRef
            .current =
            true;

          setErrorMessage("");

          if (reset) {
            setLoading(true);
          } else {
            setLoadingMore(true);
          }

          const result =
            await getAdminPlacesService({
              limit:
                PAGE_LIMIT,

              cursor:
                reset
                  ? null
                  : cursor,

              moderationStatus,

              activityStatus,
            });

          const newPlaces =
            Array.isArray(
              result?.places,
            )
              ? result.places
              : [];

          if (reset) {
            setPlaces(
              newPlaces,
            );

            setLoadedBatchesCount(
              newPlaces.length >
                0
                ? 1
                : 0,
            );
          } else {
            setPlaces(
              (
                currentPlaces,
              ) => {
                const existingIds =
                  new Set(
                    currentPlaces.map(
                      (
                        place,
                      ) =>
                        place.id ||
                        place.placeId,
                    ),
                  );

                const uniqueNewPlaces =
                  newPlaces.filter(
                    (
                      place,
                    ) => {
                      const placeId =
                        place.id ||
                        place.placeId;

                      return (
                        placeId &&
                        !existingIds.has(
                          placeId,
                        )
                      );
                    },
                  );

                return [
                  ...currentPlaces,
                  ...uniqueNewPlaces,
                ];
              },
            );

            if (
              newPlaces.length >
              0
            ) {
              setLoadedBatchesCount(
                (
                  currentCount,
                ) =>
                  currentCount +
                  1,
              );
            }
          }

          setNextCursor(
            result?.nextCursor ||
              null,
          );

          setHasMore(
            Boolean(
              result?.hasMore &&
              result?.nextCursor,
            ),
          );
        } catch (error) {
          console.error(
            "Error cargando lugares:",
            error,
          );

          setErrorMessage(
            error.message ||
              "No se pudieron cargar los lugares.",
          );

          if (reset) {
            setPlaces([]);
            setNextCursor(null);
            setHasMore(false);
            setLoadedBatchesCount(
              0,
            );
          }
        } finally {
          requestInProgressRef
            .current =
            false;

          setLoading(false);
          setLoadingMore(false);
        }
      },
      [
        moderationStatus,
        activityStatus,
        hasMore,
      ],
    );

  useEffect(() => {
    setPlaces([]);
    setNextCursor(null);
    setHasMore(false);
    setLoadedBatchesCount(
      0,
    );

    loadPlaces({
      reset:
        true,
    });
  }, [
    moderationStatus,
    activityStatus,
  ]);

  useEffect(() => {
    const triggerElement =
      loadMoreTriggerRef
        .current;

    if (
      !triggerElement ||
      loading ||
      loadingMore ||
      !hasMore ||
      !nextCursor
    ) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        (
          entries,
        ) => {
          const firstEntry =
            entries[0];

          if (
            !firstEntry
              ?.isIntersecting ||
            requestInProgressRef
              .current
          ) {
            return;
          }

          loadPlaces({
            reset:
              false,

            cursor:
              nextCursor,
          });
        },
        {
          root:
            null,

          threshold:
            0.1,
        },
      );

    observer.observe(
      triggerElement,
    );

    return () => {
      observer.disconnect();
    };
  }, [
    loadMoreTriggerIndex,
    loadedPlacesCount,
    loading,
    loadingMore,
    hasMore,
    nextCursor,
    loadPlaces,
  ]);

  const summaryBatchesCount =
    useMemo(() => {
      if (
        loadedPlacesCount ===
        0
      ) {
        return 0;
      }

      return loadedBatchesCount;
    }, [
      loadedPlacesCount,
      loadedBatchesCount,
    ]);

  function handleChangeModerationStatus(
    newStatus,
  ) {
    setModerationStatus(
      newStatus,
    );
  }

  function handleChangeActivityStatus(
    newStatus,
  ) {
    setActivityStatus(
      newStatus,
    );
  }

  function handleSelectPlace(
    place,
  ) {
    const selectedPlaceId =
      place.id ||
      place.placeId;

    if (
      !selectedPlaceId
    ) {
      console.warn(
        "El lugar no tiene id:",
        place,
      );

      return;
    }

    navigate(
      `/administration/places/${selectedPlaceId}`,
    );
  }

  return (
    <LayoutScreen
      breadcrumbs={
        breadcrumbs
      }
    >
      <main
        style={
          styles.container
        }
      >
        <section
          style={
            styles.toolbar
          }
        >
          <header
            style={
              styles.headerBlock
            }
          >
            <div
              style={
                styles.titleRow
              }
            >
              <div
                style={
                  styles.titleIcon
                }
              >
                <MapPinned
                  size={50}
                  strokeWidth={
                    2.15
                  }
                />
              </div>

              <div
                style={
                  styles.titleContent
                }
              >
                <h1
                  style={
                    styles.title
                  }
                >
                  Administrar
                  lugares
                </h1>

                <p
                  style={
                    styles.subtitle
                  }
                >
                  Consulta, filtra y
                  revisa los lugares
                  publicados dentro
                  de Lsearch.
                </p>
              </div>
            </div>

            <div
              style={
                styles.summaryCardsRow
              }
            >
              <article
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
                    size={50}
                    strokeWidth={
                      2.1
                    }
                  />
                </div>

                <div
                  style={
                    styles.summaryContent
                  }
                >
                  <span
                    style={
                      styles.summaryLabel
                    }
                  >
                    Lugares
                    cargados
                  </span>

                  <strong
                    style={
                      styles.summaryValueBlue
                    }
                  >
                    {
                      loadedPlacesCount
                    }
                  </strong>
                </div>
              </article>

              <article
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
                    size={50}
                    strokeWidth={
                      2.1
                    }
                  />
                </div>

                <div
                  style={
                    styles.summaryContent
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
                    {
                      summaryBatchesCount
                    }
                  </strong>
                </div>
              </article>
            </div>
          </header>

          <PlaceStatusFilters
            moderationStatus={
              moderationStatus
            }
            activityStatus={
              activityStatus
            }
            onChangeModerationStatus={
              handleChangeModerationStatus
            }
            onChangeActivityStatus={
              handleChangeActivityStatus
            }
          />
        </section>

        {errorMessage ? (
          <div
            style={
              styles.errorBox
            }
          >
            <div
              style={
                styles.errorIcon
              }
            >
              <AlertCircle
                size={50}
                strokeWidth={
                  2.2
                }
              />
            </div>

            <span>
              {
                errorMessage
              }
            </span>
          </div>
        ) : null}

        <section
          style={
            styles.table
          }
        >
          <div
            style={
              styles.tableHeader
            }
          >
            <div
              style={
                styles.nameHeader
              }
            >
              Lugar
            </div>

            <div>
              Fuente
            </div>

            <div>
              Fecha de creación
            </div>

            <div>
              Creado por
            </div>

            <div>
              Aceptado por
            </div>

            <div>
              Actividad
            </div>

            <div>
              Moderación
            </div>
          </div>

          <div
            style={
              styles.tableBody
            }
          >
            {loading ? (
              <div
                style={
                  styles.stateContainer
                }
              >
                <div
                  style={
                    styles.stateIcon
                  }
                >
                  <LoaderCircle
                    size={50}
                    strokeWidth={
                      2
                    }
                  />
                </div>

                <strong
                  style={
                    styles.stateTitle
                  }
                >
                  Cargando lugares
                </strong>

                <span
                  style={
                    styles.stateText
                  }
                >
                  Obteniendo los
                  lugares
                  registrados.
                </span>
              </div>
            ) : places.length ===
              0 ? (
              <div
                style={
                  styles.stateContainer
                }
              >
                <div
                  style={
                    styles.stateIcon
                  }
                >
                  <MapPinned
                    size={50}
                    strokeWidth={
                      2
                    }
                  />
                </div>

                <strong
                  style={
                    styles.stateTitle
                  }
                >
                  No hay lugares
                </strong>

                <span
                  style={
                    styles.stateText
                  }
                >
                  No se encontraron
                  lugares con los
                  filtros
                  seleccionados.
                </span>
              </div>
            ) : (
              places.map(
                (
                  place,
                  index,
                ) => {
                  const placeId =
                    place.id ||
                    place.placeId;

                  const isLoadMoreTrigger =
                    index ===
                    loadMoreTriggerIndex;

                  return (
                    <div
                      key={
                        placeId
                      }
                      ref={
                        isLoadMoreTrigger
                          ? loadMoreTriggerRef
                          : null
                      }
                    >
                      <PlaceRow
                        place={
                          place
                        }
                        onSelect={
                          handleSelectPlace
                        }
                      />
                    </div>
                  );
                },
              )
            )}

            {loadingMore ? (
              <div
                style={
                  styles.loadingMore
                }
              >
                <LoaderCircle
                  size={50}
                  strokeWidth={
                    2.1
                  }
                />

                Cargando los
                siguientes 15
                lugares...
              </div>
            ) : null}

            {!loading &&
            !loadingMore &&
            places.length > 0 &&
            !hasMore ? (
              <div
                style={
                  styles.endMessage
                }
              >
                <CheckCircle2
                  size={50}
                  strokeWidth={
                    2.1
                  }
                />

                Se cargaron todos
                los lugares.
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </LayoutScreen>
  );
}