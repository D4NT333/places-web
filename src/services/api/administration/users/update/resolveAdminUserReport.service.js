import { auth } from "../../../../../config/firebaseConfig.js";
import client from "../../../client.js";

export default async function resolveAdminUserReportService({
  userId,
  reportId,
  decision,
  resolutionNote,
}) {
  if (!userId) {
    throw new Error(
      "El identificador del usuario es obligatorio."
    );
  }

  if (!reportId) {
    throw new Error(
      "El identificador del reporte es obligatorio."
    );
  }

  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error(
      "No hay un usuario autenticado."
    );
  }

  const idToken =
    await currentUser.getIdToken(true);

  const response = await client.patch(
    `/api/users/admin/${encodeURIComponent(
      userId
    )}/reports/${encodeURIComponent(
      reportId
    )}/resolve`,
    {
      decision,
      resolutionNote,
    },
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );

  return response.data;
}