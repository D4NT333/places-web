const styles = {
  tableCard: {
    width: "100%",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.93)",
    border: "1px solid rgba(194, 213, 236, 0.95)",
    borderRadius: "15px",
    boxShadow: "0 14px 34px rgba(40, 83, 132, 0.1)",
    backdropFilter: "blur(12px)",
  },

  tableScroller: {
    width: "100%",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    minWidth: "1180px",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  },

  headerRow: {
    background:
      "linear-gradient(180deg, #f9fcff 0%, #edf5ff 100%)",
  },

  headerCell: {
    padding: "13px 12px",
    color: "#0b2855",
    borderBottom: "1px solid #d7e4f2",
    fontSize: "2rem",
    fontWeight: 900,
    textAlign: "center",
    letterSpacing: "0.015em",
  },

  adminHeader: {
    width: "22%",
    padding: "13px 24px",
    color: "#0b2855",
    borderBottom: "1px solid #d7e4f2",
    fontSize: "2rem",
    fontWeight: 900,
    textAlign: "left",
    letterSpacing: "0.015em",
  },

  actionHeader: {
    width: "11%",
    padding: "13px 12px",
    color: "#0b2855",
    borderBottom: "1px solid #d7e4f2",
    fontSize: "2rem",
    fontWeight: 900,
    textAlign: "center",
    letterSpacing: "0.015em",
  },

  bodyRow: {
    borderBottom: "1px solid #dce7f2",
  },

  adminCell: {
    padding: "14px 24px",
    color: "#112b52",
    verticalAlign: "middle",
  },

  cell: {
    padding: "14px 12px",
    color: "#18365e",
    fontSize: "2rem",
    fontWeight: 650,
    textAlign: "center",
    verticalAlign: "middle",
  },

  actionCell: {
    padding: "14px 12px",
    textAlign: "center",
    verticalAlign: "middle",
  },

  adminProfile: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  avatarImage: {
    width: "84px",
    height: "84px",
    flexShrink: 0,
    borderRadius: "999px",
    objectFit: "cover",
    border: "1px solid #cfdeed",
    boxShadow: "0 6px 13px rgba(51, 76, 104, 0.12)",
  },

  avatarFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "84px",
    height: "84px",
    flexShrink: 0,
    border: "1px solid #cfdeed",
    borderRadius: "999px",
    boxShadow: "0 6px 13px rgba(51, 76, 104, 0.1)",
    fontSize: "1rem",
    fontWeight: 900,
  },

  adminText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "3px",
    minWidth: 0,
  },

  nameLine: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },

  adminName: {
    color: "#0b2855",
    fontSize: "2rem",
    fontWeight: 900,
    whiteSpace: "nowrap",
  },

  adminEmail: {
    maxWidth: "320px",
    overflow: "hidden",
    color: "#637b99",
    fontSize: "1.4rem",
    fontWeight: 550,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  youBadge: {
    padding: "2px 7px",
    color: "#07854a",
    background: "#e4f8ee",
    border: "1px solid #bee9d2",
    borderRadius: "999px",
    fontSize: "1.6rem",
    fontWeight: 850,
  },

  dateValue: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    whiteSpace: "nowrap",
  },

  detailButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minWidth: "111px",
    minHeight: "31px",
    padding: "0 12px",
    color: "#1773e8",
    background: "#f7fbff",
    border: "1px solid #bbd7fb",
    borderRadius: "999px",
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 800,
    cursor: "pointer",
  },

  emptyCell: {
    padding: "40px 20px",
    color: "#647c99",
    fontSize: "1.4rem",
    fontWeight: 650,
    textAlign: "center",
  },
  selectionHeader: {
  width: "5%",
  padding: "13px 12px",
  borderBottom: "1px solid #d7e4f2",
},

selectableRow: {
  borderBottom: "1px solid #dce7f2",
  cursor: "pointer",
  transition:
    "background 160ms ease, transform 160ms ease",
},

selectionCell: {
  padding: "14px 18px 14px 8px",
  color: "#2680ec",
  textAlign: "right",
  verticalAlign: "middle",
},
};

export default styles;