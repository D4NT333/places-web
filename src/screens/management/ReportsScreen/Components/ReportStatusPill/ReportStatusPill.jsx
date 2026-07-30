import {
  CheckCircle2,
  CircleX,
  Clock3,
} from "lucide-react";

import styles from "./styles";

import {
  REPORT_STATUS_LABELS,
} from "../../data";

function getStatusIcon(status) {
  if (status === "resolved") {
    return CheckCircle2;
  }

  if (status === "dismissed") {
    return CircleX;
  }

  return Clock3;
}

export default function ReportStatusPill({
  status,
}) {
  const statusStyle =
    styles.statusVariants[status] ||
    styles.statusVariants.pending;

  const StatusIcon =
    getStatusIcon(status);

  return (
    <span
      style={{
        ...styles.pill,
        ...statusStyle,
      }}
    >
      <StatusIcon
        size={40}
        strokeWidth={2.2}
      />

      {REPORT_STATUS_LABELS[status] ||
        "Pendiente"}
    </span>
  );
}