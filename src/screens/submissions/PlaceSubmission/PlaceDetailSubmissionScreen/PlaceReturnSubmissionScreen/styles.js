const styles = {
  screen: {
    width: "100%",
    minHeight: "100%",

    padding: "22px 30px 34px",

    boxSizing: "border-box",
  },

  pagePanel: {
    width: "100%",

    overflow: "hidden",

    border: "1px solid rgba(95, 140, 194, 0.18)",
    borderRadius: "20px",

    /*
     * Blanco translúcido:
     * sigue leyendo como tarjeta blanca,
     * pero permite ver ligeramente el layout.
     */
    background: "rgba(255, 255, 255, 0.48)",

    boxShadow: `
      0 18px 42px rgba(32, 78, 130, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92)
    `,

    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",

    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    minHeight: "98px",

    padding: "22px 28px",

    borderBottom:
      "1px solid rgba(76, 123, 178, 0.13)",

    background: `
      linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.78) 0%,
        rgba(244, 250, 255, 0.66) 55%,
        rgba(232, 243, 255, 0.58) 100%
      )
    `,

    boxSizing: "border-box",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,

    gap: "16px",
  },

  headerIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "52px",
    height: "52px",

    border: "1px solid rgba(33, 118, 229, 0.14)",
    borderRadius: "16px",

    background: `
      linear-gradient(
        145deg,
        rgba(235, 244, 255, 0.98),
        rgba(220, 236, 255, 0.88)
      )
    `,

    color: "#2176e5",

    boxShadow: `
      0 8px 18px rgba(33, 118, 229, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,
  },

  title: {
    margin: 0,

    color: "#0b2150",

    fontSize: "clamp(1.55rem, 2vw, 4rem)",
    fontWeight: 900,

    lineHeight: 1.08,
    letterSpacing: "-0.025em",
  },

  subtitle: {
    margin: "7px 0 0",

    color: "#5a718d",

    fontSize: "1.8rem",
    fontWeight: 600,

    lineHeight: 1.45,
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 1fr) minmax(290px, 350px)",

    width: "100%",

    gap: "20px",
    padding: "20px",

    borderBottom:
      "1px solid rgba(76, 123, 178, 0.12)",

    background: "rgba(247, 251, 255, 0.32)",

    boxSizing: "border-box",
  },

  generalCommentPanel: {
    width: "100%",

    padding: "18px",

    border: "1px solid rgba(72, 120, 177, 0.18)",
    borderRadius: "17px",

    background: "rgba(255, 255, 255, 0.68)",

    boxShadow: `
      0 10px 24px rgba(37, 81, 132, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.9)
    `,

    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",

    boxSizing: "border-box",
  },

  helperPanel: {
    width: "100%",

    padding: "18px",

    border: "1px solid rgba(72, 120, 177, 0.18)",
    borderRadius: "17px",

    background: "rgba(255, 255, 255, 0.7)",

    boxShadow: `
      0 10px 24px rgba(37, 81, 132, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.9)
    `,

    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",

    boxSizing: "border-box",
  },

  helperHeader: {
    display: "flex",
    alignItems: "center",

    gap: "11px",
  },

  helperIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "40px",
    height: "40px",

    border: "1px solid rgba(33, 118, 229, 0.15)",
    borderRadius: "12px",

    background: "rgba(33, 118, 229, 0.08)",
    color: "#2176e5",
  },

  helperTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "1.8rem",
    fontWeight: 850,
  },

  helperText: {
    margin: "14px 0 12px",

    color: "#314b6d",

    fontSize: "1.2rem",
    fontWeight: 600,

    lineHeight: 1.52,
  },

  helperList: {
    display: "flex",
    flexDirection: "column",

    gap: "8px",

    color: "#233e62",

    fontSize: "1.1rem",
    fontWeight: 650,

    lineHeight: 1.4,
  },

  helperListItem: {
    display: "flex",
    alignItems: "flex-start",

    gap: "8px",
  },

  helperBullet: {
    flexShrink: 0,

    width: "12px",
    height: "12px",

    marginTop: "6px",

    borderRadius: "50%",

    background: "#2176e5",

    boxShadow:
      "0 0 0 4px rgba(33, 118, 229, 0.08)",
  },

  fieldsSection: {
    width: "100%",

    padding: "20px",

    background: "rgba(255, 255, 255, 0.24)",

    boxSizing: "border-box",
  },

  sectionHeader: {
    marginBottom: "16px",
  },

  sectionHeadingRow: {
    display: "flex",
    alignItems: "center",

    gap: "11px",
  },

  sectionIconBox: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "40px",
    height: "40px",

    border: "1px solid rgba(33, 118, 229, 0.14)",
    borderRadius: "12px",

    background: "rgba(33, 118, 229, 0.08)",
    color: "#2176e5",
  },

  sectionTitle: {
    margin: 0,

    color: "#102650",

    fontSize: "2rem",
    fontWeight: 850,
  },

  sectionSubtitle: {
    margin: "5px 0 0 51px",

    color: "#637a96",

    fontSize: "1.4rem",
    fontWeight: 600,
  },

  fieldsContainer: {
    display: "grid",

    /*
     * La estructura sigue siendo una colección
     * de campos; solo pasa de una columna a cuatro.
     */
    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",

    alignItems: "start",

    gap: "14px",

    width: "100%",
  },

 fieldCard: {
  width: "100%",
  minWidth: 0,
  height: "100%",
},

  /*
   * Permiten que algunos contenidos respiren
   * más sin cambiar qué componente se renderiza.
   */
  fieldCardWide: {
    gridColumn: "span 2",
  },

  fieldCardLocation: {
    gridColumn: "span 2",
  },

  actionsArea: {
    display: "flex",
    justifyContent: "flex-end",

    width: "100%",

    padding: "14px 20px",

    borderTop:
      "1px solid rgba(76, 123, 178, 0.12)",

    background: "rgba(255, 255, 255, 0.58)",

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    boxSizing: "border-box",
  },

  loadingContainer: {
    display: "grid",
    placeItems: "center",

    width: "100%",
    minHeight: "260px",

    color: "#526b88",

    fontSize: "0.95rem",
    fontWeight: 700,
  },
};

export default styles;