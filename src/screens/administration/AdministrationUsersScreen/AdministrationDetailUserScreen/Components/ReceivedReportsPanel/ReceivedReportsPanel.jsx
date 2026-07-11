import React, { useState } from "react";

import styles from "./styles";

export default function ReceivedReportsPanel({
  reports = [],
  emptyMessage = "Este usuario no tiene reportes recibidos.",
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  onOpenReport,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const activeReports = reports.length;

  const handleListScroll = (event) => {
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
    <div style={styles.panel}>
      <p style={styles.totalText}>
        Reportes recibidos: {activeReports}
      </p>

      <div
        style={styles.list}
        onScroll={handleListScroll}
      >
        {loading ? (
          <div style={styles.emptyState}>
            Cargando reportes...
          </div>
        ) : null}

        {!loading && activeReports > 0 ? (
          <>
            {reports.map((report) => {
              const isHovered = hoveredId === report.id;

              return (
                <button
                  key={report.id}
                  type="button"
                  style={{
                    ...styles.reportItem,
                    ...(isHovered ? styles.reportItemHovered : {}),
                  }}
                  onMouseEnter={() => setHoveredId(report.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onOpenReport?.(report.id)}
                >
                  <div style={styles.reasonRow}>
                    <span style={styles.dot} />

                    <span style={styles.reason}>
                      {report.reason}
                    </span>
                  </div>

                  <div style={styles.reportMeta}>
                    <span>{report.date}</span>
                    <span>{report.statusLabel}</span>
                  </div>
                </button>
              );
            })}

            {loadingMore ? (
              <div style={styles.loadingMore}>
                Cargando más reportes...
              </div>
            ) : null}

            {!loadingMore && !hasMore ? (
              <div style={styles.endMessage}>
                No hay más reportes.
              </div>
            ) : null}
          </>
        ) : null}

        {!loading && activeReports === 0 ? (
          <div style={styles.emptyState}>
            {emptyMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}