const columns = {
  place: "34%",
  date: "17%",
  user: "20%",
  photo: "14%",
  status: "15%",
};

const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    boxSizing: "border-box",
  },

  topBar: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "28px",
    marginBottom: "24px",
  },

  headerBlock: {
    minWidth: 0,
  },

  title: {
    margin: 0,
    color: "#0b2150",
    fontSize: "clamp(2rem, 2.2vw, 4.45rem)",
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    margin: "9px 0 0",
    color: "#536a87",
    fontSize: "2rem",
    fontWeight: 500,
  },

  loadedInfoWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "18px",
  },

  loadedInfoCard: {
    display: "flex",
    alignItems: "center",
    minWidth: "190px",
    minHeight: "72px",
    gap: "13px",
    padding: "10px 17px",

    border: "1px solid rgba(74, 117, 168, 0.13)",
    borderRadius: "15px",

    background: "rgba(255, 255, 255, 0.91)",

    boxShadow: `
      0 10px 23px rgba(40, 83, 132, 0.10),
      inset 0 1px 0 rgba(255, 255, 255, 0.9)
    `,

    boxSizing: "border-box",
  },

  loadedInfoIcon: {
    display: "grid",
    placeItems: "center",
    flexShrink: 0,

    width: "66px",
    height: "66px",

    borderRadius: "14px",
  },

  loadedInfoIconBlue: {
    color: "#2176e5",
    background: "rgba(33, 118, 229, 0.09)",
    border: "1px solid rgba(33, 118, 229, 0.15)",
  },

  loadedInfoIconGreen: {
    color: "#12a85c",
    background: "rgba(18, 168, 92, 0.09)",
    border: "1px solid rgba(18, 168, 92, 0.16)",
  },

  loadedInfoContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  loadedInfoLabel: {
    color: "#405776",
    fontSize: "2rem",
    fontWeight: 600,
  },

  loadedInfoValue: {
    fontSize: "2.2rem",
    fontWeight: 800,
    lineHeight: 1,
  },

  filtersWrapper: {
    position: "relative",

    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(108px, 1fr))",
    alignItems: "stretch",

    flexShrink: 0,
    minWidth: "690px",

    padding: "7px",

    border: "1px solid rgba(72, 114, 165, 0.13)",
    borderRadius: "18px",

    background: "rgba(255, 255, 255, 0.92)",

    boxShadow: `
      0 12px 25px rgba(39, 82, 132, 0.12)
    `,

    overflow: "hidden",
    boxSizing: "border-box",
  },

  filterSlider: {
    position: "absolute",
    zIndex: 0,

    top: "7px",
    bottom: "7px",
    left: "7px",

    width: "calc((100% - 14px) / 6)",

    borderRadius: "12px",

    background: `
      linear-gradient(
        135deg,
        #2f8af7 0%,
        #126ce7 100%
      )
    `,

    boxShadow: `
      0 8px 18px rgba(33, 118, 229, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.25)
    `,

    transition: `
      transform 330ms cubic-bezier(0.22, 1, 0.36, 1)
    `,

    pointerEvents: "none",
  },

  filterChip: {
    position: "relative",
    zIndex: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "45px",
    gap: "8px",

    padding: "0 11px",

    border: "none",
    borderRadius: "12px",

    background: "transparent",

    color: "#15284c",
    fontSize: "2rem",
    fontWeight: 650,
    whiteSpace: "nowrap",

    cursor: "pointer",

    transition: `
      color 220ms ease,
      transform 220ms ease
    `,
  },

  filterChipActive: {
    color: "#ffffff",
    transform: "translateY(-1px)",
  },

  filterIcon: {
    flexShrink: 0,

    transition: `
      color 220ms ease,
      transform 260ms cubic-bezier(0.22, 1, 0.36, 1)
    `,
  },

  filterChipCount: {
    display: "grid",
    placeItems: "center",

    minWidth: "19px",
    height: "19px",

    padding: "0 5px",

    borderRadius: "999px",

    background: "#edf3fa",
    color: "#34506e",

    fontSize: "1.65rem",
    fontWeight: 800,
  },

  filterChipCountActive: {
    background: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
  },

  tableCard: {
    overflow: "hidden",

    border: "5px solid rgba(255, 255, 255, 0.82)",
    borderRadius: "19px",

    background: "rgba(255, 255, 255, 0.91)",

    boxShadow: `
      0 17px 35px rgba(38, 82, 132, 0.13),
      inset 0 1px 0 rgba(255, 255, 255, 0.9)
    `,

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },

  tableHeader: {
    display: "flex",
    alignItems: "center",

    minHeight: "56px",

    padding: "0 24px",

    background: `
      linear-gradient(
        180deg,
        rgba(247, 251, 255, 0.98),
        rgba(229, 240, 255, 0.9)
      )
    `,

    borderBottom: "1px solid rgba(77, 119, 169, 0.13)",

    color: "#102650",
    fontSize: "2.3rem",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.03em",

    boxSizing: "border-box",
  },

  headerPlace: {
    display: "flex",
    alignItems: "center",

    width: columns.place,

    /*
     * Alinea el texto "Lugar" con el nombre,
     * dejando el espacio visual de la imagen.
     */
    paddingLeft: "79px",

    boxSizing: "border-box",
  },

  headerDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.date,

    textAlign: "center",
  },

  headerUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.user,

    textAlign: "center",
  },

  headerUserPhoto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.photo,

    textAlign: "center",
  },

  headerStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.status,

    textAlign: "center",
  },

  rowsWrapper: {
    width: "100%",
  },

  emptyState: {
    display: "grid",
    placeItems: "center",

    minHeight: "130px",

    padding: "28px",

    color: "#637993",
    fontSize: "1.9rem",
    fontWeight: 600,

    boxSizing: "border-box",
  },

  loadMoreTrap: {
    width: "100%",
    height: "1px",
  },

  paginationHint: {
    padding: "22px",

    color: "#4d6580",
    fontSize: "1.84rem",
    fontWeight: 600,
    textAlign: "center",
  },

  paginationCompleted: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "9px",
    marginTop: "25px",

    color: "#07893f",
    fontSize: "2rem",
    fontWeight: 750,
  },
};

export default styles;