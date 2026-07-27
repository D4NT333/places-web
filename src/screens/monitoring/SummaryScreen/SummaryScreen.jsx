import React from "react";

import LayoutScreen from "../../../layout";

import SummaryCard from "./Components/SummaryCard";
import EventsChart from "./Components/EventsChart";
import ProjectStatus from "./Components/ProjectStatus";
import TopIssuesTable from "./Components/TopIssuesTable";
import CategoryBreakdown from "./Components/CategoryBreakdown";
import OperationalAlerts from "./Components/OperationalAlerts";

import {
  monitoringSummaryData,
} from "./data";

import styles from "./styles";

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Resumen de monitoreo",
  },
];

export default function MonitoringSummaryScreen() {
  const {
    totals,
    timeline,
    projects,
    topIssues,
    categories,
    operationalAlerts,
  } = monitoringSummaryData;

  return (
    <LayoutScreen
      padding="0"
      showFooter={false}
      breadcrumbs={breadcrumbs}
    >
      <div style={styles.container}>
        <header style={styles.header}>
          <p style={styles.sectionLabel}>
            MONITOREO
          </p>

          <h1 style={styles.title}>
            Resumen del sistema
          </h1>

          <p style={styles.description}>
            Supervisa errores, incidencias y señales operativas de la
            aplicación móvil, el panel web y el backend de Lsearch.
          </p>
        </header>

        <section style={styles.summaryGrid}>
          <SummaryCard
            title="Incidencias abiertas"
            value={totals.openIssues}
            description="Requieren seguimiento"
            status="warning"
          />

          <SummaryCard
            title="Incidencias críticas"
            value={totals.criticalIssues}
            description="Pueden afectar funciones principales"
            status="critical"
          />

          <SummaryCard
            title="Eventos en 24 horas"
            value={totals.eventsLast24Hours}
            description="Registrados por los sistemas"
            status="default"
          />

          <SummaryCard
            title="Usuarios afectados"
            value={totals.affectedUsers}
            description="Durante las últimas 24 horas"
            status="critical"
          />
        </section>

        <section style={styles.primaryGrid}>
          <EventsChart
            data={timeline}
          />

          <ProjectStatus
            projects={projects}
          />
        </section>

        <section style={styles.tableSection}>
          <TopIssuesTable
            issues={topIssues}
          />
        </section>

        <section style={styles.secondaryGrid}>
          <CategoryBreakdown
            categories={categories}
          />

          <OperationalAlerts
            alerts={operationalAlerts}
          />
        </section>
      </div>
    </LayoutScreen>
  );
}