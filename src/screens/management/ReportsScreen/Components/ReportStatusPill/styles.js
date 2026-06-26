const styles = {
  pill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 92,
    height: 28,
    padding: "0 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 900,
    border: "1.5px solid transparent",
    whiteSpace: "nowrap",
  },

  statusVariants: {
    pending: {
      background: "#fff7ed",
      color: "#c2410c",
      borderColor: "#fed7aa",
    },

    resolved: {
      background: "#ecfdf5",
      color: "#047857",
      borderColor: "#a7f3d0",
    },

    dismissed: {
      background: "#f3f4f6",
      color: "#4b5563",
      borderColor: "#d1d5db",
    },
  },
};

export default styles;