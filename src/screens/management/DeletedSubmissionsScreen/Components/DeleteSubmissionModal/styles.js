const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "grid",
    placeItems: "center",
    padding: "20px",
    backgroundColor: "rgba(16, 24, 40, 0.55)",
    boxSizing: "border-box",
  },

  modal: {
    width: "100%",
    maxWidth: "620px",
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    boxShadow:
      "0 24px 48px rgba(16, 24, 40, 0.2)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
    padding: "22px 24px",
    borderBottom: "1px solid #eaecf0",
  },

  title: {
    margin: 0,
    color: "#101828",
    fontSize: "20px",
    fontWeight: 700,
  },

  subtitle: {
    margin: "6px 0 0",
    color: "#667085",
    fontSize: "13px",
  },

  closeButton: {
    display: "grid",
    placeItems: "center",
    width: "34px",
    height: "34px",
    flexShrink: 0,
    padding: 0,
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#f2f4f7",
    color: "#475467",
    fontSize: "22px",
    cursor: "pointer",
  },

  content: {
    padding: "24px",
  },

  proposalHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "24px",
    padding: "16px",
    border: "1px solid #eaecf0",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
  },

  previewImage: {
    width: "58px",
    height: "58px",
    flexShrink: 0,
    borderRadius: "10px",
    objectFit: "cover",
  },

  previewFallback: {
    display: "grid",
    placeItems: "center",
    width: "58px",
    height: "58px",
    flexShrink: 0,
    borderRadius: "10px",
    backgroundColor: "#eaecf0",
    color: "#475467",
    fontSize: "18px",
    fontWeight: 700,
  },

  proposalType: {
    color: "#667085",
    fontSize: "12px",
    fontWeight: 600,
  },

  proposalTitle: {
    margin: "4px 0 0",
    color: "#101828",
    fontSize: "17px",
    fontWeight: 700,
  },

  dataGrid: {
    display: "flex",
    flexDirection: "column",
  },

  dataRow: {
    display: "grid",
    gridTemplateColumns: "170px 1fr",
    gap: "16px",
    padding: "13px 0",
    borderBottom: "1px solid #eaecf0",
  },

  label: {
    color: "#667085",
    fontSize: "13px",
    fontWeight: 600,
  },

  value: {
    color: "#344054",
    fontSize: "13px",
    overflowWrap: "anywhere",
  },

  codeValue: {
    color: "#344054",
    fontFamily: "monospace",
    fontSize: "12px",
    overflowWrap: "anywhere",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    padding: "18px 24px",
    borderTop: "1px solid #eaecf0",
  },

  cancelButton: {
    padding: "10px 16px",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#344054",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },

  deleteButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#d92d20",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default styles;