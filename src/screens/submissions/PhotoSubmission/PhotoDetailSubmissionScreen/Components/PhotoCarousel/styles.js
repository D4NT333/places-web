const styles = {
  card: {
    width: "100%",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid rgba(195, 213, 237, 0.98)",
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 14px 30px rgba(30, 72, 126, 0.1)",
    backdropFilter: "blur(9px)",
  },

  cardHeader: {
    minHeight: 76,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: "12px 16px",
    borderBottom: "1px solid #D9E4F1",
    boxSizing: "border-box",
  },

  headerHeading: {
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: 11,
  },

  headerIconBox: {
    width: 54,
    height: 54,
    flex: "0 0 44px",
    display: "grid",
    placeItems: "center",
    border: "1px solid #B8D3FA",
    borderRadius: 13,
    backgroundColor: "#EDF5FF",
    color: "#2475E8",
  },

  title: {
    margin: 0,
    color: "#071B45",
    fontSize: 40,
    fontWeight: 900,
  },

  subtitle: {
    margin: "3px 0 0",
    color: "#647A96",
    fontSize: 30,
    fontWeight: 600,
  },

  photoCount: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 11px",
    border: "1px solid #BDD4F2",
    borderRadius: 999,
    backgroundColor: "#F1F7FF",
    color: "#183B6B",
    fontSize: 28,
    fontWeight: 900,
  },

  viewer: {
    position: "relative",
    width: "100%",
    height: "clamp(420px, 55vh, 650px)",
    overflow: "hidden",
    backgroundColor: "#DCE7F3",
  },

  mainImageButton: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    cursor: "zoom-in",
    overflow: "hidden",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `
      linear-gradient(
        180deg,
        rgba(7, 27, 69, 0.02) 55%,
        rgba(7, 27, 69, 0.3) 100%
      )
    `,
  },

  navigationButton: {
    position: "absolute",
    top: "50%",
    zIndex: 3,
    width: 46,
    height: 46,
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.65)",
    borderRadius: "50%",
    backgroundColor: "rgba(7, 27, 69, 0.72)",
    color: "#FFFFFF",
    cursor: "pointer",
    transform: "translateY(-50%)",
    boxShadow: "0 8px 18px rgba(7, 27, 69, 0.24)",
    backdropFilter: "blur(6px)",
  },

  previousButton: {
    left: 15,
  },

  nextButton: {
    right: 15,
  },

  counter: {
    position: "absolute",
    right: 14,
    bottom: 13,
    zIndex: 3,
    padding: "7px 11px",
    borderRadius: 999,
    backgroundColor: "rgba(7, 27, 69, 0.8)",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 900,
    backdropFilter: "blur(6px)",
  },

  expandHint: {
    position: "absolute",
    left: 14,
    bottom: 13,
    zIndex: 3,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 11px",
    borderRadius: 999,
    backgroundColor: "rgba(7, 27, 69, 0.8)",
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: 800,
    backdropFilter: "blur(6px)",
  },

  thumbnailSection: {
    padding: "12px 16px 14px",
    borderTop: "1px solid #D9E4F1",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
  },

  thumbnailLabel: {
    margin: "0 0 9px",
    color: "#263E61",
    fontSize: 26,
    fontWeight: 900,
  },

  thumbnailList: {
    display: "flex",
    gap: 9,
    overflowX: "auto",
  },

  thumbnailButton: {
    position: "relative",
    width: 94,
    height: 66,
    flex: "0 0 94px",
    padding: 0,
    overflow: "hidden",
    border: "2px solid transparent",
    borderRadius: 11,
    backgroundColor: "#E6EEF7",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  activeThumbnailButton: {
    borderColor: "#2475E8",
    boxShadow: "0 0 0 3px rgba(36, 117, 232, 0.12)",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },

  thumbnailNumber: {
    position: "absolute",
    right: 5,
    bottom: 5,
    minWidth: 20,
    height: 20,
    display: "grid",
    placeItems: "center",
    borderRadius: 999,
    backgroundColor: "rgba(7, 27, 69, 0.75)",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 900,
  },

  activeThumbnailNumber: {
    backgroundColor: "#2475E8",
  },

  emptyState: {
    minHeight: 430,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 30,
    textAlign: "center",
  },

  emptyIcon: {
    width: 64,
    height: 64,
    display: "grid",
    placeItems: "center",
    border: "1px solid #C9D8EA",
    borderRadius: 17,
    backgroundColor: "#F1F6FC",
    color: "#7189A7",
  },

  emptyTitle: {
    margin: 0,
    color: "#17365F",
    fontSize: 28,
    fontWeight: 900,
  },

  emptyText: {
    margin: 0,
    color: "#71849C",
    fontSize: 23,
    fontWeight: 600,
  },

  lightbox: {
    position: "fixed",
    inset: 0,
    zIndex: 1500,
    display: "grid",
    placeItems: "center",
    padding: 26,
  },

  lightboxBackdrop: {
    position: "absolute",
    inset: 0,
    border: "none",
    backgroundColor: "rgba(3, 15, 35, 0.82)",
    backdropFilter: "blur(10px)",
    cursor: "zoom-out",
  },

  lightboxContent: {
    position: "relative",
    zIndex: 2,
    width: "min(1280px, 96vw)",
    height: "min(840px, 90vh)",
    display: "grid",
    placeItems: "center",
  },

  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: 15,
    boxShadow: "0 30px 80px rgba(0, 0, 0, 0.45)",
  },

  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 4,
    width: 44,
    height: 44,
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    backgroundColor: "rgba(7, 27, 69, 0.82)",
    color: "#FFFFFF",
    cursor: "pointer",
  },

  lightboxNavigation: {
    position: "absolute",
    top: "50%",
    zIndex: 4,
    width: 52,
    height: 52,
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    backgroundColor: "rgba(7, 27, 69, 0.78)",
    color: "#FFFFFF",
    cursor: "pointer",
    transform: "translateY(-50%)",
  },

  lightboxPrevious: {
    left: 16,
  },

  lightboxNext: {
    right: 16,
  },

  lightboxCounter: {
    position: "absolute",
    bottom: 14,
    left: "50%",
    zIndex: 4,
    padding: "8px 13px",
    borderRadius: 999,
    backgroundColor: "rgba(7, 27, 69, 0.82)",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 900,
    transform: "translateX(-50%)",
  },
};

export default styles;