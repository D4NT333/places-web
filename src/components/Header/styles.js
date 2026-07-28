const colors = {
  navy: "#071f3c",
  navySoft: "#12365d",

  blue: "#2176e5",
  lightBlue: "#67a8f2",
  green: "#55c65a",

  white: "#ffffff",

  text: "#102541",
  textSoft: "#657d98",
};

const styles = {
  headerWrapper: {
    position: "relative",

    width: "100%",

    overflow: "hidden",

    background: `
      linear-gradient(
        105deg,
        rgba(231, 249, 234, 0.94) 0%,
        rgba(245, 251, 255, 0.96) 37%,
        rgba(224, 240, 255, 0.96) 72%,
        rgba(207, 229, 255, 0.94) 100%
      )
    `,

    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    borderBottom: "1px solid rgba(33, 118, 229, 0.16)",

    boxShadow: `
      0 8px 25px rgba(29, 89, 151, 0.08)
    `,

    boxSizing: "border-box",
  },

  header: {
    position: "relative",
    zIndex: 2,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    minHeight: "68px",

    padding: "10px 20px",

    boxSizing: "border-box",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,

    gap: "12px",
  },

  openSidebarButton: {
    display: "grid",
    placeItems: "center",

    width: "43px",
    height: "43px",

    padding: 0,

    border: "1px solid rgba(33, 118, 229, 0.18)",
    borderRadius: "13px",

    background: `
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.98),
        rgba(220, 239, 255, 0.94)
      )
    `,

    color: colors.navy,

    cursor: "pointer",

    boxShadow: `
      0 7px 18px rgba(33, 118, 229, 0.11),
      inset 0 1px 0 rgba(255, 255, 255, 0.95)
    `,

    transition: `
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },

  collapsedBrand: {
    display: "flex",
    flexDirection: "column",

    minWidth: 0,
  },

  collapsedBrandTitle: {
    color: colors.navy,

    fontSize: "35px",
    fontWeight: 800,

    lineHeight: 1.15,
  },

  collapsedBrandSubtitle: {
    marginTop: "3px",

    color: colors.blue,

    fontSize: "16px",
    fontWeight: 700,
  },

  rightSection: {
    position: "relative",
    zIndex: 2,

    display: "flex",
    alignItems: "center",

    gap: "12px",
  },

  notificationButton: {
    position: "relative",

    display: "grid",
    placeItems: "center",

    width: "62px",
    height: "62px",

    padding: 0,

    border: "1px solid rgba(33, 118, 229, 0.13)",
    borderRadius: "13px",

    background: "rgba(255, 255, 255, 0.72)",

    cursor: "pointer",

    boxShadow: `
      0 5px 14px rgba(33, 118, 229, 0.08)
    `,

    transition: `
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },

  notificationIcon: {
    width: "62px",
    height: "62px",

    objectFit: "contain",
  },

  notificationBadge: {
    position: "absolute",

    top: "1px",
    right: "1px",

    display: "grid",
    placeItems: "center",

    minWidth: "18px",
    height: "18px",

    padding: "0 4px",

    border: "2px solid #030e1a",
    borderRadius: "999px",

    background: colors.blue,

    color: colors.white,

    fontSize: "9px",
    fontWeight: 800,

    boxSizing: "border-box",
  },

  breadcrumbBar: {
    position: "relative",
    zIndex: 2,

    display: "flex",
    alignItems: "center",

    minHeight: "35px",

    padding: "0 20px 8px",

    background: `
      linear-gradient(
        90deg,
        rgba(85, 198, 90, 0.065),
        rgba(255, 255, 255, 0.14),
        rgba(33, 118, 229, 0.09)
      )
    `,

    boxSizing: "border-box",
  },
};

export default styles;