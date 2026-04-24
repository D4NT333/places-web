import { useLocation, useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";

export default function PlaceRegistrationScreen () {
  const location = useLocation();
  const navigate = useNavigate();

  const hexId = location.state?.hexId;
  const discoverResponse = location.state?.discoverResponse;

  return (
    <LayoutScreen>
    <div>
      <button onClick={() => navigate(-1)}>← Volver</button>

      <h1>Place Registration Screen</h1>
      <p>Hex recibido: {hexId}</p>

      <pre>{JSON.stringify(discoverResponse, null, 2)}</pre>
    </div>
    </LayoutScreen>
  );
}