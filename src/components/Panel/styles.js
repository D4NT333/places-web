const styles = {
  container: {
    width: "280px",
    minHeight: "100vh",
    borderRight: "1px solid #d9d9d9",
    backgroundColor: "#f7f7f7",
    boxSizing: "border-box",
  },

  inner: {
    padding: "1.25rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  panelTitle: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1f1f1f",
  },

  sectionBlock: {
    display: "flex",
    flexDirection: "column",
  },

  sectionButton: {
    width: "100%",
    border: "none",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "0.55rem",
    padding: "0.75rem 0.25rem",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#222",
  },

  sectionText: {
    lineHeight: 1.2,
  },

  sectionContent: {
    overflow: "hidden",
    transition: "max-height 0.28s ease, opacity 0.22s ease, margin-top 0.22s ease",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    paddingLeft: "1.2rem",
  },

  sectionContentOpen: {
    maxHeight: "500px",
    opacity: 1,
    marginTop: "0.15rem",
  },

  sectionContentClosed: {
    maxHeight: "0px",
    opacity: 0,
    marginTop: "0rem",
  },

  subSectionBlock: {
    display: "flex",
    flexDirection: "column",
  },

  subSectionButton: {
    width: "100%",
    border: "none",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "0.45rem",
    padding: "0.35rem 0",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "0.98rem",
    fontWeight: 600,
    color: "#4a4a4a",
  },

  subSectionText: {
    lineHeight: 1.2,
  },

  statusList: {
    overflow: "hidden",
    transition: "max-height 0.26s ease, opacity 0.2s ease, margin-top 0.2s ease",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    paddingLeft: "1.35rem",
  },

  statusListOpen: {
    maxHeight: "220px",
    opacity: 1,
    marginTop: "0.15rem",
  },

  statusListClosed: {
    maxHeight: "0px",
    opacity: 0,
    marginTop: "0rem",
  },

  statusButton: {
    border: "none",
    background: "transparent",
    textAlign: "left",
    cursor: "pointer",
    padding: "0.35rem 0",
    fontSize: "0.95rem",
    color: "#222",
  },

  optionButton: {
    border: "none",
    background: "transparent",
    textAlign: "left",
    cursor: "pointer",
    padding: "0.35rem 0",
    fontSize: "0.95rem",
    color: "#222",
  },

  arrow: {
    width: "18px",
    display: "inline-flex",
    justifyContent: "center",
    fontSize: "1.15rem",
    fontWeight: 700,
    transition: "transform 0.22s ease",
  },

  arrowSmall: {
    width: "16px",
    display: "inline-flex",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: 700,
    transition: "transform 0.22s ease",
  },
  homeButton: {
  width: "62px",
  height: "62px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "8px",
  padding: "6px",
  },

homeIcon: {
  width: "94px",
  height: "94px",
  objectFit: "contain",
  },
};

export default styles;