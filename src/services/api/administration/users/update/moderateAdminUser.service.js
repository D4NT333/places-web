import { auth } from "../../../../../config/firebaseConfig.js";
import client from "../../../client.js";

export default async function moderateAdminUserService({
  userId,
  moderationType,
  reason,
  reasonLabel,
  message,
}) {
  if (!userId) {
    throw new Error(
      "El identificador del usuario es obligatorio."
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

  const response = await client.post(
    `/api/users/admin/${encodeURIComponent(
      userId
    )}/moderation`,
    {
      moderationType,
      reason,
      reasonLabel,
      message,
    },
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );

  return response.data;
}