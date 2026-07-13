import { getAuth } from "firebase/auth";

import client from "../../client";

export default async function getAdminPlacesService({
  limit = 15,
  cursor = null,
  moderationStatus = "all",
  activityStatus = "all",
} = {}) {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No hay una sesión activa.");
    }

    const token = await user.getIdToken();

    const response = await client.get("/api/places/admin/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      params: {
        limit,
        cursor: cursor || undefined,
        moderationStatus,
        activityStatus,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error obteniendo lugares administrativos:", error);

    const message =
      error.response?.data?.message ||
      error.message ||
      "No se pudieron obtener los lugares.";

    throw new Error(message);
  }
}