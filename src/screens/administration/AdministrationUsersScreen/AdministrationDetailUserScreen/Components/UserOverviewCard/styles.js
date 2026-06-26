const styles = {
  card: {
    height: "100%",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 14,
    backgroundColor: "#ffffff",
    padding: 24,
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "155px minmax(0, 1fr) 300px",
    gap: 24,
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.08)",
  },

  photoWrapper: {
    width: 142,
    height: 142,
    borderRadius: "50%",
    border: "2px solid #111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "start",
    marginTop: 4,
    overflow: "hidden",
    background:
      "radial-gradient(circle at top, #ffffff 0%, #f3f4f6 100%)",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.12)",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoText: {
    fontSize: 14,
    fontWeight: 800,
    color: "#4b5563",
    textAlign: "center",
  },

  infoBlock: {
    height: "100%",
    minWidth: 0,
    display: "grid",
    gridTemplateRows: "44px 94px 1fr",
    paddingTop: 0,
    boxSizing: "border-box",
  },

  topInfoRow: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  statusPill: {
    width: 190,
    height: 34,
    padding: "0 18px",
    borderRadius: 999,
    border: "1.5px solid #111827",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 900,
    color: "#0f172a",
    backgroundColor: "#f8fafc",
    boxSizing: "border-box",
  },

  userTexts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 18,
  },

  userName: {
    margin: 0,
    fontSize: 18,
    fontWeight: 900,
    color: "#111827",
    letterSpacing: "-0.01em",
  },

  profile: {
    margin: 0,
    fontSize: 16,
    fontWeight: 800,
    color: "#374151",
  },

  metaGrid: {
    alignSelf: "end",
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    columnGap: 70,
    rowGap: 18,
    paddingBottom: 10,
  },

  metaText: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
  },

  moderationBlock: {
    height: "100%",
    minHeight: 0,
    minWidth: 0,
    display: "grid",
    gridTemplateRows: "40px 1fr",
    gap: 12,
  },

  moderateButton: {
    width: "100%",
    height: 40,
    borderRadius: 999,
    border: "1.5px solid #000000",
    background:
      "linear-gradient(180deg, #111827 0%, #000000 100%)",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.18)",
  },
};

export default styles;