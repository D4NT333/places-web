const styles = {
  panel: {
    width: "100%",
    height: "340px",
    minHeight: 0,
    border: "1.5px solid #111827",
    borderRadius: 6,
    padding: "8px 10px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },

  totalText: {
    margin: "0 0 2px",
    fontSize: 17,
    fontWeight: 800,
    color: "#374151",
    lineHeight: 1.05,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 12,
  },

  reportItem: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: "8px 8px",
    border: "none",
    borderRadius: 8,
    backgroundColor: "transparent",
    textAlign: "left",
    cursor: "pointer",
    boxSizing: "border-box",
    transition:
      "background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
  },

  reportItemHovered: {
    backgroundColor: "#f1f5f9",
    boxShadow: "inset 4px 0 0 #111827",
    transform: "translateY(-1px)",
  },

  reasonRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    minWidth: 0,
  },

  dot: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "#000000",
    flexShrink: 0,
  },

  reason: {
    fontSize: 17,
    fontWeight: 800,
    color: "#374151",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  reportMeta: {
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    columnGap: 18,
    paddingLeft: 22,
    fontSize: 16,
    fontWeight: 800,
    color: "#374151",
  },

  emptyState: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#6b7280",
    fontSize: 16,
    fontWeight: 800,
  },
};

export default styles;