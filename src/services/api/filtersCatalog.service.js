import client from "./client";

export async function getCreateFiltersCatalogService(tagId) {
  const params = {};

  if (tagId) {
    params.tagId = tagId;
  }

  const response = await client.get(
    "/api/places/admin/create-catalog",
    {
      params,
    }
  );

  return response.data.data;
}