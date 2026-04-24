const tableColumns = "2.3fr 1.2fr 1fr 1fr 1fr";

const baseStatusBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "90px",
  padding: "7px 14px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "800",
  boxSizing: "border-box",
};

const styles = {
  row: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    gap: "1rem",
    alignItems: "center",
    minHeight: "110px",
    padding: "0 1.25rem",
    borderBottom: "1px solid #edf0f3",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  placeCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
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
    textAlign: "center",
  },

  placeName: {
    display: "block",
    maxWidth: "220px",
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
    justifyContent: "center",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userPhotoCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cellText: {
    fontSize: "14px",
    color: "#07162f",
    textAlign: "center",
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
    ...baseStatusBadge,
    backgroundColor: "#f1f5f9",
    border: "1px solid #cbd5e1",
    color: "#475569",
  },

  statusBadge: {
    pendiente: {
      ...baseStatusBadge,
      backgroundColor: "#fff7ed",
      border: "1px solid #fbbf24",
      color: "#b45309",
    },

    aprobado: {
      ...baseStatusBadge,
      backgroundColor: "#ecfdf5",
      border: "1px solid #6ee7b7",
      color: "#047857",
    },

    devuelto: {
      ...baseStatusBadge,
      backgroundColor: "#eff6ff",
      border: "1px solid #93c5fd",
      color: "#1d4ed8",
    },

    rechazado: {
      ...baseStatusBadge,
      backgroundColor: "#fef2f2",
      border: "1px solid #fca5a5",
      color: "#b91c1c",
    },
  },
};

export default styles;