import React from "react";

import {
  BadgeDollarSign,
  CheckCircle2,
  CircleGauge,
  Clock3,
  FileText,
  Layers3,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  Star,
  Tags,
  Type,
} from "lucide-react";

import styles from "./styles";

function getModerationStatusStyle(status) {
  const statusStyles = {
    published:
      styles.statusPillGreen,

    approved:
      styles.statusPillGreen,

    in_review:
      styles.statusPillYellow,

    warned:
      styles.statusPillOrange,

    hidden:
      styles.statusPillRed,

    disabled:
      styles.statusPillRed,

    deleted:
      styles.statusPillRed,
  };

  return (
    statusStyles[status] ||
    styles.statusPillDefault
  );
}

function getActivityStatusStyle(status) {
  const statusStyles = {
    active:
      styles.statusPillGreen,

    pending:
      styles.statusPillBlue,

    low_activity:
      styles.statusPillYellow,

    no_activity:
      styles.statusPillOrange,

    forgotten:
      styles.statusPillRed,

    hidden:
      styles.statusPillRed,

    invisible:
      styles.statusPillPurple,
  };

  return (
    statusStyles[status] ||
    styles.statusPillDefault
  );
}

export default function PlaceInfoCard({
  place,
  onModerate,
}) {
  return (
    <section style={styles.card}>
      <header style={styles.headerRow}>
        <div style={styles.titleGroup}>
          <div style={styles.titleIconBox}>
            <MapPinned
              size={50}
              strokeWidth={2.15}
            />
          </div>

          <div style={styles.titleText}>
            <h2 style={styles.title}>
              Información del lugar
            </h2>

            <p style={styles.subtitle}>
              Datos generales, clasificación y
              estado actual del lugar.
            </p>
          </div>
        </div>

        <div style={styles.statusGroup}>
          <div style={styles.statusBlock}>
            <div style={styles.statusHeading}>
              <ShieldCheck
                size={31}
                strokeWidth={2.2}
              />

              <span style={styles.statusLabel}>
                Estado de moderación
              </span>
            </div>

            <span
              style={{
                ...styles.statusPill,

                ...getModerationStatusStyle(
                  place.moderationStatusId,
                ),
              }}
            >
              <CheckCircle2
                size={31}
                strokeWidth={2.3}
              />

              {place.moderationStatus}
            </span>
          </div>

          <div style={styles.statusBlock}>
            <div style={styles.statusHeading}>
              <CircleGauge
                size={31}
                strokeWidth={2.2}
              />

              <span style={styles.statusLabel}>
                Estado de actividad
              </span>
            </div>

            <span
              style={{
                ...styles.statusPill,

                ...getActivityStatusStyle(
                  place.activityStatusId,
                ),
              }}
            >
              <CheckCircle2
                size={31}
                strokeWidth={2.3}
              />

              {place.activityStatus}
            </span>
          </div>

          <button
            type="button"
            onClick={onModerate}
            style={styles.moderateButton}
          >
            <ShieldCheck
              size={31}
              strokeWidth={2.2}
            />

            Moderar
          </button>
        </div>
      </header>

      <div style={styles.content}>
        <section style={styles.primaryFields}>
          <article style={styles.fieldCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxGreen}>
                <Type
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Nombre del lugar
              </span>
            </div>

            <div style={styles.inputLike}>
              {place.name}
            </div>
          </article>

          <article style={styles.fieldCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxBlue}>
                <MessageSquareText
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Descripción
              </span>
            </div>

            <div style={styles.textAreaLike}>
              {place.description}
            </div>
          </article>
        </section>

        <section style={styles.infoGrid}>
          <article style={styles.infoCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxGreen}>
                <Tags
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Etiqueta principal
              </span>
            </div>

            <div style={styles.tagBox}>
              {place.tagLabel}
            </div>
          </article>

          <article style={styles.infoCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxOrange}>
                <Star
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Valoración de Google
              </span>
            </div>

            <div style={styles.scoreBox}>
              <strong style={styles.scoreValue}>
                {place.googleRating.toFixed(1)}
              </strong>

              <span style={styles.scoreMaximum}>
                / 5
              </span>
            </div>

            <span style={styles.ratingCount}>
              {place.googleRatingCount} valoraciones
            </span>
          </article>

          <article style={styles.infoCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxBlue}>
                <Star
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Valoración Lsearch
              </span>
            </div>

            <div style={styles.scoreBox}>
              <strong style={styles.scoreValue}>
                {place.lsearchRating.toFixed(1)}
              </strong>

              <span style={styles.scoreMaximum}>
                / 5
              </span>
            </div>

            <span style={styles.ratingCount}>
              {place.lsearchRatingCount} valoraciones
            </span>
          </article>
        </section>

        <section style={styles.classificationGrid}>
          <article style={styles.classificationCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxBlue}>
                <Layers3
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Subetiquetas
              </span>
            </div>

            <div style={styles.chipsContent}>
              <div style={styles.chipsRow}>
                {place.subtags?.length > 0 ? (
                  place.subtags.map((subtag) => (
                    <span
                      key={subtag}
                      style={styles.chip}
                    >
                      {subtag}
                    </span>
                  ))
                ) : (
                  <span style={styles.emptyChip}>
                    Sin subetiquetas
                  </span>
                )}
              </div>
            </div>
          </article>

          <article style={styles.classificationCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxViolet}>
                <CircleGauge
                  size={40}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Enfoque
              </span>
            </div>

            <div style={styles.chipsContent}>
              <div style={styles.chipsRow}>
                {place.approaches?.length > 0 ? (
                  place.approaches.map(
                    (approach) => (
                      <span
                        key={approach}
                        style={styles.approachChip}
                      >
                        {approach}
                      </span>
                    ),
                  )
                ) : (
                  <span style={styles.emptyChip}>
                    Sin enfoques
                  </span>
                )}
              </div>
            </div>
          </article>
        </section>

        <section style={styles.bottomGrid}>
          <article style={styles.bottomCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxBlue}>
                <BadgeDollarSign
                  size={50}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Precio
              </span>
            </div>

            <div style={styles.inputLike}>
              {place.price}
            </div>
          </article>

          <article style={styles.bottomCard}>
            <div style={styles.fieldHeading}>
              <div style={styles.iconBoxOrange}>
                <Clock3
                  size={50}
                  strokeWidth={2.15}
                />
              </div>

              <span style={styles.label}>
                Horario
              </span>
            </div>

            <div style={styles.scheduleBox}>
              {place.schedule}
            </div>
          </article>
        </section>

      </div>
    </section>
  );
}