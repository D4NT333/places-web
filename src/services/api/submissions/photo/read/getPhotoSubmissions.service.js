import { getAuth } from "firebase/auth";

import client from "../../../client";

function formatCreatedAt(value) {
  if (!value) {
    return "Sin fecha";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
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

function normalizeSubmission(item) {
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

    createdAt:
      formatCreatedAt(
        item.createdAt
      ),

    createdAtRaw:
      item.createdAt || null,

    extraPhotosCount:
      Number(
        item.photoCount ?? 0
      ),

    /*
     * imageUrl ya contiene medium desde el backend.
     * Los demás campos son respaldos.
     */
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

    status:
      item.status ||
      "in_review",
  };
}

export default async function getPhotoSubmissionsService({
  status = "all",
  limit = 15,
  cursor = null,
} = {}) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "No existe una sesión activa."
    );
  }

  const token =
    await user.getIdToken();

  const params = {
    limit,
  };

  if (status !== "all") {
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
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  const rawSubmissions =
    Array.isArray(
      response.data?.submissions
    )
      ? response.data.submissions
      : [];

  const submissions =
    rawSubmissions.map(
      normalizeSubmission
    );

  return {
    submissions,

    pagination: {
      hasMore:
        response.data?.pagination
          ?.hasMore === true,

      nextCursor:
        response.data?.pagination
          ?.nextCursor || null,

      limit:
        response.data?.pagination
          ?.limit || limit,
    },
  };
}