const styles = {
  screen: {
    width: "100%",
    minHeight: "calc(100vh - 110px)",
    boxSizing: "border-box",
    padding: "26px 28px 34px",
  },

  headerSection: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "22px",
    marginBottom: "18px",
  },

  headingBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  title: {
    margin: 0,
    color: "#092554",
    fontSize: "clamp(2rem, 3vw, 3rem)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: 1,
  },

  subtitle: {
    margin: 0,
    color: "#557093",
    fontSize: "1rem",
    fontWeight: 500,
  },

  summarySection: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",
  },

  resultMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    marginTop: "19px",
    color: "#079341",
    fontSize: "1rem",
    fontWeight: 800,
  },

  resultIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    border: "3px solid #079341",
    borderRadius: "999px",
    fontSize: "0.9rem",
    lineHeight: 1,
  },
};

export default styles;