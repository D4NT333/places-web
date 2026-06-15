import styles from "./styles";

function formatDate(value) {
  if (!value) return "Sin fecha";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Sin fecha";
  }

  return date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function normalizeStatus(status) {
  if (
    status === "in_review" ||
    status === "inReview" ||
    status === "pending"
  ) {
    return "in_review";
  }

  if (status === "approved" || status === "accepted") {
    return "approved";
  }

  if (status === "rejected") {
    return "rejected";
  }

  return "in_review";
}

function getStatusLabel(status) {
  const normalizedStatus = normalizeStatus(status);

  const labels = {
    in_review: "Pendiente",
    approved: "Aprobada",
    rejected: "Rechazada",
  };

  return labels[normalizedStatus] || "Pendiente";
}

function getStatusStyle(status) {
  const normalizedStatus = normalizeStatus(status);

  if (normalizedStatus === "approved") {
    return styles.statusApproved;
  }

  if (normalizedStatus === "rejected") {
    return styles.statusRejected;
  }

  return styles.statusPending;
}

function getPreviewText(description) {
  const text =
    description.preview ||
    description.proposedDescription ||
    "Sin descripción propuesta.";

  if (text.length <= 110) return text;

  return `${text.slice(0, 110)}...`;
}

export default function DescriptionSubmissionRow({ description, onClick }) {
  const placeName =
    description.placeName ||
    description.placeSnapshot?.name ||
    "Lugar sin nombre";

  const preview = getPreviewText(description);
  const photoUrl = description.placeSnapshot?.mainPhotoUrl;

  return (
    <button type="button" style={styles.row} onClick={onClick}>
      <div style={styles.placeColumn}>
        <div style={styles.placeInfo}>
          <div style={styles.photo}>
            {photoUrl ? (
              <img src={photoUrl} alt={placeName} style={styles.photoImage} />
            ) : (
              <span style={styles.photoText}>Foto</span>
            )}
          </div>

          <div style={styles.placeTextBox}>
            <div style={styles.placeName}>{placeName}</div>
            <div style={styles.placeSubtitle}>Descripción propuesta</div>
          </div>
        </div>
      </div>

      <div style={styles.dateColumn}>
        <span style={styles.dateText}>{formatDate(description.createdAt)}</span>
      </div>

      <div style={styles.previewColumn}>
        <p style={styles.previewText}>{preview}</p>
      </div>

      <div style={styles.statusColumn}>
        <span
          style={{
            ...styles.statusBadge,
            ...getStatusStyle(description.status),
          }}
        >
          {getStatusLabel(description.status)}
        </span>
      </div>
    </button>
  );
}