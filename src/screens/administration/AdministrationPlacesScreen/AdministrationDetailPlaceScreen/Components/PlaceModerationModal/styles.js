const styles = {
 overlay: {
  position: "fixed",
  inset: 0,
  zIndex: 99999,

  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  padding: "16px",
  boxSizing: "border-box",

  overflow: "hidden",

  background:
    "rgba(26, 52, 82, 0.58)",

  backdropFilter:
    "blur(8px)",
},

  modal: {
  position: "relative",

  display: "grid",
  gridTemplateRows:
    "auto minmax(0, 1fr) auto",

  width:
    "min(1580px, 100%)",

  height: "100%",
  maxHeight: "760px",
  minHeight: 0,

  margin: "auto",

  overflow: "hidden",

  background:
    "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

  border:
    "1px solid rgba(205, 221, 238, 0.98)",

  borderRadius: "20px",

  boxShadow:
    "0 30px 85px rgba(15, 39, 67, 0.34)",
},

  topAccent: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 3,

    height: "5px",

    background:
      "linear-gradient(90deg, #2176e5, #f0a12b, #e34d59)",
  },

 header: {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  minWidth: 0,

  gap: "20px",
  padding: "18px 21px 15px",
  boxSizing: "border-box",

  overflow: "hidden",

  background:
    "linear-gradient(135deg, #f4f9ff, #ffffff 56%, #fff8eb)",

  borderBottom:
    "1px solid #d8e6f2",
},

  headerContent: {
    display: "flex",
    alignItems: "center",

    gap: "14px",
    minWidth: 0,
  },

  headerIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "64px",
    height: "64px",
    flexShrink: 0,

    color: "#d17d08",

    background:
      "linear-gradient(145deg, #fff2d9, #fffaf1)",

    border:
      "1px solid #efd09a",

    borderRadius: "16px",

    boxShadow:
      "0 8px 20px rgba(194, 121, 12, 0.14)",
  },

  headerText: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",
    minWidth: 0,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "10px",
  },

  title: {
    margin: 0,

    color: "#092f61",

    fontSize: "2.4rem",
    fontWeight: 950,
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
  },

  subtitle: {
    margin: 0,

    color: "#617b98",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.45,
  },

  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    padding: 0,

    color: "#17375f",
    background: "#ffffff",

    border:
      "1px solid #ceddea",

    borderRadius: "12px",

    boxShadow:
      "0 5px 13px rgba(33, 68, 107, 0.1)",

    cursor: "pointer",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    minHeight: "30px",
    padding: "0 10px",

    border:
      "1px solid",

    borderRadius: "999px",

    fontSize: "1.9rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  statusChipPublished: {
    borderColor: "#b9e5ce",
    backgroundColor: "#eafaf2",
    color: "#078e4a",
  },

  statusChipReview: {
    borderColor: "#b7d6fa",
    backgroundColor: "#eef6ff",
    color: "#176fdc",
  },

  statusChipWarned: {
    borderColor: "#efd18f",
    backgroundColor: "#fff7e7",
    color: "#ad6900",
  },

  statusChipHidden: {
    borderColor: "#f5bebe",
    backgroundColor: "#fff0f0",
    color: "#d23f3f",
  },

