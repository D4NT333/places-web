const styles = {
  card: {
    height: "100%",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 14,
    backgroundColor: "#ffffff",
    padding: "24px 26px 26px",
    boxSizing: "border-box",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.08)",
  },

  title: {
    margin: "0 0 24px",
    fontSize: 26,
    fontWeight: 900,
    color: "#111827",
    letterSpacing: "-0.02em",
  },

  table: {
    width: "100%",
  },

  headerRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
    padding: "0 8px 14px",
    borderBottom: "1.5px solid #111827",
    fontSize: 14,
    fontWeight: 900,
    color: "#374151",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    paddingTop: 18,
  },

  row: {
    width: "100%",
    minHeight: 48,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
    padding: "0 8px",
    border: "none",
    borderRadius: 8,
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "pointer",
  },

  cell: {
    display: "flex",
    alignItems: "center",
    fontSize: 15,
    fontWeight: 800,
    color: "#374151",
  },

  emptyState: {
    minHeight: 260,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280",
    fontSize: 15,
    fontWeight: 800,
  },
};

export default styles;