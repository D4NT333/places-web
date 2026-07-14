import client from "../../client";
import { auth } from "../../../../config/firebaseConfig";

export default async function getAdminPlaceReviewDetailService({
  placeId,
  reviewId,
}) {
  if (!placeId) {
    throw new Error("El identificador del lugar es obligatorio.");
  }

  if (!reviewId) {
    throw new Error("El identificador del comentario es obligatorio.");
  }

  const user = auth.currentUser;

  if (!user) {
    throw new Error("No existe una sesión activa.");
  }

  const token = await user.getIdToken();

  const response = await client.get(
    `/api/places/admin/${encodeURIComponent(
      placeId
    )}/reviews/${encodeURIComponent(reviewId)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}