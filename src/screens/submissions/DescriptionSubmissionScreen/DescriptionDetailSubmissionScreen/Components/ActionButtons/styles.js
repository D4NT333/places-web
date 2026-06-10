const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    flexWrap: "wrap",
  },

  acceptButton: {
    border: "none",
    borderRadius: 12,
    padding: "10px 18px",
    backgroundColor: "#16A34A",
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(22, 163, 74, 0.22)",
  },
  rejectButton: {
    border: "none",
    borderRadius: 12,
    padding: "10px 18px",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(220, 38, 38, 0.18)",
  },
  disabledButton: {
  opacity: 0.6,
  cursor: "not-allowed",
},
};

export default styles;