const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    width: "100%",

    gap: "12px",

    /*
     * El padre ya tiene la franja de acciones.
     * El componente no debe crear otra barra blanca.
     */
    padding: 0,

    border: "none",
    background: "transparent",

    position: "static",

    boxSizing: "border-box",
  },

  cancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "132px",
    height: "44px",

    gap: "8px",
    padding: "0 18px",

    border: "1px solid rgba(73, 108, 149, 0.25)",
    borderRadius: "999px",

    background: "rgba(255, 255, 255, 0.84)",

    color: "#27425f",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 800,

    boxShadow: `
      0 6px 14px rgba(42, 79, 121, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,

    cursor: "pointer",

    boxSizing: "border-box",

    transition: `
      transform 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      background 180ms ease
    `,
  },

  submitButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "190px",
    height: "44px",

    gap: "8px",
    padding: "0 19px",

    border: "1px solid rgba(225, 132, 0, 0.36)",
    borderRadius: "999px",

    background: `
      linear-gradient(
        135deg,
        #f5a623 0%,
        #e48600 100%
      )
    `,

    color: "#ffffff",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 850,

    boxShadow: `
      0 8px 18px rgba(228, 134, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.26)
    `,

    boxSizing: "border-box",

    transition: `
      transform 180ms ease,
      box-shadow 180ms ease,
      opacity 180ms ease
    `,
  },

  submitButtonDisabled: {
    background: "#dce4ed",

    borderColor: "#dce4ed",

    color: "#8a9aab",

    boxShadow: "none",

    cursor: "not-allowed",
  },
};

export default styles;