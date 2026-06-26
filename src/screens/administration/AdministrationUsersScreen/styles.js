const tableColumns = "40% 18% 13% 14% 15%";

const styles = {
  container: {
    width: "100%",
    padding: "28px 18px 34px",
    boxSizing: "border-box",
  },

  header: {
    marginBottom: 34,
  },

  title: {
    margin: 0,
    marginBottom: 8,
    fontSize: 26,
    fontWeight: 900,
    color: "#111827",
    letterSpacing: "-0.04em",
  },

  subtitle: {
    margin: 0,
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 600,
    color: "#64748b",
  },

  chipsRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },

  chip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 30,
    padding: "0 14px",
    borderRadius: 999,
    border: "1px solid #d8e1ec",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: 13,
    fontWeight: 850,
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
  },

  table: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    border: "1px solid #dce3ec",
    boxShadow: "0 14px 34px rgba(15, 23, 42, 0.06)",
    overflow: "hidden",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    minHeight: 56,
    padding: "0 28px",
    columnGap: 20,
    boxSizing: "border-box",
    color: "#0f172a",
    fontSize: 13,
    fontWeight: 900,
    borderBottom: "1px solid #dce3ec",
  },

  tableBody: {
    display: "flex",
    flexDirection: "column",
  },

  tableColumns,
};

export default styles;