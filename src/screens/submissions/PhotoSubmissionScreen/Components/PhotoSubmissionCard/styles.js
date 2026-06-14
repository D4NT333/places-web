const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 14,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    boxShadow: "0 6px 18px rgba(15, 23, 42, 0.05)",
    transition:
      "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
  },

  cardClickable: {
    cursor: "pointer",
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: 190,
    overflow: "hidden",
    borderBottom: "1px solid #E5E7EB",
    backgroundColor: "#F3F4F6",
  },

  photoCountBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 9px",
    border: "1px solid rgba(203, 213, 225, 0.9)",
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    color: "#334155",
    fontSize: 12,
    fontWeight: 800,
    boxShadow: "0 3px 10px rgba(15, 23, 42, 0.08)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  imagePlaceholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    color: "#94A3B8",
    fontSize: 13,
    fontWeight: 600,
  },

  placeholderIcon: {
    fontSize: 28,
    lineHeight: 1,
    color: "#CBD5E1",
  },

  infoSection: {
    minHeight: 105,
    padding: "14px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 16,
    boxSizing: "border-box",
  },

  mainInformation: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
    minWidth: 0,
  },

  placeName: {
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#111827",
    fontSize: 15,
    fontWeight: 800,
  },

  userText: {
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#64748B",
    fontSize: 13,
    fontWeight: 500,
  },

  userLabel: {
    color: "#475569",
    fontWeight: 700,
  },

  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  createdAt: {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#64748B",
    fontSize: 12,
    fontWeight: 600,
  },

  statusBadge: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    border: "1px solid",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 800,
  },
};

export default styles;