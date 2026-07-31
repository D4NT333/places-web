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

    boxSizing: "border-box",
  },

  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "16px 18px",

    background:
      "linear-gradient(135deg, rgba(240, 252, 246, 0.98), rgba(255, 255, 255, 0.98) 56%, rgba(242, 248, 255, 0.98))",

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

    color: "#078e4a",

    background:
      "linear-gradient(145deg, #eafaf2, #f8fcfa)",

    border:
      "1px solid #bee5cf",

    borderRadius: "16px",

    boxShadow:
      "0 7px 18px rgba(7, 142, 74, 0.12)",
  },

  titleText: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",
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

  dateRow: {
    display: "flex",
    alignItems: "center",

    gap: "5px",

    color: "#647e9a",
  },

  dateLabel: {
    color: "inherit",

    fontSize: "1.8rem",
    fontWeight: 750,

    whiteSpace: "nowrap",
  },

  statusBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    gap: "5px",
    flexShrink: 0,
  },

  statusLabel: {
    color: "#607a98",

    fontSize: "1.8rem",
    fontWeight: 850,

    whiteSpace: "nowrap",
  },

  statusPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minWidth: "112px",
    minHeight: "33px",

    padding: "0 11px",
    boxSizing: "border-box",

    border:
      "1px solid",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
  },

  statusPillActive: {
    color: "#078e4a",
    backgroundColor: "#eafaf2",
    borderColor: "#b9e5ce",
  },

  statusPillPending: {
    color: "#176fdc",
    backgroundColor: "#eef6ff",
    borderColor: "#b7d6fa",
  },

  statusPillLowActivity: {
    color: "#ad6900",
    backgroundColor: "#fff7e7",
    borderColor: "#efd18f",
  },

  statusPillNoActivity: {
    color: "#c56713",
    backgroundColor: "#fff2e6",
    borderColor: "#f1c49c",
  },

  statusPillForgotten: {
    color: "#d23f3f",
    backgroundColor: "#fff0f0",
    borderColor: "#f5bebe",
  },

  statusPillInvisible: {
    color: "#7441d6",
    backgroundColor: "#f5efff",
    borderColor: "#d9c8f7",
  },

  statusPillHidden: {
    color: "#d23f3f",
    backgroundColor: "#fff0f0",
    borderColor: "#f5bebe",
  },

  statusPillDefault: {
    color: "#5c7189",
    backgroundColor: "#f1f5f9",
    borderColor: "#d0dbe6",
  },

  content: {
    display: "flex",
    flexDirection: "column",

    minHeight: "210px",

    padding: "14px 16px",
    boxSizing: "border-box",
  },

  list: {
    display: "grid",

    gap: "9px",

    margin: 0,
    padding: 0,

    listStyle: "none",
  },

  item: {
    position: "relative",

    display: "flex",
    alignItems: "center",

    gap: "11px",

    minWidth: 0,
    minHeight: "66px",

    padding: "9px 16px 9px 10px",
    boxSizing: "border-box",

    overflow: "hidden",

    background:
      "linear-gradient(135deg, #f7fbff, #ffffff)",

    border:
      "1px solid #d4e3f0",

    borderRadius: "12px",

    boxShadow:
      "0 5px 13px rgba(31, 73, 116, 0.05)",

    transition:
      "transform 160ms ease, box-shadow 160ms ease",
  },

  itemIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "56px",
    height: "56px",
    flexShrink: 0,

    color: "#2176e5",
    background: "#eef6ff",

    border:
      "1px solid #c6defa",

    borderRadius: "11px",
  },

  itemContent: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  itemText: {
    overflow: "hidden",

    color: "#123760",

    fontSize: "2rem",
    fontWeight: 850,
    lineHeight: 1.35,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  itemMeta: {
    display: "flex",
    alignItems: "center",

    gap: "4px",

    color: "#6b829c",

    fontSize: "1.6rem",
    fontWeight: 650,
  },

  itemIndicator: {
    position: "absolute",
    top: "50%",
    right: "8px",

    width: "7px",
    height: "34px",

    background:
      "linear-gradient(180deg, #2176e5, #55c65a)",

    borderRadius: "999px",

    transform:
      "translateY(-50%)",
  },

  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    flex: 1,

    gap: "6px",

    padding: "26px",

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

    color: "#078e4a",
    background: "#eafaf2",

    border:
      "1px solid #bee5cf",

    borderRadius: "18px",
  },

  emptyTitle: {
    color: "#17375f",

    fontSize: "1.8rem",
    fontWeight: 900,
  },

  emptyMessage: {
    maxWidth: "360px",

    margin: 0,

    color: "#647e98",

    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.45,
  },

  footerNote: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    margin: "0 16px 15px",
    padding: "9px 11px",

    color: "#4f735f",
    background:
      "linear-gradient(135deg, #edf9f3, #f8fcfa)",

    border:
      "1px solid #cee6d9",

    borderRadius: "10px",

    fontSize: "1.8rem",
    fontWeight: 700,
  },
};

export default styles;