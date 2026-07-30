import client from "../api/client";

import {
  auth,
} from "../../config/firebaseConfig";

async function getAuthConfig() {
  const currentUser =
    auth.currentUser;

  if (!currentUser) {
    throw new Error(
      "No existe una sesión administrativa activa.",
    );
  }

  const token =
    await currentUser.getIdToken();

  return {
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  };
}

function getErrorMessage(
  error,
  fallbackMessage,
) {
  return (
    error?.response?.data?.message ||
    fallbackMessage
  );
}

export async function discoverGoogleCandidatesService(
  hexId,
) {
  try {
    const config =
      await getAuthConfig();

    const response =
      await client.post(
        "/api/places/admin/google-places/discover-by-h3",
        {
          hexId,
        },
        config,
      );

    return response.data.data;
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        "No se pudieron importar candidatos desde Google.",
      ),
    );
  }
}

export async function getGoogleCandidatesService({
  status = "in_review",
  limit = 15,
  cursor = null,
} = {}) {
  try {
    const config =
      await getAuthConfig();

    const response =
      await client.get(
        "/api/places/admin/google-places/candidates",
        {
          ...config,

          params: {
            status,
            limit,
            ...(cursor
              ? {
                  cursor,
                }
              : {}),
          },
        },
      );

    return response.data.data;
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        "No se pudieron cargar los candidatos.",
      ),
    );
  }
}

export async function getGoogleCandidatesSummaryService() {
  try {
    const config =
      await getAuthConfig();

    const response =
      await client.get(
        "/api/places/admin/google-places/candidates-summary",
        config,
      );

    return response.data.data;
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        "No se pudo consultar el resumen de candidatos.",
      ),
    );
  }
}

export async function getGoogleCandidateDetailsService(
  googlePlaceId,
) {
  try {
    const config =
      await getAuthConfig();

    const response =
      await client.get(
        `/api/places/admin/google-places/candidates/${encodeURIComponent(
          googlePlaceId,
        )}/details`,
        config,
      );

    return response.data.data;
  } catch (error) {
    throw new Error(
      getErrorMessage(
        error,
        "No se pudieron cargar los detalles del candidato.",
      ),
    );
  }
}