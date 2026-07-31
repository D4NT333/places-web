const styles = {
  rightPanel: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: 0,

    padding: "48px",
    boxSizing: "border-box",

    overflow: "hidden",

    background: `
      radial-gradient(
        circle 330px at 92% 8%,
        rgba(103, 168, 242, 0.36) 0%,
        transparent 72%
      ),
      radial-gradient(
        circle 300px at 6% 94%,
        rgba(85, 198, 90, 0.24) 0%,
        transparent 72%
      ),
      linear-gradient(
        145deg,
        #0b315f 0%,
        #14518f 48%,
        #2176e5 100%
      )
    `,
  },

  blurCircleOne: {
    position: "absolute",
    top: "-80px",
    right: "-80px",

    width: "300px",
    height: "300px",

    background:
      "rgba(103, 168, 242, 0.26)",

    borderRadius: "999px",

    filter: "blur(8px)",
  },

  blurCircleTwo: {
    position: "absolute",
    bottom: "-90px",
    left: "-80px",

    width: "280px",
    height: "280px",

    background:
      "rgba(85, 198, 90, 0.2)",

    borderRadius: "999px",

    filter: "blur(10px)",
  },

  gridDecoration: {
    position: "absolute",
    top: "42px",
    right: "38px",

    width: "120px",
    height: "82px",

    opacity: 0.36,

    backgroundImage:
      "radial-gradient(rgba(255,255,255,.72) 1.5px, transparent 1.5px)",

    backgroundSize: "10px 10px",
  },

  previewCard: {
    position: "relative",
    zIndex: 2,

    width: "100%",
    maxWidth: "430px",
    minHeight: "505px",

    padding: "25px",
    boxSizing: "border-box",

    background:
      "rgba(255, 255, 255, 0.14)",

    border:
      "1px solid rgba(255, 255, 255, 0.26)",

    borderRadius: "24px",

    boxShadow:
      "0 28px 75px rgba(4, 23, 45, 0.32)",

    backdropFilter: "blur(19px)",
  },

  previewHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "14px",

    marginBottom: "30px",
  },

  windowDots: {
    display: "flex",
    alignItems: "center",

    gap: "7px",
  },

  previewDotBlue: {
    width: "10px",
    height: "10px",

    background: "#67a8f2",

    borderRadius: "999px",
  },

  previewDotGreen: {
    width: "10px",
    height: "10px",

    background: "#55c65a",

    borderRadius: "999px",
  },

  previewDotViolet: {
    width: "10px",
    height: "10px",

    background: "#bba1f5",

    borderRadius: "999px",
  },

  secureBadge: {
    minHeight: "29px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    padding: "0 9px",

    color: "#ffffff",
    background:
      "rgba(255,255,255,0.12)",

    border:
      "1px solid rgba(255,255,255,0.22)",

    borderRadius: "999px",

    fontSize: "0.66rem",
    fontWeight: 850,
  },

  previewContent: {
    marginBottom: "25px",
  },

  previewLabel: {
    display: "flex",
    alignItems: "center",

    gap: "6px",

    marginBottom: "10px",

    color:
      "rgba(255,255,255,0.76)",

    fontSize: "0.7rem",
    fontWeight: 900,

    textTransform: "uppercase",
    letterSpacing: "0.055em",
  },

  previewTitle: {
    margin: 0,

    color: "#ffffff",

    fontSize: "2.15rem",
    fontWeight: 950,
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
  },

  previewDescription: {
    margin: "14px 0 0",

    color:
      "rgba(255,255,255,0.76)",

    fontSize: "0.82rem",
    fontWeight: 600,
    lineHeight: 1.6,
  },

  statsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "11px",

    marginBottom: "13px",
  },

  pendingCard: {
    display: "flex",
    alignItems: "center",

    gap: "9px",

    padding: "12px",

    color: "#ffffff",
    background:
      "rgba(103, 168, 242, 0.17)",

    border:
      "1px solid rgba(170, 211, 255, 0.24)",

    borderRadius: "13px",
  },

  reportCard: {
    display: "flex",
    alignItems: "center",

    gap: "9px",

    padding: "12px",

    color: "#ffffff",
    background:
      "rgba(255, 196, 102, 0.14)",

    border:
      "1px solid rgba(255, 211, 144, 0.22)",

    borderRadius: "13px",
  },

  pendingIcon: {
    width: "42px",
    height: "42px",
    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#beddff",
    background:
      "rgba(255,255,255,0.11)",

    border:
      "1px solid rgba(255,255,255,0.16)",

    borderRadius: "10px",
  },

  reportIcon: {
    width: "42px",
    height: "42px",
    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#ffdc9e",
    background:
      "rgba(255,255,255,0.11)",

    border:
      "1px solid rgba(255,255,255,0.16)",

    borderRadius: "10px",
  },

  statText: {
    display: "flex",
    flexDirection: "column",

    minWidth: 0,

    gap: "3px",
  },

  statValue: {
    color: "#ffffff",

    fontSize: "1.45rem",
    fontWeight: 950,
    lineHeight: 1,
  },

  statLabel: {
    color:
      "rgba(255,255,255,0.7)",

    fontSize: "0.64rem",
    fontWeight: 750,
    lineHeight: 1.25,
  },

  activityCard: {
    padding: "14px",

    background:
      "rgba(255,255,255,0.1)",

    border:
      "1px solid rgba(255,255,255,0.18)",

    borderRadius: "14px",
  },

  activityHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "12px",

    marginBottom: "13px",
  },

  activityTitle: {
    display: "flex",
    alignItems: "center",

    gap: "6px",

    color: "#ffffff",

    fontSize: "0.74rem",
    fontWeight: 900,
  },

  livePill: {
    minHeight: "25px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "0 8px",

    color: "#baf1c9",
    background:
      "rgba(85, 198, 90, 0.14)",

    border:
      "1px solid rgba(148, 231, 169, 0.22)",

    borderRadius: "999px",

    fontSize: "0.61rem",
    fontWeight: 900,
  },

  activityList: {
    display: "grid",

    gap: "9px",
  },

  activityRow: {
    display: "flex",
    alignItems: "center",

    gap: "8px",

    minHeight: "38px",

    padding: "0 9px",

    color:
      "rgba(255,255,255,0.72)",

    background:
      "rgba(255,255,255,0.08)",

    borderRadius: "9px",
  },

  activityDotBlue: {
    width: "8px",
    height: "8px",
    flexShrink: 0,

    background: "#8fc4ff",

    borderRadius: "999px",
  },

  activityDotGreen: {
    width: "8px",
    height: "8px",
    flexShrink: 0,

    background: "#80dc88",

    borderRadius: "999px",
  },

  activityDotViolet: {
    width: "8px",
    height: "8px",
    flexShrink: 0,

    background: "#c1a8ff",

    borderRadius: "999px",
  },

  activityBarLarge: {
    flex: 1,
    height: "8px",

    background:
      "rgba(255,255,255,0.25)",

    borderRadius: "999px",
  },

  activityBarMedium: {
    width: "72%",
    height: "8px",

    background:
      "rgba(255,255,255,0.2)",

    borderRadius: "999px",
  },

  activityBarSmall: {
    width: "56%",
    height: "8px",

    background:
      "rgba(255,255,255,0.17)",

    borderRadius: "999px",
  },

  bottomMessage: {
    position: "absolute",
    right: "28px",
    bottom: "24px",
    left: "28px",
    zIndex: 3,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    color:
      "rgba(255,255,255,0.65)",

    fontSize: "1.67rem",
    fontWeight: 750,
  },
};

export default styles;