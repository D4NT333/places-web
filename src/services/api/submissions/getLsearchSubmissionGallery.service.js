import client from "../client";
import { auth } from "../../../config/firebaseConfig";

export default async function getLsearchSubmissionGalleryService({
  submissionType,
  submissionId,
}) {
  if (!submissionType) {
    throw new Error(
      "El tipo de propuesta es obligatorio."
    );
  }

  if (!submissionId) {
    throw new Error(
      "El identificador de la propuesta es obligatorio."
    );
  }

  const user = auth.currentUser;

  if (!user) {
    throw new Error("No existe una sesión activa.");
  }

  const token = await user.getIdToken();

  const response = await client.get(
    `/api/gallery/${encodeURIComponent(
      submissionType
    )}/${encodeURIComponent(submissionId)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
