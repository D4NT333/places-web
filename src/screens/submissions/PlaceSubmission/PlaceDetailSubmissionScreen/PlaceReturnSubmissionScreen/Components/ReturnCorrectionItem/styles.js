const styles = {
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 18,
  },

  itemCompact: {
    width: "fit-content",
    maxWidth: 520,
  },

  itemWide: {
    width: "100%",
    maxWidth: 720,
  },

  label: {
    fontSize: 14,
    fontWeight: 800,
    color: "#0f1f3a",
  },

  valueBox: {
    minHeight: 42,
    padding: "10px 18px",
    border: "1px solid #c8d6e5",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    color: "#071327",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.45,
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowWrap: "anywhere",
    whiteSpace: "normal",
  },

  valueBoxCompact: {
    width: "fit-content",
    minWidth: 150,
    maxWidth: 520,
  },

  valueBoxWide: {
    width: "100%",
    justifyContent: "flex-start",
  },

  valueBoxSelected: {
    borderColor: "#111827",
    boxShadow: "0 0 0 1px #111827",
  },

  tagsWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },

  miniPill: {
    padding: "5px 10px",
    borderRadius: 999,
    backgroundColor: "#eef3f8",
    color: "#10233f",
    fontSize: 12,
    fontWeight: 800,
  },

  commentWrapper: {
  width: 420,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 6,
},

commentLabel: {
  fontSize: 13,
  fontWeight: 800,
  color: "#0f1f3a",
},

commentInput: {
  width: "100%",
  minHeight: 64,
  padding: "8px 0",
  border: "none",
  borderBottom: "1px solid #c8d6e5",
  backgroundColor: "transparent",
  color: "#243041",
  fontSize: 14,
  lineHeight: 1.45,
  outline: "none",
  resize: "none",
  boxSizing: "border-box",

  // Esto mata las flechitas/scroll horrible
  overflow: "hidden",
  scrollbarWidth: "none",
},

commentFooter: {
  alignSelf: "flex-end",
  fontSize: 12,
  color: "#607089",
},

  photosGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  emptyValue: {
    color: "#7b8794",
    fontSize: 13,
    fontWeight: 600,
  },
  photoButton: {
  position: "relative",
  width: 88,
  height: 88,
  padding: 0,
  border: "2px solid transparent",
  borderRadius: 10,
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "#f8fafc",
},

photoButtonSelected: {
  borderColor: "#ef4444",
  boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.15)",
},

photoThumbnail: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
},

photoBadge: {
  position: "absolute",
  left: 6,
  bottom: 6,
  padding: "3px 7px",
  borderRadius: 999,
  backgroundColor: "rgba(15, 23, 42, 0.78)",
  color: "#ffffff",
  fontSize: 11,
  fontWeight: 700,
},

photoCommentsWrapper: {
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  gap: 12,
},

photoCommentItem: {
  width: "100%",
},
};

export default styles;