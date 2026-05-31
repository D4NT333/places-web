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

export default function ProposalStatusByTypeChart() {
  const data = {
    labels: ["Lugares", "Descripciones", "Fotos"],
    datasets: [
      {
        label: "En revisión",
        data: [12, 8, 14],
        backgroundColor: "rgba(59, 130, 246, 0.72)",
        borderRadius: 6,
      },
      {
        label: "Aprobadas",
        data: [24, 19, 21],
        backgroundColor: "rgba(34, 197, 94, 0.72)",
        borderRadius: 6,
      },
      {
        label: "Devueltas",
        data: [7, 4, 6],
        backgroundColor: "rgba(245, 158, 11, 0.72)",
        borderRadius: 6,
      },
      {
        label: "Rechazadas",
        data: [5, 3, 4],
        backgroundColor: "rgba(239, 68, 68, 0.72)",
        borderRadius: 6,
      },
      {
        label: "Corregidas",
        data: [4, 2, 3],
        backgroundColor: "rgba(139, 92, 246, 0.72)",
        borderRadius: 6,
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
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: "#374151",
          font: { weight: 700 },
        },
      },
      y: {
        stacked: true,
        grid: { color: "rgba(148, 163, 184, 0.18)" },
        ticks: { color: "#6B7280" },
      },
    },
  };

  return (
    <ChartCard
      title="Estado de propuestas por tipo"
      description="Muestra cómo se distribuyen los estados de revisión entre lugares, descripciones y fotos."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}