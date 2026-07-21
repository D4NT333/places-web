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
  AnalyticsPeriodSelect, 
  PlaceModerationModal,
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

import getAdminPlaceAnalyticsService from "../../../../services/api/administration/places/getAdminPlaceAnalytics.service";

import resolveAdminPlaceReportService from "../../../../services/api/administration/places/resolveAdminPlaceReport.service"

import moderateAdminPlaceService from "../../../../services/api/administration/places/moderateAdminPlace.service";

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

    in_review: "En revisión",
    warned: "Advertido",
    hidden: "Oculto",

    pending: "Pendiente",
    disabled: "Deshabilitado",
    deleted: "Eliminado",
  };

  return labels[status] ||
    status ||
    "Sin estado";
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

  const photos = Array.isArray(
    place.media?.photos
  )
    ? place.media.photos
    : Array.isArray(place.photos)
      ? place.photos
      : [];

  const moderationStatusId =
    place.moderationStatus ||
    place.moderation?.status ||
    place.status ||
    "published";

  const activityStatusId =
    place.activityStatus ||
    "pending";

  return {
    id:
      place.placeId ||
      place.id,

    placeId:
      place.placeId ||
      place.id,

    name:
      place.name ||
      "Lugar sin nombre",

    description:
      place.description ||
      "Sin descripción",

    tagLabel:
      place.category?.label ||
      place.category?.id ||
      place.tagLabel ||
      place.tagId ||
      "Sin categoría",

    subtags: Array.isArray(
      place.subtags
    )
      ? place.subtags.map(
          (subtag) => {
            if (
              typeof subtag ===
              "string"
            ) {
              return subtag;
            }

            return (
              subtag.label ||
              subtag.id ||
              "Sin subetiqueta"
            );
          }
        )
      : [],

    approaches: Array.isArray(
      place.approaches
    )
      ? place.approaches.map(
          (approach) => {
            if (
              typeof approach ===
              "string"
            ) {
              return approach;
            }

            return (
              approach.label ||
              approach.id ||
              "Sin enfoque"
            );
          }
        )
      : [],

    price:
      place.priceRange?.label ||
      place.priceRange?.id ||
      place.price ||
      place.priceRangeId ||
      "Sin especificar",

    schedule:
      place.openingHours?.label ||
      "Horario no disponible",

    googleRating:
      Number(
        place.ratings?.google
      ) ||
      Number(
        place.google?.rating
      ) ||
      0,

    googleRatingCount:
      Number(
        place.ratings
          ?.googleRatingCount
      ) ||
      Number(
        place.google
          ?.userRatingCount
      ) ||
      0,

    lsearchRating:
      Number(
        place.ratings?.lsearch
      ) ||
      Number(
        place.metrics
          ?.averageRating
      ) ||
      0,

    lsearchRatingCount:
      Number(
        place.ratings
          ?.lsearchRatingCount
      ) ||
      Number(
        place.metrics
          ?.ratingsCount
      ) ||
      0,

    moderationStatus:
      getModerationStatusLabel(
        moderationStatusId
      ),

    moderationStatusId,

    moderation: {
      status:
        moderationStatusId,

      validReportsCount:
        Number(
          place.moderation
            ?.validReportsCount ??
          place.metrics
            ?.validReportsCount ??
          0
        ) || 0,

      dismissedReportsCount:
        Number(
          place.moderation
            ?.dismissedReportsCount ??
          place.metrics
            ?.dismissedReportsCount ??
          0
        ) || 0,

      source:
        place.moderation
          ?.source ||
        null,

      note:
        place.moderation
          ?.note ||
        null,

      updatedAt:
        place.moderation
          ?.updatedAt ||
        null,

      updatedBy:
        place.moderation
          ?.updatedBy ||
        null,
    },

    activityStatus:
      getActivityStatusLabel(
        activityStatusId
      ),

    activityStatusId,

    address:
      place.address ||
      "Dirección no disponible",

    location: {
      lat:
        place.location?.lat ??
        null,

      lng:
        place.location?.lng ??
        null,
    },

    photos,

    mainPhoto:
      place.media?.mainPhoto ||
      place.mainPhoto ||
      photos[0] ||
      null,

    photoCount:
      Number(
        place.media?.photoCount ??
        place.photoCount
      ) ||
      photos.length,

    photoIndex:
      photos.length > 0
        ? `1/${
            Number(
              place.media
                ?.photoCount ??
              place.photoCount
            ) ||
            photos.length
          }`
        : "0/0",

    validatedBy:
      place.validation
        ?.approvedBy?.name ||
      place.approvedBy?.name ||
      place.origin
        ?.approvedByName ||
      "Sin administrador asignado",

    source:
      place.validation?.source ===
      "google_candidate"
        ? "Candidato de Google"
        : place.validation
              ?.source ===
            "place_submission"
          ? "Propuesta de lugar"
          : place.validation
                ?.source ===
              "user_submission"
            ? "Propuesta de usuario"
            : place.origin
                  ?.type ===
                "google_candidate"
              ? "Candidato de Google"
              : place.origin
                    ?.type ===
                  "place_submission"
                ? "Propuesta de lugar"
                : place.validation
                    ?.source ||
                  place.origin
                    ?.type ||
                  place.source ||
                  "Sin fuente",

    submissionId:
      place.validation
        ?.submissionId ||
      place.origin
        ?.submissionId ||
      place.origin
        ?.placeSubmissionId ||
      null,

    sourceId:
      place.validation
        ?.source ||
      place.origin?.type ||
      place.source ||
      null,

    creatorName:
      place.validation
        ?.submittedBy?.name ||
      place.validation
        ?.createdBy?.name ||
      place.createdByName ||
      place.origin
        ?.submittedByName ||
      "Sistema",

    createdAt:
      formatDate(
        place.validation
          ?.createdAt ||
        place.createdAt
      ),

    validatedAt:
      formatDate(
        place.validation
          ?.approvedAt ||
        place.origin
          ?.approvedAt
      ),

    updatedAt:
      formatDate(
        place.validation
          ?.updatedAt ||
        place.updatedAt
      ),

    metrics:
      place.metrics ||
      {},

    weeklyInteractions:
      place.weeklyInteractions ||
      {},

    google:
      place.google ||
      {},
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

function normalizeReports(
  reports,
  {
    placeId = null,
    placeName = "Lugar reportado",
  } = {}
) {
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
      id: reportId,
      reportId,

      target:
        report.target ||
        report.reportTarget ||
        "place",

      type:
        report.target ||
        report.reportTarget ||
        "place",

      typeLabel: "Lugar",

      reasonId:
        report.reason?.id ||
        report.reasonId ||
        "",

      reasonLabel,

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

      status: rawStatus,
      statusId: rawStatus,
      statusLabel:
        getReportStatusLabel(rawStatus),

      relatedTo: {
        type: "place",

        id:
          report.place?.placeId ||
          placeId,

        label:
          report.place?.placeName ||
          placeName,
      },

      place: {
        placeId:
          report.place?.placeId ||
          placeId,

        placeName:
          report.place?.placeName ||
          placeName,
      },

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

      reportedUser:
        report.reportedUser ||
        null,

      review:
        report.review ||
        null,

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

      createdAt:
        report.createdAt ||
        null,

      updatedAt:
        report.updatedAt ||
        null,

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

  return submissions.map((submission) => {
    const submissionId =
      submission.submissionId ||
      submission.id ||
      "";

    const typeId =
      submission.type ||
      submission.submissionType ||
      "";

    const name =
      submission.placeName ||
      submission.name ||
      submission.place?.name ||
      submission.preview?.placeName ||
      submission.preview?.name ||
      "Lugar sin nombre";

    return {
      id: submissionId,
      submissionId,

      name,

      type:
        submission.typeLabel ||
        typeId ||
        "Propuesta",

      typeId,

      date: formatDate(
        submission.createdAt
      ),

      status:
        submission.statusLabel ||
        submission.status ||
        "Sin estado",

      statusId:
        submission.status ||
        null,

      user:
        submission.user?.name ||
        submission.createdByName ||
        submission.createdBy?.name ||
        "Usuario",

      preview:
        submission.preview ||
        null,

      raw: submission,
    };
  });
}

function getReviewStatusLabel(status) {
  const labels = {
    published: "Publicado",
    hidden: "Oculto",
    deleted: "Eliminado",
  };

  return labels[status] || status || "Sin estado";
}

function normalizeAnalytics(analytics) {
  if (!analytics) {
    return {
      week: null,

      interactions: {
        likesAdded: 0,
        likesRemoved: 0,
        netLikes: 0,

        reviewsCreated: 0,
        reviewsDeleted: 0,
        netReviews: 0,

        dwellTimeSeconds: 0,
        validSessions: 0,
        averageDwellTimeSeconds: 0,
      },

      views: {
        total: 0,
        days: [],
      },

      contributions: {
        descriptions: 0,
        photoSubmissions: 0,
        photos: 0,
        reports: 0,
      },

      recentActivity: [],
      availableWeeks: [],
    };
  }

  return {
    week:
      analytics.week ||
      null,

    interactions: {
      likesAdded:
        Number(
          analytics.interactions?.likesAdded
        ) || 0,

      likesRemoved:
        Number(
          analytics.interactions?.likesRemoved
        ) || 0,

      netLikes:
        Number(
          analytics.interactions?.netLikes
        ) || 0,

      reviewsCreated:
        Number(
          analytics.interactions?.reviewsCreated
        ) || 0,

      reviewsDeleted:
        Number(
          analytics.interactions?.reviewsDeleted
        ) || 0,

      netReviews:
        Number(
          analytics.interactions?.netReviews
        ) || 0,

      dwellTimeSeconds:
        Number(
          analytics.interactions?.dwellTimeSeconds
        ) || 0,

      validSessions:
        Number(
          analytics.interactions?.validSessions
        ) || 0,

      averageDwellTimeSeconds:
        Number(
          analytics.interactions?.averageDwellTimeSeconds
        ) || 0,
    },

    views: {
      total:
        Number(
          analytics.views?.total
        ) || 0,

      days:
        Array.isArray(
          analytics.views?.days
        )
          ? analytics.views.days.map((day) => ({
              dayId:
                day.dayId ||
                null,

              label:
                day.label ||
                "",

              views:
                Number(day.views) ||
                0,
            }))
          : [],
    },

    contributions: {
      descriptions:
        Number(
          analytics.contributions?.descriptions
        ) || 0,

      photoSubmissions:
        Number(
          analytics.contributions?.photoSubmissions
        ) || 0,

      photos:
        Number(
          analytics.contributions?.photos
        ) || 0,

      reports:
        Number(
          analytics.contributions?.reports
        ) || 0,
    },

    recentActivity:
      Array.isArray(
        analytics.recentActivity
      )
        ? analytics.recentActivity.map((event) => ({
            id:
              event.id ||
              event.eventId,

            type:
              event.type ||
              "unknown",

            message:
              event.label ||
              "Actividad registrada",

            label:
              event.label ||
              "Actividad registrada",

            createdAt:
              event.createdAt ||
              null,

            metadata:
              event.metadata ||
              {},

            actor:
              event.actor ||
              null,
          }))
        : [],

    availableWeeks:
      Array.isArray(
        analytics.availableWeeks
      )
        ? analytics.availableWeeks
        : [],
  };
}

function formatDwellTime(seconds) {
  const totalSeconds =
    Number(seconds);

  if (
    !Number.isFinite(totalSeconds) ||
    totalSeconds <= 0
  ) {
    return "Sin datos";
  }

  const roundedSeconds =
    Math.round(totalSeconds);

  if (roundedSeconds < 60) {
    return `${roundedSeconds} s`;
  }

  const minutes =
    Math.floor(
      roundedSeconds / 60
    );

  const remainingSeconds =
    roundedSeconds % 60;

  if (minutes < 60) {
    return remainingSeconds > 0
      ? `${minutes} min ${remainingSeconds} s`
      : `${minutes} min`;
  }

  const hours =
    Math.floor(
      minutes / 60
    );

  const remainingMinutes =
    minutes % 60;

  return remainingMinutes > 0
    ? `${hours} h ${remainingMinutes} min`
    : `${hours} h`;
}

function formatWeekLabel(week) {
  if (
    !week?.weekStartId ||
    !week?.weekEndId
  ) {
    return week?.weekId || "Semana";
  }

  const startDate = new Date(
    `${week.weekStartId}T12:00:00`
  );

  const endDate = new Date(
    `${week.weekEndId}T12:00:00`
  );

  if (
    Number.isNaN(startDate.getTime()) ||
    Number.isNaN(endDate.getTime())
  ) {
    return `${week.weekStartId} al ${week.weekEndId}`;
  }

  const startFormatter =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
      }
    );

  const endFormatter =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );

  return `${startFormatter.format(
    startDate
  )} – ${endFormatter.format(
    endDate
  )}`;
}

