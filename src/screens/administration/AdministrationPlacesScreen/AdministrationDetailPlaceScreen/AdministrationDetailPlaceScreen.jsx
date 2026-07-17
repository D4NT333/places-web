import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useNavigate, useParams } from "react-router-dom";

import LayoutScreen from "../../../../layout";

import {
  PlaceInfoCard,
  PlaceMediaLocationCard,
  ValidationInfoCard,
  CommentsHistoryCard,
  ReportsCard,
  WeeklyInteractionsCard,
  RecentActivityCard,
  WeeklyViewsChartCard,
  WeeklySubmissionsChartCard,
  ProposalsHistoryCard,
  ReviewDetailModal,
} from "./Components";

import { ImageGalleryModal } from "../../../../components";

import ReportDetailModal from "../../../management/ReportsScreen/Components/ReportDetailModal";

import getAdminPlaceDetailService from "../../../../services/api/administration/places/getAdminPlaceDetail.service";

import getAdminPlaceReviewsService from "../../../../services/api/administration/places/getAdminPlaceReviews.service";

import getAdminPlaceReportsService from "../../../../services/api/administration/places/getAdminPlaceReports.service";

import getAdminPlaceSubmissionsService from "../../../../services/api/administration/places/getAdminPlaceSubmissions.service";

import getAdminPlaceReviewDetailService from "../../../../services/api/administration/places/getAdminPlaceReviewDetail.service";

import updateAdminPlaceReviewVisibilityService from "../../../../services/api/administration/places/updateAdminPlaceReviewVisibility.service";

import getAdminPlaceLsearchGalleryService from "../../../../services/api/administration/places/getAdminPlaceLsearchGallery.service";

import styles from "./styles";

const PAGE_LIMIT = 10;

