const styles = {
  container: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 1fr) 52px minmax(0, 1fr)",
    alignItems: "stretch",
    gap: 12,
  },

  descriptionCard: {
    minWidth: 0,
    minHeight: 270,
    borderRadius: 16,
    border: "1px solid #C9D9EC",
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    boxShadow: "0 8px 22px rgba(34, 82, 145, 0.07)",
  },

  newDescriptionCard: {
    border: "1px solid #AFCDF8",
    backgroundColor: "rgba(255, 255, 255, 0.90)",
  },

  cardHeader: {
    minHeight: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  headingGroup: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  oldIconBox: {
    width: 50,
    height: 50,
    flex: "0 0 40px",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748B",
    backgroundColor: "#F3F6FA",
    border: "1px solid #D8E1EC",
  },

  newIconBox: {
    width: 50,
    height: 50,
    flex: "0 0 40px",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2563EB",
    backgroundColor: "#EAF3FF",
    border: "1px solid #B7D4FF",
  },

  cardEyebrow: {
    display: "block",
    marginBottom: 2,
    fontSize: 30,
    fontWeight: 900,
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "0.055em",
  },

  newCardEyebrow: {
    display: "block",
    marginBottom: 2,
    fontSize: 30,
    fontWeight: 900,
    color: "#2563EB",
    textTransform: "uppercase",
    letterSpacing: "0.055em",
  },

  cardTitle: {
    margin: 0,
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 900,
    color: "#0A214A",
  },

  oldBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    borderRadius: 999,
    backgroundColor: "#F4F7FA",
    border: "1px solid #D7E0EA",
    color: "#63748A",
    fontSize: 30,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },

  newBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    borderRadius: 999,
    backgroundColor: "#EAF3FF",
    border: "1px solid #B7D4FF",
    color: "#1760C8",
    fontSize: 30,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },

  descriptionContent: {
    flex: 1,
    boxSizing: "border-box",
    padding: 16,
    borderRadius: 13,
    backgroundColor: "#F3F7FC",
    border: "1px solid #D5E2F1",
  },

  newDescriptionContent: {
    backgroundColor: "#EDF5FF",
    border: "1px solid #C7DCFA",
  },

  descriptionText: {
    margin: 0,
    fontSize: 24,
    lineHeight: 1.72,
    fontWeight: 600,
    color: "#273D5F",
    whiteSpace: "pre-line",
    overflowWrap: "anywhere",
  },

  arrowBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#0B2A5B",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 20px rgba(11, 42, 91, 0.20)",
  },
};

export default styles;