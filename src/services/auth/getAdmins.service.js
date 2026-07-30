import client from "../api/client";

import {
  auth,
} from "../../config/firebaseConfig.js";

export default async function getAdminsService({
  filter = "all",
  limit = 50,
  cursor = null,
} = {}) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "No existe una sesión administrativa activa.",
    );
  }

  const token =
    await user.getIdToken();

  try {
    const response =
      await client.get(
        "/api/auth/admins",
        {
          params: {
            filter,
            limit,
            ...(cursor
              ? {
                  cursor,
                }
              : {}),
          },

          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        },
      );

    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      "No fue posible cargar los administradores.";

    throw new Error(message);
  }
}