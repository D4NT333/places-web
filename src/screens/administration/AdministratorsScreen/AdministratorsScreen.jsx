import React, {
  useMemo,
  useState,
} from "react";

import {
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

/*
 * Ajusta únicamente esta ruta si LayoutScreen
 * se encuentra en otra carpeta.
 */
import LayoutScreen from "../../../layout";

import AdminDetailModal from "./components/AdminDetailModal";
import AdminFilters from "./components/AdminFilters";
import AdminSummaryCard from "./components/AdminSummaryCard";
import AdminTable from "./components/AdminTable";

import styles from "./styles";

const MOCK_ADMINS = [
  {
    id: "admin-1",
    uid: "B8bZKhBsXeWAzE5oXMMz8xvGEYn2",
    displayName: "Dante",
    email: "venceceti@gmail.com",
    role: "super_admin",
    status: "active",
    createdAt: "2026-05-10",
    createdBy: "Sistema",
    lastActivityAt: "Hace 15 min",
    avatarUrl: null,
    initials: "DA",
    isCurrentAdmin: true,
    activity: {
      approvedPlaces: 12,
      resolvedReports: 8,
      loadedCandidates: 3,
      lastAction: "Hace 15 min",
    },
  },
  {
    id: "admin-2",
    uid: "DPfrJ2UQUSaujWZb3eewLbXRNEp1",
    displayName: "Aster",
    email: "asterworlas2@gmail.com",
    role: "admin",
    status: "active",
    createdAt: "2026-05-31",
    createdBy: "Dante",
    lastActivityAt: "Hace 2 h",
    avatarUrl: null,
    initials: "AS",
    isCurrentAdmin: false,
    activity: {
      approvedPlaces: 8,
      resolvedReports: 11,
      loadedCandidates: 0,
      lastAction: "Hace 2 h",
    },
  },
  {
    id: "admin-3",
    uid: "admin-mariana",
    displayName: "Mariana López",
    email: "mariana.lopez@lsearch.com",
    role: "admin",
    status: "active",
    createdAt: "2026-06-08",
    createdBy: "Dante",
    lastActivityAt: "Hace 1 día",
    avatarUrl: null,
    initials: "ML",
    isCurrentAdmin: false,
    activity: {
      approvedPlaces: 21,
      resolvedReports: 5,
      loadedCandidates: 0,
      lastAction: "Hace 1 día",
    },
  },
  {
    id: "admin-4",
    uid: "admin-carlos",
    displayName: "Carlos Ruiz",
    email: "carlos.ruiz@lsearch.com",
    role: "super_admin",
    status: "active",
    createdAt: "2026-06-14",
    createdBy: "Dante",
    lastActivityAt: "Hace 2 días",
    avatarUrl: null,
    initials: "CR",
    isCurrentAdmin: false,
    activity: {
      approvedPlaces: 17,
      resolvedReports: 14,
      loadedCandidates: 6,
      lastAction: "Hace 2 días",
    },
  },
  {
    id: "admin-5",
    uid: "admin-javier",
    displayName: "Javier Vargas",
    email: "javier.vargas@lsearch.com",
    role: "admin",
    status: "disabled",
    createdAt: "2026-06-21",
    createdBy: "Aster",
    lastActivityAt: "Hace 8 días",
    avatarUrl: null,
    initials: "JV",
    isCurrentAdmin: false,
    activity: {
      approvedPlaces: 4,
      resolvedReports: 2,
      loadedCandidates: 0,
      lastAction: "Hace 8 días",
    },
  },
];

export default function AdministratorsScreen() {
  const navigate = useNavigate();

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("all");

  const [
    selectedAdmin,
    setSelectedAdmin,
  ] = useState(null);

  /*
   * Se conservan diferentes nombres de propiedad para que
   * los breadcrumbs funcionen con el Header aunque este use
   * route, path o la función onClick.
   */
  const breadcrumbs = useMemo(
    () => [
      {
        label: "Inicio",
        route: "/",
        path: "/",
        onClick: () => navigate("/"),
      },
      {
        label: "Administradores",
        current: true,
        isCurrent: true,
      },
    ],
    [navigate],
  );

  const filteredAdmins = useMemo(() => {
    if (selectedFilter === "all") {
      return MOCK_ADMINS;
    }

    if (selectedFilter === "active") {
      return MOCK_ADMINS.filter(
        (admin) =>
          admin.status === "active",
      );
    }

    if (selectedFilter === "disabled") {
      return MOCK_ADMINS.filter(
        (admin) =>
          admin.status === "disabled",
      );
    }

    if (selectedFilter === "super_admin") {
      return MOCK_ADMINS.filter(
        (admin) =>
          admin.role === "super_admin",
      );
    }

    if (selectedFilter === "admin") {
      return MOCK_ADMINS.filter(
        (admin) =>
          admin.role === "admin",
      );
    }

    return MOCK_ADMINS;
  }, [selectedFilter]);

  const activeAdminsCount = useMemo(
    () =>
      MOCK_ADMINS.filter(
        (admin) =>
          admin.status === "active",
      ).length,
    [],
  );

  const superAdminsCount = useMemo(
    () =>
      MOCK_ADMINS.filter(
        (admin) =>
          admin.role === "super_admin" &&
          admin.status === "active",
      ).length,
    [],
  );

  function handleOpenDetails(admin) {
    setSelectedAdmin(admin);
  }

  function handleCloseDetails() {
    setSelectedAdmin(null);
  }

  function handleChangeRole(admin) {
    console.log("Cambiar rol:", admin);
  }

  function handleToggleStatus(admin) {
    console.log("Cambiar estado:", admin);
  }

  function handleViewAudit(admin) {
    console.log("Ver auditoría:", admin);
  }

  return (
    <LayoutScreen
      breadcrumbs={breadcrumbs}
      padding="0"
      maxWidth="100%"
      scroll
      fullHeight
      showHeader
      showSidebar
      showFooter
      stickyHeader
    >
      <main style={styles.screen}>
        <section style={styles.headerSection}>
          <div style={styles.headingBlock}>
            <h1 style={styles.title}>
              Administradores
            </h1>

            <p style={styles.subtitle}>
              Gestión de cuentas con acceso al
              panel administrativo
            </p>
          </div>

          <AdminFilters
            selectedFilter={selectedFilter}
            onChange={setSelectedFilter}
          />
        </section>

        <section style={styles.summarySection}>
          <AdminSummaryCard
            icon={UserRoundCog}
            label="Administradores activos"
            value={activeAdminsCount}
            variant="blue"
          />

          <AdminSummaryCard
            icon={ShieldCheck}
            label="Superadministradores"
            value={superAdminsCount}
            variant="green"
          />
        </section>

        <AdminTable
          admins={filteredAdmins}
          onViewDetails={handleOpenDetails}
        />

        <div style={styles.resultMessage}>
          <span style={styles.resultIcon}>
            ✓
          </span>

          <span>
            {filteredAdmins.length > 0
              ? "Se cargaron todos los administradores."
              : "No existen administradores con este filtro."}
          </span>
        </div>

        <AdminDetailModal
          admin={selectedAdmin}
          isOpen={Boolean(selectedAdmin)}
          onClose={handleCloseDetails}
          onChangeRole={handleChangeRole}
          onToggleStatus={handleToggleStatus}
          onViewAudit={handleViewAudit}
        />
      </main>
    </LayoutScreen>
  );
}