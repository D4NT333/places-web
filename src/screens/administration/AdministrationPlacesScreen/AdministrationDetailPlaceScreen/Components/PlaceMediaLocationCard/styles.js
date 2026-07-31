const styles = {
  card: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    gap: "14px",

    boxSizing: "border-box",
  },

  sectionCard: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

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

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "14px",

    padding: "14px 16px",

    background:
      "linear-gradient(135deg, rgba(242, 248, 255, 0.98), rgba(255, 255, 255, 0.98) 58%, rgba(242, 252, 247, 0.98))",

    borderBottom:
      "1px solid #d4e4f2",
  },

  sectionTitleGroup: {
    display: "flex",
    alignItems: "center",

    gap: "12px",
    minWidth: 0,
  },

  photoHeaderIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "60px",
    height: "60px",
    flexShrink: 0,

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #f3edff, #fbf9ff)",

    border:
      "1px solid #d8c6f7",

    borderRadius: "15px",

    boxShadow:
      "0 7px 18px rgba(116, 65, 214, 0.12)",
  },

  locationHeaderIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "60px",
    height: "60px",
    flexShrink: 0,

    color: "#078e4a",

    background:
      "linear-gradient(145deg, #eafaf2, #f8fcfa)",

    border:
      "1px solid #bee5cf",

    borderRadius: "15px",

    boxShadow:
      "0 7px 18px rgba(7, 142, 74, 0.11)",
  },

  sectionTitleText: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",
    minWidth: 0,
  },

  sectionTitle: {
    margin: 0,

    color: "#092f61",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.1,
    letterSpacing: "-0.015em",
  },

  sectionSubtitle: {
    margin: 0,

    color: "#647e9a",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.35,
  },

  photoCounterPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "31px",

    padding: "0 11px",

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  locationStatus: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "31px",

    padding: "0 11px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "1.8rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  photoBox: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    minWidth: 0,
    height: "380px",

    overflow: "hidden",
    boxSizing: "border-box",

    background:
      "linear-gradient(145deg, #eef4fb, #f8fbff)",

    borderTop:
      "1px solid rgba(215, 229, 242, 0.6)",
  },

  photoButton: {
    position: "relative",

    display: "block",

    width: "100%",
    height: "100%",

    padding: 0,

    overflow: "hidden",

    backgroundColor:
      "transparent",

    border: 0,

    cursor: "zoom-in",
  },

  photoButtonDisabled: {
    cursor: "wait",
  },

  photoImage: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  expandIndicator: {
    position: "absolute",
    right: "14px",
    bottom: "14px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    minHeight: "38px",

    padding: "0 12px",

    color: "#ffffff",

    background:
      "rgba(11, 49, 95, 0.78)",

    border:
      "1px solid rgba(255, 255, 255, 0.3)",

    borderRadius: "999px",

    boxShadow:
      "0 6px 18px rgba(5, 23, 45, 0.2)",

    backdropFilter:
      "blur(8px)",

    fontSize: "1.8rem",
    fontWeight: 850,

    pointerEvents: "none",
  },

  navigationButton: {
    position: "absolute",
    top: "50%",
    zIndex: 3,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "48px",
    height: "48px",

    padding: 0,

    color: "#17375f",

    background:
      "rgba(255, 255, 255, 0.92)",

    border:
      "1px solid rgba(199, 217, 235, 0.98)",

    borderRadius: "999px",

    boxShadow:
      "0 7px 18px rgba(24, 58, 94, 0.18)",

    cursor: "pointer",

    transform:
      "translateY(-50%)",

    backdropFilter:
      "blur(8px)",
  },

  previousButton: {
    left: "14px",
  },

  nextButton: {
    right: "14px",
  },

  counter: {
    position: "absolute",
    top: "14px",
    right: "14px",
    zIndex: 3,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "54px",
    minHeight: "30px",

    padding: "0 9px",

    color: "#ffffff",

    background:
      "rgba(11, 49, 95, 0.78)",

    border:
      "1px solid rgba(255, 255, 255, 0.25)",

    borderRadius: "999px",

    boxShadow:
      "0 5px 14px rgba(17, 42, 71, 0.2)",

    backdropFilter:
      "blur(8px)",

    fontSize: "1.8rem",
    fontWeight: 900,
  },

  galleryLoading: {
    position: "absolute",
    inset: 0,
    zIndex: 4,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    gap: "10px",

    color: "#ffffff",

    background:
      "rgba(15, 35, 60, 0.62)",

    fontSize: "0.9rem",
    fontWeight: 850,

    backdropFilter:
      "blur(5px)",

    pointerEvents: "none",
  },

  loadingIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "68px",
    height: "68px",

    color: "#ffffff",

    background:
      "rgba(255, 255, 255, 0.14)",

    border:
      "1px solid rgba(255, 255, 255, 0.3)",

    borderRadius: "999px",
  },

  emptyPhotoState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    gap: "7px",

    padding: "28px",

    color: "#627b96",

    textAlign: "center",
  },

  emptyPhotoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "72px",
    height: "72px",

    marginBottom: "3px",

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "18px",
  },

  emptyPhotoTitle: {
    color: "#17375f",

    fontSize: "1rem",
    fontWeight: 900,
  },

  photoText: {
    color: "#647e9a",

    fontSize: "0.82rem",
    fontWeight: 650,
  },

  mapBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "calc(100% - 28px)",
    minWidth: 0,
    height: "250px",

    margin: "14px 14px 0",

    overflow: "hidden",
    boxSizing: "border-box",

    background:
      "linear-gradient(145deg, #eefaf3, #f8fcfa)",

    border:
      "1px solid #bfdccb",

    borderRadius: "14px",

    boxShadow:
      "0 8px 20px rgba(31, 73, 116, 0.08)",
  },

  mapFrame: {
    display: "block",

    width: "100%",
    height: "100%",

    border: 0,
  },

  emptyMapState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    gap: "7px",

    padding: "24px",

    textAlign: "center",
  },

  emptyMapIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "70px",
    height: "70px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #bfe4d0",

    borderRadius: "17px",
  },

  emptyMapTitle: {
    color: "#17375f",

    fontSize: "1rem",
    fontWeight: 900,
  },

  mapText: {
    color: "#647e9a",

    fontSize: "0.82rem",
    fontWeight: 650,
  },

  addressBox: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    margin: "11px 14px 14px",
    padding: "10px 12px",

    color: "#315c4a",

    background:
      "linear-gradient(135deg, #edf9f3, #f8fcfa)",

    border:
      "1px solid #cee6d9",

    borderRadius: "11px",
  },

  addressIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#078e4a",
    background: "#ffffff",

    border:
      "1px solid #c6e5d4",

    borderRadius: "10px",
  },

  addressContent: {
    display: "flex",
    flexDirection: "column",

    gap: "2px",
    minWidth: 0,
  },

  addressLabel: {
    color: "#078e4a",

    fontSize: "1.8rem",
    fontWeight: 900,

    textTransform: "uppercase",
  },

  address: {
    margin: 0,

    color: "#315c4a",

    fontSize: "1.8rem",
    fontWeight: 700,
    lineHeight: 1.4,

    overflowWrap: "anywhere",
  },
};

export default styles;