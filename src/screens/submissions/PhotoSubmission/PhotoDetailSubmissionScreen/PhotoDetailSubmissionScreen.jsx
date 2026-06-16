import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import PhotoCarousel from "./Components/PhotoCarousel";
import PhotoDetailHeader from "./Components/PhotoDetailHeader";
import SubmissionInfoCard from "./Components/SubmissionInfoCard";
import ReviewActions from "./Components/ReviewActions";
import PhotoRejectionModal from "./Components/PhotoRejectionModal";

import getPhotoSubmissionDetailService from "../../../../services/api/submissions/photo/read/getPhotoSubmissionDetail.service";

import rejectPhotoSubmissionService from "../../../../services/api/submissions/photo/update/rejectPhotoSubmission.service";

import approvePhotoSubmissionService from "../../../../services/api/submissions/photo/update/approvePhotoSubmission.service";

import styles from "./styles";

const BREADCRUMBS = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label:
      "Propuestas de fotografías",
    to: "/submissions/photos",
  },
  {
    label:
      "Detalle de propuesta",
  },
];

function getDateFromValue(value) {
  if (!value) {
    return null;
  }

  if (
    typeof value?.toDate ===
    "function"
  ) {
    return value.toDate();
  }

  if (
    typeof value === "object" &&
    typeof value._seconds ===
      "number"
  ) {
    return new Date(
      value._seconds * 1000
    );
  }

  const date = new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return null;
  }

  return date;
}

