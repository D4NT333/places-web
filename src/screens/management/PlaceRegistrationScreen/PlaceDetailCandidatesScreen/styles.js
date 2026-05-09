const styles = {
  container: {
    width: "100%",
    padding: "14px 32px 18px",
    boxSizing: "border-box",
  },

  backButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#2563eb",
    fontSize: "13px",
    fontWeight: 800,
    cursor: "pointer",
    padding: 0,
    marginBottom: "6px",
  },

  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 900,
    color: "#111827",
  },

  subtitle: {
    margin: "4px 0 0",
    fontSize: "14px",
    color: "#6b7280",
    maxWidth: "620px",
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    paddingTop: "12px",
  },

  statusBadge: {
    minWidth: "92px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 13px",
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

  rejectButton: {
    border: "1px solid #fecaca",
    backgroundColor: "#fff",
    color: "#991b1b",
    borderRadius: "999px",
    padding: "9px 17px",
    fontSize: "13px",
    fontWeight: 900,
    cursor: "pointer",
  },

  acceptButton: {
    border: "1px solid #2563eb",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    borderRadius: "999px",
    padding: "9px 18px",
    fontSize: "13px",
    fontWeight: 900,
    cursor: "pointer",
  },

 contentGrid: {
  display: "grid",
  gridTemplateColumns: "520px 1fr",
  gap: "18px",
  alignItems: "stretch",
  minHeight: "810px",
},

  bottomPanel: {
    marginTop: "12px",
    padding: "12px 16px",
    borderRadius: "14px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#4b5563",
    fontSize: "13px",
  },
  header: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "20px",
  marginBottom: "0px",
},

headerTextBlock: {
  paddingTop: "1px",
},

headerActions: {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  paddingTop: "1px",
},

mainContentOffset: {
  marginTop: "12px",
},

footerActions: {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "12px",
},

backButtonBottom: {
  border: "1px solid #d1d5db",
  backgroundColor: "#ffffff",
  color: "#374151",
  borderRadius: "999px",
  padding: "9px 18px",
  fontSize: "13px",
  fontWeight: 900,
  cursor: "pointer",
},
};

export default styles;