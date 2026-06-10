import { getAuth } from "firebase/auth";
import client from "../../../client";

export default async function rejectDescriptionSubmissionService(
  submissionId,
  payload
) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No hay usuario autenticado.");
  }

  const token = await user.getIdToken();

  const response = await client.patch(
    `/api/description-submissions/${submissionId}/reject`,
    {
      rejectionReason: payload.rejectionReason,
      rejectionComment: payload.rejectionComment,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}