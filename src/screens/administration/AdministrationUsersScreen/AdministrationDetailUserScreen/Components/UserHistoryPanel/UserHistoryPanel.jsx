import React, {
  useState,
} from "react";

import {
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  History,
  MapPin,
  RotateCcw,
  Trash2,
  XCircle,
} from "lucide-react";

import styles from "./styles";

function getTypeIcon(type) {
  const normalizedType =
    String(type || "")
      .trim()
      .toLowerCase();

  if (
    normalizedType.includes(
      "foto",
    ) ||
    normalizedType.includes(
      "photo",
    )
  ) {
    return Camera;
  }

  if (
    normalizedType.includes(
      "descrip",
    )
  ) {
    return FileText;
  }

  return MapPin;
}

function getTypeStyle(type) {
  const normalizedType =
    String(type || "")
      .trim()
      .toLowerCase();

  if (
    normalizedType.includes(
      "foto",
    ) ||
    normalizedType.includes(
      "photo",
    )
  ) {
    return styles.typePurple;
  }

  if (
    normalizedType.includes(
      "descrip",
    )
  ) {
    return styles.typeBlue;
  }

  return styles.typeGreen;
}

function getStatusConfig(status) {
  const normalizedStatus =
    String(status || "")
      .trim()
      .toLowerCase();

  if (
    normalizedStatus ===
      "approved" ||
    normalizedStatus ===
      "accepted" ||
    normalizedStatus ===
      "published"
  ) {
    return {
      icon: CheckCircle2,
      style:
        styles.statusApproved,
    };
  }

  if (
    normalizedStatus ===
      "rejected" ||
    normalizedStatus ===
      "declined"
  ) {
    return {
      icon: XCircle,
      style:
        styles.statusRejected,
    };
  }

  if (
    normalizedStatus ===
      "returned" ||
    normalizedStatus ===
      "devuelto"
  ) {
    return {
      icon: RotateCcw,
      style:
        styles.statusReturned,
    };
  }

  if (
    normalizedStatus ===
      "pending_delete" ||
    normalizedStatus ===
      "pending-delete"
  ) {
    return {
      icon: Trash2,
      style:
        styles.statusDelete,
    };
  }

  return {
    icon: Clock3,
    style: styles.statusPending,
  };
}

export default function UserHistoryPanel({
  history = [],
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  onOpenItem,
}) {
  const [
    hoveredItemId,
    setHoveredItemId,
  ] = useState(null);

  function handleBodyScroll(event) {
    const target =
      event.currentTarget;

    if (
      target.scrollHeight <=
      target.clientHeight
    ) {
      return;
    }

    const distanceFromBottom =
      target.scrollHeight -
      target.scrollTop -
      target.clientHeight;

    if (
      distanceFromBottom < 130 &&
      hasMore &&
      !loadingMore
    ) {
      onLoadMore?.();
    }
  }

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.heading}>
          <div style={styles.headerIcon}>
            <History
              size={50}
              strokeWidth={2.1}
            />
          </div>

          <div style={styles.headerText}>
            <h2 style={styles.title}>
              Historial de acciones
            </h2>

            <p style={styles.subtitle}>
              Propuestas y movimientos
              relacionados con el usuario.
            </p>
          </div>
        </div>

        <span style={styles.totalPill}>
          {history.length} movimientos
        </span>
      </header>

      <div style={styles.tableWrapper}>
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <span>Tipo</span>

            <span>Nombre</span>

            <span>Fecha</span>

            <span>Estado</span>

            <span>Detalle</span>
          </div>

          <div
            style={styles.tableBody}
            onScroll={handleBodyScroll}
          >
            {loading ? (
              <div
                style={
                  styles.loadingState
                }
              >
                <History
                  size={48}
                  strokeWidth={1.7}
                />

                <strong>
                  Cargando historial...
                </strong>
              </div>
            ) : null}

            {!loading &&
            history.length > 0 ? (
              <>
                {history.map((item) => {
                  const itemId =
                    item.historyId ||
                    item.submissionId ||
                    item.id;

                  const TypeIcon =
                    getTypeIcon(
                      item.type,
                    );

                  const statusConfig =
                    getStatusConfig(
                      item.status,
                    );

                  const StatusIcon =
                    statusConfig.icon;

                  const isHovered =
                    hoveredItemId ===
                    itemId;

                  return (
                    <button
                      key={itemId}
                      type="button"
                      style={{
                        ...styles.row,

                        ...(isHovered
                          ? styles.rowHovered
                          : {}),
                      }}
                      onMouseEnter={() =>
                        setHoveredItemId(
                          itemId,
                        )
                      }
                      onMouseLeave={() =>
                        setHoveredItemId(
                          null,
                        )
                      }
                      onFocus={() =>
                        setHoveredItemId(
                          itemId,
                        )
                      }
                      onBlur={() =>
                        setHoveredItemId(
                          null,
                        )
                      }
                      onClick={() =>
                        onOpenItem?.(
                          item,
                        )
                      }
                    >
                      <span
                        style={
                          styles.typeCell
                        }
                      >
                        <span
                          style={{
                            ...styles.typeIcon,
                            ...getTypeStyle(
                              item.type,
                            ),
                          }}
                        >
                          <TypeIcon
                            size={50}
                            strokeWidth={2.2}
                          />
                        </span>

                        <span
                          style={
                            styles.typeLabel
                          }
                        >
                          {item.type ||
                            "Propuesta"}
                        </span>
                      </span>

                      <span
                        style={
                          styles.relatedCell
                        }
                      >
                        {item.relatedLabel ||
                          item.name ||
                          item.placeName ||
                          "Sin nombre"}
                      </span>

                      <span
                        style={
                          styles.dateCell
                        }
                      >
                        {item.date ||
                          item.createdAt ||
                          "Sin fecha"}
                      </span>

                      <span
                        style={{
                          ...styles.statusPill,
                          ...statusConfig.style,
                        }}
                      >
                        <StatusIcon
                          size={
                            String(
                              item.status ||
                                "",
                            )
                              .trim()
                              .toLowerCase() ===
                            "pending_delete"
                              ? 40
                              :40
                          }
                          strokeWidth={2.3}
                        />

                        {item.statusLabel ||
                          item.status ||
                          "Pendiente"}
                      </span>

                      <span
                        style={
                          styles.detailCell
                        }
                      >
                        <ChevronRight
                          size={50}
                          strokeWidth={2.3}
                        />
                      </span>
                    </button>
                  );
                })}

                {loadingMore ? (
                  <div
                    style={
                      styles.loadingMore
                    }
                  >
                    <Clock3
                      size={40}
                      strokeWidth={2.2}
                    />

                    Cargando más historial...
                  </div>
                ) : null}

                {!loadingMore &&
                !hasMore ? (
                  <div
                    style={
                      styles.endMessage
                    }
                  >
                    <CheckCircle2
                      size={40}
                      strokeWidth={2.25}
                    />

                    Se cargó todo el
                    historial disponible.
                  </div>
                ) : null}
              </>
            ) : null}

            {!loading &&
            history.length === 0 ? (
              <div
                style={
                  styles.emptyState
                }
              >
                <div
                  style={
                    styles.emptyIcon
                  }
                >
                  <History
                    size={58}
                    strokeWidth={1.6}
                  />
                </div>

                <strong
                  style={
                    styles.emptyTitle
                  }
                >
                  Sin actividad registrada
                </strong>

                <span
                  style={
                    styles.emptyText
                  }
                >
                  Este usuario todavía no
                  tiene movimientos en su
                  historial.
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}