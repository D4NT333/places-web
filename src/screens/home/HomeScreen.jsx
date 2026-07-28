import React from "react";
import LayoutScreen from "../../layout";
import styles from "./styles";

import ActivityPanel from "./components/ActivityPanel";
import InfoPanel from "./components/InfoPanel";
import StatsOverview from "./components/StatsOverview";

export default function HomeScreen() {
  const stats = [
    {
      title: "Usuarios activos",
      value: "1,284",
      subtitle: "esta semana",
    },
    {
      title: "Nuevos lugares",
      value: "73",
      subtitle: "esta semana",
    },
    {
      title: "Lugares pendientes",
      value: "18",
      subtitle: "de aprobación",
    },
    {
      title: "Errores críticos",
      value: "4",
      subtitle: "requieren atención",
    },
  ];

  const activities = [
    "Se aprobó un nuevo lugar en Zapopan",
    "Se rechazó una propuesta de fotografía",
    "Se actualizó la información de un restaurante",
    "Se detectó un error en la sincronización de Places",
  ];

  return (
    <LayoutScreen
      padding="1.25rem"
      bg="transparent"
      scroll
      stickyHeader
      breadcrumbs={[
        {
          label: "Inicio",
        },
      ]}
    >
      <div style={styles.container}>
        <StatsOverview stats={stats} />

        <section style={styles.mainGrid}>
          <ActivityPanel
            title="Historial de Actividad Reciente"
            items={activities}
          />

          <div style={styles.rightColumn}>
            <InfoPanel
              title="Estado del sistema"
              content="Aquí puedes mostrar alertas, estado de servicios o tareas internas."
            />

            <InfoPanel
              title="Resumen general"
              content="Este espacio puede servir para indicadores rápidos del panel."
            />
          </div>
        </section>
      </div>
    </LayoutScreen>
  );
}