export default function PlaceDetailScreen() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const [place, setPlace] = useState(null);
  const [comments, setComments] = useState([]);
  const [reports, setReports] = useState([]);
  const [proposals, setProposals] = useState([]);

  const [analytics, setAnalytics] =
  useState(() =>
    normalizeAnalytics(null)
  );

const [
  selectedAnalyticsWeekId,
  setSelectedAnalyticsWeekId,
] = useState(null);

const [
  loadingAnalytics,
  setLoadingAnalytics,
] = useState(false);

const [
  analyticsError,
  setAnalyticsError,
] = useState("");

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

  const [
  isModerationModalOpen,
  setIsModerationModalOpen,
] = useState(false);

const [
  moderatingPlace,
  setModeratingPlace,
] = useState(false);

const [
  moderationError,
  setModerationError,
] = useState("");
  


  const loadPlaceAnalytics =
  useCallback(
    async ({
      weekId = null,
      silent = false,
    } = {}) => {
      if (!placeId) {
        return;
      }

      try {
        if (!silent) {
          setLoadingAnalytics(true);
        }

        setAnalyticsError("");

        const result =
          await getAdminPlaceAnalyticsService({
            placeId,
            weekId,
          });

        const normalizedAnalytics =
          normalizeAnalytics(result);

        setAnalytics(
          normalizedAnalytics
        );

        setSelectedAnalyticsWeekId(
          normalizedAnalytics.week?.weekId ||
          weekId ||
          null
        );

        return normalizedAnalytics;
      } catch (error) {
        console.error(
          "Error cargando analíticas del lugar:",
          error
        );

        setAnalyticsError(
          error.response?.data?.message ||
          error.message ||
          "No se pudieron cargar las analíticas del lugar."
        );

        if (!silent) {
          setAnalytics(
            normalizeAnalytics(null)
          );
        }

        return null;
      } finally {
        if (!silent) {
          setLoadingAnalytics(false);
        }
      }
    },
    [
      placeId,
    ]
  );

