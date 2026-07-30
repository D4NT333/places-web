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

  headerSection: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  },

  headingBlock: {
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
    fontSize: "3.4rem",
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    margin: "5px 0 0",
    color: "#587493",
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  permissionBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "42px",
    padding: "0 16px",
    color: "#087f48",
    background:
      "linear-gradient(135deg, #e9fbf2, #f7fffb)",
    border: "1px solid #b9e8cf",
    borderRadius: "999px",
    boxShadow:
      "0 5px 14px rgba(20, 142, 79, 0.08)",
    fontSize: "2rem",
    fontWeight: 850,
  },

  errorBox: {
    padding: "13px 16px",
    color: "#bd3434",
    background:
      "linear-gradient(135deg, #fff1f1, #fff8f8)",
    border: "1px solid #ffc4c4",
    borderRadius: "11px",
    fontSize: "2rem",
    fontWeight: 700,
  },

  mapCard: {
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,252,255,0.98))",
    border: "1px solid rgba(202, 219, 239, 0.96)",
    borderRadius: "18px",
    boxShadow:
      "0 18px 45px rgba(28, 72, 120, 0.14)",
  },

  mapCardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    padding: "17px 19px",
    background:
      "linear-gradient(90deg, #f7fbff, #eef6ff)",
    borderBottom: "1px solid #d7e5f4",
  },

  mapCardHeading: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  mapCardTitle: {
    margin: 0,
    color: "#123866",
    fontSize: "2.6rem",
    fontWeight: 900,
  },

  mapCardSubtitle: {
    margin: 0,
    color: "#617c99",
    fontSize: "1.8rem",
    fontWeight: 600,
  },

  hexPill: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    maxWidth: "100%",
    minHeight: "38px",
    padding: "0 13px",
    color: "#667d98",
    background: "#ffffff",
    border: "1px solid #d2e0ee",
    borderRadius: "999px",
    boxShadow:
      "0 3px 10px rgba(35, 78, 124, 0.06)",
  },

  hexPillSelected: {
    color: "#156ed7",
    background: "#eef6ff",
    borderColor: "#a9cef8",
  },

  hexPillLabel: {
    flexShrink: 0,
    fontSize: "2rem",
    fontWeight: 850,
  },

  hexPillValue: {
    maxWidth: "420px",
    overflow: "hidden",
    color: "inherit",
    fontSize: "2rem",
    fontWeight: 750,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  mapContainer: {
    padding: "14px",
    background:
      "linear-gradient(180deg, #f8fbff, #f4f9ff)",
  },

  mapFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    padding: "14px 18px 16px",
    background: "#ffffff",
    borderTop: "1px solid #dce8f3",
  },

  selectionMessage: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    color: "#54708e",
    fontSize: "2rem",
    fontWeight: 700,
  },

  confirmButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    minWidth: "245px",
    minHeight: "48px",
    padding: "0 20px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    border: "1px solid #1e70dc",
    borderRadius: "11px",
    boxShadow:
      "0 8px 18px rgba(33, 118, 229, 0.22)",
    fontFamily: "inherit",
    fontSize: "2.4rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  confirmButtonDisabled: {
    color: "#74879c",
    background: "#e7edf4",
    borderColor: "#d2dce7",
    boxShadow: "none",
    cursor: "not-allowed",
  },

  loadingCard: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    width: "min(720px, 100%)",
    margin: "80px auto 0",
    padding: "26px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, #ffffff, #f2f8ff)",
    border: "1px solid #cadff7",
    borderRadius: "18px",
    boxShadow:
      "0 20px 50px rgba(34, 78, 126, 0.15)",
  },

  loadingIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "72px",
    height: "72px",
    flexShrink: 0,
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9e0fb",
    borderRadius: "999px",
  },

  loadingContent: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  loadingTitle: {
    margin: 0,
    color: "#0b315f",
    fontSize: "1.75rem",
    fontWeight: 900,
  },

  loadingText: {
    margin: 0,
    color: "#607a98",
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  emptyStateCard: {
    display: "grid",
    gridTemplateColumns: "360px minmax(0, 1fr)",
    width: "min(980px, 100%)",
    margin: "65px auto 0",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #ffffff, #f5f9ff)",
    border: "1px solid #ccdff3",
    borderRadius: "20px",
    boxShadow:
      "0 24px 58px rgba(31, 76, 126, 0.16)",
  },

  emptyIconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "16px",
    padding: "32px 22px",
    background:
      "linear-gradient(145deg, #edf6ff, #e8f9ef)",
    borderRight: "1px solid #d6e6f3",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "104px",
    height: "104px",
    color: "#2176e5",
    background: "#ffffff",
    border: "1px solid #c7ddf5",
    borderRadius: "999px",
    boxShadow:
      "0 12px 28px rgba(33, 118, 229, 0.15)",
  },

  adminBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    padding: "7px 11px",
    color: "#087e48",
    background: "#effbf5",
    border: "1px solid #bce7d0",
    borderRadius: "999px",
    fontSize: "1.6rem",
    fontWeight: 850,
    textAlign: "center",
  },

  emptyContent: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    padding: "34px",
  },

  emptyTitle: {
    margin: 0,
    color: "#0a2d5c",
    fontSize: "2.8rem",
    fontWeight: 950,
    letterSpacing: "-0.025em",
  },

  emptyDescription: {
    margin: "8px 0 20px",
    color: "#627c99",
    fontSize: "2rem",
    fontWeight: 600,
  },

  emptyNotice: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    width: "100%",
    padding: "15px",
    boxSizing: "border-box",
    color: "#8c620c",
    background:
      "linear-gradient(135deg, #fff9e9, #fffdf6)",
    border: "1px solid #efd394",
    borderRadius: "11px",
  },

  emptyNoticeText: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "1.6rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  emptyNoticeTitle: {
    color: "#9a6500",
    fontSize: "2rem",
    fontWeight: 900,
  },

  backButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "45px",
    marginTop: "22px",
    padding: "0 17px",
    color: "#185fae",
    background: "#ffffff",
    border: "1px solid #bcd4ef",
    borderRadius: "10px",
    boxShadow:
      "0 5px 12px rgba(35, 83, 137, 0.08)",
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 850,
    cursor: "pointer",
  },
    expandedBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 9997,
    background:
      "rgba(24, 49, 78, 0.58)",
    backdropFilter: "blur(7px)",
  },

  mapCardExpanded: {
    position: "fixed",
    top: "18px",
    right: "18px",
    bottom: "18px",
    left: "18px",
    zIndex: 9998,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    maxWidth: "none",
    margin: 0,
    boxSizing: "border-box",
  },

  mapContainerExpanded: {
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
  },

  footerLeftSection: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flex: 1,
    minWidth: 0,
  },

  expandMapButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    minHeight: "48px",
    padding: "0 18px",
    flexShrink: 0,
    color: "#176fdc",
    background:
      "linear-gradient(135deg, #eef6ff, #ffffff)",
    border: "1px solid #a9cef8",
    borderRadius: "11px",
    boxShadow:
      "0 6px 15px rgba(33, 118, 229, 0.12)",
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 900,
    cursor: "pointer",
  },
};

export default styles;