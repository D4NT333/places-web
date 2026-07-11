const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 4000,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 24,

    backgroundColor: "rgba(15, 23, 42, 0.5)",
    boxSizing: "border-box",
  },

  modal: {
    width: "min(760px, 100%)",
    maxHeight: "calc(100vh - 48px)",

    display: "flex",
    flexDirection: "column",

    backgroundColor: "#ffffff",
    border: "1px solid #cbd5e1",
    borderRadius: 16,

    boxShadow: "0 24px 60px rgba(15, 23, 42, 0.25)",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,

    padding: "22px 24px",

    borderBottom: "1px solid #e2e8f0",
  },

  headerLabel: {
    display: "block",
    marginBottom: 4,

    color: "#64748b",
    fontSize: 13,
    fontWeight: 800,
  },

  title: {
    margin: 0,

    color: "#0f172a",
    fontSize: 23,
    fontWeight: 900,
  },

  closeButton: {
    width: 38,
    height: 38,

    display: "grid",
    placeItems: "center",

    flexShrink: 0,
    padding: 0,

    color: "#111827",
    backgroundColor: "#ffffff",

    border: "1px solid #cbd5e1",
    borderRadius: 10,

    fontSize: 25,
    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 22,

    padding: 24,
    overflowY: "auto",
  },

  statusRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 9,
  },

  pendingChip: {
    padding: "5px 11px",

    color: "#9a3412",
    backgroundColor: "#fff7ed",

    border: "1px solid #fdba74",
    borderRadius: 999,

    fontSize: 12,
    fontWeight: 900,
  },

  priorityChip: {
    padding: "5px 11px",

    color: "#991b1b",
    backgroundColor: "#fef2f2",

    border: "1px solid #fca5a5",
    borderRadius: 999,

    fontSize: 12,
    fontWeight: 900,
    textTransform: "capitalize",
  },

  date: {
    marginLeft: "auto",

    color: "#64748b",
    fontSize: 13,
    fontWeight: 700,
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  sectionTitle: {
    margin: 0,

    color: "#1e293b",
    fontSize: 14,
    fontWeight: 900,
  },

  reasonBox: {
    padding: 16,

    color: "#1f2937",
    backgroundColor: "#f8fafc",

    border: "1px solid #dbe2ea",
    borderRadius: 10,
  },

  message: {
    margin: "8px 0 0",

    color: "#475569",
    fontSize: 14,
    lineHeight: 1.55,
    whiteSpace: "pre-wrap",
  },

  peopleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },

  personCard: {
    padding: 14,

    backgroundColor: "#ffffff",

    border: "1px solid #dbe2ea",
    borderRadius: 10,
  },

  personLabel: {
    display: "block",
    marginBottom: 11,

    color: "#64748b",
    fontSize: 12,
    fontWeight: 800,
  },

  personInformation: {
    display: "flex",
    alignItems: "center",
    gap: 11,
  },

  avatar: {
    width: 42,
    height: 42,

    flexShrink: 0,

    borderRadius: "50%",
    objectFit: "cover",
  },

  avatarFallback: {
    width: 42,
    height: 42,

    flexShrink: 0,

    display: "grid",
    placeItems: "center",

    color: "#0f172a",
    backgroundColor: "#f1f5f9",

    border: "1px solid #cbd5e1",
    borderRadius: "50%",

    fontSize: 15,
    fontWeight: 900,
  },

  personText: {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",
    gap: 3,

    color: "#0f172a",
    fontSize: 13,
  },

  relatedCard: {
    display: "flex",
    flexDirection: "column",

    border: "1px solid #dbe2ea",
    borderRadius: 10,

    overflow: "hidden",
  },

  relatedRow: {
    display: "grid",
    gridTemplateColumns: "130px 1fr",
    gap: 16,

    padding: "12px 14px",

    borderBottom: "1px solid #eef2f7",
    fontSize: 13,
  },

  relatedLabel: {
    color: "#64748b",
    fontWeight: 800,
  },

  textarea: {
    width: "100%",
    minHeight: 105,

    padding: 12,

    color: "#172033",
    backgroundColor: "#ffffff",

    border: "1px solid #cbd5e1",
    borderRadius: 9,

    fontFamily: "inherit",
    fontSize: 14,
    lineHeight: 1.5,

    resize: "vertical",
    boxSizing: "border-box",
    outline: "none",
  },

  textareaError: {
    border: "1px solid #dc2626",
  },

  textareaFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  errorMessage: {
    color: "#b91c1c",
    fontSize: 12,
    fontWeight: 700,
  },

  characterCount: {
    marginLeft: "auto",

    color: "#64748b",
    fontSize: 12,
  },

  footer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,

    padding: "18px 24px 22px",

    backgroundColor: "#ffffff",
    borderTop: "1px solid #e2e8f0",
  },

  discardButton: {
    minHeight: 44,

    color: "#991b1b",
    backgroundColor: "#ffffff",

    border: "1px solid #dc2626",
    borderRadius: 8,

    fontWeight: 900,
    cursor: "pointer",
  },

  validateButton: {
    minHeight: 44,

    color: "#ffffff",
    backgroundColor: "#111827",

    border: "1px solid #111827",
    borderRadius: 8,

    fontWeight: 900,
    cursor: "pointer",
  },

  disabledButton: {
    opacity: 0.55,
    cursor: "not-allowed",
  },
};

export default styles;