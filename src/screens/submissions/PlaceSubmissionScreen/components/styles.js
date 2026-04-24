const tableColumns = "2.3fr 1.2fr 1fr 1fr 1fr";

const styles = {
  container: {
    padding: "24px",
    width: "100%",
    boxSizing: "border-box",
  },

  headerBlock: {
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "800",
    margin: 0,
    color: "#07162f",
  },

  subtitle: {
    fontSize: "15px",
    marginTop: "8px",
    color: "#667085",
  },

  tableCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    minHeight: "48px",
    padding: "0 20px",
    backgroundColor: "#f8fafc",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "13px",
    fontWeight: "800",
    color: "#07162f",
    boxSizing: "border-box",
  },

  rowsWrapper: {
    width: "100%",
  },

  row: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    minHeight: "78px",
    padding: "0 20px",
    borderBottom: "1px solid #edf0f3",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  placeCell: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    minWidth: 0,
  },

  placePhoto: {
    width: "46px",
    height: "46px",
    minWidth: "46px",
    borderRadius: "999px",
    border: "1px solid #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
    textAlign: "center",
    boxSizing: "border-box",
  },

  photoPlaceholderText: {
    fontSize: "10px",
    color: "#6b7280",
    lineHeight: "12px",
  },

  placeName: {
    fontSize: "15px",
    fontWeight: "800",
    color: "#07162f",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  dateCell: {
    display: "flex",
    alignItems: "center",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
  },

  userPhotoCell: {
    display: "flex",
    alignItems: "center",
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
  },

  cellText: {
    fontSize: "14px",
    color: "#07162f",
  },

  userPhoto: {
    width: "42px",
    height: "42px",
    minWidth: "42px",
    borderRadius: "999px",
    border: "1px solid #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
    textAlign: "center",
    boxSizing: "border-box",
  },

  statusBadgeDefault: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "90px",
    padding: "7px 14px",
    borderRadius: "999px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #cbd5e1",
    color: "#475569",
    fontSize: "12px",
    fontWeight: "800",
    boxSizing: "border-box",
  },

  statusBadge: {
    pendiente: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "90px",
      padding: "7px 14px",
      borderRadius: "999px",
      backgroundColor: "#fff7ed",
      border: "1px solid #fbbf24",
      color: "#b45309",
      fontSize: "12px",
      fontWeight: "800",
      boxSizing: "border-box",
    },

    aprobado: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "90px",
      padding: "7px 14px",
      borderRadius: "999px",
      backgroundColor: "#ecfdf5",
      border: "1px solid #6ee7b7",
      color: "#047857",
      fontSize: "12px",
      fontWeight: "800",
      boxSizing: "border-box",
    },

    rechazado: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "90px",
      padding: "7px 14px",
      borderRadius: "999px",
      backgroundColor: "#fef2f2",
      border: "1px solid #fca5a5",
      color: "#b91c1c",
      fontSize: "12px",
      fontWeight: "800",
      boxSizing: "border-box",
    },
  },

  emptyState: {
    padding: "32px",
    textAlign: "center",
    color: "#64748b",
    fontWeight: "600",
  },
};

export default styles;