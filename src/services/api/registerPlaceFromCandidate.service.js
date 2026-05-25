import client from "./client";

export async function registerPlaceFromCandidateService(payload) {
  try {
    const response = await client.post(
      "/api/places/admin/google-places/register-from-candidate",
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Error registrando lugar desde candidato:", error);

    const message =
      error.response?.data?.message ||
      error.message ||
      "No se pudo registrar el lugar desde el candidato.";

    throw new Error(message);
  }
}