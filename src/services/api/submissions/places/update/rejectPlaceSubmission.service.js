import client from "../../../client";

export default async function rejectPlaceSubmissionService(submissionId, payload) {
  if (!submissionId) {
    throw new Error("Falta submissionId para rechazar la propuesta.");
  }

  const response = await client.post(
    `/api/admin/place-submissions/${submissionId}/reject`,
    payload
  );

  return response.data?.data || null;
}