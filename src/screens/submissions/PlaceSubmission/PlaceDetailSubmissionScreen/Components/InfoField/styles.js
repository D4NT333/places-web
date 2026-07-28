const styles = {
  container: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    minWidth: 0,
    minHeight: "62px",

    gap: "12px",
    padding: "9px 11px",

    border:
      "1px solid rgba(33, 118, 229, 0.16)",
    borderRadius: "12px",

    background: `
      linear-gradient(
        145deg,
        rgba(247, 251, 255, 0.98),
        rgba(232, 242, 255, 0.9)
      )
    `,

    boxSizing: "border-box",
  },

  iconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "72px",
    height: "72px",

    borderRadius: "12px",

    overflow: "hidden",

    boxSizing: "border-box",
  },

  imageBox: {
    padding: 0,

    border:
      "2px solid rgba(255, 255, 255, 0.95)",

    borderRadius: "50%",

    background: "#ffffff",

    boxShadow:
      "0 5px 12px rgba(25, 66, 111, 0.15)",
  },

  userImage: {
    display: "block",

    width: "100%",
    height: "100%",

    borderRadius: "50%",

    objectFit: "cover",
  },

  iconBlue: {
    border:
      "1px solid rgba(33, 118, 229, 0.15)",

    background:
      "rgba(33, 118, 229, 0.09)",

    color: "#2176e5",
  },

  iconGreen: {
    border:
      "1px solid rgba(18, 168, 92, 0.15)",

    background:
      "rgba(18, 168, 92, 0.09)",

    color: "#0a9b55",
  },

  iconOrange: {
    border:
      "1px solid rgba(245, 158, 11, 0.18)",

    background:
      "rgba(245, 158, 11, 0.1)",

    color: "#e48600",
  },

  iconViolet: {
    border:
      "1px solid rgba(118, 87, 244, 0.17)",

    background:
      "rgba(118, 87, 244, 0.09)",

    color: "#7657f4",
  },

  iconRed: {
    border:
      "1px solid rgba(239, 68, 68, 0.17)",

    background:
      "rgba(239, 68, 68, 0.08)",

    color: "#e23b3b",
  },

  content: {
    display: "flex",
    flexDirection: "column",

    minWidth: 0,

    gap: "3px",
  },

  label: {
    overflow: "hidden",

    color: "#6b8099",

    fontSize: "1.4rem",
    fontWeight: 650,

    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  value: {
    overflow: "hidden",

    color: "#102650",

    fontSize: "1.4rem",
    fontWeight: 800,

    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};

export default styles;