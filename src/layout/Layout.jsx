import React, { useRef, useEffect } from "react";

export default function LayoutScreen({
  children,
  header = null,
  footer = null,
  sidebar = null,
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
}) {
  const mainRef = useRef(null);

  // Scroll al tope cuando cambia la vista (útil en SPA/routing)
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
      {/* ── Header ── */}
      {header && (
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
          {header}
        </div>
      )}

      {/* ── Body (sidebar + main) ── */}
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          minHeight: 0, // permite que flex children hagan scroll correctamente
        }}
      >
        {/* ── Sidebar opcional ── */}
        {sidebar && (
          <aside
            className="layout-sidebar"
            style={{
              width: sidebarWidth,
              flexShrink: 0,
              overflowY: "auto",
              height: "100%",
            }}
          >
            {sidebar}
          </aside>
        )}

        {/* ── Main content ── */}
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
          {/* Inner wrapper respeta maxWidth y padding */}
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

      {/* ── Footer ── */}
      {footer && (
        <footer
          className="layout-footer"
          style={{
            flexShrink: 0,
            width: "100%",
          }}
        >
          {footer}
        </footer>
      )}
    </div>
  );
}
