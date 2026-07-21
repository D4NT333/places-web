import client from "../../client";
import { auth } from "../../../../config/firebaseConfig.js";

export default async function resolveAdminPlaceReportService({
  placeId,
  reportId,
  decision,
  resolutionNote,
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

    if (!reportId) {
      throw new Error(
        "El identificador del reporte es obligatorio."
      );
    }

    if (
      decision !== "resolved" &&
      decision !== "dismissed"
    ) {
      throw new Error(
        "La decisión del reporte no es válida."
      );
    }

    const cleanResolutionNote =
      typeof resolutionNote === "string"
        ? resolutionNote.trim()
        : "";

    if (cleanResolutionNote.length < 10) {
      throw new Error(
        "La nota de resolución debe tener al menos 10 caracteres."
      );
    }

    const token = await user.getIdToken();

    const response = await client.patch(
      `/api/places/admin/${encodeURIComponent(
        placeId
      )}/reports/${encodeURIComponent(
        reportId
      )}/resolve`,
      {
        decision,
        resolutionNote:
          cleanResolutionNote,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error en resolveAdminPlaceReportService:",
      error?.response?.data ||
        error.message
    );

    throw new Error(
      error?.response?.data?.message ||
        error.message ||
        "No se pudo resolver el reporte."
    );
  }
}