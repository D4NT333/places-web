import React from "react";
import styles from "./styles";

function getProposalStatusStyle(statusId) {
  const normalizedStatus =
    String(statusId || "")
      .trim()
      .toLowerCase();

  if (
    normalizedStatus === "approved" ||
    normalizedStatus === "published"
  ) {
    return {
      ...styles.statusPill,
      ...styles.statusApproved,
    };
  }

  if (
    normalizedStatus === "rejected"
  ) {
    return {
      ...styles.statusPill,
      ...styles.statusRejected,
    };
  }

  if (
    normalizedStatus === "returned"
  ) {
    return {
      ...styles.statusPill,
      ...styles.statusReturned,
    };
  }

  if (
    normalizedStatus === "resubmitted"
  ) {
    return {
      ...styles.statusPill,
      ...styles.statusResubmitted,
    };
  }

  if (
    normalizedStatus === "pending_delete"
  ) {
    return {
      ...styles.statusPill,
      ...styles.statusPendingDelete,
    };
  }

  return {
    ...styles.statusPill,
    ...styles.statusPending,
  };
}

export default function ProposalsHistoryCard({
  proposals = [],
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  onSelectProposal,
}) {
  const handleRowKeyDown = (
    event,
    proposal
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onSelectProposal?.(proposal);
    }
  };

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <h2 style={styles.title}>
          Historial de propuestas
        </h2>

        <div style={styles.countersRow}>
          <span style={styles.counter}>
            Propuestas cargadas:{" "}
            {proposals.length}
          </span>

          <span style={styles.counter}>
            {hasMore
              ? "Existen más propuestas"
              : "Sin más propuestas"}
          </span>
        </div>
      </header>

      {proposals.length === 0 ? (
        <p style={styles.emptyMessage}>
          Este lugar todavía no tiene propuestas.
        </p>
      ) : (
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <span>Tipo</span>
            <span>Nombre</span>
            <span>Fecha</span>
            <span>Estado</span>
          </div>

          <div style={styles.tableBody}>
            {proposals.map((proposal) => {
              const proposalId =
                proposal.submissionId ||
                proposal.id;

              return (
                <div
                  key={proposalId}
                  role="button"
                  tabIndex={0}
                  style={styles.row}
                  onClick={() =>
                    onSelectProposal?.(
                      proposal
                    )
                  }
                  onKeyDown={(event) =>
                    handleRowKeyDown(
                      event,
                      proposal
                    )
                  }
                >
                  <span style={styles.typeCell}>
                    {proposal.type}
                  </span>

                  <span style={styles.nameCell}>
                    {proposal.name ||
                      "Lugar sin nombre"}
                  </span>

                  <span style={styles.dateCell}>
                    {proposal.date}
                  </span>

                  <span style={styles.statusCell}>
                    <span
                      style={getProposalStatusStyle(
                        proposal.statusId
                      )}
                    >
                      {proposal.status}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {hasMore && (
        <button
          type="button"
          style={{
            ...styles.loadMoreButton,

            ...(loadingMore
              ? styles.loadMoreButtonDisabled
              : {}),
          }}
          disabled={loadingMore}
          onClick={onLoadMore}
        >
          {loadingMore
            ? "Cargando propuestas..."
            : "Cargar más"}
        </button>
      )}
    </section>
  );
}