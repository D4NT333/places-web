const styles = {
  row: {
    display: "grid",
    gridTemplateColumns:
      "1.35fr 1.8fr 0.85fr 180px 48px",
    alignItems: "center",
    gap: "18px",
    width: "100%",
    minHeight: "86px",
    padding: "12px 20px",
    boxSizing: "border-box",
    color: "#102d57",
    background:
      "rgba(255, 255, 255, 0.94)",
    borderBottom: "1px solid #dfe8f2",
    outline: "none",
    cursor: "pointer",
  },

  nameCell: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: 0,
  },

  nameIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "46px",
    height: "46px",
    flexShrink: 0,
    color: "#247cf0",
    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",
    border: "1px solid #c9def8",
    borderRadius: "11px",
  },

  name: {
    overflow: "hidden",
    color: "#0b2e5d",
    fontSize: "1.8rem",
    fontWeight: 900,
    lineHeight: 1.3,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  addressCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    textAlign: "center",
  },

  addressText: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    color: "#536f8e",
    fontSize: "1.4rem",
    fontWeight: 650,
    lineHeight: 1.4,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  },

  typeBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    maxWidth: "100%",
    minHeight: "34px",
    padding: "0 10px",
    color: "#176e89",
    background:
      "linear-gradient(135deg, #eaf8fb, #f7fdff)",
    border: "1px solid #bee3ec",
    borderRadius: "999px",
  },

  typeText: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    fontSize: "1.9rem",
    fontWeight: 850,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minWidth: "225px",
    minHeight: "35px",
    padding: "0 12px",
    boxSizing: "border-box",
    borderRadius: "999px",
    fontSize: "1.9rem",
    fontWeight: 900,
  },

  statusPending: {
    color: "#a46500",
    background:
      "linear-gradient(135deg, #fff4cf, #fffaf0)",
    border: "1px solid #f1ce76",
  },

  statusAccepted: {
    color: "#087e48",
    background:
      "linear-gradient(135deg, #e5f9ef, #f5fff9)",
    border: "1px solid #ace1c5",
  },

  statusRejected: {
    color: "#d43b3b",
    background:
      "linear-gradient(135deg, #ffeded, #fff8f8)",
    border: "1px solid #ffbcbc",
  },

  actionCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    color: "#247cf0",
    borderRadius: "999px",
  },
};

export default styles;