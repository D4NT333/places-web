import client from "../client";
import { auth } from "../../../config/firebaseConfig.js";

export default async function deleteDeletedSubmissionService(
  deletedSubmissionId
) {
  if (!deletedSubmissionId) {
    throw new Error(
      "Falta el id de la propuesta eliminada."
    );
  }

  const token =
    await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error(
      "No hay sesión activa."
    );
  }

  const response = await client.delete(
    `/api/admin/deleted-submissions/${deletedSubmissionId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    response.data?.data ||
    response.data
  );
}