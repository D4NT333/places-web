const styles = {
  row: {
    width: "100%",
    minHeight: 96,
    display: "grid",
    gridTemplateColumns: "1.2fr 1.4fr 1.8fr 0.8fr",
    alignItems: "center",
    border: "none",
    borderBottom: "1px solid #E5E7EB",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    padding: "16px 24px",
    textAlign: "left",
  },

  placeColumn: {
    minWidth: 0,
  },

  placeInfo: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },

  photo: {
    width: 84,
    height: 84,
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#EEF2F7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  photoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoText: {
    fontSize: 12,
    fontWeight: 800,
    color: "#6B7280",
  },

  placeTextBox: {
    minWidth: 0,
  },

  placeName: {
    fontSize: 14,
    fontWeight: 900,
    color: "#07142F",
    marginBottom: 6,
  },

  placeSubtitle: {
    fontSize: 12,
    fontWeight: 600,
    color: "#7A8599",
  },

  dateColumn: {
    minWidth: 0,
  },

  dateText: {
    fontSize: 13,
    fontWeight: 800,
    color: "#172033",
  },

  previewColumn: {
    minWidth: 0,
  },

  previewText: {
    margin: 0,
    fontSize: 13,
    fontWeight: 500,
    color: "#172033",
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  statusColumn: {
    display: "flex",
    justifyContent: "center",
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 96,
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 900,
  },

  statusPending: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
  },

  statusApproved: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },

  statusRejected: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },
};

export default styles;