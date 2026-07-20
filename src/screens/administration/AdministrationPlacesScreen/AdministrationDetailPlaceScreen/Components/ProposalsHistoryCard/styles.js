const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    padding: 18,
    border: "2px solid #111827",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  header: {
    marginBottom: 18,
  },

  title: {
    margin: "0 0 8px",
    fontSize: 22,
    fontWeight: 900,
    color: "#111827",
  },

  countersRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  counter: {
    color: "#334155",
    fontSize: 13,
    fontWeight: 600,
  },

  emptyMessage: {
    margin: 0,
    padding: "24px 0",
    color: "#64748B",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },

  table: {
    width: "100%",
    minWidth: 0,
  },

 tableHeader: {
  display: "grid",
  gridTemplateColumns:
    "0.8fr minmax(150px, 1.6fr) 0.9fr 0.8fr",
  alignItems: "center",
  justifyItems: "center",
  gap: 16,
  minHeight: 42,
  padding: "0 8px",
  borderBottom: "1px solid #111827",
  color: "#0F172A",
  fontSize: 15,
  fontWeight: 900,
  textAlign: "center",
  boxSizing: "border-box",
},

  tableBody: {
    width: "100%",
  },

 row: {
  display: "grid",
  gridTemplateColumns:
    "0.8fr minmax(150px, 1.6fr) 0.9fr 0.8fr",
  alignItems: "center",
  justifyItems: "center",
  gap: 16,
  minHeight: 52,
  padding: "0 8px",
  borderBottom: "1px solid #CBD5E1",
  color: "#0F172A",
  fontSize: 14,
  textAlign: "center",
  cursor: "pointer",
  boxSizing: "border-box",
  transition: "background-color 140ms ease",
},

typeCell: {
  width: "100%",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "center",
},

dateCell: {
  width: "100%",
  minWidth: 0,
  textAlign: "center",
  whiteSpace: "nowrap",
},

statusCell: {
  width: "100%",
  minWidth: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

  statusCell: {
    display: "flex",
    justifyContent: "center",
    minWidth: 0,
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 24,
    padding: "3px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  statusApproved: {
    border: "1px solid #A7F3D0",
    backgroundColor: "#ECFDF5",
    color: "#047857",
  },

  statusPending: {
    border: "1px solid #FDE68A",
    backgroundColor: "#FFFBEB",
    color: "#B45309",
  },

  statusRejected: {
    border: "1px solid #FECACA",
    backgroundColor: "#FEF2F2",
    color: "#B91C1C",
  },

  statusReturned: {
    border: "1px solid #BFDBFE",
    backgroundColor: "#EFF6FF",
    color: "#1D4ED8",
  },

  statusResubmitted: {
    border: "1px solid #DDD6FE",
    backgroundColor: "#F5F3FF",
    color: "#6D28D9",
  },

  statusPendingDelete: {
    border: "1px solid #FED7AA",
    backgroundColor: "#FFF7ED",
    color: "#C2410C",
  },

  loadMoreButton: {
    width: "100%",
    marginTop: 16,
    minHeight: 40,
    border: "1px solid #CBD5E1",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    color: "#0F172A",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
  },

  loadMoreButtonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
};

export default styles;