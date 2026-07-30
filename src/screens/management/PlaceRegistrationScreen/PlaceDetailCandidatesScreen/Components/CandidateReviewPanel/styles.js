const styles = {
  reviewCard: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
    padding: "15px",
    boxSizing: "border-box",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,252,255,0.98))",
    border: "1px solid #cbdced",
    borderRadius: "18px",
    boxShadow:
      "0 16px 38px rgba(29, 70, 115, 0.13)",
  },

  panelHeader: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    padding: "3px 2px 2px",
  },

  panelTitleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    flexShrink: 0,
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "12px",
  },

  panelHeading: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  panelTitle: {
    margin: 0,
    color: "#12345f",
    fontSize: "2rem",
    fontWeight: 900,
  },

  panelSubtitle: {
    margin: 0,
    color: "#607b98",
    fontSize: "1.4rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },

  reviewTopGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",
    gap: "10px",
  },

  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minHeight: "72px",
    padding: "10px 12px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, #ffffff, #f7fbff)",
    border: "1px solid #d4e2ef",
    borderRadius: "12px",
  },

  infoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    flexShrink: 0,
    borderRadius: "10px",
  },

  infoIconBlue: {
    color: "#2176e5",
    background: "#eaf4ff",
  },

  infoIconCyan: {
    color: "#1184a0",
    background: "#eaf9fc",
  },

  infoIconOrange: {
    color: "#c47a00",
    background: "#fff5db",
  },

  infoContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    minWidth: 0,
  },

  infoLabel: {
    color: "#66809c",
    fontSize: "1.7rem",
    fontWeight: 850,
    textTransform: "uppercase",
  },

  infoValue: {
    overflow: "hidden",
    fontSize: "1.6rem",
    fontWeight: 900,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  infoValueBlue: {
    color: "#176fdc",
  },

  infoValueCyan: {
    color: "#126e86",
  },

  infoValueOrange: {
    color: "#aa6900",
  },

  formSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "14px",
    background: "#ffffff",
    border: "1px solid #d5e2ef",
    borderRadius: "14px",
  },

  sectionTitleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },

  sectionTitleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "3px",
  },

  blueSectionIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "43px",
    height: "43px",
    flexShrink: 0,
    color: "#2176e5",
    background: "#eaf4ff",
    borderRadius: "10px",
  },

  greenSectionIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "43px",
    height: "43px",
    flexShrink: 0,
    color: "#0b9851",
    background: "#eafaf2",
    borderRadius: "10px",
  },

  orangeSectionIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "43px",
    height: "43px",
    flexShrink: 0,
    color: "#c77900",
    background: "#fff4d8",
    borderRadius: "10px",
  },

  cyanSectionIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "43px",
    height: "43px",
    flexShrink: 0,
    color: "#12839e",
    background: "#eaf9fc",
    borderRadius: "10px",
  },

  sectionTitle: {
    margin: 0,
    color: "#14345f",
    fontSize: "1.8rem",
    fontWeight: 900,
  },

  sectionDescription: {
    margin: "2px 0 0",
    color: "#69819b",
    fontSize: "1.4rem",
    fontWeight: 600,
  },

  fieldLabel: {
    display: "block",
    margin: "2px 0 -3px",
    color: "#17365d",
    fontSize: "1.6rem",
    fontWeight: 900,
  },

  smallLabel: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    margin: "7px 0 -2px",
    color: "#536f8e",
    fontSize: "1.6rem",
    fontWeight: 900,
  },

  input: {
    width: "100%",
    minHeight: "45px",
    padding: "0 13px",
    boxSizing: "border-box",
    color: "#12345f",
    background: "#fbfdff",
    border: "1px solid #c8d8e8",
    borderRadius: "10px",
    outline: "none",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 700,
  },

  textarea: {
    width: "100%",
    minHeight: "120px",
    padding: "12px 13px",
    boxSizing: "border-box",
    resize: "vertical",
    color: "#12345f",
    background: "#fbfdff",
    border: "1px solid #c8d8e8",
    borderRadius: "10px",
    outline: "none",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.5,
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minHeight: "38px",
    padding: "0 12px",
    color: "#176fdc",
    background:
      "linear-gradient(135deg, #edf6ff, #ffffff)",
    border: "1px solid #acd0f8",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  descriptionOptions: {
    display: "grid",
    gap: "8px",
    paddingTop: "2px",
  },

  descriptionOption: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "11px 12px",
    color: "#536f8e",
    background:
      "linear-gradient(135deg, #f7fbff, #ffffff)",
    border: "1px solid #d4e2ef",
    borderRadius: "11px",
    textAlign: "left",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    lineHeight: 1.4,
    cursor: "pointer",
  },

  chipGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  choiceChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    minHeight: "35px",
    padding: "0 11px",
    color: "#385574",
    background: "#ffffff",
    border: "1px solid #cddae7",
    borderRadius: "999px",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  choiceChipActive: {
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    borderColor: "#2176e5",
    boxShadow:
      "0 5px 12px rgba(33, 118, 229, 0.2)",
  },

  choiceChipActiveGreen: {
    color: "#087e48",
    background:
      "linear-gradient(135deg, #e7f9ef, #f7fffb)",
    borderColor: "#aee1c6",
  },

  choiceChipActivePurple: {
    color: "#7040ce",
    background:
      "linear-gradient(135deg, #f2ebff, #fbf8ff)",
    borderColor: "#d5c0f5",
  },

  choiceChipActiveOrange: {
    color: "#a76600",
    background:
      "linear-gradient(135deg, #fff4d3, #fffaf0)",
    borderColor: "#edcb75",
  },

  twoColumnSection: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",
    gap: "11px",
  },

  readonlyMini: {
    padding: "10px 11px",
    color: "#607993",
    background:
      "linear-gradient(135deg, #f5f9fd, #ffffff)",
    border: "1px solid #d6e2ed",
    borderRadius: "9px",
    fontSize: "1.8rem",
    fontWeight: 750,
  },

  loadingBox: {
    padding: "12px",
    color: "#176fdc",
    background: "#edf6ff",
    border: "1px solid #c8def8",
    borderRadius: "10px",
    fontSize: "1.8rem",
    fontWeight: 800,
  },

  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 12px",
    color: "#c33b3b",
    background: "#fff0f0",
    border: "1px solid #ffc0c0",
    borderRadius: "10px",
    fontSize: "1.6rem",
    fontWeight: 800,
  },

  select: {
    width: "100%",
    minHeight: "45px",
    padding: "0 12px",
    boxSizing: "border-box",
    color: "#12345f",
    background: "#ffffff",
    border: "1px solid #c8d8e8",
    borderRadius: "10px",
    outline: "none",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 700,
    cursor: "pointer",
  },

  googleStatsBox: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    padding: "12px 14px",
    color: "#715000",
    background:
      "linear-gradient(135deg, #fff9e7, #fffdf6)",
    border: "1px solid #efd18b",
    borderRadius: "13px",
  },

  ratingIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "46px",
    height: "46px",
    flexShrink: 0,
    color: "#d18a00",
    background: "#fff2c9",
    borderRadius: "10px",
  },

  ratingText: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    fontSize: "1.6rem",
    fontWeight: 750,
  },
};

export default styles;