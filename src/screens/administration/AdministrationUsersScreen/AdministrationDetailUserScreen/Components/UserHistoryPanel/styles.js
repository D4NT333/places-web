const tableColumns = "1fr 2fr 1fr 1fr";
const styles = {
  card: {
    height: "100%",
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    border: "1.5px solid #111827",
    borderRadius: 12,
    backgroundColor: "#ffffff",
    padding: "22px 24px",
    boxSizing: "border-box",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
    overflow: "hidden",
  },

  title: {
    margin: "0 0 22px",
    fontSize: 27,
    fontWeight: 900,
    color: "#111827",
    flexShrink: 0,
  },

  table: {
    width: "100%",
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },

  headerRow: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    gap: 14,
    padding: "14px 18px",
    borderBottom: "1px solid #d1d5db",
    backgroundColor: "#f9fafb",
    fontSize: 14,
    fontWeight: 900,
    color: "#374151",
    boxSizing: "border-box",
    flexShrink: 0,
  },

  headerCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  body: {
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    overflowX: "hidden",
  },

  row: {
    width: "100%",
    minHeight: 58,
    flexShrink: 0,
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    gap: 14,
    padding: "0 18px",
    border: "none",
    borderBottom: "1px solid #eef2f7",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    textAlign: "left",
    cursor: "pointer",
    boxSizing: "border-box",
    transition:
      "background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
  },

  rowHovered: {
    backgroundColor: "#f1f5f9",
    boxShadow: "inset 4px 0 0 #111827",
    transform: "translateY(-1px)",
  },

  cell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 14,
    fontWeight: 850,
    color: "#1f2937",
    whiteSpace: "nowrap",
  },

  statusCell: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 14,
    fontWeight: 900,
    color: "#0f172a",
    whiteSpace: "nowrap",
  },

  emptyState: {
    flex: 1,
    minHeight: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280",
    fontSize: 15,
    fontWeight: 800,
  },
  relatedCell: {
  minWidth: 0,

  display: "block",

  fontSize: 14,
  fontWeight: 850,
  color: "#1f2937",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
},
};

export default styles;