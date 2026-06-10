import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import LayoutScreen from "../../../../layout";

import ActionButtons from "./Components/ActionButtons";
import BackButton from "./Components/BackButton";
import MetaInfo from "./Components/MetaInfo";
import InfoChips from "./Components/InfoChips";
import DescriptionCompare from "./Components/DescriptionCompare";

import getDescriptionSubmissionDetailService from "../../../../services/api/submissions/descriptions/read/getDescriptionSubmissionDetail.service";

import styles from "./styles";

const STATUS_LABELS = {
  in_review: "Pendiente",
  approved: "Aprobada",
  rejected: "Rechazada",
};

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function normalizeDescriptionDetail(submission) {
  return {
    id: submission.id || submission.submissionId,

    placeName: submission.placeName || "Lugar sin nombre",

    status: submission.status || "in_review",
    statusLabel:
      STATUS_LABELS[submission.status] || submission.status || "Pendiente",

    userName: submission.createdBy?.name || "Usuario desconocido",
    createdAt: formatDate(submission.createdAt),

    tag: submission.tag?.label || "",

    subtags: Array.isArray(submission.subtags)
      ? submission.subtags.map((subtag) => subtag.label || subtag.id)
      : [],

    focus: Array.isArray(submission.approaches)
      ? submission.approaches.map((approach) => approach.label || approach.id)
      : [],

    oldDescription: submission.currentDescription || "",
    newDescription: submission.proposedDescription || "",
  };
}

export default function DescriptionDetailSubmissionScreen() {
  const navigate = useNavigate();
  const { submissionId } = useParams();

  const [descriptionDetail, setDescriptionDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const normalizedDetail = useMemo(() => {
    if (!descriptionDetail) return null;

    return normalizeDescriptionDetail(descriptionDetail);
  }, [descriptionDetail]);

  useEffect(() => {
    let ignore = false;

    async function loadDescriptionDetail() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const submission = await getDescriptionSubmissionDetailService(
          submissionId
        );

        if (!ignore) {
          setDescriptionDetail(submission);
        }
      } catch (error) {
        if (!ignore) {
          setErrorMessage(
            error.message || "No se pudo cargar la propuesta."
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadDescriptionDetail();

    return () => {
      ignore = true;
    };
  }, [submissionId]);

  const handleAccept = () => {
    if (!normalizedDetail) return;

    console.log("Aceptar descripción:", normalizedDetail.id);
  };

  const handleReject = () => {
    if (!normalizedDetail) return;

    console.log("Rechazar descripción:", normalizedDetail.id);
  };

  const handleBack = () => {
    navigate("/submissions/descriptions");
  };

  if (isLoading) {
    return (
      <LayoutScreen>
        <div style={styles.container}>
          <p style={styles.subtitle}>Cargando propuesta...</p>
        </div>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen>
        <div style={styles.container}>
          <section style={styles.topSection}>
            <div style={styles.titleGroup}>
              <h1 style={styles.title}>No se pudo cargar la propuesta</h1>

              <p style={styles.subtitle}>{errorMessage}</p>
            </div>
          </section>

          <BackButton onClick={handleBack} />
        </div>
      </LayoutScreen>
    );
  }

  if (!normalizedDetail) {
    return (
      <LayoutScreen>
        <div style={styles.container}>
          <section style={styles.topSection}>
            <div style={styles.titleGroup}>
              <h1 style={styles.title}>Propuesta no encontrada</h1>

              <p style={styles.subtitle}>
                La propuesta no existe o ya no está disponible.
              </p>
            </div>
          </section>

          <BackButton onClick={handleBack} />
        </div>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <section style={styles.topSection}>
          <div style={styles.titleGroup}>
            <div style={styles.titleRow}>
              <h1 style={styles.title}>{normalizedDetail.placeName}</h1>

              <span style={styles.statusChip}>
                {normalizedDetail.statusLabel}
              </span>
            </div>

            <p style={styles.subtitle}>
              Revisa la descripción actual del lugar y compárala con la nueva
              descripción propuesta por el usuario.
            </p>
          </div>

          {normalizedDetail.status === "in_review" && (
            <ActionButtons onAccept={handleAccept} onReject={handleReject} />
          )}
        </section>

        <section style={styles.contentCard}>
          <MetaInfo
            userName={normalizedDetail.userName}
            createdAt={normalizedDetail.createdAt}
          />

          <InfoChips
            tag={normalizedDetail.tag}
            subtags={normalizedDetail.subtags}
            focus={normalizedDetail.focus}
          />

          <DescriptionCompare
            oldDescription={normalizedDetail.oldDescription}
            newDescription={normalizedDetail.newDescription}
          />
        </section>

        <BackButton onClick={handleBack} />
      </div>
    </LayoutScreen>
  );
}