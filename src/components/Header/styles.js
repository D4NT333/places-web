const styles = {
  header: {
    height: 72,
    background: "rgba(255, 255, 255, 0.94)",
    borderBottom: "1px solid #E5E0D7",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    boxShadow: "0 8px 24px rgba(20, 20, 20, 0.04)",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  title: {
    margin: 0,
    color: "#151515",
    fontSize: 16,
    fontWeight: 850,
    lineHeight: 1.1,
  },

  subtitle: {
    margin: "4px 0 0",
    color: "#7B746A",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.1,
  },
};

export default styles;