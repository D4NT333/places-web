import React from "react";

import FilterChipGroup from "../FilterChipGroup";

import styles from "./styles";

const MODERATION_FILTERS = [
  { value: "all", label: "Todos" },
  { value: "published", label: "Publicados" },
  { value: "in_review", label: "En revisión" },
  { value: "warned", label: "Advertidos" },
  { value: "hidden", label: "Ocultos" },
];

const ACTIVITY_FILTERS = [
  { value: "all", label: "Todos" },
  { value: "active", label: "Activos" },
  { value: "low_activity", label: "Baja actividad" },
  { value: "needs_confirmation", label: "Por confirmar" },
  { value: "inactive", label: "Inactivos" },
];

export default function PlaceStatusFilters({
  moderationStatus,
  activityStatus,
  onChangeModerationStatus,
  onChangeActivityStatus,
}) {
  return (
    <section style={styles.container}>
      <FilterChipGroup
        title="Moderación"
        options={MODERATION_FILTERS}
        selectedValue={moderationStatus}
        onChange={onChangeModerationStatus}
      />

      <FilterChipGroup
        title="Actividad"
        options={ACTIVITY_FILTERS}
        selectedValue={activityStatus}
        onChange={onChangeActivityStatus}
      />
    </section>
  );
}