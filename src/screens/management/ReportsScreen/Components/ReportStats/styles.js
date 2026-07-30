const styles = {
  container: {
    display: "flex",
    alignItems: "stretch",
    gap: "12px",
    flexWrap: "wrap",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    minWidth: "285px",
    minHeight: "82px",
    padding: "12px 16px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,252,255,0.98))",
    border: "1px solid #d4e2ef",
    borderRadius: "13px",
    boxShadow:
      "0 8px 20px rgba(31, 74, 121, 0.1)",
  },

  blueIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "12px",
  },

  greenIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#07954e",
    background: "#eafaf2",
    border: "1px solid #c1ead4",
    borderRadius: "12px",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  label: {
    color: "#536e8c",
    fontSize: "2rem",
    fontWeight: 800,
  },

  blueValue: {
    color: "#176fdc",
    fontSize: "2rem",
    fontWeight: 950,
  },

  greenValue: {
    color: "#078e4a",
    fontSize: "2rem",
    fontWeight: 950,
  },
};

export default styles;