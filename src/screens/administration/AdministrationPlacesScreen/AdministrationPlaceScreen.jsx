import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../layout";

import PlaceRow from "./Components/PlaceRow";
import PlaceStatusFilters from "./Components/PlaceStatusFilters";

import getAdminPlacesService from "../../../services/api/administration/places/getAdminPlaces.service";

import styles from "./styles";

const PAGE_LIMIT = 15;

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
  const navigate = useNavigate();

  const [moderationStatus, setModerationStatus] = useState("all");
  const [activityStatus, setActivityStatus] = useState("all");

  const [places, setPlaces] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const [loadedBatchesCount, setLoadedBatchesCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadedPlacesCount = places.length;

  const loadPlaces = useCallback(
    async ({ reset = false } = {}) => {
      if (reset) {
        setLoading(true);
      } else {
        if (loadingMore || !hasMore || !nextCursor) {
          return;
        }

        setLoadingMore(true);
      }

      try {
        setErrorMessage("");

        const result = await getAdminPlacesService({
          limit: PAGE_LIMIT,
          cursor: reset ? null : nextCursor,
          moderationStatus,
          activityStatus,
        });

        const newPlaces = Array.isArray(result.places)
          ? result.places
          : [];

        if (reset) {
          setPlaces(newPlaces);
          setLoadedBatchesCount(1);
        } else {
          setPlaces((currentPlaces) => [
            ...currentPlaces,
            ...newPlaces,
          ]);

          setLoadedBatchesCount((currentCount) => currentCount + 1);
        }

        setNextCursor(result.nextCursor || null);
        setHasMore(Boolean(result.hasMore));
      } catch (error) {
        console.error("Error cargando lugares:", error);

        setErrorMessage(
          error.message || "No se pudieron cargar los lugares."
        );

        if (reset) {
          setPlaces([]);
          setNextCursor(null);
          setHasMore(false);
          setLoadedBatchesCount(0);
        }
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [
      moderationStatus,
      activityStatus,
      nextCursor,
      hasMore,
      loadingMore,
    ]
  );

  useEffect(() => {
    loadPlaces({ reset: true });
  }, [moderationStatus, activityStatus]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || loadingMore || !hasMore) {
        return;
      }

      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const viewportHeight = window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      const scrollProgress =
        (scrollTop + viewportHeight) / documentHeight;

      if (scrollProgress >= 0.8) {
        loadPlaces();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadPlaces, loading, loadingMore, hasMore]);

  const summaryBatchesCount = useMemo(() => {
    if (loadedPlacesCount === 0) {
      return 0;
    }

    return loadedBatchesCount;
  }, [loadedPlacesCount, loadedBatchesCount]);

  const handleChangeModerationStatus = (newStatus) => {
    setModerationStatus(newStatus);
    setNextCursor(null);
    setHasMore(false);
  };

  const handleChangeActivityStatus = (newStatus) => {
    setActivityStatus(newStatus);
    setNextCursor(null);
    setHasMore(false);
  };

  const handleSelectPlace = (place) => {
    const selectedPlaceId = place.id || place.placeId;

    if (!selectedPlaceId) {
      console.warn("El lugar no tiene id:", place);
      return;
    }

    navigate(`/administration/places/${selectedPlaceId}`);
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <section style={styles.toolbar}>
          <header style={styles.headerBlock}>
            <h1 style={styles.title}>
              Administrar lugares
            </h1>

            <p style={styles.subtitle}>
              Consulta, filtra y revisa los lugares publicados dentro de
              Lsearch.
            </p>

            <div style={styles.summaryChipsRow}>
              <span style={styles.summaryChip}>
                Lugares cargados {loadedPlacesCount}
              </span>

              <span style={styles.summaryChip}>
                Lotes cargados {summaryBatchesCount}
              </span>
            </div>
          </header>

          <PlaceStatusFilters
            moderationStatus={moderationStatus}
            activityStatus={activityStatus}
            onChangeModerationStatus={handleChangeModerationStatus}
            onChangeActivityStatus={handleChangeActivityStatus}
          />
        </section>

        {errorMessage && (
          <p
            style={{
              margin: "0 0 16px",
              color: "#991b1b",
              fontWeight: 600,
            }}
          >
            {errorMessage}
          </p>
        )}

        <section style={styles.table}>
          <div style={styles.tableHeader}>
            <div style={{ textAlign: "left" }}>Nombre</div>
            <div>Fuente</div>
            <div>Fecha de creación</div>
            <div>Creado por</div>
            <div>Aceptado por</div>
            <div>Estado de actividad</div>
            <div>Estado de moderación</div>
          </div>

          <div style={styles.tableBody}>
            {loading ? (
              <div
                style={{
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                Cargando lugares...
              </div>
            ) : places.length === 0 ? (
              <div
                style={{
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                No se encontraron lugares con estos filtros.
              </div>
            ) : (
              places.map((place) => (
                <PlaceRow
                  key={place.id || place.placeId}
                  place={place}
                  onSelect={handleSelectPlace}
                />
              ))
            )}

            {loadingMore && (
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                Cargando más lugares...
              </div>
            )}
          </div>
        </section>
      </main>
    </LayoutScreen>
  );
}