function formatDate(value) {
  if (!value) {
    return "Sin registro";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin registro";
  }

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function getModerationStatusLabel(status) {
  const labels = {
    published: "Publicado",
    approved: "Publicado",
    pending: "Pendiente",
    disabled: "Deshabilitado",
    hidden: "Oculto",
    deleted: "Eliminado",
  };

  return labels[status] || status || "Sin estado";
}

function getActivityStatusLabel(status) {
  const labels = {
    active: "Activo",
    low_activity: "Actividad baja",
    no_activity: "Sin actividad",
    forgotten: "Olvidado",
    pending: "Pendiente",
    invisible: "Invisible",
    hidden: "Oculto",
  };

  return labels[status] || status || "Sin estado";
}

function getReportStatusLabel(status) {
  const labels = {
    pending: "Pendiente",
    in_review: "En revisión",
    resolved: "Resuelto",
    dismissed: "Descartado",
  };

  return labels[status] || status || "Sin estado";
}

function normalizePlace(place) {
  if (!place) {
    return null;
  }

  const photos = Array.isArray(place.media?.photos)
    ? place.media.photos
    : [];

  return {
    id: place.placeId,
    placeId: place.placeId,

    name: place.name || "Lugar sin nombre",
    description: place.description || "Sin descripción",

    tagLabel:
      place.category?.label ||
      place.category?.id ||
      "Sin categoría",

    subtags: Array.isArray(place.subtags)
      ? place.subtags.map((subtag) => subtag.label || subtag.id)
      : [],

    approaches: Array.isArray(place.approaches)
      ? place.approaches.map(
          (approach) => approach.label || approach.id
        )
      : [],

    price:
      place.priceRange?.label ||
      place.priceRange?.id ||
      "Sin especificar",

    schedule:
      place.openingHours?.label ||
      "Horario no disponible",

    googleRating: Number(place.ratings?.google) || 0,

    googleRatingCount:
      Number(place.ratings?.googleRatingCount) || 0,

    lsearchRating:
      Number(place.ratings?.lsearch) || 0,

    lsearchRatingCount:
      Number(place.ratings?.lsearchRatingCount) || 0,

    moderationStatus: getModerationStatusLabel(
      place.moderationStatus
    ),

    activityStatus: getActivityStatusLabel(
      place.activityStatus
    ),

    moderationStatusId: place.moderationStatus,
    activityStatusId: place.activityStatus,

    address: place.address || "Dirección no disponible",

    location: {
      lat: place.location?.lat ?? null,
      lng: place.location?.lng ?? null,
    },

    photos,
    mainPhoto: place.media?.mainPhoto || photos[0] || null,

    photoCount:
      Number(place.media?.photoCount) || photos.length,

    photoIndex:
      photos.length > 0
        ? `1/${place.media?.photoCount || photos.length}`
        : "0/0",

    validatedBy:
      place.validation?.approvedBy?.name ||
      "Sin administrador asignado",

    source:
  place.validation?.source === "google_candidate"
    ? "Candidato de Google"
    : place.validation?.source === "place_submission"
      ? "Propuesta de lugar"
      : place.validation?.source === "user_submission"
        ? "Propuesta de usuario"
        : place.validation?.source || "Sin fuente",

        submissionId:
  place.validation?.submissionId ||
  place.origin?.submissionId ||
  null,

sourceId:
  place.validation?.source ||
  place.origin?.type ||
  null,

    creatorName:
    place.validation?.submittedBy?.name ||
    place.validation?.createdBy?.name ||
    "Sistema",

    createdAt: formatDate(place.validation?.createdAt),

    validatedAt: formatDate(place.validation?.approvedAt),

    updatedAt: formatDate(place.validation?.updatedAt),

    metrics: place.metrics || {},

    weeklyInteractions: place.weeklyInteractions || {},

    google: place.google || {},

    
  };
}

function normalizeComments(reviews) {
  if (!Array.isArray(reviews)) {
    return [];
  }

  return reviews.map((review) => ({
    id: review.reviewId,

    user:
      review.user?.name ||
      "Usuario",

    userPhoto:
      review.user?.photoURL ||
      null,

    date: formatDate(review.createdAt),

    rating:
      Number(review.rating || 0).toFixed(1),

    comment:
      review.commentText ||
      "",

    recommended:
      review.recommended,

    status:
      review.status || "published",

    statusLabel:
      getReviewStatusLabel(review.status),

    answers:
      review.answers || [],
  }));
}

function normalizeReports(reports) {
  if (!Array.isArray(reports)) {
    return [];
  }

  return reports.map((report) => {
    const reportId =
      report.reportId ||
      report.id;

    const rawStatus =
      report.status ||
      "pending";

    const reasonLabel =
      report.reason?.label ||
      report.reasonLabel ||
      "Motivo no especificado";

    return {
      /*
       * Identificadores
       */
      id: reportId,
      reportId,

      /*
       * Tipo de reporte.
       * El modal acepta target.
       */
      target:
        report.target ||
        "place",

      type:
        report.target ||
        "place",

      typeLabel: "Lugar",

      /*
       * Motivo.
       */
      reasonId:
        report.reason?.id ||
        report.reasonId ||
        "",

      reasonLabel,

      /*
       * Información principal.
       */
      message:
        report.message ||
        "",

      priority:
        report.priority ||
        "normal",

      source:
        report.source ||
        "place_detail",

      metadata:
        report.metadata ||
        {},

      /*
       * Estado técnico, no traducido.
       */
      status: rawStatus,

      statusId: rawStatus,

      statusLabel:
        getReportStatusLabel(rawStatus),

      /*
       * Lugar relacionado.
       */
      relatedTo: {
        type: "place",

        id:
          report.place?.placeId ||
          placeId ||
          null,

        label:
          report.place?.placeName ||
          place?.name ||
          "Lugar reportado",
      },

      place: {
        placeId:
          report.place?.placeId ||
          placeId ||
          null,

        placeName:
          report.place?.placeName ||
          place?.name ||
          "Lugar reportado",
      },

      /*
       * Usuario que realizó el reporte.
       */
      reporter: {
        uid:
          report.reporter?.uid ||
          null,

        name:
          report.reporter?.name ||
          "Usuario desconocido",

        email:
          report.reporter?.email ||
          "",

        photoURL:
          report.reporter?.photoURL ||
          null,
      },

      /*
       * Información adicional.
       */
      reportedUser:
        report.reportedUser ||
        null,

      review:
        report.review ||
        null,

      /*
       * El backend los entrega dentro de admin,
       * pero el modal los espera arriba.
       */
      assignedTo:
        report.admin?.assignedTo ||
        null,

      resolutionNote:
        report.admin?.resolutionNote ||
        "",

      resolvedBy:
        report.admin?.resolvedBy ||
        null,

      resolvedAt:
        report.admin?.resolvedAt ||
        null,

      /*
       * Fechas originales para el modal.
       */
      createdAt:
        report.createdAt ||
        null,

      updatedAt:
        report.updatedAt ||
        null,

      /*
       * Campos visuales para ReportsCard.
       */
      date:
        formatDate(report.createdAt),

      displayReason:
        reasonLabel,

      displayStatus:
        getReportStatusLabel(rawStatus),
    };
  });
}

function normalizeProposals(submissions) {
  if (!Array.isArray(submissions)) {
    return [];
  }

  return submissions.map((submission) => ({
    id: submission.submissionId,

    type:
      submission.typeLabel ||
      submission.type ||
      "Propuesta",

    typeId:
      submission.type,

    date: formatDate(submission.createdAt),

    status:
      submission.statusLabel ||
      submission.status ||
      "Sin estado",

    statusId:
      submission.status,

    user:
      submission.user?.name ||
      "Usuario",

    preview:
      submission.preview ||
      null,
  }));
}

function getReviewStatusLabel(status) {
  const labels = {
    published: "Publicado",
    hidden: "Oculto",
    deleted: "Eliminado",
  };

  return labels[status] || status || "Sin estado";
}

export default function PlaceDetailScreen() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const [place, setPlace] = useState(null);
  const [comments, setComments] = useState([]);
  const [reports, setReports] = useState([]);
  const [proposals, setProposals] = useState([]);

  const [reviewsCursor, setReviewsCursor] = useState(null);
  const [reportsCursor, setReportsCursor] = useState(null);
  const [proposalsCursor, setProposalsCursor] = useState(null);

  const [hasMoreReviews, setHasMoreReviews] = useState(false);
  const [hasMoreReports, setHasMoreReports] = useState(false);
  const [hasMoreProposals, setHasMoreProposals] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [loadingReports, setLoadingReports] = useState(false);
  const [loadingProposals, setLoadingProposals] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [selectedReview, setSelectedReview] = useState(null);

const [isReviewModalOpen, setIsReviewModalOpen] =
  useState(false);

const [loadingReviewDetail, setLoadingReviewDetail] =
  useState(false);

const [reviewDetailError, setReviewDetailError] =
  useState("");

  const [
  changingReviewVisibility,
  setChangingReviewVisibility,
] = useState(false);

const [
  reviewVisibilityError,
  setReviewVisibilityError,
] = useState("");

const [reviewsLoadedBatches, setReviewsLoadedBatches] =
  useState(0);

  const [reportsLoadedBatches, setReportsLoadedBatches] =
  useState(0);

  const [
  selectedReport,
  setSelectedReport,
] = useState(null);

const [
  isResolvingReport,
  setIsResolvingReport,
] = useState(false);

const handleOpenReportDetail = (report) => {
  if (!report?.id) {
    return;
  }

  setSelectedReport(report);
};

const handleCloseReportDetail = () => {
  if (isResolvingReport) {
    return;
  }

  setSelectedReport(null);
};

const handleOpenReportRelated = () => {
  setSelectedReport(null);
};

const [galleryPhotos, setGalleryPhotos] =
  useState([]);

const [galleryIndex, setGalleryIndex] =
  useState(0);

const [isGalleryOpen, setIsGalleryOpen] =
  useState(false);

const [loadingGallery, setLoadingGallery] =
  useState(false);

const [galleryError, setGalleryError] =
  useState("");

  const loadInitialData = useCallback(async () => {
    if (!placeId) {
      setErrorMessage("No se recibió el identificador del lugar.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const [
        detailResult,
        reviewsResult,
        reportsResult,
        submissionsResult,
      ] = await Promise.all([
        getAdminPlaceDetailService(placeId),

        getAdminPlaceReviewsService({
          placeId,
          limit: PAGE_LIMIT,
        }),

        getAdminPlaceReportsService({
          placeId,
          limit: PAGE_LIMIT,
          status: "all",
        }),

        getAdminPlaceSubmissionsService({
          placeId,
          limit: PAGE_LIMIT,
          type: "all",
        }),
      ]);

      setPlace(normalizePlace(detailResult.place));

      setComments(
        normalizeComments(reviewsResult.reviews)
      );

      setReviewsLoadedBatches(
  Array.isArray(reviewsResult.reviews) &&
  reviewsResult.reviews.length > 0
    ? 1
    : 0
);

      setReports(
        normalizeReports(reportsResult.reports)
      );

      setReportsLoadedBatches(
  Array.isArray(reportsResult.reports) &&
  reportsResult.reports.length > 0
    ? 1
    : 0
);

      setProposals(
        normalizeProposals(submissionsResult.submissions)
      );

      setReviewsCursor(
        reviewsResult.pagination?.nextCursor || null
      );

      setReportsCursor(
        reportsResult.pagination?.nextCursor || null
      );

      setProposalsCursor(
        submissionsResult.pagination?.nextCursor || null
      );

      setHasMoreReviews(
        Boolean(reviewsResult.pagination?.hasMore)
      );

      setHasMoreReports(
        Boolean(reportsResult.pagination?.hasMore)
      );

      setHasMoreProposals(
        Boolean(submissionsResult.pagination?.hasMore)
      );
    } catch (error) {
      console.error(
        "Error cargando detalle del lugar:",
        error
      );

      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        "No se pudo cargar el detalle del lugar."
      );
    } finally {
      setLoading(false);
    }
  }, [placeId]);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const loadMoreReviews = async () => {
    if (
      loadingReviews ||
      !hasMoreReviews ||
      !reviewsCursor
    ) {
      return;
    }

    setLoadingReviews(true);

    try {
      const result = await getAdminPlaceReviewsService({
        placeId,
        limit: PAGE_LIMIT,
        cursor: reviewsCursor,
      });

      const newComments = normalizeComments(result.reviews);

      setComments((currentComments) => [
        ...currentComments,
        ...newComments,
      ]);

      if (newComments.length > 0) {
  setReviewsLoadedBatches(
    (currentBatches) => currentBatches + 1
  );
}

      setReviewsCursor(
        result.pagination?.nextCursor || null
      );

      setHasMoreReviews(
        Boolean(result.pagination?.hasMore)
      );
    } catch (error) {
      console.error(
        "Error cargando más reseñas:",
        error
      );

      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        "No se pudieron cargar más reseñas."
      );
    } finally {
      setLoadingReviews(false);
    }
  };

  const loadMoreReports = async () => {
    if (
      loadingReports ||
      !hasMoreReports ||
      !reportsCursor
    ) {
      return;
    }

    setLoadingReports(true);

    try {
      const result = await getAdminPlaceReportsService({
        placeId,
        limit: PAGE_LIMIT,
        cursor: reportsCursor,
        status: "all",
      });

      const newReports = normalizeReports(result.reports);

      setReports((currentReports) => [
        ...currentReports,
        ...newReports,
      ]);

      if (newReports.length > 0) {
  setReportsLoadedBatches(
    (currentBatches) => currentBatches + 1
  );
}

      setReportsCursor(
        result.pagination?.nextCursor || null
      );

      setHasMoreReports(
        Boolean(result.pagination?.hasMore)
      );
    } catch (error) {
      console.error(
        "Error cargando más reportes:",
        error
      );

      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        "No se pudieron cargar más reportes."
      );
    } finally {
      setLoadingReports(false);
    }
  };

  const loadMoreProposals = async () => {
    if (
      loadingProposals ||
      !hasMoreProposals ||
      !proposalsCursor
    ) {
      return;
    }

    setLoadingProposals(true);

    try {
      const result = await getAdminPlaceSubmissionsService({
        placeId,
        limit: PAGE_LIMIT,
        cursor: proposalsCursor,
        type: "all",
      });

      const newProposals = normalizeProposals(
        result.submissions
      );

      setProposals((currentProposals) => [
        ...currentProposals,
        ...newProposals,
      ]);

      setProposalsCursor(
        result.pagination?.nextCursor || null
      );

      setHasMoreProposals(
        Boolean(result.pagination?.hasMore)
      );
    } catch (error) {
      console.error(
        "Error cargando más propuestas:",
        error
      );

      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        "No se pudieron cargar más propuestas."
      );
    } finally {
      setLoadingProposals(false);
    }
  };

  const breadcrumbs = useMemo(
    () => [
      {
        label: "Inicio",
        to: "/",
      },
      {
        label: "Administrar lugares",
        to: "/administration/places",
      },
      {
        label: place?.name || "Detalle del lugar",
      },
    ],
    [place?.name]
  );

  const handleBack = () => {
    navigate("/administration/places");
  };

  const handleModerate = () => {
    console.log("Abrir modal de moderación", place);
  };

  const handleOpenReviewDetail = async (comment) => {
  if (!comment?.id || !placeId) {
    return;
  }

  setIsReviewModalOpen(true);
setSelectedReview(null);
setReviewDetailError("");
setReviewVisibilityError("");
setLoadingReviewDetail(true);

  try {
    const result = await getAdminPlaceReviewDetailService({
      placeId,
      reviewId: comment.id,
    });

    setSelectedReview(result.review || null);
  } catch (error) {
    console.error(
      "Error cargando detalle del comentario:",
      error
    );

    setReviewDetailError(
      error.response?.data?.message ||
        error.message ||
        "No se pudo cargar el detalle del comentario."
    );
  } finally {
    setLoadingReviewDetail(false);
  }
};

