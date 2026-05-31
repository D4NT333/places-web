import React from "react";
import  LayoutScreen  from "../../../layout";

import styles from "./styles";

import KpiCard from "./Components/KpiCard";
import ProposalsByTypeChart from "./Components/ProposalsByTypeChart";
import ProposalStatusByTypeChart from "./Components/ProposalStatusByTypeChart";
import ValidationEfficiencyChart from "./Components/ValidationEfficiencyChart";
import ReviewTimeChart from "./Components/ReviewTimeChart";
import ReportsByCategoryChart from "./Components/ReportsByCategoryChart";
import ReportsStatusChart from "./Components/ReportsStatusChart";

export default function OperationsScreen() {
  return (
    <LayoutScreen>
      <main style={styles.page}>
        <section style={styles.headerSection}>
          <div>
            <p style={styles.eyebrow}>Métricas</p>
            <h1 style={styles.title}>Operaciones</h1>
            <p style={styles.subtitle}>
              Supervisa el flujo administrativo de Lsearch: propuestas recibidas,
              estados de revisión, eficiencia de validación, tiempos promedio y
              reportes generados por usuarios.
            </p>
          </div>
        </section>

        <section style={styles.kpiGrid}>
          <KpiCard
            label="Propuestas recibidas"
            value="128"
            helper="+16% esta semana"
          />

          <KpiCard
            label="Pendientes de revisión"
            value="34"
            helper="Incluye corregidas"
          />

          <KpiCard
            label="Tiempo promedio"
            value="1.8 días"
            helper="Validación semanal"
          />

          <KpiCard
            label="Reportes recibidos"
            value="25"
            helper="+6 nuevos"
          />
        </section>

        <section style={styles.chartGrid}>
          <ProposalsByTypeChart />
          <ProposalStatusByTypeChart />
          <ValidationEfficiencyChart />
          <ReviewTimeChart />
          <ReportsByCategoryChart />
          <ReportsStatusChart />
        </section>
      </main>
    </LayoutScreen>
  );
}