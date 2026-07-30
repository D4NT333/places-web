const styles = {
  screen: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    width: "100%",
    minHeight: "100%",
    padding: "24px 30px 34px",
    boxSizing: "border-box",
  },

  topBar: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  },

  headerBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  titleLine: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "58px",
    height: "58px",
    flexShrink: 0,
    color: "#2176e5",
    background:
      "linear-gradient(145deg, #e8f3ff, #f7fbff)",
    border: "1px solid #c9def8",
    borderRadius: "14px",
    boxShadow:
      "0 7px 18px rgba(33, 118, 229, 0.12)",
  },

  title: {
    margin: 0,
    color: "#092b5c",
    fontSize: "3.6rem",
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    margin: "5px 0 0",
    color: "#587493",
    fontSize: "2.2rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  filtersWrapper: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "6px",
    padding: "6px",
    background:
      "rgba(255, 255, 255, 0.88)",
    border:
      "1px solid rgba(211, 224, 239, 0.98)",
    borderRadius: "14px",
    boxShadow:
      "0 8px 22px rgba(36, 79, 126, 0.12)",
  },

  filterChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "42px",
    padding: "0 14px",
    color: "#17345d",
    background: "#ffffff",
    border: "1px solid #e2eaf3",
    borderRadius: "10px",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  filterChipAllActive: {
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    borderColor: "#2176e5",
    boxShadow:
      "0 6px 14px rgba(33, 118, 229, 0.24)",
  },

  filterChipPendingActive: {
    color: "#a76600",
    background:
      "linear-gradient(135deg, #fff5d8, #fffaf0)",
    borderColor: "#f2cf7a",
    boxShadow:
      "0 6px 14px rgba(206, 139, 18, 0.12)",
  },

  filterChipAcceptedActive: {
    color: "#087e48",
    background:
      "linear-gradient(135deg, #e8faf1, #f7fffb)",
    borderColor: "#afe3c8",
    boxShadow:
      "0 6px 14px rgba(20, 142, 79, 0.1)",
  },

  filterChipRejectedActive: {
    color: "#d33b3b",
    background:
      "linear-gradient(135deg, #fff0f0, #fff9f9)",
    borderColor: "#ffc0c0",
    boxShadow:
      "0 6px 14px rgba(211, 59, 59, 0.1)",
  },

  summarySection: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "12px",
  },

  summaryCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: "190px",
    minHeight: "78px",
    padding: "11px 15px",
    boxSizing: "border-box",
    background: "#ffffff",
    border: "1px solid #d7e3f0",
    borderRadius: "13px",
    boxShadow:
      "0 7px 18px rgba(33, 75, 121, 0.08)",
  },

  summaryCardBlue: {
    background:
      "linear-gradient(135deg, #ffffff, #f4f9ff)",
  },

  summaryCardOrange: {
    background:
      "linear-gradient(135deg, #ffffff, #fffaf0)",
  },

  summaryCardGreen: {
    background:
      "linear-gradient(135deg, #ffffff, #f3fcf7)",
  },

  summaryCardRed: {
    background:
      "linear-gradient(135deg, #ffffff, #fff7f7)",
  },

  summaryIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    flexShrink: 0,
    borderRadius: "11px",
  },

  summaryIconBlue: {
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
  },

  summaryIconOrange: {
    color: "#d88a08",
    background: "#fff6df",
    border: "1px solid #f2d38c",
  },

  summaryIconGreen: {
    color: "#0b9851",
    background: "#eafaf2",
    border: "1px solid #bce8d0",
  },

  summaryIconRed: {
    color: "#df4242",
    background: "#fff0f0",
    border: "1px solid #ffc5c5",
  },

  summaryContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  summaryLabel: {
    color: "#536f8e",
    fontSize: "1.8rem",
    fontWeight: 750,
  },

  summaryValue: {
    fontSize: "2rem",
    fontWeight: 950,
  },

  summaryValueBlue: {
    color: "#176fdc",
  },

  summaryValueOrange: {
    color: "#bf7600",
  },

  summaryValueGreen: {
    color: "#078d49",
  },

  summaryValueRed: {
    color: "#d53b3b",
  },

  zoneCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: "280px",
    minHeight: "78px",
    maxWidth: "470px",
    padding: "11px 15px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, #ffffff, #f2f8ff)",
    border: "1px solid #cddff3",
    borderRadius: "13px",
    boxShadow:
      "0 7px 18px rgba(33, 75, 121, 0.08)",
  },

  zoneIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    flexShrink: 0,
    color: "#247cf0",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "11px",
  },

  zoneContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    minWidth: 0,
  },

  zoneLabel: {
    color: "#536f8e",
    fontSize: "1.45rem",
    fontWeight: 750,
  },

  zoneValue: {
    overflow: "hidden",
    color: "#12345f",
    fontSize: "1.4rem",
    fontWeight: 900,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  tableCard: {
    width: "100%",
    overflow: "hidden",
    background:
      "rgba(255, 255, 255, 0.96)",
    border:
      "1px solid rgba(202, 219, 239, 0.98)",
    borderRadius: "17px",
    boxShadow:
      "0 16px 38px rgba(29, 70, 115, 0.13)",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns:
      "1.35fr 1.8fr 0.85fr 180px 48px",
    alignItems: "center",
    gap: "18px",
    minHeight: "62px",
    padding: "0 20px",
    boxSizing: "border-box",
    color: "#102e58",
    background:
      "linear-gradient(90deg, #edf5ff, #f7fbff)",
    borderBottom: "1px solid #d5e3f1",
    fontSize: "2rem",
    fontWeight: 950,
  },

  headerName: {
    minWidth: 0,
    textAlign: "left",
  },

  headerAddress: {
    minWidth: 0,
    textAlign: "center",
  },

  headerType: {
    minWidth: 0,
    textAlign: "center",
  },

  headerStatus: {
    minWidth: 0,
    textAlign: "center",
  },

  headerAction: {
    width: "48px",
  },

  rowsWrapper: {
    width: "100%",
  },

  stateContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "9px",
    minHeight: "270px",
    padding: "30px",
    boxSizing: "border-box",
    textAlign: "center",
  },

  loadingStateIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "999px",
  },

  errorStateIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    color: "#db3e3e",
    background: "#fff0f0",
    border: "1px solid #ffc4c4",
    borderRadius: "999px",
  },

  emptyStateIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    color: "#6380a1",
    background: "#f0f5fa",
    border: "1px solid #d5e0eb",
    borderRadius: "999px",
  },

  stateTitle: {
    color: "#14345f",
    fontSize: "2rem",
    fontWeight: 900,
  },

  stateDescription: {
    maxWidth: "650px",
    color: "#607a97",
    fontSize: "2rem",
    fontWeight: 650,
    lineHeight: 1.45,
  },

  retryButton: {
    minHeight: "42px",
    marginTop: "8px",
    padding: "0 16px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2d88ee)",
    border: "1px solid #1f70d8",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "1.35rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  loadMoreTrap: {
    width: "100%",
    height: "2px",
  },

  paginationHint: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    minHeight: "48px",
    color: "#2176e5",
    fontSize: "1.5rem",
    fontWeight: 850,
  },

  completedMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    minHeight: "52px",
    color: "#078d49",
    fontSize: "1.65rem",
    fontWeight: 900,
  },
};

export default styles;