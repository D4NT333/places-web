import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../layout";

import UserRow from "./Components/UserRow/index.js";

import getAdminUsersService from "../../../services/api/administration/users/adminUsers.service.js";

import styles from "./styles.js";

const PAGE_LIMIT = 15;

const STATUS_FILTERS = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Activos",
    value: "active",
  },
  {
    label: "En revisión",
    value: "under_observation",
  },
  {
    label: "Advertidos",
    value: "warned",
  },
  {
    label: "Bloqueados",
    value: "blocked",
  },
];

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Administrar usuarios",
  },
];

export default function UserAdministrationScreen() {
  const navigate = useNavigate();

  const tableBodyRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [nextCursor, setNextCursor] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadedUsersCount = users.length;

  const loadedBatchesCount = useMemo(() => {
    if (loadedUsersCount === 0) return 0;

    return Math.ceil(loadedUsersCount / PAGE_LIMIT);
  }, [loadedUsersCount]);

  const loadUsers = async ({
    cursor = null,
    append = false,
    status = selectedStatus,
  } = {}) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      setErrorMessage("");

      const response = await getAdminUsersService({
        limit: PAGE_LIMIT,
        cursor,
        status,
      });

      const newUsers = response.users || [];

      setUsers((currentUsers) => {
        if (!append) return newUsers;

        const existingIds = new Set(
          currentUsers.map((user) => user.id)
        );

        const filteredNewUsers = newUsers.filter(
          (user) => !existingIds.has(user.id)
        );

        return [...currentUsers, ...filteredNewUsers];
      });

      setNextCursor(response.nextCursor || null);
      setHasMore(Boolean(response.hasMore));
    } catch (error) {
      console.error("Error loading admin users:", error);

      setErrorMessage(
        "No se pudieron cargar los usuarios. Intenta nuevamente."
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    setUsers([]);
    setNextCursor(null);
    setHasMore(false);

    if (tableBodyRef.current) {
      tableBodyRef.current.scrollTop = 0;
    }

    loadUsers({
      cursor: null,
      append: false,
      status: selectedStatus,
    });
  }, [selectedStatus]);

  const handleLoadMore = () => {
    if (loading || loadingMore || !hasMore || !nextCursor) return;

    loadUsers({
      cursor: nextCursor,
      append: true,
      status: selectedStatus,
    });
  };

  const handleTableScroll = (event) => {
    const target = event.currentTarget;

    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    if (scrollHeight <= clientHeight) return;

    const scrollPercentage =
      (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage >= 0.8) {
      handleLoadMore();
    }
  };

  const handleSelectUser = (user) => {
    navigate(`/administration/users/${user.id}`);
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <header style={styles.headerBlock}>
          <div style={styles.headerTopRow}>
            <div>
              <h1 style={styles.title}>
                Administrar usuarios
              </h1>

              <p style={styles.subtitle}>
                Usuarios registrados en Lsearch
              </p>
            </div>

            <div style={styles.filtersRow}>
              {STATUS_FILTERS.map((filter) => {
                const isSelected =
                  selectedStatus === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    style={{
                      ...styles.filterChip,
                      ...(isSelected
                        ? styles.filterChipActive
                        : {}),
                    }}
                    onClick={() => setSelectedStatus(filter.value)}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={styles.chipsRow}>
            <span style={styles.chip}>
              Usuarios cargados: {loadedUsersCount}
            </span>

            <span style={styles.chip}>
              Lotes cargados: {loadedBatchesCount}
            </span>
          </div>
        </header>

        {errorMessage ? (
          <div style={styles.errorBox}>
            {errorMessage}
          </div>
        ) : null}

        <section style={styles.table}>
          <div style={styles.tableHeader}>
            <div style={styles.headerName}>
              Nombre
            </div>

            <div style={styles.headerDate}>
              Fecha de registro
            </div>

            <div style={styles.headerProfile}>
              Perfil
            </div>

            <div style={styles.headerActivity}>
              Actividad
            </div>

            <div style={styles.headerStatus}>
              Estado
            </div>
          </div>

          <div
            ref={tableBodyRef}
            style={styles.tableBody}
            onScroll={handleTableScroll}
          >
            {loading ? (
              <div style={styles.emptyState}>
                Cargando usuarios...
              </div>
            ) : null}

            {!loading && users.length === 0 ? (
              <div style={styles.emptyState}>
                No hay usuarios para este filtro.
              </div>
            ) : null}

            {!loading &&
              users.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  onSelect={handleSelectUser}
                />
              ))}

            {loadingMore ? (
              <div style={styles.loadingMore}>
                Cargando más usuarios...
              </div>
            ) : null}

            {!loading && !loadingMore && users.length > 0 && !hasMore ? (
              <div style={styles.endMessage}>
                No hay más usuarios por cargar.
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </LayoutScreen>
  );
}