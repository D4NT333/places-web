import client from "../../../client";
import { auth } from "../../../../../config/firebaseConfig.js";

export default async function getAdminUserDetailService(
  userId,
  { weekStart = null } = {}
) {
  if (!userId) {
    throw new Error("Falta el id del usuario.");
  }

  const token =
    await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error("No hay sesión activa.");
  }

  const response = await client.get(
    `/api/users/admin/detail/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        ...(weekStart ? { weekStart } : {}),
      },
    }
  );

  return response.data?.data || response.data;
}