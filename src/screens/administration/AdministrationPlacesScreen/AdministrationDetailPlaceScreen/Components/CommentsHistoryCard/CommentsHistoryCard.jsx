import React from "react";

import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  EyeOff,
  LoaderCircle,
  MessageSquareText,
  Star,
  UserRound,
} from "lucide-react";

import styles from "./styles";

export default function CommentsHistoryCard({
  comments = [],
  loadedBatches = 0,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  onSelectComment,
}) {
  const handleRowKeyDown = (
    event,
    comment,
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onSelectComment?.(comment);
    }
  };

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <MessageSquareText
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Historial de comentarios
            </h2>

            <p style={styles.subtitle}>
              Consulta las reseñas publicadas por los
              usuarios sobre este lugar.
            </p>
          </div>
        </div>

        <div style={styles.countersRow}>
          <span style={styles.counterBlue}>
            <MessageSquareText
              size={40}
              strokeWidth={2.2}
            />

            {comments.length} comentarios
          </span>

          <span style={styles.counterViolet}>
            <LoaderCircle
              size={40}
              strokeWidth={2.2}
            />

            {loadedBatches} lotes
          </span>
        </div>
      </header>

      <div style={styles.tableContainer}>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
  <tr>
    <th style={styles.th}>
      Usuario
    </th>

    <th
      style={{
        ...styles.th,
        textAlign: "center",
      }}
    >
      Fecha de publicación
    </th>

    <th
      style={{
        ...styles.th,
        textAlign: "center",
      }}
    >
      Valoración
    </th>

    <th
      style={{
        ...styles.th,
        textAlign: "center",
      }}
    >
      Estado
    </th>

    <th
      style={{
        ...styles.th,
        ...styles.actionHeader,
      }}
    >
      Detalle
    </th>
  </tr>
</thead>

            <tbody>
              {comments.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    style={styles.emptyCell}
                  >
                    <div style={styles.emptyState}>
                      <div style={styles.emptyIcon}>
                        <MessageSquareText
                          size={50}
                          strokeWidth={2}
                        />
                      </div>

                      <strong
                        style={styles.emptyTitle}
                      >
                        Sin comentarios
                      </strong>

                      <span
                        style={styles.emptyText}
                      >
                        Este lugar todavía no tiene
                        comentarios publicados.
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                comments.map((comment) => (
                  <tr
                    key={comment.id}
                    tabIndex={0}
                    role="button"
                    onClick={() =>
                      onSelectComment?.(comment)
                    }
                    onKeyDown={(event) =>
                      handleRowKeyDown(
                        event,
                        comment,
                      )
                    }
                    style={styles.tableRow}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background =
                        "linear-gradient(90deg, #f0f7ff 0%, #fbfdff 58%, #f3f9ff 100%)";

                      event.currentTarget.style.boxShadow =
                        "inset 4px 0 0 #2176e5";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background =
                        "transparent";

                      event.currentTarget.style.boxShadow =
                        "none";
                    }}
                    onFocus={(event) => {
                      event.currentTarget.style.background =
                        "linear-gradient(90deg, #f0f7ff 0%, #fbfdff 58%, #f3f9ff 100%)";

                      event.currentTarget.style.boxShadow =
                        "inset 4px 0 0 #2176e5";
                    }}
                    onBlur={(event) => {
                      event.currentTarget.style.background =
                        "transparent";

                      event.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    <td style={styles.td}>
                      <div style={styles.userCell}>
                        {comment.userPhoto ? (
                          <img
                            src={comment.userPhoto}
                            alt={`Foto de ${comment.user}`}
                            style={styles.avatarImage}
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div
                            style={
                              styles.avatarFallback
                            }
                          >
                            {(comment.user || "U")
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}

                        <div style={styles.userText}>
                          <strong
                            style={styles.userName}
                          >
                            {comment.user}
                          </strong>

              
                        </div>
                      </div>
                    </td>

                    <td
                      style={{
                        ...styles.td,
                        textAlign: "center",
                      }}
                    >
                      <span style={styles.dateValue}>
                        <CalendarDays
                          size={40}
                          strokeWidth={2.15}
                        />

                        {comment.date}
                      </span>
                    </td>

                    <td
                      style={{
                        ...styles.td,
                        textAlign: "center",
                      }}
                    >
                      <span style={styles.ratingPill}>
                        <Star
                          size={40}
                          strokeWidth={2.15}
                        />

                        {comment.rating}
                      </span>
                    </td>

                    <td
                      style={{
                        ...styles.td,
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          ...styles.statusPill,

                          ...(comment.status ===
                          "hidden"
                            ? styles.statusPillHidden
                            : styles.statusPillPublished),
                        }}
                      >
                        {comment.status ===
                        "hidden" ? (
                          <EyeOff
                            size={40}
                            strokeWidth={2.2}
                          />
                        ) : (
                          <CheckCircle2
                            size={40}
                            strokeWidth={2.2}
                          />
                        )}

                        {comment.statusLabel}
                      </span>
                    </td>

                    <td style={styles.actionCell}>
                      <ChevronRight
                        size={40}
                        strokeWidth={2.25}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {hasMore ? (
          <div style={styles.loadMoreContainer}>
            <button
              type="button"
              onClick={onLoadMore}
              disabled={loadingMore}
              style={{
                ...styles.loadMoreButton,

                ...(loadingMore
                  ? styles.disabledButton
                  : {}),
              }}
            >
              <LoaderCircle
                size={30}
                strokeWidth={2.2}
              />

              {loadingMore
                ? "Cargando..."
                : "Cargar más comentarios"}
            </button>
          </div>
        ) : comments.length > 0 ? (
          <div style={styles.endMessage}>
            <CheckCircle2
              size={40}
              strokeWidth={2.2}
            />

            Se cargaron todos los comentarios.
          </div>
        ) : null}
      </div>
    </section>
  );
}