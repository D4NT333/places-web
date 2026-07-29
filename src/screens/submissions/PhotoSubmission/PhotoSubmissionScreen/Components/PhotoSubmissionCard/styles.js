const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border:
      "1px solid rgba(195, 213, 237, 0.98)",
    borderRadius: 18,
    backgroundColor:
      "rgba(255, 255, 255, 0.9)",
    boxShadow:
      "0 14px 30px rgba(30, 72, 126, 0.1)",
    backdropFilter:
      "blur(9px)",
    boxSizing: "border-box",
    transition:
      "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
  },

  cardClickable: {
    cursor: "pointer",
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: 275,
    overflow: "hidden",
    borderBottom:
      "1px solid rgba(195, 213, 237, 0.92)",
    backgroundColor: "#EAF1F9",
  },

  photoCountBadge: {
    position: "absolute",
    top: 13,
    right: 13,
    zIndex: 3,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "7px 11px",
    border:
      "1px solid rgba(183, 204, 231, 0.94)",
    borderRadius: 999,
    backgroundColor:
      "rgba(255, 255, 255, 0.94)",
    color: "#17355F",
    fontSize: 20,
    fontWeight: 900,
    boxShadow:
      "0 6px 16px rgba(10, 35, 70, 0.15)",
    backdropFilter:
      "blur(7px)",
  },

  image: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
  },

  imageGradient: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
    background: `
      linear-gradient(
        180deg,
        rgba(7, 27, 69, 0.04) 45%,
        rgba(7, 27, 69, 0.22) 100%
      )
    `,
  },

  imagePlaceholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 24,
    color: "#6D8099",
    textAlign: "center",
    boxSizing: "border-box",
    background: `
      linear-gradient(
        145deg,
        #F4F8FD,
        #E6EEF8
      )
    `,
  },

  placeholderIconBox: {
    width: 58,
    height: 58,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #C9D8EA",
    borderRadius: 16,
    backgroundColor:
      "rgba(255, 255, 255, 0.72)",
    color: "#7890AC",
  },

  placeholderTitle: {
    color: "#344E70",
    fontSize: 15,
    fontWeight: 900,
  },

  placeholderText: {
    maxWidth: 300,
    color: "#71849C",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.45,
  },

  infoSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    padding: 16,
    boxSizing: "border-box",
  },

  cardHeading: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
  },

  placeInformation: {
    minWidth: 0,
    flex: 1,
  },

  cardEyebrow: {
    display: "block",
    marginBottom: 4,
    color: "#6B7F9B",
    fontSize: 24,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  placeName: {
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#091F49",
    fontSize:38,
    fontWeight: 900,
    lineHeight: 1.2,
  },

  statusBadge: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "7px 11px",
    border: "1px solid",
    borderRadius: 999,
    fontSize: 28,
    fontWeight: 900,
    whiteSpace: "nowrap",
  },

  metadataGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },

  metadataItem: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: 10,
    border:
      "1px solid #D1DEEE",
    borderRadius: 13,
    backgroundColor:
      "rgba(246, 250, 255, 0.88)",
    boxSizing: "border-box",
  },

  userIconBox: {
    width: 58,
    height: 58,
    flex: "0 0 38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #A9E2C4",
    borderRadius: 11,
    backgroundColor: "#E9F9F0",
    color: "#0A9854",
  },

  dateIconBox: {
    width: 58,
    height: 58,
    flex: "0 0 38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid #B7D3FA",
    borderRadius: 11,
    backgroundColor: "#EDF5FF",
    color: "#2475E8",
  },

  metadataText: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  metadataLabel: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#74869E",
    fontSize: 24,
    fontWeight: 850,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  metadataValue: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#18345D",
    fontSize: 26,
    fontWeight: 900,
  },
};

export default styles;