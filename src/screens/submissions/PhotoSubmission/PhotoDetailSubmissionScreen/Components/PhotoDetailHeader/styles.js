const styles = {
  container: {
    width: "100%",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 14,
    boxSizing: "border-box",
  },

  iconBox: {
    width: 52,
    height: 52,
    flex: "0 0 52px",
    display: "grid",
    placeItems: "center",
    border: "1px solid #B8D3FA",
    borderRadius: 15,
    backgroundColor: "rgba(235, 244, 255, 0.94)",
    color: "#2475E8",
    boxShadow: "0 8px 18px rgba(36, 117, 232, 0.11)",
  },

  information: {
    minWidth: 0,
  },

  title: {
    margin: 0,
    color: "#071B45",
    fontSize: "clamp(27px, 2vw, 36px)",
    fontWeight: 900,
    lineHeight: 1.12,
    letterSpacing: "-0.025em",
  },

  subtitle: {
    maxWidth: 760,
    margin: "6px 0 0",
    color: "#5B708F",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.5,
  },
};

export default styles;