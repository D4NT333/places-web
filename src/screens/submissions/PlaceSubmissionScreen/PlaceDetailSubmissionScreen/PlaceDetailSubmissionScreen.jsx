import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutScreen from "../../../../layout";
import styles from "./styles";

import PhotoCarousel from "./Components/PhotoCarousel";
import LocationBox from "./Components/LocationBox";
import InfoField from "./Components/InfoField";
import Pill from "./Components/Pill";
import ActionButtons from "./Components/ActionButtons";
import getPlaceSubmissionDetailService from "../../../../services/submissions/getPlaceSubmissionDetail.service";

function formatDate(dateString) {
  if (!dateString) return "Sin fecha";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function getStatusLabel(status) {
  const map = {
    in_review: "Pendiente",
    approved: "Aprobado",
    returned: "Devuelto",
    rejected: "Rechazado",
  };

  return map[status] || "Sin estado";
}

export default function PlaceDetailSubmissionScreen() {
  const navigate = useNavigate();
  const { submissionId } = useParams();

  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadSubmissionDetail() {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getPlaceSubmissionDetailService(submissionId);

        console.log("Detalle recibido:", data);

        setSubmission(data);
      } catch (error) {
        console.error("Error cargando detalle:", error);
        setErrorMessage(
          error.message || "No se pudo cargar el detalle de la submission."
        );
      } finally {
        setLoading(false);
      }
    }

    if (submissionId) {
      loadSubmissionDetail();
    }
  }, [submissionId]);

  if (loading) {
    return (
      <LayoutScreen>
        <main style={styles.screen}>
          <p>Cargando detalle...</p>
        </main>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen>
        <main style={styles.screen}>
          <button
            type="button"
            style={styles.backButton}
            onClick={() => navigate(-1)}
          >
            ← Volver
          </button>

          <p>{errorMessage}</p>
        </main>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen>
      <main style={styles.screen}>
        <section style={styles.contentArea}>
          <aside style={styles.leftWrapper}>
            <button
              type="button"
              style={styles.backButton}
              onClick={() => navigate(-1)}
            >
              ← Volver
            </button>

            <div style={styles.leftSection}>
              <PhotoCarousel photos={submission?.photos || []} />
              <LocationBox location={submission?.location} />
            </div>
          </aside>

          <div style={styles.verticalDivider} />

          <section style={styles.rightSection}>
            <div style={styles.topRow}>
              <div style={styles.infoGroup}>
                <InfoField
                  label="Creado el:"
                  value={formatDate(submission?.createdAt)}
                />

                <InfoField
                  label="Enviado por:"
                  value={submission?.userName || "Usuario desconocido"}
                />
              </div>

              <ActionButtons />
            </div>

            <div style={styles.nameStatusRow}>
              <Pill label={submission?.name || "Lugar sin nombre"} size="large" />
              <Pill label={getStatusLabel(submission?.status)} size="large" />
            </div>

            <div style={styles.descriptionBox}>
              {submission?.description || "Sin descripción"}
            </div>

            <div style={styles.chipsRow}>
              <Pill label={submission?.category || "Sin etiqueta"} />

              {(submission?.subtags || []).map((subtag) => (
                <Pill key={subtag} label={subtag} />
              ))}

              {(submission?.focuses || []).map((focus) => (
                <Pill key={focus} label={focus} />
              ))}
            </div>

            <div style={styles.chipsRow}>
              <Pill label={submission?.price || "Sin precio"} size="medium" />
              <Pill label="Horario no disponible" size="medium" />
            </div>
          </section>
        </section>
      </main>
    </LayoutScreen>
  );
}