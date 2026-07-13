import client from "../../client";
import { auth } from "../../../../config/firebaseConfig";

export default async function getAdminPlaceReportsService({
  placeId,
  limit = 10,
  cursor = null,
  status = "all",
}) {
  if (!placeId) {
    throw new Error("El identificador del lugar es obligatorio.");
  }

  const user = auth.currentUser;

  if (!user) {
    throw new Error("No existe una sesión activa.");
  }

  const token = await user.getIdToken();

  const response = await client.get(
    `/api/places/admin/${encodeURIComponent(placeId)}/reports`,
    {
      params: {
        limit,
        status,
        ...(cursor ? { cursor } : {}),
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}