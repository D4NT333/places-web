import {
  getAuth,
} from "firebase/auth";

import client from "../../../client";

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
    value.downloadUrl ||
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
    return photo.trim();
  }

  if (
    !photo ||
    typeof photo !== "object"
  ) {
    return "";
  }

  const variantCandidates = {
    medium: [
      photo.mediumUrl,
      photo.mediumURL,
      photo.mediumDownloadURL,
      photo.medium,
    ],

    original: [
      photo.originalUrl,
      photo.originalURL,
      photo.originalDownloadURL,
      photo.original,
    ],
  };

  const fallbackCandidates = [
    photo.url,
    photo.downloadURL,
    photo.downloadUrl,
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
      const mediumUrl =
        getPhotoVariant(
          photo,
          "medium"
        ) ||
        getPhotoVariant(
          photo,
          "original"
        );

      const originalUrl =
        getPhotoVariant(
          photo,
          "original"
        ) ||
        mediumUrl;

      if (
        !mediumUrl &&
        !originalUrl
      ) {
        return null;
      }

      const parsedOrder =
        Number(photo?.order);

      const order =
        Number.isInteger(
          parsedOrder
        )
          ? parsedOrder
          : index;

      return {
        id:
          photo?.id ||
          photo?.photoId ||
          `photo-${index + 1}`,

        photoId:
          photo?.photoId ||
          photo?.id ||
          `photo-${index + 1}`,

        order,

        mediumUrl,
        originalUrl,
      };
    })
    .filter(Boolean)
    .sort(
      (
        firstPhoto,
        secondPhoto
      ) =>
        firstPhoto.order -
        secondPhoto.order
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

  const parsedPhotoCount =
    Number(value.photoCount);

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
      Number.isFinite(
        parsedPhotoCount
      )
        ? parsedPhotoCount
        : photos.length,

    photos,
  };
}

export default async function getPhotoSubmissionDetailService(
  submissionId
) {
  const normalizedSubmissionId =
    typeof submissionId ===
    "string"
      ? submissionId.trim()
      : "";

  if (!normalizedSubmissionId) {
    throw new Error(
      "El identificador de la propuesta es obligatorio."
    );
  }

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "No hay una sesión activa."
    );
  }

  const token =
    await user.getIdToken();

  const response =
    await client.get(
      `/api/submissions/photo-submissions/${encodeURIComponent(
        normalizedSubmissionId
      )}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  const rawSubmission =
    response.data?.submission ||
    response.data;

  const submission =
    normalizeSubmission(
      rawSubmission
    );

  if (!submission) {
    throw new Error(
      "El backend no devolvió una propuesta válida."
    );
  }

  return submission;
}