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

export default function ActivitySummaryCard({ activity }) {
  const weeklyActivity = activity?.weeklyActivity || [];

  const chartLabels =
    weeklyActivity.length > 0
      ? weeklyActivity.map((item) => item.label)
      : ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const chartValues =
    weeklyActivity.length > 0
      ? weeklyActivity.map((item) => item.value)
      : [0, 0, 0, 0, 0, 0, 0];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Actividad",
        data: chartValues,
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
          <h2 style={styles.title}>
            Actividad
          </h2>

          <p style={styles.total}>
            Aportes totales: {activity?.total || 0}
          </p>
        </div>
      </div>

      <div style={styles.metricsRow}>
        <span style={styles.metricChip}>
          Lugares: <strong>{activity?.placesSent || 0}</strong>
        </span>

        <span style={styles.metricChip}>
          Descripciones: <strong>{activity?.descriptionsSent || 0}</strong>
        </span>

        <span style={styles.metricChip}>
          Fotografías: <strong>{activity?.photosSent || 0}</strong>
        </span>

        <span style={styles.metricChip}>
          Reportes: <strong>{activity?.reportsSent || 0}</strong>
        </span>
      </div>

      <div style={styles.chartBox}>
        <div style={styles.chartWrapper}>
          <Line
            data={chartData}
            options={chartOptions}
          />
        </div>
      </div>
    </section>
  );
}