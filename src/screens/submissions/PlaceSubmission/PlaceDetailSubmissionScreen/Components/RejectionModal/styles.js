const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1200,

    display: "grid",
    placeItems: "center",

    padding: "24px",

    background: "rgba(7, 31, 60, 0.5)",

    backdropFilter: "blur(7px)",
    WebkitBackdropFilter: "blur(7px)",

    boxSizing: "border-box",
  },

  modal: {
    position: "relative",

    width: "min(610px, 100%)",
    maxHeight: "calc(100dvh - 48px)",

    overflow: "hidden",

    border:
      "1px solid rgba(239, 68, 68, 0.18)",
    borderRadius: "22px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.98),
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
        #ff7070,
        #f59e0b
      )
    `,
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    gap: "18px",
    padding: "25px 26px 20px",

    borderBottom:
      "1px solid rgba(72, 120, 177, 0.13)",

    background: `
      linear-gradient(
        110deg,
        rgba(255, 242, 242, 0.72),
        rgba(255, 255, 255, 0.86) 48%,
        rgba(239, 247, 255, 0.78)
      )
    `,

    boxSizing: "border-box",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,
    gap: "14px",
  },

  headerIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "52px",
    height: "52px",

    border:
      "1px solid rgba(239, 68, 68, 0.2)",
    borderRadius: "15px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 241, 241, 0.98),
        rgba(255, 224, 224, 0.88)
      )
    `,

    color: "#dc3636",

    boxShadow: `
      0 8px 18px rgba(239, 68, 68, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,
  },

  headerText: {
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#0b2150",

    fontSize: "2rem",
    fontWeight: 900,

    lineHeight: 1.15,
    letterSpacing: "-0.02em",
  },

  subtitle: {
    margin: "7px 0 0",

    color: "#657b94",

    fontSize: "1.4rem",
    fontWeight: 600,

    lineHeight: 1.45,
  },

  closeButton: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "58px",
    height: "58px",

    padding: 0,

    border:
      "1px solid rgba(72, 105, 144, 0.18)",
    borderRadius: "12px",

    background:
      "rgba(255, 255, 255, 0.88)",

    color: "#344b68",

    cursor: "pointer",

    boxShadow:
      "0 5px 13px rgba(26, 66, 109, 0.08)",
  },

  content: {
    maxHeight: "calc(100dvh - 180px)",
    overflowY: "auto",

    padding: "24px 26px 25px",

    boxSizing: "border-box",
  },

  formSection: {
    marginBottom: "23px",
  },

  sectionHeading: {
    display: "flex",
    alignItems: "center",

    gap: "11px",
    marginBottom: "13px",
  },

  sectionIconRed: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "36px",
    height: "36px",

    border:
      "1px solid rgba(239, 68, 68, 0.17)",
    borderRadius: "11px",

    background:
      "rgba(239, 68, 68, 0.08)",

    color: "#df3838",
  },

  sectionIconBlue: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "36px",
    height: "36px",

    border:
      "1px solid rgba(33, 118, 229, 0.16)",
    borderRadius: "11px",

    background:
      "rgba(33, 118, 229, 0.08)",

    color: "#2176e5",
  },

  label: {
    margin: 0,

    color: "#102650",

    fontSize: "1.6rem",
    fontWeight: 850,
  },

  fieldHelper: {
    margin: "3px 0 0",

    color: "#71859c",

    fontSize: "1.2rem",
    fontWeight: 600,
  },

  chipsContainer: {
    display: "flex",
    flexWrap: "wrap",

    gap: "9px",
  },

  chip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "38px",

    gap: "7px",
    padding: "7px 12px",

    border:
      "1px solid rgba(77, 117, 163, 0.19)",
    borderRadius: "999px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.96),
        rgba(238, 245, 252, 0.92)
      )
    `,

    color: "#263f61",

    fontFamily: "inherit",
    fontSize: "1.2rem",
    fontWeight: 750,

    cursor: "pointer",

    boxShadow:
      "0 5px 12px rgba(30, 70, 115, 0.06)",

    boxSizing: "border-box",

    transition: `
      color 180ms ease,
      border-color 180ms ease,
      background 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },

  chipSelected: {
    borderColor:
      "rgba(239, 68, 68, 0.58)",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 240, 240, 0.98),
        rgba(255, 220, 220, 0.92)
      )
    `,

    color: "#c92f2f",

    boxShadow: `
      0 0 0 3px rgba(239, 68, 68, 0.08),
      0 7px 16px rgba(180, 43, 43, 0.1)
    `,

    transform: "translateY(-1px)",
  },

  textareaWrapper: {
    overflow: "hidden",

    border:
      "1px solid rgba(33, 118, 229, 0.2)",
    borderRadius: "14px",

    background: `
      linear-gradient(
        145deg,
        rgba(249, 252, 255, 0.98),
        rgba(235, 244, 255, 0.91)
      )
    `,

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.95)",
  },

  textarea: {
    display: "block",

    width: "100%",
    minHeight: "125px",

    padding: "15px 16px",

    border: "none",

    background: "transparent",

    color: "#102650",

    fontFamily: "inherit",
    fontSize: "1.3rem",
    fontWeight: 600,

    lineHeight: 1.55,

    outline: "none",
    resize: "vertical",

    boxSizing: "border-box",
  },

  counter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "9px 14px",

    borderTop:
      "1px solid rgba(33, 118, 229, 0.1)",

    color: "#71839a",

    fontSize: "1.3rem",
    fontWeight: 700,
  },

  counterValid: {
    color: "#078946",
  },

  counterPending: {
    color: "#c97000",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",

    gap: "10px",
    paddingTop: "3px",
  },

  cancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "42px",

    gap: "7px",
    padding: "8px 15px",

    border:
      "1px solid rgba(68, 105, 148, 0.22)",
    borderRadius: "12px",

    background:
      "rgba(255, 255, 255, 0.9)",

    color: "#1d385c",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 800,

    cursor: "pointer",

    boxShadow:
      "0 6px 14px rgba(31, 72, 116, 0.07)",
  },

  submitButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "42px",

    gap: "8px",
    padding: "8px 16px",

    border:
      "1px solid rgba(220, 50, 50, 0.35)",
    borderRadius: "12px",

    background: `
      linear-gradient(
        135deg,
        #f05c5c,
        #dc3434
      )
    `,

    color: "#ffffff",

    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 850,

    cursor: "pointer",

    boxShadow: `
      0 9px 19px rgba(220, 52, 52, 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.22)
    `,
  },

  submitButtonDisabled: {
    borderColor:
      "rgba(148, 163, 184, 0.2)",

    background:
      "linear-gradient(135deg, #cbd4df, #aeb9c7)",

    color: "rgba(255, 255, 255, 0.9)",

    cursor: "not-allowed",

    boxShadow: "none",
  },

  confirmOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 4,

    display: "grid",
    placeItems: "center",

    padding: "22px",

    background:
      "rgba(7, 31, 60, 0.48)",

    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  },

  confirmBox: {
    width: "min(490px, 100%)",

    padding: "25px",

    border:
      "1px solid rgba(245, 158, 11, 0.22)",
    borderRadius: "18px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.99),
        rgba(255, 249, 236, 0.97)
      )
    `,

    textAlign: "center",

    boxShadow:
      "0 24px 55px rgba(7, 31, 60, 0.25)",

    boxSizing: "border-box",
  },

  confirmIconBox: {
    display: "grid",
    placeItems: "center",

    width: "60px",
    height: "60px",

    margin: "0 auto 13px",

    border:
      "1px solid rgba(245, 158, 11, 0.2)",
    borderRadius: "15px",

    background:
      "rgba(245, 158, 11, 0.1)",

    color: "#df8500",
  },

  confirmTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "2rem",
    fontWeight: 900,
  },

  confirmText: {
    margin: "10px 0 20px",

    color: "#5d728b",

    fontSize: "1.4rem",
    fontWeight: 600,

    lineHeight: 1.5,
  },

  confirmActions: {
    display: "flex",
    justifyContent: "center",

    gap: "9px",
  },

  keepButton: {
    minHeight: "40px",

    padding: "8px 14px",

    border:
      "1px solid rgba(33, 118, 229, 0.22)",
    borderRadius: "11px",

    background:
      "rgba(238, 246, 255, 0.92)",

    color: "#1768cf",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 800,

    cursor: "pointer",
  },

  confirmCancelButton: {
    minHeight: "40px",

    padding: "8px 14px",

    border:
      "1px solid rgba(239, 68, 68, 0.25)",
    borderRadius: "11px",

    background:
      "rgba(255, 235, 235, 0.94)",

    color: "#d23838",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 800,

    cursor: "pointer",
  },
};

export default styles;