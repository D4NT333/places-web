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

export default function ReviewTimeChart() {
  const data = {
    labels: ["Lugares", "Descripciones", "Fotos"],
    datasets: [
      {
        label: "Días promedio",
        data: [2.4, 1.3, 0.8],
        backgroundColor: "rgba(14, 165, 233, 0.72)",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} días promedio`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(148, 163, 184, 0.18)" },
        ticks: {
          color: "#6B7280",
          callback: (value) => `${value} d`,
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          color: "#374151",
          font: { weight: 700 },
        },
      },
    },
  };

  return (
    <ChartCard
      title="Tiempo promedio de revisión"
      description="Tiempo estimado que tarda cada tipo de propuesta en recibir una resolución administrativa."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}