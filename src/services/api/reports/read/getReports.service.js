import client from "../../client";
import { auth } from "../../../../config/firebaseConfig.js";

export default async function getReportsService({
  status = "all",
  limit = 15,
  cursor = null,
} = {}) {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Debes iniciar sesión como administrador.");
    }

    const token = await user.getIdToken();

    const params = {
      status,
      limit,
    };

    if (cursor) {
      params.cursor = cursor;
    }

    const response = await client.get("/api/reports/list", {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error en getReportsService:",
      error?.response?.data || error.message
    );

    throw new Error(
      error?.response?.data?.message ||
        "No se pudieron cargar los reportes."
    );
  }
}