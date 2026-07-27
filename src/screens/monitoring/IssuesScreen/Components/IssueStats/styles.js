const styles = {
  container: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",
    gap: "12px",
    marginBottom: "14px",
  },

  card: {
    minHeight: "112px",
    padding: "18px 20px",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe3e8",
    borderRadius: "14px",
    boxSizing: "border-box",
  },

  title: {
    margin: "0 0 10px",
    color: "#667085",
    fontSize: "12px",
    fontWeight: "600",
  },

  value: {
    display: "block",
    marginBottom: "7px",
    color: "#101828",
    fontSize: "30px",
    lineHeight: "1",
  },

  description: {
    margin: 0,
    fontSize: "11px",
    fontWeight: "700",
  },

  descriptionStatus: {
    default: {
      color: "#667085",
    },

    warning: {
      color: "#c56a00",
    },

    critical: {
      color: "#c62828",
    },

    information: {
      color: "#175cd3",
    },
  },
};

export default styles;