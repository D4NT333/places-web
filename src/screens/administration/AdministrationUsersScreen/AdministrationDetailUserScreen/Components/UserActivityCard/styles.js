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

    marginBottom: "20px",
  },

  heading: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",

    gap: "14px",
  },

  headerIcon: {
    width: "54px",
    height: "54px",

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

    fontSize: "1.48rem",

    fontWeight: 950,

    lineHeight: 1.12,

    letterSpacing: "-0.03em",
  },

  subtitle: {
    maxWidth: "520px",

    margin: "6px 0 0",

    color: "#7186a0",

    fontSize: "0.84rem",

    fontWeight: 700,

    lineHeight: 1.4,
  },

  totalBox: {
    minWidth: "92px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    gap: "3px",

    padding: "10px 14px",

    color: "#1764c7",

    background:
      "linear-gradient(145deg, #edf6ff, #e3f1ff)",

    border:
      "1px solid #c1dcf7",

    borderRadius: "16px",
  },

  totalLabel: {
    color: "#5b7694",

    fontSize: "0.68rem",

    fontWeight: 900,

    textTransform: "uppercase",

    letterSpacing: "0.065em",
  },

  totalValue: {
    color: "#082b59",

    fontSize: "1.45rem",

    fontWeight: 950,

    lineHeight: 1,
  },

  activityGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",

    gap: "13px",
  },

  activityItem: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",

    gap: "12px",

    padding: "15px",

    boxSizing: "border-box",

    border:
      "1px solid transparent",

    borderRadius: "18px",

    transition:
      "transform 150ms ease, box-shadow 150ms ease",
  },

  activityBlue: {
    background:
      "linear-gradient(145deg, #edf6ff, #e4f2ff)",

    borderColor: "#c3ddf7",
  },

  activityGreen: {
    background:
      "linear-gradient(145deg, #eafaf2, #e1f7ec)",

    borderColor: "#b9e5cf",
  },

  activityPurple: {
    background:
      "linear-gradient(145deg, #f5efff, #eee5ff)",

    borderColor: "#d9c9f5",
  },

  activityOrange: {
    background:
      "linear-gradient(145deg, #fff7ea, #fff0dc)",

    borderColor: "#efd09b",
  },

  itemIcon: {
    width: "52px",
    height: "52px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    borderRadius: "16px",
  },

  iconBlue: {
    color: "#2176e5",

    background:
      "rgba(211, 232, 255, 0.94)",
  },

  iconGreen: {
    color: "#0fa16a",

    background:
      "rgba(208, 243, 227, 0.95)",
  },

  iconPurple: {
    color: "#9256dd",

    background:
      "rgba(231, 218, 255, 0.95)",
  },

  iconOrange: {
    color: "#d9790b",

    background:
      "rgba(255, 230, 194, 0.95)",
  },

  itemContent: {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",

    gap: "3px",
  },

  itemValue: {
    color: "#082b59",

    fontSize: "1.45rem",

    fontWeight: 950,

    lineHeight: 1,
  },

  itemLabel: {
    color: "#173e68",

    fontSize: "0.84rem",

    fontWeight: 900,
  },

  itemDescription: {
    overflow: "hidden",

    color: "#70859d",

    fontSize: "0.7rem",

    fontWeight: 700,

    lineHeight: 1.35,

    textOverflow: "ellipsis",
  },
};

export default styles;