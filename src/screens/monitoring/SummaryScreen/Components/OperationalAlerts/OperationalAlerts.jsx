import React from "react";

import styles from "./styles";

const SEVERITY_CONFIG = {
  critical: {
    label: "Crítica",
    dotStyle: styles.criticalDot,
    chipStyle: styles.criticalChip,
  },

  warning: {
    label: "Advertencia",
    dotStyle: styles.warningDot,
    chipStyle: styles.warningChip,
  },

  information: {
    label: "Información",
    dotStyle: styles.informationDot,
    chipStyle: styles.informationChip,
  },
};

export default function OperationalAlerts({
  alerts = [],
}) {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Alertas operativas
        </h2>

        <p style={styles.description}>
          Situaciones repetidas que pueden afectar la experiencia de los usuarios.
        </p>
      </div>

      <div style={styles.list}>
        {alerts.map((alert) => {
          const severity =
            SEVERITY_CONFIG[alert.severity] ||
            SEVERITY_CONFIG.information;

          return (
            <article
              key={alert.id}
              style={styles.item}
            >
              <div
                style={{
                  ...styles.severityDot,
                  ...severity.dotStyle,
                }}
              />

              <div style={styles.alertContent}>
                <div style={styles.alertHeader}>
                  <p style={styles.alertTitle}>
                    {alert.title}
                  </p>

                  <span
                    style={{
                      ...styles.severityChip,
                      ...severity.chipStyle,
                    }}
                  >
                    {severity.label}
                  </span>
                </div>

                <p style={styles.alertDescription}>
                  {alert.description}
                </p>

                <div style={styles.alertFooter}>
                  <span>
                    {alert.project}
                  </span>

                  <span>
                    {alert.count} eventos
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}