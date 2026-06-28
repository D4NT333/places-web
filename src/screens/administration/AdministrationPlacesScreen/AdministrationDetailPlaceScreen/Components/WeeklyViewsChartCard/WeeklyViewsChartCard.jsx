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

export default function WeeklyViewsChartCard() {
  const chartData = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [
      {
        label: "Vistas",
        data: [12, 18, 15, 28, 36, 44, 39],
        fill: true,
        tension: 0.35,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
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
      <h2 style={styles.title}>Vistas en la semana</h2>

      <div style={styles.chartBox}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </section>
  );
}