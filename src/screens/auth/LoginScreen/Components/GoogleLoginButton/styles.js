const styles = {
  googleButton: {
    width: "100%",
    minHeight: "72px",

    display: "flex",
    alignItems: "center",

    gap: "12px",

    padding: "9px 10px",
    boxSizing: "border-box",

    color: "#123760",

    background:
      "linear-gradient(135deg, #ffffff, #f5faff)",

    border:
      "1px solid #bdd8f5",

    borderRadius: "15px",

    boxShadow:
      "0 9px 22px rgba(31, 73, 116, 0.1)",

    fontFamily: "inherit",
    textAlign: "left",

    cursor: "pointer",

    transition:
      "transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
  },

  googleButtonDisabled: {
    opacity: 0.62,
    cursor: "not-allowed",
    boxShadow: "none",
  },

  googleIcon: {
    width: "52px",
    height: "52px",
    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "11px",
    boxSizing: "border-box",

    color: "#2176e5",
    background: "#ffffff",

    border:
      "1px solid #c8def4",

    borderRadius: "12px",

    boxShadow:
      "0 5px 12px rgba(33, 118, 229, 0.08)",
  },

  googleIconImage: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "contain",
  },

  buttonText: {
    display: "flex",
    flexDirection: "column",

    flex: 1,
    minWidth: 0,

    gap: "3px",
  },

  buttonTitle: {
    color: "#0b315f",

    fontSize: "2rem",
    fontWeight: 950,
  },

  buttonSubtitle: {
    overflow: "hidden",

    color: "#6a829b",

    fontSize: "1.2rem",
    fontWeight: 650,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  arrowBox: {
    width: "38px",
    height: "38px",
    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#ffffff",

    background:
      "linear-gradient(145deg, #2176e5, #1764c7)",

    border:
      "1px solid #1764c7",

    borderRadius: "10px",

    boxShadow:
      "0 6px 14px rgba(33, 118, 229, 0.18)",
  },
};

export default styles;