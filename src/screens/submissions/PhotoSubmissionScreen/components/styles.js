const styles = {
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #bdbdbd",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: "255px",
    boxSizing: "border-box",
  },

  imageContainer: {
    position: "relative",
    height: "170px",
    borderBottom: "1px solid #bdbdbd",
    backgroundColor: "#ececec",
  },

  extraPhotosText: {
    position: "absolute",
    top: "8px",
    right: "10px",
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#555",
    zIndex: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  imagePlaceholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
    fontWeight: "600",
    fontSize: "0.95rem",
  },

  infoSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0.55rem 0.75rem 0.65rem",
    gap: "0.45rem",
    flex: 1,
  },

  placeName: {
    margin: 0,
    fontSize: "0.95rem",
    fontWeight: "700",
    color: "#444",
  },

  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
  },

  createdAt: {
    fontSize: "0.78rem",
    color: "#666",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
  },

  approveButton: {
    minWidth: "28px",
    height: "22px",
    borderRadius: "999px",
    border: "1px solid #bcbcbc",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "0.8rem",
    lineHeight: 1,
  },

  rejectButton: {
    minWidth: "28px",
    height: "22px",
    borderRadius: "999px",
    border: "1px solid #bcbcbc",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "0.8rem",
    lineHeight: 1,
  },
};

export default styles;