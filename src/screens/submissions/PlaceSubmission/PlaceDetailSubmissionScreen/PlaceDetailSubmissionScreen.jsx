import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";

import PhotoCarousel from "./Components/PhotoCarousel";
import LocationBox from "./Components/LocationBox";
import InfoField from "./Components/InfoField";
import Pill from "./Components/Pill";
import ActionButtons from "./Components/ActionButtons";
import RejectionModal from "./Components/RejectionModal";
import CorrectionCompareModal from "./Components/CorrectionCompareModal";
import RejectionReasonModal from "./Components/RejectionReasonModal";

import getPlaceSubmissionDetailService from "../../../../services/submissions/getPlaceSubmissionDetail.service";

import getReturnedPlaceSubmissionReviewService from "../../../../services/submissions/getReturnedPlaceSubmissionReview.service";

import rejectPlaceSubmissionService from "../../../../services/submissions/rejectPlaceSubmission.service";

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

export default function PlaceDetailSubmissionScreen() {
  const navigate = useNavigate();
  const { submissionId } = useParams();

  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [rejecting, setRejecting] = useState(false);

  const [returnReview, setReturnReview] = useState(null);
  const [loadingReturnReview, setLoadingReturnReview] = useState(false);
  const [activeCompareField, setActiveCompareField] = useState(null);

  const [showRejectionReasonModal, setShowRejectionReasonModal] = useState(false);

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

      const data = await getReturnedPlaceSubmissionReviewService(submissionId);

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

const handleOpenCompareModal = (fieldKey, meta = {}) => {
  if (!canCompareCorrections) return;

  if (fieldKey === "subtags") {
    if (!wasFieldReturned(returnReview, "subtags")) return;

    const compareMode = getSubtagsCompareMode(snapshotBeforeReturn, submission);

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
    borderColor: "#16A34A",
    cursor: "pointer",
  };
};

const getCorrectionClickableStyle = (fieldKey) => {
  if (!canCompareCorrections) return {};
  if (!wasFieldReturned(returnReview, fieldKey)) return {};

  return {
    borderColor: "#16A34A",
    cursor: "pointer",
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

function getSubtagReturnMessage(returnReview, subtagIndex, subtagLabel) {
  const fields = returnReview?.returnFields || returnReview?.fields || {};
  const selectedItems = getReturnedSubtagItems(returnReview);

  const foundItem = selectedItems.find((item) => {
    const matchesIndex = Number(item.index) === Number(subtagIndex);
    const matchesLabel = item.label === subtagLabel;

    return matchesIndex || matchesLabel;
  });

  return foundItem?.message || fields.subtags?.message || "";
}

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
      return Array.isArray(submission.approaches) ? submission.approaches : [];

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

const activeCompareSubtagMode = activeCompareField?.compareMode || "by_index";

const activeCompareOldValue =
  activeCompareFieldKey === "subtags"
    ? activeCompareSubtagMode === "full_list"
      ? getSnapshotValue(snapshotBeforeReturn, "subtags")
      : getSnapshotSubtagValue(snapshotBeforeReturn, activeCompareField?.index)
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


  if (loading) {
    return (
      <LayoutScreen>
        <main style={styles.screen}>
          <p>Cargando detalle...</p>
        </main>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen>
        <main style={styles.screen}>
          <button
            type="button"
            style={styles.backButton}
            onClick={() => navigate(-1)}
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
      <LayoutScreen>
        <main style={styles.screen}>
          <section style={styles.contentArea}>
          <aside style={styles.leftWrapper}>
            <div style={styles.leftSection}>
              <PhotoCarousel
                photos={submission?.photos || []}
                containerStyle={getCorrectionBoxStyle("photos")}
                onCompareClick={() => handleOpenCompareModal("photos")}
              />

              <div
                style={getCorrectionBoxStyle("location")}
                onClick={() => handleOpenCompareModal("location")}
              >
                <LocationBox location={submission?.location} />
              </div>
            </div>
          </aside>

            <div style={styles.verticalDivider} />

            <section style={styles.rightSection}>
              <div style={styles.topRow}>
               <div style={styles.infoGroup}>
                  <InfoField
                    label="Creado el:"
                    value={formatDate(submission?.createdAt)}
                  />

                  <InfoField
                    label="Enviado por:"
                    value={submission?.userName || "Usuario desconocido"}
                  />

                  {isReturned ? (
                    <InfoField
                      label="Devuelto el:"
                      value={returnedAtLabel}
                    />
                  ) : null}

                  {isResubmitted ? (
                    <InfoField
                      label="Corregido el:"
                      value={correctedAtLabel}
                    />
                  ) : null}

                  {isRejected ? (
                  <InfoField
                    label="Rechazado el:"
                    value={rejectedAtLabel}
                  />
                ) : null}
                </div>
                <ActionButtons
                  status={submission?.status}
                  onAccept={() => {
                    console.log("ACEPTAR submission");
                  }}
                  onReturn={() =>
                    navigate(`/submissions/places/${submissionId}/return`, {
                      state: {
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
                      submission,
                      mode: "readonly",
                    },
                  });
                }}
                />
              </div>

              <div style={styles.nameStatusRow}>
              <div
                style={getCorrectionClickableStyle("name")}
                onClick={() => handleOpenCompareModal("name")}
              >
                <Pill label={submission?.name || "Lugar sin nombre"} size="large" />
              </div>

              <Pill label={getStatusLabel(submission?.status)} size="large" />
            </div>

             <div
              style={{
                ...styles.descriptionBox,
                ...getCorrectionClickableStyle("description"),
              }}
              onClick={() => handleOpenCompareModal("description")}
            >
              {submission?.description || "Sin descripción"}
            </div>

              <div style={styles.chipsRow}>
              <div
                style={getCorrectionClickableStyle("tag")}
                onClick={() => handleOpenCompareModal("tag")}
              >
                <Pill label={submission?.tagLabel || submission?.tagId || "Sin etiqueta"} />
              </div>

   {(submission?.subtags || []).map((subtag, index) => {
  const compareMode = getSubtagsCompareMode(snapshotBeforeReturn, submission);

  return (
    <div
      key={`${subtag}-${index}`}
      style={
        compareMode === "full_list"
          ? getCorrectionClickableStyle("subtags")
          : getSubtagCorrectionClickableStyle(index, subtag)
      }
      onClick={() =>
        handleOpenCompareModal("subtags", {
          index,
          label: subtag,
        })
      }
    >
      <Pill label={subtag} />
    </div>
  );
})}
              {(submission?.approaches || []).map((approach) => (
                <div
                  key={approach}
                  style={getCorrectionClickableStyle("approaches")}
                  onClick={() => handleOpenCompareModal("approaches")}
                >
                  <Pill label={approach} />
                </div>
              ))}
            </div>

              <div style={styles.chipsRow}>
              <div
                style={getCorrectionClickableStyle("price")}
                onClick={() => handleOpenCompareModal("price")}
              >
                <Pill label={submission?.price || "Sin precio"} size="medium" />
              </div>

              <div
                style={getCorrectionClickableStyle("schedule")}
                onClick={() => handleOpenCompareModal("schedule")}
              >
                <Pill
                  label={submission?.schedule || "Horario no disponible"}
                  size="medium"
                />
              </div>
            </div>

              <div style={styles.bottomActions}>
                <button
                  type="button"
                  style={styles.backButton}
                  onClick={() => navigate(-1)}
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