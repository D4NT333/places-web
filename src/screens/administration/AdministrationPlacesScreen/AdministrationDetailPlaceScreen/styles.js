const styles = {
  container: {
    width: "100%",
    maxWidth: "none",
    margin: 0,
    padding: "24px 28px 36px",
    boxSizing: "border-box",
  },

  headerBlock: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  headerIcon: {
    width: 68,
    height: 68,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2176E5",
    background: "linear-gradient(145deg, #EAF4FF, #FFFFFF)",
    border: "1px solid #BBD8FA",
    borderRadius: 15,
    boxShadow: "0 8px 20px rgba(33, 118, 229, 0.13)",
  },

  headerText: {
    minWidth: 0,
  },

  title: {
    margin: 0,
    fontSize: "2.8rem",
    fontWeight: 950,
    color: "#082D61",
    letterSpacing: "-0.035em",
    lineHeight: 1.05,
  },

  subtitle: {
    margin: "5px 0 0",
    maxWidth: 900,
    fontSize: "1.7rem",
    lineHeight: 2,
    fontWeight: 650,
    color: "#5C7898",
  },

  topGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.48fr) minmax(430px, 0.95fr)",
    gap: 18,
    alignItems: "stretch",
    marginBottom: 18,
    boxSizing: "border-box",
  },

  middleGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.48fr) minmax(430px, 0.95fr)",
    gap: 18,
    alignItems: "stretch",
    marginBottom: 18,
    boxSizing: "border-box",
  },

  leftStack: {
    minWidth: 0,
    display: "grid",
    gap: 18,
  },

  bottomGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.48fr) minmax(430px, 0.95fr)",
    gap: 18,
    alignItems: "start",
    boxSizing: "border-box",
  },

  metricsColumn: {
    width: "100%",
    minWidth: 0,
    display: "grid",
    gap: 18,
    boxSizing: "border-box",
  },

  proposalsColumn: {
    width: "100%",
    minWidth: 0,
    display: "grid",
    gap: 18,
    alignContent: "start",
    boxSizing: "border-box",
  },

  footerActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 22,
  },

  backButton: {
    minWidth: 126,
    minHeight: 44,
    padding: "0 18px",
    border: "1px solid #BED4E9",
    borderRadius: 10,
    background: "rgba(255,255,255,0.94)",
    color: "#285477",
    boxShadow: "0 5px 12px rgba(35, 76, 119, 0.08)",
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  analyticsPeriodBar: {
    width: "100%",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    marginBottom: 18,
    padding: "14px 18px",
    border: "1px solid rgba(196, 218, 239, 0.98)",
    borderRadius: 14,
    background: "linear-gradient(90deg, rgba(255,255,255,.94), rgba(241,248,255,.94))",
    boxShadow: "0 10px 24px rgba(31, 73, 116, 0.08)",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
  },

  analyticsPeriodLabel: {
    display: "block",
    marginBottom: 4,
    color: "#2176E5",
    fontSize: "2rem",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: ".04em",
  },

  analyticsPeriodValue: {
    color: "#0B315F",
    fontSize: "1.8rem",
    fontWeight: 900,
  },
};

export default styles;