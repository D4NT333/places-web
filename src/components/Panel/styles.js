const colors = {
  navy900: "#061a33",
  navy850: "#08213f",
  navy800: "#0a294d",
  blue500: "#1778f2",
  blue600: "#0868e8",
  blueGlow: "rgba(23, 120, 242, 0.28)",
  green500: "#31c967",
  white: "#ffffff",
  textSoft: "#b7c8dc",
  textMuted: "#88a0bb",
  border: "rgba(255, 255, 255, 0.08)",
};

const styles = {
  container: {
  position: "relative",

  width: "100%",
  minWidth: 0,
  height: "100%",

  margin: 0,
  padding: 0,

  overflow: "hidden",

  borderRadius: 0,

  background: `
    linear-gradient(
      180deg,
      #061a33 0%,
      #08213f 56%,
      #071d38 100%
    )
  `,

  boxShadow: "none",

  zIndex: 30,
},

  containerCollapsed: {
    width: "188px",
    minWidth: "188px",
  },

  inner: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 0,
    padding: "18px 14px 14px",
    boxSizing: "border-box",
  },

  backgroundGlowTop: {
    position: "absolute",
    top: "-80px",
    right: "-70px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "rgba(23, 120, 242, 0.14)",
    filter: "blur(38px)",
    pointerEvents: "none",
  },

  backgroundGlowBottom: {
    position: "absolute",
    bottom: "-110px",
    left: "-90px",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(49, 201, 103, 0.08)",
    filter: "blur(46px)",
    pointerEvents: "none",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "58px",
    gap: "8px",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    gap: "12px",
    overflow: "hidden",
  },

  logoMark: {
    position: "relative",
    flexShrink: 0,
    width: "34px",
    height: "34px",
  },

  logoBar: {
    position: "absolute",
    left: "3px",
    width: "26px",
    height: "8px",
    borderRadius: "999px",
    transform: "rotate(-42deg)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.14)",
  },

  logoBarGreen: {
    top: "5px",
    background: "#40d66f",
  },

  logoBarLightBlue: {
    top: "13px",
    background: "#5aa7ff",
  },

  logoBarBlue: {
    top: "21px",
    background: "#1475ef",
  },

  brandTextContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    opacity: 1,
    transform: "translateX(0)",
    transition: `
      opacity 180ms ease,
      transform 280ms ease,
      width 280ms ease
    `,
  },

  brandTextContainerCollapsed: {
    width: 0,
    opacity: 0,
    transform: "translateX(-8px)",
    pointerEvents: "none",
  },

  brandTitle: {
    overflow: "hidden",
    color: colors.white,
    fontSize: "18px",
    fontWeight: 750,
    lineHeight: 1.18,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  brandSubtitle: {
    marginTop: "4px",
    color: colors.textSoft,
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.02em",
  },

  collapseButton: {
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    width: "38px",
    height: "38px",
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "11px",
    background: "rgba(255, 255, 255, 0.045)",
    color: colors.textSoft,
    cursor: "pointer",
    transition: `
      background-color 180ms ease,
      color 180ms ease,
      transform 180ms ease
    `,
  },

  divider: {
    width: "100%",
    height: "1px",
    margin: "9px 0 16px",
    background: colors.border,
  },

  navigation: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: "2px",
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(255, 255, 255, 0.12) transparent",
  },

  homeButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "50px",
    gap: "13px",
    marginBottom: "10px",
    padding: "0 16px",
    border: "1px solid transparent",
    borderRadius: "13px",
    background: "transparent",
    color: colors.textSoft,
    cursor: "pointer",
    textAlign: "left",
    transition: `
      color 180ms ease,
      background-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease
    `,
    boxSizing: "border-box",
  },

  homeButtonActive: {
    color: colors.white,
    background: `
      linear-gradient(
        135deg,
        ${colors.blue500} 0%,
        ${colors.blue600} 100%
      )
    `,
    boxShadow: `
      0 9px 22px ${colors.blueGlow},
      inset 0 1px 0 rgba(255, 255, 255, 0.2)
    `,
  },

  homeButtonCollapsed: {
    justifyContent: "center",
    padding: 0,
  },

  homeIcon: {
    flexShrink: 0,
  },

  homeText: {
    overflow: "hidden",
    fontSize: "14px",
    fontWeight: 700,
    whiteSpace: "nowrap",
    transition: "opacity 150ms ease, width 240ms ease",
  },

  sectionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  sectionBlock: {
    width: "100%",
  },

  sectionButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "48px",
    gap: "10px",
    padding: "0 13px",
    border: "1px solid transparent",
    borderRadius: "12px",
    background: "transparent",
    color: colors.textSoft,
    cursor: "pointer",
    textAlign: "left",
    boxSizing: "border-box",
    transition: `
      color 180ms ease,
      background-color 180ms ease,
      border-color 180ms ease
    `,
  },

  sectionButtonActive: {
    color: colors.white,
    background: "rgba(255, 255, 255, 0.06)",
    borderColor: "rgba(255, 255, 255, 0.055)",
  },

  sectionButtonCollapsed: {
    justifyContent: "center",
    padding: 0,
  },

  sectionButtonMain: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    gap: "13px",
  },

  sectionButtonTrailing: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    gap: "7px",
  },

  sectionIcon: {
    flexShrink: 0,
  },

  sectionText: {
    overflow: "hidden",
    color: "inherit",
    fontSize: "14px",
    fontWeight: 650,
    whiteSpace: "nowrap",
    transition: "opacity 150ms ease, width 240ms ease",
  },

  sectionBadge: {
    display: "grid",
    placeItems: "center",
    minWidth: "26px",
    height: "22px",
    padding: "0 7px",
    borderRadius: "999px",
    background: colors.green500,
    color: colors.white,
    fontSize: "11px",
    fontWeight: 800,
    boxShadow: "0 5px 12px rgba(49, 201, 103, 0.2)",
    boxSizing: "border-box",
  },

  collapsedBadge: {
    position: "absolute",
    top: "4px",
    right: "5px",
    display: "grid",
    placeItems: "center",
    minWidth: "19px",
    height: "19px",
    padding: "0 4px",
    border: `2px solid ${colors.navy850}`,
    borderRadius: "999px",
    background: colors.green500,
    color: colors.white,
    fontSize: "9px",
    fontWeight: 800,
    boxSizing: "border-box",
  },

  chevron: {
    transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
  },

  chevronOpen: {
    transform: "rotate(180deg)",
  },

  sectionContent: {
    overflow: "hidden",
    transition: `
      max-height 330ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 230ms ease,
      transform 330ms cubic-bezier(0.22, 1, 0.36, 1),
      margin 330ms cubic-bezier(0.22, 1, 0.36, 1)
    `,
  },

  sectionContentOpen: {
    maxHeight: "230px",
    marginTop: "5px",
    marginBottom: "7px",
    opacity: 1,
    transform: "translateY(0)",
  },

  sectionContentClosed: {
    maxHeight: 0,
    marginTop: 0,
    marginBottom: 0,
    opacity: 0,
    transform: "translateY(-6px)",
    pointerEvents: "none",
  },

  sectionContentInner: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    paddingLeft: "15px",
  },

  optionButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "40px",
    gap: "11px",
    padding: "0 12px",
    border: "1px solid transparent",
    borderRadius: "10px",
    background: "transparent",
    color: colors.textMuted,
    cursor: "pointer",
    textAlign: "left",
    boxSizing: "border-box",
    transition: `
      color 170ms ease,
      background-color 170ms ease,
      border-color 170ms ease,
      transform 170ms ease
    `,
  },

  optionButtonActive: {
    color: colors.white,
    background: "rgba(23, 120, 242, 0.18)",
    borderColor: "rgba(74, 153, 255, 0.22)",
  },

  optionButtonCollapsed: {
    justifyContent: "center",
    padding: 0,
  },

  optionIcon: {
    flexShrink: 0,
  },

  optionText: {
    overflow: "hidden",
    fontSize: "13px",
    fontWeight: 560,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  hiddenLabel: {
    width: 0,
    maxWidth: 0,
    opacity: 0,
    pointerEvents: "none",
  },

  userArea: {
    paddingTop: "13px",
    borderTop: `1px solid ${colors.border}`,
  },

  userCard: {
    display: "flex",
    alignItems: "center",
    minHeight: "63px",
    gap: "11px",
    padding: "8px",
    borderRadius: "14px",
    background: "rgba(255, 255, 255, 0.035)",
    boxSizing: "border-box",
    transition: `
      background-color 180ms ease,
      padding 280ms ease
    `,
  },

  userCardCollapsed: {
    justifyContent: "center",
    padding: "8px 0",
  },

  userAvatar: {
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    width: "43px",
    height: "43px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    borderRadius: "50%",
    background: `
      linear-gradient(
        145deg,
        rgba(23, 120, 242, 0.34),
        rgba(49, 201, 103, 0.18)
      )
    `,
    color: colors.white,
    boxShadow: "0 7px 16px rgba(0, 0, 0, 0.2)",
  },

  userAvatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  userInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minWidth: 0,
    opacity: 1,
    transition: "opacity 160ms ease, width 250ms ease",
  },

  userName: {
    overflow: "hidden",
    color: colors.white,
    fontSize: "13px",
    fontWeight: 750,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  userRole: {
    marginTop: "3px",
    overflow: "hidden",
    color: colors.textSoft,
    fontSize: "11px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  userChevron: {
    flexShrink: 0,
    color: colors.textSoft,
  },

  edgeToggle: {
    position: "absolute",
    top: "50%",
    right: "-15px",
    zIndex: 4,
    display: "grid",
    placeItems: "center",
    width: "30px",
    height: "48px",
    padding: 0,
    border: "1px solid rgba(8, 41, 77, 0.12)",
    borderRadius: "12px",
    background: colors.white,
    color: colors.navy800,
    cursor: "pointer",
    boxShadow: "0 8px 22px rgba(2, 17, 38, 0.16)",
    transform: "translateY(-50%)",
    transition: `
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },
};

export default styles;