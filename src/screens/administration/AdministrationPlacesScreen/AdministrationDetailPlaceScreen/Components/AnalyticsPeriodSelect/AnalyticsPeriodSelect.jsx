import React from "react";

import {
  CalendarRange,
  ChevronDown,
  LoaderCircle,
} from "lucide-react";

import styles from "./styles";

function formatWeekLabel(
  week,
  selectedWeekId
) {
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

  if (
    !weekStartId ||
    !weekEndId
  ) {
    return (
      week.weekId ||
      "Semana"
    );
  }

  const startDate =
    new Date(
      `${weekStartId}T12:00:00`
    );

  const endDate =
    new Date(
      `${weekEndId}T12:00:00`
    );

  if (
    Number.isNaN(
      startDate.getTime()
    ) ||
    Number.isNaN(
      endDate.getTime()
    )
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
    ).format(
      startDate
    );

  const endLabel =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    ).format(
      endDate
    );

  const isSelected =
    week.weekId ===
    selectedWeekId;

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
  const isDisabled =
    loading ||
    availableWeeks.length === 0;

  return (
    <div
      style={{
        ...styles.container,

        ...(isDisabled
          ? styles.containerDisabled
          : {}),
      }}
    >
      <div style={styles.iconBox}>
        {loading ? (
          <LoaderCircle
            size={32}
            strokeWidth={2.15}
          />
        ) : (
          <CalendarRange
            size={32}
            strokeWidth={2.15}
          />
        )}
      </div>

      <div style={styles.selectContent}>
        <span style={styles.label}>
          Semana de análisis
        </span>

        <select
          value={
            selectedWeekId ||
            ""
          }
          disabled={
            isDisabled
          }
          onChange={(event) => {
            onChange?.(
              event.target.value
            );
          }}
          style={styles.select}
        >
          {availableWeeks.length ===
          0 ? (
            <option value="">
              Sin semanas disponibles
            </option>
          ) : (
            availableWeeks.map(
              (week) => (
                <option
                  key={
                    week.weekId
                  }
                  value={
                    week.weekId
                  }
                >
                  {formatWeekLabel(
                    week,
                    selectedWeekId
                  )}
                </option>
              )
            )
          )}
        </select>
      </div>

      <div style={styles.chevronBox}>
        <ChevronDown
          size={50}
          strokeWidth={2.3}
        />
      </div>
    </div>
  );
}