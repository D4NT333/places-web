import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../config/firebaseConfig";
import { getAdminMeService } from "../services/auth/getAdminMe.service";
import { logoutService } from "../services/auth/logout.service";

import {HomeScreen,OperationsScreen,DemandScreen,InteractionsScreen,} from "../screens";
import { PlaceSubmissionScreen, DescriptionSubmissionScreen, PhotoSubmissionScreen } from "../screens";
import { ReportsScreen, SelectZoneScreen, DeletedSubmissionsScreen } from "../screens";
import { PhotoDetailSubmissionScreen } from "../screens";
import { PlaceDetailSubmissionScreen } from "../screens";
import { PlaceReturnSubmissionScreen } from "../screens";
import { PlaceCandidatesScreen } from "../screens";
import { PlaceDetailCandidatesScreen } from "../screens"; 
import {AdministrationUsersScreen} from "../screens";
import {AdministrationDetailUserScreen} from "../screens";

import {AdministrationPlaceScreen} from "../screens";
import {AdministrationDetailPlaceScreen} from "../screens";

import { DescriptionDetailSubmissionScreen } from "../screens";

import {MonitoringSummaryScreen} from "../screens";
import {MonitoringIssuesScreen} from "../screens";


import LoginScreen from "../screens/auth/LoginScreen";

function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFDF8",
        fontFamily: "system-ui, sans-serif",
        color: "#555",
      }}
    >
      Validando sesión...
    </div>
  );
}

function AppRoutesContent({ adminUser }) {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          adminUser ? <Navigate to="/home" replace /> : <LoginScreen />
        }
      />

      {adminUser ? (
        <>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeScreen />} />

          <Route path="/metrics/operations" element={<OperationsScreen />} />
          <Route path="/metrics/demand" element={<DemandScreen />} />
          <Route path="/metrics/interactions" element={<InteractionsScreen />} />

          <Route path="/submissions/places" element={<PlaceSubmissionScreen />} />
          <Route path="/submissions/descriptions" element={<DescriptionSubmissionScreen />} />
          <Route path="/submissions/photos" element={<PhotoSubmissionScreen />} />


          <Route path="/submissions/photos/:submissionId"element={<PhotoDetailSubmissionScreen />}/>

          <Route path="/submissions/places/:submissionId" element={<PlaceDetailSubmissionScreen />} />

          <Route path="/submissions/places/:submissionId/return" element={<PlaceReturnSubmissionScreen />} />

          <Route path="/submissions/descriptions/:submissionId" element={<DescriptionDetailSubmissionScreen />} />

          <Route path="/management/reports" element={<ReportsScreen />} />

          <Route path="/management/place-registration/zone" element={<SelectZoneScreen />} /> {/* cambiar nombre de esto */}
          <Route path="/management/place-registration/candidates" element={<PlaceCandidatesScreen />} />

          <Route path="/management/place-registration/candidates/:candidateId" element={<PlaceDetailCandidatesScreen />} />

          <Route path="/management/deleted-submissions" element={<DeletedSubmissionsScreen />} />

          <Route path="/administration/users"element={<AdministrationUsersScreen />}/>
          <Route path="/administration/users/:userId"element={<AdministrationDetailUserScreen />}/>

          <Route path="/administration/places"element={<AdministrationPlaceScreen />}/>
          <Route path="/administration/places/:placeId" element={<AdministrationDetailPlaceScreen />}/>

          <Route path="/monitoring/summary"element={<MonitoringSummaryScreen />}/>

          <Route path="/monitoring/issues"element={<MonitoringIssuesScreen />}/>

          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
}

export default function AppRoutes() {
  const [authStatus, setAuthStatus] = useState("checking");
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        setAuthStatus("checking");

        if (!firebaseUser) {
          setAdminUser(null);
          setAuthStatus("ready");
          return;
        }

        const admin = await getAdminMeService();

        setAdminUser(admin);
        setAuthStatus("ready");
      } catch (error) {
        console.log("Sesión no autorizada:", error);

        setAdminUser(null);
        await logoutService();

        setAuthStatus("ready");
      }
    });

    return () => unsubscribe();
  }, []);

  if (authStatus === "checking") {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <AppRoutesContent adminUser={adminUser} />
    </BrowserRouter>
  );
}