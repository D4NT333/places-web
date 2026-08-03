import React, {
  useEffect,
  useState,
} from "react";

import {
  Menu,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  auth,
} from "../../config/firebaseConfig";

import {
  getAdminMeService,
} from "../../services/auth/getAdminMe.service";

import {
  logoutService,
} from "../../services/auth/logout.service";

import {
  icons,
} from "../../../assets/icons";

import AdminBreadcrumb from "../AdminBreadcrumb";
import UserBadge from "./Components/UserBadge";

import styles from "./styles";

export default function Header({
  onToggleSidebar,
  sidebarOpen,
  breadcrumbs = [],
}) {
  const navigate = useNavigate();

  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAdminUser() {
      try {
        if (!auth.currentUser) {
          return;
        }

        const admin = await getAdminMeService();

        if (isMounted) {
          setAdminUser(admin);
        }
      } catch (error) {
        console.log(
          "Error cargando admin en header:",
          error
        );
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

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.log(
        "Error al cerrar sesión:",
        error
      );
    }
  };

  const handleNotificationsClick = () => {
    console.log("Abrir notificaciones");
  };

  const handleManageAdministrators = () => {
  navigate("/administration/administrators");
};

  const fallbackUser = auth.currentUser;

  const displayName =
    adminUser?.displayName ||
    fallbackUser?.displayName ||
    "Administrador";

  const email =
    adminUser?.email ||
    fallbackUser?.email ||
    "";

  const photoURL =
    adminUser?.photoURL ||
    fallbackUser?.photoURL ||
    null;

    const isSuperAdmin =
  adminUser?.role === "super_admin";

  return (
    <header style={styles.headerWrapper}>
      {/* Verde del lado izquierdo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-92px",
          left: "-40px",

          width: "390px",
          height: "210px",

          borderRadius: "50%",

          background: `
            radial-gradient(
              ellipse at center,
              rgba(85, 198, 90, 0.24) 0%,
              rgba(103, 168, 242, 0.1) 46%,
              transparent 72%
            )
          `,

          transform: "rotate(7deg)",

          pointerEvents: "none",
        }}
      />

      {/* Línea verde */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-25px",
          left: "70px",

          width: "300px",
          height: "110px",

          borderTop: "1px solid rgba(85, 198, 90, 0.3)",
          borderRadius: "50%",

          transform: "rotate(6deg)",

          pointerEvents: "none",
        }}
      />

      {/* Azul del lado derecho */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-95px",
          right: "110px",

          width: "470px",
          height: "220px",

          borderRadius: "50%",

          background: `
            linear-gradient(
              135deg,
              rgba(103, 168, 242, 0.24),
              rgba(33, 118, 229, 0.13),
              transparent 72%
            )
          `,

          transform: "rotate(-8deg)",

          pointerEvents: "none",
        }}
      />

      {/* Línea azul */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-28px",
          right: "190px",

          width: "360px",
          height: "125px",

          borderTop: "1px solid rgba(33, 118, 229, 0.28)",
          borderRadius: "50%",

          transform: "rotate(-7deg)",

          pointerEvents: "none",
        }}
      />

      {/* Puntos azules */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "10px",
          right: "330px",

          width: "105px",
          height: "54px",

          opacity: 0.42,

          backgroundImage: `
            radial-gradient(
              circle,
              rgba(33, 118, 229, 0.7) 1.3px,
              transparent 1.5px
            )
          `,

          backgroundSize: "12px 12px",

          pointerEvents: "none",
        }}
      />

      <div style={styles.header}>
        <div style={styles.leftSection}>
          {!sidebarOpen && (
            <button
              type="button"
              style={styles.openSidebarButton}
              onClick={onToggleSidebar}
              title="Abrir panel"
              aria-label="Abrir panel"
            >
              <Menu
                size={60}
                strokeWidth={3}
              />
            </button>
          )}

          {!sidebarOpen && (
            <div style={styles.collapsedBrand}>
              <span style={styles.collapsedBrandTitle}>
                Panel administrativo
              </span>

              <span style={styles.collapsedBrandSubtitle}>
                Lsearch
              </span>
            </div>
          )}
        </div>

        <div style={styles.rightSection}>
          
          <UserBadge
  name={displayName}
  email={email}
  photoURL={photoURL}
  isSuperAdmin={isSuperAdmin}
  onManageAdministrators={
    handleManageAdministrators
  }
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