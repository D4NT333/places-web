import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  CheckCircle2,
  LoaderCircle,
  LockKeyhole,
  MapPinned,
  Maximize2,
  Minimize2,
  Search,
  ShieldCheck,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import H3PlaceSelectionMap from "./Components/H3PlaceSelectionMap";

import {
  discoverGoogleCandidatesService,
  getGoogleCandidatesSummaryService,
} from "../../../../services/api/googleCandidates.service";

import {
  getAdminMeService,
} from "../../../../services/auth/getAdminMe.service";

import styles from "./styles";

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Agregar lugares por zona",
  },
];

export default function SelectZoneScreen() {
  const navigate = useNavigate();

  const [
    selectedHexId,
    setSelectedHexId,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    checkingPending,
    setCheckingPending,
  ] = useState(true);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  const [
    adminUser,
    setAdminUser,
  ] = useState(null);

  const [
    isMapExpanded,
    setIsMapExpanded,
  ] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function initializeScreen() {
      try {
        setCheckingPending(true);
        setErrorMessage("");

        const [
          admin,
          summary,
        ] = await Promise.all([
          getAdminMeService(),
          getGoogleCandidatesSummaryService(),
        ]);

        if (!isMounted) {
          return;
        }

        setAdminUser(admin);

        if (
          summary.hasPendingCandidates
        ) {
          navigate(
            "/management/place-registration/candidates?status=in_review",
            {
              replace: true,

              state: {
                redirectedReason:
                  "pending_candidates",
              },
            },
          );
        }
      } catch (error) {
        if (!isMounted) {
          return;
        }

        console.error(
          "Error inicializando selección de zona:",
          error,
        );

        setErrorMessage(
          error.message ||
            "No fue posible comprobar los candidatos disponibles.",
        );
      } finally {
        if (isMounted) {
          setCheckingPending(false);
        }
      }
    }

    initializeScreen();

    return () => {
      isMounted = false;
    };
  }, [
    navigate,
  ]);

  useEffect(() => {
    if (!isMapExpanded) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMapExpanded(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    isMapExpanded,
  ]);

  const isSuperAdmin =
    adminUser?.isActive === true &&
    adminUser?.role ===
      "super_admin";

  function handleHexClick(hexId) {
    setSelectedHexId(hexId);
    setErrorMessage("");

    console.log(
      "Hex seleccionado:",
      hexId,
    );
  }

  function handleToggleMapSize() {
    setIsMapExpanded(
      (currentValue) =>
        !currentValue,
    );
  }

  async function handleConfirmZone() {
    if (
      !isSuperAdmin ||
      !selectedHexId ||
      loading
    ) {
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const response =
        await discoverGoogleCandidatesService(
          selectedHexId,
        );

      navigate(
        "/management/place-registration/candidates?status=in_review",
        {
          state: {
            hexId:
              selectedHexId,

            discoverResponse:
              response,
          },
        },
      );
    } catch (error) {
      console.error(
        "Error importando candidatos:",
        error,
      );

      setErrorMessage(
        error.message ||
          "No se pudieron importar candidatos desde Google.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (checkingPending) {
    return (
      <LayoutScreen
        breadcrumbs={breadcrumbs}
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
          <section style={styles.loadingCard}>
            <div style={styles.loadingIcon}>
              <LoaderCircle
                size={46}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.loadingContent}>
              <h1 style={styles.loadingTitle}>
                Revisando candidatos
              </h1>

              <p style={styles.loadingText}>
                Estamos comprobando si todavía
                existen lugares pendientes antes
                de mostrar la selección de zona.
              </p>
            </div>
          </section>
        </main>
      </LayoutScreen>
    );
  }

  if (!isSuperAdmin) {
    return (
      <LayoutScreen
        breadcrumbs={breadcrumbs}
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
          <section style={styles.emptyStateCard}>
            <div style={styles.emptyIconWrapper}>
              <div style={styles.emptyIcon}>
                <LockKeyhole
                  size={60}
                  strokeWidth={2.1}
                />
              </div>

              <span style={styles.adminBadge}>
                <ShieldCheck
                  size={60}
                  strokeWidth={2.2}
                />

                Acción de superadministrador
              </span>
            </div>

            <div style={styles.emptyContent}>
              <h1 style={styles.emptyTitle}>
                No hay candidatos disponibles
              </h1>

              <p style={styles.emptyDescription}>
                Actualmente no existen candidatos
                pendientes para revisar.
              </p>

              <div style={styles.emptyNotice}>
                <Search
                  size={90}
                  strokeWidth={2.15}
                />

                <div style={styles.emptyNoticeText}>
                  <strong
                    style={
                      styles.emptyNoticeTitle
                    }
                  >
                    Se requiere una nueva búsqueda
                  </strong>

                  <span>
                    La consulta de lugares por zona
                    utiliza Google Places y solo puede
                    ser ejecutada por un
                    superadministrador.
                  </span>
                </div>
              </div>

              {errorMessage && (
                <div style={styles.errorBox}>
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                style={styles.backButton}
                onClick={() =>
                  navigate("/")
                }
              >
                <ArrowLeft
                  size={50}
                  strokeWidth={2.3}
                />

                Volver al inicio
              </button>
            </div>
          </section>
        </main>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen
      breadcrumbs={breadcrumbs}
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
        <section style={styles.headerSection}>
          <div style={styles.headingBlock}>
            <div style={styles.titleLine}>
              <div style={styles.titleIcon}>
                <MapPinned
                  size={50}
                  strokeWidth={2.15}
                />
              </div>

              <div>
                <h1 style={styles.title}>
                  Agregar lugares por zona
                </h1>

                <p style={styles.subtitle}>
                  Selecciona una celda del mapa para
                  descubrir nuevos candidatos de
                  Google Places.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.permissionBadge}>
            <ShieldCheck
              size={40}
              strokeWidth={2.2}
            />

            Superadministrador
          </div>
        </section>

        {errorMessage && (
          <div style={styles.errorBox}>
            {errorMessage}
          </div>
        )}

        {isMapExpanded && (
          <div
            aria-hidden="true"
            style={styles.expandedBackdrop}
          />
        )}

        <section
          style={{
            ...styles.mapCard,

            ...(isMapExpanded
              ? styles.mapCardExpanded
              : {}),
          }}
        >
          <div style={styles.mapCardHeader}>
            <div style={styles.mapCardHeading}>
              <h2 style={styles.mapCardTitle}>
                Selección de zona
              </h2>

              <p style={styles.mapCardSubtitle}>
                Haz clic sobre uno de los hexágonos
                disponibles dentro de la ZMG.
              </p>
            </div>

            <div
              style={{
                ...styles.hexPill,

                ...(selectedHexId
                  ? styles.hexPillSelected
                  : {}),
              }}
            >
              <span style={styles.hexPillLabel}>
                HexId:
              </span>

              <span style={styles.hexPillValue}>
                {selectedHexId ||
                  "Ninguno seleccionado"}
              </span>
            </div>
          </div>

          <div
            style={{
              ...styles.mapContainer,

              ...(isMapExpanded
                ? styles.mapContainerExpanded
                : {}),
            }}
          >
            <H3PlaceSelectionMap
              selectedHexId={selectedHexId}
              onHexClick={handleHexClick}
              isExpanded={isMapExpanded}
            />
          </div>

          <div style={styles.mapFooter}>
            <div style={styles.footerLeftSection}>
              <button
                type="button"
                onClick={handleToggleMapSize}
                style={styles.expandMapButton}
                aria-label={
                  isMapExpanded
                    ? "Reducir mapa"
                    : "Ampliar mapa"
                }
                title={
                  isMapExpanded
                    ? "Reducir mapa"
                    : "Ampliar mapa"
                }
              >
                {isMapExpanded ? (
                  <Minimize2
                    size={50}
                    strokeWidth={2.25}
                  />
                ) : (
                  <Maximize2
                    size={50}
                    strokeWidth={2.25}
                  />
                )}

                {isMapExpanded
                  ? "Reducir mapa"
                  : "Ampliar mapa"}
              </button>

              <div style={styles.selectionMessage}>
                {selectedHexId ? (
                  <>
                    <CheckCircle2
                      size={50}
                      strokeWidth={2.25}
                    />

                    <span>
                      Zona seleccionada correctamente.
                      Ya puedes iniciar la búsqueda.
                    </span>
                  </>
                ) : (
                  <>
                    <MapPinned
                      size={50}
                      strokeWidth={2.2}
                    />

                    <span>
                      Selecciona un hexágono para
                      continuar.
                    </span>
                  </>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirmZone}
              disabled={
                !selectedHexId ||
                loading
              }
              style={{
                ...styles.confirmButton,

                ...((!selectedHexId ||
                  loading) &&
                  styles.confirmButtonDisabled),
              }}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={50}
                    strokeWidth={2.25}
                  />

                  Importando candidatos...
                </>
              ) : (
                <>
                  <Search
                    size={50}
                    strokeWidth={2.25}
                  />

                  Buscar candidatos
                </>
              )}
            </button>
          </div>
        </section>
      </main>
    </LayoutScreen>
  );
}