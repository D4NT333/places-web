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

    width: "min(820px, 100%)",
    maxHeight: "calc(100dvh - 48px)",

    overflow: "hidden",

    border:
      "1px solid rgba(33, 118, 229, 0.19)",
    borderRadius: "22px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.99),
        rgba(246, 251, 255, 0.97)
      )
    `,

    boxShadow: `
      0 32px 85px rgba(7, 31, 60, 0.3),
      0 10px 30px rgba(33, 118, 229, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.96)
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
        #2176e5,
        #67a8f2,
        #55c65a
      )
    `,
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "18px",
    padding: "24px 26px 20px",

    borderBottom:
      "1px solid rgba(72, 120, 177, 0.13)",

    background: `
      linear-gradient(
        110deg,
        rgba(238, 247, 255, 0.88),
        rgba(255, 255, 255, 0.88) 50%,
        rgba(238, 252, 244, 0.76)
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

    width: "51px",
    height: "51px",

    borderRadius: "15px",
  },

  headerIconBlue: {
    border:
      "1px solid rgba(33, 118, 229, 0.18)",

    background:
      "rgba(33, 118, 229, 0.09)",

    color: "#2176e5",
  },

  headerIconGreen: {
    border:
      "1px solid rgba(18, 168, 92, 0.18)",

    background:
      "rgba(18, 168, 92, 0.09)",

    color: "#0b9c56",
  },

  headerIconOrange: {
    border:
      "1px solid rgba(245, 158, 11, 0.2)",

    background:
      "rgba(245, 158, 11, 0.1)",

    color: "#df8400",
  },

  headerIconViolet: {
    border:
      "1px solid rgba(118, 87, 244, 0.19)",

    background:
      "rgba(118, 87, 244, 0.09)",

    color: "#7657f4",
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

    color: "#667d96",

    fontSize: "1.4rem",
    fontWeight: 600,

    lineHeight: 1.4,
  },

  closeButton: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "48px",
    height: "48px",

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
    maxHeight: "calc(100dvh - 155px)",
    overflowY: "auto",

    padding: "23px 26px 24px",

    boxSizing: "border-box",
  },

  messagePanel: {
    display: "flex",
    alignItems: "flex-start",

    gap: "12px",
    marginBottom: "22px",
    padding: "14px 15px",

    border:
      "1px solid rgba(245, 158, 11, 0.25)",
    borderRadius: "14px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 251, 239, 0.98),
        rgba(255, 242, 211, 0.9)
      )
    `,

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.94)",

    boxSizing: "border-box",
  },

  messageIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "48px",
    height: "48px",

    border:
      "1px solid rgba(245, 158, 11, 0.2)",
    borderRadius: "11px",

    background:
      "rgba(245, 158, 11, 0.1)",

    color: "#dd8200",
  },

  messageContent: {
    minWidth: 0,
  },

  messageLabel: {
    display: "block",

    color: "#78500e",

    fontSize: "1.8rem",
    fontWeight: 850,
  },

  messageText: {
    margin: "4px 0 0",

    color: "#614515",

    fontSize: "1.5rem",
    fontWeight: 600,

    lineHeight: 1.45,
    overflowWrap: "anywhere",
  },

  compareHeader: {
    display: "flex",
    alignItems: "center",

    gap: "11px",
    marginBottom: "15px",
  },

  compareHeaderIcon: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "49px",
    height: "49px",

    border:
      "1px solid rgba(33, 118, 229, 0.16)",
    borderRadius: "11px",

    background:
      "rgba(33, 118, 229, 0.08)",

    color: "#2176e5",
  },

  compareTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "2rem",
    fontWeight: 850,
  },

  compareSubtitle: {
    margin: "3px 0 0",

    color: "#71849b",

    fontSize: "1.2rem",
    fontWeight: 600,
  },

  compareGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "14px",
  },

  column: {
    minWidth: 0,
  },

  columnHeader: {
    display: "flex",
    alignItems: "center",

    gap: "9px",
    marginBottom: "9px",
  },

  oldIconBox: {
    display: "grid",
    placeItems: "center",

    width: "44px",
    height: "44px",

    border:
      "1px solid rgba(239, 68, 68, 0.18)",
    borderRadius: "10px",

    background:
      "rgba(239, 68, 68, 0.08)",

    color: "#db3838",
  },

  newIconBox: {
    display: "grid",
    placeItems: "center",

    width: "44px",
    height: "44px",

    border:
      "1px solid rgba(18, 168, 92, 0.18)",
    borderRadius: "10px",

    background:
      "rgba(18, 168, 92, 0.08)",

    color: "#099850",
  },

  columnTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "1.8rem",
    fontWeight: 850,
  },

  columnHelper: {
    display: "block",
    marginTop: "2px",

    color: "#77899e",

    fontSize: "1.4rem",
    fontWeight: 600,
  },

  valueBox: {
    minHeight: "145px",

    padding: "15px",

    border:
      "1px solid rgba(239, 68, 68, 0.28)",
    borderRadius: "14px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 248, 248, 0.98),
        rgba(255, 235, 235, 0.89)
      )
    `,

    color: "#5e2929",

    fontSize: "1.6rem",
    fontWeight: 650,

    lineHeight: 1.5,
    overflowWrap: "anywhere",
    whiteSpace: "pre-wrap",

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.94)",

    boxSizing: "border-box",
  },

  valueBoxSuccess: {
    minHeight: "145px",

    padding: "15px",

    border:
      "1px solid rgba(18, 168, 92, 0.3)",
    borderRadius: "14px",

    background: `
      linear-gradient(
        145deg,
        rgba(246, 255, 250, 0.98),
        rgba(224, 250, 236, 0.9)
      )
    `,

    color: "#174c38",

    fontSize: "1.6rem",
    fontWeight: 650,

    lineHeight: 1.5,
    overflowWrap: "anywhere",
    whiteSpace: "pre-wrap",

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.94)",

    boxSizing: "border-box",
  },

  photosGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(105px, 1fr))",

    gap: "9px",
  },

  photoBox: {
    display: "grid",
    placeItems: "center",

    width: "100%",
    height: "115px",

    overflow: "hidden",

    border:
      "2px solid rgba(255, 255, 255, 0.88)",
    borderRadius: "11px",

    background: "#eaf2fa",

    boxShadow:
      "0 7px 15px rgba(29, 69, 113, 0.1)",
  },

  photo: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  emptyText: {
    color: "#75889e",

    fontSize: "0.78rem",
    fontWeight: 700,
  },

  closeRow: {
    display: "flex",
    justifyContent: "flex-end",

    paddingTop: "20px",
  },

  bottomCloseButton: {
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
        rgba(255, 255, 255, 0.97),
        rgba(232, 242, 255, 0.93)
      )
    `,

    color: "#174d8d",

    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 850,

    cursor: "pointer",

    boxShadow:
      "0 7px 15px rgba(29, 74, 122, 0.09)",
  },
};

export default styles;