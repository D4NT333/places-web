import React from "react";
import styles from "./styles";

export default function CommentsHistoryCard({ comments }) {
  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <h2 style={styles.title}>Historial de comentarios</h2>
        <span style={styles.counter}>Número de comentarios: {comments.length}</span>
      </header>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Usuario</th>
              <th style={styles.th}>Fecha de publicación</th>
              <th style={styles.th}>Valoración</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((comment, index) => (
              <tr
                key={`${comment.user}-${index}`}
                style={styles.tableRow}
                onMouseEnter={(event) => {
                  event.currentTarget.style.backgroundColor = "#F9FAFB";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <td style={styles.td}>{comment.user}</td>
                <td style={styles.td}>{comment.date}</td>
                <td style={styles.td}>{comment.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}