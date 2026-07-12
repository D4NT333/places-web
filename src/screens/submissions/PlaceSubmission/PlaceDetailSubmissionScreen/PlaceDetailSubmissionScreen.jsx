import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";

import PhotoCarousel from "./Components/PhotoCarousel";
import LocationBox from "./Components/LocationBox";
import InfoField from "./Components/InfoField";
import ActionButtons from "./Components/ActionButtons";
import RejectionModal from "./Components/RejectionModal";
import CorrectionCompareModal from "./Components/CorrectionCompareModal";
import RejectionReasonModal from "./Components/RejectionReasonModal";

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

function DetailSection({ title, helper, children, style }) {
  return (
    <section style={{ ...styles.detailSection, ...style }}>
      <div style={styles.detailSectionHeader}>
        <h3 style={styles.detailSectionTitle}>{title}</h3>

        {helper ? (
          <span style={styles.detailSectionHelper}>{helper}</span>
        ) : null}
      </div>

      <div style={styles.detailSectionBody}>{children}</div>
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
                      onCompareClick={() => handleOpenCompareModal("photos")}
                    />
                  </div>
                </DetailSection>

                <DetailSection
                  title="Ubicación"
                  
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
              <div style={styles.topRow}>
                <div style={styles.infoGroup}>
                  <InfoField
                    label="Creado el:  "
                    value={formatDate(submission?.createdAt)}
                  />

                  <InfoField
                    label="Enviado por:  "
                    value={submission?.userName || "Usuario desconocido"}
                  />

                  {isReturned ? (
                    <InfoField label="Devuelto el:" value={returnedAtLabel} />
                  ) : null}

                  {isResubmitted ? (
                    <InfoField label="Corregido el:" value={correctedAtLabel} />
                  ) : null}

                  {isRejected ? (
                    <InfoField label="Rechazado el:" value={rejectedAtLabel} />
                  ) : null}
                </div>

              {!isApproved && (
                <ActionButtons
                  status={submission?.status}
                  onAccept={handleAcceptSubmission}
                 onReturn={() =>
  navigate(`/submissions/places/${submissionId}/return`, {
    state: {
      ...navigationState,
      submission,
      mode: "edit",
    },
  })
}
                  onReject={() => setShowRejectionModal(true)}
                  onViewReason={() => {
                    if (submission?.status === "rejected") {
                      setShowRejectionReasonModal(true);
                      return;
                    }

                   navigate(`/submissions/places/${submissionId}/return`, {
  state: {
    ...navigationState,
    submission,
    mode: "readonly",
  },
});
                  }}
                />
              )}
              </div>

              <div style={styles.nameStatusGrid}>
                <DetailSection title="Nombre del lugar">
                  <div
                    style={{
                      ...styles.simpleFieldBox,
                      ...getCorrectionClickableStyle("name"),
                    }}
                    onClick={() => handleOpenCompareModal("name")}
                  >
                    <SimpleValue
                      value={submission?.name || "Lugar sin nombre"}
                    />
                  </div>
                </DetailSection>

                <DetailSection title="Estado de revisión">
                  <div style={styles.simpleFieldBox}>
                    <SimpleValue value={getStatusLabel(submission?.status)} />
                  </div>
                </DetailSection>
              </div>

              <DetailSection
                title="Descripción"
                helper={
                  canCompareCorrections &&
                  wasFieldReturned(returnReview, "description")
                    ? "Campo corregido, da clic para comparar"
                    : "Texto descriptivo del lugar"
                }
              >
                <div
                  style={{
                    ...styles.descriptionBox,
                    ...getCorrectionBoxStyle("description"),
                  }}
                  onClick={() => handleOpenCompareModal("description")}
                >
                  {submission?.description || "Sin descripción"}
                </div>
              </DetailSection>

              <div style={styles.fieldsGrid}>
                <DetailSection title="Etiqueta principal">
                  <div
                    style={{
                      ...styles.simpleFieldBox,
                      ...getCorrectionClickableStyle("tag"),
                    }}
                    onClick={() => handleOpenCompareModal("tag")}
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

                <DetailSection title="Subetiquetas">
                  <div style={styles.simpleFieldBox}>
                    {(submission?.subtags || []).length > 0 ? (
                      (submission?.subtags || []).map((subtag, index) => {
                        const compareMode = getSubtagsCompareMode(
                          snapshotBeforeReturn,
                          submission
                        );

                        return (
                          <div
                            key={`${subtag}-${index}`}
                            style={{
                              ...styles.simpleListItem,
                              ...(compareMode === "full_list"
                                ? getCorrectionClickableStyle("subtags")
                                : getSubtagCorrectionClickableStyle(
                                    index,
                                    subtag
                                  )),
                            }}
                            onClick={() =>
                              handleOpenCompareModal("subtags", {
                                index,
                                label: subtag,
                              })
                            }
                          >
                            {subtag}
                          </div>
                        );
                      })
                    ) : (
                      <SimpleMutedValue value="Sin subetiquetas" />
                    )}
                  </div>
                </DetailSection>

                <DetailSection title="Enfoque">
                  <div style={styles.simpleFieldBox}>
                    {(submission?.approaches || []).length > 0 ? (
                      (submission?.approaches || []).map((approach) => (
                        <div
                          key={approach}
                          style={{
                            ...styles.simpleListItem,
                            ...getCorrectionClickableStyle("approaches"),
                          }}
                          onClick={() => handleOpenCompareModal("approaches")}
                        >
                          {approach}
                        </div>
                      ))
                    ) : (
                      <SimpleMutedValue value="Sin enfoque" />
                    )}
                  </div>
                </DetailSection>
              </div>

              <div style={styles.fieldsGridTwo || styles.fieldsGrid}>
                <DetailSection title="Rango de precio">
                  <div
                    style={{
                      ...styles.simpleFieldBox,
                      ...getCorrectionClickableStyle("price"),
                    }}
                    onClick={() => handleOpenCompareModal("price")}
                  >
                    <SimpleValue value={submission?.price || "Sin precio"} />
                  </div>
                </DetailSection>

                <DetailSection title="Horario">
                  <div
                    style={{
                      ...styles.simpleFieldBox,
                      ...getCorrectionClickableStyle("schedule"),
                    }}
                    onClick={() => handleOpenCompareModal("schedule")}
                  >
                    <SimpleValue
                      value={submission?.schedule || "Horario no disponible"}
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
                  Volver
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

      <RejectionReasonModal
        visible={showRejectionReasonModal}
        rejectionReason={submission?.rejectionReason}
        onClose={() => setShowRejectionReasonModal(false)}
      />
    </>
  );
}