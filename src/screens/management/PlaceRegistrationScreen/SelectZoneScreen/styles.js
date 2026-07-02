const styles = {
  container: {
    padding: "32px",
  },

  title: {
    margin: "0 0 22px",
    fontSize: "24px",
    fontWeight: 800,
    color: "#0f172a",
  },

  infoBox: {
    marginTop: "16px",
    padding: "14px 16px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: "14px",
  },

  errorBox: {
    marginBottom: "18px",
    padding: "13px 16px",
    border: "1px solid #fecaca",
    borderRadius: "10px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    fontSize: "14px",
    fontWeight: 600,
  },

  mapContainer: {
    position: "relative",
    width: "100%",
    height: "840px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },

  hexPill: {
    position: "absolute",
    top: "14px",
    right: "14px",
    zIndex: 500,

    display: "inline-flex",
    alignItems: "center",
    gap: "6px",

    maxWidth: "420px",
    padding: "7px 12px",

    border: "1px solid #cbd5e1",
    borderRadius: "999px",
    backgroundColor: "#ffffff",

    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.12)",
    fontSize: "13px",
  },

  hexPillLabel: {
    fontWeight: 800,
    color: "#334155",
    whiteSpace: "nowrap",
  },

  hexPillValue: {
    fontWeight: 600,
    color: "#64748b",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  confirmButton: {
    width: "100%",
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
  },

  confirmButtonDisabled: {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
};

export default styles;