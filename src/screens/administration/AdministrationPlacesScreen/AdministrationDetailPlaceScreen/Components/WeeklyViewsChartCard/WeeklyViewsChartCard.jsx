import React, { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const DEFAULT_LABELS = [
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sáb",
  "Dom",
];

export default function WeeklyViewsChartCard({
  data = [],
  totalViews = 0,
  weekLabel = "",
}) {
  const hasDailyData =
    Array.isArray(data) &&
    data.length > 0;

  const labels = hasDailyData
    ? data.map(
        (item) =>
          item.label ||
          item.date ||
          ""
      )
    : DEFAULT_LABELS;

  const values = hasDailyData
    ? data.map(
        (item) =>
          Number(item.views) || 0
      )
    : DEFAULT_LABELS.map(() => 0);

  const chartData = useMemo(
    () => ({
      labels,

      datasets: [
        {
          label: "Vistas",
          data: values,
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 3,
        },
      ],
    }),
    [labels, values]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

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
      <header style={styles.header}>
  <h2 style={styles.title}>
    Vistas en la semana
  </h2>

  <div style={styles.headerMeta}>
    <span style={styles.total}>
      Total: {Number(totalViews) || 0}
    </span>

    {weekLabel && (
      <span style={styles.periodLabel}>
        Semana: {weekLabel}
      </span>
    )}
  </div>
</header>

      <div style={styles.chartBox}>
        <Line
          data={chartData}
          options={chartOptions}
        />
      </div>

      {!hasDailyData && (
        <p style={styles.emptyMessage}>
          Todavía no existen métricas
          separadas por día.
        </p>
      )}
    </section>
  );
}