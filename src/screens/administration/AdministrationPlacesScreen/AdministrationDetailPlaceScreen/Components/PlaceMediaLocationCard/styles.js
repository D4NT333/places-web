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
    height: 280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #D1D5DB",
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
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  mapBox: {
    width: "100%",
    minWidth: 0,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #D1D5DB",
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