const handleCloseReviewDetail =
  useCallback(() => {
    if (
      loadingReviewDetail ||
      changingReviewVisibility
    ) {
      return;
    }

    setIsReviewModalOpen(false);
    setSelectedReview(null);
    setReviewDetailError("");
    setReviewVisibilityError("");
  }, [
    loadingReviewDetail,
    changingReviewVisibility,
  ]);

  const handleChangeReviewVisibility = async ({
  hidden,
  reason = "",
}) => {
  if (
    !selectedReview?.reviewId ||
    !placeId ||
    changingReviewVisibility
  ) {
    return;
  }

  setChangingReviewVisibility(true);
  setReviewVisibilityError("");

  try {
    const result =
      await updateAdminPlaceReviewVisibilityService({
        placeId,
        reviewId: selectedReview.reviewId,
        hidden,
        reason,
      });

    const nextStatus =
      result.status ||
      (hidden ? "hidden" : "published");

    /*
     * Actualiza el detalle actualmente abierto.
     */
    setSelectedReview((currentReview) => {
      if (!currentReview) {
        return currentReview;
      }

      return {
        ...currentReview,
        status: nextStatus,
        updatedAt: new Date().toISOString(),
      };
    });

    /*
     * Actualiza la fila de la tabla sin volver
     * a consultar todas las páginas.
     */
    setComments((currentComments) =>
      currentComments.map((comment) => {
        if (
          comment.id !==
          selectedReview.reviewId
        ) {
          return comment;
        }

        return {
          ...comment,
          status: nextStatus,
          statusLabel:
            getReviewStatusLabel(nextStatus),
        };
      })
    );
  } catch (error) {
    console.error(
      "Error cambiando visibilidad de la reseña:",
      error
    );

    setReviewVisibilityError(
      error.response?.data?.message ||
        error.message ||
        "No se pudo actualizar la visibilidad del comentario."
    );
  } finally {
    setChangingReviewVisibility(false);
  }
};

