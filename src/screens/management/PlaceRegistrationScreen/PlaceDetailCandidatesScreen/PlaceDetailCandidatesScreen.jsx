import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ArrowLeft,
  CheckCircle2,
  CircleX,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import CandidateMediaPanel from "./Components/CandidateMediaPanel";
import CandidateReviewPanel from "./Components/CandidateReviewPanel";

import {
  getCreateFiltersCatalogService,
} from "../../../../services/api/filtersCatalog.service";

import {
  getGoogleCandidateDetailsService,
} from "../../../../services/api/googleCandidates.service";

import {
  registerPlaceFromCandidateService,
} from "../../../../services/api/registerPlaceFromCandidate.service";

import styles from "./styles";

const genericDescriptions = [
  {
    id: "generic_food",
    label: "Descripción gastronómica",
    text:
      "Lugar ideal para disfrutar una experiencia gastronómica agradable, con una propuesta pensada para quienes buscan descubrir nuevos espacios dentro de la ciudad.",
  },
  {
    id: "generic_local",
    label: "Descripción local",
    text:
      "Espacio local recomendado para quienes desean conocer opciones cercanas, explorar la zona y encontrar lugares con identidad propia.",
  },
  {
    id: "generic_general",
    label: "Descripción general",
    text:
      "Lugar ubicado dentro de la zona seleccionada, disponible para ser revisado y clasificado dentro de Lsearch según sus características principales.",
  },
];

function formatDate(value) {
  if (!value) {
    return "Sin fecha";
  }

  try {
    return new Intl.DateTimeFormat(
      "es-MX",
      {
        dateStyle: "medium",
        timeStyle: "short",
      },
    ).format(
      new Date(value),
    );
  } catch {
    return "Sin fecha";
  }
}

function getStatusLabel(status) {
  const labels = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return (
    labels[status] ||
    "Pendiente"
  );
}

function getStatusStyles(status) {
  const variants = {
    in_review:
      styles.statusPending,

    accepted:
      styles.statusAccepted,

    rejected:
      styles.statusRejected,
  };

  return (
    variants[status] ||
    styles.statusPending
  );
}

function getStatusIcon(status) {
  if (status === "accepted") {
    return CheckCircle2;
  }

  if (status === "rejected") {
    return CircleX;
  }

  return ShieldCheck;
}

