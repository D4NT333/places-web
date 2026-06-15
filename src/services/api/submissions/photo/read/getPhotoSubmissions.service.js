import { getAuth } from "firebase/auth";

import client from "../../../client";

function formatCreatedAt(value) {
  if (!value) {
    return "Fecha no disponible";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Fecha no disponible";
  }

  return date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function normalizePhotoCount(value) {
  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    return 0;
  }

  return Math.max(
    0,
    Math.trunc(parsedValue)
  );
}

function normalizeSubmission(item) {
  const photoCount = normalizePhotoCount(
    item.photoCount ??
      item.extraPhotosCount
  );

  return {
    id:
      item.id ||
      item.submissionId,

    submissionId:
      item.submissionId ||
      item.id,

    placeId:
      item.placeId || "",

    placeName:
      item.placeName ||
      "Lugar sin nombre",

    createdBy:
      item.createdBy || "",

    createdByName:
      item.createdByName ||
      "Usuario",

    status:
      item.status ||
      "in_review",

    photoCount,

    /*
     * Se conserva por compatibilidad con la tarjeta,
     * aunque ya debería utilizar photoCount.
     */
    extraPhotosCount: photoCount,

    imageUrl:
      item.imageUrl ||
      item.mediumUrl ||
      item.thumbnailUrl ||
      "",

    imagePath:
      item.imagePath ||
      item.mediumPath ||
      item.thumbnailPath ||
      "",

    mediumUrl:
      item.mediumUrl || "",

    mediumPath:
      item.mediumPath || "",

    thumbnailUrl:
      item.thumbnailUrl || "",

    thumbnailPath:
      item.thumbnailPath || "",

    createdAt:
      formatCreatedAt(
        item.createdAt
      ),

    createdAtRaw:
      item.createdAt || null,

    updatedAt:
      item.updatedAt || null,
  };
}

export default async function getPhotoSubmissionsService({
  status = "all",
  limit = 15,
  cursor = "",
} = {}) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "No hay una sesión activa."
    );
  }

  const token =
    await user.getIdToken();

  const params = {
    limit,
  };

  /*
   * El backend acepta "all", pero omitirlo
   * deja la llamada un poco más limpia.
   */
  if (status && status !== "all") {
    params.status = status;
  }

  if (cursor) {
    params.cursor = cursor;
  }

  const response = await client.get(
    "/api/submissions/photo-submissions",
    {
      params,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const rawSubmissions =
    Array.isArray(
      response.data?.submissions
    )
      ? response.data.submissions
      : [];

  const rawPagination =
    response.data?.pagination || {};

  return {
    submissions:
      rawSubmissions.map(
        normalizeSubmission
      ),

    pagination: {
      limit:
        Number(
          rawPagination.limit
        ) || limit,

      hasMore:
        rawPagination.hasMore === true,

      nextCursor:
        rawPagination.nextCursor ||
        null,
    },
  };
}