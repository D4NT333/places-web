const styles = {
  overlay: {
  position: "fixed",
  top: "89px",
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9999,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "28px 32px",
  boxSizing: "border-box",

  overflow: "hidden",

  background: "rgba(30, 57, 87, 0.56)",
  backdropFilter: "blur(8px)",
},

modal: {
  position: "relative",

  width: "min(1280px, calc(100vw - 64px))",

  /*
   * AQUÍ ESTÁ EL CAMBIO REAL:
   * ya no depende de la altura automática del contenido.
   */
  height: "calc(100dvh - 180px)",
  minHeight: "520px",
  maxHeight: "760px",

  display: "flex",
  flexDirection: "column",

  overflow: "hidden",

  background:
    "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

  border: "1px solid rgba(211, 224, 239, 0.98)",
  borderRadius: "19px",

  boxShadow:
    "0 30px 80px rgba(17, 42, 71, 0.34)",
},

body: {
  display: "flex",
  flexDirection: "column",

  /*
   * El body ocupa solamente el espacio disponible
   * entre el encabezado y el footer.
   */
  flex: 1,
  minHeight: 0,

  gap: "15px",

  padding: "19px 27px",
  boxSizing: "border-box",

  /*
   * AQUÍ SE PRODUCE EL SCROLL.
   */
  overflowY: "scroll",
  overflowX: "hidden",

  overscrollBehavior: "contain",
  scrollbarGutter: "stable",
},

  topAccent: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,

    height: "5px",

    background:
      "linear-gradient(90deg, #2176e5, #62a8f2, #e4a229)",
  },

  header: {
    position: "relative",
    zIndex: 1,

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    flexShrink: 0,

    gap: "20px",
    padding: "14px 20px 11px",

    background:
      "linear-gradient(135deg, #f7fbff, #ffffff 58%, #fffaf0)",

    borderBottom: "1px solid #dce7f2",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",

    gap: "15px",
    minWidth: 0,
  },

  headerIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "58px",
    height: "58px",
    flexShrink: 0,

    color: "#d7850d",

    background:
      "linear-gradient(145deg, #fff3dc, #fffaf1)",

    border: "1px solid #efd096",
    borderRadius: "15px",

    boxShadow:
      "0 7px 18px rgba(194, 121, 12, 0.13)",
  },

  headerText: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",
    minWidth: 0,
  },

  headerTitleRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "10px",
  },

  title: {
    margin: 0,

    color: "#092b5c",

    fontSize: "2.5rem",
    fontWeight: 950,
    letterSpacing: "-0.025em",
    lineHeight: 1.08,
  },

  subtitle: {
    margin: 0,

    color: "#607a98",

    fontSize: "1.6rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "48px",
    height: "48px",
    flexShrink: 0,

    padding: 0,

    color: "#17375f",
    background: "#ffffff",

    border: "1px solid #d3e0ed",
    borderRadius: "11px",

    boxShadow:
      "0 5px 13px rgba(33, 68, 107, 0.1)",

    cursor: "pointer",
  },

  summaryCard: {
    flexShrink: 0,

    overflow: "hidden",

    background: "#ffffff",

    border: "1px solid #bad8ff",
    borderRadius: "14px",

    boxShadow:
      "0 7px 18px rgba(31, 75, 122, 0.06)",
  },

  summaryHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "14px",
    padding: "13px 15px",

    background:
      "linear-gradient(90deg, #eaf4ff, #f7fbff)",

    borderBottom: "1px solid #c9e0fb",
  },

  sectionHeading: {
    display: "flex",
    alignItems: "center",

    gap: "9px",

    color: "#176fdc",
  },

  sectionTitle: {
    margin: 0,

    color: "inherit",

    fontSize: "1.75rem",
    fontWeight: 900,
    lineHeight: 1.2,
  },

  targetChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "32px",
    padding: "0 11px",

    border: "1px solid transparent",
    borderRadius: "999px",

    fontSize: "1.4rem",
    fontWeight: 900,
    lineHeight: 1,
  },

  targetPlace: {
    color: "#176fdc",
    background: "#eef6ff",
    borderColor: "#b7d6fa",
  },

  targetUser: {
    color: "#b83274",
    background: "#fff1f7",
    borderColor: "#f4bfd7",
  },

  targetGeneral: {
    color: "#5c7189",
    background: "#f1f5f9",
    borderColor: "#d0dbe6",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "32px",
    padding: "0 11px",

    flexShrink: 0,

    border: "1px solid transparent",
    borderRadius: "999px",

    fontSize: "1.4rem",
    fontWeight: 900,
    lineHeight: 1,
  },

  statusPending: {
    color: "#a96800",
    background: "#fff7e6",
    borderColor: "#efca7f",
  },

  statusResolved: {
    color: "#078e4a",
    background: "#eafaf2",
    borderColor: "#bce8d0",
  },

  statusDiscarded: {
    color: "#d23f3f",
    background: "#fff0f0",
    borderColor: "#ffc2c2",
  },

  infoGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",

    gap: "10px",
    padding: "14px",
  },

  infoCard: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    minWidth: 0,
    minHeight: "76px",

    padding: "10px 11px",
    boxSizing: "border-box",

    background:
      "linear-gradient(135deg, #f8fbff, #ffffff)",

    border: "1px solid #d8e5f1",
    borderRadius: "11px",
  },

  infoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "44px",
    height: "44px",
    flexShrink: 0,

    color: "#247cf0",
    background: "#eef6ff",

    border: "1px solid #cfe2fb",
    borderRadius: "10px",
  },

  infoContent: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",
    minWidth: 0,
  },

  infoLabel: {
    color: "#657d98",

    fontSize: "1.8rem",
    fontWeight: 750,
    lineHeight: 1.2,
  },

  infoValue: {
    color: "#12335e",

    fontSize: "1.6rem",
    fontWeight: 850,
    lineHeight: 1.35,

    overflowWrap: "anywhere",
  },

  twoColumnGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    flexShrink: 0,

    gap: "13px",
  },

  entityCard: {
    minWidth: 0,

    overflow: "hidden",

    background:
      "linear-gradient(135deg, #ffffff, #f9fcff)",

    border: "1px solid #d4e2ef",
    borderRadius: "14px",

    boxShadow:
      "0 7px 17px rgba(31, 74, 119, 0.06)",
  },

  entityCardHeader: {
    display: "flex",
    alignItems: "center",

    gap: "8px",
    padding: "11px 14px",

    color: "#176fdc",

    background:
      "linear-gradient(90deg, #eef6ff, #f8fbff)",

    borderBottom: "1px solid #d6e5f3",
  },

  entityCardTitle: {
    fontSize: "1.8rem",
    fontWeight: 900,
    lineHeight: 1.2,
  },

  reporterRow: {
    display: "flex",
    alignItems: "center",

    gap: "11px",

    minWidth: 0,
    minHeight: "82px",

    padding: "13px 14px",
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "54px",
    height: "54px",
    flexShrink: 0,

    overflow: "hidden",

    color: "#176fdc",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    border: "1px solid #c8ddf6",
    borderRadius: "999px",

    boxShadow:
      "0 5px 13px rgba(31, 71, 114, 0.11)",
  },

  avatarImage: {
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  avatarText: {
    fontSize: "1.25rem",
    fontWeight: 950,
  },

  reporterText: {
    display: "flex",
    flexDirection: "column",

    flex: 1,

    gap: "3px",
    minWidth: 0,
  },

  reporterName: {
    overflow: "hidden",

    color: "#12335e",

    fontSize: "2rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  reporterEmail: {
    overflow: "hidden",

    color: "#667f9b",

    fontSize: "1.15rem",
    fontWeight: 650,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    gap: "6px",

    minHeight: "39px",
    padding: "0 12px",

    color: "#176fdc",
    background: "#ffffff",

    border: "1px solid #bad6f7",
    borderRadius: "9px",

    boxShadow:
      "0 4px 10px rgba(35, 83, 137, 0.07)",

    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 850,

    cursor: "pointer",
  },

  relatedPlaceContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "14px",

    minWidth: 0,
    minHeight: "82px",

    padding: "13px 14px",
  },

  relatedPlaceText: {
    display: "flex",
    flexDirection: "column",

    flex: 1,

    gap: "4px",
    minWidth: 0,
  },

  entityName: {
    overflow: "hidden",

    color: "#12335e",

    fontSize: "2rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  entityDescription: {
    margin: 0,

    color: "#657e99",

    fontSize: "1.4rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  messageCard: {
    flexShrink: 0,

    overflow: "hidden",

    background: "#ffffff",

    border: "1px solid #d2e1ef",
    borderRadius: "14px",
  },

  messageHeader: {
    display: "flex",
    alignItems: "center",

    gap: "9px",
    padding: "12px 15px",

    color: "#d17d08",

    background:
      "linear-gradient(90deg, #fff6e6, #fffaf2)",

    borderBottom: "1px solid #efd39f",
  },

  messageText: {
    minHeight: "72px",

    margin: "14px",
    padding: "14px",
    boxSizing: "border-box",

    color: "#25476d",

    background:
      "linear-gradient(135deg, #f8fbff, #ffffff)",

    border: "1px solid #dbe7f2",
    borderRadius: "10px",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.55,

    overflowWrap: "anywhere",
    whiteSpace: "pre-wrap",
  },

  resolutionCard: {
    flexShrink: 0,

    overflow: "hidden",

    background: "#fbfffd",

    border: "1px solid #bfe8d2",
    borderRadius: "14px",
  },

  resolutionHeader: {
    display: "flex",
    alignItems: "center",

    gap: "9px",
    padding: "12px 15px",

    color: "#078e4a",

    background:
      "linear-gradient(90deg, #eafaf2, #f6fcf9)",

    borderBottom: "1px solid #c7ead7",
  },

  resolutionGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "10px",
    padding: "14px 14px 8px",
  },

  resolutionInfo: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",

    minWidth: 0,

    padding: "10px 12px",

    background: "#ffffff",

    border: "1px solid #d4eadf",
    borderRadius: "10px",
  },

  resolutionNote: {
    margin: "6px 14px 14px",
    padding: "13px",

    color: "#315c4a",
    background: "#f5fcf8",

    border: "1px solid #cee9da",
    borderRadius: "10px",

    fontSize: "2rem",
    fontWeight: 650,
    lineHeight: 1.5,

    overflowWrap: "anywhere",
    whiteSpace: "pre-wrap",
  },

  actionCard: {
    flexShrink: 0,

    overflow: "hidden",

    background: "#fdfbff",

    border: "1px solid #decef7",
    borderRadius: "14px",
  },

  actionHeader: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    padding: "13px 15px",

    color: "#7441d6",

    background:
      "linear-gradient(90deg, #f4edff, #fbf8ff)",

    borderBottom: "1px solid #e0d2f6",
  },

  actionDescription: {
    margin: "3px 0 0",

    color: "#76678f",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  actionOptions: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "10px",
    padding: "14px 14px 10px",
  },

  actionOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    gap: "11px",

    minHeight: "68px",
    padding: "10px 14px",

    border: "1px solid",
    borderRadius: "11px",

    fontFamily: "inherit",
    textAlign: "left",

    cursor: "pointer",
  },

  discardOption: {
    color: "#d23f3f",
    background: "#fff7f7",
    borderColor: "#ffc8c8",
  },

  discardOptionSelected: {
    background:
      "linear-gradient(135deg, #ffe8e8, #fff5f5)",

    borderColor: "#ed6262",

    boxShadow:
      "0 0 0 2px rgba(224, 65, 65, 0.11)",
  },

  validateOption: {
    color: "#078e4a",
    background: "#f5fdf9",
    borderColor: "#bee8d1",
  },

  validateOptionSelected: {
    background:
      "linear-gradient(135deg, #e4f8ee, #f4fcf8)",

    borderColor: "#39ae74",

    boxShadow:
      "0 0 0 2px rgba(22, 151, 83, 0.1)",
  },

  actionOptionText: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",

    fontSize: "1.6rem",
  },

  noteLabel: {
    display: "flex",
    flexDirection: "column",

    gap: "7px",
    padding: "0 14px",
  },

  noteLabelText: {
    color: "#4e3c70",

    fontSize: "1.6rem",
    fontWeight: 850,
  },

  textarea: {
    width: "100%",
    minHeight: "105px",

    resize: "vertical",

    padding: "12px 13px",
    boxSizing: "border-box",

    color: "#17375f",
    background: "#ffffff",

    border: "1px solid #cfc0eb",
    borderRadius: "10px",
    outline: "none",

    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  noteFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "12px",
    padding: "8px 14px 14px",
  },

  counter: {
    color: "#71839a",

    fontSize: "1.6rem",
    fontWeight: 750,
  },

  helperText: {
    color: "#71839a",

    fontSize: "1.4rem",
    fontWeight: 650,
  },

  errorText: {
    color: "#d43f3f",

    fontSize: "1.4rem",
    fontWeight: 800,
    textAlign: "right",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    flexShrink: 0,

    gap: "16px",
    padding: "14px 27px",

    background:
      "linear-gradient(180deg, #fbfdff, #f7faff)",

    borderTop: "1px solid #dce7f2",
  },

  footerNotice: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    color: "#617994",

    fontSize: "1.6rem",
    fontWeight: 700,
  },

  footerActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    gap: "10px",
  },

  cancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    minHeight: "43px",
    padding: "0 15px",

    color: "#285477",
    background: "#ffffff",

    border: "1px solid #c7d8e8",
    borderRadius: "10px",

    boxShadow:
      "0 4px 10px rgba(35, 76, 119, 0.07)",

    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 850,

    cursor: "pointer",
  },

  submitButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    minHeight: "43px",
    padding: "0 17px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",

    border: "1px solid #1e70dc",
    borderRadius: "10px",

    boxShadow:
      "0 7px 16px rgba(33, 118, 229, 0.21)",

    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  submitButtonDisabled: {
    opacity: 0.58,
    boxShadow: "none",
    cursor: "not-allowed",
  },

  disabledControl: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  loadingState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    flex: "1 1 auto",
    minHeight: 0,

    padding: "35px",
    boxSizing: "border-box",

    overflowY: "auto",

    textAlign: "center",
  },

  loadingIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "82px",
    height: "82px",

    marginBottom: "12px",

    color: "#2176e5",
    background: "#eaf4ff",

    border: "1px solid #c9def8",
    borderRadius: "999px",
  },

  loadingTitle: {
    margin: 0,

    color: "#0b315f",

    fontSize: "2rem",
    fontWeight: 950,
  },

  loadingText: {
    margin: "6px 0 0",

    color: "#607a98",

    fontSize: "1.4rem",
    fontWeight: 650,
  },
};

export default styles;