import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const statusOptions = ["Todas", "Aprobadas", "Pendientes", "Rechazadas"];

export default function Panel() {
  const navigate = useNavigate();

  const [openSections, setOpenSections] = useState({
    metricas: false,
    listas: false,
    mantenimiento: false,
    errores: false,
  });

  const [openListGroups, setOpenListGroups] = useState({
    lugares: false,
    descripciones: false,
    fotos: false,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleListGroup = (groupKey) => {
    setOpenListGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const handleStatusNavigation = (groupKey, statusLabel) => {
    const statusMap = {
      Todas: "todas",
      Aprobadas: "aprobadas",
      Pendientes: "pendientes",
      Rechazadas: "rechazadas",
    };

    const statusValue = statusMap[statusLabel] || "todas";

    const routeMap = {
      lugares: "/submissions/places",
      descripciones: "/submissions/descriptions",
      fotos: "/submissions/photos",
    };

    const baseRoute = routeMap[groupKey];

    if (!baseRoute) return;

    navigate(`${baseRoute}?status=${statusValue}`);
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <aside style={styles.container}>
      <div style={styles.inner}>
        <p style={styles.panelTitle}>Panel</p>

        {/* MÉTRICAS */}
        <div style={styles.sectionBlock}>
          <button
            type="button"
            style={styles.sectionButton}
            onClick={() => toggleSection("metricas")}
          >
            <span style={styles.arrow}>
              {openSections.metricas ? "⌄" : "›"}
            </span>
            <span style={styles.sectionText}>Métricas</span>
          </button>

          <div
            style={{
              ...styles.sectionContent,
              ...(openSections.metricas
                ? styles.sectionContentOpen
                : styles.sectionContentClosed),
            }}
          >
            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/metrics/summary")}
            >
              Resumen general
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/metrics/trends")}
            >
              Tendencias
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/metrics/popularity")}
            >
              Popularidad
            </button>
          </div>
        </div>

        {/* LISTAS */}
        <div style={styles.sectionBlock}>
          <button
            type="button"
            style={styles.sectionButton}
            onClick={() => toggleSection("listas")}
          >
            <span style={styles.arrow}>
              {openSections.listas ? "⌄" : "›"}
            </span>
            <span style={styles.sectionText}>Listas</span>
          </button>

          <div
            style={{
              ...styles.sectionContent,
              ...(openSections.listas
                ? styles.sectionContentOpen
                : styles.sectionContentClosed),
            }}
          >
            {/* Propuesta de lugares */}
            <div style={styles.subSectionBlock}>
              <button
                type="button"
                style={styles.subSectionButton}
                onClick={() => toggleListGroup("lugares")}
              >
                <span style={styles.arrowSmall}>
                  {openListGroups.lugares ? "⌄" : "›"}
                </span>
                <span style={styles.subSectionText}>Propuesta de lugares</span>
              </button>

              <div
                style={{
                  ...styles.statusList,
                  ...(openListGroups.lugares
                    ? styles.statusListOpen
                    : styles.statusListClosed),
                }}
              >
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    type="button"
                    style={styles.statusButton}
                    onClick={() => handleStatusNavigation("lugares", status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Propuesta de descripciones */}
            <div style={styles.subSectionBlock}>
              <button
                type="button"
                style={styles.subSectionButton}
                onClick={() => toggleListGroup("descripciones")}
              >
                <span style={styles.arrowSmall}>
                  {openListGroups.descripciones ? "⌄" : "›"}
                </span>
                <span style={styles.subSectionText}>
                  Propuesta de descripciones
                </span>
              </button>

              <div
                style={{
                  ...styles.statusList,
                  ...(openListGroups.descripciones
                    ? styles.statusListOpen
                    : styles.statusListClosed),
                }}
              >
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    type="button"
                    style={styles.statusButton}
                    onClick={() =>
                      handleStatusNavigation("descripciones", status)
                    }
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Propuesta de fotos */}
            <div style={styles.subSectionBlock}>
              <button
                type="button"
                style={styles.subSectionButton}
                onClick={() => toggleListGroup("fotos")}
              >
                <span style={styles.arrowSmall}>
                  {openListGroups.fotos ? "⌄" : "›"}
                </span>
                <span style={styles.subSectionText}>Propuesta de fotos</span>
              </button>

              <div
                style={{
                  ...styles.statusList,
                  ...(openListGroups.fotos
                    ? styles.statusListOpen
                    : styles.statusListClosed),
                }}
              >
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    type="button"
                    style={styles.statusButton}
                    onClick={() => handleStatusNavigation("fotos", status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MANTENIMIENTO */}
        <div style={styles.sectionBlock}>
          <button
            type="button"
            style={styles.sectionButton}
            onClick={() => toggleSection("mantenimiento")}
          >
            <span style={styles.arrow}>
              {openSections.mantenimiento ? "⌄" : "›"}
            </span>
            <span style={styles.sectionText}>Mantenimiento</span>
          </button>

          <div
            style={{
              ...styles.sectionContent,
              ...(openSections.mantenimiento
                ? styles.sectionContentOpen
                : styles.sectionContentClosed),
            }}
          >
            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/management/place-registration/zone")}
            >
              Agregar lugares
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/management/suggestions")}
            >
              Sugerencias
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/management/reports")}
            >
              Reportes
            </button>
          </div>
        </div>

        {/* ERRORES */}
        <div style={styles.sectionBlock}>
          <button
            type="button"
            style={styles.sectionButton}
            onClick={() => toggleSection("errores")}
          >
            <span style={styles.arrow}>
              {openSections.errores ? "⌄" : "›"}
            </span>
            <span style={styles.sectionText}>Errores</span>
          </button>

          <div
            style={{
              ...styles.sectionContent,
              ...(openSections.errores
                ? styles.sectionContentOpen
                : styles.sectionContentClosed),
            }}
          >
            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/errors/critical")}
            >
              Críticos
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/errors/warnings")}
            >
              Advertencias
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/errors/history")}
            >
              Historial
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}