import client from "../../client.js";
import { auth } from "../../../../config/firebaseConfig.js";

export default async function getAdminUserDetailService(userId) {
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

  const response = await client.get(
    `/api/users/admin/detail/${userId}`,
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