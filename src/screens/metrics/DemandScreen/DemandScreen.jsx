import React from "react";
import  LayoutScreen  from "../../../layout";

import styles from "./styles";

import KpiCard from "./Components/KpiCard";
import SearchTagsChart from "./Components/SearchTagsChart";
import DemandVsOfferChart from "./Components/DemandVsOfferChart";
import SuggestedPlacesChart from "./Components/SuggestedPlacesChart";
import HeatMapPreview from "./Components/HeatMapPreview";

export default function DemandScreen() {
  return (
    <LayoutScreen>
      <main style={styles.page}>
        <section style={styles.headerSection}>
          <div>
            <p style={styles.eyebrow}>Métricas</p>
            <h1 style={styles.title}>Demanda</h1>
            <p style={styles.subtitle}>
              Analiza qué buscan los usuarios, qué zonas muestran mayor
              actividad y dónde existen oportunidades para ampliar la oferta de
              lugares.
            </p>
          </div>
        </section>

        <section style={styles.kpiGrid}>
          <KpiCard
            label="Búsquedas registradas"
            value="12,480"
            helper="+18% esta semana"
          />

          <KpiCard
            label="Zonas activas"
            value="38"
            helper="Con actividad reciente"
          />

          <KpiCard
            label="Lugares sugeridos"
            value="246"
            helper="Por la comunidad"
          />

          <KpiCard
            label="Brechas detectadas"
            value="14"
            helper="Alta demanda / baja oferta"
          />
        </section>

        <section style={styles.chartGrid}>
          <SearchTagsChart />
          <DemandVsOfferChart />
          <SuggestedPlacesChart />
          <HeatMapPreview />
        </section>
      </main>
    </LayoutScreen>
  );
}