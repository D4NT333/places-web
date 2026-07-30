import {
  CircleHelp,
  MapPinned,
  UserRound,
} from "lucide-react";

import styles from "./styles";

import {
  REPORT_TYPE_LABELS,
} from "../../data";

function getTypeIcon(type) {
  if (type === "place") {
    return MapPinned;
  }

  if (type === "user") {
    return UserRound;
  }

  return CircleHelp;
}

export default function ReportTypePill({
  type,
}) {
  const typeStyle =
    styles.typeVariants[type] ||
    styles.typeVariants.general;

  const TypeIcon =
    getTypeIcon(type);

  return (
    <span
      style={{
        ...styles.pill,
        ...typeStyle,
      }}
    >
      <TypeIcon
        size={40}
        strokeWidth={2.2}
      />

      {REPORT_TYPE_LABELS[type] ||
        "General"}
    </span>
  );
}