import React from "react";
import styles from "./styles";

export default function ProposalsHistoryCard({ proposals }) {
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
            {proposals.map((proposal, index) => (
              <tr
                key={`${proposal.type}-${index}`}
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
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}