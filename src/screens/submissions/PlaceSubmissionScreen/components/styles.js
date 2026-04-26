const tableColumns = "2.3fr 1.2fr 1fr 1fr 1fr";

const baseCircleImage = {
  borderRadius: "999px",
  border: "1px solid #d1d5db",
  overflow: "hidden",
  backgroundColor: "#f3f4f6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  flexShrink: 0,
};

const baseStatusBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "86px",
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "22px",
  fontWeight: "700",
  boxSizing: "border-box",
};

const styles = {
  row: {
    display: "grid",
    gridTemplateColumns: tableColumns,
    gap: "1rem",
    alignItems: "center",
    minHeight: "150px",
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

  placeImage: {
    ...baseCircleImage,
    width: "98px",
    height: "98px",
    minWidth: "98px",
    objectFit: "cover",
    display: "block",
  },

  placeImagePlaceholder: {
    ...baseCircleImage,
    width: "98px",
    height: "98px",
    minWidth: "98px",
    fontSize: "9px",
    color: "#6b7280",
    lineHeight: "11px",
    textAlign: "center",
  },

  placeName: {
    display: "block",
    maxWidth: "220px",
    fontSize: "20px",
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
    fontSize: "20px",
    color: "#07162f",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#07162f",
  },

  userPhotoCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userImage: {
    ...baseCircleImage,
    width: "98px",
    height: "98px",
    minWidth: "98px",
    objectFit: "cover",
    display: "block",
  },

  userImagePlaceholder: {
    ...baseCircleImage,
    width: "98px",
    height: "98px",
    minWidth: "42px",
    fontSize: "8px",
    color: "#6b7280",
    lineHeight: "10px",
    textAlign: "center",
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  statusBadge: {
    ...baseStatusBadge,
  },

  statusPending: {
    color: "#b45309",
    backgroundColor: "#fef3c7",
    border: "1px solid #f59e0b",
  },

  statusApproved: {
    color: "#047857",
    backgroundColor: "#d1fae5",
    border: "1px solid #6ee7b7",
  },

  statusReturned: {
    color: "#1d4ed8",
    backgroundColor: "#dbeafe",
    border: "1px solid #60a5fa",
  },

  statusRejected: {
    color: "#b91c1c",
    backgroundColor: "#fee2e2",
    border: "1px solid #f87171",
  },

  statusDefault: {
    color: "#334155",
    backgroundColor: "#f1f5f9",
    border: "1px solid #cbd5e1",
  },
};

export default styles;