function formatShortDate(value) {
  const date =
    getDateFromValue(value);

  if (!date) {
    return "Sin fecha";
  }

  return date.toLocaleDateString(
    "es-MX",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
}

function getErrorMessage(
  error,
  fallbackMessage
) {
  return (
    error?.response?.data
      ?.message ||
    error?.message ||
    fallbackMessage
  );
}

function getUpdatedSubmission(
  value
) {
  if (
    value?.submission &&
    typeof value.submission ===
      "object"
  ) {
    return value.submission;
  }

  if (
    value &&
    typeof value === "object"
  ) {
    return value;
  }

  return {};
}

export default function PhotoDetailSubmissionScreen() {
  const navigate =
    useNavigate();

  const {
    submissionId,
  } = useParams();

  const [
    submission,
    setSubmission,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    loadingError,
    setLoadingError,
  ] = useState("");

  const [
    reloadCounter,
    setReloadCounter,
  ] = useState(0);

  const [
    rejectionModalVisible,
    setRejectionModalVisible,
  ] = useState(false);

  const [
    rejectionLoading,
    setRejectionLoading,
  ] = useState(false);

  const [
    approvalLoading,
    setApprovalLoading,
  ] = useState(false);

  const actionLoading =
    rejectionLoading ||
    approvalLoading;

  useEffect(() => {
    let requestCancelled =
      false;

    async function loadSubmission() {
      if (!submissionId) {
        setSubmission(null);

        setLoadingError(
          "La URL no contiene un identificador de propuesta válido."
        );

        setLoading(false);

        return;
      }

      try {
        setLoading(true);
        setLoadingError("");

        const result =
          await getPhotoSubmissionDetailService(
            submissionId
          );

        if (requestCancelled) {
          return;
        }

        setSubmission(result);
      } catch (error) {
        if (requestCancelled) {
          return;
        }

        console.error(
          "Error cargando detalle de propuesta de fotografías:",
          error
        );

        setSubmission(null);

        setLoadingError(
          getErrorMessage(
            error,
            "No fue posible cargar el detalle de la propuesta."
          )
        );
      } finally {
        if (!requestCancelled) {
          setLoading(false);
        }
      }
    }

    loadSubmission();

    return () => {
      requestCancelled = true;
    };
  }, [
    submissionId,
    reloadCounter,
  ]);

  function handleGoBack() {
    navigate(
      "/submissions/photos"
    );
  }

  function handleRetry() {
    setReloadCounter(
      (currentValue) =>
        currentValue + 1
    );
  }

  async function handleApprove() {
    if (
      actionLoading ||
      !submission?.submissionId ||
      submission.status !==
        "in_review"
    ) {
      return;
    }

    const confirmed =
      window.confirm(
        "¿Quieres aprobar esta propuesta? Las fotografías se agregarán al lugar."
      );

    if (!confirmed) {
      return;
    }

    try {
      setApprovalLoading(true);

      /*
       * El frontend solamente manda el ID.
       *
       * El backend obtiene las fotografías
       * directamente desde photoSubmissions.
       */
      const response =
        await approvePhotoSubmissionService(
          submission.submissionId
        );

      const updatedSubmission =
        getUpdatedSubmission(
          response
        );

      setSubmission(
        (
          currentSubmission
        ) => {
          if (
            !currentSubmission
          ) {
            return currentSubmission;
          }

          return {
            ...currentSubmission,
            ...updatedSubmission,

            status:
              updatedSubmission
                .status ||
              "approved",

            /*
             * La respuesta de aprobación no
             * necesita regresar todas las fotos.
             * Conservamos las que ya cargó
             * el endpoint de detalle.
             */
            photos:
              currentSubmission
                .photos,

            photoCount:
              currentSubmission
                .photoCount ??
              currentSubmission
                .photos?.length ??
              0,
          };
        }
      );

      window.alert(
        "La propuesta fue aprobada correctamente."
      );
    } catch (error) {
      console.error(
        "Error aprobando propuesta de fotografías:",
        error
      );

      window.alert(
        getErrorMessage(
          error,
          "No fue posible aprobar la propuesta."
        )
      );
    } finally {
      setApprovalLoading(false);
    }
  }

  function handleOpenRejectModal() {
    if (
      actionLoading ||
      submission?.status !==
        "in_review"
    ) {
      return;
    }

    setRejectionModalVisible(
      true
    );
  }

  function handleCloseRejectModal() {
    if (rejectionLoading) {
      return;
    }

    setRejectionModalVisible(
      false
    );
  }

  async function handleSubmitRejection({
    reason,
    message,
  }) {
    if (
      actionLoading ||
      !submission?.submissionId ||
      submission.status !==
        "in_review"
    ) {
      return;
    }

    try {
      setRejectionLoading(
        true
      );

      const response =
        await rejectPhotoSubmissionService(
          {
            submissionId:
              submission
                .submissionId,

            reason,
            message,
          }
        );

      const updatedSubmission =
        getUpdatedSubmission(
          response
        );

      setSubmission(
        (
          currentSubmission
        ) => {
          if (
            !currentSubmission
          ) {
            return currentSubmission;
          }

          return {
            ...currentSubmission,
            ...updatedSubmission,

            status:
              updatedSubmission
                .status ||
              "rejected",

            photos:
              currentSubmission
                .photos,

            photoCount:
              currentSubmission
                .photoCount ??
              currentSubmission
                .photos?.length ??
              0,

            rejectionReason:
              updatedSubmission
                .rejectionReason || {
                reason,
                message,
              },
          };
        }
      );

      setRejectionModalVisible(
        false
      );

      window.alert(
        "La propuesta fue rechazada correctamente."
      );
    } catch (error) {
      console.error(
        "Error rechazando propuesta de fotografías:",
        error
      );

      window.alert(
        getErrorMessage(
          error,
          "No fue posible rechazar la propuesta."
        )
      );
    } finally {
      setRejectionLoading(
        false
      );
    }
  }

  if (loading) {
    return (
      <LayoutScreen
        breadcrumbs={
          BREADCRUMBS
        }
      >
        <main style={styles.screen}>
          <div
            style={
              styles.centerState
            }
          >
            <p
              style={
                styles.stateTitle
              }
            >
              Cargando propuesta...
            </p>

            <p
              style={
                styles.stateText
              }
            >
              Obteniendo las fotografías y los datos de la propuesta.
            </p>
          </div>
        </main>
      </LayoutScreen>
    );
  }

  if (
    loadingError ||
    !submission
  ) {
    return (
      <LayoutScreen
        breadcrumbs={
          BREADCRUMBS
        }
      >
        <main style={styles.screen}>
          <div
            style={
              styles.centerState
            }
          >
            <div
              style={
                styles.errorIcon
              }
            >
              !
            </div>

            <p
              style={
                styles.stateTitle
              }
            >
              No se pudo mostrar la propuesta
            </p>

            <p
              style={
                styles.stateText
              }
            >
              {loadingError ||
                "No se encontraron datos para construir la vista."}
            </p>

            <button
              type="button"
              style={
                styles.secondaryButton
              }
              onClick={
                handleRetry
              }
            >
              Reintentar
            </button>

            <button
              type="button"
              style={
                styles.secondaryButton
              }
              onClick={
                handleGoBack
              }
            >
              Volver al listado
            </button>
          </div>
        </main>
      </LayoutScreen>
    );
  }

  const photos =
    Array.isArray(
      submission.photos
    )
      ? submission.photos
      : [];

  const shortDate =
    formatShortDate(
      submission.createdAt
    );

  const photoCount =
    Number.isFinite(
      Number(
        submission.photoCount
      )
    )
      ? Number(
          submission.photoCount
        )
      : photos.length;

  return (
    <LayoutScreen
      breadcrumbs={
        BREADCRUMBS
      }
    >
      <main style={styles.screen}>
        <PhotoDetailHeader
          placeName={
            submission.placeName
          }
        />

        <section
          style={
            styles.contentArea
          }
        >
          <div
            style={
              styles.carouselColumn
            }
          >
            <PhotoCarousel
              photos={photos}
              placeName={
                submission.placeName
              }
            />
          </div>

          <aside
            style={
              styles.sideColumn
            }
          >
            <SubmissionInfoCard
              placeName={
                submission.placeName
              }
              createdByName={
                submission
                  .createdByName
              }
              createdAt={
                shortDate
              }
              photoCount={
                photoCount
              }
              status={
                submission.status
              }
            />

            <ReviewActions
              status={
                submission.status
              }
              loading={
                actionLoading
              }
              onReject={
                handleOpenRejectModal
              }
              onApprove={
                handleApprove
              }
            />
          </aside>
        </section>

        <div
          style={
            styles.backButtonWrapper
          }
        >
          <button
            type="button"
            style={
              styles.backButton
            }
            onClick={
              handleGoBack
            }
          >
            Volver
          </button>
        </div>
      </main>

      <PhotoRejectionModal
        visible={
          rejectionModalVisible
        }
        loading={
          rejectionLoading
        }
        onClose={
          handleCloseRejectModal
        }
        onSubmit={
          handleSubmitRejection
        }
      />
    </LayoutScreen>
  );
}