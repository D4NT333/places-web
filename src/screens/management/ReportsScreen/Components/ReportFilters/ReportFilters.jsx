import {
  CheckCircle2,
  CircleX,
  Clock3,
  LayoutGrid,
} from "lucide-react";

import styles from "./styles";

function getFilterIcon(filterId) {
  if (filterId === "pending") {
    return Clock3;
  }

  if (filterId === "resolved") {
    return CheckCircle2;
  }

  if (filterId === "dismissed") {
    return CircleX;
  }

  return LayoutGrid;
}

export default function ReportFilters({
  filters,
  selectedStatus,
  onChangeStatus,
}) {
  return (
    <div style={styles.container}>
      {filters.map((filter) => {
        const isActive =
          selectedStatus === filter.id;

        const FilterIcon =
          getFilterIcon(filter.id);

        return (
          <button
            key={filter.id}
            type="button"
            style={{
              ...styles.filterButton,

              ...(isActive
                ? styles.filterButtonActive
                : {}),
            }}
            onClick={() =>
              onChangeStatus(filter.id)
            }
          >
            <FilterIcon
              size={38}
              strokeWidth={2.2}
            />

            {filter.label}
          </button>
        );
      })}
    </div>
  );
}