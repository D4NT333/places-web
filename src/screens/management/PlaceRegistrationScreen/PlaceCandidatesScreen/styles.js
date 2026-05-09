const styles = {
  container: {
    width: "100%",
    padding: "28px 32px",
    boxSizing: "border-box",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    marginBottom: "24px",
  },

  headerBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  title: {
    margin: 0,
    fontSize: "28px",
    fontWeight: 800,
    color: "#111827",
  },

  subtitle: {
    margin: 0,
    fontSize: "15px",
    color: "#6b7280",
  },

  summaryBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "8px",
  },

  summaryItem: {
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#f3f4f6",
    border: "1px solid #e5e7eb",
    fontSize: "13px",
    color: "#374151",
  },

  filtersWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "8px",
    maxWidth: "520px",
  },

  filterChip: {
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    color: "#374151",
    borderRadius: "999px",
    padding: "9px 14px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },

  filterChipActive: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
    color: "#ffffff",
  },

  tableCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1.8fr 1fr 0.8fr",
    gap: "16px",
    alignItems: "center",
    padding: "18px 24px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    color: "#4b5563",
    fontSize: "14px",
    fontWeight: 800,
  },

  headerName: {
    minWidth: 0,
  },

  headerAddress: {
    minWidth: 0,
  },

  headerType: {
    minWidth: 0,
  },

  headerStatus: {
    textAlign: "center",
  },

  rowsWrapper: {
    width: "100%",
  },

  emptyState: {
    padding: "36px 24px",
    textAlign: "center",
    color: "#6b7280",
    fontSize: "15px",
    fontWeight: 600,
  },
};

export default styles;