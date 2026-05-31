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

export default function ValidationEfficiencyChart() {
  const data = {
    labels: ["Lugares", "Descripciones", "Fotos"],
    datasets: [
      {
        label: "Aprobadas",
        data: [72, 65, 58],
        backgroundColor: "rgba(34, 197, 94, 0.72)",
        borderRadius: 8,
      },
      {
        label: "Devueltas",
        data: [18, 25, 32],
        backgroundColor: "rgba(245, 158, 11, 0.72)",
        borderRadius: 8,
      },
      {
        label: "Rechazadas",
        data: [10, 10, 10],
        backgroundColor: "rgba(239, 68, 68, 0.72)",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          color: "#374151",
          font: { weight: 700 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`,
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
        max: 100,
        grid: { color: "rgba(148, 163, 184, 0.18)" },
        ticks: {
          color: "#6B7280",
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <ChartCard
      title="Eficiencia de validación"
      description="Compara el porcentaje de aprobación, devolución y rechazo por tipo de propuesta."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}