const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    minHeight: "100%",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "1rem",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "1rem",
    minHeight: "340px",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  statCard: {
    background: "#f8f8f8",
    border: "1px solid #cfcfcf",
    borderRadius: "12px",
    padding: "1rem",
    minHeight: "120px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  statTitle: {
    fontSize: "0.95rem",
    color: "#444",
    fontWeight: 600,
  },

  statValue: {
    fontSize: "1.8rem",
    fontWeight: 700,
    marginTop: "0.6rem",
  },

  statSubtitle: {
    fontSize: "0.9rem",
    color: "#777",
    marginTop: "0.25rem",
  },

  bigPanel: {
    background: "#f8f8f8",
    border: "1px solid #cfcfcf",
    borderRadius: "12px",
    padding: "1.25rem",
    boxSizing: "border-box",
    minHeight: "340px",
  },

  bigPanelTitle: {
    margin: 0,
    fontSize: "1.8rem",
    color: "#333",
  },

  activityList: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  activityItem: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "0.9rem 1rem",
    color: "#444",
  },

  smallPanel: {
    background: "#f8f8f8",
    border: "1px solid #cfcfcf",
    borderRadius: "12px",
    padding: "1.1rem",
    boxSizing: "border-box",
    minHeight: "160px",
  },

  smallPanelTitle: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#333",
  },

  smallPanelText: {
    margin: "0.8rem 0 0",
    color: "#666",
  },

  navButtonStyle:{
  border: "1px solid #d0d0d0",
  background: "#fff",
  borderRadius: "10px",
  padding: "0.8rem 1rem",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "0.95rem",
  color: "#333",
},
};

export default styles;