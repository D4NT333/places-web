import { getAuth } from "firebase/auth";
import client from "../../../client";

export default async function approvePlaceSubmissionService(submissionId) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No hay usuario autenticado.");
  }

  const token = await user.getIdToken();

  const response = await client.patch(
    `/api/place-submissions/${submissionId}/approve`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}