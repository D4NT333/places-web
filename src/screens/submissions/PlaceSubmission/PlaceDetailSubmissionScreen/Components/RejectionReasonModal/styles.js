const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },

  card: {
    width: 560,
    maxWidth: "92vw",
    backgroundColor: "#FFFFFF",
    border: "2px solid #111827",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.25)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 900,
    color: "#111827",
  },

  closeButton: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: "1px solid #CBD5E1",
    backgroundColor: "#FFFFFF",
    fontSize: 22,
    fontWeight: 900,
    cursor: "pointer",
  },

  reasonChip: {
    display: "inline-flex",
    border: "2px solid #DC2626",
    borderRadius: 999,
    padding: "8px 18px",
    color: "#991B1B",
    backgroundColor: "#FEF2F2",
    fontWeight: 900,
    marginBottom: 16,
  },

  messageBox: {
    minHeight: 120,
    border: "2px solid #DC2626",
    borderRadius: 12,
    padding: 18,
    backgroundColor: "#FEF2F2",
    color: "#111827",
    fontWeight: 700,
    lineHeight: 1.5,
    whiteSpace: "pre-wrap",
  },

  actions: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
  },

  backButton: {
    minWidth: 120,
    height: 38,
    borderRadius: 999,
    border: "2px solid #111827",
    backgroundColor: "#FFFFFF",
    color: "#111827",
    fontWeight: 900,
    cursor: "pointer",
  },
};

export default styles;