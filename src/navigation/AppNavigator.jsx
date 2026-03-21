import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "../screens";
import { PlaceSubmissionScreen, DescriptionSubmissionScreen, PhotoSubmissionScreen } from "../screens";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeScreen />} />

        <Route path="/submissions/places" element={<PlaceSubmissionScreen />} />
        <Route path="/submissions/descriptions" element={<DescriptionSubmissionScreen />} />
        <Route path="/submissions/photos" element={<PhotoSubmissionScreen />} />

        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}