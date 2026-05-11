const styles = {
  googleButton: {
    width: "100%",
    height: 56,
    border: "1px solid #DDD5C8",
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    color: "#1D1D1D",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    boxShadow: "0 12px 26px rgba(20, 20, 20, 0.07)",
  },

  googleButtonDisabled: {
    opacity: 0.65,
    cursor: "not-allowed",
  },

  googleIcon: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "1px solid #E6DED2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 900,
    color: "#222222",
  },
};

export default styles;