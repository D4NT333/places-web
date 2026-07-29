import React, { useEffect, useMemo, useState } from "react";

import {
  CheckCircle2,
  CircleAlert,
  Clock3,
  FileText,
  XCircle,
} from "lucide-react";

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
    id:
      submission.id ||
      submission.submissionId,

    placeName:
      submission.placeName ||
      "Lugar sin nombre",

    status,

    statusLabel:
      STATUS_LABELS[status] ||
      "Pendiente",

    userId:
      submission.userId ||
      submission.createdBy?.uid ||
      submission.createdBy?.userId ||
      submission.createdBy?.id ||
      null,

    userName:
      submission.createdBy?.name ||
      submission.userName ||
      "Usuario desconocido",

    userPhotoUrl:
      submission.userPhotoUrl ||
      submission.createdBy?.photoURL ||
      submission.createdBy?.photoUrl ||
      submission.createdBy?.picture ||
      submission.createdBy?.imageUrl ||
      "",

    createdAt: formatDate(
      submission.createdAt
    ),

    tag:
      submission.tag?.label ||
      "",

    subtags: Array.isArray(
      submission.subtags
    )
      ? submission.subtags.map(
          (subtag) =>
            subtag.label ||
            subtag.id
        )
      : [],

    focus: Array.isArray(
      submission.approaches
    )
      ? submission.approaches.map(
          (approach) =>
            approach.label ||
            approach.id
        )
      : [],

    oldDescription:
      submission.currentDescription ||
      "",

    newDescription:
      submission.proposedDescription ||
      "",
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

  if (
    status === "approved" ||
    status === "accepted"
  ) {
    return "approved";
  }

  if (status === "rejected") {
    return "rejected";
  }

  return "in_review";
}

