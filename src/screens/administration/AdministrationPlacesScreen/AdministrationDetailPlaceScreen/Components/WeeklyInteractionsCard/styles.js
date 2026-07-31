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
      "linear-gradient(135deg, rgba(242, 248, 255, 0.98), rgba(255, 255, 255, 0.98) 56%, rgba(240, 252, 246, 0.98))",

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

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    border:
      "1px solid #bfd9f8",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(33, 118, 229, 0.12)",
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

    fontSize: "2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  statsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",

    width: "100%",
    minWidth: 0,

    gap: "12px",

    padding: "15px 16px 12px",
    boxSizing: "border-box",
  },

  statBox: {
    display: "flex",
    flexDirection: "column",

    minWidth: 0,
    minHeight: "168px",

    gap: "13px",

    padding: "13px",
    boxSizing: "border-box",

    overflow: "hidden",

    border:
      "1px solid",

    borderRadius: "14px",

    boxShadow:
      "0 7px 18px rgba(31, 73, 116, 0.06)",
  },

  likesBox: {
    background:
      "linear-gradient(145deg, #fff1f3, #fffafa)",

    borderColor:
      "#f3c4cb",
  },

  reviewsBox: {
    background:
      "linear-gradient(145deg, #f5efff, #fcfaff)",

    borderColor:
      "#dac9f6",
  },

  dwellBox: {
    background:
      "linear-gradient(145deg, #edf6ff, #f9fcff)",

    borderColor:
      "#c6def5",
  },

  statTopRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "10px",
  },

  likesIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#d9465f",
    background: "#ffffff",

    border:
      "1px solid #efc0c8",

    borderRadius: "12px",

    boxShadow:
      "0 5px 13px rgba(190, 58, 81, 0.09)",
  },

  reviewsIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#ffffff",

    border:
      "1px solid #d7c4f5",

    borderRadius: "12px",

    boxShadow:
      "0 5px 13px rgba(116, 65, 214, 0.09)",
  },

  dwellIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#ffffff",

    border:
      "1px solid #c2dcf8",

    borderRadius: "12px",

    boxShadow:
      "0 5px 13px rgba(33, 118, 229, 0.09)",
  },

  likesBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "29px",

    padding: "0 10px",

    color: "#c63851",
    background: "#ffffff",

    border:
      "1px solid #efc1c8",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
  },

  reviewsBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "29px",

    padding: "0 10px",

    color: "#7441d6",
    background: "#ffffff",

    border:
      "1px solid #d7c4f5",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
  },

  dwellBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "29px",

    padding: "0 10px",

    color: "#176fdc",
    background: "#ffffff",

    border:
      "1px solid #c2dcf8",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
  },

  statContent: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",
    minWidth: 0,
  },

  statValue: {
    color: "#092f61",

    fontSize: "2.6rem",
    fontWeight: 950,
    lineHeight: 1.05,

    overflowWrap: "anywhere",
  },

  dwellValue: {
    fontSize: "2.2rem",
  },

  statDescription: {
    color: "#647e98",

    fontSize: "1.4rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  footerNote: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    margin: "0 16px 15px",
    padding: "9px 11px",

    color: "#4f735f",

    background:
      "linear-gradient(135deg, #edf9f3, #f8fcfa)",

    border:
      "1px solid #cee6d9",

    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 700,
  },
};

export default styles;