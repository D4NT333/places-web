const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    flexWrap: "wrap",
  },

  acceptButton: {
    minHeight: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "1px solid #079447",
    borderRadius: 999,
    padding: "10px 18px",
    backgroundColor: "#0AA850",
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(10, 168, 80, 0.20)",
  },

  rejectButton: {
    minHeight: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "1px solid #E53030",
    borderRadius: 999,
    padding: "10px 18px",
    backgroundColor: "#EF3939",
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(239, 57, 57, 0.18)",
  },

  disabledButton: {
    opacity: 0.62,
    cursor: "not-allowed",
    boxShadow: "none",
  },
};

export default styles;