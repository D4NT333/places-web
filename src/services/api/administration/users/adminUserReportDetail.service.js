import { getAuth } from "firebase/auth";
import client from "../../client";

export default async function getAdminUserReportDetailService(
  userId,
  reportId
) {
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

  const currentUser = getAuth().currentUser;

  if (!currentUser) {
    throw new Error(
      "No hay una sesión activa."
    );
  }

  const token = await currentUser.getIdToken();

  const response = await client.get(
    `/api/users/admin/${userId}/reports/${reportId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}