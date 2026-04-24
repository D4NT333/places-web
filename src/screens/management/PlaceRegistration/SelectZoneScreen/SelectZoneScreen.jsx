import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import H3PlaceSelectionMap from "./Components/H3PlaceSelectionMap";
import { postDiscoverPlacesByH3 } from "../../../../services/api/places.api";

export default function SelectZoneScreen() {
  const [selectedHexId, setSelectedHexId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleHexClick = (hexId) => {
    setSelectedHexId(hexId);
    console.log("Hex seleccionado:", hexId);
  };

  const handleConfirmZone = async () => {
    if (!selectedHexId) return;

    try {
      setLoading(true);

      const response = await postDiscoverPlacesByH3(selectedHexId);

      console.log("Respuesta del backend:", response);

      navigate("/management/place-registration/place", {
        state: {
          hexId: selectedHexId,
          discoverResponse: response,
        },
      });
    } catch (error) {
      console.error("Error enviando hex al backend:", error);
    } finally {
      setLoading(false);
    }
  };

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
          {loading ? "Consultando backend..." : "Listo"}
        </div>

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
            cursor:
              !selectedHexId || loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Confirmando zona..." : "Confirmar zona"}
        </button>
      </div>
    </LayoutScreen>
  );
}