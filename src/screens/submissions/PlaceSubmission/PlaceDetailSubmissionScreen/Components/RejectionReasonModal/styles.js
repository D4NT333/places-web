const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1200,

    display: "grid",
    placeItems: "center",

    padding: "24px",

    background:
      "rgba(7, 31, 60, 0.5)",

    backdropFilter: "blur(7px)",
    WebkitBackdropFilter: "blur(7px)",

    boxSizing: "border-box",
  },

  card: {
    position: "relative",

    width: "min(540px, 100%)",

    overflow: "hidden",

    border:
      "1px solid rgba(239, 68, 68, 0.18)",
    borderRadius: "21px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.99),
        rgba(247, 251, 255, 0.97)
      )
    `,

    boxShadow: `
      0 30px 80px rgba(7, 31, 60, 0.28),
      0 10px 30px rgba(239, 68, 68, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,

    boxSizing: "border-box",
  },

  accentLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    height: "5px",

    background: `
      linear-gradient(
        90deg,
        #ef4444,
        #ff7575,
        #f59e0b
      )
    `,
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "18px",
    padding: "24px 25px 20px",

    borderBottom:
      "1px solid rgba(72, 120, 177, 0.13)",

    background: `
      linear-gradient(
        110deg,
        rgba(255, 242, 242, 0.7),
        rgba(255, 255, 255, 0.86) 50%,
        rgba(239, 247, 255, 0.76)
      )
    `,

    boxSizing: "border-box",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,
    gap: "13px",
  },

  headerIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "50px",
    height: "50px",

    border:
      "1px solid rgba(239, 68, 68, 0.2)",
    borderRadius: "15px",

    background:
      "rgba(239, 68, 68, 0.09)",

    color: "#dc3838",
  },

  title: {
    margin: 0,

    color: "#0b2150",

    fontSize: "2rem",
    fontWeight: 900,

    letterSpacing: "-0.02em",
  },

  subtitle: {
    margin: "6px 0 0",

    color: "#687e97",

    fontSize: "1.4rem",
    fontWeight: 600,

    lineHeight: 1.4,
  },

  closeButton: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "37px",
    height: "37px",

    padding: 0,

    border:
      "1px solid rgba(71, 105, 145, 0.19)",
    borderRadius: "11px",

    background:
      "rgba(255, 255, 255, 0.9)",

    color: "#324b69",

    cursor: "pointer",

    boxShadow:
      "0 5px 13px rgba(27, 67, 110, 0.07)",
  },

  content: {
    padding: "23px 25px 24px",

    boxSizing: "border-box",
  },

  reasonSection: {
    marginBottom: "21px",
  },

  sectionLabel: {
    display: "block",

    marginBottom: "9px",

    color: "#102650",

    fontSize: "1.4rem",
    fontWeight: 850,
  },

  reasonChip: {
    display: "inline-flex",
    alignItems: "center",

    minHeight: "39px",

    gap: "8px",
    padding: "7px 13px",

    border:
      "1px solid rgba(239, 68, 68, 0.4)",
    borderRadius: "999px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 241, 241, 0.98),
        rgba(255, 224, 224, 0.92)
      )
    `,

    color: "#ca3030",

    fontSize: "1.4rem",
    fontWeight: 850,

    boxShadow:
      "0 6px 14px rgba(194, 46, 46, 0.09)",
  },

  messageSection: {
    marginBottom: "22px",
  },

  messageHeader: {
    display: "flex",
    alignItems: "center",

    gap: "9px",
    marginBottom: "10px",
  },

  messageIconBox: {
    display: "grid",
    placeItems: "center",

    width: "34px",
    height: "34px",

    border:
      "1px solid rgba(33, 118, 229, 0.16)",
    borderRadius: "10px",

    background:
      "rgba(33, 118, 229, 0.08)",

    color: "#2176e5",
  },

  messageBox: {
    minHeight: "105px",

    padding: "15px 16px",

    border:
      "1px solid rgba(239, 68, 68, 0.24)",
    borderRadius: "13px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 248, 248, 0.98),
        rgba(255, 237, 237, 0.87)
      )
    `,

    color: "#5f2b2b",

    fontSize: "1.4rem",
    fontWeight: 600,

    lineHeight: 1.55,

    overflowWrap: "anywhere",

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.94)",

    boxSizing: "border-box",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  backButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "41px",

    gap: "7px",
    padding: "8px 15px",

    border:
      "1px solid rgba(33, 118, 229, 0.23)",
    borderRadius: "12px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.96),
        rgba(232, 242, 255, 0.93)
      )
    `,

    color: "#174d8d",

    fontFamily: "inherit",
    fontSize: "0.8rem",
    fontWeight: 850,

    cursor: "pointer",

    boxShadow:
      "0 7px 15px rgba(29, 74, 122, 0.09)",
  },
};

export default styles;