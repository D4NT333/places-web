const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "26px",
    boxSizing: "border-box",

    background:
      "rgba(27, 53, 84, 0.58)",

    backdropFilter: "blur(8px)",
  },

  modal: {
    position: "relative",

    width: "min(820px, 100%)",
    maxHeight:
      "calc(100vh - 52px)",

    overflow: "hidden",

    background:
      "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",

    border:
      "1px solid rgba(213, 225, 239, 0.98)",

    borderRadius: "19px",

    boxShadow:
      "0 30px 80px rgba(19, 43, 72, 0.34)",
  },

  topAccent: {
    position: "absolute",

    top: 0,
    right: 0,
    left: 0,

    height: "5px",

    background:
      "linear-gradient(90deg, #e53e3e, #ff6565, #f0a24a)",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    gap: "20px",

    padding: "26px 27px 20px",

    background:
      "linear-gradient(135deg, #fffafa, #ffffff 55%, #f7fbff)",

    borderBottom:
      "1px solid #dce7f2",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",

    gap: "15px",

    minWidth: 0,
  },

  headerIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "58px",
    height: "58px",

    flexShrink: 0,

    color: "#df3434",

    background:
      "linear-gradient(145deg, #ffecec, #fff8f8)",

    border:
      "1px solid #ffc3c3",

    borderRadius: "15px",

    boxShadow:
      "0 7px 18px rgba(218, 54, 54, 0.13)",
  },

  headerText: {
    display: "flex",
    flexDirection: "column",

    gap: "5px",

    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#0a2c59",

    fontSize: "2.35rem",
    fontWeight: 950,

    letterSpacing: "-0.025em",
  },

  subtitle: {
    margin: 0,

    color: "#627b98",

    fontSize: "1.55rem",
    fontWeight: 600,

    lineHeight: 1.45,
  },

  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "48px",
    height: "48px",

    flexShrink: 0,

    padding: 0,

    color: "#17375f",
    background: "#ffffff",

    border:
      "1px solid #d3e0ed",

    borderRadius: "11px",

    boxShadow:
      "0 5px 13px rgba(33, 68, 107, 0.1)",

    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",

    gap: "15px",

    maxHeight:
      "calc(100vh - 245px)",

    overflowY: "auto",

    padding: "20px 27px",
  },

  proposalCard: {
    display: "flex",
    alignItems: "center",

    gap: "15px",

    padding: "14px",

    background:
      "linear-gradient(135deg, #f8fbff, #ffffff)",

    border:
      "1px solid #d4e2ef",

    borderRadius: "14px",

    boxShadow:
      "0 7px 18px rgba(31, 72, 116, 0.07)",
  },

  previewContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "82px",
    height: "82px",

    flexShrink: 0,
  },

  previewImage: {
    width: "82px",
    height: "82px",

    objectFit: "cover",

    border:
      "1px solid #cbd9e7",

    borderRadius: "13px",

    boxShadow:
      "0 7px 16px rgba(29, 63, 101, 0.13)",
  },

  previewFallback: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "82px",
    height: "82px",

    color: "#2176e5",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    border:
      "1px solid #c9def8",

    borderRadius: "13px",
  },

  proposalContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    gap: "5px",

    minWidth: 0,
  },

  proposalType: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "6px",

    minHeight: "30px",
    padding: "0 10px",

    color: "#176fdc",
    background: "#eef6ff",

    border:
      "1px solid #b9d7fa",

    borderRadius: "999px",

    fontSize: "1.2rem",
    fontWeight: 850,
  },

  proposalTitle: {
    maxWidth: "100%",

    margin: 0,

    overflow: "hidden",

    color: "#0d315f",

    fontSize: "1.8rem",
    fontWeight: 900,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  proposalStatus: {
    color: "#687f99",

    fontSize: "1.25rem",
    fontWeight: 650,
  },

  warningBox: {
    display: "flex",
    alignItems: "flex-start",

    gap: "13px",

    padding: "16px",

    color: "#9a5707",

    background:
      "linear-gradient(135deg, #fff7e8, #fffdf7)",

    border:
      "1px solid #efc87d",

    borderRadius: "13px",

    boxShadow:
      "0 6px 14px rgba(180, 113, 18, 0.06)",
  },

  warningIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "45px",
    height: "45px",

    flexShrink: 0,

    color: "#d38108",
    background: "#fff4d8",

    border:
      "1px solid #efd08d",

    borderRadius: "11px",
  },

  warningContent: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
  },

  warningTitle: {
    color: "#9b5800",

    fontSize: "1.55rem",
    fontWeight: 900,
  },

  warningText: {
    margin: 0,

    color: "#956318",

    fontSize: "1.3rem",
    fontWeight: 650,

    lineHeight: 1.5,
  },

  informationSection: {
    overflow: "hidden",

    background: "#ffffff",

    border:
      "1px solid #d4e2ef",

    borderRadius: "14px",
  },

  informationHeader: {
    display: "flex",
    alignItems: "center",

    gap: "9px",

    padding: "12px 15px",

    color: "#176fdc",

    background:
      "linear-gradient(90deg, #eaf4ff, #f7fbff)",

    borderBottom:
      "1px solid #cfe1f4",
  },

  informationTitle: {
    margin: 0,

    color: "inherit",

    fontSize: "1.65rem",
    fontWeight: 900,
  },

  dataGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "10px",

    padding: "14px",
  },

  dataCard: {
    display: "flex",
    alignItems: "center",

    gap: "10px",

    minWidth: 0,
    minHeight: "68px",

    padding: "10px 11px",
    boxSizing: "border-box",

    background:
      "linear-gradient(135deg, #f9fbfe, #ffffff)",

    border:
      "1px solid #dce7f1",

    borderRadius: "11px",
  },

  dataIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "42px",
    height: "42px",

    flexShrink: 0,

    color: "#247cf0",
    background: "#eef6ff",

    border:
      "1px solid #cfe2fb",

    borderRadius: "10px",
  },

  dataContent: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",

    minWidth: 0,
  },

  label: {
    color: "#657d98",

    fontSize: "1.15rem",
    fontWeight: 750,
  },

  value: {
    overflow: "hidden",

    color: "#12335e",

    fontSize: "1.35rem",
    fontWeight: 850,

    overflowWrap: "anywhere",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "16px",

    padding: "15px 27px",

    background:
      "linear-gradient(180deg, #fbfdff, #f7faff)",

    borderTop:
      "1px solid #dce7f2",
  },

  footerNotice: {
    display: "flex",
    alignItems: "center",

    gap: "7px",

    color: "#9b6408",

    fontSize: "1.2rem",
    fontWeight: 750,
  },

  footerActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    gap: "10px",
  },

  cancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "7px",

    minHeight: "43px",
    padding: "0 15px",

    color: "#285477",
    background: "#ffffff",

    border:
      "1px solid #c7d8e8",

    borderRadius: "10px",

    boxShadow:
      "0 4px 10px rgba(35, 76, 119, 0.07)",

    fontFamily: "inherit",
    fontSize: "1.3rem",
    fontWeight: 850,

    cursor: "pointer",
  },

  deleteButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "8px",

    minHeight: "43px",
    padding: "0 17px",

    color: "#ffffff",

    background:
      "linear-gradient(135deg, #df3737, #f04a4a)",

    border:
      "1px solid #d62f2f",

    borderRadius: "10px",

    boxShadow:
      "0 7px 16px rgba(213, 51, 51, 0.21)",

    fontFamily: "inherit",
    fontSize: "1.3rem",
    fontWeight: 900,

    cursor: "pointer",
  },

  deleteButtonDisabled: {
    opacity: 0.58,

    boxShadow: "none",

    cursor: "not-allowed",
  },

  disabledControl: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};

export default styles;