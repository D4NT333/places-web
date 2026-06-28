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

  chipsRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "8px",
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
  },

  tableColumns,
};

export default styles;