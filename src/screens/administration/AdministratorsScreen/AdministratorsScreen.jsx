import React, {
  useCallback,
  useEffect,
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

import LayoutScreen from "../../../layout";

import getAdminsService from "../../../services/auth/getAdmins.service";

import updateAdminRoleService from "../../../services/auth/updateAdminRole.service";
import updateAdminStatusService from "../../../services/auth/updateAdminStatus.service";

import AdminDetailModal from "./components/AdminDetailModal";
import AdminFilters from "./components/AdminFilters";
import AdminSummaryCard from "./components/AdminSummaryCard";
import AdminTable from "./components/AdminTable";



import styles from "./styles";

const EMPTY_SUMMARY = {
  total: 0,
  active: 0,
  disabled: 0,
  admins: 0,
  superAdmins: 0,
  activeSuperAdmins: 0,
};

export default function AdministratorsScreen() {
  const navigate = useNavigate();

  const [
  actionLoading,
  setActionLoading,
] = useState(false);

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("all");

  const [
    selectedAdmin,
    setSelectedAdmin,
  ] = useState(null);

  const [
    admins,
    setAdmins,
  ] = useState([]);

  const [
    summary,
    setSummary,
  ] = useState(
    EMPTY_SUMMARY,
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

const breadcrumbs = useMemo(
  () => [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Administradores",
    },
  ],
  [],
);

  const loadAdmins =
    useCallback(
      async ({
        filter =
          selectedFilter,
        preserveSelection = true,
      } = {}) => {
        try {
          setLoading(true);
          setError("");

          const result =
            await getAdminsService({
              filter,
              limit: 50,
            });

          const nextAdmins =
            Array.isArray(
              result?.items,
            )
              ? result.items
              : [];

          setAdmins(
            nextAdmins,
          );

          setSummary({
            ...EMPTY_SUMMARY,
            ...(result?.summary ||
              {}),
          });

          /*
           * Si el modal está abierto y volvemos
           * a cargar, conservamos la selección
           * únicamente si el administrador sigue
           * existiendo en la respuesta.
           */
          if (
            preserveSelection
          ) {
            setSelectedAdmin(
              (
                currentAdmin,
              ) => {
                if (
                  !currentAdmin
                ) {
                  return null;
                }

                return (
                  nextAdmins.find(
                    (admin) =>
                      admin.uid ===
                      currentAdmin.uid,
                  ) || null
                );
              },
            );
          } else {
            setSelectedAdmin(
              null,
            );
          }
        } catch (
          serviceError
        ) {
          console.error(
            "Error cargando administradores:",
            serviceError,
          );

          setAdmins([]);

          setSummary(
            EMPTY_SUMMARY,
          );

          setSelectedAdmin(
            null,
          );

          setError(
            serviceError
              ?.message ||
              "No fue posible cargar los administradores.",
          );

          if (
            serviceError
              ?.statusCode ===
            401
          ) {
            navigate(
              "/login",
              {
                replace: true,
              },
            );
          }
        } finally {
          setLoading(false);
        }
      },
      [
        navigate,
        selectedFilter,
      ],
    );

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const result =
          await getAdminsService({
            filter:
              selectedFilter,
            limit: 50,
          });

        if (!isMounted) {
          return;
        }

        setAdmins(
          Array.isArray(
            result?.items,
          )
            ? result.items
            : [],
        );

        setSummary({
          ...EMPTY_SUMMARY,
          ...(result?.summary ||
            {}),
        });

        setSelectedAdmin(
          null,
        );
      } catch (
        serviceError
      ) {
        if (!isMounted) {
          return;
        }

        console.error(
          "Error cargando administradores:",
          serviceError,
        );

        setAdmins([]);

        setSummary(
          EMPTY_SUMMARY,
        );

        setSelectedAdmin(
          null,
        );

        setError(
          serviceError
            ?.message ||
            "No fue posible cargar los administradores.",
        );

        if (
          serviceError
            ?.statusCode ===
          401
        ) {
          navigate(
            "/login",
            {
              replace: true,
            },
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, [
    navigate,
    selectedFilter,
  ]);

  function handleOpenDetails(
    admin,
  ) {
    setSelectedAdmin(
      admin,
    );
  }

  function handleCloseDetails() {
    setSelectedAdmin(
      null,
    );
  }

  async function handleChangeRole(
  admin,
  selectedRole,
) {
  if (
    actionLoading ||
    !admin?.uid ||
    !selectedRole
  ) {
    return;
  }

  try {
    setActionLoading(true);

    const response =
      await updateAdminRoleService({
        adminUid:
          admin.uid,

        role:
          selectedRole,
      });

    const updatedAdmin =
      response?.admin || {};

    setAdmins(
      (currentAdmins) =>
        currentAdmins.map(
          (currentAdmin) => {
            if (
              currentAdmin.uid !==
              admin.uid
            ) {
              return currentAdmin;
            }

            return {
              ...currentAdmin,

              role:
                updatedAdmin.role ||
                selectedRole,

              permissions:
                updatedAdmin.permissions ||
                currentAdmin.permissions,
            };
          },
        ),
    );

    setSelectedAdmin(
      (currentAdmin) => {
        if (
          !currentAdmin ||
          currentAdmin.uid !==
            admin.uid
        ) {
          return currentAdmin;
        }

        return {
          ...currentAdmin,

          role:
            updatedAdmin.role ||
            selectedRole,

          permissions:
            updatedAdmin.permissions ||
            currentAdmin.permissions,
        };
      },
    );

    setSummary(
      (currentSummary) => {
        if (
          admin.role ===
          selectedRole
        ) {
          return currentSummary;
        }

        const wasSuperAdmin =
          admin.role ===
          "super_admin";

        const isSuperAdmin =
          selectedRole ===
          "super_admin";

        return {
          ...currentSummary,

          admins:
            currentSummary.admins +
            (isSuperAdmin ? -1 : 1),

          superAdmins:
            currentSummary.superAdmins +
            (isSuperAdmin ? 1 : -1),

          activeSuperAdmins:
            admin.status ===
              "active"
              ? currentSummary
                  .activeSuperAdmins +
                (wasSuperAdmin
                  ? -1
                  : 1)
              : currentSummary
                  .activeSuperAdmins,
        };
      },
    );

    window.alert(
      response?.message ||
        "El rol administrativo se actualizó correctamente.",
    );
  } catch (serviceError) {
    console.error(
      "Error cambiando rol administrativo:",
      serviceError,
    );

    window.alert(
      serviceError?.message ||
        "No fue posible cambiar el rol administrativo.",
    );
  } finally {
    setActionLoading(false);
  }
}

  async function handleToggleStatus(
  admin,
  statusData,
) {
  if (
    actionLoading ||
    !admin?.uid ||
    !statusData?.action
  ) {
    return;
  }

  try {
    setActionLoading(true);

    const response =
      await updateAdminStatusService({
        adminUid:
          admin.uid,

        action:
          statusData.action,

        reason:
          statusData.reason ||
          "",
      });

    const updatedAdmin =
      response?.admin || {};

    const nextStatus =
      updatedAdmin.status ||
      (statusData.action ===
      "disable"
        ? "disabled"
        : "active");

    const nextIsActive =
      updatedAdmin.isActive ??
      (nextStatus === "active");

    setAdmins(
      (currentAdmins) =>
        currentAdmins.map(
          (currentAdmin) => {
            if (
              currentAdmin.uid !==
              admin.uid
            ) {
              return currentAdmin;
            }

            return {
              ...currentAdmin,

              status:
                nextStatus,

              isActive:
                nextIsActive,
            };
          },
        ),
    );

    setSelectedAdmin(
      (currentAdmin) => {
        if (
          !currentAdmin ||
          currentAdmin.uid !==
            admin.uid
        ) {
          return currentAdmin;
        }

        return {
          ...currentAdmin,

          status:
            nextStatus,

          isActive:
            nextIsActive,
        };
      },
    );

    setSummary(
      (currentSummary) => {
        const isBeingActivated =
          nextStatus === "active";

        const isSuperAdmin =
          admin.role ===
          "super_admin";

        return {
          ...currentSummary,

          active:
            currentSummary.active +
            (isBeingActivated
              ? 1
              : -1),

          disabled:
            currentSummary.disabled +
            (isBeingActivated
              ? -1
              : 1),

          activeSuperAdmins:
            isSuperAdmin
              ? currentSummary
                  .activeSuperAdmins +
                (isBeingActivated
                  ? 1
                  : -1)
              : currentSummary
                  .activeSuperAdmins,
        };
      },
    );

    window.alert(
      response?.message ||
        (nextStatus === "active"
          ? "La cuenta administrativa se reactivó correctamente."
          : "La cuenta administrativa se desactivó correctamente."),
    );
  } catch (serviceError) {
    console.error(
      "Error actualizando estado administrativo:",
      serviceError,
    );

    window.alert(
      serviceError?.message ||
        "No fue posible actualizar el estado administrativo.",
    );
  } finally {
    setActionLoading(false);
  }
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
        <section
          style={
            styles.headerSection
          }
        >
          <div
            style={
              styles.headingBlock
            }
          >
            <h1
              style={
                styles.title
              }
            >
              Administradores
            </h1>

            <p
              style={
                styles.subtitle
              }
            >
              Gestión de cuentas
              con acceso al panel
              administrativo
            </p>
          </div>

          <AdminFilters
            selectedFilter={
              selectedFilter
            }
            onChange={
              setSelectedFilter
            }
          />
        </section>

        <section
          style={
            styles.summarySection
          }
        >
          <AdminSummaryCard
            icon={
              UserRoundCog
            }
            label="Administradores activos"
            value={
              summary.active
            }
            variant="blue"
          />

          <AdminSummaryCard
            icon={
              ShieldCheck
            }
            label="Superadministradores"
            value={
              summary.superAdmins
            }
            variant="green"
          />
        </section>

        {loading ? (
          <div
            style={
              styles.resultMessage
            }
          >
            <span>
              Cargando administradores...
            </span>
          </div>
        ) : null}

        {!loading && error ? (
          <div
            style={{
              ...styles.resultMessage,
              color: "#d33b3b",
            }}
          >
            <span>
              {error}
            </span>

            <button
              type="button"
              onClick={() =>
                loadAdmins({
                  filter:
                    selectedFilter,
                })
              }
            >
              Reintentar
            </button>
          </div>
        ) : null}

        {!loading &&
        !error ? (
          <>
            <AdminTable
              admins={admins}
              onViewDetails={
                handleOpenDetails
              }
            />

            <div
              style={
                styles.resultMessage
              }
            >
              <span
                style={
                  styles.resultIcon
                }
              >
                ✓
              </span>

              <span>
                {admins.length >
                0
                  ? "Se cargaron todos los administradores."
                  : "No existen administradores con este filtro."}
              </span>
            </div>
          </>
        ) : null}

        <AdminDetailModal
          admin={
            selectedAdmin
          }
          isOpen={Boolean(
            selectedAdmin,
          )}
          onClose={
            handleCloseDetails
          }
          onChangeRole={
            handleChangeRole
          }
          onToggleStatus={
            handleToggleStatus
          }
        />
      </main>
    </LayoutScreen>
  );
}