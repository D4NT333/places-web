const styles = {
  reviewCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
    padding: "14px",
    boxShadow: "0 12px 24px rgba(15, 23, 42, 0.07)",
  },

  reviewTopGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    marginBottom: "12px",
  },

  readonlyField: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    padding: "9px 12px",
    borderRadius: "12px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
  },

  readonlyLabel: {
    fontSize: "10px",
    fontWeight: 900,
    color: "#9ca3af",
    textTransform: "uppercase",
  },

  readonlyValue: {
    fontSize: "13px",
    fontWeight: 800,
    color: "#111827",
  },

  formSection: {
    padding: "12px",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    marginBottom: "10px",
  },

  rowBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },

  fieldLabel: {
    display: "block",
    fontSize: "13px",
    fontWeight: 900,
    color: "#111827",
    marginBottom: "8px",
  },

  smallLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: 900,
    color: "#6b7280",
    margin: "10px 0 7px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "11px",
    fontSize: "13px",
    fontWeight: 700,
    color: "#111827",
    marginBottom: "8px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    minHeight: "76px",
    resize: "vertical",
    boxSizing: "border-box",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "11px",
    fontSize: "13px",
    lineHeight: 1.4,
    color: "#111827",
    outline: "none",
  },

  secondaryButton: {
    border: "1px solid #bfdbfe",
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    borderRadius: "999px",
    padding: "7px 12px",
    fontSize: "12px",
    fontWeight: 900,
    cursor: "pointer",
  },

  descriptionOptions: {
    display: "grid",
    gap: "8px",
    marginTop: "10px",
  },

  descriptionOption: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    textAlign: "left",
    padding: "10px 12px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    cursor: "pointer",
    color: "#374151",
    fontSize: "13px",
  },

  chipGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  choiceChip: {
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    color: "#374151",
    borderRadius: "999px",
    padding: "7px 12px",
    fontSize: "12px",
    fontWeight: 900,
    cursor: "pointer",
  },

  choiceChipActive: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
    color: "#ffffff",
  },

  twoColumnSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },

  readonlyMini: {
    padding: "8px 10px",
    borderRadius: "11px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#6b7280",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "8px",
  },

  select: {
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "11px",
    fontSize: "13px",
    fontWeight: 700,
    color: "#111827",
    outline: "none",
    backgroundColor: "#ffffff",
  },

  googleStatsBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    borderRadius: "14px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#374151",
    fontSize: "13px",
    fontWeight: 800,
  },
  errorBox: {
  padding: "10px 12px",
  borderRadius: "12px",
  backgroundColor: "#fee2e2",
  border: "1px solid #fecaca",
  color: "#991b1b",
  fontSize: "12px",
  fontWeight: 800,
},
};

export default styles;