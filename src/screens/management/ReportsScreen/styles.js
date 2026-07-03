const styles = {
  container: {
    width: "100%",
    padding: "28px 18px 40px",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 26,
  },

  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 900,
    color: "#111827",
    letterSpacing: "-0.03em",
  },

  subtitle: {
    margin: "8px 0 0",
    fontSize: 14,
    lineHeight: 1.45,
    color: "#4b5563",
    fontWeight: 500,
  },
  stateBox: {
  width: "100%",
  minHeight: 180,
  border: "1px solid #D8DEE8",
  borderRadius: 16,
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
},

stateText: {
  margin: 0,
  fontSize: 14,
  fontWeight: 700,
  color: "#475569",
},

retryButton: {
  border: "1px solid #0F172A",
  backgroundColor: "#0F172A",
  color: "#FFFFFF",
  borderRadius: 999,
  padding: "9px 18px",
  fontSize: 13,
  fontWeight: 800,
  cursor: "pointer",
},

loadMoreWrapper: {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: 18,
},

loadMoreButton: {
  border: "1px solid #D8DEE8",
  backgroundColor: "#FFFFFF",
  color: "#0F172A",
  borderRadius: 999,
  padding: "10px 18px",
  fontSize: 13,
  fontWeight: 800,
  cursor: "pointer",
},
};

export default styles;