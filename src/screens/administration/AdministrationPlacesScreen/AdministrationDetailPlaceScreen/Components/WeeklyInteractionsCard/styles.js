const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    padding: 18,
    border: "3px solid #000000",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 12px 28px rgba(15, 23, 42, 0.06)",
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
  fontSize: 24,
  fontWeight: 800,
  color: "#111827",
},

  statsGrid: {
    width: "100%",
    minWidth: 0,
    display: "grid",
    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",
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
    border: "2px solid #111111",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  statLabel: {
    fontSize: 20,
    fontWeight: 800,
    color: "#030303",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  statValue: {
    fontSize: 22,
    fontWeight: 900,
    color: "#111827",
  },
  headerRow: {
  width: "100%",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 14,
},

periodLabel: {
  color: "#000000",
  fontSize: 21,
  fontWeight: 700,
  whiteSpace: "nowrap",
},
};

export default styles;