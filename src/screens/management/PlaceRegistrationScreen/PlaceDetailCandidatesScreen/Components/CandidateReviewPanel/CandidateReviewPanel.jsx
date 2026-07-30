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
    return "No proporcionado por Google";
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

const SCHEDULE_DAYS = [
  {
    key: "monday",
    label: "Lunes",
    googleDay: 1,
  },
  {
    key: "tuesday",
    label: "Martes",
    googleDay: 2,
  },
  {
    key: "wednesday",
    label: "Miércoles",
    googleDay: 3,
  },
  {
    key: "thursday",
    label: "Jueves",
    googleDay: 4,
  },
  {
    key: "friday",
    label: "Viernes",
    googleDay: 5,
  },
  {
    key: "saturday",
    label: "Sábado",
    googleDay: 6,
  },
  {
    key: "sunday",
    label: "Domingo",
    googleDay: 0,
  },
];

function createEmptySchedule() {
  return {
    type: "custom",
    source: "manual",
    isOpen24Hours: false,

    days:
      SCHEDULE_DAYS.reduce(
        (
          accumulator,
          day,
        ) => ({
          ...accumulator,

          [day.key]: {
            enabled: false,
            open: "09:00",
            close: "18:00",
            closesNextDay: false,
          },
        }),
        {},
      ),
  };
}

function ensureSchedule(
  schedule,
) {
  if (
    schedule &&
    typeof schedule ===
      "object" &&
    schedule.days
  ) {
    return schedule;
  }

  return createEmptySchedule();
}

function formatTimePart(
  value,
) {
  return String(
    value ?? 0,
  ).padStart(
    2,
    "0",
  );
}

function closesOnNextDay(
  open,
  close,
) {
  if (
    !open ||
    !close
  ) {
    return false;
  }

  return close <= open;
}

function mapGoogleSchedule(
  details,
) {
  const schedule =
    createEmptySchedule();

  const periods =
    details?.openingHours
      ?.periods;

  if (
    !Array.isArray(
      periods,
    ) ||
    periods.length === 0
  ) {
    return schedule;
  }

  const hasOpenPeriodWithoutClose =
    periods.some(
      (period) =>
        period?.open &&
        !period?.close,
    );

  if (
    hasOpenPeriodWithoutClose
  ) {
    return {
      ...schedule,

      source: "google",
      isOpen24Hours: true,

      days:
        SCHEDULE_DAYS.reduce(
          (
            accumulator,
            day,
          ) => ({
            ...accumulator,

            [day.key]: {
              enabled: true,
              open: "00:00",
              close: "23:59",
              closesNextDay:
                false,
            },
          }),
          {},
        ),
    };
  }

  const nextDays = {
    ...schedule.days,
  };

  periods.forEach(
    (period) => {
      const open =
        period?.open;

      const close =
        period?.close;

      if (
        !open ||
        !Number.isInteger(
          open.day,
        )
      ) {
        return;
      }

      const day =
        SCHEDULE_DAYS.find(
          (item) =>
            item.googleDay ===
            open.day,
        );

      if (!day) {
        return;
      }

      const openTime =
        `${formatTimePart(
          open.hour,
        )}:${formatTimePart(
          open.minute,
        )}`;

      const closeTime =
        close
          ? `${formatTimePart(
              close.hour,
            )}:${formatTimePart(
              close.minute,
            )}`
          : "23:59";

      nextDays[
        day.key
      ] = {
        enabled: true,
        open: openTime,
        close: closeTime,

        closesNextDay:
          close
            ? (
                Number.isInteger(
                  close.day,
                )
                  ? close.day !==
                    open.day
                  : closesOnNextDay(
                      openTime,
                      closeTime,
                    )
              )
            : false,
      };
    },
  );

  return {
    ...schedule,

    source: "google",
    isOpen24Hours: false,
    days: nextDays,
  };
}

