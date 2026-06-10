const styles = {
  row: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr 2.2fr 0.8fr",
    alignItems: "center",
    width: "100%",
    minHeight: 82,
    padding: "14px 22px",
    border: "none",
    borderBottom: "1px solid #F1F5F9",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    textAlign: "left",
  },

  placeColumn: {
    minWidth: 0,
  },

  placeInfo: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    minWidth: 0,
  },

  photo: {
    width: 86,
    height: 86,
    borderRadius: "50%",
    border: "1px solid #CBD5E1",
    backgroundColor: "#F8FAFC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
  },

  photoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  photoText: {
    fontSize: 11,
    fontWeight: 700,
    color: "#94A3B8",
  },

  placeTextBox: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  placeName: {
    margin: 0,
    fontSize: 14,
    fontWeight: 800,
    color: "#111827",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  placeSubtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 600,
    color: "#9CA3AF",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  dateColumn: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
  },

  dateText: {
    fontSize: 13,
    fontWeight: 700,
    color: "#4B5563",
    whiteSpace: "nowrap",
  },

  previewColumn: {
    minWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
  },

  previewText: {
    margin: 0,
    maxWidth: 520,
    fontSize: 13,
    lineHeight: 1.45,
    color: "#374151",
    textAlign: "center",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },

  statusColumn: {
    minWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  statusBadge: {
    minWidth: 92,
    padding: "7px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },

  statusPending: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
  },

  statusAccepted: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },

  statusRejected: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },
};

export default styles;