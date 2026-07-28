const cardBackground =
  "rgba(255, 255, 255, 0.93)";

const cardBorder =
  "1px solid rgba(64, 111, 166, 0.14)";

const cardShadow = `
  0 12px 28px rgba(35, 78, 127, 0.11),
  inset 0 1px 0 rgba(255, 255, 255, 0.9)
`;

const styles = {
  screen: {
    position: "relative",

    display: "flex",
    flexDirection: "column",

    width: "100%",
    minHeight: "100%",

    padding: "4px 28px 18px",

    boxSizing: "border-box",
  },

  contentArea: {
    display: "grid",
    gridTemplateColumns:
      "minmax(390px, 38%) 1px minmax(0, 1fr)",

    width: "100%",
    minHeight: 0,

    columnGap: "22px",

    boxSizing: "border-box",
  },

  leftWrapper: {
    minWidth: 0,
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",

    minWidth: 0,

    gap: "14px",
  },

  verticalDivider: {
    width: "1px",
    minHeight: "100%",

    background: `
      linear-gradient(
        180deg,
        transparent,
        rgba(33, 118, 229, 0.24) 10%,
        rgba(85, 198, 90, 0.2) 50%,
        rgba(33, 118, 229, 0.24) 90%,
        transparent
      )
    `,
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    gap: "14px",
  },

  topRow: {
    display: "grid",
    gridTemplateColumns:
      "minmax(360px, 0.9fr) minmax(420px, 1.1fr)",
    alignItems: "stretch",

    width: "100%",

    gap: "14px",
  },

  infoGroup: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "12px",

    padding: "14px",

    border: cardBorder,
    borderRadius: "16px",

    background: cardBackground,

    boxShadow: cardShadow,

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    boxSizing: "border-box",
  },

  decisionPanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    minWidth: 0,

    gap: "18px",
    padding: "14px 16px",

    border: cardBorder,
    borderRadius: "16px",

    background: cardBackground,

    boxShadow: cardShadow,

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    boxSizing: "border-box",
  },

  decisionPanelHeader: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,

    gap: "11px",
  },

  decisionIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "40px",
    height: "40px",

    border: "1px solid rgba(33, 118, 229, 0.15)",
    borderRadius: "12px",

    background: "rgba(33, 118, 229, 0.09)",
    color: "#2176e5",
  },

  decisionTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "1.4rem",
    fontWeight: 800,
  },

  decisionSubtitle: {
    margin: "3px 0 0",

    color: "#6b8099",

    fontSize: "1rem",
    fontWeight: 550,

    whiteSpace: "nowrap",
  },

  detailSection: {
    width: "100%",

    padding: "15px",

    border: cardBorder,
    borderRadius: "16px",

    background: cardBackground,

    boxShadow: cardShadow,

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    boxSizing: "border-box",
  },

  detailSectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    minWidth: 0,

    gap: "12px",
    marginBottom: "11px",
  },

  
  detailSectionHeading: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,

    gap: "10px",
  },

  sectionIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "48px",
    height: "48px",

    borderRadius: "12px",
  },

  sectionIconBlue: {
    border: "1px solid rgba(33, 118, 229, 0.14)",
    background: "rgba(33, 118, 229, 0.08)",
    color: "#2176e5",
  },

  sectionIconGreen: {
    border: "1px solid rgba(18, 168, 92, 0.15)",
    background: "rgba(18, 168, 92, 0.09)",
    color: "#0a9b55",
  },

  sectionIconOrange: {
    border: "1px solid rgba(245, 158, 11, 0.18)",
    background: "rgba(245, 158, 11, 0.1)",
    color: "#e48600",
  },

  sectionIconViolet: {
    border: "1px solid rgba(118, 87, 244, 0.17)",
    background: "rgba(118, 87, 244, 0.09)",
    color: "#7657f4",
  },

  sectionIconRed: {
    border: "1px solid rgba(239, 68, 68, 0.17)",
    background: "rgba(239, 68, 68, 0.08)",
    color: "#e23b3b",
  },

  detailSectionTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "1.6rem",
    fontWeight: 800,

    lineHeight: 1.2,
  },

  detailSectionHelper: {
    overflow: "hidden",

    color: "#687f99",

    fontSize: "1.1rem",
    fontWeight: 600,

    textAlign: "right",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  detailSectionBody: {
    width: "100%",
  },

 descriptionBox: {
  display: "flex",
  alignItems: "flex-start",

  width: "100%",
  minHeight: "92px",

  padding: "15px 17px",

  border: "1px solid rgba(33, 118, 229, 0.16)",
  borderRadius: "11px",

  background: `
    linear-gradient(
      145deg,
      rgba(247, 251, 255, 0.98),
      rgba(232, 242, 255, 0.9)
    )
  `,

  color: "#14294d",

  fontSize: "1.2rem",
  fontWeight: 600,
  lineHeight: 1.55,

  overflow: "auto",

  boxSizing: "border-box",
},

  fieldsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",

    gap: "14px",
  },

  fieldsGridTwo: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "14px",
  },

 simpleFieldBox: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  width: "100%",
  minHeight: "48px",

  padding: "11px 13px",

  border: "1px solid rgba(33, 118, 229, 0.16)",
  borderRadius: "11px",

  background: `
    linear-gradient(
      145deg,
      rgba(247, 251, 255, 0.98),
      rgba(232, 242, 255, 0.9)
    )
  `,

  boxShadow: `
    inset 0 1px 0 rgba(255, 255, 255, 0.85)
  `,

  boxSizing: "border-box",
},

  simpleValue: {
    color: "#102650",

    fontSize: "1.5rem",
    fontWeight: 800,
    lineHeight: 1.35,

    textAlign: "left",

    wordBreak: "break-word",
  },

  simpleValueMuted: {
    color: "#8294a9",

    fontSize: "0.79rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },

  simpleListItem: {
    display: "flex",
    alignItems: "center",

    gap: "8px",

    padding: "3px 0",

    color: "#14294d",

    fontSize: "1.3rem",
    fontWeight: 700,
    lineHeight: 1.35,

    wordBreak: "break-word",
  },

  simpleListBullet: {
    flexShrink: 0,

    width: "6px",
    height: "6px",

    borderRadius: "50%",

    background: "#2176e5",
  },

  reviewStatusBadge: {
    display: "inline-flex",
    alignItems: "center",

    gap: "7px",

    minHeight: "39px",
    padding: "6px 12px",

    borderRadius: "999px",

    fontSize: "1.3rem",
    fontWeight: 800,

    boxSizing: "border-box",
  },

  reviewStatusApproved: {
    border: "1px solid rgba(18, 168, 92, 0.23)",
    background: "rgba(221, 250, 234, 0.9)",
    color: "#078946",
  },

  reviewStatusPending: {
    border: "1px solid rgba(245, 158, 11, 0.28)",
    background: "rgba(255, 247, 225, 0.94)",
    color: "#d77800",
  },

  reviewStatusReturned: {
    border: "1px solid rgba(118, 87, 244, 0.24)",
    background: "rgba(239, 235, 255, 0.93)",
    color: "#6748db",
  },

  reviewStatusCorrected: {
    border: "1px solid rgba(33, 118, 229, 0.23)",
    background: "rgba(227, 240, 255, 0.93)",
    color: "#1768cf",
  },

  reviewStatusRejected: {
    border: "1px solid rgba(239, 68, 68, 0.24)",
    background: "rgba(255, 234, 234, 0.93)",
    color: "#d63838",
  },

  processDatesSection: {
    width: "100%",

    padding: "15px",

    border: cardBorder,
    borderRadius: "16px",

    background: cardBackground,

    boxShadow: cardShadow,

    boxSizing: "border-box",
  },

  processDatesHeader: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    marginBottom: "11px",
  },

 processDatesBody: {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  width: "100%",
  minHeight: "48px",

  gap: "10px",
  padding: "10px 12px",

  border: "1px solid rgba(33, 118, 229, 0.16)",
  borderRadius: "11px",

  background: `
    linear-gradient(
      145deg,
      rgba(247, 251, 255, 0.98),
      rgba(232, 242, 255, 0.9)
    )
  `,

  boxSizing: "border-box",
},

