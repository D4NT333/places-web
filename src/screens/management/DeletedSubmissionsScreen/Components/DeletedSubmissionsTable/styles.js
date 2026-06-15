const tableColumns =
  "2.1fr 0.9fr 1.2fr 1.25fr 1.15fr";

const styles = {
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
  },

  table: {
    minWidth: "900px",
  },

  header: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    borderBottom: "1px solid #d1d5db",
    color: "#374151",
    fontSize: "0.9rem",
    fontWeight: 700,
  },

  body: {
    display: "flex",
    flexDirection: "column",
  },

  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "280px",
    padding: "2rem",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    marginBottom: "1rem",
    borderRadius: "50%",
    backgroundColor: "#ecfdf5",
    color: "#059669",
    fontSize: "1.4rem",
    fontWeight: 700,
  },

  emptyTitle: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#1f2937",
  },

  emptyText: {
    margin: "0.45rem 0 0",
    color: "#6b7280",
    fontSize: "0.92rem",
  },
};

export {
  tableColumns,
};

export default styles;