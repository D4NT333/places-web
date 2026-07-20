import React from "react";

import styles from "./styles";

function formatWeekLabel(week, selectedWeekId) {
  if (!week) {
    return "Semana";
  }

  const weekStartId =
    week.weekStartId ||
    week.weekId ||
    "";

  const weekEndId =
    week.weekEndId ||
    "";

  if (!weekStartId || !weekEndId) {
    return week.weekId || "Semana";
  }

  const startDate = new Date(
    `${weekStartId}T12:00:00`
  );

  const endDate = new Date(
    `${weekEndId}T12:00:00`
  );

  if (
    Number.isNaN(startDate.getTime()) ||
    Number.isNaN(endDate.getTime())
  ) {
    return `${weekStartId} - ${weekEndId}`;
  }

  const startLabel =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
      }
    ).format(startDate);

  const endLabel =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    ).format(endDate);

  const isSelected =
    week.weekId === selectedWeekId;

  return `${
    isSelected
      ? "Semana seleccionada: "
      : ""
  }${startLabel} - ${endLabel}`;
}

export default function AnalyticsPeriodSelect({
  availableWeeks = [],
  selectedWeekId = "",
  loading = false,
  onChange,
}) {
  return (
    <select
      value={selectedWeekId || ""}
      disabled={
        loading ||
        availableWeeks.length === 0
      }
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
      style={styles.select}
    >
      {availableWeeks.length === 0 ? (
        <option value="">
          Sin semanas disponibles
        </option>
      ) : (
        availableWeeks.map((week) => (
          <option
            key={week.weekId}
            value={week.weekId}
          >
            {formatWeekLabel(
              week,
              selectedWeekId
            )}
          </option>
        ))
      )}
    </select>
  );
}