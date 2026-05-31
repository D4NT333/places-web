import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import ChartCard from "../ChartCard";
import styles from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ReportsStatusChart() {
  const data = {
    labels: ["Pendientes", "En revisión", "Resueltos", "Descartados"],
    datasets: [
      {
        label: "Reportes",
        data: [10, 4, 12, 3],
        backgroundColor: [
          "rgba(245, 158, 11, 0.78)",
          "rgba(59, 130, 246, 0.78)",
          "rgba(34, 197, 94, 0.78)",
          "rgba(107, 114, 128, 0.78)",
        ],
        borderColor: "#FFFFFF",
        borderWidth: 4,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "62%",
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
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <ChartCard
      title="Estado de reportes"
      description="Distribución de reportes según su avance dentro del flujo administrativo."
    >
      <div style={styles.chartBox}>
        <Doughnut data={data} options={options} />
      </div>
    </ChartCard>
  );
}