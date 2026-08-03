import {
  getAuth,
} from "firebase/auth";

import client
  from "../../client";

export async function rejectGooglePlaceCandidateService({
  candidateId,
  reason =
    "not_suitable_for_lsearch",
}) {
  if (!candidateId) {
    throw new Error(
      "No se encontró el ID del candidato.",
    );
  }

  const auth =
    getAuth();

  const currentUser =
    auth.currentUser;

  if (!currentUser) {
    throw new Error(
      "No existe una sesión administrativa activa.",
    );
  }

  const idToken =
    await currentUser.getIdToken();

  const response =
    await client.patch(
      `/api/places/admin/google-places/candidates/${encodeURIComponent(
        candidateId,
      )}/reject`,
      {
        reason,
      },
      {
        headers: {
          Authorization:
            `Bearer ${idToken}`,
        },
      },
    );

  return (
    response.data?.data ||
    response.data
  );
}

export default rejectGooglePlaceCandidateService;