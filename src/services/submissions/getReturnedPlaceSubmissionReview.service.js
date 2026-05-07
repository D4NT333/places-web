import client from "../api/client";

export default async function getReturnedPlaceSubmissionReviewService(
  submissionId
) {
  if (!submissionId) {
    throw new Error("Falta submissionId para cargar el motivo de devolución.");
  }

  const response = await client.get(
    `/api/admin/place-submissions/${submissionId}/return`
  );

  return response.data?.data || null;
}