//   const selectedAnalyticsWeekIndex =
//   useMemo(() => {
//     if (
//       !selectedAnalyticsWeekId ||
//       analytics.availableWeeks.length === 0
//     ) {
//       return -1;
//     }

//     return analytics.availableWeeks.findIndex(
//       (week) =>
//         week.weekId ===
//         selectedAnalyticsWeekId
//     );
//   }, [
//     analytics.availableWeeks,
//     selectedAnalyticsWeekId,
//   ]);

// const canOpenNewerWeek =
//   selectedAnalyticsWeekIndex > 0;

// const canOpenOlderWeek =
//   selectedAnalyticsWeekIndex >= 0 &&
//   selectedAnalyticsWeekIndex <
//     analytics.availableWeeks.length - 1;

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
  analyticsResult,
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

        getAdminPlaceAnalyticsService({
  placeId,
}).catch((error) => {
  console.error(
    "Error cargando analíticas iniciales:",
    error
  );

  setAnalyticsError(
    error.response?.data?.message ||
    error.message ||
    "No se pudieron cargar las analíticas."
  );

  return null;
}),
      ]);

      setPlace(normalizePlace(detailResult.place));

      const normalizedAnalytics =
  normalizeAnalytics(
    analyticsResult
  );

setAnalytics(
  normalizedAnalytics
);

