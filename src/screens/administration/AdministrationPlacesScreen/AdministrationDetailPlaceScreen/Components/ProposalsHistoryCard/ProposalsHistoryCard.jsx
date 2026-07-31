import React from "react";

import {
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FilePenLine,
  FileText,
  History,
  LoaderCircle,
  RefreshCw,
  RotateCcw,
  Trash2,
  XCircle,
} from "lucide-react";

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

function getProposalStatusIcon(statusId) {
  const normalizedStatus =
    String(statusId || "")
      .trim()
      .toLowerCase();

  if (
    normalizedStatus === "approved" ||
    normalizedStatus === "published"
  ) {
    return CheckCircle2;
  }

  if (
    normalizedStatus === "rejected"
  ) {
    return XCircle;
  }

  if (
    normalizedStatus === "returned"
  ) {
    return RotateCcw;
  }

  if (
    normalizedStatus === "resubmitted"
  ) {
    return RefreshCw;
  }

  if (
    normalizedStatus === "pending_delete"
  ) {
    return Trash2;
  }

  return Clock3;
}

function getProposalTypeIcon(typeId) {
  const normalizedType =
    String(typeId || "")
      .trim()
      .toLowerCase();

  if (
    normalizedType === "photo" ||
    normalizedType === "photos" ||
    normalizedType === "photo_submission"
  ) {
    return Camera;
  }

  if (
    normalizedType === "description" ||
    normalizedType === "descriptions" ||
    normalizedType === "description_submission"
  ) {
    return FilePenLine;
  }

  return FileText;
}

function getProposalTypeStyle(typeId) {
  const normalizedType =
    String(typeId || "")
      .trim()
      .toLowerCase();

  if (
    normalizedType === "photo" ||
    normalizedType === "photos" ||
    normalizedType === "photo_submission"
  ) {
    return styles.typeIconViolet;
  }

  if (
    normalizedType === "description" ||
    normalizedType === "descriptions" ||
    normalizedType === "description_submission"
  ) {
    return styles.typeIconBlue;
  }

  return styles.typeIconGreen;
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
    proposal,
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
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <History
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Historial de propuestas
            </h2>

            <p style={styles.subtitle}>
              Consulta las propuestas relacionadas
              con este lugar y su estado actual.
            </p>
          </div>
        </div>

        <div style={styles.countersRow}>
          <span style={styles.counterBlue}>
            <FileText
              size={40}
              strokeWidth={2.2}
            />

            {proposals.length} propuestas
          </span>

          <span
            style={
              hasMore
                ? styles.counterOrange
                : styles.counterGreen
            }
          >
            {hasMore ? (
              <LoaderCircle
                size={40}
                strokeWidth={2.2}
              />
            ) : (
              <CheckCircle2
                size={40}
                strokeWidth={2.2}
              />
            )}

            {hasMore
              ? "Existen más"
              : "Lista completa"}
          </span>
        </div>
      </header>

      <div style={styles.content}>
        {proposals.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>
              <History
                size={50}
                strokeWidth={2}
              />
            </div>

            <strong style={styles.emptyTitle}>
              Sin propuestas
            </strong>

            <p style={styles.emptyMessage}>
              Este lugar todavía no tiene propuestas
              registradas.
            </p>
          </div>
        ) : (
          <div style={styles.tableWrapper}>
            <div style={styles.table}>
              <div style={styles.tableHeader}>
                <span>Tipo</span>

                <span>Nombre</span>

                <span>Fecha</span>

                <span>Estado</span>

                <span>Detalle</span>
              </div>

              <div style={styles.tableBody}>
                {proposals.map((proposal) => {
                  const proposalId =
                    proposal.submissionId ||
                    proposal.id;

                  const ProposalTypeIcon =
                    getProposalTypeIcon(
                      proposal.typeId,
                    );

                  const ProposalStatusIcon =
                    getProposalStatusIcon(
                      proposal.statusId,
                    );

                  return (
                    <div
                      key={proposalId}
                      role="button"
                      tabIndex={0}
                      style={styles.row}
                      onClick={() =>
                        onSelectProposal?.(
                          proposal,
                        )
                      }
                      onKeyDown={(event) =>
                        handleRowKeyDown(
                          event,
                          proposal,
                        )
                      }
                      onMouseEnter={(event) => {
                        event.currentTarget.style.background =
                          "linear-gradient(90deg, #f0f7ff 0%, #fbfdff 55%, #f5f1ff 100%)";

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
                          "linear-gradient(90deg, #f0f7ff 0%, #fbfdff 55%, #f5f1ff 100%)";

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
                      <div style={styles.typeCell}>
                        <div
                          style={getProposalTypeStyle(
                            proposal.typeId,
                          )}
                        >
                          <ProposalTypeIcon
                            size={40}
                            strokeWidth={2.15}
                          />
                        </div>

                        <div style={styles.typeText}>
                          <strong
                            style={styles.typeLabel}
                          >
                            {proposal.type}
                          </strong>
                        </div>
                      </div>

                      <div style={styles.nameCell}>
                        <strong
                          style={styles.proposalName}
                        >
                          {proposal.name ||
                            "Lugar sin nombre"}
                        </strong>

                   
                      </div>

                      <div style={styles.dateCell}>
                        <CalendarDays
                          size={40}
                          strokeWidth={2.15}
                        />

                        <span>
                          {proposal.date}
                        </span>
                      </div>

                      <div style={styles.statusCell}>
                        <span
                          style={getProposalStatusStyle(
                            proposal.statusId,
                          )}
                        >
                          <ProposalStatusIcon
                            size={40}
                            strokeWidth={2.2}
                          />

                          {proposal.status}
                        </span>
                      </div>

                      <div style={styles.detailCell}>
                        <ChevronRight
                          size={40}
                          strokeWidth={2.25}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {hasMore ? (
          <div style={styles.loadMoreContainer}>
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
              <LoaderCircle
                size={40}
                strokeWidth={2.2}
              />

              {loadingMore
                ? "Cargando propuestas..."
                : "Cargar más propuestas"}
            </button>
          </div>
        ) : proposals.length > 0 ? (
          <div style={styles.endMessage}>
            <CheckCircle2
              size={48}
              strokeWidth={2.2}
            />

            Se cargaron todas las propuestas
            relacionadas.
          </div>
        ) : null}
      </div>
    </section>
  );
}