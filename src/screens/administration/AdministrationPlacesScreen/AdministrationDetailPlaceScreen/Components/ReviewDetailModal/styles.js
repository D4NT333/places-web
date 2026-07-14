const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(2px)",
  },

  modal: {
    width: "min(760px, 100%)",
    maxHeight: "calc(100vh - 48px)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid #CBD5E1",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.25)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,
    padding: "22px 24px",
    borderBottom: "1px solid #E2E8F0",
  },

  eyebrow: {
    display: "block",
    marginBottom: 4,
    color: "#64748B",
    fontSize: 12,
    fontWeight: 700,
  },

  title: {
    margin: 0,
    color: "#0F172A",
    fontSize: 21,
    fontWeight: 800,
  },

  closeButton: {
    width: 36,
    height: 36,
    flexShrink: 0,
    border: "1px solid #CBD5E1",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    fontSize: 23,
    lineHeight: 1,
    cursor: "pointer",
  },

  content: {
    overflowY: "auto",
    padding: 24,
  },

  stateBox: {
    padding: "48px 20px",
    textAlign: "center",
    color: "#475569",
    fontWeight: 700,
  },

  errorBox: {
    padding: "16px 18px",
    border: "1px solid #FECACA",
    borderRadius: 12,
    backgroundColor: "#FEF2F2",
    color: "#991B1B",
    fontWeight: 700,
  },

  userSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    marginBottom: 20,
  },

  userIdentity: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
  },

  avatar: {
    width: 48,
    height: 48,
    flexShrink: 0,
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid #CBD5E1",
  },

  avatarFallback: {
    width: 48,
    height: 48,
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    backgroundColor: "#E2E8F0",
    color: "#334155",
    fontSize: 18,
    fontWeight: 800,
  },

  userText: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    minWidth: 0,
  },

  userName: {
    overflow: "hidden",
    color: "#0F172A",
    fontSize: 15,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  secondaryText: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: 600,
  },

  statusPill: {
    flexShrink: 0,
    padding: "7px 13px",
    border: "1px solid #94A3B8",
    borderRadius: 999,
    color: "#0F172A",
    fontSize: 12,
    fontWeight: 800,
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 10,
    marginBottom: 24,
  },

  summaryBox: {
    minHeight: 78,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
    padding: 13,
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
  },

  summaryLabel: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: 700,
  },

  summaryValue: {
    color: "#0F172A",
    fontSize: 17,
    fontWeight: 800,
  },

  section: {
    marginTop: 22,
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 10,
  },

  sectionTitle: {
    margin: "0 0 10px",
    color: "#0F172A",
    fontSize: 15,
    fontWeight: 800,
  },

  categoryPill: {
    padding: "5px 10px",
    border: "1px solid #CBD5E1",
    borderRadius: 999,
    color: "#475569",
    fontSize: 11,
    fontWeight: 700,
  },

  commentBox: {
    padding: 16,
    border: "1px solid #CBD5E1",
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
    color: "#1E293B",
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
  },

  emptyAnswers: {
    padding: 18,
    border: "1px dashed #CBD5E1",
    borderRadius: 12,
    color: "#64748B",
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600,
  },

  answersList: {
    display: "grid",
    gap: 10,
  },

  answerCard: {
    padding: 15,
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  answerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  questionNumber: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: 800,
    textTransform: "uppercase",
  },

  answerScore: {
    color: "#0F172A",
    fontSize: 13,
    fontWeight: 800,
  },

  questionText: {
    margin: "9px 0",
    color: "#1E293B",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1.45,
  },

  answerLabel: {
    color: "#475569",
    fontSize: 12,
    fontWeight: 600,
  },

  metadataSection: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
    marginTop: 22,
    paddingTop: 18,
    borderTop: "1px solid #E2E8F0",
  },

  metadataItem: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  metadataLabel: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: 700,
  },

  metadataValue: {
    color: "#0F172A",
    fontSize: 12,
    fontWeight: 800,
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    padding: "16px 24px",
    borderTop: "1px solid #E2E8F0",
    backgroundColor: "#F8FAFC",
  },

  cancelButton: {
    minWidth: 94,
    padding: "9px 16px",
    border: "1px solid #CBD5E1",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    fontWeight: 800,
    cursor: "pointer",
  },

  moderateButton: {
    minWidth: 150,
    padding: "9px 17px",
    border: "1px solid #0F172A",
    borderRadius: 999,
    backgroundColor: "#0F172A",
    color: "#FFFFFF",
    fontWeight: 800,
    cursor: "pointer",
  },
  userButton: {
  display: "flex",
  alignItems: "center",
  gap: 12,
  minWidth: 0,
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  textAlign: "left",
  cursor: "pointer",
},

userNameLink: {
  overflow: "hidden",
  color: "#0F172A",
  fontSize: 15,
  fontWeight: 800,
  textOverflow: "ellipsis",
  textDecoration: "underline",
  textDecorationColor: "#94A3B8",
  textUnderlineOffset: 3,
  whiteSpace: "nowrap",
},
};

export default styles;