export const tableColumns =
  "40% 13% 17% 23% 7%";

const styles = {
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.99), rgba(249,252,255,0.99))",
    border: "1px solid #cbdced",
    borderRadius: "17px",
    boxShadow:
      "0 15px 38px rgba(29, 70, 115, 0.13)",
  },

  table: {
    minWidth: "1180px",
  },

  header: {
    display: "grid",
    gridTemplateColumns:
      tableColumns,
    alignItems: "center",
    minHeight: "58px",
    padding: "0 18px",
    boxSizing: "border-box",
    color: "#0c2e5d",
    background:
      "linear-gradient(90deg, #f5faff, #eaf3ff)",
    borderBottom: "1px solid #cfdeed",
    fontSize: "2rem",
    fontWeight: 950,
  },

  centeredHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  body: {
    width: "100%",
  },

  stateContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "310px",
    padding: "34px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(245,250,255,0.98))",
    border: "1px solid #cbdced",
    borderRadius: "17px",
    boxShadow:
      "0 15px 38px rgba(29, 70, 115, 0.11)",
    textAlign: "center",
  },

  loadingIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    marginBottom: "15px",
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "999px",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    marginBottom: "15px",
    color: "#07954e",
    background: "#eafaf2",
    border: "1px solid #bfe8d1",
    borderRadius: "999px",
  },

  errorIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    marginBottom: "15px",
    color: "#dc3c3c",
    background: "#fff0f0",
    border: "1px solid #ffc3c3",
    borderRadius: "999px",
  },

  stateTitle: {
    margin: 0,
    color: "#0b315f",
    fontSize: "2.1rem",
    fontWeight: 950,
  },

  stateText: {
    maxWidth: "560px",
    margin: "8px 0 0",
    color: "#607a98",
    fontSize: "1.55rem",
    fontWeight: 650,
    lineHeight: 1.5,
  },

  retryButton: {
    minHeight: "43px",
    marginTop: "18px",
    padding: "0 17px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    border: "1px solid #1e70dc",
    borderRadius: "10px",
    fontFamily: "inherit",
    fontSize: "1.45rem",
    fontWeight: 900,
    cursor: "pointer",
  },
};

export default styles;