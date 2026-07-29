const columns = {
  place: "34%",
  date: "18%",
  preview: "33%",
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

    width: "100%",

    gap: "28px",
    marginBottom: "24px",
  },

  headerBlock: {
    minWidth: 0,
  },

  title: {
    margin: 0,

    color: "#0b2150",

    fontSize:
      "clamp(3rem, 2.2vw, 2.45rem)",
    fontWeight: 900,

    lineHeight: 1.08,
    letterSpacing: "-0.035em",
  },

  subtitle: {
    margin: "9px 0 0",

    color: "#536a87",

    fontSize: "1.6rem",
    fontWeight: 550,
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

    border:
      "1px solid rgba(74, 117, 168, 0.13)",
    borderRadius: "15px",

    background:
      "rgba(255, 255, 255, 0.91)",

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

    width: "46px",
    height: "46px",

    borderRadius: "14px",
  },

  loadedInfoIconBlue: {
    color: "#2176e5",

    background:
      "rgba(33, 118, 229, 0.09)",

    border:
      "1px solid rgba(33, 118, 229, 0.15)",
  },

  loadedInfoIconGreen: {
    color: "#12a85c",

    background:
      "rgba(18, 168, 92, 0.09)",

    border:
      "1px solid rgba(18, 168, 92, 0.16)",
  },

  loadedInfoIconViolet: {
    color: "#7657f4",

    background:
      "rgba(118, 87, 244, 0.09)",

    border:
      "1px solid rgba(118, 87, 244, 0.16)",
  },

  loadedInfoContent: {
    display: "flex",
    flexDirection: "column",

    gap: "3px",
  },

  loadedInfoLabel: {
    color: "#405776",

    fontSize: "1.6rem",
    fontWeight: 650,
  },

  loadedInfoValue: {
    fontSize: "2rem",
    fontWeight: 900,

    lineHeight: 1,
  },

  filtersWrapper: {
    position: "relative",

    display: "grid",
    gridTemplateColumns:
      "repeat(4, minmax(116px, 1fr))",

    alignItems: "stretch",

    flexShrink: 0,

    minWidth: "510px",

    padding: "7px",

    border:
      "1px solid rgba(72, 114, 165, 0.13)",
    borderRadius: "18px",

    background:
      "rgba(255, 255, 255, 0.92)",

    boxShadow:
      "0 12px 25px rgba(39, 82, 132, 0.12)",

    overflow: "hidden",

    boxSizing: "border-box",
  },

  filterSlider: {
    position: "absolute",

    zIndex: 0,

    top: "7px",
    bottom: "7px",
    left: "7px",

    width:
      "calc((100% - 14px) / 4)",

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

    transition:
      "transform 330ms cubic-bezier(0.22, 1, 0.36, 1)",

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

    fontSize: "1.8rem",
    fontWeight: 700,

    whiteSpace: "nowrap",

    cursor: "pointer",

    transition: `
      color 220ms ease,
      transform 220ms ease
    `,
  },

  filterChipActive: {
    color: "#ffffff",

    transform:
      "translateY(-1px)",
  },

  filterIcon: {
    flexShrink: 0,

    transition: `
      color 220ms ease,
      transform 260ms cubic-bezier(0.22, 1, 0.36, 1)
    `,
  },

  tableCard: {
    width: "100%",

    overflow: "hidden",

    border:
      "5px solid rgba(255, 255, 255, 0.82)",
    borderRadius: "19px",

    background:
      "rgba(255, 255, 255, 0.91)",

    boxShadow: `
      0 17px 35px rgba(38, 82, 132, 0.13),
      inset 0 1px 0 rgba(255, 255, 255, 0.9)
    `,

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter:
      "blur(10px)",

    boxSizing: "border-box",
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

    borderBottom:
      "1px solid rgba(77, 119, 169, 0.13)",

    color: "#102650",

    fontSize: "2rem",
    fontWeight: 900,

    textTransform: "uppercase",
    letterSpacing: "0.03em",

    boxSizing: "border-box",
  },

  placeColumn: {
    width: columns.place,

    minWidth: 0,
  },

  dateColumn: {
    width: columns.date,

    minWidth: 0,

    textAlign: "center",
  },

  previewColumn: {
    width: columns.preview,

    minWidth: 0,

    textAlign: "center",
  },

  statusColumn: {
    width: columns.status,

    minWidth: 0,

    textAlign: "center",
  },

  tableBody: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
  },

  groupWrapper: {
    width: "100%",

    borderBottom:
      "1px solid rgba(69, 111, 159, 0.12)",

    background:
      "rgba(255, 255, 255, 0.4)",
  },

  groupHeader: {
    display: "flex",
    alignItems: "center",

    minHeight: "74px",

    gap: "15px",
    padding: "12px 24px",

    borderBottom:
      "1px solid rgba(69, 111, 159, 0.1)",

    background: `
      linear-gradient(
        90deg,
        rgba(232, 242, 255, 0.78),
        rgba(245, 250, 255, 0.7),
        rgba(238, 251, 243, 0.6)
      )
    `,

    boxSizing: "border-box",
  },

  groupImage: {
    flexShrink: 0,

    width: "102px",
    height: "102px",

    border:
      "2px solid rgba(255, 255, 255, 0.92)",
    borderRadius: "50%",

    objectFit: "cover",

    boxShadow:
      "0 7px 15px rgba(28, 61, 103, 0.15)",
  },

  groupImageFallback: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "52px",
    height: "52px",

    border:
      "1px solid rgba(33, 118, 229, 0.15)",
    borderRadius: "50%",

    background: `
      linear-gradient(
        145deg,
        rgba(245, 250, 255, 0.98),
        rgba(224, 239, 255, 0.95)
      )
    `,

    color: "#2176e5",

    fontSize: "1rem",
    fontWeight: 900,

    boxShadow:
      "0 7px 15px rgba(31, 78, 129, 0.1)",
  },

  groupContent: {
    minWidth: 0,
  },

  groupTitle: {
    margin: 0,

    overflow: "hidden",

    color: "#0c2450",

    fontSize: "2rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  groupSubtitle: {
    margin: "5px 0 0",

    color: "#607994",

    fontSize: "1.4rem",
    fontWeight: 650,
  },

  groupRows: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
  },

  emptyState: {
    display: "grid",
    placeItems: "center",

    minHeight: "150px",

    padding: "32px",

    color: "#637993",

    fontSize: "1.4rem",
    fontWeight: 650,

    boxSizing: "border-box",
  },

  errorState: {
    display: "grid",
    placeItems: "center",

    minHeight: "150px",

    padding: "32px",

    background:
      "rgba(255, 238, 238, 0.76)",

    color: "#c73535",

    fontSize: "1.8rem",
    fontWeight: 750,

    boxSizing: "border-box",
  },

  loadMoreTrap: {
    width: "100%",
    height: "1px",
  },

  paginationHint: {
    padding: "22px",

    color: "#4d6580",

    fontSize: "1.8rem",
    fontWeight: 650,

    textAlign: "center",
  },

  paginationCompleted: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "9px",
    marginTop: "25px",

    color: "#07893f",

    fontSize: "1.8rem",
    fontWeight: 800,
  },
};

export default styles;