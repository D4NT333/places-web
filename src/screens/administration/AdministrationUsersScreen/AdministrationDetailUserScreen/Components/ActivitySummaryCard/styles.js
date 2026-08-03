const styles = {
  card: {
    width: "100%",

    display: "flex",
    flexDirection: "column",

    padding: "24px",

    boxSizing: "border-box",

    background:
      "rgba(255, 255, 255, 0.96)",

    border:
      "1px solid rgba(184, 213, 242, 0.96)",

    borderRadius: "24px",

    boxShadow:
      "0 18px 44px rgba(31, 73, 116, 0.12)",

    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "space-between",

    gap: "20px",

    marginBottom: "19px",
  },

  heading: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",

    gap: "14px",
  },

  headerIcon: {
    width: "64px",
    height: "64px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #e5f2ff, #f3f9ff)",

    border:
      "1px solid #c1dcf7",

    borderRadius: "17px",

    boxShadow:
      "0 9px 20px rgba(33, 118, 229, 0.12)",
  },

  headerText: {
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#082b59",

    fontSize: "2.2rem",

    fontWeight: 950,

    lineHeight: 1.12,

    letterSpacing: "-0.03em",
  },

  total: {
    margin: "6px 0 0",

    color: "#7186a0",

    fontSize: "1.6rem",

    fontWeight: 750,
  },

  weekControl: {
    minWidth: "290px",
    height: "46px",

    display: "flex",
    alignItems: "center",

    gap: "9px",

    padding: "0 13px",

    boxSizing: "border-box",

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #ffffff, #f5f9fd)",

    border:
      "1px solid #b9d4ef",

    borderRadius: "14px",

    boxShadow:
      "0 8px 19px rgba(31, 73, 116, 0.08)",
  },

  weekSelect: {
    minWidth: 0,
    height: "100%",

    flex: 1,

    padding: "0 4px",

    color: "#143b67",

    background: "transparent",

    border: "none",

    outline: "none",

    fontFamily: "inherit",

    fontSize: "1.8rem",

    fontWeight: 850,

    cursor: "pointer",
  },

  metricsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",

    gap: "12px",

    marginBottom: "19px",
  },

  metricCard: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",

    gap: "11px",

    padding: "13px 14px",

    border:
      "1px solid transparent",

    borderRadius: "17px",
  },

  metricBlue: {
    background:
      "linear-gradient(145deg, #edf6ff, #e4f2ff)",

    borderColor: "#c3ddf7",
  },

  metricGreen: {
    background:
      "linear-gradient(145deg, #eafaf2, #e1f7ec)",

    borderColor: "#b9e5cf",
  },

  metricPurple: {
    background:
      "linear-gradient(145deg, #f5efff, #eee5ff)",

    borderColor: "#d9c9f5",
  },

  metricOrange: {
    background:
      "linear-gradient(145deg, #fff7ea, #fff0dc)",

    borderColor: "#efd09b",
  },

  metricIcon: {
    width: "56px",
    height: "56px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    borderRadius: "14px",
  },

  metricIconBlue: {
    color: "#2176e5",

    background:
      "rgba(214, 234, 255, 0.9)",
  },

  metricIconGreen: {
    color: "#0fa16a",

    background:
      "rgba(210, 243, 228, 0.95)",
  },

  metricIconPurple: {
    color: "#9256dd",

    background:
      "rgba(231, 218, 255, 0.95)",
  },

  metricIconOrange: {
    color: "#d9790b",

    background:
      "rgba(255, 230, 194, 0.95)",
  },

  metricContent: {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",

    gap: "3px",
  },

  metricValue: {
    color: "#082b59",

    fontSize: "2.2rem",

    fontWeight: 950,

    lineHeight: 1,
  },

  metricLabel: {
    overflow: "hidden",

    color: "#59728f",

    fontSize: "1.8rem",

    fontWeight: 850,

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  chartBox: {
    width: "100%",
    height: "500px",

    display: "flex",
    flexDirection: "column",

    padding: "17px 17px 11px",

    boxSizing: "border-box",

    background:
      "linear-gradient(180deg, #fbfdff, #f4f9fe)",

    border:
      "1px solid #d7e7f5",

    borderRadius: "20px",

    overflow: "hidden",
  },

  chartHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "space-between",

    gap: "16px",

    marginBottom: "8px",
  },

  chartEyebrow: {
    display: "block",

    marginBottom: "3px",

    color: "#2176e5",

    fontSize: "2.2rem",

    fontWeight: 950,

    textTransform: "uppercase",

    letterSpacing: "0.07em",
  },

  chartTitle: {
    margin: 0,

    color: "#143b67",

    fontSize: "1.8rem",

    fontWeight: 900,
  },

  chartLegend: {
    display: "inline-flex",
    alignItems: "center",

    gap: "7px",

    color: "#5f7894",

    fontSize: "2rem",

    fontWeight: 850,
  },

  legendDot: {
    width: "20px",
    height: "20px",

    background: "#2176e5",

    border:
      "2px solid #ffffff",

    borderRadius: "50%",

    boxShadow:
      "0 0 0 1px #2176e5",
  },

  chartWrapper: {
    width: "100%",
    minHeight: 0,

    flex: 1,
  },

  loadingState: {
    width: "100%",
    minHeight: 0,

    flex: 1,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    gap: "10px",

    color: "#647d98",

    fontSize: "1.8rem",

    fontWeight: 850,
  },
};

export default styles;