setSelectedAnalyticsWeekId(
  normalizedAnalytics.week?.weekId ||
  null
);

      setComments(
        normalizeComments(reviewsResult.reviews)
      );

      setReviewsLoadedBatches(
  Array.isArray(reviewsResult.reviews) &&
  reviewsResult.reviews.length > 0
    ? 1
    : 0
);

     const normalizedPlace =
  normalizePlace(detailResult.place);

setPlace(normalizedPlace);

setReports(
  normalizeReports(
    reportsResult.reports,
    {
      placeId,
      placeName:
        normalizedPlace?.name ||
        "Lugar reportado",
    }
  )
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

      const newReports = normalizeReports(
  result.reports,
  {
    placeId,
    placeName:
      place?.name ||
      "Lugar reportado",
  }
);

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
  if (!place) {
    return;
  }

  setModerationError("");
  setIsModerationModalOpen(true);
};

const handleCloseModerationModal = () => {
  if (moderatingPlace) {
    return;
  }

  setIsModerationModalOpen(false);
  setModerationError("");
};

const handleSubmitPlaceModeration = async ({
  moderationStatus,
  note,
}) => {
  if (
    !place?.placeId ||
    moderatingPlace
  ) {
    return;
  }

  try {
    setModeratingPlace(true);
    setModerationError("");

    const result =
      await moderateAdminPlaceService({
        placeId: place.placeId,
        moderationStatus,
        note,
      });

    const nextModerationStatus =
      result.moderation?.status ||
      result.moderationStatus ||
      result.status ||
      moderationStatus;

    setPlace((currentPlace) => {
      if (!currentPlace) {
        return currentPlace;
      }

      return {
        ...currentPlace,

        moderationStatusId:
          nextModerationStatus,

        moderationStatus:
          getModerationStatusLabel(
            nextModerationStatus
          ),

        moderation: {
          ...currentPlace.moderation,

          status:
            nextModerationStatus,

          validReportsCount:
            Number(
              result.moderation
                ?.validReportsCount ??
              currentPlace.moderation
                ?.validReportsCount
            ) || 0,

          dismissedReportsCount:
            Number(
              result.moderation
                ?.dismissedReportsCount ??
              currentPlace.moderation
                ?.dismissedReportsCount
            ) || 0,

          source:
            result.moderation?.source ||
            "manual_moderation",
        },
      };
    });

    setIsModerationModalOpen(false);
    setModerationError("");
  } catch (error) {
    console.error(
      "Error moderando el lugar:",
      error
    );

    setModerationError(
      error.response?.data?.message ||
      error.message ||
      "No se pudo aplicar la moderación."
    );
  } finally {
    setModeratingPlace(false);
  }
};

  const handleOpenProposal = useCallback(
  (proposal) => {
    const submissionId =
      proposal?.submissionId ||
      proposal?.id ||
      "";

    const type =
      String(
        proposal?.typeId ||
        proposal?.raw?.type ||
        proposal?.raw?.submissionType ||
        ""
      ).toLowerCase();

    if (!submissionId) {
      console.warn(
        "La propuesta no tiene submissionId:",
        proposal
      );

      return;
    }

    const navigationState = {
      from: "administration-place-detail",

      returnTo:
        `/administration/places/${placeId}`,

      returnLabel:
        place?.name ||
        "Detalle del lugar",

      placeId,

      placeName:
        place?.name ||
        proposal?.name ||
        "Lugar",
    };

    if (
      type === "place" ||
      type === "place_submission" ||
      type === "places"
    ) {
      navigate(
        `/submissions/places/${encodeURIComponent(
          submissionId
        )}`,
        {
          state: navigationState,
        }
      );

      return;
    }

    if (
      type === "description" ||
      type === "description_submission" ||
      type === "descriptions"
    ) {
      navigate(
        `/submissions/descriptions/${encodeURIComponent(
          submissionId
        )}`,
        {
          state: navigationState,
        }
      );

      return;
    }

    if (
      type === "photo" ||
      type === "photos" ||
      type === "photo_submission"
    ) {
      navigate(
        `/submissions/photos/${encodeURIComponent(
          submissionId
        )}`,
        {
          state: navigationState,
        }
      );

      return;
    }

    console.warn(
      "Tipo de propuesta no reconocido:",
      {
        type,
        proposal,
      }
    );
  },
  [
    navigate,
    placeId,
    place?.name,
  ]
);

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

