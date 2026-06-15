const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    boxSizing: "border-box",
  },

  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    flexWrap: "wrap",
  },

  headerInformation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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

  summaryChips: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 10,
  },

  summaryChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 11px",
    border: "1px solid #DBE1E8",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    color: "#475569",
    fontSize: 12,
    fontWeight: 600,
  },

  filters: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 4,
    marginTop: 2,
    border: "1px solid #E5E7EB",
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
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
    transition: "all 0.18s ease",
  },

  filterButtonActive: {
    backgroundColor: "#FFFFFF",
    color: "#111827",
    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1.25rem",
    width: "100%",
  },

  emptyState: {
    width: "100%",
    padding: "3rem 1.5rem",
    boxSizing: "border-box",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    color: "#6B7280",
    fontSize: 14,
    fontWeight: 600,
  },

  paginationHint: {
    alignSelf: "center",
    padding: "9px 16px",
    borderRadius: 999,
    backgroundColor: "#F8FAFC",
    border: "1px solid #E2E8F0",
    color: "#475569",
    textAlign: "center",
    fontSize: 13,
    fontWeight: 700,
  },

  paginationEnd: {
    alignSelf: "center",
    padding: "9px 18px",
    borderRadius: 999,
    backgroundColor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    color: "#15803D",
    textAlign: "center",
    fontSize: 13,
    fontWeight: 700,
  },
  cardNavigation: {
  width: "100%",
  minWidth: 0,
  height: "100%",
  display: "block",
  borderRadius: "14px",
  outline: "none",
  cursor: "pointer",
},
};

export default styles;