const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "rgba(17, 24, 39, 0.45)",
  },

  modal: {
    width: "100%",
    maxWidth: "560px",
    overflow: "hidden",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    boxShadow:
      "0 24px 60px rgba(17, 24, 39, 0.22)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1.25rem 1.4rem",
    borderBottom: "1px solid #e5e7eb",
  },

  title: {
    margin: 0,
    color: "#1f2937",
    fontSize: "1.2rem",
  },

  subtitle: {
    margin: "0.35rem 0 0",
    color: "#6b7280",
    fontSize: "0.9rem",
  },

  closeButton: {
    width: "32px",
    height: "32px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
    color: "#4b5563",
    fontSize: "1.35rem",
    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "0.95rem",
    padding: "1.4rem",
  },

  dataRow: {
    display: "grid",
    gridTemplateColumns: "130px 1fr",
    gap: "1rem",
  },

  label: {
    color: "#6b7280",
    fontSize: "0.88rem",
    fontWeight: 600,
  },

  value: {
    color: "#1f2937",
    fontSize: "0.92rem",
    fontWeight: 500,
  },

  summaryBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    paddingTop: "0.4rem",
  },

  summary: {
    margin: 0,
    padding: "0.9rem",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
    color: "#4b5563",
    fontSize: "0.9rem",
    lineHeight: 1.55,
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.75rem",
    padding: "1rem 1.4rem",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
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