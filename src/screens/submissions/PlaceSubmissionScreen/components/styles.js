const styles = {
  row: {
    display: "grid",
    gridTemplateColumns: "2.3fr 1.2fr 1fr 1fr 1fr",
    gap: "1rem",
    alignItems: "center",
    padding: "1rem 1.25rem",
    borderBottom: "1px solid #f1f5f9",
  },

  placeCell: {
    display: "flex",
    alignItems: "center",
    gap: "0.9rem",
    minWidth: 0,
  },

  placePhoto: {
    width: "54px",
    height: "54px",
    minWidth: "54px",
    borderRadius: "999px",
    border: "1px solid #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "#f3f4f6",
    textAlign: "center",
    padding: "0.3rem",
    boxSizing: "border-box",
  },

  userPhoto: {
    width: "48px",
    height: "48px",
    minWidth: "48px",
    borderRadius: "999px",
    border: "1px solid #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "#f3f4f6",
    textAlign: "center",
    padding: "0.3rem",
    boxSizing: "border-box",
  },

  photoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoPlaceholderText: {
    fontSize: "0.68rem",
    color: "#6b7280",
    lineHeight: 1.1,
  },

  placeName: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#111827",
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
    fontSize: "0.92rem",
    color: "#374151",
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "0.45rem 0.75rem",
    fontSize: "0.82rem",
    fontWeight: 700,
    border: "1px solid transparent",
    minWidth: "100px",
  },

  statusApproved: {
    background: "#ecfdf5",
    color: "#047857",
    borderColor: "#a7f3d0",
  },

  statusPending: {
    background: "#fffbeb",
    color: "#b45309",
    borderColor: "#fde68a",
  },

  statusRejected: {
    background: "#fef2f2",
    color: "#b91c1c",
    borderColor: "#fecaca",
  },

  statusDefault: {
    background: "#f3f4f6",
    color: "#4b5563",
    borderColor: "#d1d5db",
  },
};

export default styles;