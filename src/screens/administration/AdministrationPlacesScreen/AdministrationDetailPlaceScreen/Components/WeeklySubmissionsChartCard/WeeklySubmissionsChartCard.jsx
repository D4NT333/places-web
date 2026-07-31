import React, {
  useMemo,
} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  BarChart3,
  CalendarRange,
  Camera,
  FileText,
  Flag,
} from "lucide-react";

import {
  Bar,
} from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

export default function WeeklySubmissionsChartCard({
  descriptions = 0,
  photos = 0,
  reports = 0,
  weekLabel = "",
}) {
  const normalizedDescriptions =
    Number(descriptions) || 0;

  const normalizedPhotos =
    Number(photos) || 0;

  const normalizedReports =
    Number(reports) || 0;

  const chartData = useMemo(
    () => ({
      labels: [
        "Descripciones",
        "Fotos",
        "Reportes",
      ],

      datasets: [
        {
          label: "Total",

          data: [
            normalizedDescriptions,
            normalizedPhotos,
            normalizedReports,
          ],

          backgroundColor: [
            "rgba(33, 118, 229, 0.82)",
            "rgba(116, 65, 214, 0.82)",
            "rgba(209, 125, 8, 0.82)",
          ],

          borderColor: [
            "#2176E5",
            "#7441D6",
            "#D17D08",
          ],

          hoverBackgroundColor: [
            "#2176E5",
            "#7441D6",
            "#D17D08",
          ],

          borderWidth: 1,
          borderRadius: 9,
          borderSkipped: false,

          maxBarThickness: 74,
        },
      ],
    }),
    [
      normalizedDescriptions,
      normalizedPhotos,
      normalizedReports,
    ],
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 0,

      interaction: {
        mode: "index",
        intersect: false,
      },

      plugins: {
        tooltip: {
          enabled: true,

          backgroundColor:
            "rgba(11, 49, 95, 0.94)",

          titleColor: "#FFFFFF",
          bodyColor: "#FFFFFF",

          borderColor:
            "rgba(255, 255, 255, 0.2)",

          borderWidth: 1,

          padding: 11,
          cornerRadius: 9,

          displayColors: true,

          titleFont: {
            size: 30,
            weight: "700",
          },

          bodyFont: {
            size: 30,
            weight: "700",
          },

          callbacks: {
            label(context) {
              return ` Total: ${context.parsed.y}`;
            },
          },
        },

        legend: {
          display: false,
        },
      },

      scales: {
        x: {
          grid: {
            display: false,
          },

          border: {
            display: false,
          },

          ticks: {
            color: "#496985",

            font: {
              size: 30,
              weight: "700",
            },

            padding: 8,
          },
        },

        y: {
          beginAtZero: true,

          border: {
            display: false,
          },

          grid: {
            color:
              "rgba(148, 177, 204, 0.22)",

            drawTicks: false,
          },

          ticks: {
            precision: 0,

            color: "#6A829B",

            font: {
              size: 30,
              weight: "700",
            },

            padding: 8,
          },
        },
      },
    }),
    [],
  );

  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <BarChart3
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Contribuciones y reportes
            </h2>

            <p style={styles.subtitle}>
              Comparación semanal de las aportaciones
              y reportes registrados.
            </p>
          </div>
        </div>

        {weekLabel ? (
          <span style={styles.periodLabel}>
            <CalendarRange
              size={40}
              strokeWidth={2.2}
            />

            {weekLabel}
          </span>
        ) : null}
      </header>

      <div style={styles.content}>
        <div style={styles.chartBox}>
          <Bar
            data={chartData}
            options={chartOptions}
          />
        </div>

        <div style={styles.summaryGrid}>
          <article style={styles.descriptionSummary}>
            <div style={styles.descriptionIcon}>
              <FileText
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.summaryContent}>
              <span style={styles.summaryLabel}>
                Descripciones
              </span>

              <strong style={styles.summaryValue}>
                {normalizedDescriptions}
              </strong>
            </div>
          </article>

          <article style={styles.photosSummary}>
            <div style={styles.photosIcon}>
              <Camera
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.summaryContent}>
              <span style={styles.summaryLabel}>
                Fotografías
              </span>

              <strong style={styles.summaryValue}>
                {normalizedPhotos}
              </strong>
            </div>
          </article>

          <article style={styles.reportsSummary}>
            <div style={styles.reportsIcon}>
              <Flag
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.summaryContent}>
              <span style={styles.summaryLabel}>
                Reportes
              </span>

              <strong style={styles.summaryValue}>
                {normalizedReports}
              </strong>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}