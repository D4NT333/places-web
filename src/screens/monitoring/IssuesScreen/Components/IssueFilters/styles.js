const styles = {
  container: {
    padding: "18px",
    marginBottom: "14px",
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

  clearButton: {
    flexShrink: 0,
    padding: "8px 12px",
    color: "#344054",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "600",
  },

  filtersGrid: {
  display: "grid",
  gridTemplateColumns:
    "repeat(5, minmax(150px, 1fr))",
  gap: "12px",
},

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  searchField: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  fieldLabel: {
    color: "#344054",
    fontSize: "10px",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    height: "38px",
    padding: "0 11px",
    color: "#101828",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
    fontSize: "11px",
  },

  select: {
    width: "100%",
    height: "38px",
    padding: "0 10px",
    color: "#101828",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    outline: "none",
    cursor: "pointer",
    boxSizing: "border-box",
    fontSize: "11px",
  },
  
};

export default styles;