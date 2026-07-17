const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    padding: 18,
    border: "3px solid #000000",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 12px 28px rgba(15, 23, 42, 0.06)",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  header: {
    marginBottom: 14,
  },

  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#111827",
  },

  countersRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 8,
  },

  counter: {
    color: "#475569",
    fontSize: 16,
    fontWeight: 600,
  },

  tableWrapper: {
    width: "100%",
    maxWidth: "100%",
    overflowX: "auto",
    boxSizing: "border-box",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "11px 8px",
    borderBottom: "2px solid #000000",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
  },

  tableRow: {
    transition: "background-color 0.15s ease",
    cursor: "pointer",
  },

  td: {
    padding: "13px 8px",
    borderBottom: "1px solid #C5C6C8",
    fontSize: 18,
    color: "#111827",
    whiteSpace: "nowrap",
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 92,
    padding: "6px 12px",
    border: "1px solid",
    borderRadius: 999,
    fontSize: 16,
    fontWeight: 800,
    lineHeight: 1,
    whiteSpace: "nowrap",
  },

  loadMoreRow: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 14,
  },

  loadMoreButton: {
    padding: "8px 18px",
    border: "1px solid #CBD5E1",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    fontWeight: 700,
    cursor: "pointer",
  },
};

export default styles;