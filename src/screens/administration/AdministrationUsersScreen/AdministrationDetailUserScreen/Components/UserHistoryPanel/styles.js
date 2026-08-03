const TABLE_COLUMNS =
  "minmax(145px, 0.9fr) minmax(230px, 1.55fr) minmax(125px, 0.72fr) minmax(155px, 0.9fr) 48px";

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

    gap: "18px",

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

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #f1eaff, #faf7ff)",

    border:
      "1px solid #d8c7f5",

    borderRadius: "17px",

    boxShadow:
      "0 9px 20px rgba(116, 65, 214, 0.11)",
  },

  headerText: {
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#082b59",

    fontSize: "2.3rem",

    fontWeight: 950,

    lineHeight: 1.12,

    letterSpacing: "-0.03em",
  },

  subtitle: {
    margin: "6px 0 0",

    color: "#7186a0",

    fontSize: "1.6rem",

    fontWeight: 700,

    lineHeight: 1.4,
  },

  totalPill: {
    minHeight: "31px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    padding: "3px 11px",

    color: "#1764c7",

    background: "#edf5ff",

    border:
      "1px solid #b8d5f4",

    borderRadius: "999px",

    fontSize: "1.6rem",

    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  tableWrapper: {
    width: "100%",

    overflowX: "auto",

    background: "#ffffff",

    border:
      "1px solid #d9e7f4",

    borderRadius: "19px",

    scrollbarWidth: "thin",

    scrollbarColor:
      "#b8d4ee transparent",
  },

  table: {
    minWidth: "930px",
  },

  tableHeader: {
    display: "grid",

    gridTemplateColumns:
      TABLE_COLUMNS,

    alignItems: "center",

    gap: "12px",

    minHeight: "49px",

    padding: "0 15px",

    boxSizing: "border-box",

    color: "#315778",

    background:
      "linear-gradient(180deg, #f6faff, #edf5fc)",

    borderBottom:
      "1px solid #d9e7f4",

    fontSize: "1.5rem",

    fontWeight: 950,

    textTransform: "uppercase",

    letterSpacing: "0.035em",
  },

  tableBody: {
    maxHeight: "455px",

    display: "flex",
    flexDirection: "column",

    overflowY: "auto",

    scrollbarWidth: "thin",

    scrollbarColor:
      "#b8d4ee transparent",
  },

  row: {
    width: "100%",
    minHeight: "66px",

    flexShrink: 0,

    display: "grid",

    gridTemplateColumns:
      TABLE_COLUMNS,

    alignItems: "center",

    gap: "12px",

    padding: "0 15px",

    boxSizing: "border-box",

    color: "#173e68",

    background: "#ffffff",

    border: "none",

    borderBottom:
      "1px solid #e7eff7",

    fontFamily: "inherit",

    textAlign: "left",

    cursor: "pointer",

    outline: "none",

    transition:
      "background 150ms ease, box-shadow 150ms ease",
  },

  rowHovered: {
    background:
      "linear-gradient(90deg, #f1f7ff, #fbfdff)",

    boxShadow:
      "inset 4px 0 0 #2176e5",
  },

  typeCell: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",

    gap: "10px",
  },

  typeIcon: {
    width: "50px",
    height: "50px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    borderRadius: "13px",
  },

  typeBlue: {
    color: "#2176e5",

    background: "#eaf4ff",

    border:
      "1px solid #c7def6",
  },

  typePurple: {
    color: "#7441d6",

    background: "#f3edff",

    border:
      "1px solid #d9c9f5",
  },

  typeGreen: {
    color: "#0d9c68",

    background: "#eaf9f2",

    border:
      "1px solid #bfe6d4",
  },

  typeLabel: {
    minWidth: 0,

    overflow: "hidden",

    color: "#173e68",

    fontSize: "1.7rem",

    fontWeight: 900,

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  relatedCell: {
    minWidth: 0,

    overflow: "hidden",

    color: "#173e68",

    fontSize: "1.4rem",

    fontWeight: 850,

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  dateCell: {
    color: "#5e7692",

    fontSize: "1.8rem",

    fontWeight: 800,

    whiteSpace: "nowrap",
  },

  statusPill: {
    width: "fit-content",

    minHeight: "29px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    padding: "3px 10px",

    borderRadius: "999px",

    fontSize: "1.6rem",

    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  statusApproved: {
    color: "#078251",

    background: "#eafaf2",

    border:
      "1px solid #9edcbe",
  },

  statusRejected: {
    color: "#c6333f",

    background: "#fff0f1",

    border:
      "1px solid #f0aeb4",
  },

  statusReturned: {
    color: "#6f45d6",

    background: "#f4efff",

    border:
      "1px solid #d9caf6",
  },

  statusPending: {
    color: "#b96c08",

    background: "#fff7e8",

    border:
      "1px solid #f0c97b",
  },

  statusDelete: {
    maxWidth: "148px",

    minHeight: "25px",

    gap: "4px",

    padding: "2px 7px",

    overflow: "hidden",

    color: "#c04e17",

    background: "#fff5ec",

    border:
      "1px solid #f4c29e",

    fontSize: "1.68rem",

    textOverflow: "ellipsis",
  },

  detailCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#79a0c8",
  },

  loadingState: {
    minHeight: "260px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    gap: "11px",

    color: "#637c98",

    fontSize: "1.6rem",

    fontWeight: 850,
  },

  emptyState: {
    minHeight: "290px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    gap: "9px",

    padding: "24px",

    boxSizing: "border-box",

    color: "#7186a0",

    textAlign: "center",
  },

  emptyIcon: {
    width: "92px",
    height: "92px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: "5px",

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #efe7ff, #faf7ff)",

    border:
      "1px solid #d9c9f5",

    borderRadius: "29px",

    boxShadow:
      "0 12px 25px rgba(116, 65, 214, 0.11)",

    transform: "rotate(-4deg)",
  },

  emptyTitle: {
    color: "#082b59",

    fontSize: "1.08rem",

    fontWeight: 950,
  },

  emptyText: {
    maxWidth: "320px",

    color: "#7186a0",

    fontSize: "1.6rem",

    fontWeight: 700,

    lineHeight: 1.45,
  },

  loadingMore: {
    minHeight: "44px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    flexShrink: 0,

    color: "#5e7692",

    background: "#f6f9fd",

    borderTop:
      "1px solid #e3edf7",

    fontSize: "1.8rem",

    fontWeight: 850,
  },

  endMessage: {
    minHeight: "45px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    flexShrink: 0,

    color: "#0d9563",

    background: "#eefbf5",

    borderTop:
      "1px solid #c9ebdc",

    fontSize: "1.8rem",

    fontWeight: 900,
  },
};

export default styles;