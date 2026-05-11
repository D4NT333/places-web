import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

export async function logoutService() {
  await signOut(auth);
}