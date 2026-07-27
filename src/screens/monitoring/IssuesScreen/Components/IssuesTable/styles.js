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
    margin: "0 0 5px",
    color: "#101828",
    fontSize: "16px",
  },

  description: {
    margin: 0,
    color: "#667085",
    fontSize: "11px",
  },

  resultsChip: {
    flexShrink: 0,
    padding: "5px 9px",
    color: "#344054",
    backgroundColor: "#f2f4f7",
    borderRadius: "999px",
    fontSize: "10px",
    fontWeight: "700",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  tableHeader: {
    padding: "11px 12px",
    color: "#667085",
    backgroundColor: "#f8f9fb",
    borderBottom: "1px solid #e4e7ec",
    textAlign: "left",
    whiteSpace: "nowrap",
    fontSize: "10px",
    fontWeight: "700",
  },

  tableHeaderCenter: {
    padding: "11px 12px",
    color: "#667085",
    backgroundColor: "#f8f9fb",
    borderBottom: "1px solid #e4e7ec",
    textAlign: "center",
    whiteSpace: "nowrap",
    fontSize: "10px",
    fontWeight: "700",
  },

  tableRow: {
    cursor: "default",
  },

  tableCell: {
    padding: "13px 12px",
    color: "#344054",
    borderBottom: "1px solid #edf0f3",
    whiteSpace: "nowrap",
    fontSize: "11px",
  },

  tableCellCenter: {
    padding: "13px 12px",
    color: "#344054",
    borderBottom: "1px solid #edf0f3",
    textAlign: "center",
    whiteSpace: "nowrap",
    fontSize: "11px",
    fontWeight: "700",
  },

  issueInformation: {
    minWidth: "310px",
    maxWidth: "430px",
  },

  issueTitle: {
    margin: "0 0 5px",
    overflow: "hidden",
    color: "#101828",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "11px",
    fontWeight: "700",
  },

  issueMetadata: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  issueCode: {
    color: "#667085",
    fontSize: "9px",
  },

  metadataSeparator: {
    color: "#c2c7d0",
    fontSize: "9px",
  },

  issueModule: {
    color: "#98a2b3",
    fontSize: "9px",
  },

  chip: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "999px",
    fontSize: "9px",
    fontWeight: "700",
  },

  levelCritical: {
    color: "#7a271a",
    backgroundColor: "#fee4e2",
  },

  levelError: {
    color: "#b42318",
    backgroundColor: "#fef0f0",
  },

  levelWarning: {
    color: "#a15c00",
    backgroundColor: "#fff3d9",
  },

  levelInformation: {
    color: "#175cd3",
    backgroundColor: "#eaf2ff",
  },

  statusOpen: {
    color: "#b42318",
    backgroundColor: "#fef0f0",
  },

  statusReviewing: {
    color: "#a15c00",
    backgroundColor: "#fff3d9",
  },

  statusResolved: {
    color: "#137333",
    backgroundColor: "#e7f5eb",
  },

  statusIgnored: {
    color: "#475467",
    backgroundColor: "#f2f4f7",
  },

  statusReopened: {
  color: "#b42318",
  backgroundColor: "#fef0f0",
},

statusRegression: {
  color: "#7a271a",
  backgroundColor: "#fee4e2",
},

  viewButton: {
    padding: "7px 10px",
    color: "#344054",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "7px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "600",
  },

  emptyState: {
    padding: "48px 20px",
    textAlign: "center",
    backgroundColor: "#f8f9fb",
    borderRadius: "10px",
  },

  emptyTitle: {
    margin: "0 0 6px",
    color: "#101828",
    fontSize: "14px",
    fontWeight: "700",
  },

  emptyDescription: {
    margin: 0,
    color: "#667085",
    fontSize: "11px",
  },

  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "16px",
  },

  paginationButtonDisabled: {
    padding: "7px 11px",
    color: "#98a2b3",
    backgroundColor: "#f2f4f7",
    border: "1px solid #e4e7ec",
    borderRadius: "7px",
    cursor: "not-allowed",
    fontSize: "10px",
    fontWeight: "600",
  },

  pageInformation: {
    color: "#667085",
    fontSize: "10px",
    fontWeight: "600",
  },
};

export default styles;