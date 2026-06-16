const styles = {
  screen: {
    width: "100%",
    minWidth: 0,

    display: "flex",
    flexDirection: "column",
    gap: "10px",

    padding: "8px 36px 14px",
    boxSizing: "border-box",

    overflow: "hidden",
  },

  contentArea: {
    width: "100%",

    /*
     * Controla el alto completo de:
     * - Carrusel
     * - Información + acciones
     */
    height: "clamp(960px, 61dvh, 540px)",

    minWidth: 0,
    minHeight: 0,

    display: "grid",

    /*
     * Controla el ancho del panel derecho.
     */
    gridTemplateColumns:
      "minmax(0, 1fr) clamp(590px, 28vw, 500px)",

    alignItems: "stretch",
    gap: "16px",

    boxSizing: "border-box",
    overflow: "hidden",
  },

  carouselColumn: {
    width: "100%",
    height: "100%",

    minWidth: 0,
    minHeight: 0,

    overflow: "hidden",
  },

  sideColumn: {
    width: "100%",
    height: "100%",

    minWidth: 0,
    minHeight: 0,

    display: "flex",
    flexDirection: "column",
    gap: "10px",

    overflow: "hidden",
  },

  centerState: {
    width: "100%",
    height: "100%",

    minHeight: 0,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: "2rem",
    boxSizing: "border-box",

    border: "1px solid #d9e0e8",
    borderRadius: "12px",

    backgroundColor: "#ffffff",

    textAlign: "center",
  },

  loader: {
    width: "36px",
    height: "36px",

    marginBottom: "1rem",

    border: "4px solid #e5e7eb",
    borderTopColor: "#2563eb",
    borderRadius: "50%",

    animation: "spin 0.8s linear infinite",
  },

  errorIcon: {
    width: "44px",
    height: "44px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: "0.9rem",

    borderRadius: "50%",

    backgroundColor: "#fee2e2",
    color: "#b91c1c",

    fontSize: "1.3rem",
    fontWeight: "800",
  },

  stateTitle: {
    margin: 0,

    color: "#111827",

    fontSize: "1.05rem",
    fontWeight: "800",
  },

  stateText: {
    maxWidth: "470px",

    margin: "0.45rem 0 1.1rem",

    color: "#64748b",

    fontSize: "0.9rem",
    lineHeight: 1.5,
  },

  errorActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.7rem",

    marginTop: "1rem",
  },

  warningMessage: {
    width: "100%",

    padding: "0.7rem 0.9rem",
    boxSizing: "border-box",

    border: "1px solid #fde68a",
    borderRadius: "9px",

    backgroundColor: "#fffbeb",
    color: "#92400e",

    fontSize: "0.82rem",
  },

  primaryButton: {
    minWidth: "120px",
    height: "38px",

    padding: "0 1rem",

    border: "none",
    borderRadius: "999px",

    backgroundColor: "#16a34a",
    color: "#ffffff",

    fontFamily: "inherit",
    fontSize: "0.8rem",
    fontWeight: "800",

    cursor: "pointer",
  },

  secondaryButton: {
    minWidth: "120px",
    height: "38px",

    padding: "0 1rem",

    border: "1px solid #0f172a",
    borderRadius: "999px",

    backgroundColor: "#ffffff",
    color: "#0f172a",

    fontFamily: "inherit",
    fontSize: "0.8rem",
    fontWeight: "800",

    cursor: "pointer",
  },

backButtonWrapper: {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  paddingTop: "2px",
  boxSizing: "border-box",
},

backButton: {
  minWidth: "112px",
  height: "36px",

  padding: "0 18px",

  border: "1px solid #111827",
  borderRadius: "999px",

  backgroundColor: "#ffffff",
  color: "#111827",

  fontFamily: "inherit",
  fontSize: "12px",
  fontWeight: "800",

  cursor: "pointer",

  boxShadow:
    "0 2px 6px rgba(15, 23, 42, 0.06)",
},
};

export default styles;