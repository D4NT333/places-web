const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "4px",
    maxWidth: "100%",
    padding: "6px",
    background: "rgba(255, 255, 255, 0.92)",
    border: "1px solid rgba(210, 222, 239, 0.9)",
    borderRadius: "13px",
    boxShadow: "0 8px 22px rgba(45, 91, 144, 0.08)",
    backdropFilter: "blur(12px)",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "36px",
    padding: "0 13px",
    borderRadius: "10px",
    fontFamily: "inherit",
    fontSize: "0.78rem",
    fontWeight: 750,
    cursor: "pointer",
    transition:
      "transform 160ms ease, background 160ms ease, box-shadow 160ms ease",
  },

  activeButton: {
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2a8af7 0%, #1973ec 100%)",
    border: "1px solid #1973ec",
    boxShadow: "0 6px 14px rgba(28, 116, 236, 0.24)",
  },

  inactiveButton: {
    color: "#10284f",
    background: "#ffffff",
    border: "1px solid #e4ebf4",
    boxShadow: "none",
  },
};

export default styles;