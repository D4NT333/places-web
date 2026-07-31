const styles = {
  screen: {
    position: "relative",

    width: "100%",
    minHeight: "100dvh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "32px",
    boxSizing: "border-box",

    overflow: "hidden",

    background: `
      radial-gradient(
        ellipse 560px 390px at -5% 105%,
        rgba(85, 198, 90, 0.24) 0%,
        rgba(85, 198, 90, 0.10) 43%,
        transparent 72%
      ),
      radial-gradient(
        ellipse 590px 390px at 105% -5%,
        rgba(33, 118, 229, 0.25) 0%,
        rgba(103, 168, 242, 0.12) 46%,
        transparent 74%
      ),
      radial-gradient(
        circle 250px at 88% 82%,
        rgba(116, 65, 214, 0.08) 0%,
        transparent 72%
      ),
      radial-gradient(
        circle 210px at 12% 14%,
        rgba(85, 198, 90, 0.08) 0%,
        transparent 72%
      ),
      linear-gradient(
        135deg,
        #fdfefe 0%,
        #f4f9ff 38%,
        #edf6ff 66%,
        #e8f3ff 100%
      )
    `,

    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  card: {
    position: "relative",

    display: "grid",

    gridTemplateColumns:
      "minmax(0, 1.04fr) minmax(430px, 0.96fr)",

    width: "100%",
    maxWidth: "1260px",
    minHeight: "700px",

    overflow: "hidden",

    background:
      "rgba(255, 255, 255, 0.95)",

    border:
      "1px solid rgba(178, 208, 238, 0.92)",

    borderRadius: "30px",

    boxShadow: `
      0 38px 95px rgba(31, 73, 116, 0.18),
      0 14px 36px rgba(31, 73, 116, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.94)
    `,

    backdropFilter: "blur(18px)",
  },

  leftPanel: {
    position: "relative",

    display: "flex",
    flexDirection: "column",

    minWidth: 0,

    padding: "48px 60px 54px",
    boxSizing: "border-box",

    background: `
      radial-gradient(
        circle 230px at 6% 94%,
        rgba(85, 198, 90, 0.09) 0%,
        transparent 72%
      ),
      radial-gradient(
        circle 190px at 95% 6%,
        rgba(33, 118, 229, 0.08) 0%,
        transparent 70%
      ),
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.99) 0%,
        rgba(248, 252, 255, 0.98) 58%,
        rgba(242, 249, 255, 0.98) 100%
      )
    `,

    borderRight:
      "1px solid rgba(190, 215, 242, 0.78)",
  },
};

export default styles;