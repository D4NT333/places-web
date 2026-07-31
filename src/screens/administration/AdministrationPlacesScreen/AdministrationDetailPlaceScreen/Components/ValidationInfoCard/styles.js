const styles = {
  card: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    overflow: "hidden",

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

  validatedPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "33px",
    padding: "0 12px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  grid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "12px",

    padding: "15px 17px 12px",
  },

  fieldCard: {
    display: "grid",

    gap: "8px",
    minWidth: 0,

    padding: "12px",

    background:
      "rgba(255, 255, 255, 0.84)",

    border:
      "1px solid #d5e4f2",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  fieldCardWide: {
    display: "grid",

    gridColumn: "1 / -1",

    gap: "8px",
    minWidth: 0,

    padding: "12px",

    background:
      "rgba(255, 255, 255, 0.84)",

    border:
      "1px solid #d5e4f2",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  fieldHeading: {
    display: "flex",
    alignItems: "center",

    gap: "8px",
    minWidth: 0,
  },

  label: {
    color: "#123760",

    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: 1.25,
  },

  iconBoxBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#eef6ff",

    border:
      "1px solid #c6defa",

    borderRadius: "11px",
  },

  iconBoxGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #bee5cf",

    borderRadius: "11px",
  },

  iconBoxViolet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "11px",
  },

  inputLike: {
    display: "flex",
    alignItems: "center",

    minHeight: "46px",

    padding: "0 13px",
    boxSizing: "border-box",

    color: "#153961",

    background:
      "linear-gradient(135deg, #eef6ff, #f8fbff)",

    border:
      "1px solid #cddff0",

    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 750,

    overflowWrap: "anywhere",
  },

  inputLikeGreen: {
    display: "flex",
    alignItems: "center",

    minHeight: "46px",

    padding: "0 13px",
    boxSizing: "border-box",

    color: "#078e4a",

    background:
      "linear-gradient(135deg, #eafaf2, #f8fcfa)",

    border:
      "1px solid #c3e6d2",

    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 800,

    overflowWrap: "anywhere",
  },

  inputLikeViolet: {
    display: "flex",
    alignItems: "center",

    minHeight: "46px",

    padding: "0 13px",
    boxSizing: "border-box",

    color: "#6440b6",

    background:
      "linear-gradient(135deg, #f5efff, #fbf9ff)",

    border:
      "1px solid #d9c8f7",

    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 800,

    overflowWrap: "anywhere",
  },

  footerNote: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    margin: "0 17px 16px",
    padding: "10px 12px",

    color: "#4f735f",

    background:
      "linear-gradient(135deg, #edf9f3, #f8fcfa)",

    border:
      "1px solid #cee6d9",

    borderRadius: "10px",

    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },
};

export default styles;