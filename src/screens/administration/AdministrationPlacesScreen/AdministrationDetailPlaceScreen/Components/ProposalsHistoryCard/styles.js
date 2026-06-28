const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    padding: 18,
    border: "1px solid #D1D5DB",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  title: {
    margin: "0 0 14px",
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
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
    borderBottom: "1px solid #D1D5DB",
    textAlign: "left",
    fontSize: 12,
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
    borderBottom: "1px solid #EEF2F7",
    fontSize: 13,
    color: "#111827",
    whiteSpace: "nowrap",
  },
};

export default styles;