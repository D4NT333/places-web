const styles = {
  card: {
    minHeight: 330,
    padding: 18,
    border: "1px solid #D1D5DB",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  header: {
    marginBottom: 16,
  },

  title: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  counter: {
    display: "block",
    marginTop: 6,
    fontSize: 12,
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
    borderBottom: "1px solid #D1D5DB",
    textAlign: "left",
    fontSize: 12,
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
    borderBottom: "1px solid #EEF2F7",
    fontSize: 13,
    color: "#111827",
  },
  statusPill: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 78,
  padding: "5px 10px",
  border: "1px solid #CBD5E1",
  borderRadius: 999,
  backgroundColor: "#FFFFFF",
  color: "#0F172A",
  fontSize: 11,
  fontWeight: 800,
},
countersRow: {
  display: "flex",
  alignItems: "center",
  gap: 14,
  flexWrap: "wrap",
},
};

export default styles;