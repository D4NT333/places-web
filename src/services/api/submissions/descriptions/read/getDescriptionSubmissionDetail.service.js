import { getAuth } from "firebase/auth";
import client from "../../../client";

async function getDescriptionSubmissionDetailService(submissionId) {
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
  const response = await client.get(
  `/api/description-submissions/${submissionId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    console.log("Detalle propuesta:", response.data);

    return response.data.submission;
  } catch (error) {
    console.error("Error detalle descripción:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
    });

    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "No se pudo cargar el detalle de la propuesta.";

    throw new Error(message);
  }
}

export default getDescriptionSubmissionDetailService;