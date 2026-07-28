import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Header,
  Footer,
  Panel,
} from "../components";

export default function LayoutScreen({
  children,
  scroll = true,
  padding = "1.5rem",
  bg = "transparent",
  maxWidth = "100%",
  centerContent = false,
  fullHeight = true,
  className = "",
  style = {},
  scrollToTop = false,
  sidebarWidth = "286px",
  stickyHeader = true,
  showHeader = true,
  showSidebar = true,
  showFooter = true,
  breadcrumbs = [],
}) {
  const mainRef = useRef(null);

  /*
   * Único estado encargado de mostrar u ocultar el panel.
   */
  const [sidebarOpen, setSidebarOpen] = useState(showSidebar);

  useEffect(() => {
    if (scrollToTop && mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [scrollToTop]);

  useEffect(() => {
    if (!showSidebar) {
      setSidebarOpen(false);
    }
  }, [showSidebar]);

  const toggleSidebar = () => {
    if (!showSidebar) {
      return;
    }

    setSidebarOpen((previous) => !previous);
  };

  return (
    <div
      className={`layout-screen ${className}`}
      style={{
        position: "relative",

        display: "flex",

        width: "100%",
        height: fullHeight ? "100dvh" : "auto",
        minHeight: fullHeight ? "100dvh" : "auto",

        margin: 0,
        padding: 0,
        gap: 0,

        overflow: "hidden",

        boxSizing: "border-box",

        /*
         * Fondo oficial claro de Lsearch.
         * Tiene más presencia que el anterior, pero sigue siendo limpio.
         */
        background: `
          radial-gradient(
            ellipse at 91% 4%,
            rgba(33, 118, 229, 0.29) 0%,
            rgba(103, 168, 242, 0.18) 28%,
            transparent 59%
          ),
          radial-gradient(
            ellipse at 4% 94%,
            rgba(85, 198, 90, 0.27) 0%,
            rgba(103, 168, 242, 0.18) 34%,
            transparent 63%
          ),
          radial-gradient(
            ellipse at 98% 92%,
            rgba(33, 118, 229, 0.27) 0%,
            rgba(103, 168, 242, 0.17) 35%,
            transparent 66%
          ),
          radial-gradient(
            ellipse at 55% 55%,
            rgba(103, 168, 242, 0.09) 0%,
            transparent 52%
          ),
          linear-gradient(
            135deg,
            #fdfefe 0%,
            #f4f9ff 38%,
            #eaf3ff 100%
          )
        `,

        ...style,
      }}
    >
      {/* ========================================================= */}
      {/* DECORACIONES GENERALES DEL FONDO                         */}
      {/* ========================================================= */}

      {/* Masa azul superior derecha */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-145px",
          right: "-120px",

          width: "760px",
          height: "380px",

          borderRadius: "48% 52% 42% 58%",

          background: `
            linear-gradient(
              145deg,
              rgba(33, 118, 229, 0.22) 0%,
              rgba(103, 168, 242, 0.16) 40%,
              rgba(85, 198, 90, 0.08) 68%,
              transparent 82%
            )
          `,

          transform: "rotate(-8deg)",

          pointerEvents: "none",
        }}
      />

      {/* Líneas superiores */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-65px",
          right: "10px",

          width: "630px",
          height: "270px",

          borderTop: "2px solid rgba(33, 118, 229, 0.22)",
          borderRadius: "50%",

          transform: "rotate(-7deg)",

          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-25px",
          right: "75px",

          width: "520px",
          height: "220px",

          borderTop: "1px solid rgba(103, 168, 242, 0.3)",
          borderRadius: "50%",

          transform: "rotate(-9deg)",

          pointerEvents: "none",
        }}
      />

      {/* Puntos superiores */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "26px",
          right: "245px",

          width: "150px",
          height: "94px",

          opacity: 0.55,

          backgroundImage: `
            radial-gradient(
              circle,
              rgba(33, 118, 229, 0.68) 1.6px,
              transparent 1.8px
            )
          `,

          backgroundSize: "14px 14px",

          pointerEvents: "none",
        }}
      />

      {/* Masa verde inferior izquierda */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          left: "55px",
          bottom: "-205px",

          width: "650px",
          height: "430px",

          borderRadius: "52% 48% 58% 42%",

          background: `
            linear-gradient(
              125deg,
              rgba(85, 198, 90, 0.3) 0%,
              rgba(103, 168, 242, 0.24) 44%,
              rgba(33, 118, 229, 0.13) 68%,
              transparent 82%
            )
          `,

          transform: "rotate(8deg)",

          pointerEvents: "none",
        }}
      />

      {/* Línea inferior izquierda */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          left: "130px",
          bottom: "-130px",

          width: "480px",
          height: "310px",

          border: "1px solid rgba(85, 198, 90, 0.24)",
          borderRadius: "50%",

          transform: "rotate(12deg)",

          pointerEvents: "none",
        }}
      />

      {/* Masa azul inferior derecha */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          right: "-145px",
          bottom: "-170px",

          width: "570px",
          height: "450px",

          borderRadius: "50%",

          background: `
            radial-gradient(
              ellipse at center,
              rgba(33, 118, 229, 0.33) 0%,
              rgba(103, 168, 242, 0.21) 43%,
              transparent 74%
            )
          `,

          pointerEvents: "none",
        }}
      />

      {/* Anillos inferiores derechos */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          right: "-60px",
          bottom: "-90px",

          width: "400px",
          height: "330px",

          border: "2px solid rgba(33, 118, 229, 0.19)",
          borderRadius: "50%",

          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          right: "0",
          bottom: "-28px",

          width: "300px",
          height: "245px",

          border: "1px solid rgba(103, 168, 242, 0.28)",
          borderRadius: "50%",

          pointerEvents: "none",
        }}
      />

      {/* Detalle central derecho */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "43%",
          right: "-115px",

          width: "350px",
          height: "230px",

          border: "1px solid rgba(33, 118, 229, 0.13)",
          borderRadius: "50%",

          transform: "rotate(-18deg)",

          pointerEvents: "none",
        }}
      />

      {/* Detalle sutil central izquierdo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "35%",
          left: "13%",

          width: "310px",
          height: "160px",

          opacity: 0.35,

          background: `
            radial-gradient(
              ellipse at center,
              rgba(85, 198, 90, 0.12),
              rgba(103, 168, 242, 0.08) 45%,
              transparent 72%
            )
          `,

          transform: "rotate(14deg)",

          pointerEvents: "none",
        }}
      />

      {/* ========================================================= */}
      {/* PANEL LATERAL                                             */}
      {/* ========================================================= */}

      {showSidebar && (
        <aside
          className="layout-sidebar"
          style={{
            position: "relative",
            zIndex: 20,

            width: sidebarOpen ? sidebarWidth : 0,
            minWidth: sidebarOpen ? sidebarWidth : 0,
            height: "100%",

            flexShrink: 0,

            overflow: "hidden",

            opacity: sidebarOpen ? 1 : 0,

            transform: sidebarOpen
              ? "translateX(0)"
              : "translateX(-32px)",

            pointerEvents: sidebarOpen
              ? "auto"
              : "none",

            transition: `
              width 360ms cubic-bezier(0.22, 1, 0.36, 1),
              min-width 360ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 220ms ease,
              transform 360ms cubic-bezier(0.22, 1, 0.36, 1)
            `,
          }}
        >
          <Panel
            onClose={() => setSidebarOpen(false)}
          />
        </aside>
      )}

      {/* ========================================================= */}
      {/* HEADER + CONTENIDO + FOOTER                               */}
      {/* ========================================================= */}

      <section
        className="layout-shell"
        style={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          flex: 1,
          flexDirection: "column",

          width: 0,
          minWidth: 0,
          height: "100%",

          border: "none",
          borderRadius: 0,

          boxShadow: "none",

          background: "transparent",

          overflow: "hidden",
        }}
      >
        {showHeader && (
          <div
            className="layout-header"
            style={{
              position: stickyHeader
                ? "sticky"
                : "relative",

              top: 0,
              zIndex: 100,

              width: "100%",

              flexShrink: 0,
            }}
          >
            <Header
              sidebarOpen={sidebarOpen}
              onToggleSidebar={toggleSidebar}
              breadcrumbs={breadcrumbs}
            />
          </div>
        )}

        <main
          ref={mainRef}
          className="layout-main"
          style={{
            position: "relative",
            zIndex: 2,

            display: "flex",
            flex: 1,
            flexDirection: "column",

            minWidth: 0,
            minHeight: 0,

            overflowY: scroll
              ? "auto"
              : "hidden",

            overflowX: "hidden",

            alignItems: centerContent
              ? "center"
              : "stretch",

            justifyContent: centerContent
              ? "center"
              : "flex-start",

            background: bg || "transparent",
          }}
        >
          <div
            className="layout-content"
            style={{
              position: "relative",
              zIndex: 2,

              width: "100%",
              maxWidth,

              minHeight: centerContent
                ? "auto"
                : "100%",

              margin: centerContent
                ? "auto"
                : undefined,

              padding,

              flex: centerContent
                ? "0 0 auto"
                : 1,

              boxSizing: "border-box",
            }}
          >
            {children}
          </div>
        </main>

        {showFooter && (
          <footer
            className="layout-footer"
            style={{
              position: "relative",
              zIndex: 3,

              width: "100%",

              flexShrink: 0,
            }}
          >
            <Footer />
          </footer>
        )}
      </section>
    </div>
  );
}