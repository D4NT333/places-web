const styles = {
  container: {
    minHeight: "330px",
    padding: "18px",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe3e8",
    borderRadius: "14px",
    boxSizing: "border-box",
  },

  header: {
    marginBottom: "18px",
  },

  title: {
    margin: "0 0 6px",
    color: "#101828",
    fontSize: "15px",
  },

  description: {
    margin: 0,
    color: "#667085",
    fontSize: "10px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  item: {
    width: "100%",
  },

  itemHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "14px",
    marginBottom: "6px",
  },

  categoryLabel: {
    color: "#344054",
    fontSize: "10px",
    fontWeight: "600",
  },

  categoryValue: {
    color: "#101828",
    fontSize: "10px",
    fontWeight: "700",
  },

  progressBackground: {
    width: "100%",
    height: "7px",
    overflow: "hidden",
    backgroundColor: "#edf1f5",
    borderRadius: "999px",
  },

  progressValue: {
    height: "100%",
    backgroundColor: "#789fea",
    borderRadius: "999px",
  },
};

export default styles;