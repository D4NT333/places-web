const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px",
    width: "100%",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    margin: 0,
    color: "#1f2937",
  },

  mapWrapper: {
    width: "100%",
    height: "70vh",
    minHeight: "500px",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #d1d5db",
    backgroundColor: "#f9fafb",
  },

  map: {
    width: "100%",
    height: "100%",
  },

  infoBox: {
  marginBottom: "12px",
  padding: "12px 16px",
  borderRadius: "10px",
  backgroundColor: "#f3f4f6",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  color: "#111827",
  },
};

export default styles;