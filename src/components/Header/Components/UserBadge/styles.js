const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  name: {
    color: "#151515",
    fontSize: 24,
    fontWeight: 500,
    maxWidth: 160,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  avatarButton: {
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    borderRadius: "50%",
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: "50%",
    border: "1px solid #DDD5C8",
    backgroundColor: "#F4EFE6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0 8px 18px rgba(20, 20, 20, 0.08)",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  avatarText: {
    color: "#171717",
    fontSize: 45,
    fontWeight: 900,
  },

  dropdown: {
    position: "absolute",
    top: 54,
    right: 0,
    width: 240,
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E0D7",
    borderRadius: 18,
    boxShadow: "0 18px 42px rgba(20, 20, 20, 0.16)",
    padding: 10,
    zIndex: 500,
  },

  dropdownHeader: {
    padding: "10px 10px 12px",
    borderBottom: "1px solid #EFE8DD",
    marginBottom: 8,
  },

  dropdownName: {
    margin: 0,
    color: "#171717",
    fontSize: 14,
    fontWeight: 850,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  dropdownEmail: {
    margin: "4px 0 0",
    color: "#7B746A",
    fontSize: 12,
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  logoutButton: {
    width: "100%",
    border: "none",
    backgroundColor: "#FFF1F1",
    color: "#B42318",
    borderRadius: 12,
    padding: "10px 12px",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 800,
    textAlign: "left",
  },
};

export default styles;