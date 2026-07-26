const styles = {
  overlay: {
    position: "fixed",
    inset: 0,

    zIndex: 1400,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "24px",

    background:
      "rgba(15, 23, 42, 0.58)",

    backdropFilter: "blur(2px)",
  },

  modal: {
    width: "min(680px, 100%)",
    maxHeight: "calc(100vh - 48px)",

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",

    background: "#ffffff",

    border:
      "1px solid #cbd5e1",

    borderRadius: "16px",

    boxShadow:
      "0 24px 70px rgba(15, 23, 42, 0.26)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",

    padding: "20px 22px",

    borderBottom:
      "1px solid #e2e8f0",
  },

  headerLabel: {
    display: "block",

    marginBottom: "4px",

    color: "#64748b",

    fontSize: "12px",
    fontWeight: 700,
  },

  title: {
    margin: 0,

    color: "#0f172a",

    fontSize: "22px",
    lineHeight: 1.25,
  },

  userInformation: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",

    marginTop: "8px",
  },

  userName: {
    color: "#334155",

    fontSize: "13px",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "22px",

    padding: "2px 9px",

    borderRadius: "999px",

    fontSize: "11px",
    fontWeight: 700,
  },

  activeStatusChip: {
    color: "#15803d",
    background: "#f0fdf4",
    border: "1px solid #86efac",
  },

  warnedStatusChip: {
    color: "#a16207",
    background: "#fefce8",
    border: "1px solid #fde047",
  },

  blockedStatusChip: {
    color: "#b91c1c",
    background: "#fef2f2",
    border: "1px solid #fca5a5",
  },

  pendingStatusChip: {
    color: "#1d4ed8",
    background: "#eff6ff",
    border: "1px solid #93c5fd",
  },

  closeButton: {
    width: "34px",
    height: "34px",

    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 0,

    color: "#334155",
    background: "#f8fafc",

    border: "1px solid #cbd5e1",
    borderRadius: "9px",

    fontSize: "21px",
    lineHeight: 1,

    cursor: "pointer",
  },

  form: {
    minHeight: 0,

    display: "flex",
    flexDirection: "column",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    padding: "22px",

    overflowY: "auto",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
  },

  sectionTitle: {
    margin: 0,

    color: "#1e293b",

    fontSize: "14px",
    fontWeight: 800,
  },

  sanctionTypeGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "12px",
  },

  sanctionTypeButton: {
    minHeight: "104px",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",

    padding: "15px",

    color: "#334155",
    background: "#ffffff",

    border: "1px solid #cbd5e1",
    borderRadius: "11px",

    textAlign: "left",

    cursor: "pointer",
  },

  warningButtonActive: {
    color: "#1e3a8a",

    background: "#eff6ff",

    border: "2px solid #2563eb",

    boxShadow:
      "0 0 0 3px rgba(37, 99, 235, 0.08)",
  },

  permanentButtonActive: {
    color: "#991b1b",

    background: "#fef2f2",

    border: "2px solid #dc2626",

    boxShadow:
      "0 0 0 3px rgba(220, 38, 38, 0.08)",
  },

  sanctionTypeName: {
    fontSize: "14px",
    fontWeight: 800,
  },

  sanctionTypeDescription: {
    color: "#64748b",

    fontSize: "12px",
    lineHeight: 1.45,
  },

  label: {
    color: "#334155",

    fontSize: "13px",
    fontWeight: 700,
  },

  select: {
    width: "100%",
    minHeight: "42px",

    padding: "0 12px",

    color: "#0f172a",
    background: "#ffffff",

    border: "1px solid #cbd5e1",
    borderRadius: "9px",

    outline: "none",
  },

  textarea: {
    width: "100%",
    minHeight: "116px",

    boxSizing: "border-box",

    resize: "vertical",

    padding: "12px",

    color: "#0f172a",
    background: "#ffffff",

    border: "1px solid #cbd5e1",
    borderRadius: "9px",

    fontFamily: "inherit",
    fontSize: "13px",
    lineHeight: 1.5,

    outline: "none",
  },

  inputError: {
    border: "1px solid #dc2626",
    boxShadow:
      "0 0 0 2px rgba(220, 38, 38, 0.08)",
  },

  textareaFooter: {
    minHeight: "18px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },

  characterCount: {
    marginLeft: "auto",

    color: "#64748b",

    fontSize: "11px",
  },

  errorMessage: {
    margin: 0,

    color: "#b91c1c",

    fontSize: "12px",
    lineHeight: 1.4,
  },

  permanentWarningBox: {
    padding: "14px 16px",

    color: "#991b1b",
    background: "#fef2f2",

    border: "1px solid #fca5a5",
    borderRadius: "10px",

    fontSize: "13px",
  },

  warningText: {
    margin: "6px 0 0",

    color: "#b91c1c",

    lineHeight: 1.5,
  },

  confirmationSection: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    padding: "14px",

    background: "#f8fafc",

    border: "1px solid #e2e8f0",
    borderRadius: "10px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",
    gap: "9px",

    color: "#475569",

    fontSize: "12px",
    lineHeight: 1.45,

    cursor: "pointer",
  },

  submitErrorBox: {
    padding: "11px 13px",

    color: "#b91c1c",
    background: "#fef2f2",

    border: "1px solid #fecaca",
    borderRadius: "9px",

    fontSize: "12px",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",

    padding: "16px 22px",

    background: "#ffffff",

    borderTop:
      "1px solid #e2e8f0",
  },

  cancelButton: {
    minWidth: "112px",
    minHeight: "40px",

    padding: "0 18px",

    color: "#0f172a",
    background: "#ffffff",

    border: "1px solid #94a3b8",
    borderRadius: "9px",

    fontWeight: 700,

    cursor: "pointer",
  },

  submitButton: {
    minWidth: "190px",
    minHeight: "40px",

    padding: "0 20px",

    color: "#ffffff",
    background: "#0f172a",

    border: "1px solid #0f172a",
    borderRadius: "9px",

    fontWeight: 800,

    cursor: "pointer",
  },

  permanentSubmitButton: {
    background: "#b91c1c",
    border: "1px solid #b91c1c",
  },
};

export default styles;