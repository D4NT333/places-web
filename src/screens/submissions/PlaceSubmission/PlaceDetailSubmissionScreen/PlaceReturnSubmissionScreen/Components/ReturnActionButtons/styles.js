const styles = {
  container: {
    padding: "24px 32px",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "flex-end",
    gap: 14,
    backgroundColor: "#ffffff",
    position: "sticky",
    bottom: 0,
  },

  cancelButton: {
    minWidth: 140,
    height: 46,
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#334155",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
  },

  submitButton: {
    minWidth: 180,
    height: 46,
    borderRadius: 999,
    border: "1px solid #0f172a",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
  },

  submitButtonDisabled: {
    backgroundColor: "#e5e7eb",
    borderColor: "#e5e7eb",
    color: "#94a3b8",
    cursor: "not-allowed",
  },
};

export default styles;