import client from "../../client.js";
import { auth } from "../../../../config/firebaseConfig.js";

export default async function getAdminUsersService({
  limit = 15,
  cursor = null,
  status = "all",
} = {}) {
  const token =
    await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error(
      "No hay sesión activa."
    );
  }

  const params = {
    limit,
    status,
  };

  if (cursor) {
    params.cursor = cursor;
  }

  const response = await client.get(
    "/api/users/admin/list",
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