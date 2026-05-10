import React, { useMemo, useState } from "react";
import styles from "./styles";

function formatGoogleType(type) {
  if (!type) return "Sin tipo";

  return type
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return map[status] || "Pendiente";
}

function formatGooglePriceLevel(priceLevel) {
  if (!priceLevel) return "No consultado";

  const map = {
    PRICE_LEVEL_FREE: "Gratis",
    PRICE_LEVEL_INEXPENSIVE: "$",
    PRICE_LEVEL_MODERATE: "$$",
    PRICE_LEVEL_EXPENSIVE: "$$$",
    PRICE_LEVEL_VERY_EXPENSIVE: "$$$$",
  };

  return map[priceLevel] || priceLevel;
}

function formatRating(details) {
  const rating = details?.rating;
  const userRatingCount = details?.userRatingCount;

  if (!rating && !userRatingCount) {
    return "No consultado";
  }

  if (rating && userRatingCount) {
    return `${rating} / 5 · ${userRatingCount} reviews`;
  }

  if (rating) {
    return `${rating} / 5`;
  }

  return `${userRatingCount} reviews`;
}

function getScheduleOptions(details) {
  const weekdayDescriptions = details?.openingHours?.weekdayDescriptions;

  if (!Array.isArray(weekdayDescriptions) || weekdayDescriptions.length === 0) {
    return [];
  }

  return weekdayDescriptions;
}

function getGoogleSchedulePreview(details) {
  const weekdayDescriptions = details?.openingHours?.weekdayDescriptions;

  if (!Array.isArray(weekdayDescriptions) || weekdayDescriptions.length === 0) {
    return "Horario proporcionado: no disponible";
  }

  return weekdayDescriptions[0];
}

export default function CandidateReviewPanel({
  candidate,
  details,
  loadingDetails,
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

  const googleType =
    details?.googleMainType || candidate?.googleMainType || "Sin tipo";

  const googlePriceLabel = formatGooglePriceLevel(details?.priceLevel);
  const googleRatingLabel = formatRating(details);

  const googleScheduleOptions = useMemo(() => {
    return getScheduleOptions(details);
  }, [details]);

  const googleSchedulePreview = useMemo(() => {
  return getGoogleSchedulePreview(details);
}, [details]);

  const hasGoogleSchedule = googleScheduleOptions.length > 0;

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
            {formatGoogleType(googleType)}
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
            {loadingDetails
              ? "Consultando rango proporcionado..."
              : `Rango proporcionado: ${googlePriceLabel}`}
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
    {loadingDetails
      ? "Consultando horario proporcionado..."
      : googleSchedulePreview}
  </div>

  <select
    value={selectedSchedule}
    onChange={(event) => setSelectedSchedule(event.target.value)}
    style={styles.select}
  >
    <option value="">Seleccionar horario</option>

    {hasGoogleSchedule && (
      <option value="google_schedule_full">
        Usar horario completo de Google
      </option>
    )}

    {googleScheduleOptions.map((schedule) => (
      <option key={schedule} value={schedule}>
        {schedule}
      </option>
    ))}
  </select>
</div>
      </div>

      <div style={styles.googleStatsBox}>
        <span>Calificación y número de reviews</span>
        <strong>
          {loadingDetails ? "Consultando..." : googleRatingLabel}
        </strong>
      </div>
    </section>
  );
}