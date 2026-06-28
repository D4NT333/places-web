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

  statsGrid: {
    width: "100%",
    minWidth: 0,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
    boxSizing: "border-box",
  },

  statBox: {
    minWidth: 0,
    minHeight: 82,
    display: "grid",
    alignContent: "center",
    gap: 8,
    padding: 14,
    border: "1px solid #D1D5DB",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  statLabel: {
    fontSize: 12,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  statValue: {
    fontSize: 22,
    fontWeight: 900,
    color: "#111827",
  },
};

export default styles;