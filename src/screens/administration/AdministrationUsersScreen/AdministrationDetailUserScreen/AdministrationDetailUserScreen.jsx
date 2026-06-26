import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import LayoutScreen from "../../../../layout";

import UserOverviewCard from "./Components/UserOverviewCard";
import ReceivedReportsPanel from "./Components/ReceivedReportsPanel";
import ActivitySummaryCard from "./Components/ActivitySummaryCard";
import UserHistoryPanel from "./Components/UserHistoryPanel";

import styles from "./styles";

const userMock = {
  id: "user_001",
  name: "Usuario",
  profile: "Perfil actual",
  birthdate: "09/09/2008",
  registeredAt: "14/05/2026",
  lastActivityAt: "01/06/2026",
  statusLabel: "Activo",
  photoUrl: null,
};

const receivedReportsMock = [
  {
    id: "report_received_001",
    reason: "Reporte de SPAM",
    date: "02/05/2026",
    statusLabel: "Pendiente",
  },
  {
    id: "report_received_002",
    reason: "Reporte de SPAM",
    date: "02/05/2026",
    statusLabel: "Pendiente",
  },
];

const activityMock = {
  total: 12,
  placesSent: 3,
  descriptionsSent: 3,
  photosSent: 3,
  reportsSent: 3,
  pending: 3,
  approved: 8,
  rejected: 4,
};

const historyMock = [
  {
    id: "history_001",
    type: "Lugar",
    date: "01/04/2026",
    statusLabel: "Pendiente",
  },
  {
    id: "history_002",
    type: "Descripción",
    date: "01/04/2026",
    statusLabel: "Aprobado",
  },
  {
    id: "history_003",
    type: "Fotografías",
    date: "01/04/2026",
    statusLabel: "Rechazado",
  },
  {
    id: "history_004",
    type: "Reporte enviado",
    date: "01/04/2026",
    statusLabel: "Rechazado",
  },
];

export default function AdministrationDetailUserScreen() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const breadcrumbs = [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Administrar usuarios",
      to: "/administration/users",
    },
    {
      label: userMock.name || userId || "Usuario",
    },
  ];

  const handleBack = () => {
    navigate("/administration/users");
  };

  const handleModerateUser = () => {
    console.log("Abrir panel de moderación para:", userId || userMock.id);
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <section style={styles.contentGrid}>
          <div style={styles.leftColumn}>
            <UserOverviewCard
              user={userMock}
              onModerate={handleModerateUser}
            >
              <ReceivedReportsPanel reports={receivedReportsMock} />
            </UserOverviewCard>

            <ActivitySummaryCard activity={activityMock} />
          </div>

          <UserHistoryPanel history={historyMock} />
        </section>

        <div style={styles.actionsRow}>
          <button
            type="button"
            style={styles.backButton}
            onClick={handleBack}
          >
            Volver
          </button>
        </div>
      </main>
    </LayoutScreen>
  );
}