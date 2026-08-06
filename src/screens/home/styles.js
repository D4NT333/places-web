const cardBase = {
  background:
    "linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92))",
  border: "1px solid rgba(98, 133, 165, 0.24)",
  borderRadius: "18px",
  boxShadow:
    "0 12px 30px rgba(44, 94, 146, 0.09)",
};

const buttonReset = {
  appearance: "none",
  fontFamily: "inherit",
  cursor: "pointer",
  outline: "none",
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1900px",
    margin: "0 auto",
    paddingBottom: "1.5rem",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 2.1fr) minmax(330px, 0.75fr)",
    gap: "1.25rem",
    alignItems: "stretch",
  },

  heroCard: {
    ...cardBase,
    minHeight: "560px",
    position: "relative",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 1.15fr) minmax(300px, 0.85fr)",
    alignItems: "center",
    padding:
      "clamp(2rem, 3.5vw, 4.5rem)",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  heroTitleRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "1.35rem",
  },

  heroIconContainer: {
    width: "84px",
    height: "84px",
    flexShrink: 0,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(145deg, #F4F9FF, #E4F0FF)",
  },

  heroIcon: {
    color: "#1677E8",
  },

  heroTitle: {
    margin: 0,
    maxWidth: "760px",
    color: "#09264E",
    fontSize:
      "clamp(2.1rem, 2.8vw, 3.8rem)",
    lineHeight: 1.08,
    fontWeight: 800,
    letterSpacing: "-0.035em",
  },

  heroDescription: {
    maxWidth: "670px",
    margin: "2rem 0 0 5.95rem",
    color: "#415B79",
    fontSize:
      "clamp(1rem, 1.2vw, 1.8rem)",
    lineHeight: 1.65,
  },

  primaryButton: {
    ...buttonReset,
    minHeight: "60px",
    marginTop: "2.75rem",
    marginLeft: "5.95rem",
    padding: "0 1.8rem",
    border: "none",
    borderRadius: "11px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    background:
      "linear-gradient(135deg, #1677E8, #236FE3)",
    color: "#FFFFFF",
    fontSize: "2.2rem",
    fontWeight: 700,
    boxShadow:
      "0 10px 22px rgba(35, 111, 227, 0.24)",
  },

  illustrationContainer: {
    position: "relative",
    minHeight: "360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  illustrationBlob: {
    position: "absolute",
    width: "92%",
    height: "78%",
    borderRadius: "48% 52% 44% 56%",
    background:
      "linear-gradient(145deg, rgba(235, 245, 255, 0.88), rgba(218, 235, 255, 0.72))",
    transform: "rotate(-4deg)",
  },

  illustrationDots: {
    position: "absolute",
    top: "5%",
    right: "15%",
    width: "108px",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "7px",
    opacity: 0.58,
  },

  illustrationDot: {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    backgroundColor: "#6FABF2",
  },

  dashboardPreview: {
    position: "relative",
    zIndex: 2,
    width: "260px",
    height: "205px",
    overflow: "hidden",
    borderRadius: "12px",
    backgroundColor:
      "rgba(255, 255, 255, 0.92)",
    border:
      "1px solid rgba(73, 135, 207, 0.2)",
    boxShadow:
      "0 24px 45px rgba(43, 106, 174, 0.18)",
    transform: "rotate(3deg)",
  },

  dashboardPreviewHeader: {
    height: "31px",
    padding: "0 13px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
    background:
      "linear-gradient(90deg, #6FA7ED, #8EB9EF)",
  },

  previewHeaderLine: {
    width: "45px",
    height: "5px",
    borderRadius: "999px",
    backgroundColor:
      "rgba(255, 255, 255, 0.65)",
  },

  previewHeaderLineSmall: {
    width: "21px",
    height: "5px",
    borderRadius: "999px",
    backgroundColor:
      "rgba(255, 255, 255, 0.4)",
  },

  dashboardPreviewBody: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  previewTopRow: {
    display: "flex",
    alignItems: "center",
    gap: "17px",
  },

  previewBottomRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: "21px",
  },

  previewPieContainer: {
    width: "55px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  previewPie: {
    color: "#A5C7ED",
  },

  previewTextLines: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  previewTextLine: {
    width: "100%",
    height: "8px",
    borderRadius: "999px",
    backgroundColor: "#E2EEF9",
  },

  previewTextLineSmall: {
    width: "64%",
    height: "8px",
    borderRadius: "999px",
    backgroundColor: "#EDF4FB",
  },

  previewBars: {
    width: "70px",
    height: "72px",
    display: "flex",
    alignItems: "flex-end",
    gap: "7px",
  },

  previewBar: {
    width: "15px",
    borderRadius: "4px 4px 2px 2px",
    background:
      "linear-gradient(180deg, #76A9EB, #4D8DDF)",
  },

  checkBadge: {
    position: "absolute",
    zIndex: 3,
    right: "7%",
    bottom: "14%",
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(145deg, #97D98D, #75C773)",
    color: "#FFFFFF",
    boxShadow:
      "0 12px 28px rgba(92, 177, 89, 0.24)",
  },

  quickAccessPanel: {
    ...cardBase,
    minHeight: "560px",
    padding: "2.4rem 2rem",
    display: "flex",
    flexDirection: "column",
  },

  quickAccessHeader: {
    marginBottom: "1.25rem",
  },

  quickAccessEyebrow: {
    display: "block",
    marginBottom: "0.35rem",
    color: "#1677E8",
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },

  quickAccessTitle: {
    margin: 0,
    color: "#09264E",
    fontSize: "2.6rem",
    fontWeight: 800,
  },

  quickAccessSubtitle: {
    margin: "0.55rem 0 0",
    color: "#647A93",
    fontSize: "1.8rem",
    lineHeight: 1.5,
  },

  quickAccessList: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  quickAccessButton: {
    ...buttonReset,
    flex: 1,
    width: "100%",
    minHeight: "96px",
    padding: "1rem 0.25rem",
    border: "none",
    borderBottom:
      "1px solid rgba(101, 126, 151, 0.18)",
    display: "grid",
    gridTemplateColumns:
      "52px minmax(0, 1fr) auto",
    alignItems: "center",
    gap: "0.9rem",
    backgroundColor: "transparent",
    textAlign: "left",
  },

  quickAccessIconContainer: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF5FF",
  },

  quickAccessIcon: {
    color: "#1476E8",
  },

  quickAccessContent: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  quickAccessLabel: {
    color: "#142E50",
    fontSize: "2.2rem",
    fontWeight: 750,
  },

  quickAccessDescription: {
    color: "#718398",
    fontSize: "1.6rem",
    lineHeight: 1.35,
  },

  quickAccessChevron: {
    color: "#0D294D",
    flexShrink: 0,
  },
};

export default styles;