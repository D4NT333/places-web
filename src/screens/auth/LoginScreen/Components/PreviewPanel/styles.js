const styles = {
  rightPanel: {
    position: "relative",
    background:
      "linear-gradient(155deg, #171717 0%, #302617 58%, #B7791F 130%)",
    padding: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  blurCircleOne: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 198, 91, 0.22)",
    top: 60,
    right: -70,
    filter: "blur(8px)",
  },

  blurCircleTwo: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    bottom: -70,
    left: -50,
    filter: "blur(10px)",
  },

  previewCard: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: 390,
    minHeight: 430,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.13)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 28px 70px rgba(0,0,0,0.32)",
    backdropFilter: "blur(18px)",
    padding: 26,
    boxSizing: "border-box",
  },

  previewHeader: {
    display: "flex",
    gap: 8,
    marginBottom: 44,
  },

  previewDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.58)",
  },

  previewContent: {
    marginBottom: 28,
  },

  previewLabel: {
    margin: "0 0 10px",
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
    fontWeight: 750,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  previewTitle: {
    margin: 0,
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 1.05,
    fontWeight: 900,
    letterSpacing: -1,
  },

  previewDescription: {
    margin: "14px 0 0",
    color: "rgba(255,255,255,0.72)",
    fontSize: 14,
    lineHeight: 1.6,
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 26,
  },

  statCard: {
    borderRadius: 18,
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.14)",
  },

  statValue: {
    display: "block",
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 900,
    lineHeight: 1,
  },

  statLabel: {
    display: "block",
    marginTop: 8,
    color: "rgba(255,255,255,0.68)",
    fontSize: 12,
    fontWeight: 700,
  },

  fakeList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  fakeRow: {
    height: 38,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.17)",
  },

  fakeRowShort: {
    height: 38,
    width: "72%",
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.11)",
  },
};

export default styles;