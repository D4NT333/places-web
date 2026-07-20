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

  header: {
    width: "100%",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 14,
  },

  title: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  total: {
    color: "#475569",
    fontSize: 13,
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

  chartBox: {
    position: "relative",
    width: "100%",
    minWidth: 0,
    height: 240,
    padding: 14,
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  emptyMessage: {
    margin: "12px 0 0",
    textAlign: "center",
    color: "#64748B",
    fontWeight: 600,
  },
  headerMeta: {
  display: "flex",
  alignItems: "center",
  gap: 14,
  minWidth: 0,
},

periodLabel: {
  color: "#64748B",
  fontSize: 11,
  fontWeight: 700,
  whiteSpace: "nowrap",
},
};

export default styles;