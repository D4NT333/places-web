const styles = {
  container: {
    width: "100%",
    maxWidth: "none",
    margin: 0,
    padding: "42px 56px 48px",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  headerBlock: {
    marginBottom: 24,
  },

  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
    letterSpacing: "-0.04em",
  },

  subtitle: {
    margin: "8px 0 0",
    maxWidth: 780,
    fontSize: 14,
    lineHeight: 1.6,
    color: "#6B7280",
  },

 topGrid: {
  width: "100%",
  display: "grid",
  gridTemplateColumns:
    "minmax(0, 1.48fr) minmax(0, 0.95fr)",
  gap: 22,
  alignItems: "stretch",
  marginBottom: 22,
  boxSizing: "border-box",
},

  middleGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.48fr) minmax(0, 0.95fr)",
    gap: 22,
    alignItems: "stretch",
    marginBottom: 22,
    boxSizing: "border-box",
  },

  leftStack: {
    minWidth: 0,
    display: "grid",
    gap: 22,
  },

bottomGrid: {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.48fr) minmax(0, 0.95fr)",
  gap: 22,
  alignItems: "start",
  boxSizing: "border-box",
  overflow: "hidden",
},

  metricsColumn: {
  width: "100%",
  minWidth: 0,
  display: "grid",
  gap: 22,
  boxSizing: "border-box",
  overflow: "hidden",
},

proposalsColumn: {
  width: "100%",
  minWidth: 0,
  display: "grid",
  gap: 22,
  alignContent: "start",
  boxSizing: "border-box",
  overflow: "hidden",
},

  footerActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 28,
  },

  backButton: {
    minWidth: 112,
    height: 38,
    border: "1px solid #D1D5DB",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    color: "#111827",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
  },
  analyticsPeriodBar: {
  width: "100%",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 18,
  marginBottom: 16,
  padding: "14px 18px",
  border: "1px solid #D1D5DB",
  borderRadius: 14,
  backgroundColor: "#FFFFFF",
  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.05)",
  boxSizing: "border-box",
},

analyticsPeriodLabel: {
  display: "block",
  marginBottom: 4,
  color: "#64748B",
  fontSize: 12,
  fontWeight: 800,
},

analyticsPeriodValue: {
  color: "#111827",
  fontSize: 15,
  fontWeight: 900,
},
};

export default styles;