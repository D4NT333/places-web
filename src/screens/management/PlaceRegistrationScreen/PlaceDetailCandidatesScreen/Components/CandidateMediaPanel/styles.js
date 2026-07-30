const styles = {
  mediaCard: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    height: "100%",
    padding: "15px",
    boxSizing: "border-box",
      minHeight: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,252,255,0.98))",
    border: "1px solid #cbdced",
    borderRadius: "18px",
    boxShadow:
      "0 16px 38px rgba(29, 70, 115, 0.13)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    padding: "4px 2px 1px",
  },

  sectionIcon: {
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

  sectionHeading: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  sectionTitle: {
    margin: 0,
    color: "#12345f",
    fontSize: "2rem",
    fontWeight: 900,
  },

  sectionSubtitle: {
    margin: 0,
    color: "#607b98",
    fontSize: "1.4rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },

  photoBox: {
  flex: "1.35 1 0",
  minHeight: "430px",
  overflow: "hidden",
  background: "#eef4fa",
  border: "1px solid #c9daeb",
  borderRadius: "14px",
  boxShadow:
    "inset 0 0 0 1px rgba(255,255,255,0.72)",
},

  photoCarousel: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  photoImage: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, transparent 64%, rgba(9, 35, 65, 0.34))",
    pointerEvents: "none",
  },

  photoNavButton: {
    position: "absolute",
    top: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    padding: 0,
    color: "#ffffff",
    background:
      "rgba(11, 43, 79, 0.66)",
    border:
      "1px solid rgba(255, 255, 255, 0.75)",
    borderRadius: "999px",
    boxShadow:
      "0 7px 18px rgba(6, 29, 56, 0.25)",
    transform:
      "translateY(-50%)",
    cursor: "pointer",
  },

  photoNavButtonLeft: {
    left: "12px",
  },

  photoNavButtonRight: {
    right: "12px",
  },

  photoCounter: {
    position: "absolute",
    right: "12px",
    bottom: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    minHeight: "34px",
    padding: "0 11px",
    color: "#ffffff",
    background:
      "rgba(9, 35, 65, 0.76)",
    border:
      "1px solid rgba(255, 255, 255, 0.54)",
    borderRadius: "999px",
    fontSize: "1.8rem",
    fontWeight: 900,
  },

  photoPlaceholder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
    height: "100%",
    padding: "25px",
    boxSizing: "border-box",
    color: "#607b98",
    textAlign: "center",
  },

  placeholderIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    color: "#2176e5",
    background: "#ffffff",
    border: "1px solid #c9def8",
    borderRadius: "999px",
    boxShadow:
      "0 10px 24px rgba(33, 118, 229, 0.12)",
  },

  mapSection: {
    overflow: "hidden",
    background: "#ffffff",
    border: "1px solid #d3e1ee",
    borderRadius: "14px",
  },

  smallSectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    minHeight: "46px",
    padding: "0 13px",
    color: "#176fdc",
    background:
      "linear-gradient(90deg, #edf6ff, #f7fbff)",
    borderBottom: "1px solid #d6e5f3",
    fontSize: "1.8rem",
    fontWeight: 900,
  },

  mapBox: {
    height: "650px",
    overflow: "hidden",
    background: "#eef4fa",
  },

  mapFrame: {
    display: "block",
    width: "100%",
    height: "100%",
    border: "none",
  },

  mapPlaceholder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "6px",
    width: "100%",
    height: "100%",
    color: "#607b98",
    textAlign: "center",
  },

  addressBlock: {
    display: "flex",
    alignItems: "flex-start",
    gap: "11px",
    padding: "13px",
    color: "#12345f",
    background:
      "linear-gradient(135deg, #f6faff, #ffffff)",
    border: "1px solid #d1e0ef",
    borderRadius: "13px",
  },

  addressIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "42px",
    flexShrink: 0,
    color: "#2176e5",
    background: "#eaf4ff",
    borderRadius: "10px",
  },

  addressContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    minWidth: 0,
  },

  label: {
    color: "#66809c",
    fontSize: "1.15rem",
    fontWeight: 850,
    textTransform: "uppercase",
  },

  addressText: {
    margin: 0,
    color: "#193a62",
    fontSize: "1.35rem",
    fontWeight: 700,
    lineHeight: 1.45,
  },
};

export default styles;