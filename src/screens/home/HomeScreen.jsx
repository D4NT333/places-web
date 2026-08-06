import React from "react";

import {
  BarChart3,
  Check,
  ChevronRight,
  FileText,
  MapPinned,
  MessageSquareWarning,
  PieChart,
  UsersRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../layout";
import styles from "./styles";

const QUICK_ACCESS_ITEMS = [
  {
    label: "Propuestas",
    description: "Revisar lugares enviados",
    route: "/submissions/places",
    icon: FileText,
  },
  {
    label: "Lugares",
    description: "Administrar lugares registrados",
    route: "/administration/places",
    icon: MapPinned,
  },
  {
    label: "Usuarios",
    description: "Consultar usuarios registrados",
    route: "/administration/users",
    icon: UsersRound,
  },
  {
    label: "Reportes",
    description: "Revisar reportes pendientes",
    route: "/management/reports",
    icon: MessageSquareWarning,
  },
];

function DashboardIllustration() {
  return (
    <div
      style={styles.illustrationContainer}
      aria-hidden="true"
    >
      <div style={styles.illustrationBlob} />

      <div style={styles.illustrationDots}>
        {Array.from({
          length: 24,
        }).map((_, index) => (
          <span
            key={index}
            style={styles.illustrationDot}
          />
        ))}
      </div>

      <div style={styles.dashboardPreview}>
        <div style={styles.dashboardPreviewHeader}>
          <span style={styles.previewHeaderLine} />
          <span style={styles.previewHeaderLineSmall} />
        </div>

        <div style={styles.dashboardPreviewBody}>
          <div style={styles.previewTopRow}>
            <div style={styles.previewPieContainer}>
              <PieChart
                size={60}
                strokeWidth={1.8}
                style={styles.previewPie}
              />
            </div>

            <div style={styles.previewTextLines}>
              <span style={styles.previewTextLine} />
              <span style={styles.previewTextLineSmall} />
            </div>
          </div>

          <div style={styles.previewBottomRow}>
            <div style={styles.previewBars}>
              <span
                style={{
                  ...styles.previewBar,
                  height: "43%",
                }}
              />

              <span
                style={{
                  ...styles.previewBar,
                  height: "72%",
                }}
              />

              <span
                style={{
                  ...styles.previewBar,
                  height: "94%",
                }}
              />
            </div>

            <div style={styles.previewTextLines}>
              <span style={styles.previewTextLine} />
              <span style={styles.previewTextLineSmall} />
              <span style={styles.previewTextLine} />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.checkBadge}>
        <Check
          size={50}
          strokeWidth={3}
        />
      </div>
    </div>
  );
}

function QuickAccessItem({
  label,
  description,
  icon: Icon,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={styles.quickAccessButton}
    >
      <span style={styles.quickAccessIconContainer}>
        <Icon
          size={50}
          strokeWidth={2}
          style={styles.quickAccessIcon}
        />
      </span>

      <span style={styles.quickAccessContent}>
        <strong style={styles.quickAccessLabel}>
          {label}
        </strong>

        <span style={styles.quickAccessDescription}>
          {description}
        </span>
      </span>

      <ChevronRight
        size={40}
        strokeWidth={2.4}
        style={styles.quickAccessChevron}
      />
    </button>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <LayoutScreen
      padding="1.25rem"
      bg="transparent"
      scroll
      stickyHeader
      breadcrumbs={[
        {
          label: "Inicio",
        },
      ]}
    >
      <main style={styles.container}>
        <section style={styles.mainGrid}>
          <article style={styles.heroCard}>
            <div style={styles.heroContent}>
              <div style={styles.heroTitleRow}>
                <span style={styles.heroIconContainer}>
                  <BarChart3
                    size={60}
                    strokeWidth={1.9}
                    style={styles.heroIcon}
                  />
                </span>

                <h1 style={styles.heroTitle}>
                  Bienvenido al panel administrativo
                </h1>
              </div>

              <p style={styles.heroDescription}>
                Gestiona propuestas, usuarios, lugares y
                reportes de forma rápida y clara desde un
                solo lugar.
              </p>

              <button
                type="button"
                onClick={() =>
                  navigate("/submissions/places")
                }
                style={styles.primaryButton}
              >
                <FileText
                  size={50}
                  strokeWidth={2}
                />

                <span>Ir a propuestas</span>
              </button>
            </div>

            <DashboardIllustration />
          </article>

          <aside style={styles.quickAccessPanel}>
            <div style={styles.quickAccessHeader}>
              <span style={styles.quickAccessEyebrow}>
                Navegación
              </span>

              <h2 style={styles.quickAccessTitle}>
                Accesos rápidos
              </h2>

              <p style={styles.quickAccessSubtitle}>
                Selecciona una sección para comenzar.
              </p>
            </div>

            <div style={styles.quickAccessList}>
              {QUICK_ACCESS_ITEMS.map((item) => (
                <QuickAccessItem
                  key={item.route}
                  label={item.label}
                  description={item.description}
                  icon={item.icon}
                  onClick={() =>
                    navigate(item.route)
                  }
                />
              ))}
            </div>
          </aside>
        </section>
      </main>
    </LayoutScreen>
  );
}