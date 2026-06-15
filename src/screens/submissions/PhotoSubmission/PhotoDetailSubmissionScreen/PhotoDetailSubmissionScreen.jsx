import React, {
  useMemo,
} from "react";

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import LayoutScreen from "../../../../layout";

import PhotoCarousel from "./Components/PhotoCarousel";
import PhotoDetailHeader from "./Components/PhotoDetailHeader";
import SubmissionInfoCard from "./Components/SubmissionInfoCard";
import ReviewActions from "./Components/ReviewActions";

import photoDetailSubmissionMock from "./data";

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

function formatLongDate(value) {
  const date =
    getDateFromValue(value);

  if (!date) {
    return "Sin fecha";
  }

  return date.toLocaleDateString(
    "es-MX",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
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

function getStringUrl(value) {
  if (
    typeof value === "string"
  ) {
    return value.trim();
  }

  if (
    !value ||
    typeof value !== "object"
  ) {
    return "";
  }

  const url =
    value.url ||
    value.downloadURL ||
    value.uri ||
    "";

  return typeof url === "string"
    ? url.trim()
    : "";
}

function getPhotoVariant(
  photo,
  variant
) {
  if (
    typeof photo === "string"
  ) {
    return photo;
  }

  if (
    !photo ||
    typeof photo !== "object"
  ) {
    return "";
  }

  const variantCandidates = {
    original: [
      photo.originalUrl,
      photo.originalURL,
      photo.original,
    ],

    medium: [
      photo.mediumUrl,
      photo.mediumURL,
      photo.medium,
    ],

    thumbnail: [
      photo.thumbnailUrl,
      photo.thumbnailURL,
      photo.thumbnail,
    ],
  };

  const fallbackCandidates = [
    photo.url,
    photo.downloadURL,
    photo.uri,
    photo.imageUrl,
  ];

  const candidates = [
    ...(variantCandidates[
      variant
    ] || []),

    ...fallbackCandidates,
  ];

  for (
    const candidate of candidates
  ) {
    const url =
      getStringUrl(candidate);

    if (url) {
      return url;
    }
  }

  return "";
}

function normalizePhotos(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((photo, index) => {
      const originalUrl =
        getPhotoVariant(
          photo,
          "original"
        ) ||
        getPhotoVariant(
          photo,
          "medium"
        );

      const mediumUrl =
        getPhotoVariant(
          photo,
          "medium"
        ) ||
        originalUrl;

      const thumbnailUrl =
        getPhotoVariant(
          photo,
          "thumbnail"
        ) ||
        mediumUrl;

      return {
        id:
          photo?.id ||
          photo?.photoId ||
          `photo-${index + 1}`,

        originalUrl,
        mediumUrl,
        thumbnailUrl,
      };
    })
    .filter(
      (photo) =>
        photo.mediumUrl ||
        photo.originalUrl
    );
}

function normalizeSubmission(value) {
  if (
    !value ||
    typeof value !== "object"
  ) {
    return null;
  }

  const photos =
    normalizePhotos(
      value.photos ||
      value.images ||
      []
    );

  return {
    ...value,

    id:
      value.id ||
      value.submissionId ||
      "",

    submissionId:
      value.submissionId ||
      value.id ||
      "",

    placeId:
      value.placeId ||
      "",

    placeName:
      value.placeName ||
      value.place?.name ||
      "Lugar sin nombre",

    createdBy:
      value.createdBy ||
      "",

    createdByName:
      value.createdByName ||
      value.userName ||
      value.createdByUser
        ?.name ||
      "Usuario",

    createdAt:
      value.createdAt ||
      value.submittedAt ||
      null,

    status:
      value.status ||
      "in_review",

    photoCount:
      Number(
        value.photoCount ??
        photos.length
      ),

    photos,
  };
}

export default function PhotoDetailSubmissionScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    submissionId,
  } = useParams();

  /*
   * Propuesta enviada desde el listado.
   * Puede venir incompleta porque el listado
   * normalmente solo contiene una preview.
   */
  const navigationSubmission =
    location.state?.submission ||
    null;

  /*
   * Si la propuesta recibida desde el listado
   * tiene fotografías, usamos esas.
   *
   * Si no tiene fotografías, usamos las fotos
   * simuladas del data.js.
   */
  const photos = useMemo(() => {
    const navigationPhotos =
      normalizePhotos(
        navigationSubmission
          ?.photos ||
        navigationSubmission
          ?.images ||
        []
      );

    if (
      navigationPhotos.length > 0
    ) {
      return navigationPhotos;
    }

    return normalizePhotos(
      photoDetailSubmissionMock
        .photos
    );
  }, [navigationSubmission]);

  /*
   * Mezclamos el mock con la información
   * recibida desde la tarjeta.
   *
   * La tarjeta sobrescribe datos como:
   * lugar, usuario, estado y fecha.
   *
   * El mock completa lo que todavía no
   * viene en el listado, principalmente
   * todas las fotografías.
   */
  const submission = useMemo(() => {
    const mergedSubmission = {
      ...photoDetailSubmissionMock,
      ...(navigationSubmission ||
        {}),

      id:
        navigationSubmission
          ?.id ||
        navigationSubmission
          ?.submissionId ||
        submissionId ||
        photoDetailSubmissionMock.id,

      submissionId:
        navigationSubmission
          ?.submissionId ||
        navigationSubmission
          ?.id ||
        submissionId ||
        photoDetailSubmissionMock
          .submissionId,

      photos,

      photoCount:
        Number(
          navigationSubmission
            ?.photoCount ??
          photos.length
        ),
    };

    return normalizeSubmission(
      mergedSubmission
    );
  }, [
    navigationSubmission,
    submissionId,
    photos,
  ]);

  function handleGoBack() {
    navigate(
      "/submissions/photos"
    );
  }

  function handleGoHome() {
    navigate("/home");
  }

  function handleApprove() {
    window.alert(
      `Mock: aprobar propuesta ${submission.submissionId}`
    );
  }

  function handleReject() {
    window.alert(
      `Mock: rechazar propuesta ${submission.submissionId}`
    );
  }

  if (!submission) {
    return (
      <LayoutScreen>
        <main
          style={styles.container}
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
              No se encontraron datos para construir la vista.
            </p>

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

  const longDate =
    formatLongDate(
      submission.createdAt
    );

  const shortDate =
    formatShortDate(
      submission.createdAt
    );

    return (
  <LayoutScreen
    breadcrumbs={[
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
    ]}
  >
    <main style={styles.screen}>
      <PhotoDetailHeader
        placeName={
          submission.placeName
        }
        createdByName={
          submission.createdByName
        }
        createdAt={longDate}
        status={
          submission.status
        }
      />

      <section
        style={styles.contentArea}
      >
        <div
          style={
            styles.carouselColumn
          }
        >
          <PhotoCarousel
            photos={
              submission.photos
            }
            placeName={
              submission.placeName
            }
          />
        </div>

        <aside
          style={styles.sideColumn}
        >
          <SubmissionInfoCard
            submissionId={
              submission.submissionId
            }
            placeName={
              submission.placeName
            }
            createdByName={
              submission.createdByName
            }
            createdAt={shortDate}
            photoCount={
              submission.photoCount ||
              submission.photos.length
            }
            status={
              submission.status
            }
          />

          <ReviewActions
            status={
              submission.status
            }
            loading={false}
            onReject={
              handleReject
            }
            onApprove={
              handleApprove
            }
          />
        </aside>
      </section>
    </main>
  </LayoutScreen>
);

}