import client from "./client";

export async function discoverGoogleCandidatesService(hexId) {
  const response = await client.post(
    "/api/places/admin/google-places/discover-by-h3",
    {
      hexId,
    }
  );

  return response.data.data;
}

export async function getGoogleCandidatesService({
  status = "in_review",
  limit = 15,
  cursor = null,
} = {}) {
  const response = await client.get(
    "/api/places/admin/google-places/candidates",
    {
      params: {
        status,
        limit,
        cursor,
      },
    }
  );

  return response.data.data;
}

export async function getGoogleCandidatesSummaryService() {
  const response = await client.get(
    "/api/places/admin/google-places/candidates-summary"
  );

  return response.data.data;
}