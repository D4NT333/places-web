const styles = {
  card: {
    width: "100%",
    padding: "22px 24px",
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 18,
  },

  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#111827",
  },

  totalText: {
    margin: "8px 0 0",
    fontSize: 14,
    fontWeight: 700,
    color: "#334155",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 22,
    alignItems: "stretch",
  },

  metricsColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  metricChip: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "10px 13px",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontSize: 14,
    fontWeight: 800,
    boxSizing: "border-box",
  },

  chartBox: {
    minHeight: 190,
    padding: "14px 16px",
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    backgroundColor: "#f9fafb",
    boxSizing: "border-box",
  },

  chartHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 10,
  },

  chartTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    color: "#111827",
  },

  chartHint: {
    padding: "4px 8px",
    borderRadius: 999,
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    color: "#64748b",
    fontSize: 11,
    fontWeight: 800,
  },

  chartWrapper: {
    height: 140,
    width: "100%",
  },

  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: 34,
    flexWrap: "wrap",
    marginTop: 20,
    paddingTop: 16,
    borderTop: "1px solid #eef2f7",
  },

  statusItem: {
    fontSize: 14,
    fontWeight: 800,
    color: "#334155",
  },
};

export default styles;