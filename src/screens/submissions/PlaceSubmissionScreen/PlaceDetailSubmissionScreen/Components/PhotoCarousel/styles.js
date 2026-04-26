const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "580px",
    border: "1.5px solid #07162f",
    borderRadius: "6px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    boxSizing: "border-box",
    color: "#07162f",
    fontWeight: "800",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "38px",
    height: "38px",
    borderRadius: "999px",
    border: "1px solid #07162f",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    color: "#07162f",
    fontSize: "28px",
    fontWeight: "800",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  },

  leftButton: {
    left: "14px",
  },

  rightButton: {
    right: "14px",
  },

  counter: {
    position: "absolute",
    right: "14px",
    bottom: "14px",
    padding: "6px 12px",
    borderRadius: "999px",
    backgroundColor: "rgba(7, 22, 47, 0.78)",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "800",
  },

  emptyText: {
    color: "#07162f",
    fontSize: "18px",
    fontWeight: "800",
  },
};

export default styles;