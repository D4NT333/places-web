const styles = {
  row: {
    display: "grid",
    alignItems: "center",
    minHeight: "76px",
    padding: "10px 16px",
    borderBottom: "1px solid #eaecf0",
    boxSizing: "border-box",
  },

  proposalCell: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    gap: "12px",
  },

  previewImage: {
    width: "84px",
    height: "84px",
    flexShrink: 0,
    borderRadius: "8px",
    objectFit: "cover",
  },

  previewFallback: {
    display: "grid",
    placeItems: "center",
    width: "84px",
    height: "84px",
    flexShrink: 0,
    borderRadius: "8px",
    backgroundColor: "#f2f4f7",
    color: "#475467",
    fontSize: "14px",
    fontWeight: 700,
  },

  proposalContent: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    gap: "4px",
  },

  proposalName: {
    overflow: "hidden",
    color: "#101828",
    fontSize: "24px",
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  submissionId: {
    overflow: "hidden",
    maxWidth: "260px",
    color: "#98a2b3",
    fontSize: "11px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 9px",
    borderRadius: "999px",
    backgroundColor: "#f2f4f7",
    color: "#475467",
    fontSize: "18px",
    fontWeight: 600,
  },

  date: {
    color: "#475467",
    fontSize: "18px",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    gap: "10px",
  },

  avatar: {
    width: "84px",
    height: "84px",
    flexShrink: 0,
    borderRadius: "50%",
    objectFit: "cover",
  },

  avatarFallback: {
    display: "grid",
    placeItems: "center",
    width: "84px",
    height: "84px",
    flexShrink: 0,
    borderRadius: "50%",
    backgroundColor: "#eaecf0",
    color: "#475467",
    fontSize: "12px",
    fontWeight: 700,
  },

  userContent: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    gap: "2px",
  },

  userName: {
    color: "#344054",
    fontSize: "23px",
    fontWeight: 500,
  },

  userId: {
    overflow: "hidden",
    maxWidth: "150px",
    color: "#98a2b3",
    fontSize: "10px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

actions: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "100%",
},

  summaryButton: {
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    color: "#344054",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
  },

  divider: {
    color: "#000000",
  },

  deleteButton: {
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    color: "#d92d20",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
  },
  centeredCell: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
},
};

export default styles;