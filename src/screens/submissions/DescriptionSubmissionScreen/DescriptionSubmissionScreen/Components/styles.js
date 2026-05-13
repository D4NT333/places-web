const styles = {
 row: {
  display: "grid",
  gridTemplateColumns: "1.3fr 1fr 2.2fr 0.8fr",
  alignItems: "center",
  padding: "18px 22px",
  borderBottom: "1px solid #F1F5F9",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  transition: "background-color 0.18s ease, transform 0.18s ease",
},

  placeCell: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    minWidth: 0,
  },

  photoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "1px solid #CBD5E1",
    backgroundColor: "#F8FAFC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  photoText: {
    fontSize: 11,
    fontWeight: 700,
    color: "#94A3B8",
  },

  placeInfo: {
    minWidth: 0,
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

  placeType: {
    margin: "4px 0 0",
    fontSize: 12,
    fontWeight: 600,
    color: "#9CA3AF",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  dateCell: {
    minWidth: 0,
  },

  dateText: {
    margin: 0,
    fontSize: 13,
    fontWeight: 700,
    color: "#4B5563",
  },

  previewCell: {
  minWidth: 0,
  display: "flex",
  justifyContent: "center",
  paddingRight: 18,
},

previewText: {
  margin: 0,
  maxWidth: 620,
  fontSize: 13,
  lineHeight: 1.45,
  color: "#374151",
  textAlign: "center",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
},

  statusCell: {
    display: "flex",
    justifyContent: "center",
  },

  statusChip: {
    minWidth: 92,
    padding: "7px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    textAlign: "center",
  },

  pendingStatus: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
  },

  acceptedStatus: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },

  rejectedStatus: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },
};

export default styles;