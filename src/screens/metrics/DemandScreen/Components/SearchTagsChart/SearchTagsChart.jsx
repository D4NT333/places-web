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

export default function SearchTagsChart() {
  const data = {
    labels: ["Cafeterías", "Comida japonesa", "Parques", "Museos", "Bares"],
    datasets: [
      {
        label: "Búsquedas",
        data: [420, 360, 310, 250, 210],
        backgroundColor: "rgba(59, 130, 246, 0.72)",
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
          label: (context) => `${context.raw} búsquedas`,
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
      title="Etiquetas más buscadas"
      description="Muestra qué tipos de lugares tienen mayor intención de búsqueda por parte de los usuarios."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}