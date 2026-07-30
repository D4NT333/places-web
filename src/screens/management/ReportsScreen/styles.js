const styles = {
  screen: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    width: "100%",
    minHeight: "100%",
    padding: "24px 30px 34px",
    boxSizing: "border-box",
  },

  headerSection: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  },

  headingBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  titleLine: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "58px",
    height: "58px",
    flexShrink: 0,
    color: "#e08a13",
    background:
      "linear-gradient(145deg, #fff5df, #fffaf1)",
    border: "1px solid #f2d190",
    borderRadius: "14px",
    boxShadow:
      "0 7px 18px rgba(207, 132, 23, 0.12)",
  },

  title: {
    margin: 0,
    color: "#092b5c",
    fontSize: "3.8rem",
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    margin: "5px 0 0",
    color: "#587493",
    fontSize: "2.4rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  stateBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
    minHeight: "310px",
    padding: "34px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(245,250,255,0.98))",
    border: "1px solid #cbdced",
    borderRadius: "17px",
    boxShadow:
      "0 15px 38px rgba(29, 70, 115, 0.11)",
    textAlign: "center",
  },

  loadingIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    marginBottom: "7px",
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "999px",
  },

  errorIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    marginBottom: "7px",
    color: "#dc3c3c",
    background: "#fff0f0",
    border: "1px solid #ffc3c3",
    borderRadius: "999px",
  },

  emptyIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "82px",
    height: "82px",
    marginBottom: "7px",
    color: "#7389a2",
    background: "#eef4fa",
    border: "1px solid #d1deeb",
    borderRadius: "999px",
  },

  stateTitle: {
    margin: 0,
    color: "#0b315f",
    fontSize: "2.2rem",
    fontWeight: 950,
  },

  stateText: {
    maxWidth: "610px",
    margin: 0,
    color: "#607a98",
    fontSize: "1.6rem",
    fontWeight: 650,
    lineHeight: 1.5,
  },

  retryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "46px",
    marginTop: "12px",
    padding: "0 18px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    border: "1px solid #1e70dc",
    borderRadius: "11px",
    boxShadow:
      "0 8px 18px rgba(33, 118, 229, 0.2)",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  resultMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#078e4a",
    fontSize: "2.6rem",
    fontWeight: 850,
  },

  resultIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "26px",
    height: "26px",
    border: "2px solid currentColor",
    borderRadius: "999px",
  },

  loadMoreWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  loadMoreButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minWidth: "260px",
    minHeight: "46px",
    padding: "0 18px",
    color: "#176fdc",
    background:
      "linear-gradient(135deg, #f3f8ff, #ffffff)",
    border: "1px solid #b9d5f6",
    borderRadius: "11px",
    boxShadow:
      "0 7px 16px rgba(33, 118, 229, 0.1)",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  loadMoreButtonDisabled: {
    opacity: 0.58,
    boxShadow: "none",
    cursor: "not-allowed",
  },
};

export default styles;