const styles = {
  card: {
    height: "100%",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 14,
    backgroundColor: "#ffffff",
    padding: "18px 22px 18px",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateRows: "auto auto 1fr auto",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.08)",
  },

  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 900,
    color: "#111827",
    letterSpacing: "-0.02em",
  },

  total: {
    margin: "6px 0 14px",
    fontSize: 15,
    fontWeight: 800,
    color: "#374151",
  },

  chipsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    alignContent: "flex-start",
  },

  chip: {
    minHeight: 34,
    padding: "5px 14px",
    borderRadius: 8,
    border: "1.5px solid #111827",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 900,
    color: "#111827",
    backgroundColor: "#f8fafc",
    boxShadow: "0 6px 14px rgba(15, 23, 42, 0.06)",
  },

  statusRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(120px, 1fr))",
    gap: 16,
    alignSelf: "end",
  },

  statusText: {
    fontSize: 15,
    fontWeight: 900,
    color: "#374151",
  },
};

export default styles;