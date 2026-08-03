import React, {
  useEffect,
  useState,
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

function formatDate(dateValue) {
  if (!dateValue) {
    return "Sin actividad";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "Sin actividad";
  }

  return new Intl.DateTimeFormat(
    "es-MX",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  ).format(date);
}

function formatRelativeDate(dateValue) {
  if (!dateValue) {
    return "Sin actividad";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "Sin actividad";
  }

  const differenceMs =
    Date.now() - date.getTime();

  if (differenceMs < 0) {
    return formatDate(dateValue);
  }

  const minutes = Math.floor(
    differenceMs / 60000,
  );

  if (minutes < 1) {
    return "Hace un momento";
  }

  if (minutes < 60) {
    return minutes === 1
      ? "Hace 1 min"
      : `Hace ${minutes} min`;
  }

  const hours = Math.floor(
    minutes / 60,
  );

  if (hours < 24) {
    return hours === 1
      ? "Hace 1 h"
      : `Hace ${hours} h`;
  }

  const days = Math.floor(
    hours / 24,
  );

  if (days < 30) {
    return days === 1
      ? "Hace 1 día"
      : `Hace ${days} días`;
  }

  return formatDate(dateValue);
}

function InfoItem({
  icon: Icon,
  label,
  children,
}) {
  return (
    <div style={styles.infoItem}>
      <div style={styles.infoIcon}>
        <Icon
          size={50}
          strokeWidth={2.15}
        />
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
        <Icon
          size={40}
          strokeWidth={2.1}
        />
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

function ChangeRolePanel({
  currentRole,
  onCancel,
  onConfirm,
}) {
  const [
    selectedRole,
    setSelectedRole,
  ] = useState(currentRole);

  useEffect(() => {
    setSelectedRole(currentRole);
  }, [currentRole]);

  const roleChanged =
    selectedRole !== currentRole;

  function handleSubmit(event) {
    event.preventDefault();

    if (!roleChanged) {
      return;
    }

    onConfirm(selectedRole);
  }

  return (
    <form
      style={styles.actionPanel}
      onSubmit={handleSubmit}
    >
      <div style={styles.actionPanelHeader}>
        <div>
          <h4 style={styles.actionPanelTitle}>
            Cambiar rol administrativo
          </h4>

          <p
            style={
              styles.actionPanelDescription
            }
          >
            Selecciona el nivel de acceso que
            tendrá esta cuenta.
          </p>
        </div>
      </div>

      <div style={styles.roleOptions}>
        <button
          type="button"
          onClick={() =>
            setSelectedRole("admin")
          }
          style={{
            ...styles.roleOption,
            ...(selectedRole === "admin"
              ? styles.roleOptionSelected
              : {}),
          }}
        >
          <div style={styles.roleOptionIcon}>
            <UserRound
              size={40}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.roleOptionText}>
            <div
              style={
                styles.roleOptionTitleRow
              }
            >
              <strong
                style={styles.roleOptionTitle}
              >
                Administrador
              </strong>

              {currentRole === "admin" && (
                <span
                  style={
                    styles.currentRoleBadge
                  }
                >
                  Actual
                </span>
              )}
            </div>

            <span
              style={
                styles.roleOptionDescription
              }
            >
              Puede moderar lugares, usuarios,
              propuestas, reportes y candidatos
              existentes.
            </span>
          </div>

          <div
            style={{
              ...styles.roleSelection,
              ...(selectedRole === "admin"
                ? styles.roleSelectionActive
                : {}),
            }}
          >
            {selectedRole === "admin" && (
              <CircleCheck
                size={40}
                strokeWidth={2.1}
              />
            )}
          </div>
        </button>

        <button
          type="button"
          onClick={() =>
            setSelectedRole("super_admin")
          }
          style={{
            ...styles.roleOption,
            ...(selectedRole ===
            "super_admin"
              ? styles.roleOptionSelected
              : {}),
          }}
        >
          <div style={styles.roleOptionIcon}>
            <ShieldCheck
              size={40}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.roleOptionText}>
            <div
              style={
                styles.roleOptionTitleRow
              }
            >
              <strong
                style={styles.roleOptionTitle}
              >
                Superadministrador
              </strong>

              {currentRole ===
                "super_admin" && (
                <span
                  style={
                    styles.currentRoleBadge
                  }
                >
                  Actual
                </span>
              )}
            </div>

            <span
              style={
                styles.roleOptionDescription
              }
            >
              También puede administrar cuentas y
              realizar búsquedas de candidatos por
              zona.
            </span>
          </div>

          <div
            style={{
              ...styles.roleSelection,
              ...(selectedRole ===
              "super_admin"
                ? styles.roleSelectionActive
                : {}),
            }}
          >
            {selectedRole ===
              "super_admin" && (
              <CircleCheck
                size={40}
                strokeWidth={2.1}
              />
            )}
          </div>
        </button>
      </div>

      <div style={styles.actionPanelNotice}>
        <CircleAlert
          size={40}
          strokeWidth={2.1}
        />

        <span>
          El cambio de permisos se aplicará
          inmediatamente.
        </span>
      </div>

      <div style={styles.actionPanelButtons}>
        <button
          type="button"
          onClick={onCancel}
          style={styles.panelCancelButton}
        >
          <X
            size={40}
            strokeWidth={2.2}
          />

          Cancelar
        </button>

        <button
          type="submit"
          disabled={!roleChanged}
          style={{
            ...styles.panelConfirmButton,
            ...(!roleChanged
              ? styles.panelButtonDisabled
              : {}),
          }}
        >
          <CircleCheck
            size={40}
            strokeWidth={2.2}
          />

          Confirmar cambio
        </button>
      </div>
    </form>
  );
}

function DisableAdminPanel({
  adminName,
  onCancel,
  onConfirm,
}) {
  const [
    reason,
    setReason,
  ] = useState("");

  const [
    confirmed,
    setConfirmed,
  ] = useState(false);

  const cleanReason = reason.trim();

  const canSubmit =
    cleanReason.length >= 10 &&
    confirmed;

  function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    onConfirm(cleanReason);
  }

  return (
    <form
      style={{
        ...styles.actionPanel,
        ...styles.disableActionPanel,
      }}
      onSubmit={handleSubmit}
    >
      <div style={styles.actionPanelHeader}>
        <div>
          <h4
            style={{
              ...styles.actionPanelTitle,
              ...styles.disableActionTitle,
            }}
          >
            Desactivar cuenta
          </h4>

          <p
            style={
              styles.actionPanelDescription
            }
          >
            La cuenta de {adminName} perderá
            inmediatamente el acceso al panel
            administrativo.
          </p>
        </div>
      </div>

      <label style={styles.reasonField}>
        <span style={styles.reasonLabel}>
          Motivo de desactivación
        </span>

        <textarea
          value={reason}
          onChange={(event) =>
            setReason(event.target.value)
          }
          placeholder="Describe el motivo de la desactivación."
          rows={3}
          style={styles.reasonInput}
        />

        <span style={styles.reasonHelper}>
          Mínimo 10 caracteres.
        </span>
      </label>

      <label
        style={styles.confirmationCheck}
      >
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(event) =>
            setConfirmed(
              event.target.checked,
            )
          }
          style={
            styles.confirmationCheckbox
          }
        />

        <span>
          Confirmo que esta cuenta perderá el
          acceso al panel administrativo.
        </span>
      </label>

      <div style={styles.actionPanelButtons}>
        <button
          type="button"
          onClick={onCancel}
          style={styles.panelCancelButton}
        >
          <X
            size={40}
            strokeWidth={2.2}
          />

          Cancelar
        </button>

        <button
          type="submit"
          disabled={!canSubmit}
          style={{
            ...styles.panelDangerButton,
            ...(!canSubmit
              ? styles.panelButtonDisabled
              : {}),
          }}
        >
          <CircleAlert
            size={40}
            strokeWidth={2.1}
          />

          Desactivar cuenta
        </button>
      </div>
    </form>
  );
}

