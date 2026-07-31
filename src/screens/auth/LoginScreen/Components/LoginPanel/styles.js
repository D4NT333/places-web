const styles = {
  loginBox: {
    width: "100%",
    maxWidth: "510px",

    margin: "auto 0",

    padding: "66px 0 34px",
    boxSizing: "border-box",
  },

  accessBadge: {
    width: "fit-content",
    minHeight: "32px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    marginBottom: "16px",
    padding: "0 11px",

    color: "#176fdc",
    background: "#eef6ff",

    border:
      "1px solid #bdd8f5",

    borderRadius: "999px",

    fontSize: "1.8rem",
    fontWeight: 900,

    textTransform: "uppercase",
    letterSpacing: "0.045em",
  },

  title: {
    maxWidth: "500px",

    margin: 0,

    color: "#092f61",

    fontSize: "3.4rem",
    fontWeight: 950,
    lineHeight: 1.03,
    letterSpacing: "-0.055em",
  },

  description: {
    maxWidth: "460px",

    margin: "20px 0 18px",

    color: "#607a98",

    fontSize: "1.6rem",
    fontWeight: 600,
    lineHeight: 1.65,
  },

  featuresRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "8px",

    marginBottom: "24px",
  },

  featurePill: {
    minHeight: "29px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    padding: "0 9px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "1.6rem",
    fontWeight: 850,
  },

  securityNote: {
    display: "flex",
    alignItems: "center",

    gap: "8px",

    marginTop: "13px",
    padding: "9px 11px",

    color: "#607a98",

    background:
      "linear-gradient(135deg, #f3f8fd, #ffffff)",

    border:
      "1px solid #d4e3f0",

    borderRadius: "10px",

    fontSize: "1.4rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  warningBox: {
    width: "100%",

    display: "flex",
    alignItems: "flex-start",

    gap: "11px",

    margin: "14px 0 0",
    padding: "12px 13px",
    boxSizing: "border-box",

    color: "#a82d36",

    background:
      "linear-gradient(135deg, #fff0f0, #fff8f8)",

    border:
      "1px solid #f0b9bd",

    borderRadius: "12px",

    boxShadow:
      "0 7px 18px rgba(192, 53, 63, 0.07)",
  },

  warningIcon: {
    width: "42px",
    height: "42px",
    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#d23f3f",
    background: "#ffffff",

    border:
      "1px solid #efbfc2",

    borderRadius: "10px",
  },

  warningContent: {
    flex: 1,
    minWidth: 0,
  },

  warningTitle: {
    margin: 0,

    color: "#a82d36",

    fontSize: "0.82rem",
    fontWeight: 950,
    lineHeight: 1.35,
  },

  warningText: {
    margin: "4px 0 0",

    color: "#b1454d",

    fontSize: "0.73rem",
    fontWeight: 650,
    lineHeight: 1.5,
  },
};

export default styles;