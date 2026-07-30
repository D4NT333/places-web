import React, {
  useMemo,
  useState,
} from "react";

import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FilePenLine,
  Info,
  Layers3,
  ListChecks,
  MapPinned,
  Shapes,
  Star,
  Tag,
} from "lucide-react";

import styles from "./styles";

function formatGoogleType(type) {
  if (!type) {
    return "Sin tipo";
  }

  return type
    .replaceAll("_", " ")
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase(),
    );
}

function getStatusLabel(status) {
  const labels = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return (
    labels[status] ||
    "Pendiente"
  );
}

function formatGooglePriceLevel(
  priceLevel,
) {
  if (!priceLevel) {
    return "No consultado";
  }

  const labels = {
    PRICE_LEVEL_FREE:
      "Gratis",

    PRICE_LEVEL_INEXPENSIVE:
      "$",

    PRICE_LEVEL_MODERATE:
      "$$",

    PRICE_LEVEL_EXPENSIVE:
      "$$$",

    PRICE_LEVEL_VERY_EXPENSIVE:
      "$$$$",
  };

  return (
    labels[priceLevel] ||
    priceLevel
  );
}

function formatRating(
  details,
) {
  const rating =
    details?.rating;

  const userRatingCount =
    details?.userRatingCount;

  if (
    !rating &&
    !userRatingCount
  ) {
    return "No consultado";
  }

  if (
    rating &&
    userRatingCount
  ) {
    return `${rating} / 5 · ${userRatingCount} reviews`;
  }

  if (rating) {
    return `${rating} / 5`;
  }

  return `${userRatingCount} reviews`;
}

function getScheduleOptions(
  details,
) {
  const weekdayDescriptions =
    details?.openingHours
      ?.weekdayDescriptions;

  if (
    !Array.isArray(
      weekdayDescriptions,
    ) ||
    weekdayDescriptions.length ===
      0
  ) {
    return [];
  }

  return weekdayDescriptions;
}

function getGoogleSchedulePreview(
  details,
) {
  const weekdayDescriptions =
    details?.openingHours
      ?.weekdayDescriptions;

  if (
    !Array.isArray(
      weekdayDescriptions,
    ) ||
    weekdayDescriptions.length ===
      0
  ) {
    return "Horario proporcionado: no disponible";
  }

  return (
    weekdayDescriptions[0]
  );
}

