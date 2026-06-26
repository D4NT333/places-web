import styles from "./styles";

import {
  REPORT_STATUS_LABELS,
} from "../../data";

export default function ReportStatusPill({
  status,
}) {
  const statusStyle = styles.statusVariants[status] || styles.statusVariants.pending;

  return (
    <span style={{ ...styles.pill, ...statusStyle }}>
      {REPORT_STATUS_LABELS[status] || "Pendiente"}
    </span>
  );
}