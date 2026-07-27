import React from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import {
  Line,
} from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function EventsChart({
  data,
}) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 18,

          font: {
            size: 10,
          },
        },
      },

      tooltip: {
        callbacks: {
          label(context) {
            return `${context.dataset.label}: ${context.parsed.y} eventos`;
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
          color: "#667085",

          font: {
            size: 9,
          },
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,
          color: "#667085",

          font: {
            size: 9,
          },
        },

        grid: {
          color: "#edf0f3",
        },
      },
    },
  };

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Evolución de eventos
        </h2>

        <p style={styles.description}>
          Eventos registrados durante los últimos siete días.
        </p>
      </div>

      <div style={styles.chartContainer}>
        <Line
          data={data}
          options={options}
        />
      </div>
    </section>
  );
}