import client from "../../../client";
import { auth } from "../../../../../config/firebaseConfig.js";

export default async function getAdminUserReportsService(
  userId,
  {
    limit = 15,
    cursor = null,
  } = {}
) {
  if (!userId) {
    throw new Error(
      "Falta el id del usuario."
    );
  }

  const token =
    await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error(
      "No hay sesión activa."
    );
  }

  const params = {
    limit,
  };

  if (cursor) {
    params.cursor = cursor;
  }

  const response = await client.get(
    `/api/users/admin/detail/${userId}/reports`,
    {
      params,
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