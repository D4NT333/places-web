import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import H3PlaceSelectionMap from "./Components/H3PlaceSelectionMap";

import {
  discoverGoogleCandidatesService,
  getGoogleCandidatesSummaryService,
} from "../../../../services/api/googleCandidates.service";

export default function SelectZoneScreen() {
  const [selectedHexId, setSelectedHexId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkingPending, setCheckingPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkPendingCandidates = async () => {
      try {
        setCheckingPending(true);
        setErrorMessage("");

        const summary = await getGoogleCandidatesSummaryService();

        if (summary.hasPendingCandidates) {
          navigate("/management/place-registration/candidates?status=in_review", {
            replace: true,
            state: {
              redirectedReason: "pending_candidates",
            },
          });
        }
      } catch (error) {
        console.error("Error revisando candidatos pendientes:", error);
        setErrorMessage(
          error.message || "No se pudo revisar si hay candidatos pendientes."
        );
      } finally {
        setCheckingPending(false);
      }
    };

    checkPendingCandidates();
  }, [navigate]);

  const handleHexClick = (hexId) => {
    setSelectedHexId(hexId);
    setErrorMessage("");
    console.log("Hex seleccionado:", hexId);
  };

  const handleConfirmZone = async () => {
    if (!selectedHexId || loading) return;

    try {
      setLoading(true);
      setErrorMessage("");

      const response = await discoverGoogleCandidatesService(selectedHexId);

      console.log("Candidatos importados:", response);

      navigate("/management/place-registration/candidates?status=in_review", {
        state: {
          hexId: selectedHexId,
          discoverResponse: response,
        },
      });
    } catch (error) {
      console.error("Error importando candidatos:", error);
      setErrorMessage(
        error.message || "No se pudieron importar candidatos desde Google."
      );
    } finally {
      setLoading(false);
    }
  };

  if (checkingPending) {
    return (
      <LayoutScreen
        breadcrumbs={[
          { label: "Inicio", path: "/" },
          { label: "Agregar lugares por zona" },
        ]}
      >
        <div style={styles.container}>
          <h1 style={styles.title}>Revisando candidatos pendientes...</h1>

          <div style={styles.infoBox}>
            Validando si todavía hay lugares pendientes antes de mostrar el mapa.
          </div>
        </div>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen
      breadcrumbs={[
        { label: "Inicio", path: "/" },
        { label: "Agregar lugares por zona" },
      ]}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>Agregar lugares por zona</h1>

        {errorMessage && (
          <div style={styles.errorBox}>
            {errorMessage}
          </div>
        )}

        <div style={styles.mapContainer}>
          <div style={styles.hexPill}>
            <span style={styles.hexPillLabel}>HexId:</span>
            <span style={styles.hexPillValue}>
              {selectedHexId ? selectedHexId : "Ninguno"}
            </span>
          </div>

          <H3PlaceSelectionMap
            selectedHexId={selectedHexId}
            onHexClick={handleHexClick}
          />
        </div>

        <button
          onClick={handleConfirmZone}
          disabled={!selectedHexId || loading}
          style={{
            ...styles.confirmButton,
            ...((!selectedHexId || loading) && styles.confirmButtonDisabled),
          }}
        >
          {loading ? "Importando candidatos..." : "Confirmar zona"}
        </button>
      </div>
    </LayoutScreen>
  );
}