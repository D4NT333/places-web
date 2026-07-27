const styles = {
  container: {
    minHeight: "330px",
    padding: "18px",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe3e8",
    borderRadius: "14px",
    boxSizing: "border-box",
  },

  header: {
    marginBottom: "14px",
  },

  title: {
    margin: "0 0 6px",
    color: "#101828",
    fontSize: "15px",
  },

  description: {
    margin: 0,
    color: "#667085",
    fontSize: "10px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
  },

  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "11px",
    border: "1px solid #e4e7ec",
    borderRadius: "10px",
  },

  severityDot: {
    width: "8px",
    height: "8px",
    marginTop: "5px",
    flexShrink: 0,
    borderRadius: "50%",
  },

  criticalDot: {
    backgroundColor: "#d92d20",
  },

  warningDot: {
    backgroundColor: "#f79009",
  },

  informationDot: {
    backgroundColor: "#2e90fa",
  },

  alertContent: {
    minWidth: 0,
    flex: 1,
  },

  alertHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
  },

  alertTitle: {
    margin: 0,
    color: "#101828",
    fontSize: "10px",
    fontWeight: "700",
  },

  severityChip: {
    flexShrink: 0,
    padding: "3px 7px",
    borderRadius: "999px",
    fontSize: "7px",
    fontWeight: "700",
  },

  criticalChip: {
    color: "#b42318",
    backgroundColor: "#fee4e2",
  },

  warningChip: {
    color: "#a15c00",
    backgroundColor: "#fff3d9",
  },

  informationChip: {
    color: "#175cd3",
    backgroundColor: "#eaf2ff",
  },

  alertDescription: {
    margin: "5px 0 8px",
    color: "#667085",
    fontSize: "9px",
    lineHeight: "1.5",
  },

  alertFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    color: "#98a2b3",
    fontSize: "8px",
  },
};

export default styles;