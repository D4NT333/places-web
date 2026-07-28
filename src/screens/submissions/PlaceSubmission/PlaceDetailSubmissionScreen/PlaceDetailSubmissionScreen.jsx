import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  Images,
  Layers3,
  MapPin,
  PencilLine,
  RotateCcw,
  ShieldCheck,
  Tag,
  Target,
  UserRound,
  XCircle,
} from "lucide-react";

import LayoutScreen from "../../../../layout";
import styles from "./styles";

import PhotoCarousel from "./Components/PhotoCarousel";
import LocationBox from "./Components/LocationBox";
import InfoField from "./Components/InfoField";
import ActionButtons from "./Components/ActionButtons";
import RejectionModal from "./Components/RejectionModal";
import CorrectionCompareModal from "./Components/CorrectionCompareModal";
import RejectionReasonModal from "./Components/RejectionReasonModal";

import {
  ImageGalleryModal,
} from "../../../../components";

import getPlaceSubmissionDetailService from "../../../../services/api/submissions/places/read/getPlaceSubmissionDetail.service";
import getReturnedPlaceSubmissionReviewService from "../../../../services/api/submissions/places/read/getReturnedPlaceSubmissionReview.service";
import rejectPlaceSubmissionService from "../../../../services/api/submissions/places/update/rejectPlaceSubmission.service";
import approvePlaceSubmissionService from "../../../../services/api/submissions/places/update/approvePlaceSubmission.service";

function formatDate(dateString) {
  if (!dateString) return "Sin fecha";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    approved: "Aprobado",
    returned: "Devuelto",
    rejected: "Rechazado",
    resubmitted: "Corregido",
  };

  return map[status] || "Sin estado";
}

function getSnapshotSubtags(snapshot) {
  return Array.isArray(snapshot?.subtags) ? snapshot.subtags : [];
}

function getCurrentSubtags(submission) {
  return Array.isArray(submission?.subtags) ? submission.subtags : [];
}

function shouldCompareFullSubtagsList(snapshot, submission) {
  const oldSubtags = getSnapshotSubtags(snapshot);
  const newSubtags = getCurrentSubtags(submission);

  return oldSubtags.length !== newSubtags.length;
}

function getSubtagsCompareMode(snapshot, submission) {
  return shouldCompareFullSubtagsList(snapshot, submission)
    ? "full_list"
    : "by_index";
}

function getReturnedSubtagItemsFromReview(returnReview) {
  const fields = returnReview?.returnFields || returnReview?.fields || {};
  const items = Array.isArray(fields.subtags?.items)
    ? fields.subtags.items
    : [];

  return items.filter((item) => item?.selected);
}

function getSubtagsReturnMessage(returnReview, subtagIndex, subtagLabel) {
  const fields = returnReview?.returnFields || returnReview?.fields || {};
  const selectedItems = getReturnedSubtagItemsFromReview(returnReview);

  const foundItem = selectedItems.find((item) => {
    const matchesIndex = Number(item.index) === Number(subtagIndex);
    const matchesLabel = item.label === subtagLabel;

    return matchesIndex || matchesLabel;
  });

  return foundItem?.message || fields.subtags?.message || "";
}

function getFullSubtagsReturnMessage(returnReview) {
  const fields = returnReview?.returnFields || returnReview?.fields || {};
  const selectedItems = getReturnedSubtagItemsFromReview(returnReview);

  const messages = selectedItems
    .map((item) => item.message)
    .filter(Boolean);

  if (messages.length > 0) {
    return messages.join(" / ");
  }

  return fields.subtags?.message || "";
}

function DetailSection({
  title,
  helper,
  children,
  style,
  icon: Icon,
  iconTone = "blue",
}) {
  const iconToneStyle = {
    blue: styles.sectionIconBlue,
    green: styles.sectionIconGreen,
    orange: styles.sectionIconOrange,
    violet: styles.sectionIconViolet,
    red: styles.sectionIconRed,
  };

  return (
    <section
      style={{
        ...styles.detailSection,
        ...style,
      }}
    >
      <div style={styles.detailSectionHeader}>
        <div style={styles.detailSectionHeading}>
          {Icon ? (
            <div
              style={{
                ...styles.sectionIconBox,
                ...(iconToneStyle[iconTone] ||
                  styles.sectionIconBlue),
              }}
            >
              <Icon
                size={32}
                strokeWidth={2}
              />
            </div>
          ) : null}

          <h3 style={styles.detailSectionTitle}>
            {title}
          </h3>
        </div>

        {helper ? (
          <span style={styles.detailSectionHelper}>
            {helper}
          </span>
        ) : null}
      </div>

      <div style={styles.detailSectionBody}>
        {children}
      </div>
    </section>
  );
}

