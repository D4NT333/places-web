const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    minWidth: "245px",
    padding: "12px 15px",
    boxSizing: "border-box",
    background: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(199, 215, 235, 0.9)",
    borderRadius: "13px",
    boxShadow: "0 8px 22px rgba(51, 92, 143, 0.08)",
    backdropFilter: "blur(10px)",
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "40px",
    height: "40px",
    border: "1px solid",
    borderRadius: "11px",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  label: {
    color: "#3e587a",
    fontSize: "0.93rem",
    fontWeight: 650,
  },

  value: {
    fontSize: "1.1rem",
    fontWeight: 900,
    lineHeight: 1,
  },
};

export default styles;