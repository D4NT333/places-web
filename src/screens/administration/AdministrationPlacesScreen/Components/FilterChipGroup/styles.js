const styles = {
  container: {
  display: "flex",
  flexDirection: "column",

  gap: "8px",
  minWidth: 0,

  padding: 0,

  background: "transparent",

  border: "none",

  borderRadius: 0,

  boxShadow: "none",

  backdropFilter: "none",
},

 titleRow: {
  display: "flex",
  alignItems: "center",

  gap: "6px",

  padding: "0 2px",
},

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "60px",
    height: "60px",
    flexShrink: 0,

    color: "#176fdc",
    background: "#eef6ff",

    border:
      "1px solid #cce1fa",

    borderRadius: "8px",
  },

  title: {
    margin: 0,

    color: "#0b315f",

    fontSize: "2.2rem",
    fontWeight: 900,
  },

  chipsRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    gap: "6px",
  },

  chip: {
    appearance: "none",
    WebkitAppearance:
      "none",

    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",

    minHeight: "35px",

    padding: "0 12px",

    border:
      "1px solid transparent",

    borderRadius: "999px",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 850,
    lineHeight: 1,

    whiteSpace: "nowrap",

    cursor: "pointer",

    transition:
      "background 160ms ease, color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
  },

  toneBlue: {
    color: "#176fdc",
    background: "#eef6ff",
    borderColor: "#c2dcfa",
  },

  toneGreen: {
    color: "#078e4a",
    background: "#ecfaf3",
    borderColor: "#bfe7d2",
  },

  toneOrange: {
    color: "#ad6900",
    background: "#fff7e7",
    borderColor: "#efd18c",
  },

  toneRed: {
    color: "#cf3e46",
    background: "#fff1f2",
    borderColor: "#f2bec3",
  },

  toneViolet: {
    color: "#7441d6",
    background: "#f5efff",
    borderColor: "#d9c8f7",
  },

  chipSelected: {
    color: "#ffffff",

    background:
      "linear-gradient(135deg, #2176e5, #2e8df3)",

    borderColor: "#1c6ed9",

    boxShadow:
      "0 6px 13px rgba(33, 118, 229, 0.24)",

    transform:
      "translateY(-1px)",
  },
};

export default styles;