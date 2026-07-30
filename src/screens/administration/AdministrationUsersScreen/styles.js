const tableColumns =
  "2.2fr 1.15fr 1fr 1.15fr 1fr";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    gap: "18px",
    padding: "10px 4px 4px",
    boxSizing: "border-box",
  },

  headerBlock: {
    display: "flex",
    flexDirection: "column",

    gap: "17px",
    width: "100%",
  },

  headerTopRow: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent:
      "space-between",

    gap: "24px",
    width: "100%",
  },

  titleGroup: {
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

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#176fdc",

    background:
      "linear-gradient(145deg, #e9f4ff, #f8fbff)",

    border:
      "1px solid #bcd8fa",

    borderRadius: "14px",

    boxShadow:
      "0 7px 18px rgba(32, 111, 213, 0.12)",
  },

  titleText: {
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

    fontSize: "1.9rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  filtersPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "flex-end",
    flexWrap: "wrap",

    gap: "5px",

    padding: "6px",

    background:
      "rgba(255, 255, 255, 0.91)",

    border:
      "1px solid rgba(204, 221, 239, 0.98)",

    borderRadius: "12px",

    boxShadow:
      "0 7px 18px rgba(33, 75, 119, 0.09)",

    backdropFilter:
      "blur(10px)",
  },

  filterChip: {
    appearance: "none",
    WebkitAppearance:
      "none",

    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",

    minHeight: "35px",
    padding: "0 13px",

    color: "#274b72",
    background:
      "transparent",

    border:
      "1px solid transparent",

    borderRadius: "8px",

    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 850,
    lineHeight: 1,

    whiteSpace: "nowrap",
    cursor: "pointer",

    transition:
      "background 160ms ease, color 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
  },

  filterChipActive: {
    color: "#ffffff",

    background:
      "linear-gradient(135deg, #2176e5, #2e8df3)",

    borderColor: "#1c6ed9",

    boxShadow:
      "0 6px 13px rgba(33, 118, 229, 0.24)",
  },

  statsRow: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",

    gap: "10px",
  },

  statCard: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    minWidth: "205px",
    minHeight: "70px",

    padding: "10px 13px",
    boxSizing: "border-box",

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

  statIconBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#edf6ff",

    border:
      "1px solid #c8e0fc",

    borderRadius: "10px",
  },

  statIconGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#089457",
    background: "#ecfaf3",

    border:
      "1px solid #c4ead6",

    borderRadius: "10px",
  },

  statContent: {
    display: "flex",
    flexDirection: "column",

    gap: "1px",
    minWidth: 0,
  },

  statLabel: {
    color: "#4e6b8c",

    fontSize: "2rem",
    fontWeight: 800,
    lineHeight: 1.2,
  },

  statValueBlue: {
    color: "#176fdc",

    fontSize: "2.2rem",
    fontWeight: 950,
    lineHeight: 1.15,
  },

  statValueGreen: {
    color: "#078e4a",

    fontSize: "2.2rem",
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

    width: "34px",
    height: "34px",
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

    gap: "16px",

    minHeight: "52px",
    padding: "0 18px",
    boxSizing: "border-box",

    color: "#0b315f",

    background:
      "linear-gradient(90deg, #eef6ff 0%, #f8fbff 50%, #edf5ff 100%)",

    borderBottom:
      "1px solid #cddfef",

    fontSize: "2rem",
    fontWeight: 950,
    letterSpacing:
      "0.015em",

    textTransform:
      "uppercase",
  },

  headerName: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "flex-start",

    paddingLeft: "4px",
  },

  headerDate: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    textAlign: "center",
  },

  headerProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    textAlign: "center",
  },

  headerActivity: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    textAlign: "center",
  },

  headerStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    textAlign: "center",
  },

  tableBody: {
    display: "flex",
    flexDirection: "column",

    maxHeight:
      "calc(100dvh - 385px)",
    minHeight: "120px",

    overflowY: "auto",
    overflowX: "hidden",

    overscrollBehavior:
      "contain",

    scrollbarGutter:
      "stable",
  },

  tableColumns,

  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    flexDirection: "column",

    gap: "6px",

    minHeight: "210px",
    padding: "30px 18px",
    boxSizing: "border-box",

    color: "#607995",
    textAlign: "center",
  },

  stateIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "58px",
    height: "58px",

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

    fontSize: "1.8rem",
    fontWeight: 800,
  },
};

export default styles;