function InformationCard({
  icon: Icon,
  label,
  value,
  variant = "blue",
}) {
  const variants = {
    blue: {
      icon:
        styles.infoIconBlue,
      value:
        styles.infoValueBlue,
    },

    cyan: {
      icon:
        styles.infoIconCyan,
      value:
        styles.infoValueCyan,
    },

    orange: {
      icon:
        styles.infoIconOrange,
      value:
        styles.infoValueOrange,
    },
  };

  const currentVariant =
    variants[variant] ||
    variants.blue;

  return (
    <article style={styles.infoCard}>
      <div
        style={{
          ...styles.infoIcon,
          ...currentVariant.icon,
        }}
      >
        <Icon
          size={40}
          strokeWidth={2.2}
        />
      </div>

      <div style={styles.infoContent}>
        <span style={styles.infoLabel}>
          {label}
        </span>

        <strong
          style={{
            ...styles.infoValue,
            ...currentVariant.value,
          }}
        >
          {value}
        </strong>
      </div>
    </article>
  );
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
  const [
    showDescriptions,
    setShowDescriptions,
  ] = useState(false);

  const tags =
    catalog?.tags ||
    [];

  const subtags =
    catalog?.subtags ||
    [];

  const approaches =
    catalog?.approaches ||
    [];

  const priceConfig =
    catalog?.priceConfig ||
    null;

  const priceRanges =
    Array.isArray(
      priceConfig?.ranges,
    )
      ? priceConfig.ranges
      : [];

  const hasFreeOption =
    Boolean(
      priceConfig?.hasFreeOption,
    );

  const googleType =
    details?.googleMainType ||
    candidate?.googleMainType ||
    "Sin tipo";

  const googlePriceLabel =
    formatGooglePriceLevel(
      details?.priceLevel,
    );

  const googleRatingLabel =
    formatRating(
      details,
    );

  const googleScheduleOptions =
    useMemo(
      () =>
        getScheduleOptions(
          details,
        ),
      [
        details,
      ],
    );

  const googleSchedulePreview =
    useMemo(
      () =>
        getGoogleSchedulePreview(
          details,
        ),
      [
        details,
      ],
    );

  const hasGoogleSchedule =
    googleScheduleOptions.length >
    0;

  return (
    <section style={styles.reviewCard}>
      <div style={styles.panelHeader}>
        <div style={styles.panelTitleIcon}>
          <ListChecks
            size={44}
            strokeWidth={2.2}
          />
        </div>

        <div style={styles.panelHeading}>
          <h2 style={styles.panelTitle}>
            Información para Lsearch
          </h2>

          <p style={styles.panelSubtitle}>
            Completa y valida los datos que
            serán publicados en la aplicación.
          </p>
        </div>
      </div>

      <div style={styles.reviewTopGrid}>
        <InformationCard
          icon={CalendarDays}
          label="Importado el"
          value={
            importedAtLabel
          }
          variant="blue"
        />

        <InformationCard
          icon={Shapes}
          label="Tipo de Google"
          value={formatGoogleType(
            googleType,
          )}
          variant="cyan"
        />

        <InformationCard
          icon={Clock3}
          label="Estado"
          value={getStatusLabel(
            status,
          )}
          variant="orange"
        />
      </div>

      <section style={styles.formSection}>
        <div style={styles.sectionTitleRow}>
          <div style={styles.sectionTitleGroup}>
            <div style={styles.blueSectionIcon}>
              <FilePenLine
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h3 style={styles.sectionTitle}>
                Información principal
              </h3>

              <p style={styles.sectionDescription}>
                Define el nombre y la descripción
                que verá el usuario.
              </p>
            </div>
          </div>

          <button
            type="button"
            style={styles.secondaryButton}
            onClick={() =>
              setShowDescriptions(
                (
                  previousValue,
                ) =>
                  !previousValue,
              )
            }
          >
            <FilePenLine
              size={40}
              strokeWidth={2.2}
            />

            Seleccionar descripción

            <ChevronDown
              size={40}
              strokeWidth={2.2}
            />
          </button>
        </div>

        <label style={styles.fieldLabel}>
          Nombre del lugar
        </label>

        <input
          value={name}
          onChange={(event) =>
            setName(
              event.target.value,
            )
          }
          style={styles.input}
          placeholder="Nombre del lugar"
        />

        <label style={styles.fieldLabel}>
          Descripción
        </label>

        <textarea
          value={description}
          onChange={(event) =>
            setDescription(
              event.target.value,
            )
          }
          style={styles.textarea}
          placeholder="Descripción que verá el usuario..."
        />

        {showDescriptions && (
          <div style={styles.descriptionOptions}>
            {genericDescriptions.map(
              (option) => (
                <button
                  key={option.id}
                  type="button"
                  style={
                    styles.descriptionOption
                  }
                  onClick={() => {
                    onSelectDescription(
                      option.text,
                    );

                    setShowDescriptions(
                      false,
                    );
                  }}
                >
                  <strong>
                    {option.label}
                  </strong>

                  <span>
                    {option.text}
                  </span>
                </button>
              ),
            )}
          </div>
        )}
      </section>

      <section style={styles.formSection}>
        <div style={styles.sectionTitleGroup}>
          <div style={styles.greenSectionIcon}>
            <Tag
              size={40}
              strokeWidth={2.2}
            />
          </div>

          <div>
            <h3 style={styles.sectionTitle}>
              Clasificación
            </h3>

            <p style={styles.sectionDescription}>
              Selecciona la etiqueta,
              subcategorías y enfoque del lugar.
            </p>
          </div>
        </div>

        <label style={styles.fieldLabel}>
          Etiqueta principal
        </label>

        {catalogLoading ? (
          <div style={styles.loadingBox}>
            Cargando etiquetas...
          </div>
        ) : catalogError ? (
          <div style={styles.errorBox}>
            <Info
              size={40}
              strokeWidth={2.2}
            />

            {catalogError}
          </div>
        ) : (
          <div style={styles.chipGroup}>
            {tags.map(
              (tag) => {
                const isActive =
                  selectedTag ===
                  tag.id;

                return (
                  <button
                    key={tag.id}
                    type="button"
                    style={{
                      ...styles.choiceChip,

                      ...(isActive
                        ? styles.choiceChipActive
                        : {}),
                    }}
                    onClick={() =>
                      setSelectedTag(
                        tag.id,
                      )
                    }
                  >
                    {isActive && (
                      <CheckCircle2
                        size={40}
                        strokeWidth={2.4}
                      />
                    )}

                    {tag.label}
                  </button>
                );
              },
            )}
          </div>
        )}

        {subtags.length >
          0 && (
          <>
            <label style={styles.smallLabel}>
              <Layers3
                size={40}
                strokeWidth={2.2}
              />

              Subcategorías
            </label>

            <div style={styles.chipGroup}>
              {subtags.map(
                (subtag) => {
                  const isActive =
                    selectedSubtags.includes(
                      subtag.id,
                    );

                  return (
                    <button
                      key={
                        subtag.id
                      }
                      type="button"
                      style={{
                        ...styles.choiceChip,

                        ...(isActive
                          ? styles.choiceChipActiveGreen
                          : {}),
                      }}
                      onClick={() =>
                        onToggleSubtag(
                          subtag.id,
                        )
                      }
                    >
                      {isActive && (
                        <CheckCircle2
                          size={40}
                          strokeWidth={2.4}
                        />
                      )}

                      {subtag.label}
                    </button>
                  );
                },
              )}
            </div>
          </>
        )}

        {approaches.length >
          0 && (
          <>
            <label style={styles.smallLabel}>
              <MapPinned
                size={40}
                strokeWidth={2.2}
              />

              Enfoque
            </label>

            <div style={styles.chipGroup}>
              {approaches.map(
                (approach) => {
                  const isActive =
                    selectedApproach ===
                    approach.id;

                  return (
                    <button
                      key={
                        approach.id
                      }
                      type="button"
                      style={{
                        ...styles.choiceChip,

                        ...(isActive
                          ? styles.choiceChipActivePurple
                          : {}),
                      }}
                      onClick={() =>
                        setSelectedApproach(
                          approach.id,
                        )
                      }
                    >
                      {isActive && (
                        <CheckCircle2
                          size={40}
                          strokeWidth={2.4}
                        />
                      )}

                      {approach.label}
                    </button>
                  );
                },
              )}
            </div>
          </>
        )}
      </section>

      <div style={styles.twoColumnSection}>
        <section style={styles.formSection}>
          <div style={styles.sectionTitleGroup}>
            <div style={styles.orangeSectionIcon}>
              <CircleDollarSign
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h3 style={styles.sectionTitle}>
                Precio
              </h3>

              <p style={styles.sectionDescription}>
                Selecciona el rango aplicable.
              </p>
            </div>
          </div>

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

                  ...(selectedPrice ===
                  "free"
                    ? styles.choiceChipActiveOrange
                    : {}),
                }}
                onClick={() =>
                  setSelectedPrice(
                    "free",
                  )
                }
              >
                Gratis
              </button>
            )}

            {priceRanges.map(
              (range) => {
                const isActive =
                  selectedPrice ===
                  range.id;

                return (
                  <button
                    key={range.id}
                    type="button"
                    style={{
                      ...styles.choiceChip,

                      ...(isActive
                        ? styles.choiceChipActiveOrange
                        : {}),
                    }}
                    onClick={() =>
                      setSelectedPrice(
                        range.id,
                      )
                    }
                  >
                    {range.label}
                  </button>
                );
              },
            )}
          </div>
        </section>

        <section style={styles.formSection}>
          <div style={styles.sectionTitleGroup}>
            <div style={styles.cyanSectionIcon}>
              <Clock3
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h3 style={styles.sectionTitle}>
                Horario
              </h3>

              <p style={styles.sectionDescription}>
                Selecciona el horario del lugar.
              </p>
            </div>
          </div>

          <div style={styles.readonlyMini}>
            {loadingDetails
              ? "Consultando horario proporcionado..."
              : googleSchedulePreview}
          </div>

          <select
            value={selectedSchedule}
            onChange={(event) =>
              setSelectedSchedule(
                event.target.value,
              )
            }
            style={styles.select}
          >
            <option value="">
              Seleccionar horario
            </option>

            {hasGoogleSchedule && (
              <option value="google_schedule_full">
                Usar horario completo de Google
              </option>
            )}

            {googleScheduleOptions.map(
              (schedule) => (
                <option
                  key={schedule}
                  value={schedule}
                >
                  {schedule}
                </option>
              ),
            )}
          </select>
        </section>
      </div>

      <div style={styles.googleStatsBox}>
        <div style={styles.ratingIcon}>
          <Star
            size={40}
            strokeWidth={2.2}
          />
        </div>

        <div style={styles.ratingText}>
          <span>
            Calificación en Google
          </span>

          <strong>
            {loadingDetails
              ? "Consultando..."
              : googleRatingLabel}
          </strong>
        </div>
      </div>
    </section>
  );
}