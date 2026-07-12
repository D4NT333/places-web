import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

function formatWeekLabel(week, selectedWeekStart) {
  if (!week?.start || !week?.end) {
    return "Semana";
  }

  const start = new Date(
    `${week.start}T00:00:00`
  );

  const end = new Date(
    `${week.end}T00:00:00`
  );

  const startLabel =
    new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "short",
    }).format(start);

  const endLabel =
    new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(end);

  const isSelected =
    week.start === selectedWeekStart;

  return `${
    isSelected ? "Semana seleccionada: " : ""
  }${startLabel} - ${endLabel}`;
}

export default function ActivitySummaryCard({
  activity,
  selectedWeekStart,
  loading = false,
  onWeekChange,
}) {
  const weeklyActivity =
    activity?.weeklyActivity || [];

  const availableWeeks =
    activity?.availableWeeks || [];

  const chartItems =
    weeklyActivity.length > 0
      ? weeklyActivity
      : [
          { label: "Lun", value: 0 },
          { label: "Mar", value: 0 },
          { label: "Mié", value: 0 },
          { label: "Jue", value: 0 },
          { label: "Vie", value: 0 },
          { label: "Sáb", value: 0 },
          { label: "Dom", value: 0 },
        ];

  const chartData = {
    labels: chartItems.map(
      (item) => item.label
    ),

    datasets: [
      {
        label: "Actividad",
        data: chartItems.map(
          (item) => item.value
        ),
        fill: true,
        tension: 0.35,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        displayColors: false,

        callbacks: {
          title: (tooltipItems) => {
            const index =
              tooltipItems[0]?.dataIndex ?? 0;

            return chartItems[index]?.label ||
              "Día";
          },

          label: (context) => {
            const index =
              context.dataIndex;

            const item =
              chartItems[index] || {};

            const lines = [
              `Actividad total: ${
                item.value || 0
              }`,
            ];

            if (
              item.places !== undefined
            ) {
              lines.push(
                `Lugares: ${
                  item.places || 0
                }`
              );
            }

            if (
              item.descriptions !==
              undefined
            ) {
              lines.push(
                `Descripciones: ${
                  item.descriptions || 0
                }`
              );
            }

            if (
              item.photos !== undefined
            ) {
              lines.push(
                `Fotografías: ${
                  item.photos || 0
                }`
              );
            }

            if (
              item.reports !== undefined
            ) {
              lines.push(
                `Reportes: ${
                  item.reports || 0
                }`
              );
            }

            return lines;
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
          font: {
            size: 11,
            weight: 700,
          },
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,

          font: {
            size: 11,
            weight: 700,
          },
        },
      },
    },
  };

  return (
    <section style={styles.card}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>
            Actividad
          </h2>

          <p style={styles.total}>
            Aportes totales:{" "}
            {activity?.total || 0}
          </p>
        </div>

        <select
          value={
            selectedWeekStart ||
            activity?.selectedWeek?.start ||
            ""
          }
          style={styles.weekSelect}
          disabled={loading}
          onChange={(event) =>
            onWeekChange?.(
              event.target.value
            )
          }
        >
          {availableWeeks.map(
            (week) => (
              <option
                key={week.start}
                value={week.start}
              >
                {formatWeekLabel(
                  week,
                  selectedWeekStart
                )}
              </option>
            )
          )}
        </select>
      </div>

      <div style={styles.metricsRow}>
        <span style={styles.metricChip}>
          Lugares:{" "}
          <strong>
            {activity?.placesSent || 0}
          </strong>
        </span>

        <span style={styles.metricChip}>
          Descripciones:{" "}
          <strong>
            {activity?.descriptionsSent ||
              0}
          </strong>
        </span>

        <span style={styles.metricChip}>
          Fotografías:{" "}
          <strong>
            {activity?.photosSent || 0}
          </strong>
        </span>

        <span style={styles.metricChip}>
          Reportes:{" "}
          <strong>
            {activity?.reportsSent || 0}
          </strong>
        </span>
      </div>

      <div style={styles.chartBox}>
        {loading ? (
          <div style={styles.loadingState}>
            Cargando semana...
          </div>
        ) : (
          <div style={styles.chartWrapper}>
            <Line
              data={chartData}
              options={chartOptions}
            />
          </div>
        )}
      </div>
    </section>
  );
}