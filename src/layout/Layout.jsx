import { useRef, useEffect, useState } from "react";
import { Header, Footer, Panel } from "../components";

export default function LayoutScreen({
  children,
  scroll = true,
  padding = "1.5rem",
  bg = "var(--color-background, #f5f5f5)",
  maxWidth = "100%",
  centerContent = false,
  fullHeight = true,
  className = "",
  style = {},
  scrollToTop = false,
  sidebarWidth = "240px",
  stickyHeader = true,
  showHeader = true,
  showSidebar = true,
  showFooter = true,
}) {
  const mainRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (scrollToTop && mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [scrollToTop]);

  return (
    <div
      className={`layout-screen ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: fullHeight ? "100dvh" : "auto",
        backgroundColor: bg,
        overflow: "hidden",
        ...style,
      }}
    >
      {showHeader && (
        <div
          className="layout-header"
          style={{
            position: stickyHeader ? "sticky" : "relative",
            top: 0,
            zIndex: 100,
            width: "100%",
            flexShrink: 0,
          }}
        >
          <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        {showSidebar && sidebarOpen && (
          <aside
            className="layout-sidebar"
            style={{
              width: sidebarWidth,
              flexShrink: 0,
              overflowY: "auto",
              height: "100%",
            }}
          >
            <Panel />
          </aside>
        )}

        <main
          ref={mainRef}
          className="layout-main"
          style={{
            flex: 1,
            overflowY: scroll ? "auto" : "hidden",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: centerContent ? "center" : "stretch",
            justifyContent: centerContent ? "center" : "flex-start",
          }}
        >
          <div
            className="layout-content"
            style={{
              width: "100%",
              maxWidth,
              margin: centerContent ? "auto" : undefined,
              padding,
              flex: centerContent ? "0 0 auto" : 1,
              boxSizing: "border-box",
            }}
          >
            {children}
          </div>
        </main>
      </div>

      {showFooter && (
        <footer
          className="layout-footer"
          style={{
            flexShrink: 0,
            width: "100%",
          }}
        >
          <Footer />
        </footer>
      )}
    </div>
  );
}