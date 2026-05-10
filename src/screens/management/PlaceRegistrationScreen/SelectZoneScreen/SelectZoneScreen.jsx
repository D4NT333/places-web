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
      <LayoutScreen>
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
    <LayoutScreen>
      <div style={styles.container}>
        <h1 style={styles.title}>Select Zone Screen</h1>

        <div style={styles.infoBox}>
          <strong>Hex seleccionado:</strong>{" "}
          {selectedHexId ? selectedHexId : "Ninguno"}
        </div>

        <div style={styles.infoBox}>
          <strong>Estado:</strong>{" "}
          {loading ? "Importando candidatos..." : "Listo"}
        </div>

        {errorMessage && (
          <div
            style={{
              ...styles.infoBox,
              borderColor: "#fecaca",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
            }}
          >
            {errorMessage}
          </div>
        )}

        <H3PlaceSelectionMap
          selectedHexId={selectedHexId}
          onHexClick={handleHexClick}
        />

        <button
          onClick={handleConfirmZone}
          disabled={!selectedHexId || loading}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor:
              !selectedHexId || loading ? "#9ca3af" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: !selectedHexId || loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Importando candidatos..." : "Confirmar zona"}
        </button>
      </div>
    </LayoutScreen>
  );
}