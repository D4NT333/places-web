const styles = {
  brandRow: {
    display: "flex",
    alignItems: "center",

    gap: "14px",
  },

  logoWrapper: {
    position: "relative",

    flexShrink: 0,
  },

  logoCircle: {
    width: "62px",
    height: "62px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#ffffff",

    background:
      "linear-gradient(145deg, #2176e5, #1764c7)",

    border:
      "3px solid #ffffff",

    borderRadius: "18px",

    boxShadow:
      "0 0 0 1px #bdd8f5, 0 9px 20px rgba(33, 118, 229, 0.22)",
  },

  logoStatus: {
    position: "absolute",
    right: "-6px",
    bottom: "-5px",

    width: "28px",
    height: "28px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#078e4a",
    background: "#ffffff",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    boxShadow:
      "0 5px 12px rgba(7, 142, 74, 0.16)",
  },

  brandText: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",
    minWidth: 0,
  },

  brandName: {
    margin: 0,

    color: "#092f61",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1,
    letterSpacing: "-0.035em",
  },

  subtitleRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "7px",
  },

  brandSubtitle: {
    color: "#647e9a",

    fontSize: "1.6rem",
    fontWeight: 750,
  },

  securePill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "24px",

    padding: "0 8px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "1.2rem",
    fontWeight: 900,

    textTransform: "uppercase",
    letterSpacing: "0.025em",
  },
};

export default styles;