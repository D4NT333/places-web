const tableColumns = "2.3fr 1.2fr 1fr 1fr 1fr";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    width: "100%",
  },

  headerBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },

  title: {
    margin: 0,
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#1f1f1f",
  },

  subtitle: {
    margin: 0,
    fontSize: "0.98rem",
    color: "#6b7280",
  },

  loadedInfoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "8px",
  },

  loadedInfoChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "6px 10px",
    border: "1px solid #e2e8f0",
    borderRadius: 999,
    backgroundColor: "#ffffff",
    color: "#64748b",
    fontSize: 12,
    fontWeight: 600,
  },

  loadedInfoValue: {
    color: "#0f172a",
    fontSize: 12,
    fontWeight: 800,
  },

  tableCard: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    gap: "1rem",
    alignItems: "center",
    padding: "1rem 1.25rem",
    borderBottom: "1px solid #e5e7eb",
    background: "#f9fafb",
    fontSize: "0.92rem",
    fontWeight: 700,
    color: "#374151",
  },

  rowsWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  emptyState: {
    padding: "2rem 1.25rem",
    textAlign: "center",
    color: "#6b7280",
    fontSize: "0.95rem",
  },

  headerPlace: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "4px",
  },

  headerDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerUserPhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  topBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 22,
  },

  filtersWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    flexWrap: "wrap",
    paddingTop: 4,
  },

  filterChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    color: "#334155",
    borderRadius: 999,
    padding: "8px 10px 8px 14px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.18s ease",
  },

  filterChipActive: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    borderColor: "#0f172a",
  },

  filterChipCount: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "21px",
    height: "21px",
    padding: "0 6px",
    borderRadius: 999,
    backgroundColor: "#f1f5f9",
    color: "#475569",
    fontSize: 11,
    fontWeight: 800,
  },

  filterChipCountActive: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#ffffff",
  },

  loadMoreTrap: {
    width: "100%",
    height: "1px",
  },

  paginationHint: {
    padding: "12px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "700",
    color: "#334155",
  },

  paginationCompleted: {
    padding: "12px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "700",
    color: "#15803d",
  },
};

export default styles;