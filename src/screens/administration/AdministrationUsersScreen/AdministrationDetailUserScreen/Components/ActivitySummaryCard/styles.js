const styles = {
  card: {
    height: "100%",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 12,
    backgroundColor: "#ffffff",
    padding: "18px 22px",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateRows: "auto auto 1fr auto",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
    overflow: "hidden",
  },

  title: {
    margin: 0,
    fontSize: 25,
    fontWeight: 900,
    color: "#111827",
  },

  total: {
    margin: "6px 0 14px",
    fontSize: 17,
    fontWeight: 800,
    color: "#374151",
  },

  chipsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    alignContent: "flex-start",
  },
  chartWrapper: {
  width: "100%",
  height: "100%",
},

  chip: {
    minHeight: 38,
    padding: "6px 16px",
    borderRadius: 8,
    border: "1.5px solid #111827",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: 800,
    color: "#374151",
    backgroundColor: "#ffffff",
  },

  statusRow: {
    alignSelf: "end",
    display: "grid",
    gridTemplateColumns: "repeat(3, max-content)",
    columnGap: 70,
  },

  statusText: {
    fontSize: 17,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
  },
  chartBox: {
  width: "100%",
  height: 210,
  padding: "12px 1px",
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  backgroundColor: "#f9fafb",
  boxSizing: "border-box",
  marginTop: 12,
  marginBottom: 12,
},
metricsRow: {
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  flexWrap: "wrap",
  marginTop: "0.85rem",
},

metricChip: {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35rem",
  padding: "0.45rem 0.7rem",
  borderRadius: 999,
  border: "1px solid #e5e7eb",
  backgroundColor: "#f9fafb",
  color: "#374151",
  fontSize: "0.82rem",
  fontWeight: 700,
},

statusRow: {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  flexWrap: "wrap",
  marginTop: "0.75rem",
  marginBottom: "1rem",
},

statusItem: {
  color: "#475569",
  fontSize: "0.82rem",
  fontWeight: 700,
},
header: {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 20,
},

weekSelect: {
  minWidth: 230,
  height: 38,
  padding: "0 14px",
  borderRadius: 10,
  border: "1.5px solid #111827",
  backgroundColor: "#ffffff",
  color: "#111827",
  fontSize: 14,
  fontWeight: 800,
  cursor: "pointer",
  outline: "none",
},

loadingState: {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#64748b",
  fontSize: 15,
  fontWeight: 800,
},
};

export default styles;