const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    minWidth: 160,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1.5px solid #9ca3af",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
    background: "#ffffff",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  avatarText: {
    color: "#374151",
    fontSize: 14,
    fontWeight: 900,
  },

  name: {
    color: "#374151",
    fontSize: 14,
    fontWeight: 800,
    whiteSpace: "nowrap",
  },
};

export default styles;