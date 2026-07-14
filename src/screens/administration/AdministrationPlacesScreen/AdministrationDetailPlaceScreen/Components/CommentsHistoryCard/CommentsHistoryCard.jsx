import React from "react";
import styles from "./styles";

export default function CommentsHistoryCard({
  comments = [],
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  onSelectComment,
}) {
  const handleRowKeyDown = (event, comment) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectComment?.(comment);
    }
  };

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <h2 style={styles.title}>Historial de comentarios</h2>

        <span style={styles.counter}>
          Comentarios cargados: {comments.length}
        </span>
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
            {comments.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    ...styles.td,
                    textAlign: "center",
                    padding: "24px",
                  }}
                >
                  Este lugar todavía no tiene comentarios.
                </td>
              </tr>
            ) : (
              comments.map((comment) => (
                <tr
                  key={comment.id}
                  tabIndex={0}
                  role="button"
                  onClick={() => onSelectComment?.(comment)}
                  onKeyDown={(event) =>
                    handleRowKeyDown(event, comment)
                  }
                  style={{
                    ...styles.tableRow,
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor = "#F9FAFB";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onFocus={(event) => {
                    event.currentTarget.style.backgroundColor = "#F9FAFB";
                  }}
                  onBlur={(event) => {
                    event.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <td style={styles.td}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {comment.userPhoto ? (
                        <img
                          src={comment.userPhoto}
                          alt={`Foto de ${comment.user}`}
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: "50%",
                            backgroundColor: "#E2E8F0",
                            color: "#334155",
                            fontSize: 12,
                            fontWeight: 800,
                          }}
                        >
                          {(comment.user || "U")
                            .charAt(0)
                            .toUpperCase()}
                        </div>
                      )}

                      <span>{comment.user}</span>
                    </div>
                  </td>

                  <td style={styles.td}>{comment.date}</td>

                  <td style={styles.td}>
                    {comment.rating}
                  </td>
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
            {loadingMore
              ? "Cargando..."
              : "Cargar más comentarios"}
          </button>
        </div>
      )}
    </section>
  );
}