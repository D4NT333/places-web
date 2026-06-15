import React from "react";

import DeletedSubmissionRow from "../DeletedSubmissionRow";

import styles from "./styles";

export default function DeletedSubmissionsTable({
  submissions,
  onViewSummary,
  onDelete,
}) {
  if (!submissions.length) {
    return (
      <div style={styles.emptyState}>
        <div style={styles.emptyIcon}>✓</div>

        <h2 style={styles.emptyTitle}>
          No hay propuestas eliminadas
        </h2>

        <p style={styles.emptyText}>
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
          <span>Tipo</span>
          <span>Eliminada el</span>
          <span>Usuario</span>
          <span>Acciones</span>
        </div>

        <div style={styles.body}>
          {submissions.map((submission) => (
            <DeletedSubmissionRow
              key={submission.id}
              submission={submission}
              onViewSummary={onViewSummary}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}