const handleOpenReviewUser = (userId) => {
  if (!userId) {
    console.warn("La reseña no tiene userId.");
    return;
  }

  setIsReviewModalOpen(false);
  setSelectedReview(null);
  setReviewDetailError("");

  navigate(
    `/administration/users/${encodeURIComponent(userId)}`,
    {
      state: {
        from: "place-review",

        returnTo: `/administration/places/${placeId}`,

        returnLabel:
          place?.name ||
          "Detalle del lugar",

        parentBreadcrumb: {
          label: "Administrar lugares",
          to: "/administration/places",
        },

        placeId,
        placeName:
          place?.name ||
          "Lugar",
      },
    }
  );
};

const handleValidatePlaceReport = async ({
  reportId,
  resolutionNote,
}) => {
  try {
    setIsResolvingReport(true);

    console.log("Validar reporte de lugar:", {
      reportId,
      resolutionNote,
    });

    setReports((currentReports) =>
      currentReports.map((report) =>
        report.id === reportId
          ? {
              ...report,
              status: "Resuelto",
              statusId: "resolved",
              statusLabel: "Resuelto",
              resolutionNote,
              resolvedAt:
                new Date().toISOString(),
            }
          : report
      )
    );

    setSelectedReport(null);
  } catch (error) {
    console.error(
      "Error validando el reporte:",
      error
    );
  } finally {
    setIsResolvingReport(false);
  }
};

