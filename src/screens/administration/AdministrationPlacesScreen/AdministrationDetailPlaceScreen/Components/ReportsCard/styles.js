const styles = {
  card: {
    padding: 18,
    border: "1px solid #D1D5DB",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 12,
  },

  title: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  subtitle: {
    margin: "6px 0 0",
    fontSize: 13,
    color: "#374151",
  },

  statusBlock: {
    display: "grid",
    gap: 4,
    justifyItems: "end",
  },

  statusLabel: {
    fontSize: 10,
    fontWeight: 800,
    color: "#374151",
  },

  statusPill: {
    minWidth: 84,
    padding: "6px 12px",
    border: "1px solid #9CA3AF",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 700,
    color: "#111827",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "11px 8px",
    borderBottom: "1px solid #D1D5DB",
    textAlign: "left",
    fontSize: 12,
    fontWeight: 800,
    color: "#374151",
  },

  tableRow: {
    transition: "background-color 0.15s ease",
    cursor: "pointer",
  },

  td: {
    padding: "13px 8px",
    borderBottom: "1px solid #EEF2F7",
    fontSize: 13,
    color: "#111827",
  },
};

export default styles;