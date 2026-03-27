import styles from "./styles";

export default function PhotoSubmissionCard({
  submission,
  onApprove,
  onReject,
}) {
  const { id, placeName, createdAt, extraPhotosCount, imageUrl } = submission;

  return (
    <article style={styles.card}>
      <div style={styles.imageContainer}>
        <span style={styles.extraPhotosText}>+{extraPhotosCount} Fotos</span>

        {imageUrl ? (
          <img src={imageUrl} alt={placeName} style={styles.image} />
        ) : (
          <div style={styles.imagePlaceholder}>Imagen</div>
        )}
      </div>

      <div style={styles.infoSection}>
        <p style={styles.placeName}>{placeName}</p>

        <div style={styles.bottomRow}>
          <span style={styles.createdAt}>Fecha de creación</span>

          <div style={styles.actions}>
            <button
              type="button"
              style={styles.approveButton}
              onClick={() => onApprove(id)}
            >
              ✓
            </button>

            <button
              type="button"
              style={styles.rejectButton}
              onClick={() => onReject(id)}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}