const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: 490,
    border: "2px solid #111827",
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#F8FAFC",
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
  width: 32,
  height: 32,
  borderRadius: "50%",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.20)",
  color: "#111827",
  fontWeight: 900,
  cursor: "pointer",
  zIndex: 2,
  backdropFilter: "blur(4px)",
  boxShadow: "none",
},

  leftButton: {
    left: 10,
  },

  rightButton: {
    right: 10,
  },

  counter: {
    position: "absolute",
    right: 12,
    bottom: 12,
    backgroundColor: "#0F172A",
    color: "#FFFFFF",
    padding: "4px 8px",
    borderRadius: 999,
    fontWeight: 800,
    fontSize: 12,
  },

  emptyText: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748B",
    fontWeight: 800,
  },
};

export default styles;