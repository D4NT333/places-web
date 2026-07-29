const styles = {
  card: {
    width: "100%",
    overflow: "hidden",
    border: "1px solid rgba(195, 213, 237, 0.98)",
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 14px 30px rgba(30, 72, 126, 0.1)",
    backdropFilter: "blur(9px)",
    boxSizing: "border-box",
  },

  header: {
    padding: 14,
  },

  headerHeading: {
    display: "flex",
    alignItems: "center",
    gap: 11,
  },

  headerIconBox: {
    width: 44,
    height: 44,
    flex: "0 0 44px",
    display: "grid",
    placeItems: "center",
    border: "1px solid #B8D3FA",
    borderRadius: 13,
    backgroundColor: "#EDF5FF",
    color: "#2475E8",
  },

  title: {
    margin: 0,
    color: "#071B45",
    fontSize: 34,
    fontWeight: 900,
  },

  description: {
    margin: "4px 0 0",
    color: "#647A96",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.45,
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    padding: "0 14px 14px",
  },

  button: {
    minHeight: 44,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "9px 14px",
    borderRadius: 999,
    fontFamily: "inherit",
    fontSize: 28,
    fontWeight: 900,
    cursor: "pointer",
  },

  rejectButton: {
    border: "1px solid #EF4141",
    backgroundColor: "#FFF5F5",
    color: "#D83333",
  },

  approveButton: {
    border: "1px solid #079447",
    backgroundColor: "#0AA850",
    color: "#FFFFFF",
    boxShadow: "0 8px 18px rgba(10, 168, 80, 0.2)",
  },

  disabledButton: {
    opacity: 0.58,
    cursor: "not-allowed",
    boxShadow: "none",
  },

  finishedCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 11,
    padding: 14,
    border: "1px solid",
    borderRadius: 18,
    boxSizing: "border-box",
  },

  approvedMessage: {
    borderColor: "#A4E2C0",
    backgroundColor: "rgba(231, 249, 239, 0.92)",
  },

  rejectedMessage: {
    borderColor: "#FFB9B9",
    backgroundColor: "rgba(255, 240, 240, 0.92)",
  },

  finishedSymbol: {
    width: 44,
    height: 44,
    flex: "0 0 44px",
    display: "grid",
    placeItems: "center",
    borderRadius: 13,
  },

  approvedSymbol: {
    backgroundColor: "#DDF7E8",
    color: "#078842",
  },

  rejectedSymbol: {
    backgroundColor: "#FFE1E1",
    color: "#DF3434",
  },

  finishedTitle: {
    margin: 0,
    color: "#102A50",
    fontSize: 16,
    fontWeight: 900,
  },

  finishedDescription: {
    margin: "3px 0 0",
    color: "#637895",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.4,
  },
};

export default styles;