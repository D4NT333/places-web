import React, { useMemo, useState,useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import CandidateMediaPanel from "./Components/CandidateMediaPanel";
import CandidateReviewPanel from "./Components/CandidateReviewPanel";

import { getCreateFiltersCatalogService } from "../../../../services/api/filtersCatalog.service";

const fallbackCandidate = {
  id: "candidate_mock",
  googlePlaceId: "ChIJ001",
  name: "Café PalReal",
  address: "C. Lope de Vega 113, Arcos Vallarta, Guadalajara",
  googleMainType: "cafe",
  status: "in_review",
  importedAt: "2026-05-09T04:31:00.000Z",
};

const genericDescriptions = [
  {
    id: "generic_food",
    label: "Descripción gastronómica",
    text: "Lugar ideal para disfrutar una experiencia gastronómica agradable, con una propuesta pensada para quienes buscan descubrir nuevos espacios dentro de la ciudad.",
  },
  {
    id: "generic_local",
    label: "Descripción local",
    text: "Espacio local recomendado para quienes desean conocer opciones cercanas, explorar la zona y encontrar lugares con identidad propia.",
  },
  {
    id: "generic_general",
    label: "Descripción general",
    text: "Lugar ubicado dentro de la zona seleccionada, disponible para ser revisado y clasificado dentro de Lsearch según sus características principales.",
  },
];

function formatDate(value) {
  if (!value) return "Sin fecha";

  try {
    return new Intl.DateTimeFormat("es-MX", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return "Sin fecha";
  }
}

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    accepted: "Aceptado",
    rejected: "Rechazado",
  };

  return map[status] || "Pendiente";
}

export default function PlaceDetailCandidatesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { candidateId } = useParams();

  const candidate = location.state?.candidate || fallbackCandidate;
  const hexId = location.state?.hexId || null;

  const [status, setStatus] = useState(candidate.status || "in_review");
  const [name, setName] = useState(candidate.name || "");
  const [description, setDescription] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedSubtags, setSelectedSubtags] = useState([]);
  const [selectedApproach, setSelectedApproach] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState("");

  const [catalogLoading, setCatalogLoading] = useState(false);
const [catalogError, setCatalogError] = useState("");

const [catalog, setCatalog] = useState({
  selectedTagId: null,
  selectedTag: null,
  tags: [],
  subtags: [],
  approaches: [],
  priceConfig: null,
});

  const importedAtLabel = useMemo(() => {
    return formatDate(candidate.importedAt);
  }, [candidate.importedAt]);

  const loadFiltersCatalog = async (tagId = null) => {
  try {
    setCatalogLoading(true);
    setCatalogError("");

    const data = await getCreateFiltersCatalogService(tagId);

    setCatalog(data);

    if (data.selectedTagId) {
      setSelectedTag(data.selectedTagId);
    }

    setSelectedSubtags([]);
    setSelectedApproach("");
    setSelectedPrice("");
  } catch (error) {
    console.error("Error cargando catálogo de filtros:", error);
    setCatalogError(error.message || "No se pudo cargar el catálogo.");
  } finally {
    setCatalogLoading(false);
  }
};

useEffect(() => {
  loadFiltersCatalog();
}, []);

  const handleSelectDescription = (descriptionText) => {
    setDescription(descriptionText);
  };

  const handleSelectTag = async (tagId) => {
  await loadFiltersCatalog(tagId);
};

  const handleToggleSubtag = (subtag) => {
    setSelectedSubtags((prev) => {
      if (prev.includes(subtag)) {
        return prev.filter((item) => item !== subtag);
      }

      return [...prev, subtag];
    });
  };

  const handleReject = () => {
    setStatus("rejected");
    console.log("Candidato rechazado:", candidateId);
  };

  const handleAccept = () => {
    setStatus("accepted");

    const payload = {
      candidateId,
      googlePlaceId: candidate.googlePlaceId,
      name,
      description,
      tag: selectedTag,
      subtags: selectedSubtags,
      approach: selectedApproach,
      price: selectedPrice,
      schedule: selectedSchedule,
      status: "accepted",
    };

    console.log("Candidato aceptado:", payload);
  };

  const handleBack = () => {
    navigate("/management/place-registration/candidates", {
      state: {
        hexId,
      },
    });
  };

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <div style={styles.header}>
  <div style={styles.headerTextBlock}>

    <h1 style={styles.title}>Detalle del candidato</h1>

    <p style={styles.subtitle}>
      Revisa la información importada desde Google y completa los datos
      necesarios para Lsearch.
    </p>
  </div>

  <div style={styles.headerActions}>
    <button
      type="button"
      style={styles.rejectButton}
      onClick={handleReject}
    >
      Rechazar
    </button>

    <button
      type="button"
      style={styles.acceptButton}
      onClick={handleAccept}
    >
      Aceptar
    </button>
  </div>
</div>

<div style={styles.mainContentOffset}>
  <div style={styles.contentGrid}>
    <CandidateMediaPanel
      candidate={candidate}
      importedAtLabel={importedAtLabel}
    />

   <CandidateReviewPanel
  candidate={candidate}
  name={name}
  setName={setName}
  description={description}
  setDescription={setDescription}
  genericDescriptions={genericDescriptions}
  onSelectDescription={handleSelectDescription}
  selectedTag={selectedTag}
  setSelectedTag={handleSelectTag}
  selectedSubtags={selectedSubtags}
  onToggleSubtag={handleToggleSubtag}
  selectedApproach={selectedApproach}
  setSelectedApproach={setSelectedApproach}
  selectedPrice={selectedPrice}
  setSelectedPrice={setSelectedPrice}
  selectedSchedule={selectedSchedule}
  setSelectedSchedule={setSelectedSchedule}
  importedAtLabel={importedAtLabel}
  status={status}
  catalog={catalog}
  catalogLoading={catalogLoading}
  catalogError={catalogError}
/>
  </div>
</div>

<div style={styles.footerActions}>
  <button type="button" style={styles.backButtonBottom} onClick={handleBack}>
    Volver
  </button>
</div>
</div>
    </LayoutScreen>
  );
}