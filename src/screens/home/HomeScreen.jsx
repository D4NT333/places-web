import React, { useState } from "react";
import LayoutScreen from "../../layout";
import styles from "./styles";

import {Header} from "../../components";
import {Footer} from "../../components";
import {Panel} from "../../components";
import StatCard from "./components/StatCard";
import ActivityPanel from "./components/ActivityPanel";
import InfoPanel from "./components/InfoPanel";

export default function HomeScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: "Usuarios activos", value: "1,284", subtitle: "esta semana" },
    { title: "Nuevos lugares", value: "73", subtitle: "esta semana" },
    { title: "Lugares pendientes", value: "18", subtitle: "de aprobación" },
    { title: "Errores críticos", value: "4", subtitle: "requieren atención" },
  ];

  const activities = [
    "Se aprobó un nuevo lugar en Zapopan",
    "Se rechazó una propuesta de fotografía",
    "Se actualizó la información de un restaurante",
    "Se detectó un error en la sincronización de Places",
  ];

  return (
    <LayoutScreen
      header={<Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />}
      footer={<Footer />}
      sidebar={sidebarOpen ? <Panel /> : null}
      sidebarWidth="250px"
      padding="1.25rem"
      bg="#efefef"
      scroll
      stickyHeader
    >
      <div style={styles.container}>
        <section style={styles.statsGrid}>
          {stats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
            />
          ))}
        </section>

        <section style={styles.mainGrid}>
          <ActivityPanel
            title="Historial de Actividad Reciente"
            items={activities}
          />

          <div style={styles.rightColumn}>
            <InfoPanel
              title="API refresh en x días"
              text="Próxima actualización programada de lugares conectados con Google Places."
            />

            <InfoPanel
              title="Uso de cuota de Places"
              text="Aquí luego puedes mostrar porcentaje consumido, requests del día y alertas."
            />
          </div>
        </section>
      </div>
    </LayoutScreen>
  );
}