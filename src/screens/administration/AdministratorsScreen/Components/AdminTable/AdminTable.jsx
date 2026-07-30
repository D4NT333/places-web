import React from "react";

import {
  CalendarDays,
  Eye,
} from "lucide-react";

import AdminRoleBadge from "../AdminRoleBadge";
import AdminStatusBadge from "../AdminStatusBadge";

import styles from "./styles";

function formatDate(dateValue) {
  if (!dateValue) {
    return "Sin fecha";
  }

  const date = new Date(
    `${dateValue}T12:00:00`,
  );

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat(
    "es-MX",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  ).format(date);
}

function AdminAvatar({
  admin,
  index,
}) {
  if (admin.avatarUrl) {
    return (
      <img
        src={admin.avatarUrl}
        alt={admin.displayName}
        style={styles.avatarImage}
      />
    );
  }

  const palettes = [
    {
      background:
        "linear-gradient(145deg, #e8f6ff, #f4fbff)",
      color: "#0d819c",
    },
    {
      background:
        "linear-gradient(145deg, #f0edff, #faf8ff)",
      color: "#6040bf",
    },
    {
      background:
        "linear-gradient(145deg, #eaf3ff, #f8fbff)",
      color: "#2673d8",
    },
    {
      background:
        "linear-gradient(145deg, #eef4fa, #fbfdff)",
      color: "#58718d",
    },
  ];

  const palette =
    palettes[index % palettes.length];

  return (
    <div
      style={{
        ...styles.avatarFallback,
        background: palette.background,
        color: palette.color,
      }}
    >
      {admin.initials ||
        admin.displayName
          ?.slice(0, 2)
          .toUpperCase()}
    </div>
  );
}

export default function AdminTable({
  admins,
  onViewDetails,
}) {
  return (
    <section style={styles.tableCard}>
      <div style={styles.tableScroller}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.adminHeader}>
                ADMINISTRADOR
              </th>

              <th style={styles.headerCell}>
                ROL
              </th>

              <th style={styles.headerCell}>
                FECHA DE ALTA
              </th>

              <th style={styles.headerCell}>
                CREADO POR
              </th>

              <th style={styles.headerCell}>
                ÚLTIMA ACTIVIDAD
              </th>

              <th style={styles.headerCell}>
                ESTADO
              </th>

              <th style={styles.actionHeader}>
                ACCIONES
              </th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin, index) => (
              <tr
                key={admin.id}
                style={styles.bodyRow}
              >
                <td style={styles.adminCell}>
                  <div style={styles.adminProfile}>
                    <AdminAvatar
                      admin={admin}
                      index={index}
                    />

                    <div style={styles.adminText}>
                      <div style={styles.nameLine}>
                        <strong style={styles.adminName}>
                          {admin.displayName}
                        </strong>

                        {admin.isCurrentAdmin && (
                          <span style={styles.youBadge}>
                            Tú
                          </span>
                        )}
                      </div>

                      <span style={styles.adminEmail}>
                        {admin.email}
                      </span>
                    </div>
                  </div>
                </td>

                <td style={styles.cell}>
                  <AdminRoleBadge
                    role={admin.role}
                  />
                </td>

                <td style={styles.cell}>
                  <div style={styles.dateValue}>
                    <CalendarDays
                      size={40}
                      color="#2583f4"
                      strokeWidth={2.2}
                    />

                    <span>
                      {formatDate(
                        admin.createdAt,
                      )}
                    </span>
                  </div>
                </td>

                <td style={styles.cell}>
                  {admin.createdBy}
                </td>

                <td style={styles.cell}>
                  <div style={styles.dateValue}>
                    <CalendarDays
                      size={40}
                      color="#2583f4"
                      strokeWidth={2.2}
                    />

                    <span>
                      {admin.lastActivityAt}
                    </span>
                  </div>
                </td>

                <td style={styles.cell}>
                  <AdminStatusBadge
                    status={admin.status}
                  />
                </td>

                <td style={styles.actionCell}>
                  <button
                    type="button"
                    onClick={() =>
                      onViewDetails(admin)
                    }
                    style={styles.detailButton}
                  >
                    <Eye
                      size={40}
                      strokeWidth={2.2}
                    />

                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}

            {admins.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  style={styles.emptyCell}
                >
                  No se encontraron administradores
                  con el filtro seleccionado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}