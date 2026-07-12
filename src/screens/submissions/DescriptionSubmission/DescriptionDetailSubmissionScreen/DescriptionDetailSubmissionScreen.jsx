import React, { useEffect, useMemo, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import ActionButtons from "./Components/ActionButtons";
import BackButton from "./Components/BackButton";
import MetaInfo from "./Components/MetaInfo";
import InfoChips from "./Components/InfoChips";
import DescriptionCompare from "./Components/DescriptionCompare";
import DescriptionRejectionModal from "./Components/DescriptionRejectionModal";

import getDescriptionSubmissionDetailService from "../../../../services/api/submissions/descriptions/read/getDescriptionSubmissionDetail.service";
import approveDescriptionSubmissionService from "../../../../services/api/submissions/descriptions/update/approveDescriptionSubmission.service";
import rejectDescriptionSubmissionService from "../../../../services/api/submissions/descriptions/update/rejectDescriptionSubmission.service";

import styles from "./styles";

const STATUS_LABELS = {
  in_review: "Pendiente",
  approved: "Aprobada",
  rejected: "Rechazada",
};

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function normalizeDescriptionDetail(submission) {
  const status = normalizeStatus(submission.status);

  return {
    id: submission.id || submission.submissionId,

    placeName: submission.placeName || "Lugar sin nombre",

    status,
    statusLabel: STATUS_LABELS[status] || "Pendiente",

    userName: submission.createdBy?.name || "Usuario desconocido",
    createdAt: formatDate(submission.createdAt),

    tag: submission.tag?.label || "",

    subtags: Array.isArray(submission.subtags)
      ? submission.subtags.map((subtag) => subtag.label || subtag.id)
      : [],

    focus: Array.isArray(submission.approaches)
      ? submission.approaches.map((approach) => approach.label || approach.id)
      : [],

    oldDescription: submission.currentDescription || "",
    newDescription: submission.proposedDescription || "",
  };
}

function normalizeStatus(status) {
  if (
    status === "in_review" ||
    status === "inReview" ||
    status === "pending"
  ) {
    return "in_review";
  }

  if (status === "approved" || status === "accepted") {
    return "approved";
  }

  if (status === "rejected") {
    return "rejected";
  }

  return "in_review";
}

function getStatusChipStyle(status) {
  const normalizedStatus = normalizeStatus(status);

  if (normalizedStatus === "approved") {
    return {
      ...styles.statusChip,
      ...styles.statusChipApproved,
    };
  }

  if (normalizedStatus === "rejected") {
    return {
      ...styles.statusChip,
      ...styles.statusChipRejected,
    };
  }

  return {
    ...styles.statusChip,
    ...styles.statusChipPending,
  };
}

export default function DescriptionDetailSubmissionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { submissionId } = useParams();

  const [descriptionDetail, setDescriptionDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const navigationState = location.state || {};

const cameFromUserHistory =
  navigationState.from === "user-history" &&
  Boolean(navigationState.returnTo);

  const normalizedDetail = useMemo(() => {
    if (!descriptionDetail) return null;

    return normalizeDescriptionDetail(descriptionDetail);
  }, [descriptionDetail]);

  useEffect(() => {
    let ignore = false;

    async function loadDescriptionDetail() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const submission = await getDescriptionSubmissionDetailService(
          submissionId
        );

        if (!ignore) {
          setDescriptionDetail(submission);
        }
      } catch (error) {
        if (!ignore) {
          setErrorMessage(
            error.message || "No se pudo cargar la propuesta."
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadDescriptionDetail();

    return () => {
      ignore = true;
    };
  }, [submissionId]);

const handleAccept = async () => {
  if (!normalizedDetail || isUpdating) return;

  try {
    setIsUpdating(true);

    const response = await approveDescriptionSubmissionService(
      normalizedDetail.id
    );

    console.log("Propuesta aprobada:", response);

    setDescriptionDetail((current) => {
      if (!current) return current;

      return {
        ...current,
        status: "approved",
        reviewedAt: new Date().toISOString(),
        reviewMessage: null,
      };
    });
  } catch (error) {
    console.error("Error al aprobar descripción:", error);

    alert(error.message || "No se pudo aprobar la propuesta.");
  } finally {
    setIsUpdating(false);
  }
};

const handleSubmitReject = async (payload) => {
  if (!normalizedDetail || isUpdating) return;

  try {
    setIsUpdating(true);

    const response = await rejectDescriptionSubmissionService(
      normalizedDetail.id,
      payload
    );

    console.log("Propuesta rechazada:", response);

    setDescriptionDetail((current) => {
      if (!current) return current;

      return {
        ...current,
        status: "rejected",
        reviewedAt: new Date().toISOString(),
        rejectionReason: payload.rejectionReason,
        rejectionComment: payload.rejectionComment,
        reviewMessage: payload.rejectionComment,
      };
    });

    setShowRejectModal(false);
  } catch (error) {
    console.error("Error al rechazar descripción:", error);

    alert(error.message || "No se pudo rechazar la propuesta.");
  } finally {
    setIsUpdating(false);
  }
};

  const handleReject = () => {
  if (!normalizedDetail || isUpdating) return;

  setShowRejectModal(true);
};

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
        label: "Propuestas de descripciones",
        to: "/submissions/descriptions",
      },
      {
        label: "Detalle de propuesta",
      },
    ];

 const handleBack = () => {
  if (cameFromUserHistory) {
    navigate(navigationState.returnTo, {
      state: {
        selectedWeekStart:
          navigationState.selectedWeekStart || null,
      },
    });

    return;
  }

  navigate("/submissions/descriptions");
};

  if (isLoading) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <div style={styles.container}>
          <p style={styles.subtitle}>Cargando propuesta...</p>
        </div>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <div style={styles.container}>
          <section style={styles.topSection}>
            <div style={styles.titleGroup}>
              <h1 style={styles.title}>No se pudo cargar la propuesta</h1>

              <p style={styles.subtitle}>{errorMessage}</p>
            </div>
          </section>

          <BackButton onClick={handleBack} />
        </div>
      </LayoutScreen>
    );
  }

  if (!normalizedDetail) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <div style={styles.container}>
          <section style={styles.topSection}>
            <div style={styles.titleGroup}>
              <h1 style={styles.title}>Propuesta no encontrada</h1>

              <p style={styles.subtitle}>
                La propuesta no existe o ya no está disponible.
              </p>
            </div>
          </section>

          <BackButton onClick={handleBack} />
        </div>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <div style={styles.container}>
        <section style={styles.topSection}>
          <div style={styles.titleGroup}>
            <div style={styles.titleRow}>
              <h1 style={styles.title}>{normalizedDetail.placeName}</h1>

             <span style={getStatusChipStyle(normalizedDetail.status)}>
  {normalizedDetail.statusLabel}
</span>
            </div>

            <p style={styles.subtitle}>
              Revisa la descripción actual del lugar y compárala con la nueva
              descripción propuesta por el usuario.
            </p>
          </div>

         {normalizedDetail.status === "in_review" && (
        <ActionButtons
          onAccept={handleAccept}
          onReject={handleReject}
          disabled={isUpdating}
        />
      )}
      </section>

        <section style={styles.contentCard}>
          <MetaInfo
            userName={normalizedDetail.userName}
            createdAt={normalizedDetail.createdAt}
          />

          <InfoChips
            tag={normalizedDetail.tag}
            subtags={normalizedDetail.subtags}
            focus={normalizedDetail.focus}
          />

          <DescriptionCompare
            oldDescription={normalizedDetail.oldDescription}
            newDescription={normalizedDetail.newDescription}
          />
        </section>

        <BackButton onClick={handleBack} />
      </div>
            <DescriptionRejectionModal
        visible={showRejectModal}
        loading={isUpdating}
        onClose={() => setShowRejectModal(false)}
        onSubmit={handleSubmitReject}
      />
    </LayoutScreen>
  );
}