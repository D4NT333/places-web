import React from "react";

import {
  Activity,
  Camera,
  FileText,
  Flag,
  MapPin,
} from "lucide-react";

import styles from "./styles";

export default function UserActivityCard({
  activity,
}) {
  const activityItems = [
    {
      key: "places",
      label: "Lugares",
      description:
        "Propuestas de lugares enviadas",
      value:
        activity?.placesSent || 0,
      icon: MapPin,
      cardStyle:
        styles.activityBlue,
      iconStyle:
        styles.iconBlue,
    },
    {
      key: "descriptions",
      label: "Descripciones",
      description:
        "Descripciones propuestas",
      value:
        activity
          ?.descriptionsSent || 0,
      icon: FileText,
      cardStyle:
        styles.activityGreen,
      iconStyle:
        styles.iconGreen,
    },
    {
      key: "photos",
      label: "Fotografías",
      description:
        "Fotografías compartidas",
      value:
        activity?.photosSent || 0,
      icon: Camera,
      cardStyle:
        styles.activityPurple,
      iconStyle:
        styles.iconPurple,
    },
    {
      key: "reports",
      label: "Reportes",
      description:
        "Reportes enviados",
      value:
        activity?.reportsSent || 0,
      icon: Flag,
      cardStyle:
        styles.activityOrange,
      iconStyle:
        styles.iconOrange,
    },
  ];

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.heading}>
          <div style={styles.headerIcon}>
            <Activity
              size={32}
              strokeWidth={2.1}
            />
          </div>

          <div style={styles.headerText}>
            <h2 style={styles.title}>
              Resumen de actividad
            </h2>

            <p style={styles.subtitle}>
              Distribución general de los
              aportes realizados por el
              usuario.
            </p>
          </div>
        </div>

        <div style={styles.totalBox}>
          <span style={styles.totalLabel}>
            Total
          </span>

          <strong style={styles.totalValue}>
            {activity?.total || 0}
          </strong>
        </div>
      </header>

      <div style={styles.activityGrid}>
        {activityItems.map(
          (item) => {
            const ItemIcon =
              item.icon;

            return (
              <article
                key={item.key}
                style={{
                  ...styles.activityItem,
                  ...item.cardStyle,
                }}
              >
                <div
                  style={{
                    ...styles.itemIcon,
                    ...item.iconStyle,
                  }}
                >
                  <ItemIcon
                    size={30}
                    strokeWidth={2.15}
                  />
                </div>

                <div style={styles.itemContent}>
                  <strong
                    style={styles.itemValue}
                  >
                    {item.value}
                  </strong>

                  <span
                    style={styles.itemLabel}
                  >
                    {item.label}
                  </span>

                  <span
                    style={
                      styles.itemDescription
                    }
                  >
                    {item.description}
                  </span>
                </div>
              </article>
            );
          },
        )}
      </div>
    </section>
  );
}