const styles = {
  card: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    boxSizing: "border-box",

    background:
      "rgba(255, 255, 255, 0.93)",

    border:
      "1px solid rgba(190, 215, 242, 0.98)",

    borderRadius: "18px",

    boxShadow:
      "0 14px 34px rgba(31, 73, 116, 0.11)",

    backdropFilter:
      "blur(12px)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "16px 18px",

    background:
      "linear-gradient(135deg, rgba(240, 252, 246, 0.98), rgba(255, 255, 255, 0.98) 54%, rgba(242, 248, 255, 0.98))",

    borderBottom:
      "1px solid #d4e4f2",
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",

    gap: "13px",
    minWidth: 0,
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "62px",
    height: "62px",
    flexShrink: 0,

    color: "#078e4a",

    background:
      "linear-gradient(145deg, #eafaf2, #f8fcfa)",

    border:
      "1px solid #bee5cf",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(7, 142, 74, 0.12)",
  },

  titleText: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#092f61",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  subtitle: {
    margin: 0,

    color: "#647e9a",

    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  headerMeta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap",

    gap: "8px",
    minWidth: 0,
  },

  total: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "33px",

    padding: "0 11px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "2.2rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  periodLabel: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "33px",

    padding: "0 11px",

    color: "#176fdc",
    background: "#eef6ff",

    border:
      "1px solid #bdd8f5",

    borderRadius: "999px",

    fontSize: "2.2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  content: {
    display: "flex",
    flexDirection: "column",

    gap: "12px",

    padding: "15px 16px 16px",
    boxSizing: "border-box",
  },

  chartBox: {
    position: "relative",

    width: "100%",
    minWidth: 0,
    height: "270px",

    padding: "14px 14px 10px",
    boxSizing: "border-box",

    overflow: "hidden",

    background:
      "linear-gradient(145deg, #f4fbf7, #ffffff 48%, #f4f9ff)",

    border:
      "1px solid #d2e2ef",

    borderRadius: "14px",

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 6px 16px rgba(31, 73, 116, 0.05)",
  },

  summaryGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",

    gap: "10px",
  },

  totalSummary: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,

    padding: "10px 11px",

    color: "#176fdc",

    background:
      "linear-gradient(135deg, #edf6ff, #f9fcff)",

    border:
      "1px solid #c5ddf6",

    borderRadius: "12px",
  },

  peakSummary: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,

    padding: "10px 11px",

    color: "#078e4a",

    background:
      "linear-gradient(135deg, #eafaf2, #f8fcfa)",

    border:
      "1px solid #bfe5d0",

    borderRadius: "12px",
  },

  daysSummary: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,

    padding: "10px 11px",

    color: "#7441d6",

    background:
      "linear-gradient(135deg, #f5efff, #fcfaff)",

    border:
      "1px solid #d9c8f7",

    borderRadius: "12px",
  },

  totalSummaryIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#ffffff",

    border:
      "1px solid #c4dcf8",

    borderRadius: "11px",

    boxShadow:
      "0 5px 12px rgba(33, 118, 229, 0.08)",
  },

  peakSummaryIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#078e4a",
    background: "#ffffff",

    border:
      "1px solid #bee5cf",

    borderRadius: "11px",

    boxShadow:
      "0 5px 12px rgba(7, 142, 74, 0.08)",
  },

  daysSummaryIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#ffffff",

    border:
      "1px solid #d8c6f7",

    borderRadius: "11px",

    boxShadow:
      "0 5px 12px rgba(116, 65, 214, 0.08)",
  },

  summaryContent: {
    display: "flex",
    flexDirection: "column",

    gap: "2px",
    minWidth: 0,
  },

  summaryLabel: {
    color: "inherit",

    fontSize: "2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  summaryValue: {
    color: "#092f61",

    fontSize: "2.2rem",
    fontWeight: 950,
    lineHeight: 1,
  },

  emptyMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    padding: "10px 12px",

    color: "#647e98",

    background:
      "linear-gradient(135deg, #f3f7fb, #fafcff)",

    border:
      "1px solid #d5e2ed",

    borderRadius: "10px",

    fontSize: "1.8rem",
    fontWeight: 700,

    textAlign: "center",
  },
};

export default styles;