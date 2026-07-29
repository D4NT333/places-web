import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import PhotoCarousel from "./Components/PhotoCarousel";
import SubmissionInfoCard from "./Components/SubmissionInfoCard";
import ReviewActions from "./Components/ReviewActions";
import PhotoRejectionModal from "./Components/PhotoRejectionModal";

import {
  ImageGalleryModal,
} from "../../../../components";

import getPhotoSubmissionDetailService from "../../../../services/api/submissions/photo/read/getPhotoSubmissionDetail.service";

import rejectPhotoSubmissionService from "../../../../services/api/submissions/photo/update/rejectPhotoSubmission.service";

import approvePhotoSubmissionService from "../../../../services/api/submissions/photo/update/approvePhotoSubmission.service";

import styles from "./styles";

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

  const location =
    useLocation();

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

  const [
    isGalleryOpen,
    setIsGalleryOpen,
  ] = useState(false);

  const [
    galleryIndex,
    setGalleryIndex,
  ] = useState(0);

  const actionLoading =
    rejectionLoading ||
    approvalLoading;

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

  const breadcrumbs =
    useMemo(() => {
      if (cameFromUserHistory) {
        return [
          {
            label: "Inicio",
            to: "/",
          },
          {
            label:
              "Administrar usuarios",
            to:
              "/administration/users",
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
              submission?.placeName ||
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
            "Propuestas de fotografías",
          to:
            "/submissions/photos",
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
      submission?.placeName,
    ]);

  function handleGoBack() {
    if (cameFromUserHistory) {
      navigate(
        navigationState.returnTo,
        {
          state: {
            selectedWeekStart:
              navigationState.selectedWeekStart ||
              null,
          },
        }
      );

      return;
    }

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

  function handleOpenGallery(
    selectedIndex = 0
  ) {
    const photos =
      Array.isArray(
        submission?.photos
      )
        ? submission.photos
        : [];

    if (
      photos.length === 0
    ) {
      return;
    }

    const safeIndex =
      Math.min(
        Math.max(
          selectedIndex,
          0
        ),
        photos.length - 1
      );

    setGalleryIndex(
      safeIndex
    );

    setIsGalleryOpen(
      true
    );
  }

  function handleCloseGallery() {
    setIsGalleryOpen(
      false
    );

    setGalleryIndex(0);
  }

  function handleOpenSubmissionUser() {
  const userId =
    submission?.userId ||
    submission?.createdBy ||
    "";

  if (!userId) {
    return;
  }

  navigate(
    `/administration/users/${encodeURIComponent(
      userId
    )}`,
    {
      state: {
        from:
          "photo-submission-detail",

        returnTo:
          `/submissions/photos/${submissionId}`,

        returnLabel:
          "Detalle de propuesta",

        submissionId,

        userName:
          submission?.createdByName ||
          "Usuario",
      },
    }
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
          breadcrumbs
        }
      >
        <main
          style={
            styles.screen
          }
        >
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
          breadcrumbs
        }
      >
        <main
          style={
            styles.screen
          }
        >
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
    <>
      <LayoutScreen
        breadcrumbs={
          breadcrumbs
        }
      >
        <main
          style={
            styles.screen
          }
        >
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
                onPhotoClick={
                  handleOpenGallery
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
    submission.createdByName
  }
  userId={
    submission.userId ||
    submission.createdBy ||
    ""
  }
  userPhotoUrl={
    submission.userPhotoUrl ||
    submission.createdByPhotoUrl ||
    submission.createdBy?.photoURL ||
    submission.createdBy?.photoUrl ||
    ""
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
  onUserClick={
    handleOpenSubmissionUser
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
      </LayoutScreen>

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

      <ImageGalleryModal
        isOpen={
          isGalleryOpen
        }
        photos={photos}
        currentIndex={
          galleryIndex
        }
        title={
          submission?.placeName
            ? `Fotografías de ${submission.placeName}`
            : "Fotografías de la propuesta"
        }
        onChangeIndex={
          setGalleryIndex
        }
        onClose={
          handleCloseGallery
        }
      />
    </>
  );
}