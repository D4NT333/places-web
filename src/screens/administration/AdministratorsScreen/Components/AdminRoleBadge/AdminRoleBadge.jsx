import React from "react";

import {
  ShieldCheck,
  UserRound,
} from "lucide-react";

import styles from "./styles";

export default function AdminRoleBadge({
  role,
}) {
  const isSuperAdmin =
    role === "super_admin";

  const Icon = isSuperAdmin
    ? ShieldCheck
    : UserRound;

  return (
    <span
      style={{
        ...styles.badge,
        ...(isSuperAdmin
          ? styles.superAdminBadge
          : styles.adminBadge),
      }}
    >
      <Icon size={30} strokeWidth={2.2} />

      {isSuperAdmin
        ? "Superadministrador"
        : "Administrador"}
    </span>
  );
}