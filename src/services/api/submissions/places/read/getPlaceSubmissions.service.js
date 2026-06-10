import client from "../../../client";

export default async function getPlaceSubmissionsService({
  status = "all",
  limit = 15,
  cursor = null,
} = {}) {
  try {
    const response = await client.get("/api/admin/place-submissions", {
      params: {
        status,
        limit,
        ...(cursor ? { cursor } : {}),
      },
    });

    return response.data.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "No se pudieron cargar las submissions.";

    throw new Error(message);
  }
}