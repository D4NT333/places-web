const styles = {
  card: {
    width: "100%",
    minHeight: "100%",

    display: "flex",
    flexDirection: "column",

    padding: "20px",

    boxSizing: "border-box",

    background:
      "rgba(255, 255, 255, 0.96)",

    border:
      "1px solid rgba(184, 213, 242, 0.96)",

    borderRadius: "20px",

    boxShadow:
      "0 14px 34px rgba(31, 73, 116, 0.11)",

    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "15px",

    marginBottom: "16px",
  },

  heading: {
    display: "flex",
    alignItems: "center",

    gap: "12px",

    minWidth: 0,
  },

  headerIcon: {
    width: "70px",
    height: "70px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #f0e8ff, #faf7ff)",

    border:
      "1px solid #d8c7f5",

    borderRadius: "15px",
  },

  title: {
    margin: 0,

    color: "#082b59",

    fontSize: "2.4rem",

    fontWeight: 950,
  },

  subtitle: {
    margin: "4px 0 0",

    color: "#7186a0",

    fontSize: "1.6rem",

    fontWeight: 700,
  },

  totalPill: {
    minHeight: "28px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "2px 10px",

    color: "#1764c7",

    background: "#edf5ff",

    border:
      "1px solid #b8d5f4",

    borderRadius: "999px",

    fontSize: "2rem",

    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  summaryGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",

    gap: "10px",

    marginBottom: "15px",
  },

  summaryItem: {
    minWidth: 0,

    display: "grid",

    gridTemplateColumns:
      "auto auto",

    alignItems: "center",

    columnGap: "8px",

    padding: "11px 12px",

    border:
      "1px solid transparent",

    borderRadius: "14px",
  },

  summaryPending: {
    color: "#b96c08",

    background: "#fff7e8",

    borderColor: "#f0c97b",
  },

  summaryResolved: {
    color: "#078251",

    background: "#eafaf2",

    borderColor: "#9edcbe",
  },

  summaryDismissed: {
    color: "#c6333f",

    background: "#fff0f1",

    borderColor: "#f0aeb4",
  },

  summaryValue: {
    color: "#082b59",

    fontSize: "1.8rem",

    fontWeight: 950,
  },

  summaryLabel: {
    gridColumn: "1 / -1",

    marginTop: "3px",

    fontSize: "1.7rem",

    fontWeight: 850,
  },

  list: {
    minHeight: "210px",
    maxHeight: "270px",

    flex: 1,

    display: "flex",
    flexDirection: "column",

    gap: "8px",

    overflowY: "auto",
  },

  reportItem: {
    width: "100%",
    minHeight: "61px",

    display: "grid",

    gridTemplateColumns:
      "42px minmax(0, 1fr) auto 24px",

    alignItems: "center",

    gap: "10px",

    padding: "9px 11px",

    boxSizing: "border-box",

    color: "#153b66",

    background: "#ffffff",

    border:
      "1px solid #dce9f5",

    borderRadius: "14px",

    fontFamily: "inherit",

    textAlign: "left",

    cursor: "pointer",
  },

  reportItemHovered: {
    borderColor: "#9fc9f3",

    boxShadow:
      "0 8px 18px rgba(33, 118, 229, 0.1)",
  },

  reportIcon: {
    width: "50px",
    height: "50px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#2176e5",

    background: "#e9f4ff",

    borderRadius: "12px",
  },

  reportContent: {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",

    gap: "3px",
  },

  reason: {
    overflow: "hidden",

    color: "#143b67",

    fontSize: "2rem",

    fontWeight: 900,

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  reportDate: {
    color: "#7a8fa7",

    fontSize: "1.6rem",

    fontWeight: 750,
  },

  statusPill: {
    minHeight: "25px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "2px 8px",

    borderRadius: "999px",

    fontSize: "1.8rem",

    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  statusPending: {
    color: "#b96c08",

    background: "#fff7e8",

    border:
      "1px solid #f0c97b",
  },

  statusResolved: {
    color: "#078251",

    background: "#eafaf2",

    border:
      "1px solid #9edcbe",
  },

  statusDismissed: {
    color: "#c6333f",

    background: "#fff0f1",

    border:
      "1px solid #f0aeb4",
  },

  emptyState: {
    minHeight: "210px",

    flex: 1,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    padding: "20px",

    color: "#7186a0",

    textAlign: "center",
  },

  emptyIcon: {
    width: "82px",
    height: "82px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#438ce6",

    background: "#eaf4ff",

    borderRadius: "26px",
  },

  emptyTitle: {
    color: "#082b59",

    fontSize: "1.6rem",

    fontWeight: 950,
  },

  emptyText: {
    color: "#7186a0",

    fontSize: "1.76rem",

    fontWeight: 700,
  },

  loadingMore: {
    padding: "9px",

    color: "#5d7795",

    fontSize: "1.74rem",

    fontWeight: 850,

    textAlign: "center",
  },

  endMessage: {
    minHeight: "36px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    color: "#159466",

    background: "#ecfaf3",

    border:
      "1px solid #c2e9d5",

    borderRadius: "10px",

    fontSize: "2rem",

    fontWeight: 900,
  },
};

export default styles;