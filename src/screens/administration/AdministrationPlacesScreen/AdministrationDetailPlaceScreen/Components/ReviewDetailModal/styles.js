const styles = {
backdrop: {
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
    "rgba(22, 48, 79, 0.62)",

  backdropFilter:
    "blur(8px)",
},

  modal: {
    position: "relative",
      display: "grid",

      gridTemplateRows:
    "auto minmax(0, 1fr) auto",
    maxHeight: "calc(100dvh - 48px)",
minHeight: 0,
overflow: "hidden",

    display: "flex",
    flexDirection: "column",

      width:
    "min(1550px, 100%)",
 height: "100%",
  maxHeight: "760px",
  minHeight: 0,
  margin: "auto",
    overflow: "hidden",

    background:
      "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

    border:
      "1px solid rgba(197, 216, 235, 0.98)",

    borderRadius: "20px",

    boxShadow:
      "0 30px 85px rgba(15, 39, 67, 0.34)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    flexShrink: 0,

    gap: "20px",

    padding: "20px 22px",

    background:
      "linear-gradient(135deg, #f3edff 0%, #ffffff 52%, #eef6ff 100%)",

    borderBottom:
      "1px solid #d8e6f2",

    boxShadow:
      "0 5px 15px rgba(31, 73, 116, 0.05)",
  },

  eyebrow: {
    display: "block",

    marginBottom: "5px",

    color: "#7441d6",

    fontSize: "1.6rem",
    fontWeight: 900,

    textTransform: "uppercase",
    letterSpacing: "0.045em",
  },

  title: {
    margin: 0,

    color: "#092f61",

    fontSize: "1.75rem",
    fontWeight: 950,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
  },

  closeButton: {
    display: "grid",
    placeItems: "center",

    width: "44px",
    height: "44px",
    flexShrink: 0,

    padding: 0,

    color: "#17375f",
    background: "#ffffff",

    border:
      "1px solid #c8dbea",

    borderRadius: "12px",

    boxShadow:
      "0 5px 13px rgba(33, 68, 107, 0.1)",

    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 700,
    lineHeight: 1,

    cursor: "pointer",
  },

  content: {
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",
  minWidth: 0,
  minHeight: 0,

  padding: "18px 20px 20px",
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

  stateBox: {
    display: "grid",
    placeItems: "center",

    minHeight: "240px",

    padding: "48px 20px",

    color: "#607a98",

    background:
      "linear-gradient(145deg, #f5f9fd, #ffffff)",

    border:
      "1px solid #d5e4f1",

    borderRadius: "14px",

    textAlign: "center",

    fontSize: "0.88rem",
    fontWeight: 750,
   
  },

  errorBox: {
    padding: "13px 15px",

    color: "#a52c35",
    background:
      "linear-gradient(135deg, #fff0f0, #fff8f8)",

    border:
      "1px solid #f0b9bd",

    borderRadius: "12px",

    fontSize: "0.8rem",
    fontWeight: 750,
    lineHeight: 1.45,
  },

  userSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "18px",

    marginBottom: "14px",
    padding: "13px",

    background:
      "linear-gradient(135deg, #f1f7fd, #ffffff 65%, #f5efff)",

    border:
      "1px solid #cfdfed",

    borderRadius: "14px",

    boxShadow:
      "0 6px 16px rgba(31, 73, 116, 0.06)",
  },

  userIdentity: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
    minWidth: 0,
  },

  userButton: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
    minWidth: 0,

    padding: 0,

    color: "inherit",
    backgroundColor:
      "transparent",

    border: "none",

    fontFamily: "inherit",
    textAlign: "left",

    cursor: "pointer",
  },

  avatar: {
    display: "block",

    width: "88px",
    height: "88px",
    flexShrink: 0,

    objectFit: "cover",

    backgroundColor: "#ffffff",

    border:
      "3px solid #ffffff",

    borderRadius: "999px",

    boxShadow:
      "0 0 0 1px #c3d8ec, 0 6px 15px rgba(31, 72, 112, 0.14)",
  },

  avatarFallback: {
    display: "grid",
    placeItems: "center",

    width: "58px",
    height: "58px",
    flexShrink: 0,

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #eee6ff, #faf8ff)",

    border:
      "3px solid #ffffff",

    borderRadius: "999px",

    boxShadow:
      "0 0 0 1px #d6c4f4, 0 6px 15px rgba(93, 57, 167, 0.13)",

    fontSize: "1rem",
    fontWeight: 950,
  },

  userText: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  userName: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "1.8rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  userNameLink: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "2.2rem",
    fontWeight: 950,

    textOverflow: "ellipsis",
    textDecoration: "underline",
    textDecorationColor: "#8faac5",
    textUnderlineOffset: "4px",

    whiteSpace: "nowrap",
  },

  secondaryText: {
    color: "#687f98",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "102px",
    minHeight: "32px",
    flexShrink: 0,

    padding: "0 11px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "1.8rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  summaryGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",

    gap: "10px",

    marginBottom: "16px",
  },

  summaryBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    minWidth: 0,
    minHeight: "94px",

    gap: "9px",

    padding: "12px",
    boxSizing: "border-box",

    background:
      "linear-gradient(145deg, #f4f9ff, #ffffff)",

    border:
      "1px solid #d1e1ef",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  summaryLabel: {
    color: "#647e98",

    fontSize: "2rem",
    fontWeight: 850,
    lineHeight: 1.35,
  },

  summaryValue: {
    color: "#176fdc",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.1,

    overflowWrap: "anywhere",
  },

  section: {
    marginTop: "14px",
    padding: "14px",

    background:
      "rgba(255, 255, 255, 0.88)",

    border:
      "1px solid #d3e2ef",

    borderRadius: "14px",

    boxShadow:
      "0 6px 16px rgba(31, 73, 116, 0.05)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "14px",

    marginBottom: "10px",
  },

  sectionTitle: {
    margin: "0 0 10px",

    color: "#0b315f",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.25,
  },

  categoryPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "29px",

    padding: "0 10px",

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "999px",

    fontSize: "1.8rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  commentBox: {
    minHeight: "62px",

    padding: "13px",
    boxSizing: "border-box",

    color: "#294c71",

    background:
      "linear-gradient(135deg, #eef6ff, #f8fbff)",

    border:
      "1px solid #cddff0",

    borderRadius: "10px",

    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.55,

    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  emptyAnswers: {
    padding: "22px 18px",

    color: "#647e98",
    background:
      "linear-gradient(135deg, #f7faff, #ffffff)",

    border:
      "1px dashed #b9cee1",

    borderRadius: "11px",

    textAlign: "center",

    fontSize: "1.78rem",
    fontWeight: 650,
  },

  answersList: {
    display: "grid",

    gap: "10px",
  },

  answerCard: {
    padding: "13px",

    background:
      "linear-gradient(135deg, #f8fbff, #ffffff)",

    border:
      "1px solid #d3e2ef",

    borderRadius: "12px",

    boxShadow:
      "0 4px 11px rgba(31, 73, 116, 0.04)",
  },

  answerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "12px",
  },

  questionNumber: {
    color: "#7441d6",

    fontSize: "1.68rem",
    fontWeight: 900,

    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  answerScore: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "50px",
    minHeight: "27px",

    padding: "0 8px",

    color: "#b56d06",
    background: "#fff7e7",

    border:
      "1px solid #efd18f",

    borderRadius: "999px",

    fontSize: "1.72rem",
    fontWeight: 900,
  },

  questionText: {
    margin: "9px 0",

    color: "#17375f",

    fontSize: "1.8rem",
    fontWeight: 750,
    lineHeight: 1.45,
  },

  answerLabel: {
    color: "#607a98",

    fontSize: "1.74rem",
    fontWeight: 650,
  },

  metadataSection: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "10px",

    marginTop: "16px",
    paddingTop: "15px",

    borderTop:
      "1px solid #d7e5f1",
  },

  metadataItem: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",
    minWidth: 0,

    padding: "11px",

    background:
      "linear-gradient(135deg, #f3f8fd, #ffffff)",

    border:
      "1px solid #d4e3f0",

    borderRadius: "10px",
  },

  metadataLabel: {
    color: "#647e98",

    fontSize: "1.8rem",
    fontWeight: 850,

    textTransform: "uppercase",
    letterSpacing: "0.035em",
  },

  metadataValue: {
    color: "#123760",

    fontSize: "1.6rem",
    fontWeight: 900,

    overflowWrap: "anywhere",
  },

  moderationSection: {
    marginTop: "16px",
    padding: "14px",

    color: "#a82d36",

    background:
      "linear-gradient(135deg, #fff0f0, #fff8f8)",

    border:
      "1px solid #f0b9bd",

    borderRadius: "14px",

    boxShadow:
      "0 6px 16px rgba(192, 53, 63, 0.05)",
  },

  moderationHelp: {
    margin: "0 0 12px",

    color: "#b1454d",

    fontSize: "1.76rem",
    fontWeight: 650,
    lineHeight: 1.5,
  },

  reasonInput: {
    width: "100%",
    minHeight: "108px",

    padding: "12px 13px",
    boxSizing: "border-box",

    color: "#17375f",
    background: "#ffffff",

    border:
      "1px solid #e3a7ad",

    borderRadius: "10px",
    outline: "none",

    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.5,

    resize: "vertical",
  },

  reasonMeta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "12px",

    marginTop: "7px",

    color: "#ae454d",

    fontSize: "1.8rem",
    fontWeight: 750,
  },

  moderationError: {
    marginTop: "11px",
    padding: "10px 12px",

    color: "#991b1b",
    background: "#ffffff",

    border:
      "1px solid #efaeb3",

    borderRadius: "9px",

    fontSize: "1.8rem",
    fontWeight: 750,
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    flexShrink: 0,

    gap: "10px",

    padding: "14px 20px",

    background:
      "linear-gradient(180deg, #fbfdff, #f5f9fd)",

    borderTop:
      "1px solid #d8e6f2",
  },

  cancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "104px",
    minHeight: "40px",

    padding: "0 16px",

    color: "#285477",
    background: "#ffffff",

    border:
      "1px solid #c5d7e7",

    borderRadius: "999px",

    boxShadow:
      "0 4px 10px rgba(35, 76, 119, 0.07)",

    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  moderateButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "160px",
    minHeight: "40px",

    padding: "0 17px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #17375f, #0b315f)",

    border:
      "1px solid #092a50",

    borderRadius: "999px",

    boxShadow:
      "0 7px 16px rgba(11, 49, 95, 0.2)",

    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 900,

    cursor: "pointer",
  },
};

export default styles;