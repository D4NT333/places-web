import React from "react";
import LayoutScreen from "../../../../layout";
import styles from "./styles";

import MediaBox from "./Components/MediaBox";
import InfoField from "./Components/InfoField";
import Pill from "./Components/Pill";
import ActionButtons from "./Components/ActionButtons";

export default function PlaceDetailSubmissionScreen() {
  return (
    <LayoutScreen>
      <main style={styles.screen}>
        <section style={styles.contentArea}>
          <aside style={styles.leftSection}>
            <MediaBox label="Fotos" type="photos" />
            <MediaBox label="Ubicación" type="location" />
          </aside>

          <div style={styles.verticalDivider} />

          <section style={styles.rightSection}>
            <div style={styles.topRow}>
              <div style={styles.infoGroup}>
                <InfoField label="Creado el:" />
                <InfoField label="Enviado por:" />
              </div>

              <ActionButtons />
            </div>

            <div style={styles.nameStatusRow}>
              <Pill label="Nombre" size="large" />
              <Pill label="Estado" size="large" />
            </div>

            <div style={styles.descriptionBox}>Descripción nueva</div>

            <div style={styles.chipsRow}>
              <Pill label="Etiqueta" />
              <Pill label="Subetiqueta" />
              <Pill label="Subetiqueta" />
              <Pill label="Approach" />
            </div>

            <div style={styles.chipsRow}>
              <Pill label="Precio rango" size="medium" />
              <Pill label="Horario" size="medium" />
            </div>
          </section>
        </section>
      </main>
    </LayoutScreen>
  );
}