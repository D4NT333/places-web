import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutScreen from "../../../../layout";

import ActionButtons from "./Components/ActionButtons";
import BackButton from "./Components/BackButton";
import MetaInfo from "./Components/MetaInfo";
import InfoChips from "./Components/InfoChips";
import DescriptionCompare from "./Components/DescriptionCompare";

import { mockDescriptionSubmissionDetail } from "./data";
import styles from "./styles";

export default function DescriptionDetailSubmissionScreen() {
  const navigate = useNavigate();
  const descriptionDetail = mockDescriptionSubmissionDetail;

  const handleAccept = () => {
    console.log("Aceptar descripción:", descriptionDetail.id);
  };

  const handleReject = () => {
    console.log("Rechazar descripción:", descriptionDetail.id);
  };

  const handleBack = () => {
    navigate("/submissions/descriptions");
  };

  return (
    <LayoutScreen>
      <div style={styles.container}>
        <section style={styles.topSection}>
          <div style={styles.titleGroup}>
            <div style={styles.titleRow}>
              <h1 style={styles.title}>{descriptionDetail.placeName}</h1>

              <span style={styles.statusChip}>
                {descriptionDetail.statusLabel}
              </span>
            </div>

            <p style={styles.subtitle}>
              Revisa la descripción actual del lugar y compárala con la nueva
              descripción propuesta por el usuario.
            </p>
          </div>

          <ActionButtons onAccept={handleAccept} onReject={handleReject} />
        </section>

        <section style={styles.contentCard}>
          <MetaInfo
            userName={descriptionDetail.userName}
            createdAt={descriptionDetail.createdAt}
          />

          <InfoChips
            tag={descriptionDetail.tag}
            subtags={descriptionDetail.subtags}
            focus={descriptionDetail.focus}
          />

          <DescriptionCompare
            oldDescription={descriptionDetail.oldDescription}
            newDescription={descriptionDetail.newDescription}
          />
        </section>

        <BackButton onClick={handleBack} />
      </div>
    </LayoutScreen>
  );
}