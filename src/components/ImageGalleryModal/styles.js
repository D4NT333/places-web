const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(2, 6, 23, 0.96)",
    backdropFilter: "blur(5px)",
  },

  header: {
    minHeight: 74,
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    color: "#FFFFFF",
    borderBottom:
      "1px solid rgba(255, 255, 255, 0.14)",
  },

  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: 800,
  },

  counter: {
    margin: "5px 0 0",
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: 600,
  },

  closeButton: {
    width: 42,
    height: 42,
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.28)",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 1,
    cursor: "pointer",
  },

  viewer: {
    position: "relative",
    flex: 1,
    minHeight: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 84px",
  },

  image: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: 12,
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.48)",
  },

  navigationButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 48,
    height: 48,
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    backgroundColor: "rgba(15, 23, 42, 0.76)",
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 1,
    cursor: "pointer",
  },

  previousButton: {
    left: 24,
  },

  nextButton: {
    right: 24,
  },

  thumbnails: {
    minHeight: 94,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    overflowX: "auto",
    padding: "12px 24px 18px",
    borderTop:
      "1px solid rgba(255, 255, 255, 0.12)",
  },

  thumbnailButton: {
    flexShrink: 0,
    width: 72,
    height: 58,
    padding: 2,
    border: "2px solid transparent",
    borderRadius: 9,
    backgroundColor: "transparent",
    cursor: "pointer",
  },

  thumbnailButtonActive: {
    borderColor: "#FFFFFF",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    borderRadius: 6,
  },
};

export default styles;