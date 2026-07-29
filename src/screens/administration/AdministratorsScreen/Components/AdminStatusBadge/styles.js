const styles = {
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minWidth: "106px",
    padding: "5px 11px",
    border: "1px solid",
    borderRadius: "999px",
    boxSizing: "border-box",
    fontSize: "0.76rem",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  activeBadge: {
    color: "#068744",
    background: "#e8fbf1",
    borderColor: "#b9ebd0",
  },

  disabledBadge: {
    color: "#dc3737",
    background: "#fff0f0",
    borderColor: "#ffc4c4",
  },
};

export default styles;