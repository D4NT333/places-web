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

export default function ProposalsByTypeChart() {
  const data = {
    labels: ["Lugares", "Descripciones", "Fotos"],
    datasets: [
      {
        label: "Propuestas recibidas",
        data: [48, 35, 45],
        backgroundColor: "rgba(59, 130, 246, 0.72)",
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
          label: (context) => `${context.raw} propuestas`,
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
      title="Propuestas recibidas por tipo"
      description="Compara cuántas propuestas de lugares, descripciones y fotos llegaron durante la semana."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}