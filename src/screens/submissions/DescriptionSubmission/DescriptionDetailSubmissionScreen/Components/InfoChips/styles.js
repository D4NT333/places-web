const styles = {
  container: {
    minWidth: 0,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10,
  },

  infoItem: {
    minWidth: 0,
    display: "flex",
    alignItems: "flex-start",
    gap: 9,
    padding: 10,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.76)",
    border: "1px solid #CBD9EB",
  },

  tagIconBox: {
    width: 54,
    height: 54,
    flex: "0 0 34px",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0C9A58",
    backgroundColor: "#E8F9F0",
    border: "1px solid #A7E5C4",
  },

  subtagIconBox: {
    width: 34,
    height: 34,
    flex: "0 0 34px",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2563EB",
    backgroundColor: "#EAF3FF",
    border: "1px solid #B7D4FF",
  },

  focusIconBox: {
    width: 34,
    height: 34,
    flex: "0 0 34px",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6D4FE8",
    backgroundColor: "#F1EDFF",
    border: "1px solid #D0C5FF",
  },

  itemContent: {
    minWidth: 0,
    flex: 1,
  },

  label: {
    display: "block",
    marginBottom: 6,
    fontSize: 30,
    fontWeight: 900,
    color: "#242424",
    textTransform: "uppercase",
    letterSpacing: "0.045em",
  },

  valuesContainer: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
  },

  tagChip: {
    padding: "6px 10px",
    borderRadius: 999,
    backgroundColor: "#E9FAF1",
    color: "#078842",
    fontSize: 26,
    fontWeight: 900,
    border: "1px solid #A8E6C4",
  },

  subtagChip: {
    padding: "6px 10px",
    borderRadius: 999,
    backgroundColor: "#EDF5FF",
    color: "#1D63C7",
    fontSize: 26,
    fontWeight: 900,
    border: "1px solid #C2D9FA",
  },

  focusChip: {
    padding: "6px 10px",
    borderRadius: 999,
    backgroundColor: "#F2EEFF",
    color: "#6044D1",
    fontSize: 26,
    fontWeight: 900,
    border: "1px solid #D3C8FF",
  },

  emptyValue: {
    fontSize: 12,
    lineHeight: 1.35,
    fontWeight: 700,
    color: "#8391A6",
  },
};

export default styles;