function SimpleValue({ value, emptyText = "Sin información" }) {
  const finalValue =
    typeof value === "string" ? value.trim() : value;

  return (
    <div style={styles.simpleValue}>
      {finalValue ? finalValue : emptyText}
    </div>
  );
}

function SimpleMutedValue({ value }) {
  return <div style={styles.simpleValueMuted}>{value}</div>;
}

export default function PlaceDetailSubmissionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { submissionId } = useParams();

  const navigationState = location.state || {};

  const cameFromUserHistory =
    navigationState.from === "user-history" &&
    Boolean(navigationState.returnTo);

  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [rejecting, setRejecting] = useState(false);
  const [accepting, setAccepting] = useState(false);

  const [returnReview, setReturnReview] = useState(null);
  const [loadingReturnReview, setLoadingReturnReview] = useState(false);
  const [activeCompareField, setActiveCompareField] = useState(null);


  const [isGalleryOpen, setIsGalleryOpen] =
  useState(false);

const [galleryIndex, setGalleryIndex] =
  useState(0);

  const [showRejectionReasonModal, setShowRejectionReasonModal] =
    useState(false);

  useEffect(() => {
    async function loadSubmissionDetail() {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getPlaceSubmissionDetailService(submissionId);

        console.log("Detalle recibido:", data);

        setSubmission(data);
      } catch (error) {
        console.error("Error cargando detalle:", error);
        setErrorMessage(
          error.message || "No se pudo cargar el detalle de la submission."
        );
      } finally {
        setLoading(false);
      }
    }

    if (submissionId) {
      loadSubmissionDetail();
    }
  }, [submissionId]);

  useEffect(() => {
    async function loadReturnReviewForResubmitted() {
      if (!submissionId) return;
      if (submission?.status !== "resubmitted") return;

      try {
        setLoadingReturnReview(true);

        const data = await getReturnedPlaceSubmissionReviewService(
          submissionId
        );

        console.log("RETURN REVIEW PARA COMPARACIÓN:", data);

        setReturnReview(data);
      } catch (error) {
        console.log("No se pudo cargar returnReview para comparación:", error);
      } finally {
        setLoadingReturnReview(false);
      }
    }

    loadReturnReviewForResubmitted();
  }, [submissionId, submission?.status]);

  const isReturned = submission?.status === "returned";
  const isResubmitted = submission?.status === "resubmitted";
  const isRejected = submission?.status === "rejected";
  const isApproved = submission?.status === "approved";


