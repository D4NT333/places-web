const styles = {
  card: {
    width: "100%",

    /*
     * Hace crecer Información y rellena
     * el espacio sobrante de la derecha.
     */
    flex: "1 1 0",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",

    border: "1px solid #d9e0e8",
    borderRadius: "12px",

    backgroundColor: "#ffffff",

    boxShadow:
      "0 3px 12px rgba(15, 23, 42, 0.05)",
  },

  header: {
    flex: "0 0 60px",

    height: "60px",
    minHeight: "60px",

    display: "flex",
    alignItems: "center",

    padding: "9px 16px",
    boxSizing: "border-box",

    borderBottom: "1px solid #e5eaf0",
  },

  title: {
    margin: 0,

    color: "#111827",

    fontSize: "16px",
    fontWeight: "800",
  },

  subtitle: {
    margin: "3px 0 0",

    color: "#64748b",

    fontSize: "11px",
    lineHeight: 1.35,
  },

  content: {
    /*
     * Distribuye las filas uniformemente
     * dentro del alto disponible.
     */
    flex: 1,
    minHeight: 0,

    display: "grid",
    gridTemplateRows:
      "repeat(5, minmax(0, 1fr))",

    padding: "0 16px",
  },

  infoRow: {
    display: "grid",
    gridTemplateColumns:
      "115px minmax(0, 1fr)",

    alignItems: "center",
    gap: "12px",

    minHeight: 0,

    padding: "7px 0",
    boxSizing: "border-box",

    borderBottom: "1px solid #e8edf2",
  },

  infoLabel: {
    color: "#64748b",

    fontSize: "12px",
    fontWeight: "600",
  },

  infoValue: {
    overflowWrap: "anywhere",

    color: "#111827",

    fontSize: "13px",
    fontWeight: "800",

    lineHeight: 1.35,

    textAlign: "right",
  },

  status: {
    justifySelf: "end",

    display: "inline-flex",
    alignItems: "center",
    gap: "5px",

    padding: "5px 9px",

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

  footer: {
    flex: "0 0 auto",

    display: "flex",
    flexDirection: "column",
    gap: "2px",

    padding: "8px 16px",

    backgroundColor: "#f8fafc",

    borderTop: "1px solid #e5eaf0",
  },

  idLabel: {
    color: "#6b7280",

    fontSize: "9px",
    fontWeight: "600",
  },

  idValue: {
    overflowWrap: "anywhere",

    color: "#475569",

    fontFamily: "monospace",
    fontSize: "9px",
  },
};

export default styles;