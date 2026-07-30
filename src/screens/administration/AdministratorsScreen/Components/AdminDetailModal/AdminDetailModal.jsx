import React, {
  useEffect,
} from "react";

import {
  BarChart3,
  CircleAlert,
  CircleCheck,
  Clock3,
  FileCheck2,
  Flag,
  Mail,
  MapPinCheck,
  ShieldCheck,
  UserRound,
  UserRoundCog,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

import AdminRoleBadge from "../AdminRoleBadge";
import AdminStatusBadge from "../AdminStatusBadge";

import styles from "./styles";

function InfoItem({
  icon: Icon,
  label,
  children,
}) {
  return (
    <div style={styles.infoItem}>
      <div style={styles.infoIcon}>
        <Icon size={40} strokeWidth={2.15} />
      </div>

      <div style={styles.infoText}>
        <span style={styles.infoLabel}>
          {label}
        </span>

        <div style={styles.infoValue}>
          {children}
        </div>
      </div>
    </div>
  );
}

function ActivityCard({
  icon: Icon,
  label,
  value,
}) {
  return (
    <article style={styles.activityCard}>
      <div style={styles.activityIcon}>
        <Icon size={40} strokeWidth={2.1} />
      </div>

      <div style={styles.activityContent}>
        <span style={styles.activityLabel}>
          {label}
        </span>

        <strong style={styles.activityValue}>
          {value}
        </strong>
      </div>
    </article>
  );
}

export default function AdminDetailModal({
  admin,
  isOpen,
  onClose,
  onChangeRole,
  onToggleStatus,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen || !admin) {
    return null;
  }

  const isDisabled =
    admin.status === "disabled";

  return (
    <div
      style={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-detail-title"
        style={styles.modal}
      >
        <header style={styles.modalHeader}>
          <div style={styles.titleGroup}>
            <div style={styles.titleIcon}>
              <UserRoundCog
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.titleText}>
              <h2
                id="admin-detail-title"
                style={styles.title}
              >
                Administrador
              </h2>

              <p style={styles.subtitle}>
                Consulta la información, actividad
                reciente y acciones disponibles.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Cerrar modal"
            onClick={onClose}
            style={styles.closeIconButton}
          >
            <X size={40} strokeWidth={2.3} />
          </button>
        </header>

        <div style={styles.modalBody}>
          <section style={styles.infoSection}>
            <div style={styles.blueSectionHeader}>
              <UserRound
                size={40}
                strokeWidth={2.15}
              />

              <h3 style={styles.sectionTitle}>
                Información general
              </h3>
            </div>

            <div style={styles.infoGrid}>
              <InfoItem
                icon={UserRound}
                label="Nombre"
              >
                {admin.displayName}
              </InfoItem>

              <InfoItem
                icon={Mail}
                label="Correo"
              >
                {admin.email}
              </InfoItem>

              <InfoItem
                icon={ShieldCheck}
                label="Rol"
              >
                <AdminRoleBadge
                  role={admin.role}
                />
              </InfoItem>

              <InfoItem
                icon={CircleCheck}
                label="Estado"
              >
                <AdminStatusBadge
                  status={admin.status}
                />
              </InfoItem>
            </div>
          </section>

          <section style={styles.activitySection}>
            <div style={styles.greenSectionHeader}>
              <BarChart3
                size={40}
                strokeWidth={2.15}
              />

              <h3 style={styles.sectionTitle}>
                Actividad reciente
              </h3>
            </div>

            <div style={styles.activityGrid}>
              <ActivityCard
                icon={MapPinCheck}
                label="Lugares aprobados"
                value={
                  admin.activity
                    ?.approvedPlaces ?? 0
                }
              />

              <ActivityCard
                icon={Flag}
                label="Reportes resueltos"
                value={
                  admin.activity
                    ?.resolvedReports ?? 0
                }
              />

              <ActivityCard
                icon={UsersRound}
                label="Candidatos cargados"
                value={
                  admin.activity
                    ?.loadedCandidates ?? 0
                }
              />

              <ActivityCard
                icon={Clock3}
                label="Última acción"
                value={
                  admin.activity
                    ?.lastAction ||
                  admin.lastActivityAt
                }
              />
            </div>
          </section>

          <section style={styles.actionsSection}>
            <div style={styles.purpleSectionHeader}>
              <Wrench
                size={40}
                strokeWidth={2.15}
              />

              <h3 style={styles.sectionTitle}>
                Acciones
              </h3>
            </div>

            <div style={styles.actionsContent}>
              <div style={styles.actionButtons}>
                <button
                  type="button"
                  disabled={admin.isCurrentAdmin}
                  onClick={() =>
                    onChangeRole(admin)
                  }
                  style={{
                    ...styles.actionButton,
                    ...styles.changeRoleButton,
                    ...(admin.isCurrentAdmin
                      ? styles.disabledButton
                      : {}),
                  }}
                >
                  <UsersRound
                    size={40}
                    strokeWidth={2.1}
                  />

                  Cambiar rol
                </button>

                <button
                  type="button"
                  disabled={admin.isCurrentAdmin}
                  onClick={() =>
                    onToggleStatus(admin)
                  }
                  style={{
                    ...styles.actionButton,
                    ...(isDisabled
                      ? styles.activateButton
                      : styles.disableButton),
                    ...(admin.isCurrentAdmin
                      ? styles.disabledButton
                      : {}),
                  }}
                >
                  {isDisabled ? (
                    <CircleCheck
                      size={40}
                      strokeWidth={2.1}
                    />
                  ) : (
                    <CircleAlert
                      size={40}
                      strokeWidth={2.1}
                    />
                  )}

                  {isDisabled
                    ? "Reactivar cuenta"
                    : "Desactivar cuenta"}
                </button>
              </div>

              {admin.isCurrentAdmin && (
                <div style={styles.warningNote}>
                  <CircleAlert
                    size={40}
                    strokeWidth={2.1}
                  />

                  <span>
                    No es posible modificar tu propia
                    cuenta administrativa.
                  </span>
                </div>
              )}

              {!admin.isCurrentAdmin && (
                <div style={styles.helperNote}>
                  <FileCheck2
                    size={40}
                    strokeWidth={2.1}
                  />

                  <span>
                    Las acciones realizadas quedarán
                    registradas en la auditoría.
                  </span>
                </div>
              )}
            </div>
          </section>
        </div>

        <footer style={styles.modalFooter}>
          <button
            type="button"
            onClick={onClose}
            style={styles.closeButton}
          >
            <X size={40} strokeWidth={2.2} />

            Cerrar
          </button>
        </footer>
      </section>
    </div>
  );
}