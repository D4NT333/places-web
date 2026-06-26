import styles from "./styles";

import {
  REPORT_TYPE_LABELS,
} from "../../data";

export default function ReportTypePill({
  type,
}) {
  const typeStyle = styles.typeVariants[type] || styles.typeVariants.general;

  return (
    <span style={{ ...styles.pill, ...typeStyle }}>
      {REPORT_TYPE_LABELS[type] || "General"}
    </span>
  );
}