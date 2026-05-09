const styles = {
  mediaCard: {
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "14px",
    boxShadow: "0 12px 24px rgba(15, 23, 42, 0.07)",
    display: "flex",
    flexDirection: "column",
  },

  photoBox: {
    height: "390px",
    borderRadius: "14px",
    backgroundColor: "#f9fafb",
    border: "1px dashed #cbd5e1",
    overflow: "hidden",
    marginBottom: "12px",
  },

  photoPlaceholder: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    color: "#6b7280",
    fontWeight: 800,
    textAlign: "center",
  },

  photoIcon: {
    width: "36px",
    height: "36px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    backgroundColor: "#eef2ff",
    color: "#2563eb",
    fontSize: "18px",
  },

  mapBox: {
    height: "220px",
    borderRadius: "14px",
    backgroundColor: "#f3f4f6",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    marginBottom: "12px",
  },

  mapPlaceholder: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3px",
    color: "#6b7280",
    fontWeight: 800,
  },

  addressBlock: {
    marginTop: "auto",
    padding: "12px",
    borderRadius: "14px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
  },

  label: {
    display: "block",
    fontSize: "11px",
    fontWeight: 900,
    color: "#9ca3af",
    marginBottom: "4px",
  },

  addressText: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.4,
    color: "#374151",
    fontWeight: 700,
  },
};

export default styles;