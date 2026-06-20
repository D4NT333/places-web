export const tableColumns =
   "42% 10% 13% 20% 15%";

const styles = {
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    border: "1px solid #e4e7ec",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  },

  table: {
    minWidth: "1150px",
  },

  header: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    minHeight: "48px",
    padding: "0 16px",
    borderBottom: "1px solid #e4e7ec",
    color: "#344054",
    fontSize: "23px",
    fontWeight: 700,
    boxSizing: "border-box",
  },

  body: {
    width: "100%",
  },

  stateContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "280px",
    padding: "32px",
    border: "1px solid #e4e7ec",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    boxSizing: "border-box",
  },

  spinner: {
    width: "32px",
    height: "32px",
    marginBottom: "16px",
    border: "3px solid #e4e7ec",
    borderTopColor: "#475467",
    borderRadius: "50%",
  },

  emptyIcon: {
    display: "grid",
    placeItems: "center",
    width: "44px",
    height: "44px",
    marginBottom: "14px",
    borderRadius: "50%",
    backgroundColor: "#ecfdf3",
    color: "#027a48",
    fontSize: "22px",
    fontWeight: 700,
  },

  errorIcon: {
    display: "grid",
    placeItems: "center",
    width: "44px",
    height: "44px",
    marginBottom: "14px",
    borderRadius: "50%",
    backgroundColor: "#fef3f2",
    color: "#d92d20",
    fontSize: "22px",
    fontWeight: 700,
  },

  stateTitle: {
    margin: 0,
    color: "#101828",
    fontSize: "18px",
    fontWeight: 700,
  },

  stateText: {
    maxWidth: "440px",
    margin: "8px 0 0",
    color: "#667085",
    fontSize: "14px",
    lineHeight: 1.5,
  },

  retryButton: {
    marginTop: "18px",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#172033",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  centeredHeader: {
  textAlign: "center",
},
};

export default styles;