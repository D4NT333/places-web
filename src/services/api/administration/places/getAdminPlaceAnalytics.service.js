import client from "../../client";

import { auth } from "../../../../config/firebaseConfig.js";

export default async function getAdminPlaceAnalyticsService({
  placeId,
  weekId = null,
}) {
  if (!placeId) {
    throw new Error(
      "El identificador del lugar es obligatorio para cargar las analíticas."
    );
  }

  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error(
      "No existe un usuario autenticado."
    );
  }

  const token =
    await currentUser.getIdToken();

  const response = await client.get(
    `/api/places/admin/${placeId}/analytics`,
    {
      params: {
        ...(weekId
          ? {
              weekId,
            }
          : {}),
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.analytics;
}