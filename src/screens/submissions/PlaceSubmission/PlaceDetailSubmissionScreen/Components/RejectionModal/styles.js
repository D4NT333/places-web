const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 24,
  },

  modal: {
    width: "min(900px, 100%)",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    boxShadow: "0 24px 80px rgba(15, 23, 42, 0.25)",
    overflow: "hidden",
    position: "relative",
  },

  header: {
    minHeight: 72,
    padding: "0 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #e5e7eb",
  },

  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#0f172a",
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    color: "#334155",
    fontSize: 26,
    lineHeight: "34px",
    cursor: "pointer",
  },

  content: {
    padding: 28,
  },

  label: {
    margin: "0 0 14px",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 700,
    color: "#475569",
  },

  textarea: {
    width: "100%",
    minHeight: 130,
    resize: "vertical",
    border: "1px solid #cbd5e1",
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: "#0f172a",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  counter: {
    marginTop: 8,
    fontSize: 13,
    color: "#64748b",
    textAlign: "right",
  },

  chipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 24,
  },

  chip: {
    minHeight: 42,
    padding: "0 20px",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#475569",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
  },

  chipSelected: {
    backgroundColor: "#0f172a",
    borderColor: "#0f172a",
    color: "#ffffff",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 14,
    marginTop: 72,
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
    minWidth: 160,
    height: 46,
    borderRadius: 999,
    border: "1px solid #b91c1c",
    backgroundColor: "#b91c1c",
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

  confirmOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    zIndex: 10,
  },

  confirmBox: {
    width: "min(420px, 100%)",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 24,
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.28)",
  },

  confirmTitle: {
    margin: "0 0 10px",
    fontSize: 20,
    fontWeight: 800,
    color: "#0f172a",
  },

  confirmText: {
    margin: "0 0 24px",
    fontSize: 15,
    lineHeight: 1.5,
    color: "#475569",
  },

  confirmActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
  },

  keepButton: {
    height: 42,
    padding: "0 18px",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#334155",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
  },

  confirmCancelButton: {
    height: 42,
    padding: "0 18px",
    borderRadius: 999,
    border: "1px solid #b91c1c",
    backgroundColor: "#b91c1c",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
  },
};

export default styles;