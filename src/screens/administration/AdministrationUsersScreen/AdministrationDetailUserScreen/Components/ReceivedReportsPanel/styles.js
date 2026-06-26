const styles = {
  panel: {
    width: "100%",
    height: "100%",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 10,
    padding: "14px 16px",
    boxSizing: "border-box",
    backgroundColor: "#f9fafb",
    overflow: "hidden",
  },

  totalText: {
    margin: "0 0 4px",
    fontSize: 13,
    fontWeight: 900,
    color: "#111827",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
    marginTop: 20,
  },

  reportItem: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },

  reasonRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    minWidth: 0,
  },

  dot: {
    width: 13,
    height: 13,
    borderRadius: "50%",
    backgroundColor: "#000000",
    flexShrink: 0,
  },

  reason: {
    fontSize: 13,
    fontWeight: 900,
    color: "#374151",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  reportMeta: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 12,
    paddingLeft: 21,
    fontSize: 12,
    fontWeight: 800,
    color: "#4b5563",
  },

  emptyState: {
    height: "100%",
    minHeight: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#6b7280",
    fontSize: 14,
    fontWeight: 800,
  },
};

export default styles;