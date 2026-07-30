const styles = {
  row: {
    display: "grid",
    alignItems: "center",
    minHeight: "92px",
    padding: "0 18px",
    boxSizing: "border-box",
    background:
      "rgba(255, 255, 255, 0.82)",
    borderBottom: "1px solid #dbe6f1",
  },

  proposalCell: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    minWidth: 0,
    padding: "10px 0",
  },

  previewImage: {
    width: "68px",
    height: "68px",
    flexShrink: 0,
    objectFit: "cover",
    border: "1px solid #cbd9e7",
    borderRadius: "13px",
    boxShadow:
      "0 6px 14px rgba(26, 61, 99, 0.12)",
  },

  previewFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "68px",
    height: "68px",
    flexShrink: 0,
    color: "#2176e5",
    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",
    border: "1px solid #cadff7",
    borderRadius: "13px",
  },

  proposalContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: 0,
  },

  proposalName: {
    overflow: "hidden",
    color: "#0c2e5d",
    fontSize: "2.2rem",
    fontWeight: 900,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  proposalHint: {
    color: "#6a829c",
    fontSize: "1.6rem",
    fontWeight: 650,
  },

  centeredCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    textAlign: "center",
  },

  typeBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minHeight: "34px",
    padding: "0 11px",
    color: "#176fdc",
    background: "#eef6ff",
    border: "1px solid #b8d6fa",
    borderRadius: "999px",
    fontSize: "2rem",
    fontWeight: 850,
  },

  dateValue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#274b73",
    fontSize: "2rem",
    fontWeight: 750,
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    minWidth: 0,
  },

  avatar: {
    width: "94px",
    height: "94px",
    flexShrink: 0,
    objectFit: "cover",
    border: "1px solid #cbd9e7",
    borderRadius: "999px",
    boxShadow:
      "0 5px 12px rgba(29, 64, 103, 0.11)",
  },

  avatarFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#16708b",
    background:
      "linear-gradient(145deg, #e8f7fc, #f7fcff)",
    border: "1px solid #c8e3ec",
    borderRadius: "999px",
    fontSize: "1.8rem",
    fontWeight: 900,
  },

  userContent: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  userName: {
    overflow: "hidden",
    color: "#15365f",
    fontSize: "2.2rem",
    fontWeight: 850,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "46px",
    height: "46px",
    padding: 0,
    color: "#dc3f3f",
    background:
      "linear-gradient(135deg, #fff0f0, #fff8f8)",
    border: "1px solid #ffbcbc",
    borderRadius: "11px",
    boxShadow:
      "0 5px 12px rgba(212, 54, 54, 0.1)",
    cursor: "pointer",
  },
};

export default styles;