const handleSelectAnalyticsWeek =
  useCallback(
    async (weekId) => {
      if (
        !weekId ||
        loadingAnalytics ||
        weekId === selectedAnalyticsWeekId
      ) {
        return;
      }

      await loadPlaceAnalytics({
        weekId,
      });
    },
    [
      loadingAnalytics,
      selectedAnalyticsWeekId,
      loadPlaceAnalytics,
    ]
  );

const handleValidatePlaceReport = async ({
  reportId,
  resolutionNote,
}) => {
  if (
    !place?.placeId ||
    !reportId ||
    isResolvingReport
  ) {
    return;
  }

  try {
    setIsResolvingReport(true);

    const result =
      await resolveAdminPlaceReportService({
        placeId: place.placeId,
        reportId,
        decision: "resolved",
        resolutionNote,
      });

    const resolvedAt =
      new Date().toISOString();

    setReports((currentReports) =>
      currentReports.map((report) => {
        if (report.id !== reportId) {
          return report;
        }

        return {
          ...report,

          status: "resolved",
          statusId: "resolved",
          statusLabel:
            getReportStatusLabel(
              "resolved"
            ),

          displayStatus:
            getReportStatusLabel(
              "resolved"
            ),

          resolutionNote,

          resolvedBy:
            result.resolvedBy ||
            result.admin?.resolvedBy ||
            null,

          resolvedAt:
            result.resolvedAt ||
            result.admin?.resolvedAt ||
            resolvedAt,
        };
      })
    );

    const nextModerationStatus =
      result.moderation?.status ||
      null;

    if (nextModerationStatus) {
      setPlace((currentPlace) => {
        if (!currentPlace) {
          return currentPlace;
        }

        return {
          ...currentPlace,

          moderationStatusId:
            nextModerationStatus,

          moderationStatus:
            getModerationStatusLabel(
              nextModerationStatus
            ),

          moderation: {
            ...currentPlace.moderation,

            status:
              nextModerationStatus,

            validReportsCount:
              Number(
                result.moderation
                  ?.validReportsCount
              ) || 0,

            dismissedReportsCount:
              Number(
                result.moderation
                  ?.dismissedReportsCount ??
                currentPlace.moderation
                  ?.dismissedReportsCount
              ) || 0,
          },
        };
      });
    }

    setSelectedReport(null);
  } catch (error) {
    console.error(
      "Error validando el reporte:",
      error
    );

    /*
     * Tu ReportDetailModal actualmente no recibe
     * un error de resolución independiente.
     * Por ahora lo mostramos arriba en la pantalla.
     */
    setErrorMessage(
      error.response?.data?.message ||
      error.message ||
      "No se pudo validar el reporte."
    );
  } finally {
    setIsResolvingReport(false);
  }
};

