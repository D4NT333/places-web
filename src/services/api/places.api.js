import { API_URL } from "./client";

export async function postDiscoverPlacesByH3(hexId) {
  const response = await fetch(`${API_URL}/api/places/add/discover-by-h3`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hexId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al descubrir lugares por H3");
  }

  return data;
}