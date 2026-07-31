import React, {
  useMemo,
} from "react";

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

import {
  BarChart3,
  CalendarRange,
  Eye,
  LineChart,
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
  Legend,
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

  const normalizedTotalViews =
    Number(totalViews) || 0;

  const labels = useMemo(() => {
    if (!hasDailyData) {
      return DEFAULT_LABELS;
    }

    return data.map(
      (item) =>
        item.label ||
        item.date ||
        "",
    );
  }, [
    data,
    hasDailyData,
  ]);

  const values = useMemo(() => {
    if (!hasDailyData) {
      return DEFAULT_LABELS.map(
        () => 0,
      );
    }

    return data.map(
      (item) =>
        Number(item.views) ||
        0,
    );
  }, [
    data,
    hasDailyData,
  ]);

  const chartData = useMemo(
    () => ({
      labels,

      datasets: [
        {
          label: "Vistas",

          data: values,

          fill: true,
          tension: 0.38,

          borderColor:
            "#2176E5",

          backgroundColor:
            "rgba(33, 118, 229, 0.12)",

          pointBackgroundColor:
            "#FFFFFF",

          pointBorderColor:
            "#2176E5",

          pointHoverBackgroundColor:
            "#2176E5",

          pointHoverBorderColor:
            "#FFFFFF",

          pointBorderWidth: 2,
          pointHoverBorderWidth: 3,

          borderWidth: 3,

          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    }),
    [
      labels,
      values,
    ],
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 0,

      interaction: {
        mode: "index",
        intersect: false,
      },

      plugins: {
        tooltip: {
          enabled: true,

          backgroundColor:
            "rgba(11, 49, 95, 0.94)",

          titleColor:
            "#FFFFFF",

          bodyColor:
            "#FFFFFF",

          borderColor:
            "rgba(255, 255, 255, 0.2)",

          borderWidth: 1,

          padding: 11,
          cornerRadius: 9,

          displayColors: false,

          titleFont: {
            size: 30,
            weight: "700",
          },

          bodyFont: {
            size: 30,
            weight: "700",
          },

          callbacks: {
            label(context) {
              return ` Vistas: ${context.parsed.y}`;
            },
          },
        },

        legend: {
          display: false,
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
            color: "#496985",

            font: {
              size: 33,
              weight: "700",
            },

            padding: 8,
          },
        },

        y: {
          beginAtZero: true,

          border: {
            display: false,
          },

          grid: {
            color:
              "rgba(148, 177, 204, 0.22)",

            drawTicks: false,
          },

          ticks: {
            precision: 0,

            color: "#6A829B",

            font: {
              size: 30,
              weight: "700",
            },

            padding: 8,
          },
        },
      },
    }),
    [],
  );

  const highestDailyViews =
    values.length > 0
      ? Math.max(...values)
      : 0;

  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <LineChart
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Vistas en la semana
            </h2>

            <p style={styles.subtitle}>
              Evolución diaria de las visitas al
              detalle de este lugar.
            </p>
          </div>
        </div>

        <div style={styles.headerMeta}>
          <span style={styles.total}>
            <Eye
              size={40}
              strokeWidth={2.2}
            />

            {normalizedTotalViews} vistas
          </span>

          {weekLabel ? (
            <span style={styles.periodLabel}>
              <CalendarRange
                size={40}
                strokeWidth={2.2}
              />

              {weekLabel}
            </span>
          ) : null}
        </div>
      </header>

      <div style={styles.content}>
        <div style={styles.chartBox}>
          <Line
            data={chartData}
            options={chartOptions}
          />
        </div>

        <div style={styles.summaryGrid}>
          <article style={styles.totalSummary}>
            <div style={styles.totalSummaryIcon}>
              <Eye
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.summaryContent}>
              <span style={styles.summaryLabel}>
                Vistas totales
              </span>

              <strong style={styles.summaryValue}>
                {normalizedTotalViews}
              </strong>
            </div>
          </article>

          <article style={styles.peakSummary}>
            <div style={styles.peakSummaryIcon}>
              <TrendingUp
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.summaryContent}>
              <span style={styles.summaryLabel}>
                Máximo diario
              </span>

              <strong style={styles.summaryValue}>
                {highestDailyViews}
              </strong>
            </div>
          </article>

          <article style={styles.daysSummary}>
            <div style={styles.daysSummaryIcon}>
              <BarChart3
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <div style={styles.summaryContent}>
              <span style={styles.summaryLabel}>
                Días registrados
              </span>

              <strong style={styles.summaryValue}>
                {hasDailyData
                  ? data.length
                  : 0}
              </strong>
            </div>
          </article>
        </div>

        {!hasDailyData ? (
          <div style={styles.emptyMessage}>
            <LineChart
              size={40}
              strokeWidth={2.15}
            />

            <span>
              Todavía no existen métricas separadas
              por día.
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}