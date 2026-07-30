const styles = {
  screen: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    width: "100%",
    minHeight: "100%",
    padding: "24px 30px 34px",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  },

  headerTextBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: 0,
  },

  titleLine: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "58px",
    height: "58px",
    flexShrink: 0,
    color: "#2176e5",
    background:
      "linear-gradient(145deg, #e8f3ff, #f7fbff)",
    border: "1px solid #c9def8",
    borderRadius: "14px",
    boxShadow:
      "0 7px 18px rgba(33, 118, 229, 0.12)",
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
  },

  title: {
    margin: 0,
    color: "#092b5c",
    fontSize: "3.4rem",
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    maxWidth: "980px",
    margin: "5px 0 0",
    color: "#587493",
    fontSize: "1.9rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "38px",
    padding: "0 13px",
    borderRadius: "999px",
    fontSize: "2rem",
    fontWeight: 900,
  },

  statusPending: {
    color: "#a46500",
    background:
      "linear-gradient(135deg, #fff4cf, #fffaf0)",
    border: "1px solid #f1ce76",
  },

  statusAccepted: {
    color: "#087e48",
    background:
      "linear-gradient(135deg, #e5f9ef, #f5fff9)",
    border: "1px solid #ace1c5",
  },

  statusRejected: {
    color: "#d43b3b",
    background:
      "linear-gradient(135deg, #ffeded, #fff8f8)",
    border: "1px solid #ffbcbc",
  },

  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    width: "fit-content",
    maxWidth: "100%",
    padding: "11px 14px",
    boxSizing: "border-box",
    color: "#c63838",
    background:
      "linear-gradient(135deg, #fff0f0, #fff8f8)",
    border: "1px solid #ffc1c1",
    borderRadius: "11px",
    fontSize: "1.6rem",
    fontWeight: 750,
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "12px",
    flexWrap: "wrap",
  },

  rejectButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "48px",
    padding: "0 19px",
    color: "#d33b3b",
    background:
      "linear-gradient(135deg, #fff5f5, #ffffff)",
    border: "1px solid #ffbcbc",
    borderRadius: "11px",
    boxShadow:
      "0 7px 16px rgba(211, 59, 59, 0.1)",
    fontFamily: "inherit",
    fontSize: "2.2rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  acceptButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "48px",
    padding: "0 20px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    border: "1px solid #1e70dc",
    borderRadius: "11px",
    boxShadow:
      "0 8px 18px rgba(33, 118, 229, 0.22)",
    fontFamily: "inherit",
    fontSize: "2.2rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns:
      "minmax(390px, 0.78fr) minmax(0, 2.22fr)",
    gap: "18px",
    alignItems: "stretch",
    width: "100%",
  },

  footerActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  backButtonBottom: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "46px",
    padding: "0 18px",
    color: "#185fae",
    background: "#ffffff",
    border: "1px solid #bcd4ef",
    borderRadius: "10px",
    boxShadow:
      "0 5px 12px rgba(35, 83, 137, 0.08)",
    fontFamily: "inherit",
    fontSize: "2.2rem",
    fontWeight: 900,
    cursor: "pointer",
  },
};

export default styles;