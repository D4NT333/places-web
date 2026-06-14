import { getAuth } from "firebase/auth";
import client from "../../../client";

const STATUS_TO_BACKEND = {
  all: "",
  in_review: "in_review",
  approved: "approved",
  rejected: "rejected",
};

export default async function getDescriptionSubmissionsService({
  status = "all",
  limit = 15,
  cursor = null,
} = {}) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No existe un usuario autenticado.");
  }

  const token = await user.getIdToken();

  const backendStatus = STATUS_TO_BACKEND[status] ?? "";

  const params = {
    limit,
  };

  if (backendStatus) {
    params.status = backendStatus;
  }

  if (cursor) {
    params.cursor = cursor;
  }

  const response = await client.get(
    "/api/description-submissions",
    {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  /*
   * Formato paginado esperado:
   *
   * {
   *   submissions: [],
   *   nextCursor: "document-id"
   * }
   */
  return {
    items: Array.isArray(response.data?.submissions)
      ? response.data.submissions
      : Array.isArray(response.data?.items)
        ? response.data.items
        : Array.isArray(response.data)
          ? response.data
          : [],

    nextCursor:
      response.data?.nextCursor || null,
  };
}