const handleDiscardPlaceReport = async ({
  reportId,
  resolutionNote,
}) => {
  if (
    !place?.placeId ||
    !reportId ||
    isResolvingReport
  ) {
    return;
  }

  try {
    setIsResolvingReport(true);

    const result =
      await resolveAdminPlaceReportService({
        placeId: place.placeId,
        reportId,
        decision: "dismissed",
        resolutionNote,
      });

    const resolvedAt =
      new Date().toISOString();

    setReports((currentReports) =>
      currentReports.map((report) => {
        if (report.id !== reportId) {
          return report;
        }

        return {
          ...report,

          status: "dismissed",
          statusId: "dismissed",
          statusLabel:
            getReportStatusLabel(
              "dismissed"
            ),

          displayStatus:
            getReportStatusLabel(
              "dismissed"
            ),

          resolutionNote,

          resolvedBy:
            result.resolvedBy ||
            result.admin?.resolvedBy ||
            null,

          resolvedAt:
            result.resolvedAt ||
            result.admin?.resolvedAt ||
            resolvedAt,
        };
      })
    );

    /*
     * Descartar no debe aumentar reportes válidos
     * ni cambiar el estado de moderación.
     *
     * Solo sincronizamos los contadores si el
     * backend los devuelve.
     */
    if (result.moderation) {
      setPlace((currentPlace) => {
        if (!currentPlace) {
          return currentPlace;
        }

        return {
          ...currentPlace,

          moderation: {
            ...currentPlace.moderation,

            validReportsCount:
              Number(
                result.moderation
                  ?.validReportsCount ??
                currentPlace.moderation
                  ?.validReportsCount
              ) || 0,

            dismissedReportsCount:
              Number(
                result.moderation
                  ?.dismissedReportsCount
              ) || 0,
          },
        };
      });
    }

    setSelectedReport(null);
  } catch (error) {
    console.error(
      "Error descartando el reporte:",
      error
    );

    setErrorMessage(
      error.response?.data?.message ||
      error.message ||
      "No se pudo descartar el reporte."
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

const selectedWeekLabel = useMemo(() => {
  if (!analytics.week) {
    return "Semana sin seleccionar";
  }

  return formatWeekLabel({
    weekId: analytics.week.weekId,

    weekStartId:
      analytics.week.weekStartId,

    weekEndId:
      analytics.week.weekEndId,
  });
}, [analytics.week]);
// const handleChangeAnalyticsWeek =
//   useCallback(
//     async (direction) => {
//       if (
//         loadingAnalytics ||
//         selectedAnalyticsWeekIndex < 0
//       ) {
//         return;
//       }

//       const nextIndex =
//         direction === "older"
//           ? selectedAnalyticsWeekIndex + 1
//           : selectedAnalyticsWeekIndex - 1;

//       const selectedWeek =
//         analytics.availableWeeks[
//           nextIndex
//         ];

//       if (!selectedWeek?.weekId) {
//         return;
//       }

//       await loadPlaceAnalytics({
//         weekId:
//           selectedWeek.weekId,
//       });
//     },
//     [
//       loadingAnalytics,
//       selectedAnalyticsWeekIndex,
//       analytics.availableWeeks,
//       loadPlaceAnalytics,
//     ]
//   );

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

    <section style={styles.analyticsPeriodBar}>
  <div>
    <span style={styles.analyticsPeriodLabel}>
      Analíticas del lugar
    </span>

    <strong style={styles.analyticsPeriodValue}>
      {analytics.week
        ? `${analytics.week.weekStartId} al ${analytics.week.weekEndId}`
        : "Sin semana seleccionada"}
    </strong>
  </div>

  <AnalyticsPeriodSelect
    availableWeeks={analytics.availableWeeks}
    selectedWeekId={selectedAnalyticsWeekId}
    loading={loadingAnalytics}
    onChange={handleSelectAnalyticsWeek}
  />
</section>

<section style={styles.bottomGrid}>
  <div style={styles.metricsColumn}>
    <WeeklyInteractionsCard
  likes={analytics.interactions.netLikes}
  reviews={analytics.interactions.netReviews}
  dwellTime={formatDwellTime(
    analytics.interactions.averageDwellTimeSeconds
  )}
  weekLabel={selectedWeekLabel}
/>

<RecentActivityCard
  title="Actividad de hoy"
  activity={analytics.recentActivity}
  activityStatus={place.activityStatus}
/>

<WeeklyViewsChartCard
  data={analytics.views.days}
  totalViews={analytics.views.total}
  weekLabel={selectedWeekLabel}
/>
  </div>

  <div style={styles.proposalsColumn}>
    <WeeklySubmissionsChartCard
  descriptions={analytics.contributions.descriptions}
  photos={analytics.contributions.photos}
  reports={analytics.contributions.reports}
  weekLabel={selectedWeekLabel}
/>

    <ProposalsHistoryCard
  proposals={proposals}
  hasMore={hasMoreProposals}
  loadingMore={loadingProposals}
  onLoadMore={loadMoreProposals}
  onSelectProposal={handleOpenProposal}
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

<PlaceModerationModal
  isOpen={isModerationModalOpen}
  place={place}
  loading={moderatingPlace}
  errorMessage={moderationError}
  onClose={handleCloseModerationModal}
  onSubmit={handleSubmitPlaceModeration}
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