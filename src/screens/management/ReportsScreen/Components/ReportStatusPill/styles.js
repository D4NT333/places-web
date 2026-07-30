const styles = {
  pill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minWidth: "115px",
    minHeight: "35px",
    padding: "0 11px",
    border: "1px solid transparent",
    borderRadius: "999px",
    fontSize: "2rem",
    fontWeight: 900,
    whiteSpace: "nowrap",
  },

  statusVariants: {
    pending: {
      color: "#a96800",
      background: "#fff7e6",
      borderColor: "#efca7f",
    },

    resolved: {
      color: "#078e4a",
      background: "#eafaf2",
      borderColor: "#bce8d0",
    },

    dismissed: {
      color: "#d23f3f",
      background: "#fff0f0",
      borderColor: "#ffc2c2",
    },
  },
};

export default styles;