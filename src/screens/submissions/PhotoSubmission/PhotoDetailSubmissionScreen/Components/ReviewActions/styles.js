const styles = {
  card: {
    width: "100%",

    /*
     * No crece. Información utiliza
     * todo el espacio restante.
     */
    flex: "0 0 auto",

    overflow: "hidden",

    border: "1px solid #d9e0e8",
    borderRadius: "12px",

    backgroundColor: "#ffffff",

    boxShadow:
      "0 3px 12px rgba(15, 23, 42, 0.05)",
  },

  header: {
    padding: "11px 16px 8px",
  },

  title: {
    margin: 0,

    color: "#111827",

    fontSize: "15px",
    fontWeight: "800",
  },

  description: {
    margin: "4px 0 0",

    color: "#64748b",

    fontSize: "11px",
    lineHeight: 1.4,
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "9px",

    padding: "0 16px 11px",
  },

  button: {
    height: "37px",

    padding: "0 12px",

    borderRadius: "8px",

    fontFamily: "inherit",
    fontSize: "11px",
    fontWeight: "800",

    cursor: "pointer",
  },

  rejectButton: {
    border: "1px solid #ef4444",

    backgroundColor: "#ffffff",
    color: "#b91c1c",
  },

  approveButton: {
    border: "1px solid #16a34a",

    backgroundColor: "#16a34a",
    color: "#ffffff",
  },

  disabledButton: {
    opacity: 0.55,

    cursor: "not-allowed",
  },

  finishedCard: {
    width: "100%",

    flex: "0 0 auto",

    display: "flex",
    alignItems: "flex-start",
    gap: "9px",

    padding: "11px 14px",
    boxSizing: "border-box",

    border: "1px solid",
    borderRadius: "12px",
  },

  approvedMessage: {
    borderColor: "#86efac",

    backgroundColor: "#f0fdf4",
  },

  rejectedMessage: {
    borderColor: "#fca5a5",

    backgroundColor: "#fef2f2",
  },

  finishedSymbol: {
    flexShrink: 0,

    width: "28px",
    height: "28px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "50%",

    fontSize: "0.9rem",
    fontWeight: "800",
  },

  approvedSymbol: {
    backgroundColor: "#dcfce7",
    color: "#15803d",
  },

  rejectedSymbol: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
  },

  finishedTitle: {
    margin: 0,

    color: "#1f2937",

    fontSize: "12px",
    fontWeight: "800",
  },

  finishedDescription: {
    margin: "3px 0 0",

    color: "#6b7280",

    fontSize: "10px",
    lineHeight: 1.4,
  },
};

export default styles;