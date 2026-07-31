const styles = {
  card: {
    position: "relative",

    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,
    height: "100%",

    overflow: "hidden",

    background:
      "rgba(255, 255, 255, 0.93)",

    border:
      "1px solid rgba(190, 215, 242, 0.98)",

    borderRadius: "18px",

    boxShadow:
      "0 14px 34px rgba(31, 73, 116, 0.11)",

    backdropFilter: "blur(12px)",
  },

  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    gap: "18px",

    padding: "17px 18px",

    background:
      "linear-gradient(135deg, rgba(242, 248, 255, 0.98), rgba(255, 255, 255, 0.98) 55%, rgba(242, 252, 247, 0.98))",

    borderBottom:
      "1px solid #d4e4f2",
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",

    gap: "13px",
    minWidth: 0,
  },

  titleIconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "62px",
    height: "62px",
    flexShrink: 0,

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #e9f4ff, #f8fbff)",

    border:
      "1px solid #bad8fa",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(32, 111, 213, 0.13)",
  },

  titleText: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#092f61",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  subtitle: {
    margin: 0,

    color: "#647e9a",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  statusGroup: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexWrap: "wrap",

    gap: "10px",
  },

  statusBlock: {
    display: "flex",
    flexDirection: "column",

    gap: "6px",
  },

  statusHeading: {
    display: "flex",
    alignItems: "center",

    gap: "5px",

    color: "#4f6d8c",
  },

  statusLabel: {
    color: "inherit",

    fontSize: "1.6rem",
    fontWeight: 850,
    lineHeight: 1.2,
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minWidth: "132px",
    minHeight: "34px",

    padding: "0 13px",
    boxSizing: "border-box",

    border:
      "1px solid #9ca3af",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: 1,

    whiteSpace: "nowrap",
  },

  moderateButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    minHeight: "42px",

    padding: "0 17px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #2176e5, #2e8df3)",

    border:
      "1px solid #1b67c7",

    borderRadius: "999px",

    boxShadow:
      "0 7px 16px rgba(33, 118, 229, 0.22)",

    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",

    flex: 1,

    gap: "13px",

    padding: "15px 17px 17px",
    boxSizing: "border-box",
  },

  primaryFields: {
    display: "grid",

    gap: "12px",
  },

  fieldCard: {
    display: "grid",

    gap: "8px",

    padding: "12px",

    background:
      "rgba(255, 255, 255, 0.82)",

    border:
      "1px solid #d5e4f2",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  fieldHeading: {
    display: "flex",
    alignItems: "center",

    gap: "8px",
    minWidth: 0,
  },

  label: {
    color: "#123760",

    fontSize: "2.2rem",
    fontWeight: 900,
    lineHeight: 1.25,
  },

  iconBoxBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "56px",
    height: "56px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#eef6ff",

    border:
      "1px solid #c6defa",

    borderRadius: "11px",
  },

  iconBoxGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#079258",
    background: "#ecfaf3",

    border:
      "1px solid #c1e8d4",

    borderRadius: "11px",
  },

  iconBoxOrange: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "56px",
    height: "56px",
    flexShrink: 0,

    color: "#d17d08",
    background: "#fff6e6",

    border:
      "1px solid #efd29b",

    borderRadius: "11px",
  },

  iconBoxViolet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "46px",
    height: "46px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "11px",
  },

  inputLike: {
    display: "flex",
    alignItems: "center",

    minHeight: "46px",

    padding: "0 13px",
    boxSizing: "border-box",

    color: "#153961",

    background:
      "linear-gradient(135deg, #eef6ff, #f8fbff)",

    border:
      "1px solid #cddff0",

    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 750,

    overflowWrap: "anywhere",
  },

  textAreaLike: {
    minHeight: "78px",

    padding: "13px",
    boxSizing: "border-box",

    color: "#294c71",

    background:
      "linear-gradient(135deg, #eef6ff, #f8fbff)",

    border:
      "1px solid #cddff0",

    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 650,
    lineHeight: 1.55,

    overflowWrap: "anywhere",
    whiteSpace: "pre-wrap",
  },

  infoGrid: {
    display: "grid",

    gridTemplateColumns:
      "1.15fr 0.85fr 0.85fr",

    alignItems: "stretch",

    gap: "12px",
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",

    gap: "8px",
    minWidth: 0,

    padding: "12px",

    background:
      "rgba(255, 255, 255, 0.84)",

    border:
      "1px solid #d5e4f2",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  tagBox: {
    display: "flex",
    alignItems: "center",

    minHeight: "52px",

    padding: "0 13px",
    boxSizing: "border-box",

    color: "#078e4a",
    background:
      "linear-gradient(135deg, #eafaf2, #f7fcf9)",

    border:
      "1px solid #c1e6d2",

    borderRadius: "10px",

    fontSize: "2.2rem",
    fontWeight: 850,
  },

  scoreBox: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",

    gap: "3px",

    minHeight: "52px",

    padding: "8px",

    color: "#176fdc",
    background:
      "linear-gradient(135deg, #edf6ff, #f8fbff)",

    border:
      "1px solid #cbdff3",

    borderRadius: "10px",
  },

  scoreValue: {
    color: "inherit",

    fontSize: "2.4rem",
    fontWeight: 950,
    lineHeight: 1,
  },

  scoreMaximum: {
    color: "#6a84a0",

    fontSize: "2.4rem",
    fontWeight: 750,
  },

  ratingCount: {
    color: "#687f98",

    fontSize: "1.8rem",
    fontWeight: 650,
  },

  classificationGrid: {
    display: "grid",

    gridTemplateColumns:
      "1.25fr 0.75fr",

    gap: "12px",
  },

  classificationCard: {
    display: "grid",

    gap: "8px",
    minWidth: 0,

    padding: "12px",

    background:
      "rgba(255, 255, 255, 0.84)",

    border:
      "1px solid #d5e4f2",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  chipsContent: {
    minHeight: "50px",

    padding: "10px",
    boxSizing: "border-box",

    background:
      "linear-gradient(135deg, #eef6ff, #f8fbff)",

    border:
      "1px solid #cddff0",

    borderRadius: "10px",
  },

  chipsRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "7px",
  },

  chip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "31px",

    padding: "0 11px",

    color: "#176fdc",
    background: "#ffffff",

    border:
      "1px solid #bdd8f5",

    borderRadius: "999px",

    boxShadow:
      "0 3px 8px rgba(37, 91, 151, 0.05)",

    fontSize: "2rem",
    fontWeight: 850,
  },

  approachChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "31px",

    padding: "0 11px",

    color: "#7441d6",
    background: "#ffffff",

    border:
      "1px solid #d5c3f5",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 850,
  },

  emptyChip: {
    display: "inline-flex",
    alignItems: "center",

    minHeight: "31px",

    padding: "0 11px",

    color: "#687f98",
    background: "#f3f7fb",

    border:
      "1px solid #d7e2ec",

    borderRadius: "999px",

    fontSize: "0.8rem",
    fontWeight: 750,
  },

  bottomGrid: {
    display: "grid",

    gridTemplateColumns:
      "0.9fr 1.1fr",

    gap: "12px",
  },

  bottomCard: {
    display: "grid",

    gap: "8px",
    minWidth: 0,

    padding: "12px",

    background:
      "rgba(255, 255, 255, 0.84)",

    border:
      "1px solid #d5e4f2",

    borderRadius: "13px",

    boxShadow:
      "0 5px 14px rgba(38, 79, 120, 0.05)",
  },

  scheduleBox: {
    display: "flex",
    alignItems: "center",

    minHeight: "46px",

    padding: "0 13px",
    boxSizing: "border-box",

    color: "#a96800",
    background:
      "linear-gradient(135deg, #fff7e7, #fffaf2)",

    border:
      "1px solid #efd49b",

    borderRadius: "10px",

    fontSize: "1.8rem",
    fontWeight: 750,

    overflowWrap: "anywhere",
  },

  footerNote: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    padding: "10px 12px",

    color: "#58738f",
    background:
      "rgba(244, 249, 254, 0.9)",

    border:
      "1px solid #d7e5f1",

    borderRadius: "10px",

    fontSize: "0.78rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  statusPillGreen: {
    color: "#078e4a",
    borderColor: "#b9e5ce",
    backgroundColor: "#eafaf2",
  },

  statusPillBlue: {
    color: "#176fdc",
    borderColor: "#b7d6fa",
    backgroundColor: "#eef6ff",
  },

  statusPillYellow: {
    color: "#ad6900",
    borderColor: "#efd18f",
    backgroundColor: "#fff7e7",
  },

  statusPillOrange: {
    color: "#c56713",
    borderColor: "#f1c49c",
    backgroundColor: "#fff2e6",
  },

  statusPillRed: {
    color: "#d23f3f",
    borderColor: "#f5bebe",
    backgroundColor: "#fff0f0",
  },

  statusPillPurple: {
    color: "#7441d6",
    borderColor: "#d9c8f7",
    backgroundColor: "#f5efff",
  },

  statusPillDefault: {
    color: "#5c7189",
    borderColor: "#d0dbe6",
    backgroundColor: "#f1f5f9",
  },
};

export default styles;