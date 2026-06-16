const styles = {
  container: {
    width: "100%",

    flex: "0 0 auto",

    display: "flex",
    alignItems: "center",

    boxSizing: "border-box",
  },

  information: {
    width: "100%",
    minWidth: 0,

    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  titleRow: {
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
  },

  title: {
    margin: 0,

    color: "#111827",

    fontSize: "20px",
    fontWeight: "800",
    lineHeight: 1.2,
  },

  subtitle: {
    margin: 0,

    color: "#64748b",

    fontSize: "12px",
    lineHeight: 1.35,
  },

  userName: {
    color: "#1f2937",

    fontWeight: "800",
  },

  separator: {
    margin: "0 6px",

    color: "#94a3b8",
  },

  status: {
    flexShrink: 0,

    display: "inline-flex",
    alignItems: "center",
    gap: "5px",

    padding: "5px 10px",

    border: "1px solid",
    borderRadius: "999px",

    fontSize: "10px",
    fontWeight: "800",
  },

  statusDot: {
    width: "5px",
    height: "5px",

    borderRadius: "50%",

    backgroundColor: "currentColor",
  },

  pendingStatus: {
    borderColor: "#f59e0b",
    backgroundColor: "#fffbeb",
    color: "#b45309",
  },

  approvedStatus: {
    borderColor: "#22c55e",
    backgroundColor: "#f0fdf4",
    color: "#15803d",
  },

  rejectedStatus: {
    borderColor: "#ef4444",
    backgroundColor: "#fef2f2",
    color: "#b91c1c",
  },
};

export default styles;