const styles = {
  container: {
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
    fontSize: "11px",
    fontWeight: "600",
  },

  value: {
    display: "block",
    marginBottom: "7px",
    color: "#101828",
    fontSize: "28px",
    lineHeight: "1",
  },

  description: {
    margin: 0,
    fontSize: "10px",
    fontWeight: "700",
  },

  descriptionStatus: {
    default: {
      color: "#667085",
    },

    positive: {
      color: "#159447",
    },

    warning: {
      color: "#c56a00",
    },

    critical: {
      color: "#c62828",
    },
  },
};

export default styles;