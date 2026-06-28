import React from "react";
import styles from "./styles";

export default function PlaceInfoCard({ place, onModerate }) {
  return (
    <section style={styles.card}>
      <div style={styles.headerRow}>
        <h2 style={styles.title}>Información del lugar</h2>

        <div style={styles.statusGroup}>
          <div style={styles.statusBlock}>
            <span style={styles.statusLabel}>Estado de moderación</span>
            <span style={styles.statusPill}>{place.moderationStatus}</span>
          </div>

          <div style={styles.statusBlock}>
            <span style={styles.statusLabel}>Estado de actividad</span>
            <span style={styles.statusPill}>{place.activityStatus}</span>
          </div>

          <button
            type="button"
            onClick={onModerate}
            style={styles.moderateButton}
          >
            Moderar
          </button>
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <span style={styles.label}>Nombre del lugar</span>
        <div style={styles.inputLike}>{place.name}</div>
      </div>

      <div style={styles.fieldGroup}>
        <span style={styles.label}>Descripción</span>
        <div style={styles.textAreaLike}>{place.description}</div>
      </div>

      <div style={styles.infoGrid}>
        <div style={styles.fieldGroup}>
          <span style={styles.label}>Etiqueta</span>
          <div style={styles.inputLike}>{place.tagLabel}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Valoración de Google</span>
          <div style={styles.scoreBox}>{place.googleRating}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Valoración Lsearch</span>
          <div style={styles.scoreBox}>{place.lsearchRating}</div>
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <span style={styles.label}>Subetiquetas</span>

        <div style={styles.chipsRow}>
          {place.subtags?.map((subtag) => (
            <span key={subtag} style={styles.chip}>
              {subtag}
            </span>
          ))}
        </div>
      </div>

      <div style={styles.bottomGrid}>
        <div style={styles.fieldGroup}>
          <span style={styles.label}>Enfoque</span>

          <div style={styles.chipsRow}>
            {place.approaches?.map((approach) => (
              <span key={approach} style={styles.chip}>
                {approach}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Precio</span>
          <div style={styles.inputLike}>{place.price}</div>
        </div>

        <div style={styles.fieldGroup}>
          <span style={styles.label}>Horario</span>
          <div style={styles.inputLike}>{place.schedule}</div>
        </div>
      </div>
    </section>
  );
}