body: {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  minWidth: 0,
  minHeight: 0,

  gap: "14px",

  padding: "17px 19px",
  boxSizing: "border-box",

  overflowY: "scroll",
  overflowX: "hidden",

  overscrollBehavior:
    "contain",

  scrollbarGutter:
    "stable both-edges",

  WebkitOverflowScrolling:
    "touch",
},

  placeCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    flexShrink: 0,

    gap: "18px",

    padding: "13px",

    background:
      "linear-gradient(135deg, #f1f7fd, #ffffff)",

    border:
      "1px solid #cfdfed",

    borderRadius: "14px",

    boxShadow:
      "0 6px 16px rgba(31, 73, 116, 0.06)",
  },

  placeInfo: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
    minWidth: 0,
  },

  placeImageWrapper: {
    width: "66px",
    height: "66px",
    flexShrink: 0,

    padding: "3px",
    boxSizing: "border-box",

    background: "#ffffff",

    border:
      "1px solid #c8dceb",

    borderRadius: "14px",

    boxShadow:
      "0 6px 15px rgba(31, 72, 112, 0.12)",
  },

  placeImage: {
    display: "block",

    width: "100%",
    height: "100%",

    borderRadius: "10px",

    objectFit: "cover",
  },

  placeImageFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    borderRadius: "10px",
  },

  placeText: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",
    minWidth: 0,
  },

  placeEyebrowRow: {
    display: "flex",
    alignItems: "center",

    gap: "5px",

    color: "#2176e5",
  },

  sectionEyebrow: {
    color: "inherit",

    fontSize: "2rem",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.055em",
  },

  placeName: {
    overflow: "hidden",

    color: "#0d315d",

    fontSize: "1.9rem",
    fontWeight: 950,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  placeDescription: {
    color: "#667e98",

    fontSize: "1.8rem",
    fontWeight: 650,
  },

  reportCounter: {
    display: "flex",
    alignItems: "center",

    gap: "9px",

    minWidth: "132px",
    flexShrink: 0,

    padding: "9px 11px",

    color: "#d17d08",
    background:
      "linear-gradient(135deg, #fff7e7, #fffaf2)",

    border:
      "1px solid #efd29a",

    borderRadius: "11px",
  },

  reportCounterIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "44px",
    height: "44px",
    flexShrink: 0,

    background: "#ffffff",

    border:
      "1px solid #efd7aa",

    borderRadius: "10px",
  },

  reportCounterText: {
    display: "flex",
    flexDirection: "column",

    gap: "1px",
  },

  reportCounterLabel: {
    color: "#9d6516",

    fontSize: "1.8rem",
    fontWeight: 850,
  },

  reportCounterValue: {
    color: "#b97008",

    fontSize: "2.3rem",
    fontWeight: 950,
    lineHeight: 1,
  },

  formSection: {
    display: "flex",
    flexDirection: "column",

    flexShrink: 0,

    gap: "12px",

    padding: "14px",

    background:
      "rgba(255, 255, 255, 0.9)",

    border:
      "1px solid #d2e1ef",

    borderRadius: "14px",

    boxShadow:
      "0 6px 16px rgba(31, 73, 116, 0.05)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    gap: "14px",
  },

  sectionHeadingGroup: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,
  },

  sectionIconBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "48px",
    height: "48px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#eef6ff",

    border:
      "1px solid #c7def9",

    borderRadius: "11px",
  },

  sectionIconViolet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "48px",
    height: "48px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "11px",
  },

  sectionTitle: {
    margin: 0,

    color: "#0b315f",

    fontSize: "2rem",
    fontWeight: 950,
  },

  sectionDescription: {
    margin: "3px 0 0",

    color: "#687f98",

    fontSize: "1.7rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  actionsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "10px",
  },

  actionButton: {
    position: "relative",

    display: "flex",
    alignItems: "center",

    gap: "11px",

    minWidth: 0,
    minHeight: "94px",

    padding: "11px 42px 11px 12px",

    color: "#17375f",
    background:
      "linear-gradient(135deg, #f8fbff, #ffffff)",

    border:
      "1px solid #d1e0ed",

    borderRadius: "12px",

    fontFamily: "inherit",
    textAlign: "left",

    cursor: "pointer",
  },

  actionButtonSelectedWarning: {
    color: "#9f650b",

    background:
      "linear-gradient(135deg, #fff3dc, #fffaf1)",

    borderColor: "#e8b95f",

    boxShadow:
      "0 0 0 2px rgba(229, 160, 37, 0.12)",
  },

  actionButtonSelectedDanger: {
    color: "#bd3b43",

    background:
      "linear-gradient(135deg, #ffe9eb, #fff6f6)",

    borderColor: "#eb747c",

    boxShadow:
      "0 0 0 2px rgba(218, 67, 77, 0.11)",
  },

  actionIconWarning: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "54px",
    height: "54px",
    flexShrink: 0,

    color: "#d17d08",
    background: "#fff5e2",

    border:
      "1px solid #efd09a",

    borderRadius: "12px",
  },

  actionIconDanger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "54px",
    height: "54px",
    flexShrink: 0,

    color: "#d23f3f",
    background: "#fff0f0",

    border:
      "1px solid #f2bfc2",

    borderRadius: "12px",
  },

  actionButtonContent: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  actionButtonLabel: {
    color: "inherit",

    fontSize: "2rem",
    fontWeight: 950,
  },

  actionButtonDescription: {
    color: "#667f98",

    fontSize: "1.6rem",
    lineHeight: 1.4,
    fontWeight: 650,
  },

  selectionIndicator: {
    position: "absolute",
    top: "10px",
    right: "10px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#9eb1c4",

    opacity: 0.45,
  },

  selectionIndicatorActive: {
    color: "currentColor",
    opacity: 1,
  },

  effectNotice: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    padding: "10px 12px",

    border:
      "1px solid #bfdbfe",

    borderRadius: "11px",

    background: "#eff6ff",
    color: "#1e3a8a",

    fontSize: "1.76rem",
    lineHeight: 1.45,
    fontWeight: 650,
  },

  effectNoticeWarning: {
    borderColor: "#f1d08b",
    background: "#fff7e7",
    color: "#92400e",
  },

  effectNoticeDanger: {
    borderColor: "#f0bcc1",
    background: "#fff0f0",
    color: "#a82e37",
  },

  effectIconWarning: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#d17d08",
    background: "#ffffff",

    border:
      "1px solid #efd29a",

    borderRadius: "10px",
  },

  effectIconDanger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#d23f3f",
    background: "#ffffff",

    border:
      "1px solid #f1c0c3",

    borderRadius: "10px",
  },

  effectNoticeText: {
    display: "flex",
    flexDirection: "column",

    gap: "2px",
  },

  effectNoticeTitle: {
    fontWeight: 950,
  },

  fieldLabel: {
    display: "block",

    color: "#17375f",

    fontSize: "1.8rem",
    fontWeight: 900,
  },

  textareaHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "14px",
  },

  characterCount: {
    color: "#647e98",

    fontSize: "1.8rem",
    fontWeight: 750,
  },

  textarea: {
    width: "100%",
    minHeight: "112px",

    padding: "12px 13px",
    boxSizing: "border-box",

    color: "#17375f",

    background:
      "linear-gradient(135deg, #f1f7fd, #ffffff)",

    border:
      "1px solid #cbddeb",

    borderRadius: "10px",
    outline: "none",

    fontFamily: "inherit",
    fontSize: "1.7rem",
    lineHeight: 1.5,
    fontWeight: 650,

    resize: "vertical",
  },

  fieldWithError: {
    borderColor: "#ef6868",

    boxShadow:
      "0 0 0 2px rgba(239, 68, 68, 0.1)",
  },

  fieldError: {
    margin: "7px 0 0",

    color: "#b91c1c",

    fontSize: "1.72rem",
    fontWeight: 750,
  },

  noteFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",

    gap: "8px",
  },

  noteHelp: {
    color: "#647e98",

    fontSize: "1.4rem",
    fontWeight: 650,
  },

  inlineFieldError: {
    color: "#b91c1c",

    fontSize: "1.7rem",
    fontWeight: 750,
  },

  dangerConfirmation: {
    display: "flex",
    alignItems: "flex-start",

    flexShrink: 0,

    gap: "11px",

    padding: "13px",

    color: "#a72f38",
    background:
      "linear-gradient(135deg, #fff0f0, #fff8f8)",

    border:
      "1px solid #f0b9bd",

    borderRadius: "14px",
  },

  dangerConfirmationIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "56px",
    height: "56px",
    flexShrink: 0,

    color: "#d23f3f",
    background: "#ffffff",

    border:
      "1px solid #efbfc2",

    borderRadius: "12px",
  },

  dangerConfirmationContent: {
    display: "flex",
    flexDirection: "column",

    gap: "10px",
    minWidth: 0,
  },

  dangerConfirmationHeader: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",
  },

  dangerConfirmationTitle: {
    color: "#a82d36",

    fontSize: "1.8rem",
    fontWeight: 950,
  },

  dangerConfirmationText: {
    color: "#bc454d",

    fontSize: "1.74rem",
    fontWeight: 650,
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",

    gap: "9px",

    color: "#8c2830",

    fontSize: "1.76rem",
    lineHeight: 1.45,
    fontWeight: 750,

    cursor: "pointer",
  },

  checkbox: {
    width: "17px",
    height: "17px",
    flexShrink: 0,

    marginTop: "1px",
  },

  errorBox: {
    display: "flex",
    alignItems: "center",

    gap: "9px",

    padding: "10px 12px",

    color: "#991b1b",
    background: "#fef2f2",

    border:
      "1px solid #f5b8b8",

    borderRadius: "10px",

    fontSize: "1.76rem",
    fontWeight: 750,
  },

  footer: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  minWidth: 0,

  gap: "16px",

  padding: "14px 19px",
  boxSizing: "border-box",

  overflow: "hidden",

  background:
    "linear-gradient(180deg, #fbfdff, #f5f9fd)",

  borderTop:
    "1px solid #d8e6f2",
},

  footerNotice: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    color: "#637c97",

    fontSize: "1.6rem",
    fontWeight: 700,
  },

  footerActions: {
    display: "flex",
    alignItems: "center",

    gap: "9px",
  },

  cancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "42px",

    padding: "0 15px",

    color: "#285477",
    background: "#ffffff",

    border:
      "1px solid #c5d7e7",

    borderRadius: "10px",

    boxShadow:
      "0 4px 10px rgba(35, 76, 119, 0.07)",

    fontFamily: "inherit",
    fontSize: "1.82rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  submitButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    minWidth: "160px",
    minHeight: "42px",

    padding: "0 17px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #d88a12, #e69a23)",

    border:
      "1px solid #c97d0c",

    borderRadius: "10px",

    boxShadow:
      "0 7px 16px rgba(209, 125, 8, 0.2)",

    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  submitButtonDanger: {
    background:
      "linear-gradient(135deg, #d43f48, #e6545c)",

    borderColor: "#c7353e",

    boxShadow:
      "0 7px 16px rgba(210, 63, 63, 0.2)",
  },

  disabledButton: {
    opacity: 0.45,
    boxShadow: "none",
    cursor: "not-allowed",
  },

  disabledControl: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

export default styles;