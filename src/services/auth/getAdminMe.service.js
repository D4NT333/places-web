import { auth } from "../../config/firebaseConfig.js";
import client from "../api/client";

export async function getAdminMeService() {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("No hay usuario autenticado.");
  }

  const token = await currentUser.getIdToken();

  const response = await client.get("/api/auth/admin/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data?.admin || response.data;
}