import React, { useMemo } from "react";
import styles from "./styles";

const MAX_VISIBLE_ACTIVITY = 4;

function getActivityDate(item) {
  if (
    !item ||
    typeof item === "string" ||
    !item.createdAt
  ) {
    return 0;
  }

  const date = new Date(item.createdAt);

  return Number.isNaN(date.getTime())
    ? 0
    : date.getTime();
}

function formatTodayLabel() {
  const today = new Date();

  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(today);
}

export default function RecentActivityCard({
  activity = [],
  activityStatus,
  title = "Actividad de hoy",
}) {
  const visibleActivity = useMemo(() => {
    if (!Array.isArray(activity)) {
      return [];
    }

    return [...activity]
      .sort((firstItem, secondItem) => {
        return (
          getActivityDate(secondItem) -
          getActivityDate(firstItem)
        );
      })
      .slice(0, MAX_VISIBLE_ACTIVITY);
  }, [activity]);

  const todayLabel = useMemo(() => {
    return formatTodayLabel();
  }, []);

  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div style={styles.titleBlock}>
          <h2 style={styles.title}>
            {title}
          </h2>

          <span style={styles.dateLabel}>
            {todayLabel}
          </span>
        </div>

        <div style={styles.statusBlock}>
          <span style={styles.statusLabel}>
            Estado de actividad
          </span>

          <span style={styles.statusPill}>
            {activityStatus || "Sin estado"}
          </span>
        </div>
      </header>

      {visibleActivity.length === 0 ? (
        <p style={styles.emptyMessage}>
          Todavía no existe un historial de eventos para este lugar.
        </p>
      ) : (
        <ul style={styles.list}>
          {visibleActivity.map((item, index) => {
            const text =
              typeof item === "string"
                ? item
                : item.message ||
                  item.label ||
                  "Actividad registrada";

            const id =
              typeof item === "string"
                ? `${item}-${index}`
                : item.id ||
                  item.eventId ||
                  `${text}-${item.createdAt || index}`;

            return (
              <li key={id} style={styles.item}>
                <span style={styles.dot} />

                <span style={styles.itemText}>
                  {text}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}