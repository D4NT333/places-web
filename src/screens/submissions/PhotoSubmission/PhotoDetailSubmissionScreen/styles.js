const styles = {
  screen: {
    width: "100%",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "18px clamp(18px, 2vw, 32px) 28px",
    boxSizing: "border-box",
  },

  contentArea: {
  width: "100%",
  minWidth: 0,
  display: "grid",
  gridTemplateColumns:
    "minmax(0, 1.65fr) minmax(360px, 0.65fr)",
  alignItems: "stretch",
  gap: 16,
},

  carouselColumn: {
    minWidth: 0,
    display: "flex",
  },

 sideColumn: {
  minWidth: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  gap: 14,
},

  backButtonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },

  backButton: {
    minHeight: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "9px 18px",
    border: "1px solid #B6CAE5",
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    color: "#0A2858",
    fontFamily: "inherit",
    fontSize: 34,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(30, 72, 126, 0.1)",
    backdropFilter: "blur(8px)",
  },

  centerState: {
    width: "min(720px, 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    padding: 22,
    border: "1px solid rgba(195, 213, 237, 0.96)",
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 14px 30px rgba(30, 72, 126, 0.1)",
    boxSizing: "border-box",
  },

  errorIcon: {
    width: 48,
    height: 48,
    display: "grid",
    placeItems: "center",
    border: "1px solid #FFC0C0",
    borderRadius: 14,
    backgroundColor: "#FFF0F0",
    color: "#DC3535",
    fontSize: 38,
    fontWeight: 900,
  },

  stateTitle: {
    margin: 0,
    color: "#071B45",
    fontSize: 32,
    fontWeight: 900,
  },

  stateText: {
    margin: 0,
    color: "#637895",
    fontSize: 34,
    fontWeight: 600,
    lineHeight: 1.5,
  },

  secondaryButton: {
    minHeight: 40,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    padding: "9px 16px",
    border: "1px solid #B8D0EF",
    borderRadius: 999,
    backgroundColor: "#F0F6FF",
    color: "#1768CF",
    fontFamily: "inherit",
    fontSize: 34,
    fontWeight: 900,
    cursor: "pointer",
  },
};

export default styles;