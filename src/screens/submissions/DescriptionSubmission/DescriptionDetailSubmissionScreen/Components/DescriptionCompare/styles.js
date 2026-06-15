const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 64px 1fr",
    alignItems: "stretch",
    gap: 18,
    marginTop: 8,
  },

  descriptionCard: {
    minHeight: 260,
    borderRadius: 20,
    border: "1px solid #E5E7EB",
    backgroundColor: "#F8FAFC",
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  newDescriptionCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #CBD5E1",
    boxShadow: "0 14px 26px rgba(15, 23, 42, 0.06)",
  },

  cardHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  cardEyebrow: {
    fontSize: 12,
    fontWeight: 900,
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  newCardEyebrow: {
    fontSize: 12,
    fontWeight: 900,
    color: "#2563EB",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  cardTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 900,
    color: "#0F172A",
  },

  descriptionText: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.75,
    color: "#334155",
    whiteSpace: "pre-line",
  },

  arrowBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    backgroundColor: "#0F172A",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: 900,
    boxShadow: "0 12px 22px rgba(15, 23, 42, 0.22)",
  },
};

export default styles;