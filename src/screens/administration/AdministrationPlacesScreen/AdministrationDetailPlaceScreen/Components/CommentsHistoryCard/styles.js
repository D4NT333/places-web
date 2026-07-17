const styles = {
  card: {
    minHeight: 330,
    padding: 18,
    border: "3px solid #000000",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  header: {
    marginBottom: 16,
  },

  title: {
    margin: 0,
    fontSize: 26,
    fontWeight: 800,
    color: "#111827",
  },

  counter: {
    display: "block",
    marginTop: 6,
    fontSize: 16,
    fontWeight: 700,
    color: "#6B7280",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "12px 10px",
    borderBottom: "2px solid #000000",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
  },

  tableRow: {
    transition: "background-color 0.15s ease, transform 0.15s ease",
    cursor: "pointer",
  },

  td: {
    padding: "14px 10px",
    borderBottom: "1px solid #bebebe",
    fontSize: 18,
    color: "#000000",
  },
 statusPill: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 78,
  padding: "5px 10px",
  border: "1px solid",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 800,
},

statusPillPublished: {
  backgroundColor: "#ECFDF5",
  borderColor: "#A7F3D0",
  color: "#047857",
},

statusPillHidden: {
  backgroundColor: "#FEF2F2",
  borderColor: "#FECACA",
  color: "#B91C1C",
},
countersRow: {
  display: "flex",
  alignItems: "center",
  gap: 14,
  flexWrap: "wrap",
},
};

export default styles;