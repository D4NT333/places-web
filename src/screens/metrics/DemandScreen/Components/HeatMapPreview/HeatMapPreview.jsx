import React from "react";

import ChartCard from "../ChartCard";
import styles from "./styles";

export default function HeatMapPreview() {
  return (
    <ChartCard
      title="Mapa de calor de demanda"
      description="Vista preliminar de zonas con mayor actividad. Después se conectará con búsquedas, sugerencias y lugares guardados."
    >
      <div style={styles.mapBox}>
        <div style={styles.grid} />

        <div style={{ ...styles.point, ...styles.pointLow }} />
        <div style={{ ...styles.point, ...styles.pointMedium }} />
        <div style={{ ...styles.point, ...styles.pointHigh }} />
        <div style={{ ...styles.point, ...styles.pointWarm }} />
      </div>

      <div style={styles.legend}>
        <span>Baja</span>
        <div style={styles.legendBar} />
        <span>Alta demanda</span>
      </div>
    </ChartCard>
  );
}