function getGoogleScheduleDescriptions(
  details,
) {
  const weekdayDescriptions =
    details?.openingHours
      ?.weekdayDescriptions;

  if (
    !Array.isArray(
      weekdayDescriptions,
    )
  ) {
    return [];
  }

  return weekdayDescriptions;
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
    <article
      style={
        styles.infoCard
      }
    >
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

      <div
        style={
          styles.infoContent
        }
      >
        <span
          style={
            styles.infoLabel
          }
        >
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
      priceConfig
        ?.hasFreeOption,
    );

  const googleType =
    details
      ?.googleMainType ||
    candidate
      ?.googleMainType ||
    "Sin tipo";

  const googlePriceLabel =
    formatGooglePriceLevel(
      details?.priceLevel,
    );

  const googleRatingLabel =
    formatRating(
      details,
    );

  const googleScheduleDescriptions =
    useMemo(
      () =>
        getGoogleScheduleDescriptions(
          details,
        ),
      [
        details,
      ],
    );

  const googleSchedule =
    useMemo(
      () =>
        mapGoogleSchedule(
          details,
        ),
      [
        details,
      ],
    );

  const currentSchedule =
    ensureSchedule(
      selectedSchedule,
    );

  const hasGoogleSchedule =
    googleScheduleDescriptions
      .length > 0 ||
    Boolean(
      details
        ?.openingHours
        ?.periods
        ?.length,
    );

  function updateScheduleDay(
    dayKey,
    changes,
  ) {
    setSelectedSchedule(
      (
        previousSchedule,
      ) => {
        const schedule =
          ensureSchedule(
            previousSchedule,
          );

        return {
          ...schedule,

          source: "manual",
          isOpen24Hours:
            false,

          days: {
            ...schedule.days,

            [dayKey]: {
              ...schedule
                .days[
                dayKey
              ],

              ...changes,
            },
          },
        };
      },
    );
  }

  function handleApplyGoogleSchedule() {
    if (
      !hasGoogleSchedule
    ) {
      return;
    }

    setSelectedSchedule(
      googleSchedule,
    );
  }

  function handleToggleOpen24Hours() {
    setSelectedSchedule(
      (
        previousSchedule,
      ) => {
        const schedule =
          ensureSchedule(
            previousSchedule,
          );

        const nextValue =
          !schedule
            .isOpen24Hours;

        return {
          ...schedule,

          source: "manual",

          isOpen24Hours:
            nextValue,

          days:
            SCHEDULE_DAYS.reduce(
              (
                accumulator,
                day,
              ) => ({
                ...accumulator,

                [day.key]:
                  nextValue
                    ? {
                        enabled:
                          true,

                        open:
                          "00:00",

                        close:
                          "23:59",

                        closesNextDay:
                          false,
                      }
                    : {
                        ...schedule
                          .days[
                          day.key
                        ],

                        enabled:
                          false,
                      },
              }),
              {},
            ),
        };
      },
    );
  }

  function handleToggleDay(
    dayKey,
    enabled,
  ) {
    updateScheduleDay(
      dayKey,
      {
        enabled:
          !enabled,
      },
    );
  }

  function handleOpenTimeChange(
    dayKey,
    currentClose,
    nextOpen,
  ) {
    updateScheduleDay(
      dayKey,
      {
        open:
          nextOpen,

        closesNextDay:
          closesOnNextDay(
            nextOpen,
            currentClose,
          ),
      },
    );
  }

  function handleCloseTimeChange(
    dayKey,
    currentOpen,
    nextClose,
  ) {
    updateScheduleDay(
      dayKey,
      {
        close:
          nextClose,

        closesNextDay:
          closesOnNextDay(
            currentOpen,
            nextClose,
          ),
      },
    );
  }

  return (
    <section
      style={
        styles.reviewCard
      }
    >
      <div
        style={
          styles.panelHeader
        }
      >
        <div
          style={
            styles.panelTitleIcon
          }
        >
          <ListChecks
            size={44}
            strokeWidth={2.2}
          />
        </div>

        <div
          style={
            styles.panelHeading
          }
        >
          <h2
            style={
              styles.panelTitle
            }
          >
            Información para Lsearch
          </h2>

          <p
            style={
              styles.panelSubtitle
            }
          >
            Completa y valida los datos que
            serán publicados en la aplicación.
          </p>
        </div>
      </div>

      <div
        style={
          styles.reviewTopGrid
        }
      >
        <InformationCard
          icon={
            CalendarDays
          }
          label="Importado el"
          value={
            importedAtLabel
          }
          variant="blue"
        />

        <InformationCard
          icon={
            Shapes
          }
          label="Tipo de Google"
          value={
            formatGoogleType(
              googleType,
            )
          }
          variant="cyan"
        />

        <InformationCard
          icon={
            Clock3
          }
          label="Estado"
          value={
            getStatusLabel(
              status,
            )
          }
          variant="orange"
        />
      </div>

      <section
        style={
          styles.formSection
        }
      >
        <div
          style={
            styles.sectionTitleRow
          }
        >
          <div
            style={
              styles.sectionTitleGroup
            }
          >
            <div
              style={
                styles.blueSectionIcon
              }
            >
              <FilePenLine
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h3
                style={
                  styles.sectionTitle
                }
              >
                Información principal
              </h3>

              <p
                style={
                  styles.sectionDescription
                }
              >
                Define el nombre y la descripción
                que verá el usuario.
              </p>
            </div>
          </div>

          <button
            type="button"
            style={
              styles.secondaryButton
            }
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

        <label
          style={
            styles.fieldLabel
          }
        >
          Nombre del lugar
        </label>

        <input
          value={
            name
          }
          onChange={(
            event,
          ) =>
            setName(
              event.target
                .value,
            )
          }
          style={
            styles.input
          }
          placeholder="Nombre del lugar"
        />

        <label
          style={
            styles.fieldLabel
          }
        >
          Descripción
        </label>

        <textarea
          value={
            description
          }
          onChange={(
            event,
          ) =>
            setDescription(
              event.target
                .value,
            )
          }
          style={
            styles.textarea
          }
          placeholder="Descripción que verá el usuario..."
        />

        {showDescriptions && (
          <div
            style={
              styles.descriptionOptions
            }
          >
            {genericDescriptions.map(
              (
                option,
              ) => (
                <button
                  key={
                    option.id
                  }
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
                    {
                      option.label
                    }
                  </strong>

                  <span>
                    {
                      option.text
                    }
                  </span>
                </button>
              ),
            )}
          </div>
        )}
      </section>

      <section
        style={
          styles.formSection
        }
      >
        <div
          style={
            styles.sectionTitleGroup
          }
        >
          <div
            style={
              styles.greenSectionIcon
            }
          >
            <Tag
              size={40}
              strokeWidth={2.2}
            />
          </div>

          <div>
            <h3
              style={
                styles.sectionTitle
              }
            >
              Clasificación
            </h3>

            <p
              style={
                styles.sectionDescription
              }
            >
              Selecciona la etiqueta,
              subcategorías y enfoque del lugar.
            </p>
          </div>
        </div>

        <label
          style={
            styles.fieldLabel
          }
        >
          Etiqueta principal
        </label>

        {catalogLoading ? (
          <div
            style={
              styles.loadingBox
            }
          >
            Cargando etiquetas...
          </div>
        ) : catalogError ? (
          <div
            style={
              styles.errorBox
            }
          >
            <Info
              size={40}
              strokeWidth={2.2}
            />

            {
              catalogError
            }
          </div>
        ) : (
          <div
            style={
              styles.chipGroup
            }
          >
            {tags.map(
              (
                tag,
              ) => {
                const isActive =
                  selectedTag ===
                  tag.id;

                return (
                  <button
                    key={
                      tag.id
                    }
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

                    {
                      tag.label
                    }
                  </button>
                );
              },
            )}
          </div>
        )}

        {subtags.length >
          0 && (
          <>
            <label
              style={
                styles.smallLabel
              }
            >
              <Layers3
                size={40}
                strokeWidth={2.2}
              />

              Subcategorías
            </label>

            <div
              style={
                styles.chipGroup
              }
            >
              {subtags.map(
                (
                  subtag,
                ) => {
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

                      {
                        subtag.label
                      }
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
            <label
              style={
                styles.smallLabel
              }
            >
              <MapPinned
                size={40}
                strokeWidth={2.2}
              />

              Enfoque
            </label>

            <div
              style={
                styles.chipGroup
              }
            >
              {approaches.map(
                (
                  approach,
                ) => {
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

                      {
                        approach.label
                      }
                    </button>
                  );
                },
              )}
            </div>
          </>
        )}
      </section>

      <div
        style={
          styles.twoColumnSection
        }
      >
        <section
          style={
            styles.formSection
          }
        >
          <div
            style={
              styles.sectionTitleGroup
            }
          >
            <div
              style={
                styles.orangeSectionIcon
              }
            >
              <CircleDollarSign
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h3
                style={
                  styles.sectionTitle
                }
              >
                Precio
              </h3>

              <p
                style={
                  styles.sectionDescription
                }
              >
                Selecciona el rango aplicable.
              </p>
            </div>
          </div>

          <div
            style={
              styles.readonlyMini
            }
          >
            {loadingDetails
              ? "Consultando rango proporcionado..."
              : `Rango proporcionado: ${googlePriceLabel}`}
          </div>

          <div
            style={
              styles.chipGroup
            }
          >
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
              (
                range,
              ) => {
                const isActive =
                  selectedPrice ===
                  range.id;

                return (
                  <button
                    key={
                      range.id
                    }
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
                    {
                      range.label
                    }
                  </button>
                );
              },
            )}
          </div>
        </section>

        <section
          style={
            styles.formSection
          }
        >
          <div
            style={
              styles.sectionTitleGroup
            }
          >
            <div
              style={
                styles.cyanSectionIcon
              }
            >
              <Clock3
                size={40}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h3
                style={
                  styles.sectionTitle
                }
              >
                Horario
              </h3>

              <p
                style={
                  styles.sectionDescription
                }
              >
                Define cuándo puede recomendarse
                el lugar en Lsearch.
              </p>
            </div>
          </div>

          <div
            style={
              styles.scheduleSuggestionBox
            }
          >
            <div
              style={
                styles.scheduleSuggestionHeader
              }
            >
              <p
                style={
                  styles.scheduleSuggestionTitle
                }
              >
                Sugerencia de Google
              </p>

              <div
                style={
                  styles.scheduleSuggestionActions
                }
              >
                <button
                  type="button"
                  style={{
                    ...styles.scheduleActionButton,

                    ...(!hasGoogleSchedule
                      ? styles.scheduleActionButtonDisabled
                      : {}),
                  }}
                  onClick={
                    handleApplyGoogleSchedule
                  }
                  disabled={
                    !hasGoogleSchedule
                  }
                >
                  Aplicar sugerencia
                </button>

                <button
                  type="button"
                  style={{
                    ...styles.scheduleActionButton,

                    ...(currentSchedule
                      .isOpen24Hours
                      ? styles.scheduleActionButtonActive
                      : {}),
                  }}
                  onClick={
                    handleToggleOpen24Hours
                  }
                >
                  24 horas
                </button>
              </div>
            </div>

            {loadingDetails ? (
              <p
                style={
                  styles.googleScheduleEmpty
                }
              >
                Consultando horario proporcionado...
              </p>
            ) : googleScheduleDescriptions
              .length > 0 ? (
              <div
                style={
                  styles.googleScheduleList
                }
              >
                {googleScheduleDescriptions.map(
                  (
                    descriptionLine,
                  ) => (
                    <p
                      key={
                        descriptionLine
                      }
                      style={
                        styles.googleScheduleLine
                      }
                    >
                      {
                        descriptionLine
                      }
                    </p>
                  ),
                )}
              </div>
            ) : (
              <p
                style={
                  styles.googleScheduleEmpty
                }
              >
                Google no proporcionó un horario
                para este lugar.
              </p>
            )}
          </div>

          <div
            style={
              styles.scheduleEditor
            }
          >
            <div
              style={
                styles.scheduleHeader
              }
            >
              <span>
                Día
              </span>

              <span>
                Abierto
              </span>

              <span>
                Abre
              </span>

              <span>
                Cierra
              </span>
            </div>

            {SCHEDULE_DAYS.map(
              (
                day,
              ) => {
                const daySchedule =
                  currentSchedule
                    .days[
                    day.key
                  ];

                return (
                  <div
                    key={
                      day.key
                    }
                    style={
                      styles.scheduleRow
                    }
                  >
                    <span
                      style={
                        styles.scheduleDayLabel
                      }
                    >
                      {
                        day.label
                      }
                    </span>

                    <button
                      type="button"
                      aria-label={`${
                        daySchedule.enabled
                          ? "Cerrar"
                          : "Abrir"
                      } ${day.label}`}
                      aria-pressed={
                        daySchedule.enabled
                      }
                      style={{
                        ...styles.scheduleToggleButton,

                        ...(daySchedule.enabled
                          ? styles.scheduleToggleButtonActive
                          : {}),
                      }}
                      onClick={() =>
                        handleToggleDay(
                          day.key,
                          daySchedule.enabled,
                        )
                      }
                    >
                      <span
                        style={{
                          ...styles.scheduleToggleKnob,

                          ...(daySchedule.enabled
                            ? styles.scheduleToggleKnobActive
                            : {}),
                        }}
                      />
                    </button>

                    {daySchedule.enabled ? (
                      <>
                        <input
                          type="time"
                          value={
                            daySchedule.open
                          }
                          style={
                            styles.scheduleTimeInput
                          }
                          onChange={(
                            event,
                          ) =>
                            handleOpenTimeChange(
                              day.key,
                              daySchedule.close,
                              event.target.value,
                            )
                          }
                        />

                        <input
                          type="time"
                          value={
                            daySchedule.close
                          }
                          style={
                            styles.scheduleTimeInput
                          }
                          onChange={(
                            event,
                          ) =>
                            handleCloseTimeChange(
                              day.key,
                              daySchedule.open,
                              event.target.value,
                            )
                          }
                        />
                      </>
                    ) : (
                      <div
                        style={
                          styles.scheduleClosedValue
                        }
                      >
                        Cerrado
                      </div>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </section>
      </div>

      <div
        style={
          styles.googleStatsBox
        }
      >
        <div
          style={
            styles.ratingIcon
          }
        >
          <Star
            size={40}
            strokeWidth={2.2}
          />
        </div>

        <div
          style={
            styles.ratingText
          }
        >
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