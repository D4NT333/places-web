const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 24,

    backgroundColor:
      "rgba(15, 23, 42, 0.58)",

    backdropFilter: "blur(3px)",
    boxSizing: "border-box",
  },

  modal: {
    width: "min(760px, 100%)",
    maxHeight: "calc(100vh - 48px)",

    display: "flex",
    flexDirection: "column",

    border: "1px solid #CBD5E1",
    borderRadius: 18,

    backgroundColor: "#FFFFFF",

    boxShadow:
      "0 28px 80px rgba(15, 23, 42, 0.28)",

    overflow: "hidden",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,

    padding: "20px 22px",

    borderBottom:
      "1px solid #E2E8F0",
  },

  headerContent: {
    minWidth: 0,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  title: {
    margin: 0,

    color: "#0F172A",

    fontSize: 22,
    lineHeight: 1.2,
    fontWeight: 900,
  },

  subtitle: {
    margin: "7px 0 0",

    color: "#64748B",

    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600,
  },

  closeButton: {
    width: 36,
    height: 36,
    flexShrink: 0,

    display: "grid",
    placeItems: "center",

    padding: 0,

    border: "1px solid #CBD5E1",
    borderRadius: "50%",

    backgroundColor: "#FFFFFF",
    color: "#334155",

    fontSize: 22,
    lineHeight: 1,

    cursor: "pointer",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: 25,
    padding: "3px 10px",

    border: "1px solid",
    borderRadius: 999,

    fontSize: 11,
    fontWeight: 800,
  },

  statusChipPublished: {
    borderColor: "#86EFAC",
    backgroundColor: "#F0FDF4",
    color: "#166534",
  },

  statusChipReview: {
    borderColor: "#93C5FD",
    backgroundColor: "#EFF6FF",
    color: "#1D4ED8",
  },

  statusChipWarned: {
    borderColor: "#FCD34D",
    backgroundColor: "#FFFBEB",
    color: "#92400E",
  },

  statusChipHidden: {
    borderColor: "#FDA4AF",
    backgroundColor: "#FFF1F2",
    color: "#9F1239",
  },

  body: {
    display: "grid",
    gap: 14,

    padding: 18,

    overflowY: "auto",
  },

  placeCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,

    padding: 14,

    border: "1px solid #CBD5E1",
    borderRadius: 14,

    backgroundColor: "#F8FAFC",
  },

  placeInfo: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  placeImage: {
    width: 54,
    height: 54,
    flexShrink: 0,

    border: "1px solid #CBD5E1",
    borderRadius: 12,

    objectFit: "cover",
  },

  placeImageFallback: {
    width: 54,
    height: 54,
    flexShrink: 0,

    display: "grid",
    placeItems: "center",

    border: "1px solid #CBD5E1",
    borderRadius: 12,

    backgroundColor: "#E2E8F0",
    color: "#334155",

    fontSize: 16,
    fontWeight: 900,
  },

  placeText: {
    minWidth: 0,

    display: "grid",
    gap: 3,
  },

  sectionEyebrow: {
    color: "#64748B",

    fontSize: 10,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  placeName: {
    color: "#0F172A",

    fontSize: 15,
    fontWeight: 900,

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  placeDescription: {
    color: "#64748B",

    fontSize: 12,
    fontWeight: 600,
  },

  reportCounter: {
    minWidth: 76,
    flexShrink: 0,

    display: "grid",
    justifyItems: "center",
    gap: 2,

    padding: "8px 12px",

    border: "1px solid #CBD5E1",
    borderRadius: 10,

    backgroundColor: "#FFFFFF",
  },

  reportCounterLabel: {
    color: "#64748B",

    fontSize: 10,
    fontWeight: 800,
  },

  reportCounterValue: {
    color: "#0F172A",

    fontSize: 20,
    fontWeight: 900,
  },

  formSection: {
    padding: 14,

    border: "1px solid #CBD5E1",
    borderRadius: 14,

    backgroundColor: "#FFFFFF",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 14,

    marginBottom: 12,
  },

  sectionTitle: {
    margin: 0,

    color: "#0F172A",

    fontSize: 15,
    fontWeight: 900,
  },

  sectionDescription: {
    margin: "4px 0 0",

    color: "#64748B",

    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 600,
  },

  actionsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },

  actionButton: {
    minWidth: 0,
    minHeight: 78,

    display: "grid",
    alignContent: "center",
    gap: 5,

    padding: 12,

    border: "1px solid #CBD5E1",
    borderRadius: 11,

    backgroundColor: "#FFFFFF",
    color: "#0F172A",

    textAlign: "left",

    cursor: "pointer",
  },

  actionButtonSelectedPublished: {
    borderColor: "#22C55E",
    backgroundColor: "#F0FDF4",
    boxShadow:
      "0 0 0 2px rgba(34, 197, 94, 0.12)",
  },

  actionButtonSelectedReview: {
    borderColor: "#3B82F6",
    backgroundColor: "#EFF6FF",
    boxShadow:
      "0 0 0 2px rgba(59, 130, 246, 0.12)",
  },

  actionButtonSelectedWarning: {
    borderColor: "#F59E0B",
    backgroundColor: "#FFFBEB",
    boxShadow:
      "0 0 0 2px rgba(245, 158, 11, 0.12)",
  },

  actionButtonSelectedDanger: {
    borderColor: "#E11D48",
    backgroundColor: "#FFF1F2",
    boxShadow:
      "0 0 0 2px rgba(225, 29, 72, 0.12)",
  },

  actionButtonLabel: {
    fontSize: 13,
    fontWeight: 900,
  },

  actionButtonDescription: {
    color: "#64748B",

    fontSize: 11,
    lineHeight: 1.4,
    fontWeight: 600,
  },

  effectNotice: {
    display: "grid",
    gap: 3,

    marginTop: 12,
    padding: "10px 12px",

    border: "1px solid #BFDBFE",
    borderRadius: 10,

    backgroundColor: "#EFF6FF",
    color: "#1E3A8A",

    fontSize: 12,
    lineHeight: 1.45,
    fontWeight: 600,
  },

  effectNoticeWarning: {
    borderColor: "#FDE68A",
    backgroundColor: "#FFFBEB",
    color: "#92400E",
  },

  effectNoticeDanger: {
    borderColor: "#FECDD3",
    backgroundColor: "#FFF1F2",
    color: "#9F1239",
  },

  effectNoticeTitle: {
    fontWeight: 900,
  },

  fieldLabel: {
    display: "block",

    marginBottom: 7,

    color: "#0F172A",

    fontSize: 12,
    fontWeight: 900,
  },

  select: {
    width: "100%",
    minHeight: 42,

    padding: "0 12px",

    border: "1px solid #CBD5E1",
    borderRadius: 9,

    backgroundColor: "#FFFFFF",
    color: "#0F172A",

    fontSize: 13,
    fontWeight: 600,

    outline: "none",
    boxSizing: "border-box",
  },

  textareaHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },

  characterCount: {
    color: "#64748B",

    fontSize: 11,
    fontWeight: 700,
  },

  textarea: {
    width: "100%",
    minHeight: 100,

    padding: 12,

    border: "1px solid #CBD5E1",
    borderRadius: 9,

    backgroundColor: "#FFFFFF",
    color: "#0F172A",

    fontFamily: "inherit",
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600,

    resize: "vertical",
    outline: "none",
    boxSizing: "border-box",
  },

  fieldWithError: {
    borderColor: "#EF4444",
    boxShadow:
      "0 0 0 2px rgba(239, 68, 68, 0.1)",
  },

  fieldError: {
    margin: "7px 0 0",

    color: "#B91C1C",

    fontSize: 11,
    fontWeight: 700,
  },

  noteFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,

    marginTop: 6,
  },

  noteHelp: {
    color: "#64748B",

    fontSize: 10,
    fontWeight: 600,
  },

  inlineFieldError: {
    color: "#B91C1C",

    fontSize: 10,
    fontWeight: 700,
  },

  dangerConfirmation: {
    display: "grid",
    gap: 12,

    padding: 14,

    border: "1px solid #FDA4AF",
    borderRadius: 14,

    backgroundColor: "#FFF1F2",
  },

  dangerConfirmationHeader: {
    display: "grid",
    gap: 3,
  },

  dangerConfirmationTitle: {
    color: "#9F1239",

    fontSize: 13,
    fontWeight: 900,
  },

  dangerConfirmationText: {
    color: "#BE123C",

    fontSize: 11,
    fontWeight: 600,
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",
    gap: 9,

    color: "#881337",

    fontSize: 12,
    lineHeight: 1.45,
    fontWeight: 700,

    cursor: "pointer",
  },

  checkbox: {
    width: 16,
    height: 16,
    flexShrink: 0,

    marginTop: 1,
  },

  errorBox: {
    padding: "10px 12px",

    border: "1px solid #FCA5A5",
    borderRadius: 10,

    backgroundColor: "#FEF2F2",
    color: "#991B1B",

    fontSize: 12,
    fontWeight: 700,
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,

    padding: "16px 20px",

    borderTop:
      "1px solid #E2E8F0",

    backgroundColor: "#FFFFFF",
  },

  cancelButton: {
    minWidth: 108,
    minHeight: 40,

    padding: "0 16px",

    border: "1px solid #334155",
    borderRadius: 999,

    backgroundColor: "#FFFFFF",
    color: "#0F172A",

    fontSize: 12,
    fontWeight: 900,

    cursor: "pointer",
  },

  submitButton: {
    minWidth: 150,
    minHeight: 40,

    padding: "0 18px",

    border: "1px solid #0F172A",
    borderRadius: 999,

    backgroundColor: "#0F172A",
    color: "#FFFFFF",

    fontSize: 12,
    fontWeight: 900,

    cursor: "pointer",
  },

  submitButtonDanger: {
    borderColor: "#BE123C",
    backgroundColor: "#BE123C",
  },

  disabledButton: {
    opacity: 0.45,
    cursor: "not-allowed",
  },
};

export default styles;