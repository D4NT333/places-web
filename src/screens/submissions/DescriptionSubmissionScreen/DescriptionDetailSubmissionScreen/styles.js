const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },

  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    flexWrap: "wrap",
  },

  titleGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 0,
  },

  breadcrumb: {
    fontSize: 13,
    fontWeight: 700,
    color: "#64748B",
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 900,
    color: "#0F172A",
    letterSpacing: "-0.04em",
  },

  statusChip: {
    padding: "7px 13px",
    borderRadius: 999,
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    fontSize: 12,
    fontWeight: 900,
  },

  subtitle: {
    margin: 0,
    maxWidth: 720,
    fontSize: 14,
    lineHeight: 1.5,
    color: "#64748B",
  },

  contentCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 22,
    padding: 24,
    boxShadow: "0 18px 38px rgba(15, 23, 42, 0.07)",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
};

export default styles;