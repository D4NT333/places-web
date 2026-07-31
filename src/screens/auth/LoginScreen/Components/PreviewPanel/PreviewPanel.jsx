import React from "react";

import {
  Activity,
  CheckCircle2,
  FileWarning,
  MapPinned,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import styles from "./styles";

export default function PreviewPanel() {
  return (
    <aside style={styles.rightPanel}>
      <div style={styles.blurCircleOne} />
      <div style={styles.blurCircleTwo} />
      <div style={styles.gridDecoration} />

      <div style={styles.previewCard}>
        <header style={styles.previewHeader}>
          <div style={styles.windowDots}>
            <span style={styles.previewDotBlue} />
            <span style={styles.previewDotGreen} />
            <span style={styles.previewDotViolet} />
          </div>

          <span style={styles.secureBadge}>
            <ShieldCheck
              size={22}
              strokeWidth={2.25}
            />

            Sistema protegido
          </span>
        </header>

        <div style={styles.previewContent}>
          <div style={styles.previewLabel}>
            <MapPinned
              size={23}
              strokeWidth={2.2}
            />

            Panel administrativo
          </div>

          <h3 style={styles.previewTitle}>
            Control claro y seguro del sistema
          </h3>

          <p style={styles.previewDescription}>
            Valida lugares, revisa contenido y
            administra las operaciones de Lsearch
            desde una sola plataforma.
          </p>
        </div>

        <div style={styles.statsGrid}>
          <article style={styles.pendingCard}>
            <div style={styles.pendingIcon}>
              <Activity
                size={34}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.statText}>
              <span style={styles.statValue}>
                24
              </span>

              <span style={styles.statLabel}>
                Lugares pendientes
              </span>
            </div>
          </article>

          <article style={styles.reportCard}>
            <div style={styles.reportIcon}>
              <FileWarning
                size={34}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.statText}>
              <span style={styles.statValue}>
                8
              </span>

              <span style={styles.statLabel}>
                Reportes abiertos
              </span>
            </div>
          </article>
        </div>

        <div style={styles.activityCard}>
          <div style={styles.activityHeader}>
            <div style={styles.activityTitle}>
              <TrendingUp
                size={26}
                strokeWidth={2.2}
              />

              Actividad administrativa
            </div>

            <span style={styles.livePill}>
              En línea
            </span>
          </div>

          <div style={styles.activityList}>
            <div style={styles.activityRow}>
              <span style={styles.activityDotBlue} />

              <span style={styles.activityBarLarge} />

              <CheckCircle2
                size={23}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.activityRow}>
              <span style={styles.activityDotGreen} />

              <span style={styles.activityBarMedium} />

              <CheckCircle2
                size={23}
                strokeWidth={2.2}
              />
            </div>

            <div style={styles.activityRow}>
              <span style={styles.activityDotViolet} />

              <span style={styles.activityBarSmall} />

              <CheckCircle2
                size={40}
                strokeWidth={2.2}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.bottomMessage}>
        <ShieldCheck
          size={40}
          strokeWidth={2.2}
        />

        Administración centralizada de Lsearch
      </div>
    </aside>
  );
}