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

import {
  CalendarDays,
  Camera,
  FileText,
  Flag,
  MapPin,
  TrendingUp,
} from "lucide-react";

import {
  Line,
} from "react-chartjs-2";

import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

function formatWeekLabel(
  week,
  selectedWeekStart,
) {
  if (
    !week?.start ||
    !week?.end
  ) {
    return "Semana";
  }

  const start = new Date(
    `${week.start}T00:00:00`,
  );

  const end = new Date(
    `${week.end}T00:00:00`,
  );

  const startLabel =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
      },
    ).format(start);

  const endLabel =
    new Intl.DateTimeFormat(
      "es-MX",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      },
    ).format(end);

  const isSelected =
    week.start ===
    selectedWeekStart;

  return `${
    isSelected
      ? "Semana seleccionada: "
      : ""
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
          {
            label: "Lun",
            value: 0,
          },
          {
            label: "Mar",
            value: 0,
          },
          {
            label: "Mié",
            value: 0,
          },
          {
            label: "Jue",
            value: 0,
          },
          {
            label: "Vie",
            value: 0,
          },
          {
            label: "Sáb",
            value: 0,
          },
          {
            label: "Dom",
            value: 0,
          },
        ];

  const chartData = {
    labels: chartItems.map(
      (item) => item.label,
    ),

    datasets: [
      {
        label: "Actividad",

        data: chartItems.map(
          (item) => item.value,
        ),

        fill: true,

        tension: 0.42,

        borderWidth: 3,

        pointRadius: 5,

        pointHoverRadius: 7,

        pointBackgroundColor:
          "#2176e5",

        pointBorderColor:
          "#ffffff",

        pointBorderWidth: 3,

        borderColor:
          "#2176e5",

        backgroundColor:
          "rgba(92, 161, 239, 0.18)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        displayColors: false,

        backgroundColor:
          "rgba(8, 43, 89, 0.95)",

        titleColor: "#ffffff",

        bodyColor: "#eaf4ff",

        padding: 13,

        cornerRadius: 12,

        titleFont: {
          size: 40,
          weight: 900,
        },

        bodyFont: {
          size: 33,
          weight: 700,
        },

        callbacks: {
          title: (
            tooltipItems,
          ) => {
            const index =
              tooltipItems[0]
                ?.dataIndex ?? 0;

            return (
              chartItems[index]
                ?.label ||
              "Día"
            );
          },

          label: (
            context,
          ) => {
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
              item.places !==
              undefined
            ) {
              lines.push(
                `Lugares: ${
                  item.places || 0
                }`,
              );
            }

            if (
              item.descriptions !==
              undefined
            ) {
              lines.push(
                `Descripciones: ${
                  item.descriptions ||
                  0
                }`,
              );
            }

            if (
              item.photos !==
              undefined
            ) {
              lines.push(
                `Fotografías: ${
                  item.photos || 0
                }`,
              );
            }

            if (
              item.reports !==
              undefined
            ) {
              lines.push(
                `Reportes: ${
                  item.reports || 0
                }`,
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

        border: {
          display: false,
        },

        ticks: {
          color: "#637c98",

          padding: 8,

          font: {
            size: 30,
            weight: 800,
          },
        },
      },

      y: {
        beginAtZero: true,

        border: {
          display: false,
        },

        grid: {
          color:
            "rgba(175, 202, 227, 0.35)",

          drawTicks: false,
        },

        ticks: {
          precision: 0,

          color: "#637c98",

          padding: 10,

          font: {
            size: 24,
            weight: 800,
          },
        },
      },
    },
  };

  const metrics = [
    {
      key: "places",

      label: "Lugares",

      value:
        activity?.placesSent || 0,

      icon: MapPin,

      style:
        styles.metricBlue,

      iconStyle:
        styles.metricIconBlue,
    },

    {
      key: "descriptions",

      label: "Descripciones",

      value:
        activity
          ?.descriptionsSent || 0,

      icon: FileText,

      style:
        styles.metricGreen,

      iconStyle:
        styles.metricIconGreen,
    },

    {
      key: "photos",

      label: "Fotografías",

      value:
        activity?.photosSent || 0,

      icon: Camera,

      style:
        styles.metricPurple,

      iconStyle:
        styles.metricIconPurple,
    },

    {
      key: "reports",

      label: "Reportes",

      value:
        activity?.reportsSent || 0,

      icon: Flag,

      style:
        styles.metricOrange,

      iconStyle:
        styles.metricIconOrange,
    },
  ];

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.heading}>
          <div style={styles.headerIcon}>
            <TrendingUp
              size={50}
              strokeWidth={2.1}
            />
          </div>

          <div style={styles.headerText}>
            <h2 style={styles.title}>
              Actividad semanal
            </h2>

            <p style={styles.total}>
              Aportes totales:{" "}
              <strong>
                {activity?.total || 0}
              </strong>
            </p>
          </div>
        </div>

        <div style={styles.weekControl}>
          <CalendarDays
            size={40}
            strokeWidth={2.1}
          />

          <select
            value={
              selectedWeekStart ||
              activity
                ?.selectedWeek
                ?.start ||
              ""
            }
            style={styles.weekSelect}
            disabled={loading}
            onChange={(event) =>
              onWeekChange?.(
                event.target.value,
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
                    selectedWeekStart,
                  )}
                </option>
              ),
            )}
          </select>
        </div>
      </header>

      <div style={styles.metricsGrid}>
        {metrics.map(
          (metric) => {
            const Icon =
              metric.icon;

            return (
              <div
                key={metric.key}
                style={{
                  ...styles.metricCard,
                  ...metric.style,
                }}
              >
                <div
                  style={{
                    ...styles.metricIcon,
                    ...metric.iconStyle,
                  }}
                >
                  <Icon
                    size={50}
                    strokeWidth={2.2}
                  />
                </div>

                <div
                  style={
                    styles.metricContent
                  }
                >
                  <strong
                    style={
                      styles.metricValue
                    }
                  >
                    {metric.value}
                  </strong>

                  <span
                    style={
                      styles.metricLabel
                    }
                  >
                    {metric.label}
                  </span>
                </div>
              </div>
            );
          },
        )}
      </div>

      <div style={styles.chartBox}>
        <div style={styles.chartHeader}>
          <div>
            <span style={styles.chartEyebrow}>
              Rendimiento
            </span>

            <h3 style={styles.chartTitle}>
              Aportes realizados por día
            </h3>
          </div>

          <span style={styles.chartLegend}>
            <span style={styles.legendDot} />

            Actividad
          </span>
        </div>

        {loading ? (
          <div style={styles.loadingState}>
            <CalendarDays
              size={40}
              strokeWidth={1.8}
            />

            <strong>
              Cargando semana...
            </strong>
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