const hasProcessDates =
  Boolean(submission?.returnedAt) ||
  Boolean(submission?.resubmittedAt) ||
  Boolean(submission?.rejectedAt) ||
  Boolean(submission?.approvedAt);
  
  const returnedAtLabel = formatDate(
    submission?.returnedAt || submission?.updatedAt
  );

  const correctedAtLabel = formatDate(
    submission?.resubmittedAt || submission?.updatedAt
  );

  const rejectedAtLabel = formatDate(
    submission?.rejectedAt || submission?.updatedAt
  );

  const snapshotBeforeReturn = returnReview?.snapshotBeforeReturn || null;
  const canCompareCorrections = isResubmitted && Boolean(returnReview);

  function wasFieldReturned(returnReview, fieldKey) {
    const fields = returnReview?.returnFields || returnReview?.fields || {};

    return Boolean(fields?.[fieldKey]?.selected);
  }

  function getReturnFieldMessage(returnReview, fieldKey) {
    const fields = returnReview?.returnFields || returnReview?.fields || {};

    return fields?.[fieldKey]?.message || "";
  }

  function wasSubtagReturned(returnReview, subtagIndex, subtagLabel) {
    const fields = returnReview?.returnFields || returnReview?.fields || {};

    if (!fields.subtags?.selected) return false;

    const selectedItems = getReturnedSubtagItemsFromReview(returnReview);

    if (selectedItems.length === 0) {
      return true;
    }

    return selectedItems.some((item) => {
      const matchesIndex = Number(item.index) === Number(subtagIndex);
      const matchesLabel = item.label === subtagLabel;

      return matchesIndex || matchesLabel;
    });
  }

  const handleAcceptSubmission = async () => {
  if (accepting) return;

  const confirmed = window.confirm(
    "¿Seguro que quieres aprobar esta propuesta y publicarla como lugar?"
  );

  if (!confirmed) return;

  try {
    setAccepting(true);

    const response = await approvePlaceSubmissionService(submissionId);

    console.log("APROBACIÓN RESPONSE:", response);

    setSubmission((prev) => ({
      ...prev,
      status: "approved",
      approvedAt: new Date().toISOString(),
      createdPlaceId: response.placeId || response.createdPlaceId || null,
    }));

    alert("Propuesta aprobada y lugar publicado correctamente.");
  } catch (error) {
    console.error("Error aprobando propuesta:", error);

    alert(
      error.response?.data?.message ||
        error.message ||
        "No se pudo aprobar la propuesta."
    );
  } finally {
    setAccepting(false);
  }
};

  const handleOpenCompareModal = (fieldKey, meta = {}) => {
    if (!canCompareCorrections) return;

    if (fieldKey === "subtags") {
      if (!wasFieldReturned(returnReview, "subtags")) return;

      const compareMode = getSubtagsCompareMode(
        snapshotBeforeReturn,
        submission
      );

      if (compareMode === "by_index") {
        if (!wasSubtagReturned(returnReview, meta.index, meta.label)) return;

        setActiveCompareField({
          fieldKey,
          compareMode,
          ...meta,
        });

        return;
      }

      setActiveCompareField({
        fieldKey,
        compareMode,
      });

      return;
    }

    if (!wasFieldReturned(returnReview, fieldKey)) return;

    setActiveCompareField({
      fieldKey,
    });
  };

  const handleCloseCompareModal = () => {
    setActiveCompareField(null);
  };

  const getSubtagCorrectionClickableStyle = (subtagIndex, subtagLabel) => {
    if (!canCompareCorrections) return {};
    if (!wasSubtagReturned(returnReview, subtagIndex, subtagLabel)) return {};

    return {
      color: "#16A34A",
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: 3,
    };
  };

  const getCorrectionClickableStyle = (fieldKey) => {
    if (!canCompareCorrections) return {};
    if (!wasFieldReturned(returnReview, fieldKey)) return {};

    return {
      color: "#16A34A",
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: 3,
    };
  };

  const getCorrectionBoxStyle = (fieldKey) => {
    if (!canCompareCorrections) return {};
    if (!wasFieldReturned(returnReview, fieldKey)) return {};

    return {
      outline: "2px solid #16A34A",
      outlineOffset: 2,
      borderRadius: 8,
      cursor: "pointer",
    };
  };

  function getSnapshotSubtagValue(snapshot, subtagIndex) {
    const subtags = Array.isArray(snapshot?.subtags) ? snapshot.subtags : [];
    return subtags[subtagIndex] || "";
  }

  function getCurrentSubtagValue(submission, subtagIndex) {
    const subtags = Array.isArray(submission?.subtags)
      ? submission.subtags
      : [];

    return subtags[subtagIndex] || "";
  }

  function getSnapshotValue(snapshot, fieldKey) {
    if (!snapshot) return null;

    switch (fieldKey) {
      case "name":
        return snapshot.name || "";

      case "description":
        return snapshot.description || "";

      case "tag":
        return snapshot.tagLabel || snapshot.tag || snapshot.tagId || "";

      case "subtags":
        return Array.isArray(snapshot.subtags) ? snapshot.subtags : [];

      case "approaches":
        return Array.isArray(snapshot.approaches) ? snapshot.approaches : [];

      case "price":
        return snapshot.price || snapshot.priceLabel || "";

      case "schedule":
        return snapshot.schedule || "";

      case "location":
        return snapshot.location || null;

      case "photos":
        return Array.isArray(snapshot.photos) ? snapshot.photos : [];

      default:
        return null;
    }
  }

  function getCurrentValue(submission, fieldKey) {
    if (!submission) return null;

    switch (fieldKey) {
      case "name":
        return submission.name || "";

      case "description":
        return submission.description || "";

      case "tag":
        return submission.tagLabel || submission.tag || submission.tagId || "";

      case "subtags":
        return Array.isArray(submission.subtags) ? submission.subtags : [];

      case "approaches":
        return Array.isArray(submission.approaches)
          ? submission.approaches
          : [];

      case "price":
        return submission.price || submission.priceLabel || "";

      case "schedule":
        return submission.schedule || "";

      case "location":
        return submission.location || submission.coordinates || null;

      case "photos":
        return Array.isArray(submission.photos) ? submission.photos : [];

      default:
        return null;
    }
  }

  const activeCompareFieldKey =
    typeof activeCompareField === "string"
      ? activeCompareField
      : activeCompareField?.fieldKey || null;

  const activeCompareSubtagMode =
    activeCompareField?.compareMode || "by_index";

  const activeCompareOldValue =
    activeCompareFieldKey === "subtags"
      ? activeCompareSubtagMode === "full_list"
        ? getSnapshotValue(snapshotBeforeReturn, "subtags")
        : getSnapshotSubtagValue(
            snapshotBeforeReturn,
            activeCompareField?.index
          )
      : getSnapshotValue(snapshotBeforeReturn, activeCompareFieldKey);

  const activeCompareNewValue =
    activeCompareFieldKey === "subtags"
      ? activeCompareSubtagMode === "full_list"
        ? getCurrentValue(submission, "subtags")
        : getCurrentSubtagValue(submission, activeCompareField?.index)
      : getCurrentValue(submission, activeCompareFieldKey);

  const activeCompareMessage =
    activeCompareFieldKey === "subtags"
      ? activeCompareSubtagMode === "full_list"
        ? getFullSubtagsReturnMessage(returnReview)
        : getSubtagsReturnMessage(
            returnReview,
            activeCompareField?.index,
            activeCompareField?.label
          )
      : getReturnFieldMessage(returnReview, activeCompareFieldKey);

      const breadcrumbs = cameFromUserHistory
  ? [
      {
        label: "Inicio",
        to: "/",
      },
      {
        label: "Administrar usuarios",
        to: "/administration/users",
      },
      {
        label:
          navigationState.userName ||
          "Detalle del usuario",
        to: navigationState.returnTo,
      },
      {
        label: "Detalle de propuesta",
      },
    ]
  : [
      {
        label: "Inicio",
        to: "/",
      },
      {
        label: "Propuestas de lugares",
        to: "/submissions/places",
      },
      {
        label: "Detalle de propuesta",
      },
    ];

    const handleGoBack = () => {
  if (cameFromUserHistory) {
    navigate(navigationState.returnTo, {
      state: {
        selectedWeekStart:
          navigationState.selectedWeekStart || null,
      },
    });

    return;
  }

  navigate("/submissions/places");
};

