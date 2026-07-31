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

  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "16px 18px",

    background:
      "linear-gradient(135deg, rgba(242, 248, 255, 0.98), rgba(255, 255, 255, 0.98) 56%, rgba(245, 239, 255, 0.98))",

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

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #f3edff, #fbf9ff)",

    border:
      "1px solid #d8c6f7",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(116, 65, 214, 0.12)",
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

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  periodLabel: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "33px",

    padding: "0 11px",

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "999px",

    fontSize: "2rem",
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
    height: "260px",

    padding: "14px 14px 10px",
    boxSizing: "border-box",

    overflow: "hidden",

    background:
      "linear-gradient(145deg, #f7fbff, #ffffff)",

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

  descriptionSummary: {
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

  photosSummary: {
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

  reportsSummary: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,

    padding: "10px 11px",

    color: "#b56d06",

    background:
      "linear-gradient(135deg, #fff7e7, #fffaf2)",

    border:
      "1px solid #efd18f",

    borderRadius: "12px",
  },

  descriptionIcon: {
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

  photosIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "56px",
    height: "56px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#ffffff",

    border:
      "1px solid #d8c6f7",

    borderRadius: "11px",

    boxShadow:
      "0 5px 12px rgba(116, 65, 214, 0.08)",
  },

  reportsIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#d17d08",
    background: "#ffffff",

    border:
      "1px solid #efd19a",

    borderRadius: "11px",

    boxShadow:
      "0 5px 12px rgba(209, 125, 8, 0.08)",
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
};

export default styles;