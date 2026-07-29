const styles = {
  container: {
    width: "100%",
    boxSizing: "border-box",
    padding: "20px clamp(16px, 2vw, 30px) 28px",
  },

  topSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 18,
    flexWrap: "wrap",
  },

  titleGroup: {
    flex: "1 1 620px",
    minWidth: 0,
  },

  titleHeading: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
  },

  titleIconBox: {
    width: 56,
    height: 56,
    flex: "0 0 46px",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2563EB",
    backgroundColor: "rgba(239, 246, 255, 0.92)",
    border: "1px solid rgba(147, 197, 253, 0.95)",
    boxShadow: "0 8px 18px rgba(37, 99, 235, 0.10)",
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 5,
  },

  title: {
    margin: 0,
    fontSize: "clamp(26px, 2.1vw, 54px)",
    lineHeight: 1.12,
    fontWeight: 900,
    color: "#071B45",
    letterSpacing: "-0.025em",
  },

  subtitle: {
    margin: 0,
    maxWidth: 780,
    fontSize: 26,
    lineHeight: 1.55,
    fontWeight: 600,
    color: "#5E718F",
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "7px 12px",
    borderRadius: 999,
    fontSize: 28,
    lineHeight: 1,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },

  statusChipPending: {
    backgroundColor: "#FFF7E6",
    color: "#C66A00",
    border: "1px solid #FFD28A",
  },

  statusChipApproved: {
    backgroundColor: "#E8FAF0",
    color: "#078842",
    border: "1px solid #9BE4BA",
  },

  statusChipRejected: {
    backgroundColor: "#FFF0F0",
    color: "#E03535",
    border: "1px solid #FFB4B4",
  },

  contentCard: {
    width: "100%",
    boxSizing: "border-box",
    padding: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    border: "1px solid rgba(195, 215, 241, 0.95)",
    boxShadow: "0 14px 34px rgba(34, 82, 145, 0.10)",
    backdropFilter: "blur(10px)",
  },

  infoRow: {
    display: "grid",
    gridTemplateColumns:
      "minmax(300px, 0.8fr) minmax(420px, 1.2fr)",
    gap: 14,
    marginBottom: 14,
  },

  feedbackCard: {
    width: "min(760px, 100%)",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: 20,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    border: "1px solid rgba(195, 215, 241, 0.95)",
    boxShadow: "0 14px 34px rgba(34, 82, 145, 0.10)",
  },

  feedbackIconBox: {
    width: 46,
    height: 46,
    flex: "0 0 46px",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2563EB",
    backgroundColor: "#EFF6FF",
    border: "1px solid #BFDBFE",
  },

  feedbackIconBoxError: {
    color: "#DC2626",
    backgroundColor: "#FFF1F2",
    border: "1px solid #FECDD3",
  },

  feedbackTitle: {
    margin: "0 0 4px",
    fontSize: 22,
    fontWeight: 900,
    color: "#071B45",
  },
};

export default styles;