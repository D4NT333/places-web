import client from "../../client";
import { auth } from "../../../../config/firebaseConfig.js";

const ALLOWED_MODERATION_ACTIONS =
  new Set([
    "warned",
    "hidden",
  ]);

export default async function moderateAdminPlaceService({
  placeId,
  moderationStatus,
  note,
}) {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error(
        "Debes iniciar sesión como administrador."
      );
    }

    if (!placeId) {
      throw new Error(
        "El identificador del lugar es obligatorio."
      );
    }

    if (
      !ALLOWED_MODERATION_ACTIONS.has(
        moderationStatus
      )
    ) {
      throw new Error(
        "La medida administrativa no es válida."
      );
    }

    const cleanNote =
      typeof note === "string"
        ? note.trim()
        : "";

    if (cleanNote.length < 10) {
      throw new Error(
        "La nota administrativa debe tener al menos 10 caracteres."
      );
    }

    if (cleanNote.length > 500) {
      throw new Error(
        "La nota administrativa no puede superar 500 caracteres."
      );
    }

    const token =
      await user.getIdToken();

    const response =
      await client.patch(
        `/api/places/admin/${encodeURIComponent(
          placeId
        )}/moderation`,
        {
          /*
           * El backend espera "action",
           * no "moderationStatus".
           */
          action:
            moderationStatus,

          note:
            cleanNote,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error en moderateAdminPlaceService:",
      error?.response?.data ||
        error.message
    );

    throw new Error(
      error?.response?.data?.message ||
      error.message ||
      "No se pudo aplicar la moderación al lugar."
    );
  }
}