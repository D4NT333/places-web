const styles = {
  card: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    boxSizing: "border-box",

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

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "16px 18px",

    background:
      "linear-gradient(135deg, rgba(245, 239, 255, 0.98), rgba(255, 255, 255, 0.98) 54%, rgba(242, 248, 255, 0.98))",

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

    fontSize: "2rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
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

  counterGreen: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "32px",

    padding: "0 11px",

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #b9e5ce",

    borderRadius: "999px",

    fontSize: "1.8rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  content: {
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
    minWidth: "850px",
  },

  tableHeader: {
    display: "grid",

    gridTemplateColumns:
      "0.7fr minmax(180px, 1.9fr) 0.9fr 0.95fr 60px",

    alignItems: "center",
    justifyItems: "center",

    gap: "14px",

    minHeight: "48px",

    padding: "0 12px",
    boxSizing: "border-box",

    color: "#123760",
    background:
      "linear-gradient(90deg, #f5efff, #f8fbff)",

    borderBottom:
      "1px solid #cbddeb",

    fontSize: "1.6rem",
    fontWeight: 950,
    letterSpacing: "0.012em",

    textAlign: "center",
  },

  tableBody: {
    width: "100%",
  },

  row: {
    display: "grid",

    gridTemplateColumns:
      "1.05fr minmax(180px, 1.2fr) 0.9fr 0.95fr 60px",

    alignItems: "center",

    gap: "14px",

    minHeight: "72px",

    padding: "9px 12px",
    boxSizing: "border-box",

    color: "#17375f",
    background: "transparent",

    borderBottom:
      "1px solid #dde8f2",

    fontSize: "1.82rem",

    cursor: "pointer",
    outline: "none",

    transition:
      "background 160ms ease, box-shadow 160ms ease",
  },

  typeCell: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    minWidth: 0,

    gap: "9px",
  },

  typeIconBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#eef6ff",

    border:
      "1px solid #c6defa",

    borderRadius: "10px",
  },

  typeIconViolet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "10px",
  },

  typeIconGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "42px",
    height: "42px",
    flexShrink: 0,

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #bee5cf",

    borderRadius: "10px",
  },

  typeText: {
    display: "flex",
    flexDirection: "column",

    gap: "2px",
    minWidth: 0,
  },

  typeLabel: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "1.8rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  typeSubtitle: {
    color: "#6b829c",

    fontSize: "0.66rem",
    fontWeight: 650,

    whiteSpace: "nowrap",
  },

  nameCell: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    gap: "2px",

    textAlign: "left",
  },

  proposalName: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "1.9rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  nameSubtitle: {
    overflow: "hidden",

    color: "#6b829c",

    fontSize: "0.66rem",
    fontWeight: 650,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  dateCell: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    minWidth: 0,

    gap: "5px",

    color: "#2478de",

    fontSize: "1.6rem",
    fontWeight: 800,

    textAlign: "center",
    whiteSpace: "nowrap",
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    minWidth: 0,
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "5px",

    minWidth: "112px",
    minHeight: "31px",

    padding: "0 10px",

    borderRadius: "999px",

    fontSize: "1.7rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  statusApproved: {
    color: "#047857",
    backgroundColor: "#ecfdf5",

    border:
      "1px solid #a7f3d0",
  },

  statusPending: {
    color: "#b45309",
    backgroundColor: "#fffbeb",

    border:
      "1px solid #fde68a",
  },

  statusRejected: {
    color: "#b91c1c",
    backgroundColor: "#fef2f2",

    border:
      "1px solid #fecaca",
  },

  statusReturned: {
    color: "#1d4ed8",
    backgroundColor: "#eff6ff",

    border:
      "1px solid #bfdbfe",
  },

  statusResubmitted: {
    color: "#6d28d9",
    backgroundColor: "#f5f3ff",

    border:
      "1px solid #ddd6fe",
  },

  statusPendingDelete: {
    color: "#c2410c",
    backgroundColor: "#fff7ed",

    border:
      "1px solid #fed7aa",
  },

  detailCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "60px",

    color: "#82a1c0",
  },

  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    gap: "6px",

    padding: "34px 20px",

    color: "#647e98",

    textAlign: "center",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "72px",
    height: "72px",

    marginBottom: "4px",

    color: "#7441d6",
    background: "#f5efff",

    border:
      "1px solid #d9c8f7",

    borderRadius: "18px",
  },

  emptyTitle: {
    color: "#17375f",

    fontSize: "1.7rem",
    fontWeight: 900,
  },

  emptyMessage: {
    maxWidth: "360px",

    margin: 0,

    color: "#647e98",

    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.45,
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

    color: "#7441d6",
    background: "#ffffff",

    border:
      "1px solid #d3c1f2",

    borderRadius: "999px",

    boxShadow:
      "0 5px 12px rgba(116, 65, 214, 0.08)",

    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  loadMoreButtonDisabled: {
    opacity: 0.55,
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

    fontSize: "1.7rem",
    fontWeight: 800,
  },
};

export default styles;