import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebaseConfig";
import { getAdminMeService } from "../../services/auth/getAdminMe.service";
import { logoutService } from "../../services/auth/logout.service";

import { icons } from "../../../assets/icons";

import AdminBreadcrumb from "../AdminBreadcrumb";

import MenuButton from "./Components/MenuButton";
import UserBadge from "./Components/UserBadge";

import styles from "./styles";

export default function Header({ onToggleSidebar, breadcrumbs = [] }) {
  const navigate = useNavigate();

  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAdminUser() {
      try {
        if (!auth.currentUser) return;

        const admin = await getAdminMeService();

        if (isMounted) {
          setAdminUser(admin);
        }
      } catch (error) {
        console.log("Error cargando admin en header:", error);
      }
    }

    loadAdminUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutService();
      navigate("/login", { replace: true });
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  const handleNotificationsClick = () => {
    console.log("Abrir notificaciones");
  };

  const fallbackUser = auth.currentUser;

  const displayName =
    adminUser?.displayName ||
    fallbackUser?.displayName ||
    "Administrador";

  const email = adminUser?.email || fallbackUser?.email || "";

  const photoURL = adminUser?.photoURL || fallbackUser?.photoURL || null;

  return (
    <header style={styles.headerWrapper}>
      <div style={styles.header}>
        <div style={styles.leftSection}>
          <MenuButton onClick={onToggleSidebar} />

          <div>
            <h1 style={styles.title}>Panel administrativo</h1>
            <p style={styles.subtitle}>Gestión y validación de contenido</p>
          </div>
        </div>

        <div style={styles.rightSection}>
          <button
            type="button"
            style={styles.notificationButton}
            onClick={handleNotificationsClick}
            title="Notificaciones"
          >
            <img
              src={icons.bell}
              alt="Notificaciones"
              style={styles.notificationIcon}
            />

            <span style={styles.notificationBadge}>3</span>
          </button>

          <UserBadge
            name={displayName}
            email={email}
            photoURL={photoURL}
            onLogout={handleLogout}
          />
        </div>
      </div>

      {breadcrumbs.length > 0 && (
        <div style={styles.breadcrumbBar}>
          <AdminBreadcrumb items={breadcrumbs} />
        </div>
      )}
    </header>
  );
}