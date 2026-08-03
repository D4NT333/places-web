import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Activity,
  BarChart3,
  ChevronDown,
  ChevronRight,
  CircleGauge,
  FileImage,
  FilePenLine,
  FileText,
  Gauge,
  Home,
  MapPinned,
  MessageSquareWarning,
  MonitorCog,
  Search,
  ShieldCheck,
  Trash2,
  UserRound,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import styles from "./styles";

const PANEL_SECTIONS = [
  {
    key: "metricas",
    label: "Métricas",
    icon: BarChart3,
    routes: [
      {
        label: "Operaciones",
        route: "/metrics/operations",
        icon: Gauge,
      },
      {
        label: "Demanda",
        route: "/metrics/demand",
        icon: Search,
      },
      {
        label: "Interacciones",
        route: "/metrics/interactions",
        icon: Activity,
      },
    ],
  },
  {
    key: "monitoreo",
    label: "Monitoreo",
    icon: MonitorCog,
    badge: 73,
    routes: [
      {
        label: "Resumen",
        route: "/monitoring/summary",
        icon: CircleGauge,
      },
      {
        label: "Incidencias",
        route: "/monitoring/issues",
        icon: MessageSquareWarning,
      },
    ],
  },
  {
    key: "propuestas",
    label: "Propuestas",
    icon: FileText,
    routes: [
      {
        label: "Lugares",
        route: "/submissions/places",
        icon: MapPinned,
      },
      {
        label: "Descripciones",
        route: "/submissions/descriptions",
        icon: FilePenLine,
      },
      {
        label: "Fotografías",
        route: "/submissions/photos",
        icon: FileImage,
      },
    ],
  },
  {
    key: "administracion",
    label: "Administración",
    icon: ShieldCheck,
    routes: [
      {
        label: "Usuarios",
        route: "/administration/users",
        icon: UsersRound,
      },
      {
        label: "Lugares",
        route: "/administration/places",
        icon: MapPinned,
      },
    ],
  },
  {
    key: "mantenimiento",
    label: "Mantenimiento",
    icon: Wrench,
    routes: [
      {
        label: "Agregar lugares",
        route: "/management/place-registration/zone",
        icon: MapPinned,
      },
      {
        label: "Propuestas eliminadas",
        route: "/management/deleted-submissions",
        icon: Trash2,
      },
      {
        label: "Reportes",
        route: "/management/reports",
        icon: MessageSquareWarning,
      },
    ],
  },
];

function LsearchLogo() {
  return (
    <div style={styles.brand}>
      <div
        style={styles.logoMark}
        aria-hidden="true"
      >
        <span
          style={{
            ...styles.logoBar,
            ...styles.logoBarGreen,
          }}
        />

        <span
          style={{
            ...styles.logoBar,
            ...styles.logoBarLightBlue,
          }}
        />

        <span
          style={{
            ...styles.logoBar,
            ...styles.logoBarBlue,
          }}
        />
      </div>

      <div style={styles.brandTextContainer}>
        <strong style={styles.brandTitle}>
          Panel administrativo
        </strong>

        <span style={styles.brandSubtitle}>
          Lsearch
        </span>
      </div>
    </div>
  );
}

function SidebarLink({
  label,
  icon: Icon,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...styles.optionButton,
        ...(active ? styles.optionButtonActive : {}),
      }}
    >
      <Icon
        size={29}
        strokeWidth={2}
        style={styles.optionIcon}
      />

      <span style={styles.optionText}>
        {label}
      </span>
    </button>
  );
}

function SidebarSection({
  section,
  expanded,
  pathname,
  onToggle,
  onNavigate,
}) {
  const SectionIcon = section.icon;

  const hasActiveRoute = section.routes.some(({ route }) =>
    pathname.startsWith(route)
  );

  return (
    <div style={styles.sectionBlock}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          ...styles.sectionButton,
          ...(hasActiveRoute
            ? styles.sectionButtonActive
            : {}),
        }}
      >
        <span style={styles.sectionButtonMain}>
          <SectionIcon
            size={40}
            strokeWidth={2}
            style={styles.sectionIcon}
          />

          <span style={styles.sectionText}>
            {section.label}
          </span>
        </span>

        <span style={styles.sectionButtonTrailing}>
          {section.badge !== undefined && (
            <span style={styles.sectionBadge}>
              {section.badge}
            </span>
          )}

          <ChevronDown
            size={34}
            strokeWidth={2.2}
            style={{
              ...styles.chevron,
              ...(expanded
                ? styles.chevronOpen
                : {}),
            }}
          />
        </span>
      </button>

      <div
        style={{
          ...styles.sectionContent,
          ...(expanded
            ? styles.sectionContentOpen
            : styles.sectionContentClosed),
        }}
      >
        <div style={styles.sectionContentInner}>
          {section.routes.map((item) => (
            <SidebarLink
              key={item.route}
              label={item.label}
              icon={item.icon}
              active={pathname.startsWith(item.route)}
              onClick={() => onNavigate(item.route)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Panel({
  onClose,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const activeSectionKey = useMemo(() => {
    const activeSection = PANEL_SECTIONS.find((section) =>
      section.routes.some(({ route }) =>
        location.pathname.startsWith(route)
      )
    );

    return activeSection?.key || null;
  }, [location.pathname]);

  const [openSections, setOpenSections] = useState({
    metricas: false,
    monitoreo: false,
    propuestas: false,
    administracion: false,
    mantenimiento: false,
  });

  useEffect(() => {
    if (!activeSectionKey) {
      return;
    }

    setOpenSections((previous) => ({
      ...previous,
      [activeSectionKey]: true,
    }));
  }, [activeSectionKey]);

  const toggleSection = (sectionKey) => {
    setOpenSections((previous) => ({
      ...previous,
      [sectionKey]: !previous[sectionKey],
    }));
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  const isHomeActive = location.pathname === "/";

  return (
    <aside style={styles.container}>
      <div style={styles.backgroundGlowTop} />
      <div style={styles.backgroundGlowBottom} />

      <div style={styles.inner}>
        <div style={styles.header}>
          <LsearchLogo />

          <button
            type="button"
            onClick={onClose}
            title="Ocultar panel"
            aria-label="Ocultar panel"
            style={styles.collapseButton}
          >
            <X
              size={30}
              strokeWidth={2.2}
            />
          </button>
        </div>

        <div style={styles.divider} />

        <nav style={styles.navigation}>
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            style={{
              ...styles.homeButton,
              ...(isHomeActive
                ? styles.homeButtonActive
                : {}),
            }}
          >
            <Home
              size={34}
              strokeWidth={2.2}
              style={styles.homeIcon}
            />

            <span style={styles.homeText}>
              Inicio
            </span>
          </button>

          <div style={styles.sectionsContainer}>
            {PANEL_SECTIONS.map((section) => (
              <SidebarSection
                key={section.key}
                section={section}
                expanded={openSections[section.key]}
                pathname={location.pathname}
                onToggle={() =>
                  toggleSection(section.key)
                }
                onNavigate={handleNavigation}
              />
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}