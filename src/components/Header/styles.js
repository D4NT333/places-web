const styles = {
  headerWrapper: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    boxShadow: "0 1px 8px rgba(15, 23, 42, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  header: {
    height: 64,
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: 22,
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: 58,
  },

  title: {
    margin: 0,
    fontSize: 25,
    fontWeight: 800,
    color: "#0f172a",
  },

  subtitle: {
    margin: "2px 0 0",
    fontSize: 14,
    color: "#64748b",
  },

  breadcrumbBar: {
    minHeight: 38,
    padding: "0 18px 0 64px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTop: "1px solid #f1f5f9",
  },

  notificationButton: {
  width: 48,
  height: 48,
  borderRadius: 999,
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  cursor: "pointer",
  marginRight: 4,
},

notificationIcon: {
  width: 48,
  height: 48,
  objectFit: "contain",
},

notificationBadge: {
  position: "absolute",
  top: -4,
  right: -4,
  minWidth: 16,
  height: 16,
  padding: "0 4px",
  borderRadius: 999,
  backgroundColor: "#0f172a",
  color: "#ffffff",
  fontSize: 10,
  fontWeight: 800,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
},
};

export default styles;