statusFieldBox: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  width: "100%",
  minHeight: "48px",

  padding: "4px 0",

  background: "transparent",
  border: "none",
  boxShadow: "none",

  boxSizing: "border-box",
},

  processDateItem: {
    display: "flex",
    alignItems: "center",

    minWidth: "135px",

    gap: "9px",
  },

  processDateIcon: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "32px",
    height: "32px",

    borderRadius: "10px",
  },

  processDateReturned: {
    background: "rgba(118, 87, 244, 0.09)",
    color: "#6748db",
  },

  processDateCorrected: {
    background: "rgba(33, 118, 229, 0.09)",
    color: "#1768cf",
  },

  processDateRejected: {
    background: "rgba(239, 68, 68, 0.09)",
    color: "#d63838",
  },

  processDateApproved: {
    background: "rgba(18, 168, 92, 0.09)",
    color: "#078946",
  },

  processDateLabel: {
    display: "block",

    color: "#7489a1",

    fontSize: "0.63rem",
    fontWeight: 650,
  },

  processDateValue: {
    display: "block",

    marginTop: "2px",

    color: "#102650",

    fontSize: "0.76rem",
    fontWeight: 800,
  },

  processDatesEmpty: {
    color: "#8294a9",

    fontSize: "0.73rem",
    fontWeight: 600,
  },

  bottomActions: {
    display: "flex",
    justifyContent: "flex-end",

    marginTop: "auto",
    paddingTop: "8px",
  },

  backButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "128px",
    minHeight: "42px",

    gap: "8px",
    padding: "0 20px",

    border: "1px solid rgba(33, 118, 229, 0.55)",
    borderRadius: "999px",

    background: "rgba(255, 255, 255, 0.92)",

    color: "#102650",

    fontSize: "1.2rem",
    fontWeight: 800,

    boxShadow: `
      0 8px 18px rgba(31, 77, 128, 0.1)
    `,

    cursor: "pointer",

    transition: `
      transform 180ms ease,
      box-shadow 180ms ease,
      background-color 180ms ease
    `,
  },
  identityGrid: {
  display: "grid",
  alignItems: "stretch",

  width: "100%",

  gap: "14px",

  boxSizing: "border-box",
},

identityGridWithDates: {
  gridTemplateColumns:
    "repeat(3, minmax(0, 1fr))",
},

identityGridWithoutDates: {
  gridTemplateColumns:
    "repeat(2, minmax(0, 1fr))",
},
};

export default styles;