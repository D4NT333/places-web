import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function WeeklySubmissionsChartCard() {
  const chartData = {
    labels: ["Descripciones", "Fotos", "Reportes"],
    datasets: [
      {
        label: "Total",
        data: [6, 9, 3],
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  resizeDelay: 0,
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: {
      display: true,
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
          weight: "700",
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
        font: {
          size: 11,
          weight: "700",
        },
      },
    },
  },
};

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Número de propuestas en esta semana</h2>

      <div style={styles.chartBox}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </section>
  );
}