const styles = {
  container: {
    minWidth: 0,
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },

  item: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 14,
    backgroundColor:
      "rgba(255, 255, 255, 0.76)",
    border:
      "1px solid #CBD9EB",
  },

  userIconBox: {
    width: 56,
    height: 56,
    minWidth: 56,
    minHeight: 56,
    flex: "0 0 56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0C9A58",
    backgroundColor: "#E8F9F0",
    border:
      "1px solid #A7E5C4",
    overflow: "hidden",
    boxSizing: "border-box",
  },

  userPhoto: {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
  },

  dateIconBox: {
    width: 68,
    height: 68,
    flex: "0 0 56px",
    borderRadius: 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2563EB",
    backgroundColor: "#EAF3FF",
    border:
      "1px solid #B7D4FF",
  },

  itemText: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  label: {
    fontSize: 28,
    fontWeight: 900,
    color: "#232323",
    textTransform: "uppercase",
    letterSpacing: "0.045em",
  },

  value: {
    fontSize: 26,
    lineHeight: 1.25,
    fontWeight: 900,
    color: "#0A214A",
    overflowWrap: "anywhere",
  },

  userLink: {
    width: "fit-content",
    margin: 0,
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    textAlign: "left",
    textDecoration: "underline",
    textUnderlineOffset: 4,
    cursor: "pointer",
  },
};

export default styles;