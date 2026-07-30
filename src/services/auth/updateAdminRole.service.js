import {
  auth,
} from "../../config/firebaseConfig";

import client from "../api/client";

export default async function updateAdminRoleService({
  adminUid,
  role,
}) {
  const currentUser =
    auth.currentUser;

  if (!currentUser) {
    throw new Error(
      "No existe una sesión administrativa activa.",
    );
  }

  const token =
    await currentUser.getIdToken();

  try {
    const response =
      await client.patch(
        `/api/auth/admins/${encodeURIComponent(
          adminUid,
        )}/role`,
        {
          role,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        },
      );

    return response.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message ||
        "No fue posible cambiar el rol administrativo.",
    );
  }
}