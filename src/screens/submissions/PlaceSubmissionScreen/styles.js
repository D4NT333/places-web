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
};

export default styles;