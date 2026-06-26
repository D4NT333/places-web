const styles = {
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    border: "1px solid #d9dee7",
    borderRadius: 16,
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)",
  },

  table: {
    width: "100%",
    minWidth: 1050,
    borderCollapse: "collapse",
    tableLayout: "fixed",
  },

  headerRow: {
    height: 54,
    background: "#ffffff",
  },

  headerCell: {
    padding: "0 18px",
    borderBottom: "1px solid #d9dee7",
    color: "#0f172a",
    fontSize: 13,
    fontWeight: 800,
    textAlign: "left",
    whiteSpace: "nowrap",
  },

  bodyRow: {
    height: 104,
    background: "#ffffff",
    cursor: "pointer",
    transition:
      "background 160ms ease, transform 160ms ease, box-shadow 160ms ease",
  },

  bodyCell: {
    padding: "18px",
    color: "#0f172a",
    fontSize: 14,
    fontWeight: 700,
    verticalAlign: "middle",
    borderBottom: "1px solid #e8ecf2",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeCell: {
    width: "12%",
  },

  reasonCell: {
    width: "21%",
  },

  relatedCell: {
    width: "25%",
  },

  dateCell: {
    width: "15%",
  },

  userCell: {
    width: "17%",
  },

  statusCell: {
    width: "10%",
  },

  strongText: {
    color: "#0f172a",
    fontWeight: 800,
  },

  relatedText: {
    color: "#0f172a",
    fontWeight: 800,
  },

  emptyState: {
    minHeight: 280,
    border: "1px solid #d9dee7",
    borderRadius: 16,
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 24,
    boxSizing: "border-box",
  },

  emptyTitle: {
    margin: 0,
    color: "#111827",
    fontSize: 18,
    fontWeight: 800,
  },

  emptyText: {
    margin: "8px 0 0",
    color: "#6b7280",
    fontSize: 14,
    fontWeight: 600,
  },
};

export default styles;