import React, {
  useMemo,
} from "react";

import {
  Activity,
  CalendarDays,
  CheckCircle2,
  CircleDot,
  Clock3,
  History,
  Radio,
} from "lucide-react";

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

  const date = new Date(
    item.createdAt,
  );

  return Number.isNaN(
    date.getTime(),
  )
    ? 0
    : date.getTime();
}

function formatTodayLabel() {
  const today = new Date();

  return new Intl.DateTimeFormat(
    "es-MX",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  ).format(today);
}

function getActivityStatusStyle(
  status,
) {
  const normalizedStatus =
    String(
      status || "",
    ).toLowerCase();

  const statusStyles = {
    active:
      styles.statusPillActive,

    pending:
      styles.statusPillPending,

    low_activity:
      styles.statusPillLowActivity,

    no_activity:
      styles.statusPillNoActivity,

    forgotten:
      styles.statusPillForgotten,

    invisible:
      styles.statusPillInvisible,

    hidden:
      styles.statusPillHidden,
  };

  return {
    ...styles.statusPill,

    ...(
      statusStyles[
        normalizedStatus
      ] ||
      styles.statusPillDefault
    ),
  };
}

function getActivityIcon(item) {
  const type =
    typeof item === "string"
      ? ""
      : String(
          item?.type || "",
        ).toLowerCase();

  if (
    type.includes("view") ||
    type.includes("session")
  ) {
    return Radio;
  }

  if (
    type.includes("like") ||
    type.includes("review") ||
    type.includes("comment")
  ) {
    return Activity;
  }

  if (
    type.includes("status") ||
    type.includes("moderation")
  ) {
    return CheckCircle2;
  }

  return CircleDot;
}

export default function RecentActivityCard({
  activity = [],
  activityStatus,
  title = "Actividad de hoy",
}) {
  const visibleActivity =
    useMemo(() => {
      if (
        !Array.isArray(activity)
      ) {
        return [];
      }

      return [
        ...activity,
      ]
        .sort(
          (
            firstItem,
            secondItem,
          ) => {
            return (
              getActivityDate(
                secondItem,
              ) -
              getActivityDate(
                firstItem,
              )
            );
          },
        )
        .slice(
          0,
          MAX_VISIBLE_ACTIVITY,
        );
    }, [activity]);

  const todayLabel =
    useMemo(() => {
      return formatTodayLabel();
    }, []);

  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <Activity
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              {title}
            </h2>

            <div style={styles.dateRow}>
              <CalendarDays
                size={38}
                strokeWidth={2.15}
              />

              <span style={styles.dateLabel}>
                {todayLabel}
              </span>
            </div>
          </div>
        </div>

        <div style={styles.statusBlock}>
          <span style={styles.statusLabel}>
            Estado de actividad
          </span>

          <span
            style={getActivityStatusStyle(
              activityStatus,
            )}
          >
            <Radio
              size={40}
              strokeWidth={2.2}
            />

            {activityStatus ||
              "Sin estado"}
          </span>
        </div>
      </header>

      <div style={styles.content}>
        {visibleActivity.length ===
        0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>
              <History
                size={50}
                strokeWidth={2}
              />
            </div>

            <strong style={styles.emptyTitle}>
              Sin actividad reciente
            </strong>

            <p style={styles.emptyMessage}>
              Todavía no existe un historial de
              eventos para este lugar.
            </p>
          </div>
        ) : (
          <ul style={styles.list}>
            {visibleActivity.map(
              (
                item,
                index,
              ) => {
                const text =
                  typeof item ===
                  "string"
                    ? item
                    : item.message ||
                      item.label ||
                      "Actividad registrada";

                const id =
                  typeof item ===
                  "string"
                    ? `${item}-${index}`
                    : item.id ||
                      item.eventId ||
                      `${text}-${
                        item.createdAt ||
                        index
                      }`;

                const ActivityIcon =
                  getActivityIcon(
                    item,
                  );

                return (
                  <li
                    key={id}
                    style={styles.item}
                  >
                    <div
                      style={
                        styles.itemIcon
                      }
                    >
                      <ActivityIcon
                        size={44}
                        strokeWidth={2.15}
                      />
                    </div>

                    <div
                      style={
                        styles.itemContent
                      }
                    >
                      <span
                        style={
                          styles.itemText
                        }
                      >
                        {text}
                      </span>

                      <span
                        style={
                          styles.itemMeta
                        }
                      >
                        <Clock3
                          size={30}
                          strokeWidth={2.15}
                        />

                        Actividad registrada
                      </span>
                    </div>

                    <span
                      style={
                        styles.itemIndicator
                      }
                    />
                  </li>
                );
              },
            )}
          </ul>
        )}
      </div>

      {visibleActivity.length >
      0 ? (
        <div style={styles.footerNote}>
          <CheckCircle2
            size={40}
            strokeWidth={2.15}
          />

          <span>
            Se muestran los{" "}
            {visibleActivity.length} eventos más
            recientes del lugar.
          </span>
        </div>
      ) : null}
    </section>
  );
}