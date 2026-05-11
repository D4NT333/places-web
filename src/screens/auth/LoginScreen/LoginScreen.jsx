import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginWithGoogleService } from "../../../services/auth/loginWithGoogle.service";
import { getAdminMeService } from "../../../services/auth/getAdminMe.service";
import { logoutService } from "../../../services/auth/logout.service";

import BrandHeader from "./Components/BrandHeader";
import LoginPanel from "./Components/LoginPanel";
import PreviewPanel from "./Components/PreviewPanel";

import styles from "./styles";

export default function LoginScreen() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      await loginWithGoogleService();

      const adminUser = await getAdminMeService();

      console.log("Admin validado:", adminUser);

      navigate("/home", { replace: true });
    } catch (error) {
      console.log("Error al iniciar sesión:", error);

      await logoutService();

      setErrorMessage(
        error?.response?.data?.message ||
          "No tienes acceso al panel administrativo."
      );
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