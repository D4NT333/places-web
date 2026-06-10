import client from "../../../client";

export default async function getPlaceSubmissionDetailService(submissionId) {
  try {
    const response = await client.get(
      `/api/admin/place-submissions/${submissionId}`
    );

    return response.data.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "No se pudo cargar el detalle de la submission.";

    throw new Error(message);
  }
}