const tableColumns =
  "2fr 1fr 1.05fr 1.05fr 1.05fr 1.15fr 1.2fr";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    gap: "17px",

    padding:
      "10px 4px 6px",

    boxSizing:
      "border-box",
  },

  toolbar: {
  display: "grid",

  gridTemplateColumns:
    "minmax(390px, 1fr) auto",

  alignItems: "start",

  columnGap: "30px",

  width: "100%",
},

  headerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems:
      "flex-start",

    gap: "15px",
    minWidth: 0,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",

    gap: "14px",
    minWidth: 0,
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "54px",
    height: "54px",
    flexShrink: 0,

    color: "#176fdc",

    background:
      "linear-gradient(145deg, #e9f4ff, #f8fbff)",

    border:
      "1px solid #bad8fa",

    borderRadius: "14px",

    boxShadow:
      "0 7px 18px rgba(32, 111, 213, 0.12)",
  },

  titleContent: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#082d61",

    fontSize:
      "clamp(2rem, 2.35vw, 2.7rem)",

    fontWeight: 950,
    lineHeight: 1.05,

    letterSpacing:
      "-0.035em",
  },

  subtitle: {
    margin: 0,

    color: "#5c7898",

    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  summaryCardsRow: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",

    gap: "10px",
  },

  summaryCard: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    minWidth: "205px",
    minHeight: "70px",

    padding: "10px 13px",

    boxSizing:
      "border-box",

    background:
      "rgba(255, 255, 255, 0.88)",

    border:
      "1px solid rgba(205, 221, 237, 0.96)",

    borderRadius: "11px",

    boxShadow:
      "0 7px 17px rgba(34, 75, 116, 0.08)",

    backdropFilter:
      "blur(8px)",
  },

  summaryIconBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#edf6ff",

    border:
      "1px solid #c8e0fc",

    borderRadius: "10px",
  },

  summaryIconGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#089457",
    background: "#ecfaf3",

    border:
      "1px solid #c4ead6",

    borderRadius: "10px",
  },

  summaryContent: {
    display: "flex",
    flexDirection: "column",

    gap: "1px",
    minWidth: 0,
  },

  summaryLabel: {
    color: "#4e6b8c",

    fontSize: "2rem",
    fontWeight: 800,
    lineHeight: 1.2,
  },

  summaryValueBlue: {
    color: "#176fdc",

    fontSize: "2.4rem",
    fontWeight: 950,
    lineHeight: 1.15,
  },

  summaryValueGreen: {
    color: "#078e4a",

    fontSize: "2.4rem",
    fontWeight: 950,
    lineHeight: 1.15,
  },

  errorBox: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    padding: "12px 15px",

    color: "#b42332",
    background:
      "rgba(255, 242, 243, 0.96)",

    border:
      "1px solid #f3bbc1",

    borderRadius: "11px",

    boxShadow:
      "0 6px 14px rgba(178, 35, 50, 0.07)",

    fontSize: "1rem",
    fontWeight: 750,
  },

  errorIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "35px",
    height: "35px",
    flexShrink: 0,

    color: "#d43e4d",
    background: "#fff7f7",

    border:
      "1px solid #f3c9cd",

    borderRadius: "9px",
  },

  table: {
    width: "100%",
    minWidth: 0,

    overflow: "hidden",

    background:
      "rgba(255, 255, 255, 0.91)",

    border:
      "1px solid rgba(203, 220, 238, 0.98)",

    borderRadius: "13px",

    boxShadow:
      "0 13px 30px rgba(31, 73, 116, 0.1)",

    backdropFilter:
      "blur(10px)",
  },

  tableHeader: {
    display: "grid",

    gridTemplateColumns:
      tableColumns,

    alignItems: "center",

    gap: "14px",

    minHeight: "52px",

    padding: "0 18px",

    boxSizing:
      "border-box",

    color: "#0b315f",

    background:
      "linear-gradient(90deg, #eef6ff 0%, #f8fbff 50%, #edf5ff 100%)",

    borderBottom:
      "1px solid #cddfef",

    fontSize: "2rem",
    fontWeight: 950,
    letterSpacing:
      "0.012em",

    textAlign: "center",
    textTransform:
      "uppercase",
  },

  nameHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "flex-start",

    paddingLeft: "4px",

    textAlign: "left",
  },

  tableBody: {
    display: "flex",
    flexDirection: "column",

    minHeight: "120px",
  },

  tableColumns,

  stateContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    flexDirection: "column",

    gap: "6px",

    minHeight: "220px",

    padding: "30px 18px",

    boxSizing:
      "border-box",

    color: "#607995",

    textAlign: "center",
  },

  stateIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "60px",
    height: "60px",

    marginBottom: "4px",

    color: "#2176e5",
    background: "#eef6ff",

    border:
      "1px solid #cae0fa",

    borderRadius: "16px",
  },

  stateTitle: {
    color: "#12365f",

    fontSize: "1.15rem",
    fontWeight: 900,
  },

  stateText: {
    color: "#67809b",

    fontSize: "0.95rem",
    fontWeight: 650,
  },

  loadingMore: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "8px",

    padding: "14px",

    color: "#3972ad",

    background:
      "rgba(245, 250, 255, 0.92)",

    borderTop:
      "1px solid #dce8f3",

    fontSize: "0.95rem",
    fontWeight: 750,
  },

  endMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "8px",

    padding: "14px",

    color: "#078e4a",

    background:
      "rgba(240, 252, 246, 0.92)",

    borderTop:
      "1px solid #d1eadc",

    fontSize: "0.95rem",
    fontWeight: 800,
  },
};

export default styles;