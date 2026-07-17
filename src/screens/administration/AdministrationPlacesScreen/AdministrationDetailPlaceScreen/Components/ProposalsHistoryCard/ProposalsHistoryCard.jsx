import React from "react";
import styles from "./styles";

function getStatusPillStyle(status) {
  const statusStyles = {
    pending: {
      backgroundColor: "#FFFBEB",
      borderColor: "#FDE68A",
      color: "#92400E",
    },

    in_review: {
      backgroundColor: "#EFF6FF",
      borderColor: "#BFDBFE",
      color: "#1D4ED8",
    },

    returned: {
      backgroundColor: "#FFF7ED",
      borderColor: "#FED7AA",
      color: "#C2410C",
    },

    resubmitted: {
      backgroundColor: "#F5F3FF",
      borderColor: "#DDD6FE",
      color: "#6D28D9",
    },

    approved: {
      backgroundColor: "#ECFDF5",
      borderColor: "#A7F3D0",
      color: "#047857",
    },

    accepted: {
      backgroundColor: "#ECFDF5",
      borderColor: "#A7F3D0",
      color: "#047857",
    },

    rejected: {
      backgroundColor: "#FEF2F2",
      borderColor: "#FECACA",
      color: "#B91C1C",
    },

    pending_delete: {
      backgroundColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      color: "#475569",
    },
  };

  return {
    ...styles.statusPill,

    ...(statusStyles[status] || {
      backgroundColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      color: "#475569",
    }),
  };
}

export default function ProposalsHistoryCard({
  proposals = [],
  loadedBatches = 0,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
}) {
  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <h2 style={styles.title}>
          Historial de propuestas
        </h2>

        <div style={styles.countersRow}>
          <span style={styles.counter}>
            Propuestas cargadas: {proposals.length}
          </span>

          <span style={styles.counter}>
            Lotes cargados: {loadedBatches}
          </span>
        </div>
      </header>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>
                Tipo
              </th>

              <th
                style={{
                  ...styles.th,
                  textAlign: "center",
                }}
              >
                Fecha
              </th>

              <th
                style={{
                  ...styles.th,
                  textAlign: "center",
                }}
              >
                Estado
              </th>
            </tr>
          </thead>

          <tbody>
            {proposals.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    ...styles.td,
                    textAlign: "center",
                    padding: "24px",
                  }}
                >
                  Este lugar todavía no tiene propuestas.
                </td>
              </tr>
            ) : (
              proposals.map((proposal) => (
                <tr
                  key={proposal.id}
                  style={styles.tableRow}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor =
                      "#F9FAFB";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor =
                      "transparent";
                  }}
                >
                  <td style={styles.td}>
                    {proposal.type}
                  </td>

                  <td
                    style={{
                      ...styles.td,
                      textAlign: "center",
                    }}
                  >
                    {proposal.date}
                  </td>

                  <td
                    style={{
                      ...styles.td,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={getStatusPillStyle(
                        proposal.statusId
                      )}
                    >
                      {proposal.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div style={styles.loadMoreRow}>
          <button
            type="button"
            onClick={onLoadMore}
            disabled={loadingMore}
            style={styles.loadMoreButton}
          >
            {loadingMore
              ? "Cargando..."
              : "Cargar más propuestas"}
          </button>
        </div>
      )}
    </section>
  );
}