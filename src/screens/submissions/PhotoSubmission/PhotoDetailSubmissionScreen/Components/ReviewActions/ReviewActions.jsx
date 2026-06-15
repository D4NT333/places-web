import React from "react";

import styles from "./styles";

const FINISHED_STATUS_CONTENT = {
  approved: {
    symbol: "✓",
    title: "Propuesta aprobada",
    description:
      "Estas fotografías ya fueron aprobadas y no requieren más acciones.",
    containerStyle: styles.approvedMessage,
    symbolStyle: styles.approvedSymbol,
  },

  rejected: {
    symbol: "×",
    title: "Propuesta rechazada",
    description:
      "Esta propuesta ya fue revisada y marcada como rechazada.",
    containerStyle: styles.rejectedMessage,
    symbolStyle: styles.rejectedSymbol,
  },
};

export default function ReviewActions({
  status,
  loading = false,
  onReject,
  onApprove,
}) {
  const isPending =
    status === "in_review";

  if (!isPending) {
    const content =
      FINISHED_STATUS_CONTENT[status] ||
      FINISHED_STATUS_CONTENT.rejected;

    return (
      <section
        style={{
          ...styles.finishedCard,
          ...content.containerStyle,
        }}
      >
        <div
          style={{
            ...styles.finishedSymbol,
            ...content.symbolStyle,
          }}
        >
          {content.symbol}
        </div>

        <div>
          <p style={styles.finishedTitle}>
            {content.title}
          </p>

          <p style={styles.finishedDescription}>
            {content.description}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Revisar propuesta
        </h2>

        <p style={styles.description}>
          Comprueba que las fotografías sean
          claras, correspondan al lugar y cumplan
          con las reglas de la plataforma.
        </p>
      </div>

      <div style={styles.actions}>
        <button
          type="button"
          style={{
            ...styles.button,
            ...styles.rejectButton,

            ...(loading
              ? styles.disabledButton
              : {}),
          }}
          disabled={loading}
          onClick={onReject}
        >
          Rechazar
        </button>

        <button
          type="button"
          style={{
            ...styles.button,
            ...styles.approveButton,

            ...(loading
              ? styles.disabledButton
              : {}),
          }}
          disabled={loading}
          onClick={onApprove}
        >
          {loading
            ? "Procesando..."
            : "Aprobar"}
        </button>
      </div>
    </section>
  );
}