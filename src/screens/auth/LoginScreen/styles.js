const styles = {
  screen: {
    minHeight: "100vh",
    width: "100%",
    background:
      "radial-gradient(circle at top left, rgba(255, 207, 112, 0.35), transparent 34%), linear-gradient(135deg, #FFFDF8 0%, #F4EFE6 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    boxSizing: "border-box",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: 1160,
    minHeight: 660,
    backgroundColor: "#FFFFFF",
    borderRadius: 34,
    border: "1px solid rgba(36, 28, 18, 0.08)",
    boxShadow: "0 28px 90px rgba(29, 23, 14, 0.16)",
    display: "grid",
    gridTemplateColumns: "1fr 0.92fr",
    overflow: "hidden",
  },

  leftPanel: {
    padding: "52px 58px",
    display: "flex",
    flexDirection: "column",
  },
};

export default styles;