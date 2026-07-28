const styles = {
  container: {
    position: "relative",

    width: "100%",
    height: "420px",

    overflow: "hidden",

    border: "1px solid rgba(33, 66, 105, 0.18)",
    borderRadius: "12px",

    background: "#eef4fa",

    boxShadow: `
      inset 0 1px 0 rgba(255, 255, 255, 0.7)
    `,
  },

  image: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  arrowButton: {
    position: "absolute",
    top: "50%",

    display: "grid",
    placeItems: "center",

    width: "54px",
    height: "54px",

    fontSize: "2rem",
lineHeight: 1,
padding: 0,

    transform: "translateY(-50%)",

    border: "1px solid rgba(255, 255, 255, 0.65)",
    borderRadius: "50%",

    background: "rgba(23, 24, 24, 0.48)",

    color: "#fbf9f9",
    fontWeight: 900,

    boxShadow: `
      0 5px 14px rgba(15, 15, 15, 0.18)
    `,

    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",

    cursor: "pointer",

    zIndex: 2,
  },

  leftButton: {
    left: "11px",
  },

  rightButton: {
    right: "11px",
  },

  counter: {
    position: "absolute",

    right: "12px",
    bottom: "12px",

    padding: "5px 9px",

    borderRadius: "999px",

    background: "rgba(7, 7, 7, 0.84)",

    color: "#ffffff",
    fontSize: "1.3rem",
    fontWeight: 800,

    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  },

  emptyText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",

    color: "#71869e",
    fontWeight: 700,
  },
};

export default styles;