function ReactivateAdminPanel({
  adminName,
  onCancel,
  onConfirm,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onConfirm();
  }

  return (
    <form
      style={{
        ...styles.actionPanel,
        ...styles.reactivateActionPanel,
      }}
      onSubmit={handleSubmit}
    >
      <div style={styles.actionPanelHeader}>
        <div>
          <h4
            style={{
              ...styles.actionPanelTitle,
              ...styles.reactivateActionTitle,
            }}
          >
            Reactivar cuenta
          </h4>

          <p
            style={
              styles.actionPanelDescription
            }
          >
            La cuenta de {adminName} recuperará
            el acceso correspondiente a su rol
            administrativo.
          </p>
        </div>
      </div>

      <div
        style={
          styles.reactivateConfirmation
        }
      >
        <CircleCheck
          size={40}
          strokeWidth={2.1}
        />

        <span>
          El administrador podrá volver a iniciar
          sesión y utilizar el panel.
        </span>
      </div>

      <div style={styles.actionPanelButtons}>
        <button
          type="button"
          onClick={onCancel}
          style={styles.panelCancelButton}
        >
          <X
            size={40}
            strokeWidth={2.2}
          />

          Cancelar
        </button>

        <button
          type="submit"
          style={styles.panelSuccessButton}
        >
          <CircleCheck
            size={40}
            strokeWidth={2.1}
          />

          Reactivar cuenta
        </button>
      </div>
    </form>
  );
}

