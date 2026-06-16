import { getAuth } from "firebase/auth";

import client from "../../../client";

function cleanString(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export default async function rejectPhotoSubmissionService({
  submissionId,
  reason,
  message,
}) {
  const normalizedSubmissionId =
    cleanString(submissionId);

  const normalizedReason =
    cleanString(reason);

  const normalizedMessage =
    cleanString(message);

  if (!normalizedSubmissionId) {
    throw new Error(
      "El identificador de la propuesta es obligatorio."
    );
  }

  if (!normalizedReason) {
    throw new Error(
      "Debes seleccionar un motivo de rechazo."
    );
  }

  if (normalizedMessage.length < 10) {
    throw new Error(
      "La explicación debe contener al menos 10 caracteres."
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
    `/api/submissions/photo-submissions/${encodeURIComponent(
      normalizedSubmissionId
    )}/reject`,
    {
      reason: normalizedReason,
      message: normalizedMessage,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    response.data?.submission ||
    null
  );
}