const styles = {
  container: {
    padding: "18px",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe3e8",
    borderRadius: "14px",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "16px",
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

  viewAllButton: {
    flexShrink: 0,
    padding: "8px 12px",
    color: "#344054",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "600",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  tableHeader: {
    padding: "10px 12px",
    color: "#667085",
    backgroundColor: "#f8f9fb",
    borderBottom: "1px solid #e4e7ec",
    textAlign: "left",
    whiteSpace: "nowrap",
    fontSize: "9px",
    fontWeight: "700",
  },

  tableHeaderCenter: {
    padding: "10px 12px",
    color: "#667085",
    backgroundColor: "#f8f9fb",
    borderBottom: "1px solid #e4e7ec",
    textAlign: "center",
    whiteSpace: "nowrap",
    fontSize: "9px",
    fontWeight: "700",
  },

  tableCell: {
    padding: "12px",
    color: "#344054",
    borderBottom: "1px solid #edf0f3",
    whiteSpace: "nowrap",
    fontSize: "10px",
  },

  tableCellCenter: {
    padding: "12px",
    color: "#344054",
    borderBottom: "1px solid #edf0f3",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "700",
  },

  issueTitle: {
    maxWidth: "380px",
    margin: "0 0 4px",
    overflow: "hidden",
    color: "#101828",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "10px",
    fontWeight: "600",
  },

  issueCode: {
    color: "#98a2b3",
    fontSize: "8px",
  },

  levelChip: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "999px",
    fontSize: "8px",
    fontWeight: "700",
  },

  levels: {
    fatal: {
      color: "#7a271a",
      backgroundColor: "#fee4e2",
    },

    error: {
      color: "#b42318",
      backgroundColor: "#fef0f0",
    },

    warning: {
      color: "#a15c00",
      backgroundColor: "#fff3d9",
    },

    info: {
      color: "#175cd3",
      backgroundColor: "#eaf2ff",
    },
  },
};

export default styles;