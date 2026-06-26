const styles = {
  container: {
    width: "100%",
    height: "calc(100dvh - 150px)",
    maxHeight: "calc(100dvh - 150px)",
    overflow: "hidden",
    padding: "36px 52px 16px",
    boxSizing: "border-box",
    background:
      "linear-gradient(180deg, #f8fafc 0%, #f3f4f6 100%)",
    display: "flex",
    flexDirection: "column",
  },

  contentGrid: {
    flex: "1 1 auto",
    minHeight: 0,
    display: "grid",
    gridTemplateColumns:
      "minmax(760px, 1.45fr) minmax(420px, 0.78fr)",
    gap: 30,
    alignItems: "stretch",
  },

  leftColumn: {
    height: "100%",
    minHeight: 0,
    display: "grid",
    gridTemplateRows: "1.18fr 0.82fr",
    gap: 26,
    minWidth: 0,
  },

  actionsRow: {
    flex: "0 0 44px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: 0,
  },

  backButton: {
    minWidth: 132,
    height: 38,
    borderRadius: 999,
    border: "1.5px solid #111827",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(15, 23, 42, 0.08)",
  },
};

export default styles;