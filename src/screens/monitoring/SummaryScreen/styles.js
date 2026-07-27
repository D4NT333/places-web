const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    padding: "28px 26px 40px",
    backgroundColor: "#f4f6fb",
    boxSizing: "border-box",
  },

  header: {
    marginBottom: "20px",
  },

  sectionLabel: {
    margin: "0 0 7px",
    color: "#667085",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "0.4px",
  },

  title: {
    margin: "0 0 9px",
    color: "#101828",
    fontSize: "25px",
    lineHeight: "1.1",
  },

  description: {
    maxWidth: "760px",
    margin: 0,
    color: "#667085",
    fontSize: "11px",
    lineHeight: "1.6",
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "12px",
    marginBottom: "14px",
  },

  primaryGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(300px, 1fr)",
    gap: "14px",
    marginBottom: "14px",
  },

  tableSection: {
    marginBottom: "14px",
  },

  secondaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
  },
};

export default styles;