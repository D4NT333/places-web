const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    display: "grid",
    gap: 14,
    boxSizing: "border-box",
  },

  photoBox: {
    position: "relative",
    width: "100%",
    minWidth: 0,
    height: 380,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid #111827",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  counter: {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: 13,
    fontWeight: 800,
    color: "#111827",
  },

  photoText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#374151",
  },

  locationBlock: {
    width: "100%",
    minWidth: 0,
    display: "grid",
    gap: 8,
    boxSizing: "border-box",
  },

  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#111827",
  },

  mapBox: {
    width: "100%",
    minWidth: 0,
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid #000000",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  mapText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#374151",
  },

  address: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.5,
    color: "#111827",
    overflowWrap: "break-word",
  },
};

export default styles;