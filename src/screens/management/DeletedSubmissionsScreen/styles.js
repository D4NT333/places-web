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
    color: "#e64040",
    background:
      "linear-gradient(145deg, #fff0f0, #fff9f9)",
    border: "1px solid #ffcaca",
    borderRadius: "14px",
    boxShadow:
      "0 7px 18px rgba(215, 55, 55, 0.12)",
  },

  title: {
    margin: 0,
    color: "#092b5c",
    fontSize: "3.6rem",
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    margin: "5px 0 0",
    color: "#587493",
    fontSize: "2.2rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },

  summarySection: {
    display: "flex",
    alignItems: "stretch",
    gap: "12px",
    flexWrap: "wrap",
  },

  summaryCard: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    minWidth: "285px",
    minHeight: "82px",
    padding: "12px 16px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,252,255,0.98))",
    border: "1px solid #d4e2ef",
    borderRadius: "13px",
    boxShadow:
      "0 8px 20px rgba(31, 74, 121, 0.1)",
  },

  summaryIconBlue: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#2176e5",
    background: "#eaf4ff",
    border: "1px solid #c9def8",
    borderRadius: "12px",
  },

  summaryIconGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    flexShrink: 0,
    color: "#07954e",
    background: "#eafaf2",
    border: "1px solid #c1ead4",
    borderRadius: "12px",
  },

  summaryContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  summaryLabel: {
    color: "#536e8c",
    fontSize: "2.4rem",
    fontWeight: 800,
  },

  summaryValueBlue: {
    color: "#176fdc",
    fontSize: "2.6rem",
    fontWeight: 950,
  },

  summaryValueGreen: {
    color: "#078e4a",
    fontSize: "2.6rem",
    fontWeight: 950,
  },

  resultMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#078e4a",
    fontSize: "1.8rem",
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
  },

  loadMoreButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "250px",
    minHeight: "46px",
    padding: "0 18px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    border: "1px solid #1e70dc",
    borderRadius: "11px",
    boxShadow:
      "0 8px 18px rgba(33, 118, 229, 0.2)",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 900,
    cursor: "pointer",
  },

  loadMoreButtonDisabled: {
    opacity: 0.58,
    cursor: "not-allowed",
    boxShadow: "none",
  },
};

export default styles;