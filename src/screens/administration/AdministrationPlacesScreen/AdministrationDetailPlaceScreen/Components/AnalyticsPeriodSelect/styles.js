const styles = {
  container: {
    position: "relative",

    display: "flex",
    alignItems: "center",

    width: "570px",
    maxWidth: "100%",
    minHeight: "58px",

    overflow: "hidden",

    background:
      "linear-gradient(135deg, #eef6ff, #ffffff)",

    border:
      "1px solid #bfd8f2",

    borderRadius: "13px",

    boxShadow:
      "0 6px 16px rgba(31, 73, 116, 0.08)",

    transition:
      "border-color 160ms ease, box-shadow 160ms ease, opacity 160ms ease",
  },

  containerDisabled: {
    opacity: 0.62,
  },

  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    marginLeft: "4px",

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #e5f1ff, #f5faff)",

    border:
      "1px solid #c3dcf8",

    borderRadius: "10px",
  },

  selectContent: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    flex: 1,
    minWidth: 0,

    gap: "2px",

    padding:
      "7px 38px 7px 11px",
  },

  label: {
    color: "#66809a",

    fontSize: "2rem",
    fontWeight: 850,
    lineHeight: 1.1,

    textTransform:
      "uppercase",

    letterSpacing:
      "0.035em",

    pointerEvents: "none",
  },

  select: {
    width: "100%",
    minWidth: 0,
    height: "28px",

    padding: 0,

    color: "#123760",
    backgroundColor:
      "transparent",

    border: 0,
    outline: "none",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 900,

    cursor: "pointer",

    appearance: "none",
    WebkitAppearance:
      "none",
    MozAppearance:
      "none",

    boxSizing: "border-box",
  },

  chevronBox: {
    position: "absolute",
    top: "50%",
    right: "11px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "32px",
    height: "32px",

    color: "#2176e5",

    background: "#ffffff",

    border:
      "1px solid #c8def4",

    borderRadius: "9px",

    transform:
      "translateY(-50%)",

    pointerEvents: "none",
  },
};

export default styles;