import React, { useEffect, useState } from "react";

import { loginWithGoogleService } from "../../../services/auth/loginWithGoogle.service";
import { getAdminMeService } from "../../../services/auth/getAdminMe.service";
import { logoutService } from "../../../services/auth/logout.service";

import BrandHeader from "./Components/BrandHeader";
import LoginPanel from "./Components/LoginPanel";
import PreviewPanel from "./Components/PreviewPanel";

import styles from "./styles";

const UNAUTHORIZED_LOGIN_MESSAGE_KEY = "lsearch_admin_login_error";

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedMessage = localStorage.getItem(UNAUTHORIZED_LOGIN_MESSAGE_KEY);

    if (savedMessage) {
      setErrorMessage(savedMessage);
      localStorage.removeItem(UNAUTHORIZED_LOGIN_MESSAGE_KEY);
    }
  }, []);

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      await loginWithGoogleService();

      const adminUser = await getAdminMeService();

      console.log("Admin validado:", adminUser);
    } catch (error) {
      console.log("Error al iniciar sesión:", error);

      const message =
        error?.response?.data?.message ||
        "Solo cuentas administrativas autorizadas pueden ingresar.";

      try {
        await logoutService();
      } catch (logoutError) {
        console.log("Error cerrando sesión:", logoutError);
      }

      localStorage.setItem(UNAUTHORIZED_LOGIN_MESSAGE_KEY, message);

      window.location.href = "/login";
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.screen}>
      <section style={styles.card}>
        <div style={styles.leftPanel}>
          <BrandHeader />

          <LoginPanel
            loading={loading}
            errorMessage={errorMessage}
            onLoginWithGoogle={handleLoginWithGoogle}
          />
        </div>

        <PreviewPanel />
      </section>
    </main>
  );
}