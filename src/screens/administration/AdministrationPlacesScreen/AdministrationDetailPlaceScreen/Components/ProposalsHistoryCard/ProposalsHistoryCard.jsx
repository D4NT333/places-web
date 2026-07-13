import React from "react";
import styles from "./styles";

export default function ProposalsHistoryCard({
  proposals = [],
  hasMore = false,
  loadingMore = false,
  onLoadMore,
}) {
  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Historial de propuestas</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Tipo</th>
              <th style={styles.th}>Fecha</th>
              <th style={styles.th}>Estado</th>
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
                    event.currentTarget.style.backgroundColor = "#F9FAFB";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <td style={styles.td}>{proposal.type}</td>
                  <td style={styles.td}>{proposal.date}</td>
                  <td style={styles.td}>{proposal.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "14px",
          }}
        >
          <button
            type="button"
            onClick={onLoadMore}
            disabled={loadingMore}
            style={{
              padding: "8px 18px",
              border: "1px solid #CBD5E1",
              borderRadius: "999px",
              backgroundColor: "#FFFFFF",
              cursor: loadingMore ? "not-allowed" : "pointer",
              fontWeight: 700,
            }}
          >
            {loadingMore ? "Cargando..." : "Cargar más propuestas"}
          </button>
        </div>
      )}
    </section>
  );
}