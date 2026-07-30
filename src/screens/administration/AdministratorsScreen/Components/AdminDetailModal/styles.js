const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    boxSizing: "border-box",
    background: "rgba(32, 61, 92, 0.52)",
    backdropFilter: "blur(7px)",
  },

  modal: {
    width: "min(1800px, 100%)",
    maxHeight: "calc(100vh - 48px)",
    overflow: "hidden",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
    border: "1px solid rgba(214, 226, 241, 0.98)",
    borderRadius: "17px",
    boxShadow:
      "0 28px 70px rgba(22, 49, 79, 0.3)",
  },

  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "18px",
    padding: "23px 25px 17px",
    borderBottom: "1px solid #dbe6f2",
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    flexShrink: 0,
    color: "#217df0",
    background:
      "linear-gradient(145deg, #e8f3ff, #f5f9ff)",
    border: "1px solid #cfe2fb",
    borderRadius: "999px",
    boxShadow: "0 5px 14px rgba(37, 113, 210, 0.12)",
  },

  titleText: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  title: {
    margin: 0,
    color: "#0a2856",
    fontSize: "2.4rem",
    fontWeight: 900,
    letterSpacing: "-0.025em",
  },

  subtitle: {
    margin: 0,
    color: "#627b99",
    fontSize: "1.6rem",
    fontWeight: 550,
    lineHeight: 1.45,
  },

  closeIconButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#18365d",
    background: "#ffffff",
    border: "1px solid #d4e1ef",
    borderRadius: "9px",
    boxShadow: "0 4px 10px rgba(38, 70, 105, 0.1)",
    cursor: "pointer",
  },

  modalBody: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    maxHeight: "calc(100vh - 190px)",
    overflowY: "auto",
    padding: "16px 25px",
  },

  infoSection: {
    overflow: "hidden",
    border: "1px solid #bad8ff",
    borderRadius: "11px",
    background: "#ffffff",
  },

  activitySection: {
    overflow: "hidden",
    border: "1px solid #bdebd1",
    borderRadius: "11px",
    background: "#fafffc",
  },

  actionsSection: {
    overflow: "hidden",
    border: "1px solid #decdf8",
    borderRadius: "11px",
    background: "#fdfbff",
  },

  blueSectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "12px 15px",
    color: "#176fdc",
    background:
      "linear-gradient(90deg, #eaf4ff, #f5f9ff)",
    borderBottom: "1px solid #c9e0fb",
  },

  greenSectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "12px 15px",
    color: "#07954e",
    background:
      "linear-gradient(90deg, #eafaf2, #f4fcf8)",
    borderBottom: "1px solid #c9ecd9",
  },

  purpleSectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "12px 15px",
    color: "#7441d6",
    background:
      "linear-gradient(90deg, #f4edff, #fbf8ff)",
    borderBottom: "1px solid #e0d2f6",
  },

  sectionTitle: {
    margin: 0,
    color: "inherit",
    fontSize: "2rem",
    fontWeight: 900,
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "17px 24px",
    padding: "17px 15px",
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minWidth: 0,
  },

  infoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#247cf0",
    background: "#eef6ff",
    border: "1px solid #cfe2fb",
    borderRadius: "9px",
  },

  infoText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "3px",
    minWidth: 0,
  },

  infoLabel: {
    color: "#607896",
    fontSize: "1.8rem",
    fontWeight: 700,
  },

  infoValue: {
    color: "#102d57",
    fontSize: "1.6rem",
    fontWeight: 800,
    overflowWrap: "anywhere",
  },

  activityGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "10px",
    padding: "14px",
  },

  activityCard: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    minHeight: "58px",
    padding: "9px 10px",
    boxSizing: "border-box",
    background: "#f7fffa",
    border: "1px solid #c8ecd8",
    borderRadius: "9px",
  },

  activityIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "51px",
    height: "51px",
    flexShrink: 0,
    color: "#0a9b51",
    background: "#ecfaf2",
    borderRadius: "8px",
  },

  activityContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  activityLabel: {
    color: "#537168",
    fontSize: "1.8rem",
    fontWeight: 650,
    lineHeight: 1.2,
  },

  activityValue: {
    color: "#078e4a",
    fontSize: "2rem",
    fontWeight: 900,
  },

  actionsContent: {
    display: "flex",
    flexDirection: "column",
    gap: "11px",
    padding: "14px",
  },

  actionButtons: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
  },

  actionButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "37px",
    padding: "0 13px",
    border: "1px solid",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  changeRoleButton: {
    color: "#1770df",
    background: "#f5f9ff",
    borderColor: "#bad7fb",
  },

  disableButton: {
    color: "#e33d3d",
    background: "#fff3f3",
    borderColor: "#ffc7c7",
  },

  activateButton: {
    color: "#078d49",
    background: "#edfbf4",
    borderColor: "#bfe9d2",
  },

  auditButton: {
    color: "#7441d1",
    background: "#f8f3ff",
    borderColor: "#dbc8f7",
  },

  disabledButton: {
    opacity: 0.48,
    cursor: "not-allowed",
  },

  warningNote: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 11px",
    color: "#ad6900",
    background: "#fff9eb",
    border: "1px solid #f3d28d",
    borderRadius: "8px",
    fontSize: "1.6rem",
    fontWeight: 650,
  },

  helperNote: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 11px",
    color: "#536b87",
    background: "#f6f9fd",
    border: "1px solid #dbe5f0",
    borderRadius: "8px",
    fontSize: "1.72rem",
    fontWeight: 650,
  },

  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "13px 25px",
    background: "#fbfdff",
    borderTop: "1px solid #dce7f2",
  },

  closeButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "36px",
    padding: "0 15px",
    color: "#155eb5",
    background: "#ffffff",
    border: "1px solid #bcd4f2",
    borderRadius: "9px",
    boxShadow: "0 4px 10px rgba(40, 89, 145, 0.08)",
    fontFamily: "inherit",
    fontSize: "2rem",
    fontWeight: 850,
    cursor: "pointer",
  },
    actionPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    padding: "16px",
    background:
      "linear-gradient(180deg, #fbfdff 0%, #f5f9ff 100%)",
    border: "1px solid #bfd8f8",
    borderRadius: "10px",
  },

  disableActionPanel: {
    background:
      "linear-gradient(180deg, #fffafa 0%, #fff4f4 100%)",
    borderColor: "#ffcaca",
  },

  reactivateActionPanel: {
    background:
      "linear-gradient(180deg, #fafffc 0%, #effbf5 100%)",
    borderColor: "#bfe9d2",
  },

  actionPanelHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "12px",
  },

  actionPanelTitle: {
    margin: 0,
    color: "#163e73",
    fontSize: "1.8rem",
    fontWeight: 900,
  },

  disableActionTitle: {
    color: "#d93d3d",
  },

  reactivateActionTitle: {
    color: "#078d49",
  },

  actionPanelDescription: {
    margin: "4px 0 0",
    color: "#607896",
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },

  roleOptions: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",
    gap: "12px",
  },

  roleOption: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    minWidth: 0,
    padding: "14px",
    color: "#24466e",
    background: "#ffffff",
    border: "1px solid #d4e2f2",
    borderRadius: "10px",
    fontFamily: "inherit",
    textAlign: "left",
    cursor: "pointer",
  },

  roleOptionSelected: {
    color: "#176fdc",
    background: "#eef6ff",
    borderColor: "#81b8fa",
    boxShadow:
      "0 0 0 2px rgba(37, 124, 240, 0.1)",
  },

  roleOptionIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#237be9",
    background: "#edf5ff",
    border: "1px solid #cde1fb",
    borderRadius: "10px",
  },

  roleOptionText: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "4px",
    minWidth: 0,
  },

  roleOptionTitleRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "7px",
  },

  roleOptionTitle: {
    color: "inherit",
    fontSize: "1.65rem",
    fontWeight: 900,
  },

  currentRoleBadge: {
    padding: "2px 8px",
    color: "#087e9c",
    background: "#eaf8fb",
    border: "1px solid #bee5ed",
    borderRadius: "999px",
    fontSize: "1.2rem",
    fontWeight: 850,
  },

  roleOptionDescription: {
    color: "#607896",
    fontSize: "1.35rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },

  roleSelection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "42px",
    flexShrink: 0,
    color: "#ffffff",
    background: "#ffffff",
    border: "2px solid #cbd9e8",
    borderRadius: "999px",
  },

  roleSelectionActive: {
    color: "#ffffff",
    background: "#2780ed",
    borderColor: "#2780ed",
  },

  actionPanelNotice: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "10px 12px",
    color: "#9b650b",
    background: "#fff9eb",
    border: "1px solid #f1d18c",
    borderRadius: "8px",
    fontSize: "1.35rem",
    fontWeight: 700,
  },

  reasonField: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  reasonLabel: {
    color: "#7f3434",
    fontSize: "1.55rem",
    fontWeight: 850,
  },

  reasonInput: {
    width: "100%",
    minHeight: "94px",
    padding: "12px 14px",
    boxSizing: "border-box",
    resize: "vertical",
    color: "#4b2828",
    background: "#ffffff",
    border: "1px solid #efb9b9",
    borderRadius: "9px",
    outline: "none",
    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },

  reasonHelper: {
    color: "#9a6c6c",
    fontSize: "1.2rem",
    fontWeight: 650,
  },

  confirmationCheck: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "11px 12px",
    color: "#7c3333",
    background: "#fff7f7",
    border: "1px solid #efc5c5",
    borderRadius: "8px",
    fontSize: "1.4rem",
    fontWeight: 700,
    cursor: "pointer",
  },

  confirmationCheckbox: {
    width: "22px",
    height: "22px",
    flexShrink: 0,
    accentColor: "#df4141",
    cursor: "pointer",
  },

  reactivateConfirmation: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    color: "#087d44",
    background: "#effbf5",
    border: "1px solid #bfe9d2",
    borderRadius: "8px",
    fontSize: "1.4rem",
    fontWeight: 700,
  },

  actionPanelButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gap: "10px",
  },

  panelCancelButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "42px",
    padding: "0 15px",
    color: "#536b87",
    background: "#ffffff",
    border: "1px solid #cad8e7",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "1.45rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  panelConfirmButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "42px",
    padding: "0 15px",
    color: "#ffffff",
    background: "#237be9",
    border: "1px solid #237be9",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "1.45rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  panelDangerButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "42px",
    padding: "0 15px",
    color: "#ffffff",
    background: "#df4141",
    border: "1px solid #df4141",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "1.45rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  panelSuccessButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "42px",
    padding: "0 15px",
    color: "#ffffff",
    background: "#07954e",
    border: "1px solid #07954e",
    borderRadius: "9px",
    fontFamily: "inherit",
    fontSize: "1.45rem",
    fontWeight: 850,
    cursor: "pointer",
  },

  panelButtonDisabled: {
    opacity: 0.48,
    cursor: "not-allowed",
  },
};

export default styles;