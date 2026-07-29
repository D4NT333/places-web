const styles = {
  card: {
  width: "100%",
  minWidth: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: 14,
  border: "1px solid rgba(195, 213, 237, 0.98)",
  borderRadius: 18,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 14px 30px rgba(30, 72, 126, 0.1)",
  backdropFilter: "blur(9px)",
  boxSizing: "border-box",
},

  header: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    paddingBottom: 13,
    borderBottom: "1px solid #D9E4F1",
  },

  headerIconBox: {
    width: 54,
    height: 54,
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
    fontSize: 44,
    fontWeight: 900,
  },

  subtitle: {
    margin: "3px 0 0",
    color: "#647A96",
    fontSize: 28,
    fontWeight: 600,
  },

  content: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 10,
  paddingTop: 13,
},

  infoField: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 11,
    border: "1px solid #D1DEEE",
    borderRadius: 14,
    backgroundColor: "#F4F8FD",
    boxSizing: "border-box",
  },

  fieldIconBox: {
    width: 52,
    height: 52,
    flex: "0 0 42px",
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
  },

  iconBlue: {
    border: "1px solid #B7D3FA",
    backgroundColor: "#EAF3FF",
    color: "#2475E8",
  },

  iconGreen: {
    border: "1px solid #A9E2C4",
    backgroundColor: "#E9F9F0",
    color: "#0A9854",
  },

  iconViolet: {
    border: "1px solid #D0C5FF",
    backgroundColor: "#F1EDFF",
    color: "#6D4FE8",
  },

  iconOrange: {
    border: "1px solid #FFD18A",
    backgroundColor: "#FFF6E5",
    color: "#D77A00",
  },

  iconRed: {
    border: "1px solid #FFB9B9",
    backgroundColor: "#FFF0F0",
    color: "#DF3434",
  },

  fieldContent: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  infoLabel: {
    color: "#71839A",
    fontSize: 34,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  infoValue: {
    overflowWrap: "anywhere",
    color: "#122F59",
    fontSize: 30,
    fontWeight: 900,
    lineHeight: 1.3,
  },

  status: {
    width: "fit-content",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 11px",
    border: "1px solid",
    borderRadius: 999,
    fontSize: 30,
    fontWeight: 900,
  },

  pendingStatus: {
    borderColor: "#FFD18A",
    backgroundColor: "#FFF7E5",
    color: "#C86D00",
  },

  approvedStatus: {
    borderColor: "#A4E2C0",
    backgroundColor: "#E7F9EF",
    color: "#078842",
  },

  rejectedStatus: {
    borderColor: "#FFB9B9",
    backgroundColor: "#FFF0F0",
    color: "#DF3434",
  },
};

export default styles;