const handleDiscardPlaceReport = async ({
  reportId,
  resolutionNote,
}) => {
  try {
    setIsResolvingReport(true);

    console.log("Descartar reporte de lugar:", {
      reportId,
      resolutionNote,
    });

    setReports((currentReports) =>
      currentReports.map((report) =>
        report.id === reportId
          ? {
              ...report,
              status: "Descartado",
              statusId: "dismissed",
              statusLabel: "Descartado",
              resolutionNote,
              resolvedAt:
                new Date().toISOString(),
            }
          : report
      )
    );

    setSelectedReport(null);
  } catch (error) {
    console.error(
      "Error descartando el reporte:",
      error
    );
  } finally {
    setIsResolvingReport(false);
  }
};

const handleOpenReportReporter = (userId) => {
  if (!userId) {
    return;
  }

  setSelectedReport(null);

  navigate(
    `/administration/users/${encodeURIComponent(
      userId
    )}`,
    {
      state: {
        from: "place-report",
        returnTo:
          `/administration/places/${placeId}`,
        returnLabel:
          place?.name || "Detalle del lugar",
      },
    }
  );
};

const handleOpenPlaceGallery = async (
  selectedIndex = 0
) => {
  if (loadingGallery || !place?.placeId) {
    return;
  }

  setLoadingGallery(true);
  setGalleryError("");

  try {
    const lsearchGallery =
      await getAdminPlaceLsearchGalleryService(
        place.placeId
      );

    const lsearchPhotos = Array.isArray(
      lsearchGallery?.photos
    )
      ? lsearchGallery.photos
      : [];

    const existingPhotos = Array.isArray(
      place.photos
    )
      ? place.photos
      : [];

    const normalizedExistingPhotos =
      existingPhotos
        .map((photo, index) => {
          if (typeof photo === "string") {
            return {
              id: `existing-${index}`,
              originalUrl: photo,
              thumbnailUrl: photo,
              sourceType: "existing",
            };
          }

          if (
            photo?.originalUrl ||
            photo?.url
          ) {
            const url =
              photo.originalUrl ||
              photo.url;

            return {
              ...photo,

              id:
                photo.id ||
                `existing-${index}`,

              originalUrl: url,

              thumbnailUrl:
                photo.thumbnailUrl ||
                url,

              sourceType:
                photo.sourceType ||
                "existing",
            };
          }

          if (photo?.reference) {
            const url =
              `/api/places/photos/google?reference=${encodeURIComponent(
                photo.reference
              )}`;

            return {
              ...photo,

              id:
                photo.id ||
                `google-${index}`,

              originalUrl: url,
              thumbnailUrl: url,
              sourceType: "google",
            };
          }

          return null;
        })
        .filter(Boolean);

    /*
     * Google:
     * fotos originales de Google + aportes Lsearch.
     *
     * Lsearch:
     * usamos solamente el endpoint Lsearch,
     * porque ya incluye la propuesta de origen
     * y las propuestas de fotos aprobadas.
     */
    const isGooglePlace =
      place.sourceId === "google_candidate";

    const galleryPhotosToShow = isGooglePlace
      ? [
          ...normalizedExistingPhotos,
          ...lsearchPhotos,
        ]
      : lsearchPhotos;

    if (galleryPhotosToShow.length === 0) {
      setGalleryError(
        "Este lugar no tiene fotografías disponibles."
      );

      return;
    }

    setGalleryPhotos(galleryPhotosToShow);

    setGalleryIndex(
      Math.min(
        Math.max(selectedIndex, 0),
        galleryPhotosToShow.length - 1
      )
    );

    setIsGalleryOpen(true);
  } catch (error) {
    console.error(
      "Error obteniendo galería del lugar:",
      error
    );

    setGalleryError(
      error.response?.data?.message ||
      error.message ||
      "No se pudieron cargar las fotografías del lugar."
    );
  } finally {
    setLoadingGallery(false);
  }
};


  if (loading) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <main style={styles.container}>
          <div
            style={{
              padding: "80px 24px",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Cargando detalle del lugar...
          </div>
        </main>
      </LayoutScreen>
    );
  }

  if (!place) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <main style={styles.container}>
          <div
            style={{
              padding: "80px 24px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                marginBottom: 20,
                color: "#991b1b",
                fontWeight: 700,
              }}
            >
              {errorMessage ||
                "No se encontró la información del lugar."}
            </p>

            <button
              type="button"
              onClick={handleBack}
              style={styles.backButton}
            >
              Volver
            </button>
          </div>
        </main>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <header style={styles.headerBlock}>
          <h1 style={styles.title}>Detalle del lugar</h1>

          <p style={styles.subtitle}>
            Revisa información, validación, reportes, actividad y
            propuestas relacionadas con este lugar.
          </p>
        </header>

        {errorMessage && (
          <div
            style={{
              marginBottom: 18,
              padding: "12px 16px",
              border: "1px solid #fecaca",
              borderRadius: 10,
              backgroundColor: "#fef2f2",
              color: "#991b1b",
              fontWeight: 600,
            }}
          >
            {errorMessage}
          </div>
        )}

        <section style={styles.topGrid}>
          <PlaceInfoCard
            place={place}
            onModerate={handleModerate}
          />

          <PlaceMediaLocationCard
  place={place}
  loadingGallery={loadingGallery}
  onOpenGallery={handleOpenPlaceGallery}
