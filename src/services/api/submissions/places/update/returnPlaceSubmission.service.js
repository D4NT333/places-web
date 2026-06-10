import client from "../../../client.js";

export default async function returnPlaceSubmissionService(
  submissionId,
  payload
) {
  if (!submissionId) {
    throw new Error("Falta submissionId para devolver la propuesta.");
  }

  const response = await client.post(
    `/api/admin/place-submissions/${submissionId}/return`,
    payload
  );

  return response.data;
}