export default function AdminDetailModal({
  admin,
  isOpen,
  onClose,
  onChangeRole,
  onToggleStatus,
}) {
  const [
    actionMode,
    setActionMode,
  ] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key !== "Escape") {
        return;
      }

      if (actionMode) {
        setActionMode(null);
        return;
      }

      onClose();
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

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
  }, [
    actionMode,
    isOpen,
    onClose,
  ]);

  useEffect(() => {
    setActionMode(null);
  }, [
    admin?.uid,
    isOpen,
  ]);

  if (!isOpen || !admin) {
    return null;
  }

  const isDisabled =
    admin.status === "disabled";

  function handleCloseModal() {
    setActionMode(null);
    onClose();
  }

  function handleChangeRoleClick() {
    setActionMode(
      (currentMode) =>
        currentMode === "change_role"
          ? null
          : "change_role",
    );
  }

  function handleStatusClick() {
    const nextMode = isDisabled
      ? "reactivate"
      : "disable";

    setActionMode(
      (currentMode) =>
        currentMode === nextMode
          ? null
          : nextMode,
    );
  }

  async function handleConfirmRole(
  selectedRole,
) {
  await onChangeRole?.(
    admin,
    selectedRole,
  );

  setActionMode(null);
}

async function handleConfirmDisable(
  reason,
) {
  await onToggleStatus?.(
    admin,
    {
      action: "disable",
      reason,
    },
  );

  setActionMode(null);
}

async function handleConfirmReactivate() {
  await onToggleStatus?.(
    admin,
    {
      action: "reactivate",
    },
  );

  setActionMode(null);
}

  return (
    <div
      style={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          handleCloseModal();
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
            onClick={handleCloseModal}
            style={styles.closeIconButton}
          >
            <X
              size={40}
              strokeWidth={2.3}
            />
          </button>
        </header>

        <div style={styles.modalBody}>
          <section style={styles.infoSection}>
            <div
              style={
                styles.blueSectionHeader
              }
            >
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

          <section
            style={styles.activitySection}
          >
            <div
              style={
                styles.greenSectionHeader
              }
            >
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
                label="Último inicio de sesión"
                value={formatRelativeDate(
                  admin.activity
                    ?.lastAction ||
                    admin.lastActivityAt,
                )}
              />
            </div>
          </section>

          <section
            style={styles.actionsSection}
          >
            <div
              style={
                styles.purpleSectionHeader
              }
            >
              <Wrench
                size={40}
                strokeWidth={2.15}
              />

              <h3 style={styles.sectionTitle}>
                Acciones
              </h3>
            </div>

            <div
              style={styles.actionsContent}
            >
              <div
                style={styles.actionButtons}
              >
                <button
                  type="button"
                  disabled={
                    admin.isCurrentAdmin
                  }
                  aria-expanded={
                    actionMode ===
                    "change_role"
                  }
                  onClick={
                    handleChangeRoleClick
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
                  disabled={
                    admin.isCurrentAdmin
                  }
                  aria-expanded={
                    actionMode ===
                      "disable" ||
                    actionMode ===
                      "reactivate"
                  }
                  onClick={handleStatusClick}
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

              {actionMode ===
                "change_role" && (
                <ChangeRolePanel
                  currentRole={admin.role}
                  onCancel={() =>
                    setActionMode(null)
                  }
                  onConfirm={
                    handleConfirmRole
                  }
                />
              )}

              {actionMode ===
                "disable" && (
                <DisableAdminPanel
                  adminName={
                    admin.displayName
                  }
                  onCancel={() =>
                    setActionMode(null)
                  }
                  onConfirm={
                    handleConfirmDisable
                  }
                />
              )}

              {actionMode ===
                "reactivate" && (
                <ReactivateAdminPanel
                  adminName={
                    admin.displayName
                  }
                  onCancel={() =>
                    setActionMode(null)
                  }
                  onConfirm={
                    handleConfirmReactivate
                  }
                />
              )}

              {admin.isCurrentAdmin && (
                <div
                  style={styles.warningNote}
                >
                  <CircleAlert
                    size={40}
                    strokeWidth={2.1}
                  />

                  <span>
                    No es posible modificar tu
                    propia cuenta administrativa.
                  </span>
                </div>
              )}

              {!admin.isCurrentAdmin &&
                !actionMode && (
                  <div
                    style={styles.helperNote}
                  >
                    <FileCheck2
                      size={40}
                      strokeWidth={2.1}
                    />

                    <span>
                      Los cambios realizados se aplicarán inmediatamente a la cuenta administrativa.
                    </span>
                  </div>
                )}
            </div>
          </section>
        </div>

      
        
        
      </section>
    </div>
  );
}