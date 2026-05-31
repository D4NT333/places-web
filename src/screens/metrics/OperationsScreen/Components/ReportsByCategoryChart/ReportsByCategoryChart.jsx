import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import ChartCard from "../ChartCard";
import styles from "./styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ReportsByCategoryChart() {
  const data = {
    labels: ["Lugares", "Usuarios", "Generales"],
    datasets: [
      {
        label: "Reportes",
        data: [12, 5, 8],
        backgroundColor: [
          "rgba(239, 68, 68, 0.72)",
          "rgba(249, 115, 22, 0.72)",
          "rgba(99, 102, 241, 0.72)",
        ],
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} reportes`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#374151",
          font: { weight: 700 },
        },
      },
      y: {
        grid: { color: "rgba(148, 163, 184, 0.18)" },
        ticks: { color: "#6B7280" },
      },
    },
  };

  return (
    <ChartCard
      title="Reportes por categoría"
      description="Cantidad de reportes recibidos por tipo: lugares, usuarios o incidencias generales."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}