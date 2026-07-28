const styles = {
  item: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,
    height: "100%",

    gap: "10px",
    padding: "16px",

    border: "1px solid rgba(72, 120, 177, 0.17)",
    borderRadius: "16px",

    background: "rgba(255, 255, 255, 0.72)",

    boxShadow: `
      0 10px 22px rgba(37, 81, 132, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.92)
    `,

    backdropFilter: "blur(9px)",
    WebkitBackdropFilter: "blur(9px)",

    boxSizing: "border-box",

    transition: `
      transform 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      background 180ms ease
    `,
  },

  /*
   * Antes usaban fit-content.
   * Eso ocasionaba las cajas pequeñas y dispersas.
   */
  itemCompact: {
    width: "100%",
    maxWidth: "none",
  },

  itemWide: {
    width: "100%",
    maxWidth: "none",
  },

  label: {
    color: "#102650",

    fontSize: "2rem",
    fontWeight: 850,

    lineHeight: 1.25,
  },

  valueBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    width: "100%",
    minWidth: 0,
    minHeight: "52px",

    padding: "11px 14px",

    border: "1px solid rgba(33, 118, 229, 0.18)",
    borderRadius: "12px",

    background: `
      linear-gradient(
        145deg,
        rgba(249, 252, 255, 0.98),
        rgba(233, 243, 255, 0.9)
      )
    `,

    color: "#102650",

    fontSize: "1.4rem",
    fontWeight: 750,

    lineHeight: 1.45,

    overflowWrap: "anywhere",
    whiteSpace: "normal",

    boxShadow: `
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,

    boxSizing: "border-box",

    transition: `
      border-color 180ms ease,
      box-shadow 180ms ease,
      background 180ms ease,
      transform 180ms ease
    `,
  },

  valueBoxCompact: {
    width: "100%",
    minWidth: 0,
    maxWidth: "none",
  },

  valueBoxWide: {
    width: "100%",
    minWidth: 0,
    maxWidth: "none",

    justifyContent: "flex-start",
  },

  /*
   * Estado seleccionado para corrección.
   * Verde para conservar el lenguaje de campos corregibles.
   */
  valueBoxSelected: {
    borderColor: "rgba(18, 168, 92, 0.72)",

    background: `
      linear-gradient(
        145deg,
        rgba(240, 255, 247, 0.98),
        rgba(221, 250, 234, 0.94)
      )
    `,

    color: "#087944",

    boxShadow: `
      0 0 0 3px rgba(18, 168, 92, 0.11),
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,
  },

  tagsWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",

    width: "100%",

    gap: "8px",
  },

  miniPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "30px",

    padding: "5px 11px",

    border: "1px solid rgba(33, 118, 229, 0.13)",
    borderRadius: "999px",

    background: "rgba(232, 242, 255, 0.92)",

    color: "#194b88",

    fontFamily: "inherit",
    fontSize: "1.75rem",
    fontWeight: 800,

    boxSizing: "border-box",

    transition: `
      border-color 180ms ease,
      background 180ms ease,
      color 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },

  commentWrapper: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    maxWidth: "none",

    gap: "7px",
    marginTop: "2px",

    padding: "13px",

    border: "1px solid rgba(18, 168, 92, 0.15)",
    borderRadius: "12px",

    background: "rgba(237, 253, 244, 0.58)",

    boxSizing: "border-box",
  },

  commentLabel: {
    color: "#174c38",

    fontSize: "1.2rem",
    fontWeight: 800,
  },

  commentInput: {
    width: "100%",
    minHeight: "76px",

    padding: "11px 13px",

    border: "1px solid rgba(18, 168, 92, 0.2)",
    borderRadius: "10px",

    background: "rgba(255, 255, 255, 0.86)",

    color: "#183b31",

    fontFamily: "inherit",
    fontSize: "1.4rem",
    fontWeight: 550,

    lineHeight: 1.45,

    outline: "none",
    resize: "vertical",

    overflow: "auto",

    boxSizing: "border-box",
  },

  commentFooter: {
    alignSelf: "flex-end",

    color: "#58766b",

    fontSize: "1.2rem",
    fontWeight: 650,
  },

  photosGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(125px, 1fr))",

    width: "100%",

    gap: "11px",
  },

  emptyValue: {
    color: "#71869e",

    fontSize: "1.82rem",
    fontWeight: 650,
  },

  photoButton: {
    position: "relative",

    width: "100%",
    height: "105px",

    padding: 0,

    overflow: "hidden",

    border: "2px solid transparent",
    borderRadius: "12px",

    background: "#edf4fb",

    boxShadow: "0 6px 14px rgba(30, 69, 113, 0.1)",

    boxSizing: "border-box",

    transition: `
      border-color 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease,
      opacity 180ms ease
    `,
  },

  /*
   * Rojo porque esta foto se está marcando
   * como incorrecta.
   */
  photoButtonSelected: {
    borderColor: "#ef4444",

    boxShadow: `
      0 0 0 3px rgba(239, 68, 68, 0.12),
      0 8px 18px rgba(114, 34, 34, 0.14)
    `,
  },

  photoThumbnail: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  photoBadge: {
    position: "absolute",

    left: "7px",
    bottom: "7px",

    padding: "4px 8px",

    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "999px",

    background: "rgba(7, 31, 60, 0.82)",

    color: "#ffffff",

    fontSize: "1rem",
    fontWeight: 800,

    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  },

  photoCommentsWrapper: {
    display: "flex",
    flexDirection: "column",

    width: "100%",

    gap: "11px",
    marginTop: "2px",
  },

  photoCommentItem: {
    width: "100%",

    padding: "13px",

    border: "1px solid rgba(239, 68, 68, 0.14)",
    borderRadius: "12px",

    background: "rgba(255, 242, 242, 0.66)",

    boxSizing: "border-box",
  },
  locationMap: {
  width: "100%",
  height: "270px",

  overflow: "hidden",

  border: "1px solid rgba(33, 118, 229, 0.16)",
  borderRadius: "12px",

  background: "#edf4fb",

  boxShadow: `
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 7px 16px rgba(35, 76, 122, 0.08)
  `,

  pointerEvents: "none",

  boxSizing: "border-box",
},
fieldHeader: {
  display: "flex",
  alignItems: "center",

  width: "100%",
  minWidth: 0,

  gap: "8px",
},

fieldIconBox: {
  display: "grid",
  placeItems: "center",

  flexShrink: 0,

  width: "38px",
  height: "38px",

  borderRadius: "9px",

  boxSizing: "border-box",
},

fieldIconBlue: {
  border: "1px solid rgba(33, 118, 229, 0.15)",
  background: "rgba(33, 118, 229, 0.08)",
  color: "#2176e5",
},

fieldIconGreen: {
  border: "1px solid rgba(18, 168, 92, 0.15)",
  background: "rgba(18, 168, 92, 0.08)",
  color: "#0a9b55",
},

fieldIconOrange: {
  border: "1px solid rgba(245, 158, 11, 0.18)",
  background: "rgba(245, 158, 11, 0.09)",
  color: "#e48600",
},

fieldIconViolet: {
  border: "1px solid rgba(118, 87, 244, 0.17)",
  background: "rgba(118, 87, 244, 0.08)",
  color: "#7657f4",
},
labelRow: {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minWidth: 0,
},

fieldIconBox: {
  display: "grid",
  placeItems: "center",
  flexShrink: 0,

  width: "30x",
  height: "30px",

  borderRadius: "8px",
},

iconBlue: {
  color: "#2176e5",
  background: "rgba(33, 118, 229, 0.09)",
  border: "1px solid rgba(33, 118, 229, 0.15)",
},

iconGreen: {
  color: "#0a9b55",
  background: "rgba(18, 168, 92, 0.09)",
  border: "1px solid rgba(18, 168, 92, 0.15)",
},

iconOrange: {
  color: "#e48600",
  background: "rgba(245, 158, 11, 0.1)",
  border: "1px solid rgba(245, 158, 11, 0.18)",
},

iconViolet: {
  color: "#7657f4",
  background: "rgba(118, 87, 244, 0.09)",
  border: "1px solid rgba(118, 87, 244, 0.17)",
},

iconRed: {
  color: "#e23b3b",
  background: "rgba(239, 68, 68, 0.08)",
  border: "1px solid rgba(239, 68, 68, 0.17)",
},

};

export default styles;