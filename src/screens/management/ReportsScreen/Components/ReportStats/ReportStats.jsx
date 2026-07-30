import {
  FileWarning,
  Layers3,
} from "lucide-react";

import styles from "./styles";

export default function ReportStats({
  reportsCount,
  batchesCount,
}) {
  return (
    <section style={styles.container}>
      <article style={styles.card}>
        <div style={styles.blueIcon}>
          <FileWarning
            size={40}
            strokeWidth={2.15}
          />
        </div>

        <div style={styles.content}>
          <span style={styles.label}>
            Reportes cargados
          </span>

          <strong style={styles.blueValue}>
            {reportsCount}
          </strong>
        </div>
      </article>

      <article style={styles.card}>
        <div style={styles.greenIcon}>
          <Layers3
            size={40}
            strokeWidth={2.15}
          />
        </div>

        <div style={styles.content}>
          <span style={styles.label}>
            Lotes cargados
          </span>

          <strong style={styles.greenValue}>
            {batchesCount}
          </strong>
        </div>
      </article>
    </section>
  );
}