const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(2, 8, 23, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 24,
  },

  modal: {
    width: "100%",
    maxWidth: 620,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    boxShadow: "0 24px 60px rgba(15, 23, 42, 0.25)",
    border: "1px solid #E2E8F0",
    position: "relative",
    overflow: "hidden",
  },

  header: {
    padding: "24px 28px 18px",
    borderBottom: "1px solid #E2E8F0",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
  },

  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 900,
    color: "#071330",
  },

  subtitle: {
    margin: "8px 0 0",
    fontSize: 14,
    fontWeight: 600,
    color: "#64748B",
    lineHeight: 1.5,
  },

  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    border: "1px solid #CBD5E1",
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    fontSize: 24,
    fontWeight: 800,
    cursor: "pointer",
    lineHeight: "30px",
  },

  content: {
    padding: 28,
  },

  label: {
    margin: "0 0 10px",
    fontSize: 14,
    fontWeight: 900,
    color: "#0F172A",
  },

  chipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 22,
  },

  chip: {
    border: "1px solid #CBD5E1",
    backgroundColor: "#F8FAFC",
    color: "#334155",
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 900,
    cursor: "pointer",
  },

  chipSelected: {
    borderColor: "#DC2626",
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },

  textarea: {
    width: "100%",
    minHeight: 130,
    resize: "vertical",
    borderRadius: 18,
    border: "1px solid #CBD5E1",
    backgroundColor: "#F8FAFC",
    padding: 16,
    fontSize: 14,
    fontWeight: 600,
    color: "#0F172A",
    outline: "none",
    boxSizing: "border-box",
    lineHeight: 1.5,
  },

  counter: {
    marginTop: 8,
    textAlign: "right",
    fontSize: 12,
    fontWeight: 800,
    color: "#64748B",
  },

  actions: {
    marginTop: 24,
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
  },

  cancelButton: {
    border: "1px solid #CBD5E1",
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    borderRadius: 14,
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
  },

  submitButton: {
    border: "none",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    borderRadius: 14,
    padding: "12px 18px",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(220, 38, 38, 0.22)",
  },

  submitButtonDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    boxShadow: "none",
  },

  confirmOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  confirmBox: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: 20,
    padding: 24,
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
  },

  confirmTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 900,
    color: "#071330",
  },

  confirmText: {
    margin: "10px 0 0",
    fontSize: 14,
    fontWeight: 600,
    color: "#64748B",
    lineHeight: 1.5,
  },

  confirmActions: {
    marginTop: 22,
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
  },

  keepButton: {
    border: "1px solid #CBD5E1",
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    borderRadius: 14,
    padding: "11px 14px",
    fontSize: 13,
    fontWeight: 900,
    cursor: "pointer",
  },

  confirmCancelButton: {
    border: "none",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    borderRadius: 14,
    padding: "11px 14px",
    fontSize: 13,
    fontWeight: 900,
    cursor: "pointer",
  },
};

export default styles;