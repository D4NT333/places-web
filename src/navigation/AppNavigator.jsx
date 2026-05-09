import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "../screens";
import { PlaceSubmissionScreen, DescriptionSubmissionScreen, PhotoSubmissionScreen } from "../screens";
import { ReportsScreen, SelectZoneScreen, SuggestionsScreen } from "../screens";
import { PlaceDetailSubmissionScreen } from "../screens";
import { PlaceReturnSubmissionScreen } from "../screens";
import { PlaceCandidatesScreen } from "../screens";
import { PlaceDetailCandidatesScreen } from "../screens";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeScreen />} />

        <Route path="/submissions/places" element={<PlaceSubmissionScreen />} />
        <Route path="/submissions/descriptions" element={<DescriptionSubmissionScreen />} />
        <Route path="/submissions/photos" element={<PhotoSubmissionScreen />} />

        
        <Route path="/submissions/places/:submissionId" element={<PlaceDetailSubmissionScreen />}/>

        <Route path="/submissions/places/:submissionId/return" element={<PlaceReturnSubmissionScreen />}/>

        <Route path="/management/reports" element={<ReportsScreen />} />

        <Route path="/management/place-registration/zone" element={<SelectZoneScreen />} />  //cambiar nombre de esto
        <Route path="/management/place-registration/candidates" element={<PlaceCandidatesScreen />}/>

        <Route path="/management/place-registration/candidates/:candidateId" element={<PlaceDetailCandidatesScreen />} />

        
        <Route path="/management/suggestions" element={<SuggestionsScreen />} />  

        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}