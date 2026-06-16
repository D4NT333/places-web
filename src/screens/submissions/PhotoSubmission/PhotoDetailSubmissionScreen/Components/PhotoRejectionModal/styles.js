const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "24px",

    backgroundColor:
      "rgba(15, 23, 42, 0.58)",
  },

  modal: {
    width: "min(680px, 100%)",

    overflow: "hidden",

    backgroundColor: "#FFFFFF",

    border: "1px solid #E2E8F0",
    borderRadius: "16px",

    boxShadow:
      "0 24px 70px rgba(15, 23, 42, 0.28)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "18px 22px",
  },

  title: {
    margin: 0,

    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#172033",
  },

  closeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "34px",
    height: "34px",

    padding: 0,

    backgroundColor: "#FFFFFF",

    border: "1px solid #D7DDE7",
    borderRadius: "50%",

    fontSize: "1.4rem",
    lineHeight: 1,
    color: "#52606D",

    cursor: "pointer",
  },

  divider: {
    height: "1px",
    backgroundColor: "#E5E7EB",
  },

  content: {
    padding: "20px 22px 24px",
  },

  label: {
    display: "block",

    marginBottom: "10px",

    textAlign: "center",

    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#475569",
  },

  textarea: {
    width: "100%",
    minHeight: "118px",

    padding: "13px 14px",

    resize: "vertical",

    boxSizing: "border-box",

    backgroundColor: "#FFFFFF",

    border: "1px solid #CBD5E1",
    borderRadius: "10px",
    outline: "none",

    fontFamily: "inherit",
    fontSize: "0.9rem",
    lineHeight: 1.5,
    color: "#1F2937",
  },

  counterRow: {
    display: "flex",
    justifyContent: "flex-end",

    marginTop: "6px",
  },

  counter: {
    fontSize: "0.72rem",
  },

  reasonLabel: {
    margin: "16px 0 10px",

    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#475569",
  },

  chips: {
    display: "flex",
    flexWrap: "wrap",

    gap: "10px",
  },

  chip: {
    padding: "8px 15px",

    backgroundColor: "#FFFFFF",

    border: "1px solid #CBD5E1",
    borderRadius: "20px",

    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#475569",

    cursor: "pointer",
  },

  chipSelected: {
    backgroundColor: "#FEF2F2",

    borderColor: "#DC2626",

    color: "#B91C1C",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",

    gap: "12px",

    padding: "16px 22px 20px",

    backgroundColor: "#F8FAFC",

    borderTop: "1px solid #E5E7EB",
  },

  cancelButton: {
    minWidth: "110px",

    padding: "10px 20px",

    backgroundColor: "#FFFFFF",

    border: "1px solid #CBD5E1",
    borderRadius: "22px",

    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#334155",

    cursor: "pointer",
  },

  submitButton: {
    minWidth: "140px",

    padding: "10px 20px",

    backgroundColor: "#B91C1C",

    border: "1px solid #B91C1C",
    borderRadius: "22px",

    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#FFFFFF",

    cursor: "pointer",
  },

  submitButtonDisabled: {
    backgroundColor: "#E2E8F0",

    borderColor: "#E2E8F0",

    color: "#94A3B8",

    cursor: "not-allowed",
  },
};

export default styles;