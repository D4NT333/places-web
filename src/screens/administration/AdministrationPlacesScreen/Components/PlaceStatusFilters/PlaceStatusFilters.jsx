import React from "react";

import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  CircleDot,
  Clock3,
  EyeOff,
  Gauge,
  Grid2X2,
  Radio,
  ShieldCheck,
} from "lucide-react";

import FilterChipGroup from "../FilterChipGroup";

import styles from "./styles";

const MODERATION_FILTERS = [
  {
    value: "all",
    label: "Todos",
    icon: Grid2X2,
    tone: "blue",
  },
  {
    value: "published",
    label: "Publicados",
    icon: ShieldCheck,
    tone: "green",
  },
  {
    value: "in_review",
    label: "En revisión",
    icon: Clock3,
    tone: "orange",
  },
  {
    value: "warned",
    label: "Advertidos",
    icon: AlertTriangle,
    tone: "red",
  },
  {
    value: "hidden",
    label: "Ocultos",
    icon: EyeOff,
    tone: "violet",
  },
];

const ACTIVITY_FILTERS = [
  {
    value: "all",
    label: "Todos",
    icon: Grid2X2,
    tone: "blue",
  },
  {
    value: "active",
    label: "Activos",
    icon: CheckCircle2,
    tone: "green",
  },
  {
    value: "low_activity",
    label: "Baja actividad",
    icon: Gauge,
    tone: "orange",
  },
  {
    value: "needs_confirmation",
    label: "Por confirmar",
    icon: Radio,
    tone: "violet",
  },
  {
    value: "inactive",
    label: "Inactivos",
    icon: Ban,
    tone: "red",
  },
];

export default function PlaceStatusFilters({
  moderationStatus,
  activityStatus,
  onChangeModerationStatus,
  onChangeActivityStatus,
}) {
  return (
    <section
      style={
        styles.container
      }
    >
      <FilterChipGroup
        title="Moderación"
        titleIcon={
          CircleDot
        }
        options={
          MODERATION_FILTERS
        }
        selectedValue={
          moderationStatus
        }
        onChange={
          onChangeModerationStatus
        }
      />

      <FilterChipGroup
        title="Actividad"
        titleIcon={
          Gauge
        }
        options={
          ACTIVITY_FILTERS
        }
        selectedValue={
          activityStatus
        }
        onChange={
          onChangeActivityStatus
        }
      />
    </section>
  );
}