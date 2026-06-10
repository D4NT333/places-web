import { getAuth } from "firebase/auth";
import client from "../../../client";

const STATUS_TO_BACKEND = {
  all: "",
  pending: "in_review",
  accepted: "accepted",
  rejected: "rejected",
};

export default async function getDescriptionSubmissionsService(status = "all") {
  const auth = getAuth();
  const user = auth.currentUser;

  const token = await user.getIdToken();

  const backendStatus = STATUS_TO_BACKEND[status] ?? "";

  const params = {};

  if (backendStatus) {
    params.status = backendStatus;
  }

  const response = await client.get("/api/description-submissions", {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return Array.isArray(response.data?.submissions)
    ? response.data.submissions
    : [];
}