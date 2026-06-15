const styles = {
  container: {
    padding: "24px",
  },

  topSection: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 24,
  },

  titleGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 900,
    color: "#07142F",
  },

  subtitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 500,
    color: "#64748B",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 13px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 900,
  },

  statusChipPending: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
  },

  statusChipApproved: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },

  statusChipRejected: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },

  contentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    border: "1px solid #E5E7EB",
  },
};

export default styles;