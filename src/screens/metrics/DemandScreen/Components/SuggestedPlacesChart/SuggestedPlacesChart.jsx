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

export default function SuggestedPlacesChart() {
  const data = {
    labels: ["Café nuevo", "Ramen local", "Mirador", "Galería", "Bar terraza"],
    datasets: [
      {
        label: "Sugerencias",
        data: [64, 52, 47, 39, 31],
        backgroundColor: "rgba(139, 92, 246, 0.72)",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} sugerencias`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(148, 163, 184, 0.18)",
        },
        ticks: {
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#374151",
          font: {
            weight: 700,
          },
        },
      },
    },
  };

  return (
    <ChartCard
      title="Lugares más sugeridos"
      description="Ranking de lugares o conceptos solicitados por la comunidad."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}