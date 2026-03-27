import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "../screens";
import { PlaceSubmissionScreen, DescriptionSubmissionScreen, PhotoSubmissionScreen } from "../screens";
import { ReportsScreen, PlaceRegistrationScreen, SuggestionsScreen } from "../screens";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeScreen />} />

        <Route path="/submissions/places" element={<PlaceSubmissionScreen />} />
        <Route path="/submissions/descriptions" element={<DescriptionSubmissionScreen />} />
        <Route path="/submissions/photos" element={<PhotoSubmissionScreen />} />

        <Route path="/management/reports" element={<ReportsScreen />} />
        <Route path="/management/place-registration" element={<PlaceRegistrationScreen />} />
        <Route path="/management/suggestions" element={<SuggestionsScreen />} />  

        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}