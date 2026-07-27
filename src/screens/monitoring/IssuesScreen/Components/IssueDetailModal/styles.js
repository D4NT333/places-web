const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    backgroundColor: "rgba(16, 24, 40, 0.58)",
    boxSizing: "border-box",
  },

  modal: {
    display: "flex",
    flexDirection: "column",
    width: "min(920px, 100%)",
    maxHeight: "92vh",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow:
      "0 24px 70px rgba(16, 24, 40, 0.28)",
  },

  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",
    padding: "22px 24px",
    borderBottom: "1px solid #e4e7ec",
  },

  headerInformation: {
    minWidth: 0,
  },

  sectionLabel: {
    margin: "0 0 7px",
    color: "#667085",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },

  title: {
    margin: "0 0 6px",
    color: "#101828",
    fontSize: "20px",
    lineHeight: "1.35",
  },

  code: {
    margin: 0,
    color: "#667085",
    fontSize: "10px",
    fontWeight: "600",
  },

  closeButton: {
    width: "34px",
    height: "34px",
    flexShrink: 0,
    color: "#667085",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "22px",
    lineHeight: "1",
  },

  modalBody: {
    padding: "20px 24px",
    overflowY: "auto",
  },

  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px",
  },

  chip: {
    padding: "5px 9px",
    borderRadius: "999px",
    fontSize: "9px",
    fontWeight: "700",
  },

  neutralChip: {
    padding: "5px 9px",
    color: "#344054",
    backgroundColor: "#f2f4f7",
    borderRadius: "999px",
    fontSize: "9px",
    fontWeight: "700",
  },

  levelChips: {
    fatal: {
      color: "#7a271a",
      backgroundColor: "#fee4e2",
    },

    error: {
      color: "#b42318",
      backgroundColor: "#fef0f0",
    },

    warning: {
      color: "#a15c00",
      backgroundColor: "#fff3d9",
    },

    info: {
      color: "#175cd3",
      backgroundColor: "#eaf2ff",
    },
  },

  statusChips: {
    unresolved: {
      color: "#b42318",
      backgroundColor: "#fef0f0",
    },

    reviewing: {
      color: "#a15c00",
      backgroundColor: "#fff3d9",
    },

    resolved: {
      color: "#137333",
      backgroundColor: "#e7f5eb",
    },

    ignored: {
      color: "#475467",
      backgroundColor: "#f2f4f7",
    },

    reopened: {
      color: "#b42318",
      backgroundColor: "#fef0f0",
    },

    regression: {
      color: "#7a271a",
      backgroundColor: "#fee4e2",
    },
  },

  section: {
    marginBottom: "22px",
  },

  sectionTitle: {
    margin: "0 0 12px",
    color: "#101828",
    fontSize: "14px",
  },

  message: {
    margin: "0 0 16px",
    padding: "12px 14px",
    color: "#344054",
    backgroundColor: "#f8f9fb",
    border: "1px solid #e4e7ec",
    borderRadius: "9px",
    fontSize: "11px",
    lineHeight: "1.6",
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",
    gap: "12px",
  },

  field: {
    padding: "11px 12px",
    backgroundColor: "#f8f9fb",
    borderRadius: "9px",
  },

  fieldLabel: {
    display: "block",
    marginBottom: "5px",
    color: "#667085",
    fontSize: "9px",
    fontWeight: "600",
  },

  fieldValue: {
    display: "block",
    overflow: "hidden",
    color: "#101828",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "10px",
    fontWeight: "700",
  },

  codeBox: {
    padding: "12px 14px",
    backgroundColor: "#101828",
    borderRadius: "9px",
  },

  codeLabel: {
    margin: "0 0 6px",
    color: "#98a2b3",
    fontSize: "9px",
  },

  codeValue: {
    color: "#f2f4f7",
    fontSize: "10px",
    whiteSpace: "normal",
    wordBreak: "break-word",
  },

  stackTrace: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "14px",
    backgroundColor: "#101828",
    borderRadius: "9px",
  },

  stackLine: {
    color: "#f2f4f7",
    fontSize: "10px",
    lineHeight: "1.5",
    whiteSpace: "pre-wrap",
  },

  breadcrumbList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  breadcrumbItem: {
    display: "grid",
    gridTemplateColumns: "70px 1fr",
    gap: "12px",
    padding: "11px 12px",
    border: "1px solid #e4e7ec",
    borderRadius: "9px",
  },

  breadcrumbTime: {
    color: "#667085",
    fontSize: "9px",
    fontWeight: "700",
  },

  breadcrumbContent: {
    minWidth: 0,
  },

  breadcrumbCategory: {
    display: "block",
    marginBottom: "4px",
    color: "#175cd3",
    fontSize: "8px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  breadcrumbMessage: {
    margin: 0,
    color: "#344054",
    fontSize: "10px",
    lineHeight: "1.5",
  },

  historyList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  historyItem: {
    padding: "13px 14px",
    backgroundColor: "#ffffff",
    border: "1px solid #e4e7ec",
    borderRadius: "9px",
  },

  historyHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "9px",
  },

  historyAction: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "999px",
    fontSize: "9px",
    fontWeight: "700",
  },

  historyActions: {
    detected: {
      color: "#175cd3",
      backgroundColor: "#eaf2ff",
    },

    reviewing: {
      color: "#a15c00",
      backgroundColor: "#fff3d9",
    },

    resolved: {
      color: "#137333",
      backgroundColor: "#e7f5eb",
    },

    ignored: {
      color: "#475467",
      backgroundColor: "#f2f4f7",
    },

    reopened: {
      color: "#b42318",
      backgroundColor: "#fef0f0",
    },

    regression: {
      color: "#7a271a",
      backgroundColor: "#fee4e2",
    },
  },

  historyDate: {
    color: "#98a2b3",
    fontSize: "9px",
  },

  historyStatusChange: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    marginBottom: "8px",
  },

  historyPreviousStatus: {
    color: "#667085",
    fontSize: "9px",
  },

  historyArrow: {
    color: "#98a2b3",
    fontSize: "10px",
    fontWeight: "700",
  },

  historyCurrentStatus: {
    color: "#101828",
    fontSize: "9px",
    fontWeight: "700",
  },

  historyNote: {
    margin: "0 0 8px",
    color: "#344054",
    fontSize: "10px",
    lineHeight: "1.55",
  },

  historyActor: {
    color: "#667085",
    fontSize: "9px",
    fontWeight: "600",
  },

  emptyHistory: {
    margin: 0,
    padding: "14px",
    color: "#667085",
    backgroundColor: "#f8f9fb",
    borderRadius: "9px",
    fontSize: "10px",
  },

  modalFooter: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "10px",
    padding: "16px 24px",
    borderTop: "1px solid #e4e7ec",
  },

  secondaryButton: {
    padding: "9px 14px",
    color: "#344054",
    backgroundColor: "#ffffff",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "700",
  },

  reviewButton: {
    padding: "9px 14px",
    color: "#a15c00",
    backgroundColor: "#fff3d9",
    border: "1px solid #f5d48a",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "700",
  },

  ignoreButton: {
    padding: "9px 14px",
    color: "#475467",
    backgroundColor: "#f2f4f7",
    border: "1px solid #d0d5dd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "700",
  },

  resolveButton: {
    padding: "9px 14px",
    color: "#137333",
    backgroundColor: "#e7f5eb",
    border: "1px solid #b7dfc2",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "700",
  },

  primaryButton: {
    padding: "9px 14px",
    color: "#ffffff",
    backgroundColor: "#175cd3",
    border: "1px solid #175cd3",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "700",
  },
};

export default styles;