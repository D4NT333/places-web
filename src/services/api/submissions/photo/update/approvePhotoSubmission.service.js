import { getAuth } from "firebase/auth";
import client from "../../../client";

function cleanString(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export default async function approvePhotoSubmissionService(
  submissionId
) {
  const normalizedSubmissionId =
    cleanString(submissionId);

  if (!normalizedSubmissionId) {
    throw new Error(
      "El identificador de la propuesta es obligatorio."
    );
  }

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "No se encontró un usuario autenticado."
    );
  }

  const token =
    await user.getIdToken();

  const response = await client.patch(
    `/api/submissions/photo-submissions/${normalizedSubmissionId}/approve`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const submission =
    response.data?.submission;

  if (!submission) {
    throw new Error(
      "El backend no devolvió la propuesta actualizada."
    );
  }

  return submission;
}