const styles = {
  container: {
    padding: "54px 52px",
  },

  toolbar: {
  display: "grid",
  gridTemplateColumns: "minmax(320px, 1fr) minmax(900px, 980px)",
  alignItems: "start",
  columnGap: 60,
  marginBottom: 34,
},

  headerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 900,
    color: "#0f172a",
  },

  subtitle: {
    margin: "8px 0 0",
    fontSize: 14,
    fontWeight: 500,
    color: "#64748b",
  },

  summaryChipsRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
  },

  summaryChip: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: 28,
    padding: "0 14px",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: 12,
    fontWeight: 800,
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
  },

  table: {
    width: "100%",
    borderRadius: 14,
    border: "1px solid #dbe3ec",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
  },

  tableHeader: {
  display: "grid",
  gridTemplateColumns:
    "2fr 0.9fr 1fr 1.1fr 1.1fr 1.1fr 1.2fr",
  alignItems: "center",
  minHeight: 56,
  textAlign: "center",
  padding: "0 24px",
  borderBottom: "1px solid #dbe3ec",
  color: "#0f172a",
  fontSize: 13,
  fontWeight: 900,
},

  tableBody: {
    display: "flex",
    flexDirection: "column",
  },
};

export default styles;