const styles = {
  card: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,
    minHeight: "330px",

    overflow: "hidden",

    background:
      "rgba(255, 255, 255, 0.93)",

    border:
      "1px solid rgba(190, 215, 242, 0.98)",

    borderRadius: "18px",

    boxShadow:
      "0 14px 34px rgba(31, 73, 116, 0.11)",

    backdropFilter: "blur(12px)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "16px 18px",

    background:
      "linear-gradient(135deg, rgba(242, 248, 255, 0.98), rgba(255, 255, 255, 0.98) 56%, rgba(245, 239, 255, 0.98))",

    borderBottom:
      "1px solid #d4e4f2",
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

    color: "#7441d6",

    background:
      "linear-gradient(145deg, #f3edff, #fbf9ff)",

    border:
      "1px solid #d8c6f7",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(116, 65, 214, 0.12)",
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

    fontSize: "1.6rem",
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

    fontSize: "1.9rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  counterViolet: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "32px",

    padding: "0 11px",

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "999px",

    fontSize: "1.9rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  tableContainer: {
    display: "flex",
    flexDirection: "column",

    flex: 1,
    minHeight: 0,

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
    minWidth: "760px",

    borderCollapse: "collapse",
  },

  th: {
    padding: "12px 11px",

    color: "#123760",
    background:
      "linear-gradient(90deg, #eef6ff, #f8fbff)",

    borderBottom:
      "1px solid #cbddeb",

    textAlign: "left",

    fontSize: "1.6rem",
    fontWeight: 950,
    letterSpacing: "0.012em",

    whiteSpace: "nowrap",
  },

  tableHeading: {
    display: "flex",
    alignItems: "center",

    gap: "6px",

    color: "#176fdc",
  },

  tableHeadingCentered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    color: "#176fdc",
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

    fontSize: "0.84rem",
    fontWeight: 700,
  },

  userCell: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
    minWidth: 0,
  },

  avatarImage: {
    display: "block",

    width: "82px",
    height: "82px",
    flexShrink: 0,

    objectFit: "cover",

    border:
      "2px solid #ffffff",

    borderRadius: "999px",

    boxShadow:
      "0 0 0 1px #c8ddf3, 0 5px 12px rgba(29, 69, 112, 0.12)",
  },

  avatarFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "52px",
    height: "52px",
    flexShrink: 0,

    color: "#176fdc",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    border:
      "2px solid #ffffff",

    borderRadius: "999px",

    boxShadow:
      "0 0 0 1px #c8ddf3, 0 5px 12px rgba(29, 69, 112, 0.12)",

    fontSize: "0.82rem",
    fontWeight: 950,
  },

  userText: {
    display: "flex",
    flexDirection: "column",

    gap: "2px",
    minWidth: 0,
  },

  userName: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "1.8rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  userSubtitle: {
    color: "#6b829c",

    fontSize: "0.68rem",
    fontWeight: 650,
  },

  dateValue: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    color: "#2478de",

    fontSize: "1.8rem",
    fontWeight: 800,

    whiteSpace: "nowrap",
  },

  ratingPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    minWidth: "76px",
    minHeight: "31px",

    padding: "0 9px",

    color: "#b26f08",
    background: "#fff7e7",

    border:
      "1px solid #efd18f",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    minWidth: "104px",
    minHeight: "31px",

    padding: "0 10px",

    border:
      "1px solid",

    borderRadius: "999px",

    fontSize: "1.6rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  statusPillPublished: {
    color: "#078e4a",
    backgroundColor: "#eafaf2",
    borderColor: "#b9e5ce",
  },

  statusPillHidden: {
    color: "#d23f3f",
    backgroundColor: "#fff0f0",
    borderColor: "#f5bebe",
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

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

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

    color: "#176fdc",
    background: "#ffffff",

    border:
      "1px solid #bdd8f5",

    borderRadius: "999px",

    boxShadow:
      "0 5px 12px rgba(33, 91, 151, 0.08)",

    fontFamily: "inherit",
    fontSize: "0.8rem",
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