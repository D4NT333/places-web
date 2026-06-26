import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../layout";

import UserRow from "./Components/UserRow";

import usersData from "./data";
import styles from "./styles";

const PAGE_LIMIT = 15;

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

  const users = usersData;

  const loadedUsersCount = users.length;

  const loadedBatchesCount = useMemo(() => {
    return Math.max(1, Math.ceil(loadedUsersCount / PAGE_LIMIT));
  }, [loadedUsersCount]);

  const handleSelectUser = (user) => {
    navigate(`/administration/users/${user.id}`);
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <header style={styles.headerBlock}>
          <h1 style={styles.title}>
            Administrar usuarios
          </h1>

          <p style={styles.subtitle}>
            Usuarios registrados en Lsearch
          </p>

          <div style={styles.chipsRow}>
            <span style={styles.chip}>
              Usuarios cargados {loadedUsersCount}
            </span>

            <span style={styles.chip}>
              Lotes cargados {loadedBatchesCount}
            </span>
          </div>
        </header>

        <section style={styles.table}>
          <div style={styles.tableHeader}>
            <div>Nombre</div>
            <div>Fecha de registro</div>
            <div>Perfil</div>
            <div>Actividad</div>
            <div>Estado</div>
          </div>

          <div style={styles.tableBody}>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onSelect={handleSelectUser}
              />
            ))}
          </div>
        </section>
      </main>
    </LayoutScreen>
  );
}