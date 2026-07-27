const styles = {
  container: {
    minHeight: "350px",
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
    gap: "10px",
  },

  item: {
    padding: "13px",
    border: "1px solid #e4e7ec",
    borderRadius: "10px",
  },

  itemHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "12px",
  },

  projectInformation: {
    minWidth: 0,
  },

  projectName: {
    margin: "0 0 4px",
    color: "#101828",
    fontSize: "12px",
    fontWeight: "700",
  },

  projectTechnology: {
    margin: 0,
    color: "#7d8796",
    fontSize: "9px",
  },

  status: {
    flexShrink: 0,
    padding: "4px 8px",
    borderRadius: "999px",
    fontSize: "8px",
    fontWeight: "700",
  },

  statusOperational: {
    color: "#137333",
    backgroundColor: "#e7f5eb",
  },

  statusWarning: {
    color: "#a15c00",
    backgroundColor: "#fff2d5",
  },

  statusCritical: {
    color: "#b42318",
    backgroundColor: "#fee4e2",
  },

  metrics: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    marginTop: "12px",
  },

  metric: {
    padding: "8px",
    backgroundColor: "#f8f9fb",
    borderRadius: "8px",
  },

  metricValue: {
    display: "block",
    marginBottom: "3px",
    color: "#101828",
    fontSize: "14px",
    fontWeight: "700",
  },

  metricLabel: {
    color: "#7d8796",
    fontSize: "8px",
  },
};

export default styles;