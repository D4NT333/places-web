import React from "react";

import {
  CircleCheck,
  CircleX,
  LayoutGrid,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import styles from "./styles";

const FILTERS = [
  {
    key: "all",
    label: "Todos",
    icon: LayoutGrid,
  },
  {
    key: "active",
    label: "Activos",
    icon: CircleCheck,
  },
  {
    key: "super_admin",
    label: "Superadministradores",
    icon: ShieldCheck,
  },
  {
    key: "admin",
    label: "Administradores",
    icon: UserRound,
  },
  {
    key: "disabled",
    label: "Desactivados",
    icon: CircleX,
  },
];

const ICON_COLORS = {
  all: "#ffffff",
  active: "#08a052",
  super_admin: "#327cf5",
  admin: "#0787a8",
  disabled: "#f04444",
};

export default function AdminFilters({
  selectedFilter,
  onChange,
}) {
  return (
    <div style={styles.container}>
      {FILTERS.map((filter) => {
        const Icon = filter.icon;
        const isActive =
          selectedFilter === filter.key;

        return (
          <button
            key={filter.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.key)}
            style={{
              ...styles.button,
              ...(isActive
                ? styles.activeButton
                : styles.inactiveButton),
            }}
          >
            <Icon
              size={16}
              strokeWidth={2.2}
              color={
                isActive
                  ? "#ffffff"
                  : ICON_COLORS[filter.key]
              }
            />

            <span>{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}