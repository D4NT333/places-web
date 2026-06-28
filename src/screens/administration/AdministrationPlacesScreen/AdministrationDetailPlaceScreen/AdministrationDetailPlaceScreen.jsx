import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import LayoutScreen from "../../../../layout";

import {PlaceInfoCard,PlaceMediaLocationCard, ValidationInfoCard, CommentsHistoryCard, ReportsCard, WeeklyInteractionsCard, RecentActivityCard, WeeklyViewsChartCard, WeeklySubmissionsChartCard, ProposalsHistoryCard } from "./Components";

import styles from "./styles";

const mockPlace = {
  name: "Café escondido Chapultepec",
  description:
    "Un lugar tranquilo con café artesanal, postres caseros y una terraza pequeña ideal para visitar por la tarde.",
  tagLabel: "Gastronomía",
  subtags: ["Café", "Postres"],
  approaches: ["Local", "Tranquilo"],
  price: "$$",
  schedule: "Lun - Dom · 9:00 AM - 10:00 PM",
  googleRating: 4.5,
  lsearchRating: 4.8,
  moderationStatus: "Publicado",
  activityStatus: "Activo",
  address: "Av. Chapultepec Sur 123, Guadalajara, Jalisco",
  photoIndex: "4/5",
  validatedBy: "Administrador principal",
  source: "Propuesta de usuario",
  creatorName: "Dante Orozco",
  createdAt: "01/04/2026",
  validatedAt: "04/04/2026",
};

const mockComments = [
  {
    user: "Usuario 1",
    date: "02/05/2026",
    rating: "4.8",
  },
  {
    user: "Usuario 2",
    date: "02/05/2026",
    rating: "4.5",
  },
  {
    user: "Usuario 3",
    date: "03/05/2026",
    rating: "5.0",
  },
  {
    user: "Usuario 4",
    date: "04/05/2026",
    rating: "4.2",
  },
];

const mockReports = [
  {
    type: "Reporte de SPAM",
    date: "02/05/2026",
    status: "Pendiente",
  },
  {
    type: "Información incorrecta",
    date: "02/05/2026",
    status: "Pendiente",
  },
];

const mockActivity = [
  "Hace 2h · Usuario guardó el lugar",
  "Hace 5h · Nueva reseña publicada",
  "Ayer · Usuario reportó información incorrecta",
  "Ayer · Usuario dio like",
];

const mockProposals = [
  {
    type: "Descripción",
    date: "01/04/2026",
    status: "Pendiente",
  },
  {
    type: "Fotografías",
    date: "01/04/2026",
    status: "Aceptado",
  },
];

export default function PlaceDetailScreen() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const breadcrumbs = [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Administrar lugares",
      to: "/administration/places",
    },
    {
      label: mockPlace.name || placeId,
    },
  ];

  const handleBack = () => {
    navigate("/administration/places");
  };

  const handleModerate = () => {
    console.log("Abrir modal de moderación");
  };

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
     <header style={styles.headerBlock}>
        <h1 style={styles.title}>Detalle del lugar</h1>

        <p style={styles.subtitle}>
          Revisa información, validación, reportes, actividad y propuestas
          relacionadas con este lugar.
        </p>
      </header>

        <section style={styles.topGrid}>
          <PlaceInfoCard place={mockPlace} onModerate={handleModerate} />

          <PlaceMediaLocationCard place={mockPlace} />
        </section>

        <section style={styles.middleGrid}>
          <div style={styles.leftStack}>
            <ValidationInfoCard place={mockPlace} />

            <ReportsCard reports={mockReports} />
          </div>

          <CommentsHistoryCard comments={mockComments} />
        </section>

        <section style={styles.bottomGrid}>
          <div style={styles.metricsColumn}>
            <WeeklyInteractionsCard
              likes={124}
              reviews={18}
              dwellTime="8m 24s"
            />

            <RecentActivityCard
              activity={mockActivity}
              activityStatus={mockPlace.activityStatus}
            />

            <WeeklyViewsChartCard />
          </div>

          <div style={styles.proposalsColumn}>
            <WeeklySubmissionsChartCard />

            <ProposalsHistoryCard proposals={mockProposals} />
          </div>
        </section>

        <div style={styles.footerActions}>
  <button
    type="button"
    onClick={handleBack}
    style={styles.backButton}
  >
    Volver
  </button>
</div>
      </main>
    </LayoutScreen>
  );
}