import { getAuth } from "firebase/auth";
import client from "../../../client";

async function approveDescriptionSubmissionService(submissionId) {
  if (!submissionId) {
    throw new Error("El id de la propuesta es obligatorio.");
  }

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No hay un usuario autenticado.");
  }

  const token = await user.getIdToken();

  try {
    const response = await client.patch(
      `/api/description-submissions/${submissionId}/approve`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error en approveDescriptionSubmissionService:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
    });

    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "No se pudo aprobar la propuesta de descripción.";

    throw new Error(message);
  }
}

export default approveDescriptionSubmissionService;