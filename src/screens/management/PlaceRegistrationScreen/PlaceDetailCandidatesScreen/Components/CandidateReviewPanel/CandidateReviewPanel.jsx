import React, { useState } from "react";
import styles from "./styles";

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
  catalog,
  catalogLoading,
  catalogError,
}) {
  const [showDescriptions, setShowDescriptions] = useState(false);

  const tags = catalog?.tags || [];
  const subtags = catalog?.subtags || [];
  const approaches = catalog?.approaches || [];
  const priceConfig = catalog?.priceConfig || null;

  const priceRanges = Array.isArray(priceConfig?.ranges)
    ? priceConfig.ranges
    : [];

  const hasFreeOption = Boolean(priceConfig?.hasFreeOption);

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
          placeholder="Descripción que verá el usuario..."
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
        <label style={styles.fieldLabel}>Etiqueta</label>

        {catalogLoading ? (
          <div style={styles.readonlyMini}>Cargando etiquetas...</div>
        ) : catalogError ? (
          <div style={styles.errorBox}>{catalogError}</div>
        ) : (
          <div style={styles.chipGroup}>
            {tags.map((tag) => {
              const isActive = selectedTag === tag.id;

              return (
                <button
                  key={tag.id}
                  type="button"
                  style={{
                    ...styles.choiceChip,
                    ...(isActive ? styles.choiceChipActive : {}),
                  }}
                  onClick={() => setSelectedTag(tag.id)}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        )}

        {subtags.length > 0 && (
          <>
            <label style={styles.smallLabel}>Subcategorías</label>

            <div style={styles.chipGroup}>
              {subtags.map((subtag) => {
                const isActive = selectedSubtags.includes(subtag.id);

                return (
                  <button
                    key={subtag.id}
                    type="button"
                    style={{
                      ...styles.choiceChip,
                      ...(isActive ? styles.choiceChipActive : {}),
                    }}
                    onClick={() => onToggleSubtag(subtag.id)}
                  >
                    {subtag.label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {approaches.length > 0 && (
          <>
            <label style={styles.smallLabel}>Enfoque</label>

            <div style={styles.chipGroup}>
              {approaches.map((approach) => {
                const isActive = selectedApproach === approach.id;

                return (
                  <button
                    key={approach.id}
                    type="button"
                    style={{
                      ...styles.choiceChip,
                      ...(isActive ? styles.choiceChipActive : {}),
                    }}
                    onClick={() => setSelectedApproach(approach.id)}
                  >
                    {approach.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div style={styles.twoColumnSection}>
        <div style={styles.formSection}>
          <label style={styles.fieldLabel}>Precio</label>

          <div style={styles.readonlyMini}>
            {priceConfig
              ? "Rangos definidos por la etiqueta seleccionada"
              : "Sin configuración de precio"}
          </div>

          <div style={styles.chipGroup}>
            {hasFreeOption && (
              <button
                type="button"
                style={{
                  ...styles.choiceChip,
                  ...(selectedPrice === "free"
                    ? styles.choiceChipActive
                    : {}),
                }}
                onClick={() => setSelectedPrice("free")}
              >
                Gratis
              </button>
            )}

            {priceRanges.map((range) => {
              const isActive = selectedPrice === range.id;

              return (
                <button
                  key={range.id}
                  type="button"
                  style={{
                    ...styles.choiceChip,
                    ...(isActive ? styles.choiceChipActive : {}),
                  }}
                  onClick={() => setSelectedPrice(range.id)}
                >
                  {range.label}
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