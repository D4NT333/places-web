import React from "react";

import {
  Activity,
  CalendarDays,
  CheckCircle2,
  Clock3,
  IdCard,
  ShieldCheck,
  ShieldUser,
  UserRound,
  UserRoundCog,
  XCircle,
} from "lucide-react";

import styles from "./styles";

const STATUS_STYLES = {
  active: styles.statusActive,

  warned: styles.statusWarned,

  blocked: styles.statusBlocked,

  banned: styles.statusBlocked,

  permanently_banned:
    styles.statusBlocked,

  pending_email_verification:
    styles.statusPending,
};

export default function UserOverviewCard({
  user,
  activity,
  onModerate,
}) {
  const statusStyle =
    STATUS_STYLES[user?.status] ||
    styles.statusActive;

  const metrics = [
    {
      key: "total",
      value: activity?.total || 0,
      label: "Aportes",
      subtitle: "Totales",
      icon: Activity,
      cardStyle: styles.metricBlue,
      iconStyle: styles.metricIconBlue,
    },

    {
      key: "approved",
      value: activity?.approved || 0,
      label: "Aprobados",
      subtitle: "Aportes",
      icon: CheckCircle2,
      cardStyle: styles.metricGreen,
      iconStyle: styles.metricIconGreen,
    },

    {
      key: "pending",
      value: activity?.pending || 0,
      label: "Pendientes",
      subtitle: "Aportes",
      icon: Clock3,
      cardStyle: styles.metricOrange,
      iconStyle: styles.metricIconOrange,
    },

    {
      key: "rejected",
      value: activity?.rejected || 0,
      label: "Rechazados",
      subtitle: "Aportes",
      icon: XCircle,
      cardStyle: styles.metricRed,
      iconStyle: styles.metricIconRed,
    },
  ];

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.heading}>
          <div style={styles.headerIcon}>
            <UserRound
              size={60}
              strokeWidth={2.1}
            />
          </div>

          <div>
            <h2 style={styles.title}>
              Información del usuario
            </h2>

            <p style={styles.subtitle}>
              Datos generales y estado actual
              de la cuenta.
            </p>
          </div>
        </div>
      </header>

      <div style={styles.informationGrid}>
        <div style={styles.identityColumn}>
          <div style={styles.photoWrapper}>
            {user?.photoUrl ? (
              <img
                src={user.photoUrl}
                alt={user.name}
                style={styles.photo}
              />
            ) : (
              <UserRound
                size={72}
                strokeWidth={1.65}
                color="#7d9dbc"
              />
            )}

            <span style={styles.photoStatus} />
          </div>

          <strong style={styles.userName}>
            {user?.name ||
              "Usuario sin nombre"}
          </strong>

          <span
            style={{
              ...styles.statusPill,
              ...statusStyle,
            }}
          >
            <ShieldCheck
              size={46}
              strokeWidth={2.3}
            />

            {user?.statusLabel ||
              "Estado"}
          </span>

          <span style={styles.profilePill}>
            <IdCard
              size={50}
              strokeWidth={2.2}
            />

            {user?.profile ||
              "Sin perfil"}
          </span>
        </div>

        <div style={styles.metaColumn}>
          <div style={styles.metaItem}>
            <div style={styles.metaIcon}>
              <CalendarDays
                size={50}
                strokeWidth={2.1}
              />
            </div>

            <div style={styles.metaContent}>
              <span style={styles.metaLabel}>
                Birthday
              </span>

              <strong style={styles.metaValue}>
                {user?.birthdate ||
                  "Sin fecha"}
              </strong>
            </div>
          </div>

          <div style={styles.metaItem}>
            <div style={styles.metaIcon}>
              <CalendarDays
                size={50}
                strokeWidth={2.1}
              />
            </div>

            <div style={styles.metaContent}>
              <span style={styles.metaLabel}>
                Fecha de registro
              </span>

              <strong style={styles.metaValue}>
                {user?.registeredAt ||
                  "Sin fecha"}
              </strong>
            </div>
          </div>

          <div style={styles.metaItem}>
            <div style={styles.metaIcon}>
              <UserRound
                size={50}
                strokeWidth={2.1}
              />
            </div>

            <div style={styles.metaContent}>
              <span style={styles.metaLabel}>
                Provider
              </span>

              <strong style={styles.metaValue}>
                {user?.providerLabel ||
                  "Sin proveedor"}
              </strong>
            </div>
          </div>

          <div style={styles.metaItem}>
            <div style={styles.metaIcon}>
              <Clock3
                size={50}
                strokeWidth={2.1}
              />
            </div>

            <div style={styles.metaContent}>
              <span style={styles.metaLabel}>
                Última actividad
              </span>

              <strong style={styles.metaValue}>
                {user?.lastActivityAt ||
                  "Sin actividad"}
              </strong>
            </div>
          </div>
        </div>

        <aside style={styles.moderationColumn}>
          <div style={styles.moderationCard}>
            <div style={styles.moderationHeading}>
              <div style={styles.moderationIcon}>
                <ShieldUser
                  size={60}
                  strokeWidth={2.1}
                />
              </div>

              <div>
                <strong
                  style={styles.moderationTitle}
                >
                  Moderación
                </strong>

                <p
                  style={
                    styles.moderationDescription
                  }
                >
                  Toma acciones sobre este
                  usuario.
                </p>
              </div>
            </div>

            <button
              type="button"
              style={styles.moderateButton}
              onClick={onModerate}
            >
              <UserRoundCog
                size={50}
                strokeWidth={2.2}
              />

              Moderar usuario
            </button>
          </div>
        </aside>
      </div>

      <div style={styles.metricsGrid}>
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <article
              key={metric.key}
              style={{
                ...styles.metricCard,
                ...metric.cardStyle,
              }}
            >
              <div
                style={{
                  ...styles.metricIcon,
                  ...metric.iconStyle,
                }}
              >
                <Icon
                  size={60}
                  strokeWidth={2.15}
                />
              </div>

              <div style={styles.metricContent}>
                <strong style={styles.metricValue}>
                  {metric.value}
                </strong>

                <span style={styles.metricLabel}>
                  {metric.label}
                </span>

                <span style={styles.metricSubtitle}>
                  {metric.subtitle}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}