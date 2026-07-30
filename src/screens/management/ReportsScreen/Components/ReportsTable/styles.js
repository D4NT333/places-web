const styles = {
  tableWrapper: {
    width: "100%",
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.99), rgba(249,252,255,0.99))",
    border: "1px solid #cbdced",
    borderRadius: "17px",
    boxShadow:
      "0 15px 38px rgba(29, 70, 115, 0.13)",
  },

  tableScroller: {
    width: "100%",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    minWidth: "1350px",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  },

  headerRow: {
    height: "58px",
    background:
      "linear-gradient(90deg, #f5faff, #eaf3ff)",
  },

  headerCell: {
    padding: "0 18px",
    color: "#0c2e5d",
    borderBottom: "1px solid #cfdeed",
    fontSize: "2rem",
    fontWeight: 950,
    textAlign: "left",
    whiteSpace: "nowrap",
  },

  bodyRow: {
    height: "92px",
    background:
      "rgba(255, 255, 255, 0.84)",
    cursor: "pointer",
    outline: "none",
    transition:
      "background 160ms ease, box-shadow 160ms ease",
  },

  bodyCell: {
    padding: "14px 18px",
    color: "#17365e",
    borderBottom: "1px solid #dbe6f1",
    fontSize: "2rem",
    fontWeight: 750,
    verticalAlign: "middle",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeCell: {
    width: "12%",
  },

  reasonCell: {
    width: "20%",
  },

  relatedCell: {
    width: "24%",
  },

  dateCell: {
    width: "15%",
  },

  userCell: {
    width: "17%",
  },

  statusCell: {
    width: "9%",
  },

  selectionHeader: {
    width: "3%",
    padding: 0,
    borderBottom: "1px solid #cfdeed",
  },

  selectionCell: {
    width: "3%",
    padding: "0 11px 0 0",
    color: "#2176e5",
    borderBottom: "1px solid #dbe6f1",
    textAlign: "center",
    verticalAlign: "middle",
  },

  reasonValue: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    minWidth: 0,
    color: "#d7830e",
  },

  strongText: {
    overflow: "hidden",
    color: "#0d315f",
    fontWeight: 900,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  relatedValue: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    minWidth: 0,
    color: "#2176e5",
  },

  relatedText: {
    overflow: "hidden",
    color: "#294f77",
    fontWeight: 800,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  dateValue: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#2583f4",
  },

  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "300px",
    padding: "30px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, #ffffff, #f6faff)",
    border: "1px solid #cbdced",
    borderRadius: "17px",
    textAlign: "center",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    marginBottom: "14px",
    color: "#7389a2",
    background: "#eef4fa",
    border: "1px solid #d1deeb",
    borderRadius: "999px",
  },

  emptyTitle: {
    margin: 0,
    color: "#0b315f",
    fontSize: "2.1rem",
    fontWeight: 950,
  },

  emptyText: {
    margin: "8px 0 0",
    color: "#607a98",
    fontSize: "1.55rem",
    fontWeight: 650,
  },
};

export default styles;