const handleOpenSubmissionUser = () => {
  if (!submission?.userId) {
    return;
  }

  navigate(
    `/administration/users/${encodeURIComponent(
      submission.userId
    )}`,
    {
      state: {
        from: "place-submission-detail",

        returnTo:
          `/submissions/places/${submissionId}`,

        returnLabel:
          "Detalle de propuesta",

        submissionId,

        userName:
          submission.userName ||
          "Usuario",
      },
    }
  );
};

const handleOpenGallery = (
  selectedIndex = 0
) => {
  const photos = Array.isArray(
    submission?.photos
  )
    ? submission.photos
    : [];

  if (photos.length === 0) {
    return;
  }

  const safeIndex = Math.min(
    Math.max(selectedIndex, 0),
    photos.length - 1
  );

  setGalleryIndex(safeIndex);
  setIsGalleryOpen(true);
};

const handleCloseGallery = () => {
  setIsGalleryOpen(false);
  setGalleryIndex(0);
};

  if (loading) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <main style={styles.screen}>
          <p>Cargando detalle...</p>
        </main>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <main style={styles.screen}>
          <button
            type="button"
            style={styles.backButton}
            onClick={handleGoBack}
          >
            ← Volver
          </button>

          <p>{errorMessage}</p>
        </main>
      </LayoutScreen>
    );
  }

  return (
    <>
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <main style={styles.screen}>
          <section style={styles.contentArea}>
            <aside style={styles.leftWrapper}>
              <div style={styles.leftSection}>
                <DetailSection
                  title="Fotografías"
                  icon={Images}
                  iconTone="blue"
                  helper={
                    canCompareCorrections &&
                    wasFieldReturned(returnReview, "photos")
                      ? "Campo corregido, da clic para comparar"
                      : "Imágenes enviadas por el usuario"
                  }
                >
                
                  <div style={getCorrectionBoxStyle("photos")}>
                   <PhotoCarousel
  photos={submission?.photos || []}
  onPhotoClick={handleOpenGallery}
  onCompareClick={() =>
    handleOpenCompareModal("photos")
  }
/>
                  </div>
                </DetailSection>

                <DetailSection
  title="Ubicación"
  icon={MapPin}
  iconTone="green"
  helper={
    canCompareCorrections &&
    wasFieldReturned(returnReview, "location")
      ? "Campo corregido, da clic para comparar"
      : "Punto marcado en el mapa"
  }
>
                  <div
                    style={getCorrectionBoxStyle("location")}
                    onClick={() => handleOpenCompareModal("location")}
                  >
                    <LocationBox location={submission?.location} />
                  </div>
                </DetailSection>
              </div>
            </aside>

            <div style={styles.verticalDivider} />

                  
                  <section style={styles.rightSection}>
  {/* METADATOS PRINCIPALES Y DECISIÓN */}
  <div style={styles.topRow}>
    <div style={styles.infoGroup}>
      <InfoField
        icon={CalendarDays}
        tone="blue"
        label="Fecha de creación"
        value={formatDate(submission?.createdAt)}
      />

   <InfoField
  icon={UserRound}
  tone="blue"
  label="Enviado por"
  value={
    submission?.userName ||
    "Usuario desconocido"
  }
  imageUrl={submission?.userPhotoUrl}
  imageAlt={
    submission?.userName ||
    "Usuario de la propuesta"
  }
  valueClickable={Boolean(
    submission?.userId
  )}
  onValueClick={
    handleOpenSubmissionUser
  }
/>
    </div>

    {!isApproved && (
      <div style={styles.decisionPanel}>
        <div style={styles.decisionPanelHeader}>
          <div style={styles.decisionIconBox}>
            <ShieldCheck
              size={26}
              strokeWidth={2}
            />
          </div>

          <div>
            <h3 style={styles.decisionTitle}>
              Decisión de la propuesta
            </h3>

            <p style={styles.decisionSubtitle}>
              Selecciona el destino de esta propuesta.
            </p>
          </div>
        </div>

        <ActionButtons
          status={submission?.status}
          onAccept={handleAcceptSubmission}
          onReturn={() =>
            navigate(
              `/submissions/places/${submissionId}/return`,
              {
                state: {
                  ...navigationState,
                  submission,
                  mode: "edit",
                },
              }
            )
          }
          onReject={() =>
            setShowRejectionModal(true)
          }
          onViewReason={() => {
            if (
              submission?.status === "rejected"
            ) {
              setShowRejectionReasonModal(true);
              return;
            }

            navigate(
              `/submissions/places/${submissionId}/return`,
              {
                state: {
                  ...navigationState,
                  submission,
                  mode: "readonly",
                },
              }
            );
          }}
        />
      </div>
    )}
  </div>

  {/* IDENTIDAD, ESTADO Y FECHAS DEL PROCESO */}
  <div
  style={{
    ...styles.identityGrid,
    ...(hasProcessDates
      ? styles.identityGridWithDates
      : styles.identityGridWithoutDates),
  }}
>
    <DetailSection
      title="Nombre del lugar"
      icon={MapPin}
      iconTone="green"
    >
      <div
        style={{
          ...styles.simpleFieldBox,
          ...getCorrectionClickableStyle("name"),
        }}
        onClick={() =>
          handleOpenCompareModal("name")
        }
      >
        <SimpleValue
          value={
            submission?.name ||
            "Lugar sin nombre"
          }
        />
      </div>
    </DetailSection>

    <DetailSection
  title="Estado de revisión"
  icon={ShieldCheck}
  iconTone={
    isRejected
      ? "red"
      : isReturned
        ? "violet"
        : isApproved
          ? "green"
          : "orange"
  }
>
  <div style={styles.statusFieldBox}>
    <div
      style={{
        ...styles.reviewStatusBadge,
        ...(isApproved
          ? styles.reviewStatusApproved
          : isRejected
            ? styles.reviewStatusRejected
            : isReturned
              ? styles.reviewStatusReturned
              : isResubmitted
                ? styles.reviewStatusCorrected
                : styles.reviewStatusPending),
      }}
    >
          {isApproved ? (
            <CheckCircle2 size={24} />
          ) : isRejected ? (
            <XCircle size={24} />
          ) : isReturned ? (
            <RotateCcw size={24} />
          ) : isResubmitted ? (
            <PencilLine size={24} />
          ) : (
            <Clock3 size={24} />
          )}

          <span>
            {getStatusLabel(submission?.status)}
          </span>
        </div>
      </div>
    </DetailSection>

   {hasProcessDates ? (
  <section style={styles.processDatesSection}>
    <div style={styles.processDatesHeader}>
      <div
        style={{
          ...styles.sectionIconBox,
          ...styles.sectionIconBlue,
        }}
      >
        <CalendarDays
          size={24}
          strokeWidth={2}
        />
      </div>

      <h3 style={styles.detailSectionTitle}>
        Fechas del proceso
      </h3>
    </div>

    <div style={styles.processDatesBody}>
      {submission?.returnedAt ? (
        <div style={styles.processDateItem}>
          <div
            style={{
              ...styles.processDateIcon,
              ...styles.processDateReturned,
            }}
          >
            <RotateCcw size={24} />
          </div>

          <div>
            <span style={styles.processDateLabel}>
              Devuelto el
            </span>

            <strong style={styles.processDateValue}>
              {formatDate(submission.returnedAt)}
            </strong>
          </div>
        </div>
      ) : null}

      {submission?.resubmittedAt ? (
        <div style={styles.processDateItem}>
          <div
            style={{
              ...styles.processDateIcon,
              ...styles.processDateCorrected,
            }}
          >
            <PencilLine size={24} />
          </div>

          <div>
            <span style={styles.processDateLabel}>
              Corregido el
            </span>

            <strong style={styles.processDateValue}>
              {formatDate(submission.resubmittedAt)}
            </strong>
          </div>
        </div>
      ) : null}

      {submission?.rejectedAt ? (
        <div style={styles.processDateItem}>
          <div
            style={{
              ...styles.processDateIcon,
              ...styles.processDateRejected,
            }}
          >
            <XCircle size={24} />
          </div>

          <div>
            <span style={styles.processDateLabel}>
              Rechazado el
            </span>

            <strong style={styles.processDateValue}>
              {formatDate(submission.rejectedAt)}
            </strong>
          </div>
        </div>
      ) : null}

      {submission?.approvedAt ? (
        <div style={styles.processDateItem}>
          <div
            style={{
              ...styles.processDateIcon,
              ...styles.processDateApproved,
            }}
          >
            <CheckCircle2 size={24} />
          </div>

          <div>
            <span style={styles.processDateLabel}>
              Aprobado el
            </span>

            <strong style={styles.processDateValue}>
              {formatDate(submission.approvedAt)}
            </strong>
          </div>
        </div>
      ) : null}
    </div>
  </section>
) : null}
  </div>

  <DetailSection
    title="Descripción"
    icon={FileText}
    iconTone="blue"
    helper={
      canCompareCorrections &&
      wasFieldReturned(
        returnReview,
        "description"
      )
        ? "Campo corregido, da clic para comparar"
        : "Texto descriptivo del lugar"
    }
  >
    <div
      style={{
        ...styles.descriptionBox,
        ...getCorrectionBoxStyle(
          "description"
        ),
      }}
      onClick={() =>
        handleOpenCompareModal("description")
      }
    >
      {submission?.description ||
        "Sin descripción"}
    </div>
  </DetailSection>

  <div style={styles.fieldsGrid}>
    <DetailSection
      title="Etiqueta principal"
      icon={Tag}
      iconTone="green"
    >
      <div
        style={{
          ...styles.simpleFieldBox,
          ...getCorrectionClickableStyle("tag"),
        }}
        onClick={() =>
          handleOpenCompareModal("tag")
        }
      >
        <SimpleValue
          value={
            submission?.tagLabel ||
            submission?.tagId ||
            "Sin etiqueta"
          }
        />
      </div>
    </DetailSection>

    <DetailSection
      title="Subetiquetas"
      icon={Layers3}
      iconTone="blue"
    >
      <div style={styles.simpleFieldBox}>
        {(submission?.subtags || []).length >
        0 ? (
          (submission?.subtags || []).map(
            (subtag, index) => {
              const compareMode =
                getSubtagsCompareMode(
                  snapshotBeforeReturn,
                  submission
                );

              return (
                <div
                  key={`${subtag}-${index}`}
                  style={{
                    ...styles.simpleListItem,
                    ...(compareMode ===
                    "full_list"
                      ? getCorrectionClickableStyle(
                          "subtags"
                        )
                      : getSubtagCorrectionClickableStyle(
                          index,
                          subtag
                        )),
                  }}
                  onClick={() =>
                    handleOpenCompareModal(
                      "subtags",
                      {
                        index,
                        label: subtag,
                      }
                    )
                  }
                >
                  <span
                    style={
                      styles.simpleListBullet
                    }
                  />

                  {subtag}
                </div>
              );
            }
          )
        ) : (
          <SimpleMutedValue value="Sin subetiquetas" />
        )}
      </div>
    </DetailSection>

    <DetailSection
      title="Enfoque"
      icon={Target}
      iconTone="blue"
    >
      <div style={styles.simpleFieldBox}>
        {(submission?.approaches || [])
          .length > 0 ? (
          (submission?.approaches || []).map(
            (approach) => (
              <div
                key={approach}
                style={{
                  ...styles.simpleListItem,
                  ...getCorrectionClickableStyle(
                    "approaches"
                  ),
                }}
                onClick={() =>
                  handleOpenCompareModal(
                    "approaches"
                  )
                }
              >
                {approach}
              </div>
            )
          )
        ) : (
          <SimpleMutedValue value="Sin enfoque" />
        )}
      </div>
    </DetailSection>
  </div>

  <div style={styles.fieldsGridTwo}>
    <DetailSection
      title="Rango de precio"
      icon={CircleDollarSign}
      iconTone="blue"
    >
      <div
        style={{
          ...styles.simpleFieldBox,
          ...getCorrectionClickableStyle(
            "price"
          ),
        }}
        onClick={() =>
          handleOpenCompareModal("price")
        }
      >
        <SimpleValue
          value={
            submission?.price ||
            "Sin precio"
          }
        />
      </div>
    </DetailSection>

    <DetailSection
      title="Horario"
      icon={Clock3}
      iconTone="orange"
    >
      <div
        style={{
          ...styles.simpleFieldBox,
          ...getCorrectionClickableStyle(
            "schedule"
          ),
        }}
        onClick={() =>
          handleOpenCompareModal("schedule")
        }
      >
        <SimpleValue
          value={
            submission?.schedule ||
            "Horario no disponible"
          }
        />
      </div>
    </DetailSection>
  </div>

  <div style={styles.bottomActions}>
    <button
      type="button"
      style={styles.backButton}
      onClick={handleGoBack}
    >
      <ArrowLeft
        size={26}
        strokeWidth={2.3}
      />

      <span>Volver</span>
    </button>
  </div>
</section>

            
          </section>
        </main>
      </LayoutScreen>

      <RejectionModal
        visible={showRejectionModal}
        onClose={() => {
          if (rejecting) return;
          setShowRejectionModal(false);
        }}
        onSubmit={async (payload) => {
          try {
            setRejecting(true);

            const finalPayload = {
              reason: payload.rejectionReason,
              message: payload.rejectionComment,
            };

            console.log("RECHAZO PAYLOAD:", finalPayload);

            const response = await rejectPlaceSubmissionService(
              submissionId,
              finalPayload
            );

            console.log("RECHAZO RESPONSE:", response);

            setSubmission((prev) => ({
              ...prev,
              status: "rejected",
              rejectedAt: new Date().toISOString(),
              rejectionReason: finalPayload,
            }));

            setShowRejectionModal(false);
          } catch (error) {
            console.error("Error rechazando propuesta:", error);
            alert(
              error.response?.data?.message ||
                error.message ||
                "No se pudo rechazar."
            );
          } finally {
            setRejecting(false);
          }
        }}
      />

      <CorrectionCompareModal
        visible={Boolean(activeCompareField)}
        fieldKey={activeCompareFieldKey}
        oldValue={activeCompareOldValue}
        newValue={activeCompareNewValue}
        message={activeCompareMessage}
        onClose={handleCloseCompareModal}
      />

      <ImageGalleryModal
  isOpen={isGalleryOpen}
  photos={
    Array.isArray(submission?.photos)
      ? submission.photos
      : []
  }
  currentIndex={galleryIndex}
  title={
    submission?.name
      ? `Fotografías de ${submission.name}`
      : "Fotografías de la propuesta"
  }
  onChangeIndex={setGalleryIndex}
  onClose={handleCloseGallery}
/>

      <RejectionReasonModal
        visible={showRejectionReasonModal}
        rejectionReason={submission?.rejectionReason}
        onClose={() => setShowRejectionReasonModal(false)}
      />
    </>
  );
}