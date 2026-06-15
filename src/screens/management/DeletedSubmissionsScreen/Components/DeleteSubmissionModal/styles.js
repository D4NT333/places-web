const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "rgba(17, 24, 39, 0.5)",
  },

  modal: {
    width: "100%",
    maxWidth: "440px",
    padding: "1.6rem",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    boxShadow:
      "0 24px 60px rgba(17, 24, 39, 0.24)",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    margin: "0 auto 1rem",
    borderRadius: "50%",
    backgroundColor: "#fee2e2",
    color: "#dc2626",
    fontSize: "1.25rem",
    fontWeight: 800,
  },

  title: {
    margin: 0,
    color: "#1f2937",
    fontSize: "1.2rem",
  },

  description: {
    margin: "0.8rem 0 0",
    color: "#4b5563",
    fontSize: "0.93rem",
    lineHeight: 1.55,
  },

  warning: {
    margin: "0.45rem 0 0",
    color: "#dc2626",
    fontSize: "0.88rem",
    fontWeight: 600,
  },

  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem",
    marginTop: "1.4rem",
  },

  cancelButton: {
    padding: "0.7rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#374151",
    fontWeight: 600,
    cursor: "pointer",
  },

  deleteButton: {
    padding: "0.7rem 1rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default styles;