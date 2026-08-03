const styles = {
  overlay: {
    position: "fixed",
    inset: 0,

    zIndex: 1400,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "24px",

    boxSizing: "border-box",

    background:
      "rgba(7, 34, 67, 0.64)",

    backdropFilter:
      "blur(8px)",
  },

  modal: {
    width: "min(760px, 100%)",
    maxHeight:
      "calc(100vh - 48px)",

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",

    background:
      "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

    border:
      "1px solid rgba(174, 207, 238, 0.98)",

    borderRadius: "25px",

    boxShadow:
      "0 32px 95px rgba(5, 30, 59, 0.34)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent:
      "space-between",

    gap: "22px",

    padding: "23px 25px",

    background:
      "linear-gradient(135deg, #eff7ff 0%, #f9fcff 54%, #f5efff 100%)",

    borderBottom:
      "1px solid #d5e6f5",
  },

  headerLabel: {
    display: "block",

    marginBottom: "5px",

    color: "#2176e5",

    fontSize: "0.72rem",

    fontWeight: 950,

    textTransform: "uppercase",

    letterSpacing: "0.075em",
  },

  title: {
    margin: 0,

    color: "#082b59",

    fontSize: "1.62rem",

    fontWeight: 950,

    lineHeight: 1.18,

    letterSpacing: "-0.03em",
  },

  userInformation: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "9px",

    marginTop: "11px",
  },

  userName: {
    color: "#315778",

    fontSize: "0.88rem",

    fontWeight: 900,
  },

  statusChip: {
    minHeight: "26px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "2px 9px",

    borderRadius: "999px",

    fontSize: "0.72rem",

    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  activeStatusChip: {
    color: "#078251",

    background: "#eafaf2",

    border:
      "1px solid #9edcbe",
  },

  warnedStatusChip: {
    color: "#b96c08",

    background: "#fff7e8",

    border:
      "1px solid #f0c97b",
  },

  blockedStatusChip: {
    color: "#c6333f",

    background: "#fff0f1",

    border:
      "1px solid #f0aeb4",
  },

  pendingStatusChip: {
    color: "#1764c7",

    background: "#edf5ff",

    border:
      "1px solid #abcff5",
  },

  closeButton: {
    width: "42px",
    height: "42px",

    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 0,

    color: "#315778",

    background:
      "rgba(255, 255, 255, 0.92)",

    border:
      "1px solid #b9d3ec",

    borderRadius: "13px",

    boxShadow:
      "0 8px 19px rgba(31, 73, 116, 0.11)",

    fontSize: "1.5rem",

    fontWeight: 500,

    lineHeight: 1,

    cursor: "pointer",

    transition:
      "transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
  },

  form: {
    minHeight: 0,

    display: "flex",
    flexDirection: "column",
  },

  body: {
    display: "flex",
    flexDirection: "column",

    gap: "21px",

    padding: "24px 25px",

    overflowY: "auto",

    scrollbarWidth: "thin",

    scrollbarColor:
      "#b8d4ee transparent",
  },

  section: {
    display: "flex",
    flexDirection: "column",

    gap: "9px",
  },

  sectionTitle: {
    margin: 0,

    color: "#163d68",

    fontSize: "0.95rem",

    fontWeight: 950,
  },

  sanctionTypeGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "13px",
  },

  sanctionTypeButton: {
    minHeight: "118px",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    gap: "9px",

    padding: "17px",

    color: "#315778",

    background:
      "linear-gradient(145deg, #ffffff, #f8fbff)",

    border:
      "1px solid #cbddee",

    borderRadius: "17px",

    boxShadow:
      "0 8px 20px rgba(31, 73, 116, 0.065)",

    fontFamily: "inherit",

    textAlign: "left",

    cursor: "pointer",

    transition:
      "transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease, background 150ms ease",
  },

  warningButtonActive: {
    color: "#155fb8",

    background:
      "linear-gradient(145deg, #edf6ff, #e6f2ff)",

    border:
      "2px solid #2176e5",

    boxShadow:
      "0 0 0 4px rgba(33, 118, 229, 0.09), 0 12px 24px rgba(33, 118, 229, 0.12)",
  },

  permanentButtonActive: {
    color: "#b72d3a",

    background:
      "linear-gradient(145deg, #fff1f2, #ffe9eb)",

    border:
      "2px solid #dc4a57",

    boxShadow:
      "0 0 0 4px rgba(220, 74, 87, 0.09), 0 12px 24px rgba(220, 74, 87, 0.12)",
  },

  sanctionTypeName: {
    color: "inherit",

    fontSize: "0.97rem",

    fontWeight: 950,
  },

  sanctionTypeDescription: {
    color: "#647c97",

    fontSize: "0.8rem",

    fontWeight: 700,

    lineHeight: 1.48,
  },

  label: {
    color: "#315778",

    fontSize: "0.86rem",

    fontWeight: 900,
  },

  select: {
    width: "100%",
    minHeight: "47px",

    padding: "0 13px",

    boxSizing: "border-box",

    color: "#153b66",

    background: "#ffffff",

    border:
      "1px solid #bdd5ec",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(31, 73, 116, 0.05)",

    outline: "none",

    fontFamily: "inherit",

    fontSize: "0.84rem",

    fontWeight: 800,

    cursor: "pointer",
  },

  textarea: {
    width: "100%",
    minHeight: "135px",

    boxSizing: "border-box",

    resize: "vertical",

    padding: "14px",

    color: "#153b66",

    background: "#ffffff",

    border:
      "1px solid #bdd5ec",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(31, 73, 116, 0.05)",

    fontFamily: "inherit",

    fontSize: "0.84rem",

    fontWeight: 650,

    lineHeight: 1.55,

    outline: "none",
  },

  inputError: {
    border:
      "1px solid #dc4a57",

    boxShadow:
      "0 0 0 3px rgba(220, 74, 87, 0.09)",
  },

  textareaFooter: {
    minHeight: "19px",

    display: "flex",
    alignItems: "center",
    justifyContent:
      "space-between",

    gap: "12px",
  },

  characterCount: {
    marginLeft: "auto",

    color: "#7186a0",

    fontSize: "0.72rem",

    fontWeight: 800,
  },

  errorMessage: {
    margin: 0,

    color: "#b72d3a",

    fontSize: "0.77rem",

    fontWeight: 750,

    lineHeight: 1.4,
  },

  permanentWarningBox: {
    padding: "16px 18px",

    color: "#b72d3a",

    background:
      "linear-gradient(145deg, #fff1f2, #fff7f7)",

    border:
      "1px solid #f0aeb4",

    borderRadius: "15px",

    boxShadow:
      "0 8px 18px rgba(220, 74, 87, 0.07)",

    fontSize: "0.85rem",

    fontWeight: 900,
  },

  warningText: {
    margin: "7px 0 0",

    color: "#c13a46",

    fontSize: "0.8rem",

    fontWeight: 700,

    lineHeight: 1.5,
  },

  confirmationSection: {
    display: "flex",
    flexDirection: "column",

    gap: "9px",

    padding: "15px 16px",

    background:
      "linear-gradient(145deg, #f2f8ff, #f8fbff)",

    border:
      "1px solid #d4e5f6",

    borderRadius: "14px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",

    gap: "10px",

    color: "#536f8d",

    fontSize: "0.8rem",

    fontWeight: 750,

    lineHeight: 1.5,

    cursor: "pointer",
  },

  submitErrorBox: {
    padding: "12px 14px",

    color: "#b72d3a",

    background: "#fff1f2",

    border:
      "1px solid #f0aeb4",

    borderRadius: "12px",

    fontSize: "0.8rem",

    fontWeight: 800,

    lineHeight: 1.45,
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",

    gap: "11px",

    padding: "17px 25px",

    background:
      "rgba(255, 255, 255, 0.98)",

    borderTop:
      "1px solid #d8e8f7",
  },

  cancelButton: {
    minWidth: "118px",
    minHeight: "44px",

    padding: "0 18px",

    color: "#153b66",

    background: "#ffffff",

    border:
      "1px solid #9ebbd8",

    borderRadius: "12px",

    boxShadow:
      "0 7px 16px rgba(31, 73, 116, 0.07)",

    fontFamily: "inherit",

    fontSize: "0.84rem",

    fontWeight: 900,

    cursor: "pointer",
  },

  submitButton: {
    minWidth: "205px",
    minHeight: "44px",

    padding: "0 20px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #2176e5, #1764c7)",

    border: "none",

    borderRadius: "12px",

    boxShadow:
      "0 11px 24px rgba(33, 118, 229, 0.23)",

    fontFamily: "inherit",

    fontSize: "0.84rem",

    fontWeight: 900,

    cursor: "pointer",
  },

  permanentSubmitButton: {
    background:
      "linear-gradient(135deg, #dc4a57, #bd2f3c)",

    border: "none",

    boxShadow:
      "0 11px 24px rgba(220, 74, 87, 0.23)",
  },
};

export default styles;