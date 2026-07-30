const tableColumns =
  "2.2fr 1.15fr 1fr 1.15fr 1fr";

const styles = {
  row: {
    appearance: "none",
    WebkitAppearance:
      "none",

    display: "grid",

    gridTemplateColumns:
      tableColumns,

    alignItems: "center",

    gap: "16px",

    width: "100%",
    minHeight: "82px",

    padding: "9px 18px",
    boxSizing: "border-box",

    color: "#0f315a",
    background:
      "rgba(255, 255, 255, 0.86)",

    border: "none",
    borderBottom:
      "1px solid #dce8f2",

    fontFamily: "inherit",
    textAlign: "left",

    cursor: "pointer",

    transition:
      "background 160ms ease, box-shadow 160ms ease",
  },

  rowHovered: {
    background:
      "linear-gradient(90deg, #f0f7ff 0%, #fbfdff 55%, #f3f9ff 100%)",

    boxShadow:
      "inset 4px 0 0 #2176e5",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "flex-start",

    gap: "12px",
    minWidth: 0,
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "104px",
    height: "104px",
    flexShrink: 0,

    overflow: "hidden",

    color: "#176fdc",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    border:
      "2px solid #ffffff",

    borderRadius: "999px",

    boxShadow:
      "0 0 0 1px #c8ddf3, 0 6px 14px rgba(29, 69, 112, 0.12)",

    transition:
      "box-shadow 160ms ease, transform 160ms ease",
  },

  avatarHovered: {
    transform:
      "scale(1.04)",

    boxShadow:
      "0 0 0 2px #80b8f4, 0 8px 18px rgba(29, 87, 151, 0.17)",
  },

  avatarImage: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  avatarText: {
    color: "#176fdc",

    fontSize: "1.8rem",
    fontWeight: 950,
  },

  userInfo: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  userName: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.2,

    textOverflow:
      "ellipsis",
    whiteSpace: "nowrap",

    transition:
      "color 160ms ease",
  },

  userNameHovered: {
    color: "#176fdc",
  },

  userSecondary: {
    display: "flex",
    alignItems: "center",

    gap: "4px",

    overflow: "hidden",

    color: "#6b829c",

    fontSize: "0.78rem",
    fontWeight: 650,

    textOverflow:
      "ellipsis",
    whiteSpace: "nowrap",
  },

  dateCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "7px",
    minWidth: 0,

    color: "#2478de",

    fontSize: "2rem",
    fontWeight: 800,
    textAlign: "center",
  },

  profileCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    minWidth: 0,
    textAlign: "center",
  },

  profileChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",

    minHeight: "31px",
    maxWidth: "100%",

    padding: "0 10px",

    overflow: "hidden",

    color: "#416587",
    background: "#f3f8fc",

    border:
      "1px solid #d5e2ed",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 800,

    textOverflow:
      "ellipsis",
    whiteSpace: "nowrap",
  },

  activityCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",
    flexDirection: "column",

    gap: "3px",
    minWidth: 0,

    textAlign: "center",
  },

  activityMain: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "5px",

    color: "#123b67",

    fontSize: "2rem",
    lineHeight: 1.2,
  },

  activitySecondary: {
    color: "#6a829c",

    fontSize: "1.6rem",
    fontWeight: 650,
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "7px",
    minWidth: 0,

    textAlign: "center",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",

    minWidth: "112px",
    minHeight: "32px",

    padding: "0 11px",

    border:
      "1px solid transparent",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: 1,

    whiteSpace: "nowrap",
  },

  statusActive: {
    color: "#078e4a",
    background: "#eafaf2",
    borderColor: "#b9e5ce",
  },

  statusReview: {
    color: "#b36d00",
    background: "#fff7e7",
    borderColor: "#efd18f",
  },

  statusWarned: {
    color: "#bf6711",
    background: "#fff2e6",
    borderColor: "#f2c49c",
  },

  statusBlocked: {
    color: "#d23f3f",
    background: "#fff0f0",
    borderColor: "#f5bebe",
  },

  chevron: {
    flexShrink: 0,

    color: "#82a1c0",

    transition:
      "color 160ms ease, transform 160ms ease",
  },

  chevronHovered: {
    color: "#2176e5",
    transform:
      "translateX(3px)",
  },
};

export default styles;