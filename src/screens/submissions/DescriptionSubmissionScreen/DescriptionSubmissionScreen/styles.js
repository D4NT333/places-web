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
  alignItems: "flex-start",
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
  gap: 8,
  backgroundColor: "#F3F4F6",
  padding: 4,
  borderRadius: 999,
  border: "1px solid #E5E7EB",
  marginTop: 2,
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

  errorState: {
    padding: 40,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 600,
    color: "#B91C1C",
    backgroundColor: "#FEF2F2",
  },

  loadMoreTrap: {
    width: "100%",
    height: 1,
  },

  paginationHint: {
    padding: "10px 14px",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
    color: "#334155",
  },

  paginationEnd: {
    padding: "10px 14px",
    borderRadius: 10,
    backgroundColor: "#F0FDF4",
    color: "#15803D",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
  },
};

export default styles;