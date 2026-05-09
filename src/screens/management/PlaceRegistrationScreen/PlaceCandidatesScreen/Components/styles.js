const styles = {
  rowButton: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.3fr 1.8fr 1fr 0.8fr",
    gap: "16px",
    alignItems: "center",
    padding: "18px 24px",
    backgroundColor: "#ffffff",
    border: "none",
    borderBottom: "1px solid #f3f4f6",
    cursor: "pointer",
    textAlign: "left",
  },

  nameCell: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  placeName: {
    fontSize: "15px",
    fontWeight: 800,
    color: "#111827",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  placeId: {
    fontSize: "12px",
    color: "#9ca3af",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  addressCell: {
    minWidth: 0,
    fontSize: "14px",
    color: "#4b5563",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeCell: {
    minWidth: 0,
    fontSize: "14px",
    color: "#374151",
    textTransform: "capitalize",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  statusCell: {
    display: "flex",
    justifyContent: "center",
  },

  statusBadge: {
    minWidth: "92px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "7px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 800,
  },

  statusPending: {
    color: "#92400e",
    backgroundColor: "#fef3c7",
    border: "1px solid #fde68a",
  },

  statusAccepted: {
    color: "#166534",
    backgroundColor: "#dcfce7",
    border: "1px solid #bbf7d0",
  },

  statusRejected: {
    color: "#991b1b",
    backgroundColor: "#fee2e2",
    border: "1px solid #fecaca",
  },
};

export default styles;