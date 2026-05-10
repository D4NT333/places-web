const styles = {
  row: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.4fr 1.8fr 1fr 160px",
    alignItems: "center",
    gap: "18px",
    padding: "18px 20px",
    border: "none",
    borderBottom: "1px solid #eef2f7",
    backgroundColor: "#ffffff",
    textAlign: "left",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  nameCell: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  name: {
    color: "#111827",
    fontSize: "15px",
    fontWeight: 900,
    lineHeight: 1.25,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  addressCell: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  addressText: {
    display: "block",
    maxWidth: "100%",
    color: "#475569",
    fontSize: "13px",
    fontWeight: 600,
    lineHeight: 1.35,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeCell: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  typeText: {
    display: "block",
    maxWidth: "100%",
    color: "#334155",
    fontSize: "13px",
    fontWeight: 800,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  statusCell: {
    minWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  statusBadge: {
    minWidth: "92px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "7px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 900,
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