function getStatusChipStyle(status) {
  const normalizedStatus =
    normalizeStatus(status);

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

function getStatusIcon(status) {
  const normalizedStatus =
    normalizeStatus(status);

  if (normalizedStatus === "approved") {
    return (
      <CheckCircle2
        size={34}
        strokeWidth={2.5}
      />
    );
  }

  if (normalizedStatus === "rejected") {
    return (
      <XCircle
        size={34}
        strokeWidth={2.5}
      />
    );
  }

  return (
    <Clock3
      size={34}
      strokeWidth={2.5}
    />
  );
}

export default function DescriptionDetailSubmissionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { submissionId } = useParams();

  const [
    descriptionDetail,
    setDescriptionDetail,
  ] = useState(null);

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  const [
    isUpdating,
    setIsUpdating,
  ] = useState(false);

  const [
    showRejectModal,
    setShowRejectModal,
  ] = useState(false);

  const navigationState =
    location.state || {};

  const cameFromUserHistory =
    navigationState.from ===
      "user-history" &&
    Boolean(
      navigationState.returnTo
    );

  const cameFromPlaceDetail =
    navigationState.from ===
      "administration-place-detail" &&
    Boolean(
      navigationState.returnTo
    );

  const normalizedDetail =
    useMemo(() => {
      if (!descriptionDetail) {
        return null;
      }

      return normalizeDescriptionDetail(
        descriptionDetail
      );
    }, [descriptionDetail]);

  useEffect(() => {
    let ignore = false;

    async function loadDescriptionDetail() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const submission =
          await getDescriptionSubmissionDetailService(
            submissionId
          );

        if (!ignore) {
          setDescriptionDetail(
            submission
          );
        }
      } catch (error) {
        if (!ignore) {
          setErrorMessage(
            error.message ||
              "No se pudo cargar la propuesta."
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
    if (
      !normalizedDetail ||
      isUpdating
    ) {
      return;
    }

    try {
      setIsUpdating(true);

      const response =
        await approveDescriptionSubmissionService(
          normalizedDetail.id
        );

      console.log(
        "Propuesta aprobada:",
        response
      );

      setDescriptionDetail(
        (current) => {
          if (!current) {
            return current;
          }

          return {
            ...current,
            status: "approved",
            reviewedAt:
              new Date().toISOString(),
            reviewMessage: null,
          };
        }
      );
    } catch (error) {
      console.error(
        "Error al aprobar descripción:",
        error
      );

      alert(
        error.message ||
          "No se pudo aprobar la propuesta."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSubmitReject =
    async (payload) => {
      if (
        !normalizedDetail ||
        isUpdating
      ) {
        return;
      }

      try {
        setIsUpdating(true);

        const response =
          await rejectDescriptionSubmissionService(
            normalizedDetail.id,
            payload
          );

        console.log(
          "Propuesta rechazada:",
          response
        );

        setDescriptionDetail(
          (current) => {
            if (!current) {
              return current;
            }

            return {
              ...current,
              status: "rejected",
              reviewedAt:
                new Date().toISOString(),
              rejectionReason:
                payload.rejectionReason,
              rejectionComment:
                payload.rejectionComment,
              reviewMessage:
                payload.rejectionComment,
            };
          }
        );

        setShowRejectModal(false);
      } catch (error) {
        console.error(
          "Error al rechazar descripción:",
          error
        );

        alert(
          error.message ||
            "No se pudo rechazar la propuesta."
        );
      } finally {
        setIsUpdating(false);
      }
    };

  const handleReject = () => {
    if (
      !normalizedDetail ||
      isUpdating
    ) {
      return;
    }

    setShowRejectModal(true);
  };

  const breadcrumbs = useMemo(() => {
    if (cameFromUserHistory) {
      return [
        {
          label: "Inicio",
          to: "/",
        },
        {
          label:
            "Administrar usuarios",
          to: "/administration/users",
        },
        {
          label:
            navigationState.userName ||
            "Detalle del usuario",
          to:
            navigationState.returnTo,
        },
        {
          label:
            "Detalle de propuesta",
        },
      ];
    }

    if (cameFromPlaceDetail) {
      return [
        {
          label: "Inicio",
          to: "/",
        },
        {
          label:
            navigationState
              .parentBreadcrumb
              ?.label ||
            "Administrar lugares",

          to:
            navigationState
              .parentBreadcrumb
              ?.to ||
            "/administration/places",
        },
        {
          label:
            navigationState.placeName ||
            navigationState.returnLabel ||
            normalizedDetail?.placeName ||
            "Detalle del lugar",

          to:
            navigationState.returnTo,
        },
        {
          label:
            "Detalle de propuesta",
        },
      ];
    }

    return [
      {
        label: "Inicio",
        to: "/",
      },
      {
        label:
          "Propuestas de descripciones",

        to:
          "/submissions/descriptions",
      },
      {
        label:
          "Detalle de propuesta",
      },
    ];
  }, [
    cameFromUserHistory,
    cameFromPlaceDetail,
    navigationState.userName,
    navigationState.placeName,
    navigationState.returnLabel,
    navigationState.returnTo,
    navigationState.parentBreadcrumb,
    normalizedDetail?.placeName,
  ]);

  const handleBack = () => {
    if (
      cameFromUserHistory ||
      cameFromPlaceDetail
    ) {
      navigate(
        navigationState.returnTo,
        {
          state: {
            selectedWeekStart:
              navigationState
                .selectedWeekStart ||
              null,
          },
        }
      );

      return;
    }

    navigate(
      "/submissions/descriptions"
    );
  };

  const handleOpenSubmissionUser =
    () => {
      if (!normalizedDetail?.userId) {
        return;
      }

      navigate(
        `/administration/users/${encodeURIComponent(
          normalizedDetail.userId
        )}`,
        {
          state: {
            from:
              "description-submission-detail",

            returnTo:
              `/submissions/descriptions/${submissionId}`,

            returnLabel:
              "Detalle de propuesta",

            submissionId,

            userName:
              normalizedDetail.userName ||
              "Usuario",
          },
        }
      );
    };

  if (isLoading) {
    return (
      <LayoutScreen
        breadcrumbs={breadcrumbs}
      >
        <div style={styles.container}>
          <section
            style={styles.feedbackCard}
          >
            <div
              style={
                styles.feedbackIconBox
              }
            >
              <Clock3
                size={24}
                strokeWidth={2.3}
              />
            </div>

            <div>
              <h1
                style={
                  styles.feedbackTitle
                }
              >
                Cargando propuesta
              </h1>

              <p style={styles.subtitle}>
                Estamos obteniendo la
                información de la
                descripción.
              </p>
            </div>
          </section>
        </div>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen
        breadcrumbs={breadcrumbs}
      >
        <div style={styles.container}>
          <section
            style={styles.feedbackCard}
          >
            <div
              style={{
                ...styles.feedbackIconBox,
                ...styles.feedbackIconBoxError,
              }}
            >
              <CircleAlert
                size={24}
                strokeWidth={2.3}
              />
            </div>

            <div>
              <h1
                style={
                  styles.feedbackTitle
                }
              >
                No se pudo cargar la
                propuesta
              </h1>

              <p style={styles.subtitle}>
                {errorMessage}
              </p>
            </div>
          </section>

          <BackButton
            onClick={handleBack}
          />
        </div>
      </LayoutScreen>
    );
  }

  if (!normalizedDetail) {
    return (
      <LayoutScreen
        breadcrumbs={breadcrumbs}
      >
        <div style={styles.container}>
          <section
            style={styles.feedbackCard}
          >
            <div
              style={{
                ...styles.feedbackIconBox,
                ...styles.feedbackIconBoxError,
              }}
            >
              <CircleAlert
                size={24}
                strokeWidth={2.3}
              />
            </div>

            <div>
              <h1
                style={
                  styles.feedbackTitle
                }
              >
                Propuesta no encontrada
              </h1>

              <p style={styles.subtitle}>
                La propuesta no existe o
                ya no está disponible.
              </p>
            </div>
          </section>

          <BackButton
            onClick={handleBack}
          />
        </div>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen
      breadcrumbs={breadcrumbs}
    >
      <div style={styles.container}>
        <section
          style={styles.topSection}
        >
          <div
            style={styles.titleGroup}
          >
            <div
              style={styles.titleHeading}
            >
              <div
                style={
                  styles.titleIconBox
                }
              >
                <FileText
                  size={40}
                  strokeWidth={2.2}
                />
              </div>

              <div>
                <div
                  style={
                    styles.titleRow
                  }
                >
                  <h1
                    style={styles.title}
                  >
                    {
                      normalizedDetail.placeName
                    }
                  </h1>

                  <span
                    style={getStatusChipStyle(
                      normalizedDetail.status
                    )}
                  >
                    {getStatusIcon(
                      normalizedDetail.status
                    )}

                    {
                      normalizedDetail.statusLabel
                    }
                  </span>
                </div>

                <p
                  style={styles.subtitle}
                >
                  Revisa la descripción
                  actual del lugar y
                  compárala con la nueva
                  descripción propuesta
                  por el usuario.
                </p>
              </div>
            </div>
          </div>

          {normalizedDetail.status ===
            "in_review" && (
            <ActionButtons
              onAccept={handleAccept}
              onReject={handleReject}
              disabled={isUpdating}
            />
          )}
        </section>

        <section
          style={styles.contentCard}
        >
          <div
            style={styles.infoRow}
          >
            <MetaInfo
              userName={
                normalizedDetail.userName
              }
              userId={
                normalizedDetail.userId
              }
              userPhotoUrl={
                normalizedDetail.userPhotoUrl
              }
              createdAt={
                normalizedDetail.createdAt
              }
              onUserClick={
                handleOpenSubmissionUser
              }
            />

            <InfoChips
              tag={
                normalizedDetail.tag
              }
              subtags={
                normalizedDetail.subtags
              }
              focus={
                normalizedDetail.focus
              }
            />
          </div>

          <DescriptionCompare
            oldDescription={
              normalizedDetail.oldDescription
            }
            newDescription={
              normalizedDetail.newDescription
            }
          />
        </section>

        <BackButton
          onClick={handleBack}
        />
      </div>

      <DescriptionRejectionModal
        visible={showRejectModal}
        loading={isUpdating}
        onClose={() =>
          setShowRejectModal(false)
        }
        onSubmit={
          handleSubmitReject
        }
      />
    </LayoutScreen>
  );
}