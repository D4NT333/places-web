const styles = {
  card: {
    height: "100%",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 12,
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
  },

  photoWrapper: {
    position: "absolute",
    left: 28,
    top: 28,
    width: 190,
    height: 190,
    borderRadius: "50%",
    border: "2px solid #111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top, #ffffff 0%, #f3f4f6 100%)",
    boxShadow: "0 10px 22px rgba(15, 23, 42, 0.12)",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoText: {
    fontSize: 16,
    fontWeight: 800,
    color: "#4b5563",
    textAlign: "center",
  },

  infoBlock: {
  position: "absolute",
  left: 250,
  top: 28,
  right: 430,
  height: 260,
  minWidth: 0,
},

  topInfoRow: {
  position: "absolute",
  left: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
},

statusPill: {
  width: 230,
  height: 36,
  borderRadius: 999,
  border: "1.5px solid #111827",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 18,
  fontWeight: 800,
  color: "#374151",
  backgroundColor: "#ffffff",
  boxSizing: "border-box",
},

userTexts: {
  position: "absolute",
  left: -220,
  top: 205,
  width: 190,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
},

userName: {
  width: "100%",
  margin: 0,
  fontSize: 18,
  fontWeight: 800,
  color: "#374151",
  textAlign: "center",
  lineHeight: "22px",
  whiteSpace: "normal",
  overflowWrap: "break-word",
},

  profile: {
    margin: 0,
    fontSize: 18,
    fontWeight: 800,
    color: "#374151",
  },

 metaGrid: {
  position: "absolute",
  left: 0,
  top: 72,
  display: "flex",
  flexDirection: "column",
  gap: 18,
},

  metaText: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
  },

 moderationBlock: {
  position: "absolute",
  right: 22,
  top: 24,
  width: 530,
  height: 250,
  display: "grid",
  gridTemplateRows: "40px 1fr",
  gap: 8,
  minWidth: 0,
  minHeight: 0,
},

  moderateButton: {
    width: "100%",
    height: 40,
    borderRadius: 999,
    border: "1.5px solid #000000",
    background: "#000000",
    color: "#ffffff",
    fontSize: 17,
    fontWeight: 800,
    cursor: "pointer",
  },
};

export default styles;