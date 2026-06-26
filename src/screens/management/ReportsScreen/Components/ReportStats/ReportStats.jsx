import styles from "./styles";

export default function ReportStats({
  reportsCount,
  batchesCount,
}) {
  return (
    <div style={styles.summaryChips}>
      <div style={styles.summaryChip}>
        Reportes cargados{" "}
        <strong>{reportsCount}</strong>
      </div>

      <div style={styles.summaryChip}>
        <strong>{batchesCount}</strong>{" "}
        {batchesCount === 1
          ? "lote cargado"
          : "lotes cargados"}
      </div>
    </div>
  );
}