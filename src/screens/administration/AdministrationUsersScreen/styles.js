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
    gap: "0.65rem",
  },

  headerTopRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    width: "100%",
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

  filtersRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "0.6rem",
    flexWrap: "wrap",
    paddingTop: "0.1rem",
  },

  filterChip: {
    appearance: "none",
    WebkitAppearance: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    padding: "0 15px",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#475569",
    fontSize: "0.78rem",
    fontWeight: 700,
    lineHeight: 1,
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
  },

  filterChipActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
    color: "#ffffff",
  },

  chipsRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "2px",
  },

  chip: {
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

  table: {
    width: "100%",
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
    boxSizing: "border-box",
  },

  headerName: {
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

  headerProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerActivity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  tableBody: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(100vh - 315px)",
    overflowY: "auto",
  },

  tableColumns,

  errorBox: {
    marginTop: 12,
    marginBottom: 12,
    padding: "12px 14px",
    borderRadius: 12,
    backgroundColor: "#fff1f2",
    border: "1px solid #fecdd3",
    color: "#991b1b",
    fontSize: 13,
    fontWeight: 600,
  },

  emptyState: {
    padding: "28px 16px",
    textAlign: "center",
    color: "#64748b",
    fontSize: 13,
    fontWeight: 600,
  },

  loadingMore: {
    padding: "16px",
    textAlign: "center",
    color: "#475569",
    fontSize: 13,
    fontWeight: 600,
    borderTop: "1px solid #e5e7eb",
  },

  endMessage: {
    padding: "16px",
    textAlign: "center",
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: 600,
    borderTop: "1px solid #e5e7eb",
  },
  contentGrid: {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.8fr) minmax(420px, 0.95fr)",
  gap: "1.5rem",
  alignItems: "stretch",
  minHeight: 0,
},

leftColumn: {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  minHeight: 0,
},
};

export default styles;