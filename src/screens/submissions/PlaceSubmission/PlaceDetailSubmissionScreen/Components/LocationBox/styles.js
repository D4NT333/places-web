const styles = {
  locationBox: {
    width: "100%",
    height: "330px",

    overflow: "hidden",

    border: "1px solid rgba(33, 66, 105, 0.18)",
    borderRadius: "12px",

    background: "#eef4fa",

    boxShadow: `
      inset 0 1px 0 rgba(255, 255, 255, 0.7)
    `,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",

    color: "#102650",
    textAlign: "center",
  },

  title: {
    margin: 0,

    fontSize: "0.9rem",
    fontWeight: 800,
  },

  text: {
    marginTop: "0.4rem",

    color: "#71869e",

    fontSize: "0.76rem",
    fontWeight: 600,
  },
};

export default styles;