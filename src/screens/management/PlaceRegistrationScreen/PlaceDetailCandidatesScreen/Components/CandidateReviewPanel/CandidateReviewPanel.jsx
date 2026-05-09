import React, { useState } from "react";
import styles from "./styles";

const mockTags = [
  "Gastronomía",
  "Cultura",
  "Entretenimiento",
  "Compras",
];

const mockSubtags = [
  "Café",
  "Restaurante",
  "Local",
  "Especialidad",
];

const mockApproaches = [
  "Familiar",
  "Romántico",
  "Local",
  "Rápido",
];

const mockPrices = [
  "Gratis",
  "$",
  "$$",
  "$$$",
];

const mockSchedules = [
  "Horario comercial",
  "Nocturno",
  "Fines de semana",
  "Por confirmar",
];

function formatGoogleType(type) {
  if (!type) return "Sin tipo";

  return type.replaceAll("_", " ");
}

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return map[status] || "Pendiente";
}

export default function CandidateReviewPanel({
  candidate,
  name,
  setName,
  description,
  setDescription,
  genericDescriptions,
  onSelectDescription,
  selectedTag,
  setSelectedTag,
  selectedSubtags,
  onToggleSubtag,
  selectedApproach,
  setSelectedApproach,
  selectedPrice,
  setSelectedPrice,
  selectedSchedule,
  setSelectedSchedule,
  importedAtLabel,
  status,
}) {
  const [showDescriptions, setShowDescriptions] = useState(false);

  return (
    <section style={styles.reviewCard}>
      <div style={styles.reviewTopGrid}>
        <div style={styles.readonlyField}>
          <span style={styles.readonlyLabel}>Importado el</span>
          <strong style={styles.readonlyValue}>{importedAtLabel}</strong>
        </div>

        <div style={styles.readonlyField}>
          <span style={styles.readonlyLabel}>Tipo de Google</span>
          <strong style={styles.readonlyValue}>
            {formatGoogleType(candidate.googleMainType)}
          </strong>
        </div>

        <div style={styles.readonlyField}>
          <span style={styles.readonlyLabel}>Estado</span>
          <strong style={styles.readonlyValue}>
            {getStatusLabel(status)}
          </strong>
        </div>
      </div>

      <div style={styles.formSection}>
        <div style={styles.rowBetween}>
          <label style={styles.fieldLabel}>Nombre</label>

          <button
            type="button"
            style={styles.secondaryButton}
            onClick={() => setShowDescriptions((prev) => !prev)}
          >
            Seleccionar descripción
          </button>
        </div>

        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={styles.input}
          placeholder="Nombre del lugar"
        />

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={styles.textarea}
          placeholder="Descripción que verá el usuario en Lsearch..."
        />

        {showDescriptions && (
          <div style={styles.descriptionOptions}>
            {genericDescriptions.map((option) => (
              <button
                key={option.id}
                type="button"
                style={styles.descriptionOption}
                onClick={() => {
                  onSelectDescription(option.text);
                  setShowDescriptions(false);
                }}
              >
                <strong>{option.label}</strong>
                <span>{option.text}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={styles.formSection}>
        <label style={styles.fieldLabel}>Clasificación Lsearch</label>

        <div style={styles.chipGroup}>
          {mockTags.map((tag) => {
            const isActive = selectedTag === tag;

            return (
              <button
                key={tag}
                type="button"
                style={{
                  ...styles.choiceChip,
                  ...(isActive ? styles.choiceChipActive : {}),
                }}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <label style={styles.smallLabel}>Subcategorías</label>

        <div style={styles.chipGroup}>
          {mockSubtags.map((subtag) => {
            const isActive = selectedSubtags.includes(subtag);

            return (
              <button
                key={subtag}
                type="button"
                style={{
                  ...styles.choiceChip,
                  ...(isActive ? styles.choiceChipActive : {}),
                }}
                onClick={() => onToggleSubtag(subtag)}
              >
                {subtag}
              </button>
            );
          })}
        </div>

        <label style={styles.smallLabel}>Enfoque</label>

        <div style={styles.chipGroup}>
          {mockApproaches.map((approach) => {
            const isActive = selectedApproach === approach;

            return (
              <button
                key={approach}
                type="button"
                style={{
                  ...styles.choiceChip,
                  ...(isActive ? styles.choiceChipActive : {}),
                }}
                onClick={() => setSelectedApproach(approach)}
              >
                {approach}
              </button>
            );
          })}
        </div>
      </div>

      <div style={styles.twoColumnSection}>
        <div style={styles.formSection}>
          <label style={styles.fieldLabel}>Precio</label>

          <div style={styles.readonlyMini}>
            Rango proporcionado: no consultado
          </div>

          <div style={styles.chipGroup}>
            {mockPrices.map((price) => {
              const isActive = selectedPrice === price;

              return (
                <button
                  key={price}
                  type="button"
                  style={{
                    ...styles.choiceChip,
                    ...(isActive ? styles.choiceChipActive : {}),
                  }}
                  onClick={() => setSelectedPrice(price)}
                >
                  {price}
                </button>
              );
            })}
          </div>
        </div>

        <div style={styles.formSection}>
          <label style={styles.fieldLabel}>Horario</label>

          <div style={styles.readonlyMini}>
            Horario proporcionado: no consultado
          </div>

          <select
            value={selectedSchedule}
            onChange={(event) => setSelectedSchedule(event.target.value)}
            style={styles.select}
          >
            <option value="">Seleccionar horario</option>

            {mockSchedules.map((schedule) => (
              <option key={schedule} value={schedule}>
                {schedule}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.googleStatsBox}>
        <span>Calificación y número de reviews</span>
        <strong>No consultado en modo soft</strong>
      </div>
    </section>
  );
}