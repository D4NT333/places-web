const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding:
      "18px clamp(16px, 1.8vw, 30px) 30px",
    boxSizing: "border-box",
  },

  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    flexWrap: "wrap",
  },

  headerInformation: {
    minWidth: 0,
    flex: "1 1 650px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  titleRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
  },

  titleIconBox: {
    width: 52,
    height: 52,
    flex: "0 0 52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #B8D3FA",
    borderRadius: 15,
    backgroundColor:
      "rgba(235, 244, 255, 0.94)",
    color: "#2475E8",
    boxShadow:
      "0 8px 18px rgba(36, 117, 232, 0.11)",
  },

  title: {
    margin: 0,
    color: "#071B45",
    fontSize:
      "clamp(28px, 2.25vw, 44px)",
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: "-0.028em",
  },

  subtitle: {
    maxWidth: 760,
    margin: "7px 0 0",
    color: "#5B708F",
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
  },

  summaryCards: {
    display: "flex",
    alignItems: "stretch",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 16,
  },

  summaryCard: {
    minWidth: 205,
    display: "flex",
    alignItems: "center",
    gap: 11,
    padding: "11px 14px",
    border:
      "1px solid rgba(200, 215, 235, 0.95)",
    borderRadius: 14,
    backgroundColor:
      "rgba(255, 255, 255, 0.86)",
    boxShadow:
      "0 8px 18px rgba(35, 75, 126, 0.08)",
    backdropFilter:
      "blur(8px)",
    boxSizing: "border-box",
  },

  summaryIconBlue: {
    width: 42,
    height: 42,
    flex: "0 0 42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #BCD6FA",
    borderRadius: 12,
    backgroundColor: "#EDF5FF",
    color: "#2475E8",
  },

  summaryIconGreen: {
    width: 42,
    height: 42,
    flex: "0 0 42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #ABE3C5",
    borderRadius: 12,
    backgroundColor: "#EAF9F1",
    color: "#0B9B57",
  },

  summaryInformation: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  summaryLabel: {
    color: "#334D70",
    fontSize: 28,
    fontWeight: 800,
  },

  summaryValueBlue: {
    color: "#1768D4",
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1,
  },

  summaryValueGreen: {
    color: "#078944",
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1,
  },

  filters: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: 5,
    border:
      "1px solid rgba(206, 218, 235, 0.96)",
    borderRadius: 13,
    backgroundColor:
      "rgba(255, 255, 255, 0.9)",
    boxShadow:
      "0 9px 22px rgba(35, 75, 126, 0.09)",
    backdropFilter:
      "blur(9px)",
  },

  filterButton: {
    minHeight: 40,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    padding: "8px 14px",
    border: "none",
    borderRadius: 9,
    backgroundColor:
      "transparent",
    color: "#132B50",
    fontFamily: "inherit",
    fontSize: 30,
    fontWeight: 850,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition:
      "background-color 160ms ease, color 160ms ease, box-shadow 160ms ease",
  },

  filterButtonActive: {
    backgroundColor: "#2475E8",
    color: "#FFFFFF",
    boxShadow:
      "0 7px 16px rgba(36, 117, 232, 0.22)",
  },

  filterIconActive: {
    color: "#FFFFFF",
  },

  filterIconBlue: {
    color: "#2475E8",
  },

  filterIconOrange: {
    color: "#E58900",
  },

  filterIconGreen: {
    color: "#0A9C57",
  },

  filterIconRed: {
    color: "#EE4040",
  },

  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",
    gap: 18,
  },

  cardNavigation: {
    width: "100%",
    minWidth: 0,
    height: "100%",
    display: "block",
    borderRadius: 18,
    outline: "none",
    cursor: "pointer",
  },

  feedbackCard: {
    width: "min(720px, 100%)",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: 20,
    border:
      "1px solid rgba(198, 214, 235, 0.96)",
    borderRadius: 18,
    backgroundColor:
      "rgba(255, 255, 255, 0.88)",
    boxShadow:
      "0 12px 28px rgba(35, 75, 126, 0.09)",
    backdropFilter:
      "blur(9px)",
    boxSizing: "border-box",
  },

  feedbackContent: {
    minWidth: 0,
  },

  feedbackIconBlue: {
    width: 50,
    height: 50,
    flex: "0 0 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #BCD6FA",
    borderRadius: 14,
    backgroundColor: "#EDF5FF",
    color: "#2475E8",
  },

  feedbackIconRed: {
    width: 50,
    height: 50,
    flex: "0 0 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #FFC2C2",
    borderRadius: 14,
    backgroundColor: "#FFF0F0",
    color: "#E53C3C",
  },

  feedbackTitle: {
    margin: 0,
    color: "#0B214B",
    fontSize: 30,
    fontWeight: 900,
  },

  feedbackText: {
    margin: "5px 0 0",
    color: "#637895",
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 1.5,
  },

  retryButton: {
    minHeight: 38,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 12,
    padding: "8px 14px",
    border:
      "1px solid #B9D1F2",
    borderRadius: 999,
    backgroundColor: "#F0F6FF",
    color: "#1768CF",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 850,
    cursor: "pointer",
  },

  inlineError: {
    alignSelf: "center",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 16px",
    border:
      "1px solid #FBC2C2",
    borderRadius: 999,
    backgroundColor:
      "rgba(255, 240, 240, 0.94)",
    color: "#D63B3B",
    fontSize: 13,
    fontWeight: 800,
  },

  paginationActions: {
    display: "flex",
    justifyContent: "center",
  },

  loadMoreButton: {
    minHeight: 44,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 18px",
    border:
      "1px solid #AFCDF4",
    borderRadius: 999,
    backgroundColor:
      "rgba(239, 246, 255, 0.94)",
    color: "#1768CF",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow:
      "0 8px 18px rgba(34, 98, 182, 0.11)",
  },

  loadMoreButtonDisabled: {
    opacity: 0.65,
    cursor: "not-allowed",
    boxShadow: "none",
  },

  paginationEnd: {
    alignSelf: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "9px 16px",
    color: "#058B40",
    fontSize: 30,
    fontWeight: 900,
  },
};

export default styles;