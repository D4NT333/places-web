import React from "react";

import DeletedSubmissionRow from "../DeletedSubmissionRow";

import styles from "./styles";

export default function DeletedSubmissionsTable({
  submissions = [],
  isLoading = false,
  errorMessage = "",
  onRetry,
  onViewSummary,
  onDelete,
}) {
  if (isLoading) {
    return (
      <div style={styles.stateContainer}>
        <div style={styles.spinner} />

        <h2 style={styles.stateTitle}>
          Cargando propuestas
        </h2>

        <p style={styles.stateText}>
          Estamos obteniendo las propuestas
          pendientes de eliminación.
        </p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div style={styles.stateContainer}>
        <div style={styles.errorIcon}>
          !
        </div>

        <h2 style={styles.stateTitle}>
          No fue posible cargar la información
        </h2>

        <p style={styles.stateText}>
          {errorMessage}
        </p>

        <button
          type="button"
          style={styles.retryButton}
          onClick={onRetry}
        >
          Intentar nuevamente
        </button>
      </div>
    );
  }

  if (!submissions.length) {
    return (
      <div style={styles.stateContainer}>
        <div style={styles.emptyIcon}>
          ✓
        </div>

        <h2 style={styles.stateTitle}>
          No hay propuestas eliminadas
        </h2>

        <p style={styles.stateText}>
          No existen propuestas pendientes de
          eliminación definitiva.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.table}>
       <div style={styles.header}>
  <span>Propuesta</span>

  <span style={styles.centeredHeader}>
    Tipo
  </span>

  <span style={styles.centeredHeader}>
    Eliminada el
  </span>

  <span>Usuario</span>

  <span style={styles.centeredHeader}>
    Acciones
  </span>
</div>

        <div style={styles.body}>
          {submissions.map(
            (submission) => (
              <DeletedSubmissionRow
                key={submission.id}
                submission={submission}
                onViewSummary={
                  onViewSummary
                }
                onDelete={onDelete}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}