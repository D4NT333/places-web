const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 20,
    flexWrap: "wrap",
  },

  title: {
    margin: 0,
    fontSize: 26,
    fontWeight: 800,
    color: "#111827",
  },

  subtitle: {
    margin: "6px 0 0",
    fontSize: 14,
    color: "#6B7280",
  },

  filters: {
    display: "flex",
    gap: 8,
    backgroundColor: "#F3F4F6",
    padding: 4,
    borderRadius: 999,
    border: "1px solid #E5E7EB",
  },

  filterButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#6B7280",
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
  },

  filterButtonActive: {
    backgroundColor: "#FFFFFF",
    color: "#111827",
    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
  },

  tableCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 18,
    overflow: "hidden",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr 2.2fr 0.8fr",
    alignItems: "center",
    padding: "14px 22px",
    backgroundColor: "#F9FAFB",
    borderBottom: "1px solid #E5E7EB",
    fontSize: 13,
    fontWeight: 800,
    color: "#4B5563",
  },

  placeColumn: {
    minWidth: 0,
  },

  dateColumn: {
    minWidth: 0,
  },

  previewColumn: {
    minWidth: 0,
    textAlign: "center",
  },

  statusColumn: {
    minWidth: 0,
    textAlign: "center",
  },

  tableBody: {
    display: "flex",
    flexDirection: "column",
  },

  emptyState: {
    padding: 40,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 600,
    color: "#6B7280",
  },
};

export default styles;