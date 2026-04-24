const styles = {

  screen: {
  width: "100%",
  height: "100%",
  padding: "2px 52px 12px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflow: "hidden",
  position: "relative",
  },

  contentArea: {
  width: "100%",
  flex: 1,
  minHeight: 0,
  display: "grid",
  gridTemplateColumns: "600px 2px 1fr",
  columnGap: "32px",
  boxSizing: "border-box",
  },

  leftSection: {
  height: "100%",
  minHeight: 0,
  display: "grid",
  gridTemplateRows: "2fr 1fr",
  gap: "16px",
  },

  verticalDivider: {
  width: "2px",
  height: "100%",
  backgroundColor: "#111827",
  },

  rightSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  topRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "32px",
    marginBottom: "34px",
  },

  infoGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  nameStatusRow: {
    display: "flex",
    gap: "34px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  descriptionBox: {
    width: "100%",
    height: "170px",
    border: "2px solid #111827",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "800",
    color: "#374151",
    boxSizing: "border-box",
    marginBottom: "34px",
  },

  chipsRow: {
    display: "flex",
    alignItems: "center",
    gap: "34px",
    flexWrap: "wrap",
    marginBottom: "34px",
  },

    leftWrapper: {
    height: "100%",
    minHeight: 0,
    display: "grid",
    gridTemplateRows: "34px 1fr",
    gap: "8px",
  },

  backButton: {
    width: "150px",
    height: "36px",
    border: "2px solid #111827",
    borderRadius: "999px",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: "15px",
    fontWeight: "800",
    cursor: "pointer",
  },
};

export default styles;