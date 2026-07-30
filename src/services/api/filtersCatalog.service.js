import {
  auth,
} from "../../config/firebaseConfig";

import client from "./client";

export async function getCreateFiltersCatalogService(
  tagId,
) {
  const currentUser =
    auth.currentUser;

  if (!currentUser) {
    throw new Error(
      "No existe una sesión administrativa activa.",
    );
  }

  const token =
    await currentUser.getIdToken();

  const params = {};

  if (tagId) {
    params.tagId = tagId;
  }

  try {
    const response =
      await client.get(
        "/api/places/admin/create-catalog",
        {
          params,

          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        },
      );

    return response.data.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message ||
        "No se pudo cargar el catálogo de filtros.",
    );
  }
}