const styles = {
  card: {
    width: "100%",
    height: "100%",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",

    border: "1px solid #d9e0e8",
    borderRadius: "12px",

    backgroundColor: "#ffffff",

    boxShadow:
      "0 3px 12px rgba(15, 23, 42, 0.05)",
  },

  cardHeader: {
    flex: "0 0 58px",

    height: "58px",
    minHeight: "58px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",

    padding: "8px 14px",
    boxSizing: "border-box",

    borderBottom: "1px solid #e5eaf0",
  },

  title: {
    margin: 0,

    color: "#111827",

    fontSize: "20px",
    fontWeight: "800",
  },

  subtitle: {
    margin: "2px 0 0",

    color: "#64748b",

    fontSize: "14px",
    lineHeight: 1.3,
  },

  photoCount: {
    flexShrink: 0,

    padding: "5px 9px",

    border: "1px solid #dbe3ec",
    borderRadius: "999px",

    backgroundColor: "#f8fafc",
    color: "#475569",

    fontSize: "14px",
    fontWeight: "800",
  },

  viewer: {
    position: "relative",

    width: "100%",

    /*
     * Ocupa únicamente el espacio que queda
     * después del header y las miniaturas.
     */
    flex: 1,
    minWidth: 0,
    minHeight: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",

    backgroundColor: "#e9eef4",
  },

  mainImageButton: {
    width: "100%",
    height: "100%",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

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

    /*
     * cover hace que la fotografía llene
     * completamente el contenedor.
     */
    objectFit: "cover",
    objectPosition: "center",
  },

  navigationButton: {
    position: "absolute",
    top: "50%",
    zIndex: 2,

    width: "36px",
    height: "36px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,

    border: "1px solid rgba(255, 255, 255, 0.55)",
    borderRadius: "50%",

    backgroundColor: "rgba(30, 41, 59, 0.78)",
    color: "#ffffff",

    fontSize: "1.5rem",
    lineHeight: 1,

    cursor: "pointer",

    transform: "translateY(-50%)",

    boxShadow:
      "0 3px 10px rgba(15, 23, 42, 0.18)",
  },

  previousButton: {
    left: "13px",
  },

  nextButton: {
    right: "13px",
  },

  counter: {
    position: "absolute",
    right: "13px",
    bottom: "10px",

    padding: "5px 8px",

    borderRadius: "999px",

    backgroundColor: "rgba(30, 41, 59, 0.82)",
    color: "#ffffff",

    fontSize: "10px",
    fontWeight: "800",
  },

  expandHint: {
    position: "absolute",
    left: "13px",
    bottom: "10px",

    padding: "5px 8px",

    borderRadius: "999px",

    backgroundColor: "rgba(30, 41, 59, 0.78)",
    color: "#ffffff",

    fontSize: "16px",
    fontWeight: "700",
  },

thumbnailSection: {
  flex: "0 0 118px",

  height: "118px",
  minHeight: "118px",

  padding: "8px 14px 10px",
  boxSizing: "border-box",

  borderTop: "1px solid #e5eaf0",

  backgroundColor: "#ffffff",
},

thumbnailLabel: {
  margin: "0 0 7px",

  color: "#475569",

  fontSize: "18px",
  fontWeight: "800",
},

thumbnailList: {
  width: "100%",
  height: "80px",

  display: "flex",
  alignItems: "center",
  gap: "10px",

  overflowX: "auto",
  overflowY: "hidden",

  paddingBottom: "2px",
},

thumbnailButton: {
  position: "relative",

  flex: "0 0 140px",
  flexBasis: "140px",

  width: "140px",
  minWidth: "140px",

  height: "78px",
  minHeight: "78px",

  overflow: "hidden",

  padding: 0,

  border: "2px solid transparent",
  borderRadius: "9px",

  backgroundColor: "#f1f5f9",

  cursor: "pointer",
},

  activeThumbnailButton: {
    borderColor: "#2563eb",

    boxShadow:
      "0 0 0 2px rgba(37, 99, 235, 0.12)",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",

    display: "block",

    objectFit: "cover",
  },

  thumbnailNumber: {
    position: "absolute",
    right: "3px",
    bottom: "3px",

    minWidth: "15px",
    height: "15px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "0 3px",

    borderRadius: "999px",

    backgroundColor: "rgba(17, 24, 39, 0.78)",
    color: "#ffffff",

    fontSize: "8px",
    fontWeight: "800",
  },

  activeThumbnailNumber: {
    backgroundColor: "#2563eb",
  },

  emptyState: {
    width: "100%",

    flex: 1,
    minHeight: 0,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: "2rem",
    boxSizing: "border-box",

    textAlign: "center",

    backgroundColor: "#f8fafc",
  },

  emptyIcon: {
    width: "44px",
    height: "44px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: "0.75rem",

    borderRadius: "50%",

    backgroundColor: "#e5e7eb",
    color: "#6b7280",

    fontSize: "1.3rem",
  },

  emptyTitle: {
    margin: 0,

    color: "#374151",

    fontSize: "0.95rem",
    fontWeight: "800",
  },

  emptyText: {
    maxWidth: "400px",

    margin: "0.35rem 0 0",

    color: "#6b7280",

    fontSize: "0.8rem",
  },

  lightbox: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "2rem",
  },

  lightboxBackdrop: {
    position: "absolute",
    inset: 0,

    width: "100%",
    height: "100%",

    padding: 0,
    border: "none",

    backgroundColor: "rgba(3, 7, 18, 0.9)",

    cursor: "default",
  },

  lightboxContent: {
    position: "relative",
    zIndex: 1,

    width: "100%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  lightboxImage: {
    maxWidth: "92%",
    maxHeight: "90%",

    objectFit: "contain",

    borderRadius: "8px",
  },

  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 3,

    width: "42px",
    height: "42px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,

    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "50%",

    backgroundColor: "rgba(17, 24, 39, 0.8)",
    color: "#ffffff",

    fontSize: "1.7rem",

    cursor: "pointer",
  },

  lightboxNavigation: {
    position: "absolute",
    top: "50%",
    zIndex: 3,

    width: "48px",
    height: "48px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,

    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "50%",

    backgroundColor: "rgba(17, 24, 39, 0.82)",
    color: "#ffffff",

    fontSize: "2rem",

    cursor: "pointer",

    transform: "translateY(-50%)",
  },

  lightboxPrevious: {
    left: 0,
  },

  lightboxNext: {
    right: 0,
  },

  lightboxCounter: {
    position: "absolute",
    bottom: 0,
    left: "50%",

    padding: "0.5rem 0.8rem",

    borderRadius: "999px",

    backgroundColor: "rgba(17, 24, 39, 0.8)",
    color: "#ffffff",

    fontSize: "0.82rem",
    fontWeight: "700",

    transform: "translateX(-50%)",
  },
};

export default styles;