import client from "../../client";
import { auth } from "../../../../config/firebaseConfig";

export default async function updateAdminPlaceReviewVisibilityService({
  placeId,
  reviewId,
  hidden,
  reason = "",
}) {
  if (!placeId) {
    throw new Error("El identificador del lugar es obligatorio.");
  }

  if (!reviewId) {
    throw new Error("El identificador del comentario es obligatorio.");
  }

  if (typeof hidden !== "boolean") {
    throw new Error("Debes indicar la nueva visibilidad del comentario.");
  }

  const user = auth.currentUser;

  if (!user) {
    throw new Error("No existe una sesión activa.");
  }

  const token = await user.getIdToken();

  const response = await client.patch(
    `/api/places/admin/${encodeURIComponent(
      placeId
    )}/reviews/${encodeURIComponent(
      reviewId
    )}/visibility`,
    {
      hidden,
      reason,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}