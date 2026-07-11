const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 0,
  },

  title: {
    margin: 0,
    fontSize: 13,
    fontWeight: 900,
    color: "#0f172a",
  },

  chipsRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 8,
  },

  chip: {
    minHeight: 30,
    padding: "0 13px",
    borderRadius: 999,
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#334155",
    fontSize: 12,
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
  },

  chipSelected: {
    borderColor: "#0f172a",
    backgroundColor: "#0f172a",
    color: "#ffffff",
  },
};

export default styles;