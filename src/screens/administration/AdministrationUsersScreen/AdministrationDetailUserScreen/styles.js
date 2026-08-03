const styles = {
  container: {
    width: "100%",
    minHeight:
      "calc(100vh - 108px)",

    padding:
      "10px 30px 52px",

    boxSizing: "border-box",

    position: "relative",
  },

  topActions: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    minHeight: "44px",

    marginBottom: "10px",
  },

  backButton: {
    minWidth: "126px",
    minHeight: "39px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    padding: "0 18px",

    color: "#0b315f",

    background:
      "rgba(255, 255, 255, 0.96)",

    border:
      "1px solid #abc9e7",

    borderRadius: "999px",

    boxShadow:
      "0 8px 20px rgba(31, 73, 116, 0.12)",

    fontFamily: "inherit",

    fontSize: "2.2rem",

    fontWeight: 900,

    cursor: "pointer",

    transition:
      "transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease",
  },

  dashboardGrid: {
    width: "100%",

    display: "grid",

    gridTemplateColumns:
      "minmax(0, 1fr) minmax(0, 1fr)",

    gridTemplateRows:
      "minmax(360px, auto) minmax(430px, auto)",

    gridTemplateAreas: `
      "user reports"
      "activity history"
    `,

    gap: "18px",

    alignItems: "stretch",
  },

  userArea: {
    gridArea: "user",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
  },

  reportsArea: {
    gridArea: "reports",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
  },

  activityArea: {
    gridArea: "activity",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
  },

 historyArea: {
  gridArea: "history",

  minWidth: 0,
  minHeight: 0,

  display: "flex",
  flexDirection: "column",

  gap: "12px",
},
  stateBox: {
    width: "100%",
    minHeight: "320px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "34px",

    boxSizing: "border-box",

    color: "#42617f",

    background:
      "rgba(255, 255, 255, 0.95)",

    border:
      "1px solid rgba(190, 215, 242, 0.96)",

    borderRadius: "22px",

    boxShadow:
      "0 16px 38px rgba(31, 73, 116, 0.11)",

    fontSize: "1rem",

    fontWeight: 850,

    textAlign: "center",
  },

  errorBox: {
    width: "100%",

    padding: "22px 26px",

    boxSizing: "border-box",

    color: "#b91c1c",

    background: "#fef2f2",

    border:
      "1px solid #fecaca",

    borderRadius: "18px",

    boxShadow:
      "0 12px 28px rgba(185, 28, 28, 0.08)",

    fontSize: "0.94rem",

    fontWeight: 850,

    textAlign: "center",
  },
  
historyActions: {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  paddingRight: "4px",

  boxSizing: "border-box",
},
};

export default styles;