/>
        </section>

        <section style={styles.middleGrid}>
          <div style={styles.leftStack}>
            <ValidationInfoCard place={place} />

      <ReportsCard
  reports={reports}
  loadedBatches={reportsLoadedBatches}
  hasMore={hasMoreReports}
  loadingMore={loadingReports}
  onLoadMore={loadMoreReports}
  onSelectReport={handleOpenReportDetail}
/>
          </div>

<CommentsHistoryCard
  comments={comments}
  loadedBatches={reviewsLoadedBatches}
  hasMore={hasMoreReviews}
  loadingMore={loadingReviews}
  onLoadMore={loadMoreReviews}
  onSelectComment={handleOpenReviewDetail}
/>
        </section>

        <section style={styles.bottomGrid}>
          <div style={styles.metricsColumn}>
            <WeeklyInteractionsCard
              likes={
                place.weeklyInteractions?.likes || 0
              }
              reviews={
                place.weeklyInteractions?.reviews || 0
              }
              dwellTime="Sin datos"
            />

            <RecentActivityCard
              activity={[]}
              activityStatus={place.activityStatus}
            />

            <WeeklyViewsChartCard
              data={[]}
              totalViews={
                place.weeklyInteractions?.views || 0
              }
            />
          </div>

          <div style={styles.proposalsColumn}>
            <WeeklySubmissionsChartCard
              descriptions={0}
              photos={
                place.weeklyInteractions?.photos || 0
              }
              reports={
                place.metrics?.reports || 0
              }
            />

            <ProposalsHistoryCard
              proposals={proposals}
              hasMore={hasMoreProposals}
              loadingMore={loadingProposals}
              onLoadMore={loadMoreProposals}
            />
          </div>
        </section>

        <div style={styles.footerActions}>
          <button
            type="button"
            onClick={handleBack}
            style={styles.backButton}
          >
            Volver
          </button>
        </div>
      </main>

<ReviewDetailModal
  isOpen={isReviewModalOpen}
  review={selectedReview}
  loading={loadingReviewDetail}
  errorMessage={reviewDetailError}
  isChangingVisibility={changingReviewVisibility}
  visibilityError={reviewVisibilityError}
  onClose={handleCloseReviewDetail}
  onOpenUser={handleOpenReviewUser}
  onChangeVisibility={handleChangeReviewVisibility}
/>

<ReportDetailModal
  isOpen={Boolean(selectedReport)}
  report={selectedReport}
  loading={false}
  isSubmitting={isResolvingReport}
  onClose={handleCloseReportDetail}
  onValidate={handleValidatePlaceReport}
  onDiscard={handleDiscardPlaceReport}
  onOpenRelated={handleOpenReportRelated}
  onOpenReporter={handleOpenReportReporter}
/>

<ImageGalleryModal
  isOpen={isGalleryOpen}
  photos={galleryPhotos}
  currentIndex={galleryIndex}
  title={
    place?.name
      ? `Fotografías de ${place.name}`
      : "Galería del lugar"
  }
  onChangeIndex={setGalleryIndex}
  onClose={() => {
    setIsGalleryOpen(false);
    setGalleryError("");
  }}
/>
    </LayoutScreen>
  );
}