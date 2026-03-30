import { useState } from "react";
import LayoutScreen from "../../../../layout";
import styles from "./styles";
import H3PlaceSelectionMap from "./Components/H3PlaceSelectionMap";
import { postDiscoverPlacesByH3 } from "../../../../services/api/places.api";

export default function SelectZoneScreen() {
  const [selectedHexId, setSelectedHexId] = useState(null);
  const [discoverResponse, setDiscoverResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleHexClick = async (hexId) => {
    setSelectedHexId(hexId);
    console.log("Hex seleccionado:", hexId);

    try {
      setLoading(true);

      const response = await postDiscoverPlacesByH3(hexId);

      console.log("Respuesta del backend:", response);
      setDiscoverResponse(response);
    } catch (error) {
      console.error("Error enviando hex al backend:", error);
      setDiscoverResponse({
        ok: false,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <h1 style={styles.title}>Place Registration Screen</h1>

        <div style={styles.infoBox}>
          <strong>Hex seleccionado:</strong>{" "}
          {selectedHexId ? selectedHexId : "Ninguno"}
        </div>

        <div style={styles.infoBox}>
          <strong>Estado:</strong>{" "}
          {loading ? "Consultando backend..." : "Listo"}
        </div>

        {discoverResponse && (
          <div style={styles.infoBox}>
            <strong>Respuesta:</strong>{" "}
            {JSON.stringify(discoverResponse)}
          </div>
        )}

        <H3PlaceSelectionMap
          selectedHexId={selectedHexId}
          onHexClick={handleHexClick}
        />
      </div>
    </LayoutScreen>
  );
}