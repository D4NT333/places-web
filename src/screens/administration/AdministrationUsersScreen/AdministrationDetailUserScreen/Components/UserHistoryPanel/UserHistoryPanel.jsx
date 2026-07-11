import React, { useState } from "react";

import styles from "./styles";

export default function UserHistoryPanel({
  history = [],
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  onOpenItem,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleBodyScroll = (event) => {
    const target = event.currentTarget;

    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    if (scrollHeight <= clientHeight) return;

    const scrollPercentage =
      (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage >= 0.8) {
      onLoadMore?.();
    }
  };

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Historial</h2>

      <div style={styles.table}>
       <div style={styles.headerRow}>
  <span style={styles.headerCell}>Tipo</span>
  <span style={styles.headerCell}>Relacionado con</span>
  <span style={styles.headerCell}>Fecha</span>
  <span style={styles.headerCell}>Estado</span>
</div>

        <div
          style={styles.body}
          onScroll={handleBodyScroll}
        >
          {loading ? (
            <div style={styles.emptyState}>
              Cargando historial...
            </div>
          ) : null}

          {!loading && history.length > 0 ? (
            <>
              {history.map((item) => {
                const isHovered = hoveredId === item.id;

                return (
  <button
  key={item.id}
  type="button"
  style={{
    ...styles.row,
    ...(isHovered ? styles.rowHovered : {}),
  }}
  onMouseEnter={() => setHoveredId(item.id)}
  onMouseLeave={() => setHoveredId(null)}
  onClick={() => onOpenItem?.(item)}
>
  <span style={styles.cell}>{item.type}</span>

  <span style={styles.relatedCell}>
    {item.relatedLabel}
  </span>

  <span style={styles.cell}>{item.date}</span>

  <span style={styles.statusCell}>
    {item.statusLabel}
  </span>
</button>
                );
              })}

              {loadingMore ? (
                <div style={styles.loadingMore}>
                  Cargando más historial...
                </div>
              ) : null}

              {!loadingMore && !hasMore ? (
                <div style={styles.endMessage}>
                  No hay más movimientos.
                </div>
              ) : null}
            </>
          ) : null}

          {!loading && history.length === 0 ? (
            <div style={styles.emptyState}>
              Sin actividad registrada
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}