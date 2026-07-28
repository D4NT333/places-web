const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap",

    gap: "9px",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "105px",
    minHeight: "40px",

    gap: "7px",
    padding: "0 14px",

    borderRadius: "11px",

    fontSize: "1rem",
    fontWeight: 800,

    cursor: "pointer",

    transition: `
      transform 180ms ease,
      background-color 180ms ease,
      color 180ms ease,
      box-shadow 180ms ease
    `,
  },

  acceptButton: {
    border: "1px solid rgba(18, 168, 92, 0.34)",
    background: "rgba(230, 250, 238, 0.92)",
    color: "#078946",
  },

  acceptButtonHover: {
    background: "#0a9b55",
    color: "#ffffff",

    boxShadow: `
      0 8px 17px rgba(18, 168, 92, 0.22)
    `,

    transform: "translateY(-1px)",
  },

  secondaryButton: {
    border: "1px solid rgba(245, 158, 11, 0.36)",
    background: "rgba(255, 248, 229, 0.94)",
    color: "#d77800",
  },

  secondaryButtonHover: {
    background: "#e58a00",
    color: "#ffffff",

    boxShadow: `
      0 8px 17px rgba(245, 158, 11, 0.21)
    `,

    transform: "translateY(-1px)",
  },

  rejectButton: {
    border: "1px solid rgba(239, 68, 68, 0.34)",
    background: "rgba(255, 238, 238, 0.93)",
    color: "#d63838",
  },

  rejectButtonHover: {
    background: "#dd3f3f",
    color: "#ffffff",

    boxShadow: `
      0 8px 17px rgba(239, 68, 68, 0.2)
    `,

    transform: "translateY(-1px)",
  },
};

export default styles;