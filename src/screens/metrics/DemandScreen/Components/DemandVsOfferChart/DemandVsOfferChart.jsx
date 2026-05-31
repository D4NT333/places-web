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

export default function DemandVsOfferChart() {
  const data = {
    labels: ["Americana", "Centro", "Chapultepec", "Zapopan", "Tlaquepaque"],
    datasets: [
      {
        label: "Demanda",
        data: [380, 340, 300, 280, 230],
        backgroundColor: "rgba(249, 115, 22, 0.72)",
        borderRadius: 8,
      },
      {
        label: "Oferta",
        data: [210, 290, 190, 260, 130],
        backgroundColor: "rgba(34, 197, 94, 0.72)",
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
          font: {
            weight: 700,
          },
        },
      },
    },
    scales: {
      x: {
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
      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.18)",
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <ChartCard
      title="Demanda vs oferta por zona"
      description="Compara zonas donde hay muchas búsquedas, pero pocos lugares disponibles o validados."
    >
      <div style={styles.chartBox}>
        <Bar data={data} options={options} />
      </div>
    </ChartCard>
  );
}