import React, { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function WeeklySubmissionsChartCard({
  descriptions = 0,
  photos = 0,
  reports = 0,
  weekLabel = "",
}) {
  const chartData = useMemo(
    () => ({
      labels: [
        "Descripciones",
        "Fotos",
        "Reportes",
      ],

      datasets: [
        {
          label: "Total",

          data: [
            Number(descriptions) || 0,
            Number(photos) || 0,
            Number(reports) || 0,
          ],

          borderWidth: 1,
          borderRadius: 8,
        },
      ],
    }),
    [
      descriptions,
      photos,
      reports,
    ]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 0,

    plugins: {
      tooltip: {
        enabled: true,
      },

      legend: {
        display: true,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          font: {
            size: 11,
            weight: "700",
          },
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,

          font: {
            size: 11,
            weight: "700",
          },
        },
      },
    },
  };

  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <h2 style={styles.title}>
          Contribuciones y reportes
        </h2>

        {weekLabel && (
          <span style={styles.periodLabel}>
            Semana: {weekLabel}
          </span>
        )}
      </header>

      <div style={styles.chartBox}>
        <Bar
          data={chartData}
          options={chartOptions}
        />
      </div>
    </section>
  );
}