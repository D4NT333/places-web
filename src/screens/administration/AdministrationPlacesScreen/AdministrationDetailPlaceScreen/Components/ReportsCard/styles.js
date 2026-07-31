const styles = {
  card: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    overflow: "hidden",

    background:
      "rgba(255, 255, 255, 0.93)",

    border:
      "1px solid rgba(190, 215, 242, 0.98)",

    borderRadius: "18px",

    boxShadow:
      "0 14px 34px rgba(31, 73, 116, 0.11)",

    backdropFilter:
      "blur(12px)",
  },

  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "16px 18px",

    background:
      "linear-gradient(135deg, rgba(255, 248, 234, 0.98), rgba(255, 255, 255, 0.98) 56%, rgba(242, 248, 255, 0.98))",

    borderBottom:
      "1px solid #dbe5ef",
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",

    gap: "13px",
    minWidth: 0,
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "62px",
    height: "62px",
    flexShrink: 0,

    color: "#d17d08",

    background:
      "linear-gradient(145deg, #fff2d9, #fffaf1)",

    border:
      "1px solid #efd09a",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(194, 121, 12, 0.13)",
  },

  titleText: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#092f61",

    fontSize: "2rem",
    fontWeight: 950,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  subtitle: {
    margin: 0,

    color: "#647e9a",

    fontSize: "1.7rem",
    fontWeight: 650,
    lineHeight: 1.4,
  },

  countersRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap",

    gap: "8px",
  },

  counterOrange: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "32px",

    padding: "0 11px",

    color: "#b56d06",
    background: "#fff7e7",

    border:
      "1px solid #efd18f",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  counterBlue: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "32px",

    padding: "0 11px",

    color: "#176fdc",
    background: "#eef6ff",

    border:
      "1px solid #c4dcf8",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  tableContainer: {
    display: "flex",
    flexDirection: "column",

    padding: "14px 16px 16px",
  },

  tableWrapper: {
    width: "100%",
    minWidth: 0,

    overflowX: "auto",

    background:
      "rgba(255, 255, 255, 0.86)",

    border:
      "1px solid #d4e3f0",

    borderRadius: "13px",
  },

  table: {
    width: "100%",
    minWidth: "650px",

    borderCollapse: "collapse",
  },

  th: {
    padding: "12px 11px",

    color: "#123760",
    background:
      "linear-gradient(90deg, #fff7e8, #f8fbff)",

    borderBottom:
      "1px solid #d5e0eb",

    textAlign: "left",

    fontSize: "2rem",
    fontWeight: 950,
    letterSpacing: "0.012em",

    whiteSpace: "nowrap",
  },

  actionHeader: {
    width: "60px",

    textAlign: "center",
  },

  tableRow: {
    cursor: "pointer",
    outline: "none",

    transition:
      "background 160ms ease, box-shadow 160ms ease",
  },

  td: {
    padding: "12px 11px",

    color: "#17375f",

    borderBottom:
      "1px solid #dde8f2",

    fontSize: "1.84rem",
    fontWeight: 700,
  },

  reasonCell: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,
  },

  reasonIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#d17d08",
    background: "#fff7e7",

    border:
      "1px solid #efd19a",

    borderRadius: "10px",
  },

  reasonText: {
    display: "flex",
    flexDirection: "column",

    gap: "2px",
    minWidth: 0,
  },

  reasonLabel: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "2rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  reasonSubtitle: {
    color: "#6b829c",

    fontSize: "1.8rem",
    fontWeight: 650,
  },

  dateValue: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    color: "#2478de",

    fontSize: "2rem",
    fontWeight: 800,

    whiteSpace: "nowrap",
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    minWidth: "112px",
    minHeight: "31px",

    padding: "0 10px",

    border:
      "1px solid",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: 1,

    whiteSpace: "nowrap",
  },

  statusPillPending: {
    color: "#ad6900",
    backgroundColor: "#fff7e7",
    borderColor: "#efd18f",
  },

  statusPillReview: {
    color: "#176fdc",
    backgroundColor: "#eef6ff",
    borderColor: "#b7d6fa",
  },

  statusPillResolved: {
    color: "#078e4a",
    backgroundColor: "#eafaf2",
    borderColor: "#b9e5ce",
  },

  statusPillDismissed: {
    color: "#5c7189",
    backgroundColor: "#f1f5f9",
    borderColor: "#d0dbe6",
  },

  statusPillDefault: {
    color: "#5c7189",
    backgroundColor: "#f1f5f9",
    borderColor: "#d0dbe6",
  },

  actionCell: {
    width: "60px",

    padding: "12px 11px",

    color: "#82a1c0",

    borderBottom:
      "1px solid #dde8f2",

    textAlign: "center",
  },

  emptyCell: {
    padding: "34px 20px",
  },

  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    gap: "6px",

    color: "#647e98",

    textAlign: "center",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "70px",
    height: "70px",

    marginBottom: "4px",

    color: "#d17d08",
    background: "#fff7e7",

    border:
      "1px solid #efd18f",

    borderRadius: "17px",
  },

  emptyTitle: {
    color: "#17375f",

    fontSize: "2rem",
    fontWeight: 900,
  },

  emptyText: {
    color: "#647e98",

    fontSize: "1.8rem",
    fontWeight: 650,
  },

  loadMoreContainer: {
    display: "flex",
    justifyContent: "center",

    paddingTop: "14px",
  },

  loadMoreButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    minHeight: "40px",

    padding: "0 16px",

    color: "#b56d06",
    background: "#ffffff",

    border:
      "1px solid #efd18f",

    borderRadius: "999px",

    boxShadow:
      "0 5px 12px rgba(181, 109, 6, 0.09)",

    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  disabledButton: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  endMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    marginTop: "12px",
    padding: "10px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #c5e6d3",

    borderRadius: "10px",

    fontSize: "1.8rem",
    fontWeight: 800,
  },
};

export default styles;