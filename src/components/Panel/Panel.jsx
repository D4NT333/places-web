import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

import { icons } from "../../../assets/icons";

export default function Panel() {
  const navigate = useNavigate();

  const [openSections, setOpenSections] = useState({
    metricas: false,
    listas: false,
    administracion: false,
    mantenimiento: false,
    errores: false,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <aside style={styles.container}>
      <div style={styles.inner}>
        <button
          type="button"
          style={styles.homeButton}
          onClick={() => handleNavigation("/")}
          title="Ir al inicio"
        >
          <img src={icons.home} alt="Inicio" style={styles.homeIcon} />
        </button>

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
              onClick={() => handleNavigation("/metrics/operations")}
            >
              Operaciones
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/metrics/demand")}
            >
              Demanda
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/metrics/interactions")}
            >
              Interacciones
            </button>
          </div>
        </div>

        {/* PROPUESTAS */}
        <div style={styles.sectionBlock}>
          <button
            type="button"
            style={styles.sectionButton}
            onClick={() => toggleSection("listas")}
          >
            <span style={styles.arrow}>
              {openSections.listas ? "⌄" : "›"}
            </span>
            <span style={styles.sectionText}>Propuestas</span>
          </button>

          <div
            style={{
              ...styles.sectionContent,
              ...(openSections.listas
                ? styles.sectionContentOpen
                : styles.sectionContentClosed),
            }}
          >
            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/submissions/places")}
            >
              Propuesta de lugares
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/submissions/descriptions")}
            >
              Propuesta de descripciones
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/submissions/photos")}
            >
              Propuesta de fotos
            </button>
          </div>
        </div>

        {/* ADMINISTRACIÓN */}
        <div style={styles.sectionBlock}>
          <button
            type="button"
            style={styles.sectionButton}
            onClick={() => toggleSection("administracion")}
          >
            <span style={styles.arrow}>
              {openSections.administracion ? "⌄" : "›"}
            </span>
            <span style={styles.sectionText}>Administración</span>
          </button>

          <div
            style={{
              ...styles.sectionContent,
              ...(openSections.administracion
                ? styles.sectionContentOpen
                : styles.sectionContentClosed),
            }}
          >
            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/administration/users")}
            >
              Usuarios
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/administration/places")}
            >
              Lugares
            </button>
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
              onClick={() =>
                handleNavigation("/management/place-registration/zone")
              }
            >
              Agregar lugares
            </button>

            <button
              type="button"
              style={styles.optionButton}
              onClick={() => handleNavigation("/management/deleted-submissions")}
            >
              Propuestas eliminadas
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