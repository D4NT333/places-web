import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export default function UserActivityCard() {
  const activityStats = {
    total: 12,
    places: 3,
    descriptions: 3,
    photos: 3,
    reports: 3,
    pending: 3,
    approved: 8,
    rejected: 4,
  };

  const chartData = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [
      {
        label: "Actividad",
        data: [1, 2, 1, 3, 2, 1, 2],
        fill: true,
        tension: 0.35,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: 700,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          font: {
            size: 11,
            weight: 700,
          },
        },
      },
    },
  };

  return (
    <section style={styles.card}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Actividad</h2>

          <p style={styles.totalText}>
            Actividad total:{" "}
            <strong>{activityStats.total}</strong>
          </p>
        </div>
      </div>

      <div style={styles.contentGrid}>
        <div style={styles.metricsColumn}>
          <div style={styles.metricChip}>
            Lugares enviados:
            <strong>{activityStats.places}</strong>
          </div>

          <div style={styles.metricChip}>
            Descripciones enviadas:
            <strong>{activityStats.descriptions}</strong>
          </div>

          <div style={styles.metricChip}>
            Fotografías enviadas:
            <strong>{activityStats.photos}</strong>
          </div>

          <div style={styles.metricChip}>
            Reportes enviados:
            <strong>{activityStats.reports}</strong>
          </div>
        </div>

        <div style={styles.chartBox}>
          <div style={styles.chartHeader}>
            <h3 style={styles.chartTitle}>
              Actividad semanal
            </h3>

            <span style={styles.chartHint}>
              Prueba
            </span>
          </div>

          <div style={styles.chartWrapper}>
            <Line
              data={chartData}
              options={chartOptions}
            />
          </div>
        </div>
      </div>

      <div style={styles.statusRow}>
        <span style={styles.statusItem}>
          Pendientes:{" "}
          <strong>{activityStats.pending}</strong>
        </span>

        <span style={styles.statusItem}>
          Aprobados:{" "}
          <strong>{activityStats.approved}</strong>
        </span>

        <span style={styles.statusItem}>
          Rechazados:{" "}
          <strong>{activityStats.rejected}</strong>
        </span>
      </div>
    </section>
  );
}