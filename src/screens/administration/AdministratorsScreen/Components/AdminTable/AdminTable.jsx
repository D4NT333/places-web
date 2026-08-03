import React from "react";

import {
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import AdminRoleBadge from "../AdminRoleBadge";
import AdminStatusBadge from "../AdminStatusBadge";

import styles from "./styles";

function formatDate(dateValue) {
  if (!dateValue) {
    return "Sin fecha";
  }

  const date =
    new Date(dateValue);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return "Sin fecha";
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

function formatRelativeDate(
  dateValue,
) {
  if (!dateValue) {
    return "Sin actividad";
  }

  const date =
    new Date(dateValue);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return "Sin actividad";
  }

  const differenceMs =
    Date.now() -
    date.getTime();

  if (differenceMs < 0) {
    return formatDate(
      dateValue,
    );
  }

  const minutes =
    Math.floor(
      differenceMs /
        60000,
    );

  if (minutes < 1) {
    return "Hace un momento";
  }

  if (minutes < 60) {
    return minutes === 1
      ? "Hace 1 min"
      : `Hace ${minutes} min`;
  }

  const hours =
    Math.floor(
      minutes /
        60,
    );

  if (hours < 24) {
    return hours === 1
      ? "Hace 1 h"
      : `Hace ${hours} h`;
  }

  const days =
    Math.floor(
      hours /
        24,
    );

  if (days < 30) {
    return days === 1
      ? "Hace 1 día"
      : `Hace ${days} días`;
  }

  return formatDate(
    dateValue,
  );
}

function AdminAvatar({
  admin,
  index,
}) {
  const avatarSource =
    admin.photoURL ||
    admin.avatarUrl ||
    null;

  if (avatarSource) {
    return (
      <img
        src={avatarSource}
        alt={
          admin.displayName
        }
        style={
          styles.avatarImage
        }
        referrerPolicy="no-referrer"
      />
    );
  }

  const palettes = [
    {
      background:
        "linear-gradient(145deg, #e8f6ff, #f4fbff)",
      color:
        "#0d819c",
    },
    {
      background:
        "linear-gradient(145deg, #f0edff, #faf8ff)",
      color:
        "#6040bf",
    },
    {
      background:
        "linear-gradient(145deg, #eaf3ff, #f8fbff)",
      color:
        "#2673d8",
    },
    {
      background:
        "linear-gradient(145deg, #eef4fa, #fbfdff)",
      color:
        "#58718d",
    },
  ];

  const palette =
    palettes[
      index %
      palettes.length
    ];

  return (
    <div
      style={{
        ...styles.avatarFallback,

        background:
          palette.background,

        color:
          palette.color,
      }}
    >
      {admin.initials ||
        admin.displayName
          ?.slice(
            0,
            2,
          )
          .toUpperCase()}
    </div>
  );
}

export default function AdminTable({
  admins,
  onViewDetails,
}) {
  function handleRowKeyDown(
    event,
    admin,
  ) {
    if (
      event.key ===
        "Enter" ||
      event.key ===
        " "
    ) {
      event.preventDefault();

      onViewDetails(
        admin,
      );
    }
  }

  return (
    <section
      style={
        styles.tableCard
      }
    >
      <div
        style={
          styles.tableScroller
        }
      >
        <table
          style={
            styles.table
          }
        >
          <thead>
            <tr
              style={
                styles.headerRow
              }
            >
              <th
                style={
                  styles.adminHeader
                }
              >
                ADMINISTRADOR
              </th>

              <th
                style={
                  styles.headerCell
                }
              >
                ROL
              </th>

              <th
                style={
                  styles.headerCell
                }
              >
                FECHA DE ALTA
              </th>

              <th
                style={
                  styles.headerCell
                }
              >
                ÚLTIMA INICIO DE SESIÓN
              </th>

              <th
                style={
                  styles.headerCell
                }
              >
                ESTADO
              </th>

              <th
                aria-label="Abrir detalle"
                style={
                  styles.selectionHeader
                }
              />
            </tr>
          </thead>

          <tbody>
            {admins.map(
              (
                admin,
                index,
              ) => (
                <tr
                  key={
                    admin.id
                  }
                  tabIndex={
                    0
                  }
                  role="button"
                  title={`Ver detalle de ${admin.displayName}`}
                  aria-label={`Ver detalle de ${admin.displayName}`}
                  onClick={() =>
                    onViewDetails(
                      admin,
                    )
                  }
                  onKeyDown={(
                    event,
                  ) =>
                    handleRowKeyDown(
                      event,
                      admin,
                    )
                  }
                  onMouseEnter={(
                    event,
                  ) => {
                    event
                      .currentTarget
                      .style
                      .background =
                      "rgba(234, 244, 255, 0.78)";
                  }}
                  onMouseLeave={(
                    event,
                  ) => {
                    event
                      .currentTarget
                      .style
                      .background =
                      "transparent";
                  }}
                  onFocus={(
                    event,
                  ) => {
                    event
                      .currentTarget
                      .style
                      .background =
                      "rgba(234, 244, 255, 0.78)";

                    event
                      .currentTarget
                      .style
                      .outline =
                      "2px solid rgba(38, 128, 236, 0.28)";

                    event
                      .currentTarget
                      .style
                      .outlineOffset =
                      "-2px";
                  }}
                  onBlur={(
                    event,
                  ) => {
                    event
                      .currentTarget
                      .style
                      .background =
                      "transparent";

                    event
                      .currentTarget
                      .style
                      .outline =
                      "none";
                  }}
                  style={
                    styles.selectableRow
                  }
                >
                  <td
                    style={
                      styles.adminCell
                    }
                  >
                    <div
                      style={
                        styles.adminProfile
                      }
                    >
                      <AdminAvatar
                        admin={
                          admin
                        }
                        index={
                          index
                        }
                      />

                      <div
                        style={
                          styles.adminText
                        }
                      >
                        <div
                          style={
                            styles.nameLine
                          }
                        >
                          <strong
                            style={
                              styles.adminName
                            }
                          >
                            {
                              admin.displayName
                            }
                          </strong>

                          {admin.isCurrentAdmin && (
                            <span
                              style={
                                styles.youBadge
                              }
                            >
                              Tú
                            </span>
                          )}
                        </div>

                        <span
                          style={
                            styles.adminEmail
                          }
                        >
                          {
                            admin.email
                          }
                        </span>
                      </div>
                    </div>
                  </td>

                  <td
                    style={
                      styles.cell
                    }
                  >
                    <AdminRoleBadge
                      role={
                        admin.role
                      }
                    />
                  </td>

                  <td
                    style={
                      styles.cell
                    }
                  >
                    <div
                      style={
                        styles.dateValue
                      }
                    >
                      <CalendarDays
                        size={
                          40
                        }
                        color="#2583f4"
                        strokeWidth={
                          2.2
                        }
                      />

                      <span>
                        {formatDate(
                          admin.createdAt,
                        )}
                      </span>
                    </div>
                  </td>

                  <td
                    style={
                      styles.cell
                    }
                  >
                    <div
                      style={
                        styles.dateValue
                      }
                    >
                      <CalendarDays
                        size={
                          40
                        }
                        color="#2583f4"
                        strokeWidth={
                          2.2
                        }
                      />

                      <span>
                        {formatRelativeDate(
                          admin.lastActivityAt,
                        )}
                      </span>
                    </div>
                  </td>

                  <td
                    style={
                      styles.cell
                    }
                  >
                    <AdminStatusBadge
                      status={
                        admin.status
                      }
                    />
                  </td>

                  <td
                    style={
                      styles.selectionCell
                    }
                  >
                    <ChevronRight
                      size={
                        50
                      }
                      strokeWidth={
                        2.4
                      }
                    />
                  </td>
                </tr>
              ),
            )}

            {admins.length ===
              0 && (
              <tr>
                <td
                  colSpan={
                    6
                  }
                  style={
                    styles.emptyCell
                  }
                >
                  No se encontraron
                  administradores con
                  el filtro
                  seleccionado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}