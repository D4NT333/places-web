const styles = {
 row: {
  width: "100%",
  display: "grid",
  gridTemplateColumns:
    "2fr 0.9fr 1fr 1.1fr 1.1fr 1.1fr 1.2fr",
  alignItems: "center",
  minHeight: 78,
  padding: "0 24px",
  border: "none",
  borderBottom: "1px solid #e5e7eb",
  backgroundColor: "#ffffff",
  color: "#0f172a",
  fontSize: 13,
  fontWeight: 700,
  textAlign: "center",
  cursor: "pointer",
},

  rowHovered: {
    backgroundColor: "#f8fafc",
  },

  placeCell: {
  display: "flex",
  alignItems: "center",
  gap: 14,
  minWidth: 0,
  textAlign: "left",
},

  imageBox: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "1.5px solid #334155",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backgroundColor: "#f8fafc",
    overflow: "hidden",
  },

  imageBoxHovered: {
    borderColor: "#0f172a",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageText: {
    fontSize: 12,
    fontWeight: 800,
    color: "#334155",
  },

  placeInfo: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  placeName: {
    color: "#0f172a",
    fontSize: 13,
    fontWeight: 900,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  placeNameHovered: {
    textDecoration: "underline",
  },

  dateCell: {
    color: "#0f172a",
  },

  createdByCell: {
    color: "#0f172a",
  },

  approvedByCell: {
    color: "#0f172a",
  },

  statusCell: {
    color: "#0f172a",
  },

  statusText: {
    fontSize: 13,
    fontWeight: 800,
  },
  sourceCell: {
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
},
};

export default styles;