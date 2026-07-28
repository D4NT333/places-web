const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

    width: "100%",

    gap: "10px",

    boxSizing: "border-box",
  },

  label: {
    display: "block",

    color: "#102650",

    fontSize: "2rem",
    fontWeight: 800,

    lineHeight: 1.25,
  },

  textarea: {
    width: "100%",
    minHeight: "255px",

    padding: "16px 18px",

    border: "1px solid rgba(33, 118, 229, 0.2)",
    borderRadius: "13px",

    background: `
      linear-gradient(
        145deg,
        rgba(249, 252, 255, 0.98),
        rgba(235, 244, 255, 0.9)
      )
    `,

    color: "#102650",

    fontFamily: "inherit",
    fontSize: "1.5rem",
    fontWeight: 550,

    lineHeight: 1.55,

    outline: "none",
    resize: "vertical",

    boxShadow: `
      inset 0 1px 0 rgba(255, 255, 255, 0.95),
      0 5px 14px rgba(43, 88, 139, 0.05)
    `,

    boxSizing: "border-box",

    transition: `
      border-color 180ms ease,
      box-shadow 180ms ease,
      background 180ms ease
    `,
  },

  counter: {
    alignSelf: "flex-end",

    color: "#657d98",

    fontSize: "1.4rem",
    fontWeight: 650,
  },
};

export default styles;