export default function PlaceDetailCandidatesScreen() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const {
    candidateId,
  } = useParams();

  const candidateFromState =
    location.state?.candidate ||
    null;

  const hexId =
    location.state?.hexId ||
    candidateFromState?.parentHexId ||
    null;

  const googlePlaceId =
    candidateFromState?.googlePlaceId ||
    candidateFromState?.id ||
    candidateId;

  const [
    googleDetails,
    setGoogleDetails,
  ] = useState(null);

  const [
    detailsLoading,
    setDetailsLoading,
  ] = useState(false);

  const [
    detailsError,
    setDetailsError,
  ] = useState("");

  const candidate =
    useMemo(
      () => ({
        id:
          candidateFromState?.id ||
          googlePlaceId,

        googlePlaceId,

        name:
          googleDetails?.name ||
          candidateFromState?.name ||
          "Sin nombre",

        address:
          googleDetails?.address ||
          candidateFromState?.address ||
          "Sin dirección",

        googleMainType:
          googleDetails?.googleMainType ||
          candidateFromState?.googleMainType ||
          "Sin tipo",

        types:
          googleDetails?.types ||
          candidateFromState?.types ||
          [],

        status:
          candidateFromState?.status ||
          "in_review",

        importedAt:
          candidateFromState?.createdAt ||
          candidateFromState?.importedAt ||
          null,

        parentHexId:
          candidateFromState?.parentHexId ||
          hexId,

        location:
          googleDetails?.location ||
          candidateFromState?.location ||
          null,

        rating:
          googleDetails?.rating ??
          null,

        userRatingCount:
          googleDetails?.userRatingCount ??
          null,

        priceLevel:
          googleDetails?.priceLevel ||
          null,

        googleMapsUri:
          googleDetails?.googleMapsUri ||
          null,

        openingHours:
          googleDetails?.openingHours ||
          null,

        photos:
          googleDetails?.photos ||
          [],
      }),
      [
        candidateFromState,
        googleDetails,
        googlePlaceId,
        hexId,
      ],
    );

  const [
    status,
    setStatus,
  ] = useState(
    candidate.status ||
      "in_review",
  );

  const [
    name,
    setName,
  ] = useState(
    candidate.name ||
      "",
  );

  const [
    description,
    setDescription,
  ] = useState("");

  const [
    selectedTag,
    setSelectedTag,
  ] = useState("");

  const [
    selectedSubtags,
    setSelectedSubtags,
  ] = useState([]);

  const [
    selectedApproach,
    setSelectedApproach,
  ] = useState("");

  const [
    selectedPrice,
    setSelectedPrice,
  ] = useState("");

  const [
    selectedSchedule,
    setSelectedSchedule,
  ] = useState("");

  const [
    catalogLoading,
    setCatalogLoading,
  ] = useState(false);

  const [
    catalogError,
    setCatalogError,
  ] = useState("");

  const [
    catalog,
    setCatalog,
  ] = useState({
    selectedTagId: null,
    selectedTag: null,
    tags: [],
    subtags: [],
    approaches: [],
    priceConfig: null,
  });

  const importedAtLabel =
    useMemo(
      () =>
        formatDate(
          candidate.importedAt,
        ),
      [
        candidate.importedAt,
      ],
    );

  const breadcrumbs =
    useMemo(
      () => [
        {
          label: "Inicio",
          to: "/",
        },
        {
          label:
            "Candidatos de Google",
          to:
            "/management/place-registration/candidates",
        },
        {
          label:
            "Detalle del candidato",
        },
      ],
      [],
    );

  useEffect(() => {
    async function loadGoogleDetails() {
      if (!googlePlaceId) {
        setDetailsError(
          "No se encontró el Google Place ID del candidato.",
        );

        return;
      }

      try {
        setDetailsLoading(true);
        setDetailsError("");

        const data =
          await getGoogleCandidateDetailsService(
            googlePlaceId,
          );

        setGoogleDetails(
          data,
        );
      } catch (error) {
        console.error(
          "Error cargando detalles de Google:",
          error,
        );

        setDetailsError(
          error.message ||
            "No se pudieron cargar los detalles del candidato.",
        );
      } finally {
        setDetailsLoading(false);
      }
    }

    loadGoogleDetails();
  }, [
    googlePlaceId,
  ]);

  useEffect(() => {
    setStatus(
      candidate.status ||
        "in_review",
    );

    setName(
      candidate.name ||
        "",
    );
  }, [
    candidate.status,
    candidate.name,
  ]);

  async function loadFiltersCatalog(
    tagId = null,
  ) {
    try {
      setCatalogLoading(true);
      setCatalogError("");

      const data =
        await getCreateFiltersCatalogService(
          tagId,
        );

      setCatalog(
        data,
      );

      if (
        data.selectedTagId
      ) {
        setSelectedTag(
          data.selectedTagId,
        );
      }

      setSelectedSubtags([]);
      setSelectedApproach("");
      setSelectedPrice("");
    } catch (error) {
      console.error(
        "Error cargando catálogo de filtros:",
        error,
      );

      setCatalogError(
        error.message ||
          "No se pudo cargar el catálogo.",
      );
    } finally {
      setCatalogLoading(false);
    }
  }

  useEffect(() => {
    loadFiltersCatalog();
  }, []);

  function handleSelectDescription(
    descriptionText,
  ) {
    setDescription(
      descriptionText,
    );
  }

  async function handleSelectTag(
    tagId,
  ) {
    await loadFiltersCatalog(
      tagId,
    );
  }

  function handleToggleSubtag(
    subtag,
  ) {
    setSelectedSubtags(
      (previousSubtags) => {
        if (
          previousSubtags.includes(
            subtag,
          )
        ) {
          return previousSubtags.filter(
            (item) =>
              item !== subtag,
          );
        }

        return [
          ...previousSubtags,
          subtag,
        ];
      },
    );
  }

  function handleReject() {
    setStatus(
      "rejected",
    );

    console.log(
      "Candidato rechazado:",
      candidateId,
    );
  }

  async function handleAccept() {
    if (!candidateId) {
      alert(
        "No se encontró el ID del candidato.",
      );

      return;
    }

    if (
      !candidate.googlePlaceId
    ) {
      alert(
        "No se encontró el Google Place ID.",
      );

      return;
    }

    if (!name.trim()) {
      alert(
        "El nombre del lugar es obligatorio.",
      );

      return;
    }

    if (
      !description.trim()
    ) {
      alert(
        "La descripción es obligatoria.",
      );

      return;
    }

    if (!selectedTag) {
      alert(
        "Selecciona una etiqueta principal.",
      );

      return;
    }

    if (
      !selectedSubtags.length
    ) {
      alert(
        "Selecciona al menos una subetiqueta.",
      );

      return;
    }

    if (
      !selectedApproach
    ) {
      alert(
        "Selecciona un enfoque.",
      );

      return;
    }

    if (
      !selectedPrice
    ) {
      alert(
        "Selecciona un precio.",
      );

      return;
    }

    try {
      setStatus(
        "accepted",
      );

      const payload = {
        candidateId,

        googlePlaceId:
          candidate.googlePlaceId,

        source: "google",
        status: "published",

        name:
          name.trim(),

        description:
          description.trim(),

        address:
          candidate.address ||
          "",

        location:
          candidate.location ||
          null,

        parentHexId:
          candidate.parentHexId ||
          null,

        tagId:
          selectedTag,

        subtags:
          selectedSubtags,

        approaches:
          selectedApproach
            ? [
                selectedApproach,
              ]
            : [],

        price:
          selectedPrice,

        schedule:
          selectedSchedule ||
          null,

        googleData: {
          googleMainType:
            candidate.googleMainType ||
            null,

          types:
            candidate.types ||
            [],

          rating:
            candidate.rating ??
            null,

          userRatingCount:
            candidate.userRatingCount ??
            null,

          priceLevel:
            candidate.priceLevel ||
            null,

          googleMapsUri:
            candidate.googleMapsUri ||
            null,

          openingHours:
            candidate.openingHours ||
            null,
        },

        photos:
          candidate.photos ||
          [],
      };

      console.log(
        "Payload enviado al backend:",
        payload,
      );

      const result =
        await registerPlaceFromCandidateService(
          payload,
        );

      console.log(
        "Lugar creado:",
        result,
      );

      alert(
        "Lugar registrado correctamente.",
      );

      navigate(
        "/management/place-registration/candidates",
        {
          state: {
            hexId,
          },
        },
      );
    } catch (error) {
      console.error(
        "Error aceptando candidato:",
        error,
      );

      setStatus(
        candidate.status ||
          "in_review",
      );

      alert(
        error.message ||
          "No se pudo aceptar el candidato.",
      );
    }
  }

  function handleBack() {
    navigate(
      "/management/place-registration/candidates",
      {
        state: {
          hexId,
        },
      },
    );
  }

  const StatusIcon =
    getStatusIcon(
      status,
    );

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
        <section style={styles.header}>
          <div style={styles.headerTextBlock}>
            <div style={styles.titleLine}>
              <div style={styles.titleIcon}>
                <MapPinned
                  size={60}
                  strokeWidth={2.15}
                />
              </div>

              <div>
                <div style={styles.titleRow}>
                  <h1 style={styles.title}>
                    Detalle del candidato
                  </h1>

                  <span
                    style={{
                      ...styles.statusBadge,
                      ...getStatusStyles(
                        status,
                      ),
                    }}
                  >
                    <StatusIcon
                      size={50}
                      strokeWidth={2.3}
                    />

                    {getStatusLabel(
                      status,
                    )}
                  </span>
                </div>

                <p style={styles.subtitle}>
                  Revisa la información importada
                  desde Google y completa los datos
                  necesarios para registrar el lugar
                  en Lsearch.
                </p>
              </div>
            </div>

            {detailsError && (
              <div style={styles.errorBox}>
                <CircleX
                  size={50}
                  strokeWidth={2.2}
                />

                <span>
                  {detailsError}
                </span>
              </div>
            )}
          </div>

          <div style={styles.headerActions}>
            <button
              type="button"
              style={styles.rejectButton}
              onClick={
                handleReject
              }
            >
              <CircleX
                size={40}
                strokeWidth={2.3}
              />

              Rechazar
            </button>

            <button
              type="button"
              style={styles.acceptButton}
              onClick={
                handleAccept
              }
            >
              <CheckCircle2
                size={40}
                strokeWidth={2.3}
              />

              Aceptar candidato
            </button>
          </div>
        </section>

        <section style={styles.contentGrid}>
          <CandidateMediaPanel
            candidate={candidate}
            details={googleDetails}
            loadingDetails={
              detailsLoading
            }
            importedAtLabel={
              importedAtLabel
            }
          />

          <CandidateReviewPanel
            candidate={candidate}
            details={googleDetails}
            loadingDetails={
              detailsLoading
            }
            name={name}
            setName={setName}
            description={
              description
            }
            setDescription={
              setDescription
            }
            genericDescriptions={
              genericDescriptions
            }
            onSelectDescription={
              handleSelectDescription
            }
            selectedTag={
              selectedTag
            }
            setSelectedTag={
              handleSelectTag
            }
            selectedSubtags={
              selectedSubtags
            }
            onToggleSubtag={
              handleToggleSubtag
            }
            selectedApproach={
              selectedApproach
            }
            setSelectedApproach={
              setSelectedApproach
            }
            selectedPrice={
              selectedPrice
            }
            setSelectedPrice={
              setSelectedPrice
            }
            selectedSchedule={
              selectedSchedule
            }
            setSelectedSchedule={
              setSelectedSchedule
            }
            importedAtLabel={
              importedAtLabel
            }
            status={status}
            catalog={catalog}
            catalogLoading={
              catalogLoading
            }
            catalogError={
              catalogError
            }
          />
        </section>

        <div style={styles.footerActions}>
          <button
            type="button"
            style={styles.backButtonBottom}
            onClick={
              handleBack
            }
          >
            <ArrowLeft
              size={50}
              strokeWidth={2.3}
            />

            Volver a candidatos
          </button>
        </div>
      </main>
    </LayoutScreen>
  );
}