import React from "react";
import LayoutScreen from "../../../layout/Layout";
import PhotoSubmissionCard from "./Components/PhotoSubmissionCard";
import styles from "./styles";

export default function PhotoSubmissionScreen() {
  const photoSubmissions = [
    {
      id: 1,
      placeName: "Café de prueba",
      createdAt: "21/03/2026",
      extraPhotosCount: 4,
      imageUrl: "",
    },
    {
      id: 2,
      placeName: "Parque central",
      createdAt: "21/03/2026",
      extraPhotosCount: 4,
      imageUrl: "",
    },
    {
      id: 3,
      placeName: "Museo local",
      createdAt: "21/03/2026",
      extraPhotosCount: 4,
      imageUrl: "",
    },
    {
      id: 4,
      placeName: "Restaurante demo",
      createdAt: "21/03/2026",
      extraPhotosCount: 4,
      imageUrl: "",
    },
    {
      id: 5,
      placeName: "Plaza bonita",
      createdAt: "21/03/2026",
      extraPhotosCount: 4,
      imageUrl: "",
    },
    {
      id: 6,
      placeName: "Mirador test",
      createdAt: "21/03/2026",
      extraPhotosCount: 4,
      imageUrl: "",
    },
  ];

  const handleApprove = (id) => {
    console.log("Aprobar submission:", id);
  };

  const handleReject = (id) => {
    console.log("Rechazar submission:", id);
  };

  return (
    <LayoutScreen>
      <main style={styles.content}>
        <section style={styles.grid}>
          {photoSubmissions.map((submission) => (
            <PhotoSubmissionCard
              key={submission.id}
              submission={submission}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </section>
      </main>
    </LayoutScreen>
  );
}