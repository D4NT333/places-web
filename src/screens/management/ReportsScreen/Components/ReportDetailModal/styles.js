const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(3px)",
    boxSizing: "border-box",
  },

  modal: {
    width: "min(980px, 96vw)",
    maxHeight: "92vh",
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) auto",
    border: "1.5px solid #111827",
    borderRadius: 18,
    backgroundColor: "#ffffff",
    boxShadow: "0 30px 80px rgba(15, 23, 42, 0.28)",
    overflow: "hidden",
  },

  header: {
    minHeight: 92,
    padding: "20px 24px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,
    borderBottom: "1px solid #e5e7eb",
    boxSizing: "border-box",
  },

  headerTopRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  title: {
    margin: 0,
    fontSize: 25,
    fontWeight: 900,
    color: "#111827",
  },

  subtitle: {
    margin: "6px 0 0",
    fontSize: 14,
    fontWeight: 600,
    color: "#64748b",
  },

  closeButton: {
    width: 38,
    height: 38,
    flexShrink: 0,
    border: "1px solid #d1d5db",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 26,
    lineHeight: 1,
    cursor: "pointer",
  },

  body: {
    minHeight: 0,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 18,
    overflowY: "auto",
    boxSizing: "border-box",
  },

  loadingState: {
    minHeight: 360,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 800,
    color: "#64748b",
  },

  summaryCard: {
    padding: 18,
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    backgroundColor: "#f8fafc",
  },

  summaryHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 18,
  },

  sectionTitle: {
    margin: 0,
    fontSize: 17,
    fontWeight: 900,
    color: "#111827",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
  },

  infoItem: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  infoLabel: {
    fontSize: 12,
    fontWeight: 800,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  infoValue: {
    fontSize: 14,
    fontWeight: 800,
    color: "#111827",
    overflowWrap: "anywhere",
  },

  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 18,
  },

  entityCard: {
    minWidth: 0,
    padding: 18,
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    backgroundColor: "#ffffff",
  },

  entityHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },

  eyebrow: {
    display: "block",
    marginBottom: 6,
    fontSize: 12,
    fontWeight: 800,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  entityName: {
    margin: 0,
    fontSize: 17,
    fontWeight: 900,
    color: "#111827",
    overflowWrap: "anywhere",
  },

  entityDescription: {
    margin: "12px 0 0",
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.5,
    color: "#64748b",
  },

  reporterRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    flexShrink: 0,
    borderRadius: "50%",
    border: "1px solid #d1d5db",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f5f9",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  avatarText: {
    fontSize: 13,
    fontWeight: 900,
    color: "#334155",
  },

  reporterText: {
    minWidth: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  reporterName: {
    fontSize: 14,
    fontWeight: 900,
    color: "#111827",
    overflowWrap: "anywhere",
  },

  reporterEmail: {
    fontSize: 12,
    fontWeight: 600,
    color: "#64748b",
    overflowWrap: "anywhere",
  },

  secondaryButton: {
    minHeight: 34,
    flexShrink: 0,
    padding: "0 14px",
    border: "1.5px solid #111827",
    borderRadius: 999,
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
  },

  messageCard: {
    padding: 18,
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    backgroundColor: "#ffffff",
  },

  messageText: {
    minHeight: 68,
    margin: "14px 0 0",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#f8fafc",
    color: "#334155",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.65,
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  resolutionCard: {
    padding: 18,
    border: "1px solid #cbd5e1",
    borderRadius: 14,
    backgroundColor: "#f8fafc",
  },

  resolutionGrid: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
  },

  resolutionNote: {
    margin: "16px 0 0",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    color: "#334155",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.55,
  },

  actionCard: {
    padding: 18,
    border: "1px solid #cbd5e1",
    borderRadius: 14,
    backgroundColor: "#f8fafc",
  },

  actionOptions: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },

  actionOption: {
    minHeight: 42,
    border: "1.5px solid #cbd5e1",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    color: "#334155",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
  },

  actionOptionSelected: {
    borderColor: "#111827",
    backgroundColor: "#111827",
    color: "#ffffff",
  },

  noteLabel: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    fontSize: 13,
    fontWeight: 800,
    color: "#334155",
  },

  textarea: {
    width: "100%",
    minHeight: 100,
    resize: "vertical",
    padding: 12,
    border: "1.5px solid #cbd5e1",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    color: "#111827",
    fontFamily: "inherit",
    fontSize: 14,
    lineHeight: 1.5,
    outline: "none",
    boxSizing: "border-box",
  },

  noteFooter: {
    minHeight: 20,
    marginTop: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  counter: {
    fontSize: 12,
    fontWeight: 700,
    color: "#64748b",
  },

  errorText: {
    fontSize: 12,
    fontWeight: 800,
    color: "#dc2626",
  },

  footer: {
    minHeight: 76,
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  },

  cancelButton: {
    minWidth: 120,
    height: 40,
    border: "1.5px solid #111827",
    borderRadius: 999,
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
  },

  submitButton: {
    minWidth: 170,
    height: 40,
    border: "1.5px solid #111827",
    borderRadius: 999,
    backgroundColor: "#111827",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
  },

  targetChip: {
    minHeight: 28,
    padding: "0 12px",
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 900,
  },

  targetUser: {
    border: "1px solid #f9a8d4",
    backgroundColor: "#fdf2f8",
    color: "#be185d",
  },

  targetPlace: {
    border: "1px solid #93c5fd",
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
  },

  targetGeneral: {
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
    color: "#334155",
  },

  statusChip: {
    minHeight: 28,
    padding: "0 12px",
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 900,
  },

  statusPending: {
    border: "1px solid #fdba74",
    backgroundColor: "#fff7ed",
    color: "#c2410c",
  },

  statusResolved: {
    border: "1px solid #86efac",
    backgroundColor: "#f0fdf4",
    color: "#15803d",
  },

  statusDiscarded: {
    border: "1px solid #fca5a5",
    backgroundColor: "#fef2f2",
    color: "#b91c1c",
  },
};

export default styles;