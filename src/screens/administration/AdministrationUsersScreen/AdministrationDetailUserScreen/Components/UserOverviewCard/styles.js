const styles = {
  card: {
    width: "100%",
    minHeight: "100%",

    display: "flex",
    flexDirection: "column",

    padding: "20px",

    boxSizing: "border-box",

    background:
      "rgba(255, 255, 255, 0.96)",

    border:
      "1px solid rgba(184, 213, 242, 0.96)",

    borderRadius: "20px",

    boxShadow:
      "0 14px 34px rgba(31, 73, 116, 0.11)",

    overflow: "hidden",
  },

  header: {
    paddingBottom: "13px",

    marginBottom: "15px",

    borderBottom:
      "1px solid #e1ecf6",
  },

  heading: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
  },

  headerIcon: {
    width: "60px",
    height: "60px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #f0e8ff, #faf7ff)",

    border:
      "1px solid #d8c7f5",

    borderRadius: "15px",
  },

  title: {
    margin: 0,

    color: "#082b59",

    fontSize: "2.2rem",

    fontWeight: 950,

    letterSpacing: "-0.025em",
  },

  subtitle: {
    margin: "4px 0 0",

    color: "#7186a0",

    fontSize: "1.5rem",

    fontWeight: 700,
  },

  informationGrid: {
    display: "grid",

    gridTemplateColumns:
      "285px minmax(0, 1fr) minmax(220px, 0.8fr)",

    gap: "18px",

    alignItems: "stretch",

    flex: 1,

    marginBottom: "17px",
  },

  identityColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: "7px",

    paddingRight: "17px",

    borderRight:
      "1px solid #e3edf7",

    textAlign: "center",
  },

  photoWrapper: {
    position: "relative",

    width: "142px",
    height: "142px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",

    background: "#eef6ff",

    border:
      "4px solid #ffffff",

    borderRadius: "50%",

    boxShadow:
      "0 0 0 1px #b8d5f1, 0 12px 25px rgba(31, 83, 138, 0.16)",
  },

  photo: {
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  photoStatus: {
    position: "absolute",

    right: "5px",
    bottom: "7px",

    width: "1px",
    height: "1px",

    background: "#2cc77a",

    border:
      "3px solid #ffffff",

    borderRadius: "50%",
  },

  userName: {
    maxWidth: "330px",

    overflow: "hidden",

    color: "#082b59",

    fontSize: "2rem",

    fontWeight: 950,

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  statusPill: {
    minHeight: "27px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    padding: "2px 9px",

    borderRadius: "999px",

    fontSize: "1.8rem",

    fontWeight: 900,
  },

  statusActive: {
    color: "#078251",

    background: "#eafaf2",

    border:
      "1px solid #9edcbe",
  },

  statusWarned: {
    color: "#b96c08",

    background: "#fff7e8",

    border:
      "1px solid #f0c97b",
  },

  statusBlocked: {
    color: "#c6333f",

    background: "#fff0f1",

    border:
      "1px solid #f0aeb4",
  },

  statusPending: {
    color: "#1764c7",

    background: "#edf5ff",

    border:
      "1px solid #abcff5",
  },

  profilePill: {
    minHeight: "26px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    padding: "2px 9px",

    color: "#637b95",

    background: "#f2f7fc",

    border:
      "1px solid #caddea",

    borderRadius: "999px",

    fontSize: "1.6rem",

    fontWeight: 850,
  },

  metaColumn: {
    minWidth: 0,

    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "12px 15px",

    alignContent: "center",

    paddingRight: "18px",

    borderRight:
      "1px solid #e3edf7",
  },

  metaItem: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",

    gap: "10px",
  },

  metaIcon: {
    width: "60px",
    height: "60px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    color: "#7441d6",

    background: "#f2ebff",

    borderRadius: "12px",
  },

  metaContent: {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",

    gap: "2px",
  },

  metaLabel: {
    color: "#7186a0",

    fontSize: "1.6rem",

    fontWeight: 750,
  },

  metaValue: {
    overflow: "hidden",

    color: "#173e68",

    fontSize: "1.6rem",

    fontWeight: 900,

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  moderationColumn: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",
  },

  moderationCard: {
    width: "100%",

    display: "flex",
    flexDirection: "column",

    gap: "14px",

    padding: "15px",

    boxSizing: "border-box",

    background:
      "linear-gradient(145deg, #f8f4ff, #fcfaff)",

    border:
      "1px solid #e0d3f6",

    borderRadius: "16px",
  },

  moderationHeading: {
    display: "flex",
    alignItems: "center",

    gap: "11px",
  },

  moderationIcon: {
    width: "68px",
    height: "68px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    color: "#7441d6",

    background: "#eee4ff",

    borderRadius: "14px",
  },

  moderationTitle: {
    color: "#173e68",

    fontSize: "2rem",

    fontWeight: 950,
  },

  moderationDescription: {
    margin: "3px 0 0",

    color: "#7186a0",

    fontSize: "1.4rem",

    fontWeight: 700,

    lineHeight: 1.35,
  },

  moderateButton: {
    minHeight: "42px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    padding: "0 15px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #7441d6, #5d2dbd)",

    border: "none",

    borderRadius: "11px",

    boxShadow:
      "0 10px 20px rgba(116, 65, 214, 0.22)",

    fontFamily: "inherit",

    fontSize: "2rem",

    fontWeight: 900,

    cursor: "pointer",
  },

  metricsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",

    gap: "9px",
  },

  metricCard: {
    minWidth: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "10px",

    minHeight: "75px",

    padding: "10px",

    boxSizing: "border-box",

    background: "#ffffff",

    border:
      "1px solid #dbe7f3",

    borderRadius: "14px",
  },

  metricBlue: {
    background:
      "linear-gradient(145deg, #ffffff, #f5f9ff)",
  },

  metricGreen: {
    background:
      "linear-gradient(145deg, #ffffff, #f2fbf7)",
  },

  metricOrange: {
    background:
      "linear-gradient(145deg, #ffffff, #fff8ee)",
  },

  metricRed: {
    background:
      "linear-gradient(145deg, #ffffff, #fff4f5)",
  },

  metricIcon: {
    width: "68px",
    height: "68px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    borderRadius: "14px",
  },

  metricIconBlue: {
    color: "#2176e5",

    background: "#e5f1ff",
  },

  metricIconGreen: {
    color: "#0ca16a",

    background: "#def7eb",
  },

  metricIconOrange: {
    color: "#d9790b",

    background: "#fff0dc",
  },

  metricIconRed: {
    color: "#d33c49",

    background: "#ffe7e9",
  },

  metricContent: {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",
  },

  metricValue: {
    color: "#082b59",

    fontSize: "2.2rem",

    fontWeight: 950,

    lineHeight: 1,
  },

  metricLabel: {
    marginTop: "3px",

    color: "#173e68",

    fontSize: "2rem",

    fontWeight: 900,
  },

  metricSubtitle: {
    marginTop: "1px",

    color: "#7186a0",

    fontSize: "1.8rem",

    fontWeight: 700,
  },
};

export default styles;