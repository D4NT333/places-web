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

const returnedAtLabel = formatDate(
  submission?.returnedAt || submission?.updatedAt
);

const correctedAtLabel = formatDate(
  submission?.resubmittedAt || submission?.updatedAt
);
const snapshotBeforeReturn = returnReview?.snapshotBeforeReturn || null;
const canCompareCorrections = isResubmitted && Boolean(returnReview);

const handleOpenCompareModal = (fieldKey) => {
  if (!canCompareCorrections) return;
  if (!wasFieldReturned(returnReview, fieldKey)) return;

  setActiveCompareField(fieldKey);
};

const handleCloseCompareModal = () => {
  setActiveCompareField(null);
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
    width: "100%",
    boxSizing: "border-box",
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
                  onViewReason={() =>
                    navigate(`/submissions/places/${submissionId}/return`, {
                      state: {
                        submission,
                        mode: "readonly",
                      },
                    })
                  }
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

              {(submission?.subtags || []).map((subtag) => (
                <div
                  key={subtag}
                  style={getCorrectionClickableStyle("subtags")}
                  onClick={() => handleOpenCompareModal("subtags")}
                >
                  <Pill label={subtag} />
                </div>
              ))}

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
          fieldKey={activeCompareField}
          oldValue={getSnapshotValue(snapshotBeforeReturn, activeCompareField)}
          newValue={getCurrentValue(submission, activeCompareField)}
          message={getReturnFieldMessage(returnReview, activeCompareField)}
          onClose={handleCloseCompareModal}
        />
    </>
  );
}