const styles = {
  container: {
    width: "100%",
    height: "calc(88vh - 190px)",
    maxHeight: "calc(88vh - 190px)",
    minHeight: 620,
    overflow: "hidden",
    padding: "24px 42px 54px",
    boxSizing: "border-box",
    position: "relative",
  },

  contentGrid: {
    width: "100%",
    height: "100%",
    minHeight: 0,
    display: "grid",
    gridTemplateColumns: "minmax(780px, 1.42fr) minmax(440px, 0.78fr)",
    gap: 28,
    alignItems: "stretch",
  },

  leftColumn: {
    height: "100%",
    minHeight: 0,
    display: "grid",
    gridTemplateRows: "1.12fr 0.88fr",
    gap: 24,
    minWidth: 0,
  },

  actionsRow: {
    position: "absolute",
    right: 42,
    bottom: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    pointerEvents: "none",
  },

  backButton: {
    minWidth: 132,
    height: 38,
    borderRadius: 999,
    border: "1.5px solid #111827",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: 15,
    fontWeight: 900,
    cursor: "pointer",
    pointerEvents: "auto",
    boxShadow: "0 8px 18px rgba(15, 23, 42, 0.1)",
  },
};

export default styles;