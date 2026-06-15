const styles = {
  row: {
    display: "grid",
    alignItems: "center",
    gap: "1rem",
    minHeight: "76px",
    padding: "0.85rem 1.25rem",
    borderBottom: "1px solid #f0f1f3",
  },

  proposalCell: {
    minWidth: 0,
  },

  proposalName: {
    display: "block",
    overflow: "hidden",
    color: "#1f2937",
    fontSize: "0.96rem",
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeBadge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.3rem 0.65rem",
    borderRadius: "999px",
    backgroundColor: "#f3f4f6",
    color: "#4b5563",
    fontSize: "0.82rem",
    fontWeight: 600,
  },

  date: {
    color: "#4b5563",
    fontSize: "0.9rem",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    gap: "0.65rem",
    minWidth: 0,
  },

  avatar: {
    width: "38px",
    height: "38px",
    flexShrink: 0,
    borderRadius: "50%",
    objectFit: "cover",
  },

  avatarFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "38px",
    height: "38px",
    flexShrink: 0,
    borderRadius: "50%",
    backgroundColor: "#e5e7eb",
    color: "#374151",
    fontSize: "0.9rem",
    fontWeight: 700,
  },

  userName: {
    overflow: "hidden",
    color: "#374151",
    fontSize: "0.9rem",
    fontWeight: 500,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "0.45rem",
    whiteSpace: "nowrap",
  },

  summaryButton: {
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    color: "#374151",
    fontSize: "0.86rem",
    fontWeight: 600,
    cursor: "pointer",
  },

  divider: {
    color: "#d1d5db",
  },

  deleteButton: {
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    color: "#dc2626",
    fontSize: "0.86rem",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default styles;