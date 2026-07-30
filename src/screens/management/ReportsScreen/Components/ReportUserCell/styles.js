const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minWidth: 0,
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90px",
    height: "90px",
    flexShrink: 0,
    overflow: "hidden",
    background: "#f2f7fc",
    border: "1px solid #cbd9e7",
    borderRadius: "999px",
    boxShadow:
      "0 5px 12px rgba(29, 64, 103, 0.11)",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  avatarFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    width: "100%",
    height: "100%",
    color: "#16708b",
    background:
      "linear-gradient(145deg, #e8f7fc, #f7fcff)",
  },

  avatarText: {
    fontSize: "1.4rem",
    fontWeight: 900,
  },

  name: {
    overflow: "hidden",
    color: "#17365e",
    fontSize: "2rem",
    fontWeight: 850,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

export default styles;