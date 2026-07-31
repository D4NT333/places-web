import React from "react";

import {
  CalendarCheck2,
  CalendarDays,
  CheckCircle2,
  Database,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import styles from "./styles";

export default function ValidationInfoCard({
  place,
}) {
  return (
    <section style={styles.card}>
      <header style={styles.header}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIcon}>
            <ShieldCheck
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Información de validación
            </h2>

            <p style={styles.subtitle}>
              Datos de origen, creación y aprobación
              administrativa del lugar.
            </p>
          </div>
        </div>

        <span style={styles.validatedPill}>
          <CheckCircle2
            size={40}
            strokeWidth={2.25}
          />

          Validado
        </span>
      </header>

      <div style={styles.grid}>
        <article style={styles.fieldCard}>
          <div style={styles.fieldHeading}>
            <div style={styles.iconBoxGreen}>
              <ShieldCheck
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.label}>
              Validado por
            </span>
          </div>

          <div style={styles.inputLikeGreen}>
            {place.validatedBy}
          </div>
        </article>

        <article style={styles.fieldCard}>
          <div style={styles.fieldHeading}>
            <div style={styles.iconBoxViolet}>
              <Database
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.label}>
              Fuente del lugar
            </span>
          </div>

          <div style={styles.inputLikeViolet}>
            {place.source}
          </div>
        </article>

        <article style={styles.fieldCard}>
          <div style={styles.fieldHeading}>
            <div style={styles.iconBoxBlue}>
              <UserRound
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.label}>
              Creado o propuesto por
            </span>
          </div>

          <div style={styles.inputLike}>
            {place.creatorName}
          </div>
        </article>

        <article style={styles.fieldCard}>
          <div style={styles.fieldHeading}>
            <div style={styles.iconBoxBlue}>
              <CalendarDays
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.label}>
              Fecha de creación
            </span>
          </div>

          <div style={styles.inputLike}>
            {place.createdAt}
          </div>
        </article>

        <article style={styles.fieldCardWide}>
          <div style={styles.fieldHeading}>
            <div style={styles.iconBoxGreen}>
              <CalendarCheck2
                size={40}
                strokeWidth={2.15}
              />
            </div>

            <span style={styles.label}>
              Fecha de validación
            </span>
          </div>

          <div style={styles.inputLikeGreen}>
            {place.validatedAt}
          </div>
        </article>
      </div>

      <div style={styles.footerNote}>
        <CheckCircle2
          size={40}
          strokeWidth={2.15}
        />

        <span>
          Esta información corresponde al proceso de
          incorporación y validación administrativa
          del lugar.
        </span>
      </div>
    </section>
  );
}