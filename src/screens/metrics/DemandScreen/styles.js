const styles = {
  page: {
    width: "100%",
    minHeight: "100%",
    padding: "28px 32px 40px",
    backgroundColor: "#F6F7FB",
    boxSizing: "border-box",
  },

  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },

  eyebrow: {
    margin: 0,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: 700,
    color: "#6B7280",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 800,
    color: "#111827",
  },

  subtitle: {
    maxWidth: 760,
    margin: "10px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: "#6B7280",
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
    marginBottom: 18,
  },

  chartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 18,
  },
};

export default styles;