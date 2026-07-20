const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    padding: 18,
    border: "1px solid #D1D5DB",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  headerRow: {
    width: "100%",
    minWidth: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
    boxSizing: "border-box",
  },

  title: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  statusBlock: {
    display: "grid",
    gap: 4,
    justifyItems: "end",
    flexShrink: 0,
  },

  statusLabel: {
    fontSize: 10,
    fontWeight: 800,
    color: "#374151",
    whiteSpace: "nowrap",
  },

  statusPill: {
    minWidth: 90,
    padding: "6px 12px",
    border: "1px solid #9CA3AF",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 700,
    color: "#111827",
    boxSizing: "border-box",
  },

  list: {
    display: "grid",
    gap: 9,
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    minHeight: 28,
    padding: "7px 8px",
    borderRadius: 9,
    transition: "background-color 0.15s ease",
    boxSizing: "border-box",
    minWidth: 0,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: "#111827",
    flexShrink: 0,
  },

  itemText: {
    minWidth: 0,
    fontSize: 13,
    fontWeight: 700,
    color: "#111827",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  titleBlock: {
  display: "flex",
  alignItems: "center",
  gap: 12,
  minWidth: 0,
},

dateLabel: {
  color: "#64748B",
  fontSize: 11,
  fontWeight: 700,
  whiteSpace: "nowrap",
},
};

export default styles;