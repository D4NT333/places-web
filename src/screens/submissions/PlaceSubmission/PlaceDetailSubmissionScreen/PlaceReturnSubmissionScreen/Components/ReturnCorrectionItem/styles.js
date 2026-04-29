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

  photoThumbnail: {
    width: 96,
    height: 96,
    objectFit: "cover",
    borderRadius: 10,
    border: "1px solid #d7e0ea",
    backgroundColor: "#eef2f7",
    display: "block",
  },

  emptyValue: {
    color: "#7b8794",
    fontSize: 13,
    fontWeight: 600,
  },
};

export default styles;