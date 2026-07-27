import React from "react";

import styles from "./styles";

function FilterSelect({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <label style={styles.field}>
      <span style={styles.fieldLabel}>
        {label}
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        style={styles.select}
      >
        {options.map((option) => (
          <option
            key={option.id}
            value={option.id}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function IssueFilters({
  project,
  category,
  level,
  status,
  period,

  projectOptions,
  categoryOptions,
  levelOptions,
  statusOptions,
  periodOptions,

  onChangeProject,
  onChangeCategory,
  onChangeLevel,
  onChangeStatus,
  onChangePeriod,
  onClearFilters,
}) {
  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>
            Filtros de incidencias
          </h2>

          <p style={styles.description}>
            Clasifica problemas por proyecto, categoría,
            nivel, estado y periodo.
          </p>
        </div>

        <button
          type="button"
          style={styles.clearButton}
          onClick={onClearFilters}
        >
          Limpiar filtros
        </button>
      </div>

      <div style={styles.filtersGrid}>
        <FilterSelect
          label="Proyecto"
          value={project}
          options={projectOptions}
          onChange={onChangeProject}
        />

        <FilterSelect
          label="Categoría"
          value={category}
          options={categoryOptions}
          onChange={onChangeCategory}
        />

        <FilterSelect
          label="Nivel"
          value={level}
          options={levelOptions}
          onChange={onChangeLevel}
        />

        <FilterSelect
          label="Estado"
          value={status}
          options={statusOptions}
          onChange={onChangeStatus}
        />

        <FilterSelect
          label="Periodo"
          value={period}
          options={periodOptions}
          onChange={onChangePeriod}
        />
      </div>
    </section>
  );
}