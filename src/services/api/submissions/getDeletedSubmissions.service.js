import client from "../client";

function cleanString(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function getTypeLabel(type) {
  const normalizedType =
    cleanString(type).toLowerCase();

  const labels = {
    place: "Lugar",
    photo: "Fotografías",
    description: "Descripción",
  };

  return (
    labels[normalizedType] ||
    normalizedType ||
    "Propuesta"
  );
}

function getStatusLabel(status) {
  const normalizedStatus =
    cleanString(status).toLowerCase();

  const labels = {
    in_review: "Pendiente",
    returned: "Devuelta",
    resubmitted: "Reenviada",
    approved: "Aprobada",
    rejected: "Rechazada",
    pending_delete:
      "Pendiente de eliminación",
  };

  return (
    labels[normalizedStatus] ||
    normalizedStatus ||
    "Sin estado"
  );
}

function formatDate(dateString) {
  if (!dateString) {
    return "Sin fecha";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return new Intl.DateTimeFormat(
    "es-MX",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  ).format(date);
}

function normalizeDeletedSubmission(
  submission
) {
  const type =
    cleanString(submission?.type);

  const submissionId =
    cleanString(
      submission?.submissionId
    ) ||
    cleanString(
      submission?.submissionDocId
    );

  const requestedAt =
    submission?.requestedAt ||
    submission?.updatedAt ||
    null;

  const userName =
    cleanString(
      submission?.userName
    ) || "Usuario";

  return {
    id:
      cleanString(submission?.id) ||
      `${type}_${submissionId}`,

    submissionId,

    submissionDocId:
      cleanString(
        submission?.submissionDocId
      ) || submissionId,

    sourceCollection:
      cleanString(
        submission?.sourceCollection
      ),

    proposal:
      cleanString(submission?.title) ||
      "Propuesta sin título",

    title:
      cleanString(submission?.title) ||
      "Propuesta sin título",

    type,

    typeLabel:
      getTypeLabel(type),

    status:
      cleanString(
        submission?.status
      ),

    statusLabel:
      getStatusLabel(
        submission?.status
      ),

    previousStatus:
      cleanString(
        submission?.previousStatus
      ),

    previousStatusLabel:
      getStatusLabel(
        submission?.previousStatus
      ),

    userId:
      cleanString(
        submission?.userId
      ),

    userName,

    user: {
      id:
        cleanString(
          submission?.userId
        ),

      name: userName,

      photoURL:
        cleanString(
          submission?.userPhotoURL
        ),
    },

    previewImageUrl:
      cleanString(
        submission?.previewImageUrl
      ) || null,

    requestedAt,

    updatedAt:
      submission?.updatedAt ||
      null,

    deletedAt:
      formatDate(requestedAt),

    updatedAtLabel:
      formatDate(
        submission?.updatedAt
      ),
  };
}

function normalizePagination(
  pagination,
  fallbackLimit
) {
  return {
    limit:
      Number(pagination?.limit) ||
      fallbackLimit,

    hasMore:
      Boolean(
        pagination?.hasMore
      ),

    nextCursor:
      cleanString(
        pagination?.nextCursor
      ) || null,
  };
}

export default async function getDeletedSubmissionsService({
  limit = 15,
  cursor = null,
} = {}) {
  try {
    const params = {
      limit,
    };

    if (cursor) {
      params.cursor = cursor;
    }

    const response =
      await client.get(
        "/api/admin/deleted-submissions",
        {
          params,
        }
      );

    const responseData =
      response?.data?.data || {};

    const rawItems =
      Array.isArray(
        responseData.items
      )
        ? responseData.items
        : [];

    return {
      items:
        rawItems.map(
          normalizeDeletedSubmission
        ),

      pagination:
        normalizePagination(
          responseData.pagination,
          limit
        ),
    };
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "No fue posible obtener las propuestas eliminadas.";

    const serviceError =
      new Error(message);

    serviceError.statusCode =
      error?.response?.status ||
      500;

    throw serviceError;
  }
}